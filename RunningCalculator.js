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


    // Beräkna maxpuls baserat på kön och ålder
    calculateMaxPulse(gender, age) {
        let maxPulse = 0
        if (gender === 'male') {
            maxPulse = 220 - age
        } else if (gender === 'female') {
            maxPulse = 226 - age
        } else {
            console.log('Invalid input')
        }
        return maxPulse
    }

    // Beräkna pulszoner från maxpuls
    calculatePulseZones(gender, age) {
        let maxPulse = this.calculateMaxPulse(gender, age)

        return {
            zone1: { min: Math.round(maxPulse * 0.5), max: Math.round(maxPulse * 0.6) },
            zone2: { min: Math.round(maxPulse * 0.6), max: Math.round(maxPulse * 0.7) },
            zone3: { min: Math.round(maxPulse * 0.7), max: Math.round(maxPulse * 0.8) },
            zone4: { min: Math.round(maxPulse * 0.8), max: Math.round(maxPulse * 0.9) },
            zone5: { min: Math.round(maxPulse * 0.9), max: maxPulse }
        }
    }
}

export default RunningCalculator;