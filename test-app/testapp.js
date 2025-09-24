import { RunningCalculator, FitnessAnalyzer, RacePredictor, TrainingPlanGenerator } from '../src/RunningToolkit.js';

const runCalc = new RunningCalculator()
const fitness = new FitnessAnalyzer()

console.log('TESTRESULTS:')
console.log('=============')

// Test calculatePace
// Enkel jämförelse
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
console.log('Expected output: 12, Result: ' + speed)
