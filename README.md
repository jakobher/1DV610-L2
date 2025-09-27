# Running Toolkit

A JavaScript toolkit to help runners with pace calculations, fitness tracking, race predictions, and training plans.

**Note:** All calculations use kilometers for distance and minutes for time.

## Features

- **Running Calculations**: Pace, speed, time, and distance conversions
- **Fitness Analysis**: Heart rate zones, VO2 max estimation, resting HR calculation
- **Race Predictions**: Predict race times based on previous performances
- **Training Plans**: Generate weekly running schedules

## Installation

### From GitHub
```bash
git clone https://github.com/jakher/1DV610.git
cd running-toolkit 
```
### From NPM
```bash
npm install running-toolkit
```

### Requirements
Modern browser or Node.js 14+ (ES6 modules), no external dependencies

## Usage Examples
```javascript
// Installation with GitHub 
import { RunningCalculator, FitnessAnalyzer, RacePredictor, TrainingPlanGenerator } from './src/RunningToolkit.js'

// Installation with npm
import { RunningCalculator, FitnessAnalyzer, RacePredictor, TrainingPlanGenerator } from 'running-toolkit'


// Calculate pace (distance, time)
const calc = new RunningCalculator()
const pace = calc.calculatePace(5, 25) // 5km in 25min
// pace = 5 (min/km)

const formattedTime = calc.formatTime(125) // Format 125 minutes
// formattedTime = "2 h 5 min 0 sec"

// Fitness analysis (gender: male/female/other, age: 18-100, activity: low/medium/high/athlete)
const fitness = new FitnessAnalyzer()
const profile = fitness.createCompleteProfile('male', 30, 'medium')
// profile.maxPulse = 190, profile.vo2Max = "49.64", profile.zones = {...}

// Race prediction (known: 3km in 18min, predict: 5km time)
const predictor = new RacePredictor()
const predicted5k = predictor.predictRaceTime(3, 18, 5) // 3km in 18min → predict 5km
// predicted5k = "30 min 56 sec" (formatted time)

// Generate training schedule
const planner = new TrainingPlanGenerator()
const weekPlan = planner.generateWeeklyRunningPlan(3) 
// weekPlan = [{day: 1, workout: "Monday: Easy Run @ zone 1-2"}, ...]
```
## About the Calculations
- **Race predictions:** Based on Riegel's formula with distance-specific adjustments
- **Heart rate zones:** Standard percentage-based training zones  
- **VO2 Max:** Estimated from heart rate data using established formulas

## Reflections
Reflections are found in [reflektion.md](/docs/reflektion.md)

## Testing
Test report is found in [testrapport.md](/docs/testrapport.md)
## License
[MIT](/LICENCE)