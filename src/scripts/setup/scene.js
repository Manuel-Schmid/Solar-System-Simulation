import * as THREE from "three";
import {EXRLoader, GLTFLoader, TrackballControls} from "three/addons";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
//
// const originalWarn = console.warn;
// console.warn = function (message) {
//     if (message.includes('THREE.Material')) return; // Ignore specific warnings
//     originalWarn.apply(console, arguments); // Call original console.warn if message doesn't match
// };

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(STANDARD_FOV, window.innerWidth / window.innerHeight, 0.000001, 1000 );
const renderer = new THREE.WebGLRenderer({antialias: true});
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loadingManager);
const exrLoader = new EXRLoader(loadingManager);
const gltfLoader = new GLTFLoader(loadingManager);
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// lighting
const sunLight = new THREE.PointLight(0xffffff, 3, 1000);
sunLight.position.set(0, 0, 0);
sunLight.decay = 0;
const softAmbientLight = new THREE.AmbientLight(0x404040, 0.7); // Soft white ambient light
const brightAmbientLight = new THREE.AmbientLight(0xffffff, 2.5);

// camera controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.dampingFactor = 0.1; // damping for rotation/panning
controls.screenSpacePanning = true;

controls.enableZoom = false;
controls.rotateSpeed = 0.7;

const controls2 = new TrackballControls(camera, renderer.domElement);
controls2.noRotate = true;
controls2.noPan = true;
controls2.noZoom = false;
controls2.zoomSpeed = 1;
controls2.dynamicDampingFactor = 0.15; // damping for zooming

// fov
export function adjustFOV(targetFov, animation=true) {
    if (animation) camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 0.1);
    else camera.fov = targetFov
    camera.updateProjectionMatrix();
}

export {
    scene,
    camera,
    renderer,
    controls,
    controls2,
    loadingManager,
    textureLoader,
    exrLoader,
    gltfLoader,
    sunLight,
    softAmbientLight,
    brightAmbientLight
};
