class TrainingPlanGenerator {
  generateWeeklyRunningPlan(runningDaysPerWeek) {
    const schedule = []
    this.#validateInputs(runningDaysPerWeek)

    for (let day = 1; day <= 7; day++) {
      let workoutType = 'Rest'
      if (runningDaysPerWeek === 1) {
        workoutType = this.#getOneDayPlan(day)
      } else if (runningDaysPerWeek === 2) {
        workoutType = this.#getTwoDayPlan(day)
      } else if (runningDaysPerWeek === 3) {
        workoutType = this.#getThreeDayPlan(day)
      } else if (runningDaysPerWeek === 4) {
        workoutType = this.#getFourDayPlan(day)
      } else if (runningDaysPerWeek === 5) {
        workoutType = this.#getFiveDayPlan(day)
      }
      this.#addWorkoutToSchedule(schedule, day, workoutType)
    }
    return schedule
  }

  #getOneDayPlan(day) {
    if (day === 3) {
      return 'Wednesday: Tempo Run @ zone 3'
    }
    return 'Rest'
  }

  #getTwoDayPlan(day) {
    if (day === 2) {
      return 'Tuesday: Easy Run @ zone 1-2'
    }
    if (day === 5) {
      return 'Friday: Long Run @ zone 1-2'
    }
    return 'Rest'
  }

  #getThreeDayPlan(day) {
    if (day === 1) {
      return 'Monday: Easy Run @ zone 1-2'
    }
    if (day === 3) {
      return 'Wednesday: Tempo Run @ zone 3'
    }
    if (day === 6) {
      return 'Saturday: Long Run @ zone 1-2'
    }
    return 'Rest'
  }

  #getFourDayPlan(day) {
    if (day === 1) {
      return 'Monday: Easy Run @ zone 1-2'
    }
    if (day === 3) {
      return 'Wednesday: Intervals @ zone 4-5'
    }
    if (day === 5) {
      return 'Friday: Recovery Run @ zone 1'
    }
    if (day === 7) {
      return 'Sunday: Long Run @ zone 1-2'
    }
    return 'Rest'
  }

  #getFiveDayPlan(day) {
    if (day === 1) {
      return 'Monday: Easy Run @ zone 1-2'
    }
    if (day === 2) {
      return 'Tuesday: Tempo Run @ zone 3'
    }
    if (day === 4) {
      return 'Thursday: Intervals @ zone 4-5'
    }
    if (day === 5) {
      return 'Friday: Recovery Run @ zone 1'
    }
    if (day === 6) {
      return 'Saturday: Long Run @ zone 1-2'
    }
    return 'Rest'
  }

  #addWorkoutToSchedule(schedule, day, workoutType) {
    schedule.push({
      day: day,
      workout: workoutType,
    })
  }

  #validateInputs(runningDaysPerWeek) {
    if (
      !runningDaysPerWeek ||
      runningDaysPerWeek < 1 ||
      runningDaysPerWeek > 7
    ) {
      throw new Error('Running days per week must be between 1 and 7')
    }
  }
}

export default TrainingPlanGenerator
