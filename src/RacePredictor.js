class RacePredictor {

    // Predict race time with Riegel's formula
    predictRaceTime(knownDistance, knownTime, targetDistance) {
        this.#validateInputs(knownDistance, knownTime, targetDistance)
        let predictedTime = 0
        if (targetDistance === 5) {
            predictedTime = knownTime * (targetDistance / knownDistance) ** 1.06
        } else if (targetDistance === 10) {
            predictedTime = knownTime * (targetDistance / knownDistance) ** 1.07
        } else if (targetDistance === 21.1) {
            predictedTime = knownTime * (targetDistance / knownDistance) ** 1.08
        } else if (targetDistance === 42.2) {
            predictedTime = knownTime * (targetDistance / knownDistance) ** 1.10
        } else {
            predictedTime = knownTime * (targetDistance / knownDistance) ** 1.06
        }
        return this.#formatTime(predictedTime)
    }

    // Validate inputs from user
    #validateInputs(knownDistance, knownTime, targetDistance) {
        if (!knownDistance || knownDistance <= 0) {
            throw new Error('Known distance must be a positive number')
        }
        if (!knownTime || knownTime <= 0) {
            throw new Error('Known time must be a positive number')
        }
        if (!targetDistance || targetDistance <= 0) {
            throw new Error('Target distance must be a positive number')
        }
    }

    #formatTime(decimalMinutes) {
        const hours = Math.floor(decimalMinutes / 60)
        const minutes = Math.floor(decimalMinutes % 60)
        const seconds = Math.round((decimalMinutes - Math.floor(decimalMinutes)) * 60)

        if (hours > 0) {
            return `${hours} h ${minutes} min ${seconds} sec`
        } else {
            return `${minutes} min ${seconds} sec`
        }
    }
}

export default RacePredictor;