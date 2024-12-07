// variables
// setting variables:
let SHOW_LABEL = true;
let SHOW_ORBITS = true;
let HIGH_QUALITY_TEXTURES = false;
let SHOW_CONNECTION = false;
let SHOW_VECTORS = false;
let REALISTIC_LIGHTING = true;
let TRUE_ROTATION_SPEEDS = false;
let PAUSED = false;

// program variables
let targetPlanet = null; // Default to the sun
let jwstSelected = false; // Default to the sun
let inEarthSystem = false;
let isCameraLocked = false; // Flag to indicate if the camera is locked to a planet
let isCameraSunLocked = false; // Flag to indicate if the camera is locked to a planet
let sunLockedCameraDistance = 0
let distanceUnit = distanceUnits[0];
let backgroundGrid = backgroundTextures[0];
let birdseye = true;
