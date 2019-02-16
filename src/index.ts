import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

const bodyColor = "rgba(23, 17, 20. 1)";

window.onload = () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
};
