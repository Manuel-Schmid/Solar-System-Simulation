const G = 6.67428e-11  // Gravitational constant
const AU = 1.496e+8 // 1 AU in km
const LM = 1.799e+7 // 1 Light minute in km
const DISTANCE_SCALE = 0.0000001 // multiply km distances by this
const PLANET_SCALE = DISTANCE_SCALE * 10 // multiply km distances by this
const REALTIME_FACTOR = 4.56621*10**-6 //
const TIME = 60 * 60 * 6 // 6 = one year in 24 Seconds / REALTIME_FACTOR: true realtime simulation speed
let distanceUnits = ["km", "au", "lm"] // units for distances
let backgroundTextures = [false, "starmaps/celestial_grid_16k.png", "starmaps/constellation_bounds_8k.png", "starmaps/constellation_figures_8k.png"]
const jwstScaleFactor = 0.0001
const jwstCenterDistance = 0.005
const Direction = Object.freeze({
    FORWARD:   Symbol("forward"),
    STARBOARD:   Symbol("starboard"),
    PORT:   Symbol("port"),
    BACKWARD:   Symbol("backward"),
});
