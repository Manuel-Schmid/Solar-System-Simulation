// already in interface
let PAUSED = false;
let SHOW_LABEL = true;
let SHOW_ORBITS = true;
let HIGH_QUALITY_TEXTURES = false;
let SHOW_VECTORS = false;
let REALISTIC_LIGHTING = true;
let TRUE_ROTATION_SPEEDS = false;
let ACTIVE_ASCENSION_AXIS = true;
let spacecraftFirstPerson = false;
let spacecraftGravity = false;
let spacecraftMatchVelocity = false;
let spacecraftLight = false;
let distanceUnit = distanceUnits[0];
let backgroundGrid = backgroundTextures[0];



// todo
let isCameraLocked = false;
let isCameraSunLocked = false;

// target selection:
let targetPlanet = null; // Default to the sun
let spacecraft = null
let spacecraftSelected = false;
let jwstSelected = false;

// program variables
let SHOW_CONNECTION = false;
let STANDARD_FOV = 75
let inEarthSystem = false;
let sunLockedCameraDistance = 0
let birdseye = true;

// keys
let forwardPressed = false;
let backwardPressed = false;
let portPressed = false;
let starboardPressed = false;
let rotatePortPressed = false;
let rotateStarboardPressed = false;
let handbrakePressed = false;
let isMouseDown = false; // Flag to track if the mouse button is pressed
let lastMousePosition = { x: 0, y: 0 };

