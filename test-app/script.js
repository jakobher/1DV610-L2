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