let TIME = 60 * 60 * simulationSpeed["24s/Ey"] // 6 = one year in 24 Seconds / REALTIME_FACTOR: true realtime simulation speed
let PAUSED = false;
let SHOW_VECTORS = false;
let REALISTIC_LIGHTING = true;
let TRUE_ROTATION_SPEEDS = false;
let ACTIVE_ASCENSION_AXIS = true;
let spacecraftFirstPerson = false;
let spacecraftGravity = false;
let spacecraftMatchVelocity = false;
let spacecraftLight = false;
let distanceUnit = distanceUnits[0];
let starBackground = null;
let backgroundGrid = backgroundGridTextures[0];
let backgroundTexture = backgroundTextures[0]
let SHOW_LABEL = true;
let SHOW_ORBITS = true;
let HIGH_QUALITY_TEXTURES = false;
let PLANET_SCALE = DISTANCE_SCALE * 10
let earthSystemScaling = 0.1 // scale down jwst & moon orbit distance

const preset = getPresetFromURL()

if (preset === "recommended") {
    // default values already are the recommended values
} else if (preset === "realistic") {
    SHOW_LABEL = true;
    SHOW_ORBITS = true;
    HIGH_QUALITY_TEXTURES = false;
    backgroundTexture = backgroundTextures[3]
    PLANET_SCALE = DISTANCE_SCALE
    earthSystemScaling = 1
} else if (preset === "cinematic") { // currently presentation mode
    SHOW_LABEL = true;
    SHOW_ORBITS = true;
    HIGH_QUALITY_TEXTURES = true;
    backgroundTexture = backgroundTextures[3]
    PLANET_SCALE = DISTANCE_SCALE * 10
    earthSystemScaling = 0.1
}
// else if (preset === "cinematic") { // todo: this is the real cinematic mode
//     SHOW_LABEL = false;
//     SHOW_ORBITS = false;
//     HIGH_QUALITY_TEXTURES = true;
//     backgroundTexture = backgroundTextures[3]
//     PLANET_SCALE = DISTANCE_SCALE * 20
//     earthSystemScaling = 0.1
// }

// camera
let isCameraLocked = false;
let isCameraSunLocked = false;
let cameraSunLockChanged = false;
let STANDARD_FOV = 75;
let SPACECRAFT_FOV = 75;

// target selection:
const targets = [];
let targetPlanet = null; // Default to the sun
let spacecraft = null
let spacecraftSelected = false;
let jwstSelected = false;
let transitionAnimationActive = false;
let movingToJwst = false;

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

function getPresetFromURL() {
    const currentPath = window.location.pathname;
    const presetFromUrl = currentPath.replace("/", "");
    return presets.includes(presetFromUrl) ? presetFromUrl : presets[0];
}
