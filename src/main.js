import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import confetti from 'canvas-confetti';

import { portfolioData } from './data/portfolioData.js';
import { World } from './scene/World.js';
import { CameraRig } from './scene/CameraRig.js';
import { soundManager } from './audio/SoundManager.js';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lenis Smooth Scroll
  const lenis = new Lenis({
    duration: 1.4,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.8
  });

  lenis.on('scroll', (e) => {
    ScrollTrigger.update();
    if (e && e.scroll <= 60) {
      const scrollWrapper = document.getElementById('hero-scroll-wrapper');
      const heroContent = document.getElementById('hero-content-wrapper');
      if (scrollWrapper) gsap.set(scrollWrapper, { opacity: 1, y: 0, scale: 1 });
      if (heroContent) gsap.set(heroContent, { opacity: 1, y: 0 });
    }
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // 2. Initialize Three.js 3D World & Camera Rig
  const container = document.getElementById('webgl-container');
  const world = new World(container);
  const cameraRig = new CameraRig(world);

  // 3. Render Skills into DOM
  renderSkills();

  // 4. Render Projects into DOM
  renderProjects();

  // 5. Setup UI Event Listeners
  setupNavigation(cameraRig);
  setupAudioControls();
  setupThemeToggle(world);
  setupMobileNavigation(cameraRig);
  setupModals();
  setupContactForm();
  setupHoverSounds();
});

function renderSkills() {
  const skillsGrid = document.getElementById('skills-grid');
  if (!skillsGrid) return;

  const categories = [
    { title: "Languages", icon: "⚡", items: portfolioData.skills.languages },
    { title: "Data Analytics", icon: "📊", items: portfolioData.skills.analytics },
    { title: "Python Libraries", icon: "🐍", items: portfolioData.skills.libraries },
    { title: "Databases & Tools", icon: "💾", items: [...portfolioData.skills.databases, ...portfolioData.skills.tools.slice(0, 3)] }
  ];

  skillsGrid.innerHTML = categories.map(cat => `
    <div class="skill-category-card">
      <div class="category-header">
        <span class="category-icon-badge">${cat.icon}</span>
        <h3 class="category-title">${cat.title}</h3>
      </div>
      <div class="skill-items-list">
        ${cat.items.map(item => `
          <div>
            <div class="skill-item-info">
              <span>${item.name}</span>
              <span style="color: var(--primary-cyan);">${item.level}%</span>
            </div>
            <div class="skill-bar-track">
              <div class="skill-bar-fill" style="width: ${item.level}%;"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  projectsGrid.innerHTML = portfolioData.projects.map((proj, i) => `
    <div class="project-card" data-project-id="${proj.id}">
      <div>
        <span class="project-cat-pill">${proj.category}</span>
        <h3 class="project-title">${proj.title}</h3>
        <div class="project-stats-badge">${proj.stats}</div>
        <p class="project-desc">${proj.shortDesc}</p>
        <div class="project-tags">
          ${proj.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
      <div class="project-footer">
        <button class="btn-inspect-modal">
          <span>INSPECT MISSION</span>
          <span>→</span>
        </button>
        <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="social-icon-link" title="Source Code" onclick="event.stopPropagation()">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
      </div>
    </div>
  `).join('');

  // Attach card click handlers for modal
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project-id');
      const project = portfolioData.projects.find(p => p.id === projId);
      if (project) {
        openProjectModal(project);
      }
    });
  });
}

function setupNavigation(cameraRig) {
  document.querySelectorAll('.hud-link-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      soundManager.playClick();
      const targetIndex = parseInt(btn.getAttribute('data-target'), 10);
      cameraRig.flyToScene(targetIndex);
    });
  });

  const exploreBtn = document.getElementById('btn-hero-explore');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      soundManager.playClick();
      cameraRig.flyToScene(3); // Jump to Projects
    });
  }

  const heroContactBtn = document.getElementById('btn-hero-contact');
  if (heroContactBtn) {
    heroContactBtn.addEventListener('click', (e) => {
      e.preventDefault();
      soundManager.playClick();
      cameraRig.flyToScene(5); // Jump to Contact
    });
  }

  const brandLogo = document.getElementById('brand-logo');
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      soundManager.playClick();
      cameraRig.flyToScene(0);
    });
  }
}

