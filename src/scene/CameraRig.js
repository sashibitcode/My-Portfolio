import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { soundManager } from '../audio/SoundManager.js';

gsap.registerPlugin(ScrollTrigger);

export class CameraRig {
  constructor(world) {
    this.world = world;
    this.camera = world.camera;
    this.currentPage = 0;

    this.sectionIds = [
      'scene-hero',
      'scene-about',
      'scene-skills',
      'scene-projects',
      'scene-experience',
      'scene-contact'
    ];

    this.sceneTitles = [
      "ACT I // THE 8K AWAKENING",
      "ACT II // THE DATA ARCHITECT",
      "ACT III // THE ANALYTICS ARSENAL",
      "ACT IV // MISSION TELEMETRY",
      "ACT V // EXPEDITIONS & CREDENTIALS",
      "ACT VI // SUB-SPACE UPLINK"
    ];

    this.cameraKeyframes = [
      { x: 0, y: 0, z: 15, rotX: 0, rotY: 0 },
      { x: 1.2, y: 0.4, z: 5, rotX: -0.03, rotY: 0.05 },
      { x: -1.6, y: 0.6, z: -25, rotX: 0.04, rotY: -0.05 },
      { x: 0, y: -0.4, z: -68, rotX: 0.02, rotY: 0.03 },
      { x: 1.4, y: 0.5, z: -115, rotX: -0.02, rotY: 0.04 },
      { x: 0, y: 0, z: -168, rotX: 0, rotY: 0 }
    ];

    this.initScrollChoreography();
    this.initHeroPortraitTilt();
  }

  initScrollChoreography() {
    const actBadge = document.getElementById('cinema-act-badge');
    const progressBar = document.getElementById('scroll-progress-fill');
    const navButtons = document.querySelectorAll('.hud-link-btn');

    // Global scroll progress line & continuous camera interpolation
    ScrollTrigger.create({
      trigger: '#scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.8,
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 to 1.0

        if (progressBar) {
          progressBar.style.width = `${progress * 100}%`;
        }

        // Smooth camera flight between keyframes based on overall progress
        const segmentCount = this.cameraKeyframes.length - 1;
        const scaledProgress = progress * segmentCount;
        const currentSegment = Math.min(Math.floor(scaledProgress), segmentCount - 1);
        const segmentFraction = scaledProgress - currentSegment;

        const k1 = this.cameraKeyframes[currentSegment];
        const k2 = this.cameraKeyframes[currentSegment + 1];

        if (k1 && k2) {
          this.camera.position.x = k1.x + (k2.x - k1.x) * segmentFraction;
          this.camera.position.y = k1.y + (k2.y - k1.y) * segmentFraction;
          this.camera.position.z = k1.z + (k2.z - k1.z) * segmentFraction;
        }
      }
    });

    // Individual Section Triggers to detect active act, update badges, nav, and SFX
    this.sectionIds.forEach((id, index) => {
      const section = document.getElementById(id);
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: 'top 55%',
        end: 'bottom 45%',
        onEnter: () => this.setActiveScene(index, actBadge, navButtons),
        onEnterBack: () => this.setActiveScene(index, actBadge, navButtons)
      });
    });

    // Set initial active scene
    this.setActiveScene(0, actBadge, navButtons, false);
  }

  setActiveScene(index, actBadge, navButtons, playSound = true) {
    if (this.currentPage === index && !playSound) return;

    if (this.currentPage !== index && playSound) {
      soundManager.playPageTurn();
    }
    this.currentPage = index;

    // Update Act indicator badge
    if (actBadge && this.sceneTitles[index]) {
      actBadge.innerText = this.sceneTitles[index];
      actBadge.classList.remove('pulse-highlight');
      void actBadge.offsetWidth;
      actBadge.classList.add('pulse-highlight');
    }

    // Update Navbar active state
    if (navButtons && navButtons.length > index) {
      navButtons.forEach((btn, i) => {
        if (i === index) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    }
  }

  flyToScene(index) {
    if (index < 0 || index >= this.sectionIds.length) return;
    const targetSection = document.getElementById(this.sectionIds[index]);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  initHeroPortraitTilt() {
    const card = document.getElementById('hero-portrait-card');
    const heroSection = document.getElementById('scene-hero');
    if (!card || !heroSection) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const cardX = rect.left + rect.width / 2;
      const cardY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - cardX) / (rect.width / 2);
      const deltaY = (e.clientY - cardY) / (rect.height / 2);

      // Maximum 12 degrees rotation
      const rotY = deltaX * 12;
      const rotX = -deltaY * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);
  }
}
