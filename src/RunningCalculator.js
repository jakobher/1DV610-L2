class RunningCalculator {

    // Calculate pace: time/distance
    calculatePace(distance, time) {
        this.#inputValidation(distance)
        this.#inputValidation(time)
        return time / distance
    }

    // Convert pace (min/km) to speed (km/h)
    paceToSpeed(pace) {
        this.#inputValidation(pace)
        return 60 / pace
    }

    // Calculate time from distance and pace
    calculateTime(distance, pace) {
        this.#inputValidation(distance)
        this.#inputValidation(pace)
        return distance * pace
    }

    // Calculate distance from time and pace 
    calculateDistance(time, pace) {
        this.#inputValidation(time)
        this.#inputValidation(pace)
        return time / pace
    }

    // Format time from decimal minutes to h, min, sec
    formatTime(decimalMinutes) {
        this.#inputValidation(decimalMinutes)
        const hours = Math.floor(decimalMinutes / 60)
        const minutes = Math.floor(decimalMinutes % 60)
        const seconds = Math.round((decimalMinutes - Math.floor(decimalMinutes)) * 60)
        if (hours > 0) {
            return `${hours} h ${minutes} min ${seconds} sec`
        } else {
            return `${minutes} min ${seconds} sec`
        }
    }

    #inputValidation(value) {
        if (value < 0) {
            throw new Error("Input must be a positive number.")
        }
    }
}

export default RunningCalculator