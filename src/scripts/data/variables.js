import { simulationSpeed, distanceUnits, backgroundGridTextures, backgroundTextures, DISTANCE_SCALE, presets } from './constants.js';

export const state = {
    TIME: 60 * 60 * simulationSpeed["24s/Ey"], // 6 = one year in 24 Seconds / REALTIME_FACTOR: true realtime simulation speed
    PAUSED: false,
    SHOW_VECTORS: false,
    REALISTIC_LIGHTING: true,
    TRUE_ROTATION_SPEEDS: false,
    ACTIVE_ASCENSION_AXIS: true,
    spacecraftFirstPerson: false,
    spacecraftGravity: false,
    spacecraftMatchVelocity: false,
    spacecraftLight: false,
    distanceUnit: distanceUnits[0],
    starBackground: null,
    backgroundGrid: backgroundGridTextures[0],
    backgroundTexture: backgroundTextures[0],
    SHOW_LABEL: true,
    SHOW_ORBITS: true,
    HIGH_QUALITY_TEXTURES: false,
    PLANET_SCALE: DISTANCE_SCALE * 10,
    earthSystemScaling: 0.1, // scale down jwst & moon orbit distance

    // camera
    isCameraLocked: false,
    isCameraSunLocked: false,
    cameraSunLockChanged: false,
    STANDARD_FOV: 75,
    SPACECRAFT_FOV: 75,

    // target selection
    targets: [],
    targetPlanet: null, // Default to the sun
    spacecraft: null,
    spacecraftSelected: false,
    jwstSelected: false,
    transitionAnimationActive: false,
    movingToJwst: false,

    // program variables
    SHOW_CONNECTION: false,
    inEarthSystem: false,
    sunLockedCameraDistance: 0,
    birdseye: true,

    // keys
    forwardPressed: false,
    backwardPressed: false,
    portPressed: false,
    starboardPressed: false,
    rotatePortPressed: false,
    rotateStarboardPressed: false,
    handbrakePressed: false,
    isMouseDown: false, // Flag to track if the mouse button is pressed
    lastMousePosition: { x: 0, y: 0 }
};

const preset = getPresetFromURL();

if (preset === "recommended") {
    // Default values already are the recommended values
} else if (preset === "realistic") {
    state.SHOW_LABEL = true;
    state.SHOW_ORBITS = true;
    state.HIGH_QUALITY_TEXTURES = false;
    state.backgroundTexture = backgroundTextures[3];
    state.PLANET_SCALE = DISTANCE_SCALE;
    state.earthSystemScaling = 1;
} else if (preset === "cinematic") { // currently presentation mode
    state.SHOW_LABEL = true;
    state.SHOW_ORBITS = true;
    state.HIGH_QUALITY_TEXTURES = true;
    state.backgroundTexture = backgroundTextures[3];
    state.PLANET_SCALE = DISTANCE_SCALE * 10;
    state.earthSystemScaling = 0.1;
}
// else if (preset === "cinematic") { // todo: this is the real cinematic mode
//     state.SHOW_LABEL = false;
//     state.SHOW_ORBITS = false;
//     state.HIGH_QUALITY_TEXTURES = true;
//     state.backgroundTexture = backgroundTextures[3];
//     state.PLANET_SCALE = DISTANCE_SCALE * 20;
//     state.earthSystemScaling = 0.1;
// }

function getPresetFromURL() {
    const currentPath = window.location.pathname;
    const presetFromUrl = currentPath.replace("/", "");
    return presets.includes(presetFromUrl) ? presetFromUrl : presets[0];
}
