import TrainingPlanGenerator from '../src/TrainingPlanGenerator'

describe('TrainingPlanGenerator', () => {
  test('generateWeeklyRunningPlan: 3 days should return plan with 7 days total', () => {
    const planner = new TrainingPlanGenerator()
    const plan = planner.generateWeeklyRunningPlan(3)
    expect(plan).toHaveLength(7)
  })

  test('generateWeeklyRunningPlan: 3 days should have 3 workout days', () => {
    const planner = new TrainingPlanGenerator()
    const plan = planner.generateWeeklyRunningPlan(3)
    const workoutDays = plan.filter((day) => day.workout !== 'Rest')
    expect(workoutDays).toHaveLength(3)
  })

  test('generateWeeklyRunningPlan: should throw error for invalid days', () => {
    const planner = new TrainingPlanGenerator()
    expect(() => {
      planner.generateWeeklyRunningPlan(8)
    }).toThrow('Running days per week must be between 1 and 7')
  })
})
