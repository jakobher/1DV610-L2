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
## Usage
```javascript
import { RunningCalculator, FitnessAnalyzer, RacePredictor, TrainingPlanGenerator } from './src/RunningToolkit.js'

// Usage example
const calc = new RunningCalculator()
const pace = calc.calculatePace(5, 25) // 5km in 25min = 5 min/km
console.log(`Your pace: ${pace} min/km`)
```

## Reflections
Reflections are found in [reflektion.md](/docs/reflektion.md)

## Testing
Test report is found in [testrapport.md](/docs/testrapport.md)
## License
MIT