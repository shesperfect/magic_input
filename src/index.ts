import {
  Scene, PerspectiveCamera, WebGLRenderer, DirectionalLight,
  LineBasicMaterial, Geometry, Vector3, Line, Color, PlaneBufferGeometry,
  MeshPhongMaterial, Mesh,
} from 'three';
import * as dat from 'dat.gui';
import * as OrbitControls from 'three-orbitcontrols';

window.onload = () => {
  let scene, renderer, camera;
  let waterMesh;
  let controls, orbitControls;

  init();
  animate();

  function init() {
    scene = new Scene();
    camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 100);

    renderer = new WebGLRenderer({
      alpha: true,
    });
    renderer.setClearColor(0x1e1f21);
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById('waterScene').appendChild(renderer.domElement);

    initWater();
    initControls();
  }

  function initWater() {
    const geometry = new PlaneBufferGeometry(100, 100, 50, 50);
    const material = new MeshPhongMaterial({ color: 0x7a6163, wireframe: false });
    waterMesh = new Mesh(geometry, material);
    waterMesh.rotation.x = -1.1;
    scene.add(waterMesh);

    const sun = new DirectionalLight();
    scene.add(sun);
  }

  function initControls() {
    controls = {
      waterRotationX: 0,
      waterRotationY: 0,
      waterRotationZ: 0,
      enableWireFrame: false,
    };

    const gui = new dat.GUI();
    gui.add(controls, 'waterRotationX', -2, 1, 0.01).onChange(() => waterMesh.rotation.x = controls.waterRotationX);
    gui.add(controls, 'waterRotationY', -1, 1, 0.01).onChange(() => waterMesh.rotation.y = controls.waterRotationY);
    gui.add(controls, 'waterRotationZ', -1, 1, 0.01).onChange(() => waterMesh.rotation.z = controls.waterRotationZ);
    gui.add(controls, 'enableWireFrame').onChange(() => waterMesh.material.wireframe = controls.enableWireFrame);

    // orbit controls
    orbitControls = new OrbitControls(camera, renderer.domElement);

  }

  function animate() {
    requestAnimationFrame(animate);

    renderer.render(scene, camera);
  }
};
