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
git clone https://github.com/[your-username]/running-toolkit.git
cd running-toolkit 
```
### From NPM
```bash
npm install running-toolkit (not available yet)
```

### Requrements
Modern browser or Node.js 14+ (ES6 modules), no external dependencies

## API Reference
### RunningCalculator
- calculatePace(distance, time) - Returns pace in min/km
- calculateTime(distance, pace) - Returns time in minutes
- calculateDistance(time, pace) - Returns distance in km
- paceToSpeed(pace) - Convert pace to km/h
- formatTime(decimalMinutes) - Format to "X h Y min Z sec"

### FitnessAnalyzer
- createCompleteProfile(gender, age, activityLevel) - Complete fitness profile
- calculateMaxPulse(gender, age) - Maximum heart rate
- calculatePulseZones(gender, age) - Training zones object
- estimateVo2Max(maxHR, restingHR) - VO2 max estimation

### RacePredictor
- predictRaceTime(knownDistance, knownTime. targetDistance) - Predict race time using Riegel's formula

### TrainingPlanGenerator
- generateWeeklyTrainingPlan(daysPerWeek) - Generate a 7-day training schedule (1-5 running days)

## Usage
```javascript
import { RunningCalculator, FitnessAnalyzer, RacePredictor, TrainingPlanGenerator } from './src/RunningToolkit.js'

// Calculate pace 
const calc = new RunningCalculator()
const pace = calc.calculatePace(5, 25) // 5km in 25min
// pace = 5 (min/km)

const formattedTime = calc.formatTime(125) // Format 125 minutes
// formattedTime = "2 h 5 min 0 sec"

// Fitness analysis
const fitness = new FitnessAnalyzer()
const profile = fitness.createCompleteProfile('male', 30, 'medium')
// profile contains: maxPulse, pulsezones, vo2Max, etc

// Race prediction
const predictor = new RacePredictor()
const predicted5k = predictor.predictRaceTime(3, 18, 5) // 3km in 18min -> predict 5km
// predicted5k = 30.98 (raw minutes)

const predicted5kFormatted = calc.formatTime(predicted5kMinutes)
// predicted5kFormatted = "30 min 56 sec"

// Generate training schedule
const planner = new TrainingPlanGenerator()
const weekPlan = planner.generateWeeklyRunningPlan(3) 
// weekPlan = [{day: 1, workout: "Monday: Easy Run @ zone 1-2"}, ...]
```

## Quick Examples

```javascript

```

## Reflections
Reflections are found in [reflektion.md](/docs/reflektion.md)

## Testing
Test report is found in [testrapport.md](/docs/testrapport.md)
## License
[MIT](/LICENCE)