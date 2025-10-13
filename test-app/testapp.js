import { RunningCalculator, FitnessAnalyzer, RacePredictor, TrainingPlanGenerator } from '../src/RunningToolkit.js';

const runCalc = new RunningCalculator()
const fitness = new FitnessAnalyzer()
const racePredictor = new RacePredictor()
const trainingPlanGen = new TrainingPlanGenerator()

console.log('TESTRESULTS:')
console.log('=============')

// Test calculatePace
const pace = runCalc.calculatePace(5, 25)
console.log('calculatePace(5, 25)')
if (pace === 5) {
    console.log('Expected: 5, Result: ' + pace + ' ✅')
} else {
    console.log('Expected: 5, Result: ' + pace + ' ❌')
}
console.log('\n')

// Test paceToSpeed
const speed = runCalc.paceToSpeed(5)
console.log('paceToSpeed(5)')
if (speed === 12) {
    console.log('Expected: 12, Result: ' + speed + ' ✅')
} else {
    console.log('Expected: 12, Result: ' + speed + ' ❌')
}
console.log('\n')

// Test calculateTime
const time = runCalc.calculateTime(5, 5)
console.log('calculateTime(5, 5)')
if (time === 25) {
    console.log('Expected: 25, Result: ' + time + ' ✅')
} else {
    console.log('Expected: 25, Result: ' + time + ' ❌')
}
console.log('\n')

// Test calculateDistance
const distance = runCalc.calculateDistance(25, 5)
console.log('calculateDistance(25, 5)')
if (distance === 5) {
    console.log('Expected: 5, Result: ' + distance + ' ✅')
} else {
    console.log('Expected: 5, Result: ' + distance + ' ❌')
}
console.log('\n')

// Test formatTime
const formattedTime = runCalc.formatTime(125)
console.log('formatTime(125)')
if (formattedTime === '2 h 5 min 0 sec') {
    console.log('Expected: 2 h 5 min 0 sec, Result: ' + formattedTime + ' ✅')
} else {
    console.log('Expected: 2 h 5 min 0 sec, Result: ' + formattedTime + ' ❌')
}
console.log('\n')

// Test calculateRestingHeartRate
const restingHeartRate = fitness.calculateRestingHeartRate(30, 'medium')
console.log('calculateRestingHeartRate(30, medium)')
if (restingHeartRate === 63) {
    console.log('Expected: 63, Result: ' + restingHeartRate + ' ✅')
} else {
    console.log('Expected: 63, Result: ' + restingHeartRate + ' ❌')
}
console.log('\n')

// Test calculateMaxHeartRate
const maxHeartRate = fitness.calculateMaxHeartRate('male', 30)
console.log('calculateMaxHeartRate(male, 30)')
if (maxHeartRate === 190) {
    console.log('Expected: 190, Result: ' + maxHeartRate + ' ✅')
} else {
    console.log('Expected: 190, Result: ' + maxHeartRate + ' ❌')
}
console.log('\n')
// Test estimateVo2Max
const vo2Max = fitness.estimateVo2Max(190, 63)
console.log('estimateVo2Max(190, 63)')
if (vo2Max.toFixed(2) === '49.64') {
    console.log('Expected: 49.64, Result: ' + vo2Max.toFixed(2) + ' ✅')
} else {
    console.log('Expected: 49.64, Result: ' + vo2Max.toFixed(2) + ' ❌')
}
console.log('\n')

// Test calculatePulseZones
const pulseZones = fitness.calculatePulseZones('male', 30)
console.log('calculatePulseZones(male, 30)')
if (pulseZones.zone1 && pulseZones.zone2 && pulseZones.zone3 && pulseZones.zone4 && pulseZones.zone5) {
    console.log('Expected: 5 pulse zones, Result: All zones created successfully ✅')
    console.log('Sample zones: Zone1=' + pulseZones.zone1.min + '-' + pulseZones.zone1.max + ', Zone3=' + pulseZones.zone3.min + '-' + pulseZones.zone3.max)
} else {
    console.log('Expected: 5 pulse zones, Result: Missing zones ❌')
}
console.log('\n')

// Test describePulseZones
const pulseDescriptions = fitness.describePulseZones()
console.log('describePulseZones()')
if (pulseDescriptions.zone1 && pulseDescriptions.zone5 && 
    typeof pulseDescriptions.zone1 === 'string') {
    console.log('Expected: Zone descriptions, Result: All descriptions provided ✅')
    console.log('Sample: Zone1="' + pulseDescriptions.zone1.substring(0, 20) + '..."')
} else {
    console.log('Expected: Zone descriptions, Result: Missing descriptions ❌')
}
console.log('\n')

// Test createCompleteProfile
const completeProfile = fitness.createCompleteProfile('male', 30, 'medium')
console.log('createCompleteProfile(male, 30, medium)')
if (completeProfile.gender && 
    completeProfile.age && 
    completeProfile.maxHR &&
    completeProfile.restingHeartRate &&
    completeProfile.zones && 
    completeProfile.vo2Max &&
    completeProfile.summary) {
    console.log('Expected: Complete profile with all properties, Result: All properties present ✅')
    console.log('Sample: VO2Max=' + completeProfile.vo2Max + ', Zones=' + Object.keys(completeProfile.zones).length)
} else {
    console.log('Expected: Complete profile with all properties, Result: Missing properties ❌')
}
console.log('\n')

// Test predictRaceTime
const predictedTime = racePredictor.predictRaceTime(3, 18, 5)
console.log('predictRaceTime(3, 18, 5)')
if (predictedTime === '30 min 56 sec') {
    console.log('Expected: 30 min 56 sec, Result: ' + predictedTime + ' ✅')
} else {
    console.log('Expected: 30 min 56 sec, Result: ' + predictedTime + ' ❌')
}
console.log('\n')

// Test generateWeeklyRunningPlan
const trainingPlan = trainingPlanGen.generateWeeklyRunningPlan(3)
console.log('generateWeeklyRunningPlan(3)')
const runningDays = trainingPlan.filter(day => day.workout !== 'Rest').length
if (runningDays === 3) {
    console.log('Expected: 3 running days, Result: ' + runningDays + ' running days ✅')
} else {
    console.log('Expected: 3 running days, Result: ' + runningDays + ' running days ❌')
}
console.log('\n')
console.log('End of tests.')


