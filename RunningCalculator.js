// RunningCalculator - A module for running-related calculations

class RunningCalculator {

    // Beräkna pace: tid/distans
    calculatePace(distance, time) {
        const result = time / distance
        return result
    }

    // Konvertera pace till hastighet (km/h)
    paceToSpeed(pace) {
        const result = 60 / pace
        return result
    }

    // Beräkna tid från distans och pace
    calculateTime(distance, pace) {
        const result = distance * pace
        return result
    }

    // Beräkna distans från tid och pace 
    calculateDistance(time, pace) {
        const result = time / pace
        return result
    }

    // Beräkna pulszoner från maxpuls
}

export default RunningCalculator;