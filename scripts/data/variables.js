// already in interface todo: remove this comment
let TIME = 60 * 60 * simulationSpeed["24s/Ey"] // 6 = one year in 24 Seconds / REALTIME_FACTOR: true realtime simulation speed
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
let STANDARD_FOV = 75;
let SPACECRAFT_FOV = 75;
let starBackground = null;
let PLANET_SCALE = DISTANCE_SCALE * 10
let earthSystemScaling = 0.1 // scale down jwst & moon orbit distance
// target selection:
const targets = [];
let targetPlanet = null; // Default to the sun
let spacecraft = null
let spacecraftSelected = false;
let jwstSelected = false;
let movingToJwst = false;


// todo
let isCameraLocked = false;
let isCameraSunLocked = false;

// program variables
let SHOW_CONNECTION = false;
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

