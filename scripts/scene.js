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

loadingManager.onLoad = ()=>{ document.getElementById('loading-screen').style.display = 'none' }
loadingManager.onProgress = ( item, loaded, total ) =>  {document.getElementById('loading-progress').textContent = loaded + "/" + total }

export {
    scene,
    camera,
    renderer,
    loadingManager,
    textureLoader,
    exrLoader,
    gltfLoader
};