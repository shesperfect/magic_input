import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight,
  LineBasicMaterial, Geometry, Vector3, Line, Color, PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';
import * as dat from 'dat.gui';

window.onload = () => {
  // variables
  let plane;
  let controls;

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set( 0, 0, 100 );

  const renderer = new WebGLRenderer({
    alpha: true,
  });
  renderer.setClearColor(0x1e1f21);
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.getElementById('waterScene').appendChild(renderer.domElement);

  initWater();
  initControls();
  animate();

  function initControls() {
    controls = {
      sceneX: 0,
      sceneY: 0,
      sceneZ: 0,
      cameraX: 0,
      cameraY: 0,
      cameraZ: 0,
    };

    const gui = new dat.GUI();
    gui.add(controls, 'sceneX', -100, 100).onChange(() => plane.position.x = controls.sceneX);
    gui.add(controls, 'sceneY', -100, 100).onChange(() => plane.position.y = controls.sceneY);
    gui.add(controls, 'sceneZ', -100, 100).onChange(() => plane.position.z = controls.sceneZ);
    gui.add(controls, 'cameraX', -100, 100).onChange(() => camera.position.x = controls.cameraX);
    gui.add(controls, 'cameraY', -100, 100).onChange(() => camera.position.y = controls.cameraY);
    gui.add(controls, 'cameraZ', -100, 100).onChange(() => camera.position.z = controls.cameraZ);
  }

  function initWater() {
    const geometry = new PlaneGeometry(100, 100, 50, 50);
    const material = new MeshBasicMaterial({ color: 0x7a6163, wireframe: false });
    plane = new Mesh(geometry, material);
    scene.add(plane);
  }
  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }
};