function setupAudioControls() {
  const audioBtn = document.getElementById('btn-toggle-audio');
  const label = document.getElementById('audio-btn-label');
  const mobileAudioBtn = document.getElementById('btn-mobile-audio');
  const mobileLabel = document.getElementById('mobile-audio-label');

  const updateUI = (isPlaying) => {
    if (audioBtn) {
      audioBtn.classList.toggle('audio-active', isPlaying);
      audioBtn.classList.toggle('active', isPlaying);
    }
    if (mobileAudioBtn) {
      mobileAudioBtn.classList.toggle('audio-active', isPlaying);
      mobileAudioBtn.classList.toggle('active', isPlaying);
    }
    if (label) label.innerText = isPlaying ? 'AUDIO: ON' : 'AUDIO: OFF';
    if (mobileLabel) mobileLabel.innerText = isPlaying ? 'AUDIO: ON' : 'AUDIO: OFF';
  };

  const handleToggle = () => {
    const isPlaying = soundManager.toggleSound();
    updateUI(isPlaying);
  };

  if (audioBtn) audioBtn.addEventListener('click', handleToggle);
  if (mobileAudioBtn) mobileAudioBtn.addEventListener('click', handleToggle);
}

function setupThemeToggle(world) {
  const themeBtn = document.getElementById('btn-toggle-theme');
  const themeIcon = document.getElementById('theme-btn-icon');
  const themeLabel = document.getElementById('theme-btn-label');
  if (!themeBtn) return;

  const savedTheme = localStorage.getItem('sr_portfolio_theme') || 'dark';
  applyTheme(savedTheme, false);

  function applyTheme(theme, playSfx = true) {
    if (playSfx) soundManager.playClick();
    const isLight = theme === 'light';
    document.body.classList.toggle('theme-light', isLight);
    themeBtn.classList.toggle('active', isLight);

    if (themeIcon) themeIcon.innerText = isLight ? '☀️' : '🌙';
    if (themeLabel) themeLabel.innerText = isLight ? 'LIGHT' : 'DARK';

    world.setTheme(theme);
    localStorage.setItem('sr_portfolio_theme', theme);
  }

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('theme-light') ? 'light' : 'dark';
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme, true);
  });
}

function setupMobileNavigation(cameraRig) {
  const mobileMenuBtn = document.getElementById('btn-mobile-menu');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  const mobileBackdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('btn-close-mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileResumeBtn = document.getElementById('btn-mobile-resume');
  const resumeModal = document.getElementById('resume-modal');

  if (!mobileDrawer) return;

  const openDrawer = () => {
    soundManager.playClick();
    mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      soundManager.playClick();
      closeDrawer();
    });
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeDrawer);
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      soundManager.playClick();
      const targetIndex = parseInt(link.getAttribute('data-target'), 10);
      closeDrawer();
      setTimeout(() => {
        cameraRig.flyToScene(targetIndex);
      }, 250);
    });
  });

  if (mobileResumeBtn) {
    mobileResumeBtn.addEventListener('click', () => {
      closeDrawer();
      if (resumeModal) resumeModal.classList.add('open');
    });
  }
}

function setupModals() {
  // Resume Modal
  const resumeModal = document.getElementById('resume-modal');
  const btnViewResume = document.getElementById('btn-view-resume');
  const btnHeroResume = document.getElementById('btn-hero-resume');
  const btnCloseResume = document.getElementById('btn-close-resume-modal');

  const openResume = () => {
    soundManager.playClick();
    if (resumeModal) resumeModal.classList.add('open');
  };

  const closeResume = () => {
    soundManager.playClick();
    if (resumeModal) resumeModal.classList.remove('open');
  };

  if (btnViewResume) btnViewResume.addEventListener('click', openResume);
  if (btnHeroResume) btnHeroResume.addEventListener('click', openResume);
  if (btnCloseResume) btnCloseResume.addEventListener('click', closeResume);

  // Close modals on backdrop click
  [resumeModal, document.getElementById('project-modal')].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          soundManager.playClick();
        }
      });
    }
  });

  const btnCloseProj = document.getElementById('btn-close-project-modal');
  if (btnCloseProj) {
    btnCloseProj.addEventListener('click', () => {
      document.getElementById('project-modal')?.classList.remove('open');
      soundManager.playClick();
    });
  }
}

