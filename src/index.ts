import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight,
  LineBasicMaterial, Geometry, Vector3, Line, Color } from 'three';

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

  animate();

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }
};
