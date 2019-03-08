import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight,
  LineBasicMaterial, Geometry, Vector3, Line, Color, PlaneGeometry, MeshBasicMaterial, Mesh } from 'three';
import GUI from 'libs/dat.gui.min';

console.log(GUI);

window.onload = () => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set( 0, 0, 100 );

  const renderer = new WebGLRenderer({
    alpha: true,
  });
  renderer.setClearColor(0x1e1f21);
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.getElementById('waterScene').appendChild(renderer.domElement);

  const controls = function() {
    this.sceneX = 0;
    this.sceneY = 0;
    this.sceneZ = 0;
  };

  const gui = new dat.GUI();
  gui.add(controls, 'sceneX', -100, 100);
  gui.add(controls, 'sceneY', -100, 100);
  gui.add(controls, 'sceneZ', -100, 100);

  initWater();
  animate();

  function initWater() {
    const geometry = new PlaneGeometry(100, 100, 50, 50);
    const material = new MeshBasicMaterial({ color: 0x7a6163, wireframe: true });
    const plane = new Mesh(geometry, material);
    plane.position.set(controls.sceneX, controls.sceneY, controls.sceneZ);
    scene.add(plane);
  }
  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }
};