function openProjectModal(project) {
  soundManager.playClick();
  const modal = document.getElementById('project-modal');
  const body = document.getElementById('modal-project-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <span class="project-cat-pill">${project.category}</span>
    <h2 style="font-family: var(--font-heading); font-size: 2rem; margin: 12px 0;">${project.title}</h2>
    <div class="project-stats-badge" style="display: inline-block; margin-bottom: 20px;">${project.stats}</div>
    <p style="font-size: 1.05rem; line-height: 1.7; color: #cbd5e1; margin-bottom: 24px;">${project.shortDesc}</p>
    
    <h4 style="font-family: var(--font-display); font-size: 0.9rem; color: var(--primary-cyan); margin-bottom: 12px; letter-spacing: 0.1em;">KEY ANALYTICAL HIGHLIGHTS</h4>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px; margin-bottom: 28px;">
      ${project.highlights.map(h => `
        <li style="display: flex; gap: 10px; align-items: flex-start; font-size: 0.95rem; color: #e2e8f0;">
          <span style="color: var(--primary-cyan);">▹</span>
          <span>${h}</span>
        </li>
      `).join('')}
    </ul>

    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
      <div class="project-tags" style="margin-bottom: 0;">
        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary" style="padding: 10px 20px; font-size: 0.8rem;">
        <span>VIEW REPOSITORY</span>
        <span>↗</span>
      </a>
    </div>
  `;

  modal.classList.add('open');
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('btn-submit-form');
  const formStatus = document.getElementById('form-status');
  if (!form || !submitBtn) return;

  const ACCESS_KEY = "42d16f4b-03e8-4fb4-b5d6-dfff2cc56dac";

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('sender-name')?.value.trim();
    const email = document.getElementById('sender-email')?.value.trim();
    const message = document.getElementById('sender-message')?.value.trim();

    if (!name || !email || !message) return;

    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.8';
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.innerHTML = `<span>TRANSMITTING DATA...</span> <span>📡</span>`;

    if (formStatus) {
      formStatus.style.display = 'none';
      formStatus.textContent = '';
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: name,
          email: email,
          message: message,
          subject: `Portfolio Transmission from ${name}`
        })
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        soundManager.playWhoosh();

        // Trigger Cyber Confetti Celebration
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#00f0ff', '#38bdf8', '#8b5cf6', '#d946ef', '#ffffff']
        });

        submitBtn.innerHTML = `<span>TRANSMISSION CONFIRMED ✓</span>`;
        submitBtn.style.background = '#10b981';

        if (formStatus) {
          formStatus.style.display = 'block';
          formStatus.style.color = '#34d399';
          formStatus.textContent = 'SIGNAL RECEIVED. MESSAGE TRANSMITTED SUCCESSFULLY!';
        }

        form.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalBtnHtml;
          submitBtn.style.background = '';
          submitBtn.style.opacity = '1';
          submitBtn.style.cursor = 'pointer';
          submitBtn.disabled = false;
          if (formStatus) formStatus.style.display = 'none';
        }, 5000);
      } else {
        throw new Error(result.message || 'Transmission failed.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      submitBtn.innerHTML = `<span>TRANSMISSION FAILED ✖</span>`;
      submitBtn.style.background = '#ef4444';

      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.style.color = '#f87171';
        formStatus.textContent = 'TRANSMISSION ERROR. PLEASE TRY AGAIN OR EMAIL DIRECTLY.';
      }

      setTimeout(() => {
        submitBtn.innerHTML = originalBtnHtml;
        submitBtn.style.background = '';
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
        submitBtn.disabled = false;
      }, 4000);
    }
  });
}

function setupHoverSounds() {
  document.querySelectorAll('button, a, .project-card, .metric-box, .cert-card').forEach(el => {
    el.addEventListener('mouseenter', () => soundManager.playHover());
  });
}
