import { Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight,
  LineBasicMaterial, Geometry, Vector3, Line } from 'three';

window.onload = () => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set( 0, 0, 100 );

  const renderer = new WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.body.appendChild(renderer.domElement);

  const material = new LineBasicMaterial( { color: 0x0000ff } );

  const geometry = new Geometry();
  geometry.vertices.push(new Vector3( -10, 0, 0) );
  geometry.vertices.push(new Vector3( 0, 10, 0) );
  geometry.vertices.push(new Vector3( 10, 0, 0) );

  const line = new Line( geometry, material );

  scene.add(line);

  animate();

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }

};
