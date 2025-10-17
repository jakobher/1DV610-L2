import RunningCalculator from "../src/RunningCalculator"

describe('RunningCalculator', () => {
  test('calculatePace: 5km in 25min = 5 min/km', () => {
    const calc = new RunningCalculator()
    expect(calc.calculatePace(5, 25)).toBe(5)
  })

  test('paceToSpeed: 5 min/km = 12 km/h', () => {
    const calc = new RunningCalculator()
    expect(calc.paceToSpeed(5)).toBe(12)
  })

  test('Should show time based on distance and pace', () => {
    const cals = new RunningCalculator()
    expect(cals.calculateTime(5, 5)).toBe(25)
  })
})