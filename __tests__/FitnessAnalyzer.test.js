import FitnessAnalyzer from '../src/FitnessAnalyzer'

describe('FitnessAnalyzer', () => {
  test('calculateRestingHeartRate: age 32, activityLevel high = 57', () => {
    const fitness = new FitnessAnalyzer()
    expect(fitness.calculateRestingHeartRate(32, 'high')).toBe(57)
  })

  test('calculateMaxHeartRate: age 32 = 188', () => {
    const fitness = new FitnessAnalyzer()
    expect(fitness.calculateMaxHeartRate('male', 32)).toBe(188)
  })

  test('estimateVO2Max: maxHR 188, restingHR 57 = 54', () => {
    const fitness = new FitnessAnalyzer()
    expect(fitness.estimateVo2Max(188, 57)).toBeCloseTo(54, 1)
  })

  test('calculatePulseZones: age 32 = Should return correct zones', () => {
    const fitness = new FitnessAnalyzer()
    const zones = fitness.calculatePulseZones('male', 32)
    expect(zones.zone1).toEqual({ min: 94, max: 113 })
    expect(zones.zone5).toEqual({ min: 169, max: 188 })
  })

  test('describePulseZones: Should return correct descriptions', () => {
    const fitness = new FitnessAnalyzer()
    const descriptions = fitness.describePulseZones()
    expect(descriptions.zone1).toBe('Very light activity, helps with recovery.')
    expect(descriptions.zone5).toBe('Maximum effort, improves speed and power.')
  })

  test('createCompleteProfile: male, age 32, activityLevel high = complete profile object', () => {
    const fitness = new FitnessAnalyzer()
    const profile = fitness.createCompleteProfile('male', 32, 'high')
    expect(profile.gender).toBe('male')
    expect(profile.age).toBe(32)
    expect(profile.maxHR).toBe(188)
    expect(profile.restingHR).toBe(57)
    expect(profile.zones.zone1).toEqual({ min: 94, max: 113 })
    expect(profile.vo2Max).toBe('53.96')
    expect(profile.summary).toBe('Complete fitness profile for a 32-year-old male')
  })

  test('validateInputs: should throw error for invalid gender', () => {
    const fitness = new FitnessAnalyzer()
    expect(() => fitness.createCompleteProfile('invalid', 32, 'high')).toThrow(
      'Gender must be "male", "female" or "other"'
    )
  })

  test('validateInputs: should throw error for age < 18', () => {
    const fitness = new FitnessAnalyzer()
    expect(() => fitness.createCompleteProfile('male', 17, 'high')).toThrow('Age must be between 18 and 100')
  })
})
