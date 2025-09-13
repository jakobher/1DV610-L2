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

// Test for calculatePulseZones
console.log('--- Testing calculatePulseZones ---')
let maxPulseMale = calc.calculatePulseZones('male', 30)
console.log(`Max pulse for a 30 year old male is ${maxPulseMale}`)
let maxPulseFemale = calc.calculatePulseZones('female', 30)
console.log(`Max pulse for a 30 year old female is ${maxPulseFemale}`)