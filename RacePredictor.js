class RacePredictor {

    // Predict race time for 5 km based on known distance and time with Riegel's formula
    predictRaceTime(knownDistance, knownTime, targetDistance) {
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
        return predictedTime
    }
}

export default RacePredictor;