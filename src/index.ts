import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera";
import { WebGLRenderer } from "three/src/renderers/WebGLRenderer";
import { Scene } from "three/src/scenes/Scene";
import { PlaneBufferGeometry } from "three/src/geometries/PlaneGeometry";
import { Mesh } from "three/src/objects/Mesh";
import { ShaderMaterial } from "three/src/materials/ShaderMaterial";

import * as OrbitControls from 'three-orbitcontrols';

window.onload = () => {
  const camera = new PerspectiveCamera(45, innerWidth/innerHeight, 0, 1000);
  camera.position.set(0,0,100);

  const renderrer = new WebGLRenderer();
  const scene = new Scene();

  document.body.appendChild(renderrer.domElement);

  const geometry = new PlaneBufferGeometry(100, 100, 50, 50);
  const material = new ShaderMaterial({ wireframe: true });
  const planeMesh = new Mesh(geometry, material);
  planeMesh.position.set(0, 0, 0);
  scene.add(planeMesh);

  const orbitControls = new OrbitControls(camera, renderrer.domElement);

  animate();

  function render() {}

  function animate() {
    requestAnimationFrame(animate);
    render();
    renderrer.render(scene, camera);
  }
};
