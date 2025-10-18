# Running Toolkit

A JavaScript toolkit to help runners with pace calculations, fitness tracking, race predictions, and training plans.

**Note:** All calculations use kilometers for distance and minutes for time.

## Features

- **Running Calculations**: Pace, speed, time, and distance conversions
- **Fitness Analysis**: Heart rate zones, VO2 max estimation, resting HR calculation
- **Race Predictions**: Predict race times based on previous performances
- **Training Plans**: Generate weekly running schedules

## Quick Start

Want to try it right away? Copy this into a file and run it:

```javascript
import { FitnessAnalyzer, RunningCalculator } from 'running-toolkit'

const fitness = new FitnessAnalyzer()

// Create your fitness profile
const profile = fitness.createCompleteProfile('male', 32, 'medium')

console.log(`
Your Fitness Profile:
Max Heart Rate: ${profile.maxHR} bpm
Resting Heart Rate: ${profile.restingHR} bpm  
VO2 Max: ${profile.vo2Max}
Zone 3 (Aerobic): ${profile.zones.zone3.min}-${profile.zones.zone3.max} bpm
`)
```

**Try your own values!** Try changing the gender (`'male'`/`'female'`/`'other'`), age (18-100), and activity level (`'low'`/`'medium'`/`'high'`/`'athlete'`) to match your own profile and see how the results change.

## Usage Examples

### Running Calculations

```javascript
import { RunningCalculator } from 'running-toolkit'

// Calculate pace (distance, time)
const calc = new RunningCalculator()
const pace = calc.calculatePace(5, 25) // 5km in 25min
// pace = 5 (min/km)

const formattedTime = calc.formatTime(125) // Format 125 minutes
// formattedTime = "2 h 5 min 0 sec"
```

### Fitness Analysis

```javascript
import { FitnessAnalyzer } from 'running-toolkit'

// Fitness analysis (gender: male/female/other, age: 18-100, activity: low/medium/high/athlete)
const fitness = new FitnessAnalyzer()
const profile = fitness.createCompleteProfile('male', 30, 'medium')
// profile.maxHR = 190, profile.vo2Max = "49.64", profile.zones = {...}
```

### Race Prediction

```javascript
import { RacePredictor } from 'running-toolkit'

// Race prediction (known: 3km in 18min, predict: 5km time)
const predictor = new RacePredictor()
const predicted5k = predictor.predictRaceTime(3, 18, 5) // 3km in 18min → predict 5km
// predicted5k = "30 min 56 sec" (formatted time)
```

### Training Plan

```javascript
import { TrainingPlanGenerator } from 'running-toolkit'

// Generate training schedule
const planner = new TrainingPlanGenerator()
const weekPlan = planner.generateWeeklyRunningPlan(3)
// weekPlan = [{day: 1, workout: "Monday: Easy Run @ zone 1-2"}, ...]
```

## Installation

```bash
npm install running-toolkit
```

### Requirements

- Modern browser with ES6 module support
- Node.js v22+ (tested on v22.7.0)
- No external dependencies

## About the Calculations

- **Race predictions:** Based on Riegel's formula with distance-specific adjustments
- **Heart rate zones:** Standard percentage-based training zones
- **VO2 Max:** Estimated from heart rate data using established formulas

## Reflections

Reflections are found in [reflektion.md](/docs/reflektion.md)

## Testing

### Automated Tests (Jest)

Run automated unit tests:
```bash
npm test
```

### Manual Tests

Manual test report is found in [testrapport.md](/docs/testrapport.md)

## License

[MIT](/LICENSE)
