import * as THREE from 'three';

export class World {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Mouse tracking for 3D parallax
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.clock = new THREE.Clock();

    this.initScene();
    this.initLights();
    this.initHeroPortrait();
    this.initStarfield();
    this.initWarpTunnel();
    this.initFloatingNodes();
    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x050711, 0.015);

    this.camera = new THREE.PerspectiveCamera(50, this.width / this.height, 0.1, 1000);
    // Initial camera position for Hero scene
    this.camera.position.set(0, 0, 15);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.setClearColor(0x050711, 1);

    this.container.appendChild(this.renderer.domElement);
  }

  initLights() {
    // Ambient cosmic base
    this.ambientLight = new THREE.AmbientLight(0x1a223f, 1.8);
    this.scene.add(this.ambientLight);

    // Primary cyan hero key light
    this.keyLight = new THREE.DirectionalLight(0x00f0ff, 2.5);
    this.keyLight.position.set(5, 8, 12);
    this.scene.add(this.keyLight);

    // Violet neon rim light
    this.rimLight = new THREE.DirectionalLight(0x8a2be2, 3.2);
    this.rimLight.position.set(-8, -4, 8);
    this.scene.add(this.rimLight);

    // Dynamic mouse-following point light for 3D specular shine
    this.pointerLight = new THREE.PointLight(0x38bdf8, 2.0, 20);
    this.pointerLight.position.set(0, 0, 10);
    this.scene.add(this.pointerLight);
  }

  initHeroPortrait() {
    // 3D Holographic Gyro & Tech Rings in Background behind Hero Showcase
    this.heroGroup = new THREE.Group();
    this.heroBaseX = -3.8;
    this.heroBaseY = 0.2;
    this.pageTurnProgress = 0;
    this.heroGroup.position.set(this.heroBaseX, this.heroBaseY, -3);

    // Floating 3D Orbital Gyro Rings around Shashikant's Hero Area
    this.rings = [];
    const ringRadii = [4.5, 5.8, 7.0];
    const ringColors = [0x00f0ff, 0x818cf8, 0xd946ef];

    ringRadii.forEach((radius, i) => {
      const ringGeo = new THREE.TorusGeometry(radius, 0.035, 16, 120);
      const ringMat = new THREE.MeshBasicMaterial({
        color: ringColors[i],
        transparent: true,
        opacity: 0.45 - i * 0.1
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.rotation.x = Math.PI * 0.3 + i * 0.25;
      ringMesh.rotation.y = Math.PI * 0.2 * i;
      this.heroGroup.add(ringMesh);
      this.rings.push(ringMesh);
    });

    // Outer cybernetic tick marks
    const ticksCount = 48;
    const ticksGeo = new THREE.BufferGeometry();
    const tickPositions = [];
    for (let i = 0; i < ticksCount; i++) {
      const angle = (i / ticksCount) * Math.PI * 2;
      const r1 = 7.4;
      const r2 = 7.9;
      tickPositions.push(Math.cos(angle) * r1, Math.sin(angle) * r1, 0);
      tickPositions.push(Math.cos(angle) * r2, Math.sin(angle) * r2, 0);
    }
    ticksGeo.setAttribute('position', new THREE.Float32BufferAttribute(tickPositions, 3));
    const ticksMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35 });
    this.ticksLine = new THREE.LineSegments(ticksGeo, ticksMat);
    this.heroGroup.add(this.ticksLine);

    this.scene.add(this.heroGroup);
  }

  initStarfield() {
    // 7,500 Starfield particles with subtle color drift
    const starCount = 7500;
    const starGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    const colorChoices = [
      new THREE.Color(0x00f0ff), // Cyan
      new THREE.Color(0x38bdf8), // Sky blue
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xd946ef), // Magenta
      new THREE.Color(0xffffff)  // White
    ];

    for (let i = 0; i < starCount; i++) {
      const idx = i * 3;
      // Cylinder distribution along camera flight path (Z: -250 to +50)
      positions[idx] = (Math.random() - 0.5) * 140;
      positions[idx + 1] = (Math.random() - 0.5) * 140;
      positions[idx + 2] = Math.random() * 320 - 260;

      const c = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[idx] = c.r;
      colors[idx + 1] = c.g;
      colors[idx + 2] = c.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Canvas particle texture for smooth round glowing stars
    const particleTexture = this.generateParticleTexture();

    const starMat = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      map: particleTexture,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.stars = new THREE.Points(starGeo, starMat);
    this.scene.add(this.stars);
  }

  generateParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(0, 240, 255, 0.8)');
    grad.addColorStop(0.7, 'rgba(129, 140, 248, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }

  initWarpTunnel() {
    // 3D Hyperspace Warp Tunnel for Scene 5
    const tunnelGeo = new THREE.CylinderGeometry(18, 18, 120, 32, 40, true);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    });
    this.tunnel = new THREE.Mesh(tunnelGeo, wireMat);
    this.tunnel.rotation.x = Math.PI / 2;
    this.tunnel.position.set(0, 0, -140);
    this.scene.add(this.tunnel);

    // Glowing Neon Runway Ground Grid (Scene 4 - Projects)
    const gridGeo = new THREE.PlaneGeometry(80, 120, 40, 60);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    this.groundGrid = new THREE.Mesh(gridGeo, gridMat);
    this.groundGrid.rotation.x = -Math.PI / 2;
    this.groundGrid.position.set(0, -10, -80);
    this.scene.add(this.groundGrid);
  }

  initFloatingNodes() {
    // Floating 3D Geometric Data Nodes representing Analytics & ML
    this.floatingNodes = [];
    const geometries = [
      new THREE.IcosahedronGeometry(1.2, 0),
      new THREE.OctahedronGeometry(1.0, 0),
      new THREE.DodecahedronGeometry(1.1, 0),
      new THREE.TetrahedronGeometry(1.3, 0)
    ];

    const materials = [
      new THREE.MeshStandardMaterial({ color: 0x00f0ff, wireframe: true, emissive: 0x004455 }),
      new THREE.MeshStandardMaterial({ color: 0x8b5cf6, wireframe: true, emissive: 0x331166 }),
      new THREE.MeshStandardMaterial({ color: 0xec4899, wireframe: true, emissive: 0x551133 }),
      new THREE.MeshStandardMaterial({ color: 0x10b981, wireframe: true, emissive: 0x004422 })
    ];

    for (let i = 0; i < 24; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      // Distribute along the scene depth
      const zPos = -15 - (i * 8.5);
      const angle = (i * 0.8);
      const radius = 10 + Math.random() * 8;

      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.6,
        zPos
      );

      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatFreq: 1 + Math.random(),
        originalY: mesh.position.y
      };

      this.scene.add(mesh);
      this.floatingNodes.push(mesh);
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      this.heroBaseX = 0;
      this.heroBaseY = 0;
    });

    window.addEventListener('mousemove', (e) => {
      // Normalized mouse coordinates (-1 to 1)
      this.mouse.targetX = (e.clientX / this.width) * 2 - 1;
      this.mouse.targetY = -(e.clientY / this.height) * 2 + 1;
    });

    // Touch support for mobile parallax
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.targetX = (e.touches[0].clientX / this.width) * 2 - 1;
        this.mouse.targetY = -(e.touches[0].clientY / this.height) * 2 + 1;
      }
    }, { passive: true });
  }

  setPageTurnProgress(p) {
    this.pageTurnProgress = Math.max(0, Math.min(1, p));
  }

  setTheme(mode) {
    const isLight = mode === 'light';
    if (isLight) {
      if (this.scene.fog) this.scene.fog.color.setHex(0xf8fafc);
      this.renderer.setClearColor(0xf8fafc, 1);
      if (this.ambientLight) this.ambientLight.color.setHex(0xe2e8f0);
      if (this.keyLight) this.keyLight.color.setHex(0x0284c7);
      if (this.rimLight) this.rimLight.color.setHex(0x9333ea);
    } else {
      if (this.scene.fog) this.scene.fog.color.setHex(0x050711);
      this.renderer.setClearColor(0x050711, 1);
      if (this.ambientLight) this.ambientLight.color.setHex(0x1a223f);
      if (this.keyLight) this.keyLight.color.setHex(0x00f0ff);
      if (this.rimLight) this.rimLight.color.setHex(0x8a2be2);
    }
  }

  animate() {
    requestAnimationFrame(this.animate);
    const elapsedTime = this.clock.getElapsedTime();

    // Smooth mouse lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // 3D Hero Parallax & 3D Book Page-Flip Movement
    if (this.heroGroup) {
      const turn = this.pageTurnProgress || 0;
      // 3D page turn offset & depth translation
      this.heroGroup.position.x = this.heroBaseX - turn * 9.5;
      this.heroGroup.position.y = this.heroBaseY + Math.sin(elapsedTime * 1.5) * 0.15;
      this.heroGroup.position.z = -turn * 8.0;

      // Realistic 3D Tilt based on mouse PLUS 3D book page curl rotation
      this.heroGroup.rotation.y = (this.mouse.x * 0.35) - (turn * Math.PI * 0.65);
      this.heroGroup.rotation.x = -this.mouse.y * 0.25;
      this.heroGroup.rotation.z = turn * 0.15;

      // Scale down smoothly as page 1 turns out
      const s = Math.max(0.001, 1 - turn * 0.5);
      this.heroGroup.scale.set(s, s, s);

      // Rotate orbital rings
      if (this.rings) {
        this.rings.forEach((ring, i) => {
          ring.rotation.z += 0.004 * (i % 2 === 0 ? 1 : -1);
          ring.rotation.x += 0.002 * (i + 1);
        });
      }

      if (this.ticksLine) {
        this.ticksLine.rotation.z -= 0.0015;
      }
    }

    // Dynamic light movement
    if (this.pointerLight) {
      this.pointerLight.position.x = this.mouse.x * 12;
      this.pointerLight.position.y = this.mouse.y * 10;
    }

    // Rotate starfield slowly
    if (this.stars) {
      this.stars.rotation.z = elapsedTime * 0.015;
    }

    // Animate tunnel and runway grid
    if (this.tunnel) {
      this.tunnel.rotation.z = elapsedTime * 0.05;
    }
    if (this.groundGrid) {
      this.groundGrid.position.z = -80 + ((elapsedTime * 10) % 20);
    }

    // Animate floating tech nodes
    this.floatingNodes.forEach((node) => {
      node.rotation.x += node.userData.rotSpeedX;
      node.rotation.y += node.userData.rotSpeedY;
      node.position.y = node.userData.originalY + Math.sin(elapsedTime * node.userData.floatFreq) * 0.8;
    });

    this.renderer.render(this.scene, this.camera);
  }
}
