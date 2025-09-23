class TrainingPlanGenerator {

    // Generate weekly training schedule
    // Reflection: This function does more than one thing and could be split into smaller functions. 
    // It is also a very long function that breaks the "small functions" principle.
    generateWeeklyRunningPlan(runningDaysPerWeek) {
        const schedule = []
        this.#validateInputs(runningDaysPerWeek)

        for (let day = 1; day <= 7; day++) {
            let workoutType = 'Rest' // Default to rest day

            if (runningDaysPerWeek === 1) {
                if (day === 3) {
                    workoutType = 'Wednesday: Tempo Run @ zone 3'
                }
            }

            else if (runningDaysPerWeek === 2) {
                if (day === 2) {
                    workoutType = 'Tuesday: Easy Run @ zone 1-2'
                }
                if (day === 5) {
                    workoutType = 'Friday: Long Run @ zone 1-2'
                }
            }

            else if (runningDaysPerWeek === 3) {
                if (day === 1) {
                    workoutType = 'Monday: Easy Run @ zone 1-2'
                }
                if (day === 3) {
                    workoutType = 'Wednesday: Tempo Run @ zone 3'
                }
                if (day === 6) {
                    workoutType = 'Saturday: Long Run @ zone 1-2'
                }
            }

            else if (runningDaysPerWeek === 4) {
                if (day === 1) {
                    workoutType = 'Monday: Easy Run @ zone 1-2'
                }
                if (day === 3) {
                    workoutType = 'Wednesday: Intervals @ zone 4-5'
                }
                if (day === 5) {
                    workoutType = 'Friday: Recovery Run @ zone 1'
                }
                if (day === 7) {
                    workoutType = 'Sunday: Long Run @ zone 1-2'
                }
            }

            else if (runningDaysPerWeek === 5) {
                if (day === 1) {
                    workoutType = 'Monday: Easy Run @ zone 1-2'
                }
                if (day === 2) {
                    workoutType = 'Tuesday: Tempo Run @ zone 3'
                }
                if (day === 4) {
                    workoutType = 'Thursday: Intervals @ zone 4-5'
                }
                if (day === 5) {
                    workoutType = 'Friday: Recovery Run @ zone 1'
                }
                if (day === 6) {
                    workoutType = 'Saturday: Long Run @ zone 1-2'
                }
            }

            schedule.push({
                day: day,
                workout: workoutType
            })
        }
        return schedule
    }

    #validateInputs(runningDaysPerWeek) {
        if (!runningDaysPerWeek || runningDaysPerWeek < 1 || runningDaysPerWeek > 7) {
            throw new Error('Running days per week must be between 1 and 7')
        }
    }
}

export default TrainingPlanGenerator;