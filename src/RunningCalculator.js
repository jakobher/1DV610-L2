class RunningCalculator {
  calculatePace(distance, time) {
    this.#inputValidation(distance)
    this.#inputValidation(time)
    return time / distance
  }

  paceToSpeed(pace) {
    this.#inputValidation(pace)
    return 60 / pace
  }

  calculateTime(distance, pace) {
    this.#inputValidation(distance)
    this.#inputValidation(pace)
    return distance * pace
  }

  calculateDistance(time, pace) {
    this.#inputValidation(time)
    this.#inputValidation(pace)
    return time / pace
  }

  formatTime(decimalMinutes) {
    this.#inputValidation(decimalMinutes)
    const hours = Math.floor(decimalMinutes / 60)
    const minutes = Math.floor(decimalMinutes % 60)
    const seconds = Math.round(
      (decimalMinutes - Math.floor(decimalMinutes)) * 60
    )
    if (hours > 0) {
      return `${hours} h ${minutes} min ${seconds} sec`
    } else {
      return `${minutes} min ${seconds} sec`
    }
  }

  #inputValidation(value) {
    if (value < 0) {
      throw new Error('Input must be a positive number.')
    }
  }
}

export default RunningCalculator
