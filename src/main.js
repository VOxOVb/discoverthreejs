import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    Color
} from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";
// import { GLTFLoader } from "three/examples/jsm/Addons.js";

const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();

//  Set the background color
scene.background = new Color('skyblue');
const fov = 35; // AKA Field of view
const aspect = container.clientWidth / container.clientHeight; 
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0)
// move the camera back so we can view the scene
camera.position.set(0, 0, 10); // or camera.position.z = 10;

const renderer = new WebGLRenderer();
// set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);
// set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

const length = 2;
const width = 2;
const depth = 2;
const geometry = new BoxGeometry(length, width, depth);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

const mesh = new Mesh(geometry, material);
// we can access the geometry and material at any time using _mesh_.geometry and _mesh_.material.

// add the mesh to the scene
scene.add(mesh);
// if we want to remove it, we can use scene.remove(_mesh_). Once the mesh has been added to the scene, we call the mesh a child of the scene, and we call the scene the parent of the mesh.

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);