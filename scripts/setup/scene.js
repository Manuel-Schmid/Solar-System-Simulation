import * as THREE from "three";
import {EXRLoader, GLTFLoader} from "three/addons";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.00001, 1000 );
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

export {
    scene,
    camera,
    renderer,
    loadingManager,
    textureLoader,
    exrLoader,
    gltfLoader,
    sunLight,
    softAmbientLight,
    brightAmbientLight
};