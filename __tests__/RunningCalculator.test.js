import RunningCalculator from '../src/RunningCalculator'

describe('RunningCalculator', () => {
  test('calculatePace: 5km in 25min = 5 min/km', () => {
    const calc = new RunningCalculator()
    expect(calc.calculatePace(5, 25)).toBe(5)
  })

  test('paceToSpeed: 5 min/km = 12 km/h', () => {
    const calc = new RunningCalculator()
    expect(calc.paceToSpeed(5)).toBe(12)
  })

  test('calculateTime: 5km at 5 min/km = 25 min', () => {
    const calc = new RunningCalculator()
    expect(calc.calculateTime(5, 5)).toBe(25)
  })

  test('calculateDistance: 25 min at 5 min/km = 5 km', () => {
    const calc = new RunningCalculator()
    expect(calc.calculateDistance(25, 5)).toBe(5)
  })

  test('formatTime: 125 min = "2 h 5 min 0 sec"', () => {
    const calc = new RunningCalculator()
    expect(calc.formatTime(125)).toBe('2 h 5 min 0 sec')
  })
})
