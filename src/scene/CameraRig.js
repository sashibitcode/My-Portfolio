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
    this.initHeroCinematicAnimation();
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
      if (index === 0) {
        const scrollWrapper = document.getElementById('hero-scroll-wrapper');
        const heroContent = document.getElementById('hero-content-wrapper');
        if (scrollWrapper) gsap.to(scrollWrapper, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
        if (heroContent) gsap.to(heroContent, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
      }
    }
  }

  initHeroCinematicAnimation() {
    const heroSection = document.getElementById('scene-hero');
    const scrollWrapper = document.getElementById('hero-scroll-wrapper');
    const heroImg = document.getElementById('hero-cinematic-img');
    const heroAura = document.querySelector('.hero-cyber-aura');
    const heroContent = document.getElementById('hero-content-wrapper');

    if (!scrollWrapper || !heroImg) return;

    // Helper: Reset hero portrait & content to pristine 100% visible state
    const resetHeroToVisible = () => {
      gsap.set(scrollWrapper, { opacity: 1, y: 0, scale: 1 });
      if (heroContent) {
        gsap.set(heroContent, { opacity: 1, y: 0 });
      }
    };

    // 1. Initial Cinematic Intro Reveal (Runs once on page load)
    gsap.fromTo(scrollWrapper, 
      { opacity: 0, scale: 1.06, x: -30 },
      { opacity: 1, scale: 1, x: 0, duration: 1.8, ease: 'power3.out', delay: 0.1 }
    );

    if (heroAura) {
      gsap.fromTo(heroAura,
        { opacity: 0, scale: 0.6 },
        { opacity: 0.85, scale: 1, duration: 2.2, ease: 'power2.out', delay: 0.25 }
      );
    }

    // 2. Direct Window Scroll Guarantee: Whenever near the top (scrollY <= 60), ensure full visibility!
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (scrollY <= 60) {
        resetHeroToVisible();
      }
    }, { passive: true });

    // Refresh ScrollTrigger once the image and fonts load
    if (heroImg.complete) {
      ScrollTrigger.refresh();
    } else {
      heroImg.addEventListener('load', () => ScrollTrigger.refresh());
    }
    window.addEventListener('load', () => ScrollTrigger.refresh());

    // 3. Cinematic Two-Way ScrollTrigger: Fades on Scroll Down, Smoothly Reappears on Scroll Up!
    if (heroSection) {
      ScrollTrigger.create({
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.4,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // p: 0 at top, 1 when scrolled past hero
          const p = self.progress;

          // If at or very close to top, immediately restore full opacity
          if (p <= 0.04) {
            resetHeroToVisible();
            return;
          }

          // Smooth two-way opacity: 1 at top -> 0 as you scroll down, and 0 -> 1 as you scroll back up
          const op = Math.max(0, Math.min(1, 1 - (p - 0.04) * 1.45));
          const yOffset = p * 130;
          const sc = 1 - p * 0.06;

          gsap.set(scrollWrapper, {
            opacity: op,
            y: yOffset,
            scale: sc
          });

          if (heroContent) {
            gsap.set(heroContent, {
              opacity: Math.max(0, Math.min(1, 1 - (p - 0.04) * 1.55)),
              y: -p * 90
            });
          }
        },
        onEnterBack: () => {
          resetHeroToVisible();
        },
        onLeaveBack: () => {
          resetHeroToVisible();
        }
      });
    }

    // 3. Interactive 3D Depth Mouse Parallax (Only on desktop/mouse devices)
    if (heroSection && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const handleMouseMove = (e) => {
        const normX = (e.clientX / window.innerWidth - 0.5) * 2;
        const normY = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(heroImg, {
          x: normX * 18,
          y: normY * 12,
          rotationY: normX * 3.5,
          rotationX: -normY * 2.5,
          duration: 1.1,
          ease: 'power2.out'
        });

        if (heroAura) {
          gsap.to(heroAura, {
            x: normX * 32,
            y: normY * 22,
            duration: 1.5,
            ease: 'power2.out'
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(heroImg, {
          x: 0,
          y: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 1.3,
          ease: 'power2.out'
        });
        if (heroAura) {
          gsap.to(heroAura, {
            x: 0,
            y: 0,
            duration: 1.3,
            ease: 'power2.out'
          });
        }
      };

      heroSection.addEventListener('mousemove', handleMouseMove);
      heroSection.addEventListener('mouseleave', handleMouseLeave);
    }
  }
}
