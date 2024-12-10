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
let STANDARD_FOV = 75

// program variables
let targetPlanet = null; // Default to the sun
let spacecraft = null
let spacecraftSelected = false;
let spacecraftFirstPerson = false;
let spacecraftLight = false;
let spacecraftGravity = false;
let spacecraftMatchVelocity = false;
let jwstSelected = false;
let inEarthSystem = false;
let isCameraLocked = false; // Flag to indicate if the camera is locked to a planet | todo: change back
let isCameraSunLocked = false; // Flag to indicate if the camera is locked to a planet
let sunLockedCameraDistance = 0
let distanceUnit = distanceUnits[0];
let backgroundGrid = backgroundTextures[0];
let birdseye = true;

// keys
let forwardPressed = false;
let backwardPressed = false;
let portPressed = false;
let starboardPressed = false;
let rotatePortPressed = false;
let rotateStarboardPressed = false;
let handbrakePressed = false;

