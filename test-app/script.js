import RunningCalculator from "../RunningCalculator.js";

const calc = new RunningCalculator();

// Test for calculatePace
console.log('--- Testing calculatePace ---')
let myPace = calc.calculatePace(5, 25)
console.log(`5km in 25min = ${myPace} min/km`)


// Test for paceToSpeed
console.log('--- Testing paceToSpeed ---')
let mySpeed = calc.paceToSpeed(myPace) // Pace calculated by previous test
let mySpeed2 = calc.paceToSpeed(6) // 6 min/km
console.log(`5 min/km: ${mySpeed} km/h`)
console.log(`6 min/km: ${mySpeed2} km/h`)

// Test for calculateTime
console.log('--- Testing calculateTime ---')
let myTime = calc.calculateTime(5, 5)
console.log(`5km with a pace at 5 min/km takes ${myTime} minutes`)


// Test for calculateDistance
console.log('--- Testing calculateDistance ---')
let myDistance = calc.calculateDistance(25, 5)
console.log(`25min with 5 pace takes you ${myDistance}km`)

// Test for calculateMaxPulse
console.log('--- Testing calculateMaxPulse ---')
let maxPulseMale = calc.calculateMaxPulse('male', 30)
console.log(`Max pulse for a 30 year old male is ${maxPulseMale}`)
let maxPulseFemale = calc.calculateMaxPulse('female', 30)
console.log(`Max pulse for a 30 year old female is ${maxPulseFemale}`)


// Test for calculatePulseZones
console.log('--- Testing calculatePulseZones ---')
console.log('---')
console.log('Pulse zones for a 30-year old male:')
console.log('---')
let pulseZoneMale = calc.calculatePulseZones('male', 30)
console.log('Zone 1:', pulseZoneMale.zone1.min, '-', pulseZoneMale.zone1.max)
console.log('Zone 2:', pulseZoneMale.zone2.min, '-', pulseZoneMale.zone2.max)
console.log('Zone 3:', pulseZoneMale.zone3.min, '-', pulseZoneMale.zone3.max)
console.log('Zone 4:', pulseZoneMale.zone4.min, '-', pulseZoneMale.zone4.max)
console.log('Zone 5:', pulseZoneMale.zone5.min, '-', pulseZoneMale.zone5.max)

console.log('---')
console.log('Pulse zones for a 30-year old female:')
console.log('---')
let pulseZoneFemale = calc.calculatePulseZones('female', 30)
console.log('Zone 1:', pulseZoneFemale.zone1.min, '-', pulseZoneFemale.zone1.max)
console.log('Zone 2:', pulseZoneFemale.zone2.min, '-', pulseZoneFemale.zone2.max)
console.log('Zone 3:', pulseZoneFemale.zone3.min, '-', pulseZoneFemale.zone3.max)
console.log('Zone 4:', pulseZoneFemale.zone4.min, '-', pulseZoneFemale.zone4.max)
console.log('Zone 5:', pulseZoneFemale.zone5.min, '-', pulseZoneFemale.zone5.max)
