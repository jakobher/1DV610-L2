import RunningCalculator from "../RunningCalculator.js";

const calc = new RunningCalculator();

// Test for calculatePace
console.log('--- Testing calculatePace ---')
let myPace = calc.calculatePace(5, 25)
console.log(`5km in 25min = ${myPace} min/km`)


// Test for paceToSpeed
console.log('')
console.log('--- Testing paceToSpeed ---')
let mySpeed = calc.paceToSpeed(myPace) // Pace calculated by previous test
let mySpeed2 = calc.paceToSpeed(6) // 6 min/km
console.log(`5 min/km: ${mySpeed} km/h`)
console.log(`6 min/km: ${mySpeed2} km/h`)

// Test for calculateTime
console.log('')
console.log('--- Testing calculateTime ---')
let myTime = calc.calculateTime(5, 5)
console.log(`5km with a pace at 5 min/km takes ${myTime} minutes`)


// Test for calculateDistance
console.log('')
console.log('--- Testing calculateDistance ---')
let myDistance = calc.calculateDistance(25, 5)
console.log(`25min with 5 pace takes you ${myDistance}km`)

// Test for calculateMaxPulse
console.log('')
console.log('--- Testing calculateMaxPulse ---')
let maxPulseMale = calc.calculateMaxPulse('male', 30)
console.log(`Max pulse for a 30 year old male is ${maxPulseMale}`)
let maxPulseFemale = calc.calculateMaxPulse('female', 30)
console.log(`Max pulse for a 30 year old female is ${maxPulseFemale}`)


// Test for calculatePulseZones
console.log('')
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

// Test for describePulseZones
console.log('')
console.log('--- Testing describePulseZones ---')
let pulseDescriptions = calc.describePulseZones()
console.log('Zone 1:', pulseDescriptions.zone1)
console.log('Zone 2:', pulseDescriptions.zone2)
console.log('Zone 3:', pulseDescriptions.zone3)
console.log('Zone 4:', pulseDescriptions.zone4)
console.log('Zone 5:', pulseDescriptions.zone5)

// Test for analyzePulseProfile
console.log('')
console.log('--- Testing analyzePulseProfile ---')
let myMaxPulse = calc.analyzePulseProfile('male', 30)
console.log('=== PULSE PROFILE ===')
console.log('Gender: ' + myMaxPulse.gender)
console.log('Age: ' + myMaxPulse.age)
console.log('Max Pulse:', myMaxPulse.maxPulse, 'bpm')
console.log('TRAINING ZONES:')
console.log('Zone 1 (' + myMaxPulse.zones.zone1.min + '-' + myMaxPulse.zones.zone1.max + ' bpm): ' + myMaxPulse.descriptions.zone1)
console.log('Zone 2 (' + myMaxPulse.zones.zone2.min + '-' + myMaxPulse.zones.zone2.max + ' bpm): ' + myMaxPulse.descriptions.zone2)
console.log('Zone 3 (' + myMaxPulse.zones.zone3.min + '-' + myMaxPulse.zones.zone3.max + ' bpm): ' + myMaxPulse.descriptions.zone3)
console.log('Zone 4 (' + myMaxPulse.zones.zone4.min + '-' + myMaxPulse.zones.zone4.max + ' bpm): ' + myMaxPulse.descriptions.zone4)
console.log('Zone 5 (' + myMaxPulse.zones.zone5.min + '-' + myMaxPulse.zones.zone5.max + ' bpm): ' + myMaxPulse.descriptions.zone5)
console.log('Summary:', myMaxPulse.summary)

console.log('')
console.log('--- Testing predictRaceTime ---')
let predictedTime = calc.predictRaceTime(3, 18, 5)
let formatTime = calc.formatTime(predictedTime)
console.log('Predicted race time for 5km with a known time of 18min for 3km: ' + formatTime)

console.log('')
console.log('--- Additional tests for predictRaceTime ---')
let predictedMarathon = calc.predictRaceTime(10, 45, 42.2)
console.log('Marathon prediction:', calc.formatTime(predictedMarathon))


let predicted7K = calc.predictRaceTime(5, 25, 7)
console.log('7K prediction (using standard formula):', calc.formatTime(predicted7K))

// Test for generateWeeklyRunningPlan
console.log('--- Testing generateWeeklyRunningPlan ---')

// Test 1 day per week
let plan1Day = calc.generateWeeklyRunningPlan(1)
console.log('Plan for 1 day per week:')
console.log(plan1Day)

// Test 5 days per week
let plan5Days = calc.generateWeeklyRunningPlan(5)
console.log('Plan for 5 days per week:')
console.log(plan5Days)

