import RacePredictor from "../src/RacePredictor"

describe("RacePredictor", () => {
  test("predictRaceTime: 3k, 18 minutes = 31 minutes", () => {
    const predictor = new RacePredictor()
    expect(predictor.predictRaceTime(3, 18, 5)).toBeCloseTo(31, 0)
  })

  test('predictRaceTime: should throw error for negative distance', () => {
    const predictor = new RacePredictor()
    expect(() => predictor.predictRaceTime(-3, 18, 5)).toThrow('Known distance must be a positive number')
  })

  test('predictRaceTime: should throw error for zero time', () => {
    const predictor = new RacePredictor()
    expect(() => predictor.predictRaceTime(3, 0, 5)).toThrow('Known time must be a positive number')
  })
})
