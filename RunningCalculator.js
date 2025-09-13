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
    calculatePulseZones(gender, age) {
        let maxPulse = gender - age
        if (gender === 'male') {
            maxPulse = 220 - age
        } else if (gender === 'female') {
            maxPulse = 226 - age
        } else {
            console.log('Invalid input')
        }

        return maxPulse

        // TODO: Implement logic to calculate pulseZones
    }
}

export default RunningCalculator;