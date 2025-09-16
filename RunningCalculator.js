// RunningCalculator - A module for running-related calculations

class RunningCalculator {

    // Calculate pace: time/distance
    calculatePace(distance, time) {
        const result = time / distance
        return result
    }

    // Convert pace (min/km) to speed (km/h)
    paceToSpeed(pace) {
        const result = 60 / pace
        return result
    }

    // Calculate time from distance and pace
    calculateTime(distance, pace) {
        const result = distance * pace
        return result
    }

    // Calculate distance from time and pace 
    calculateDistance(time, pace) {
        const result = time / pace
        return result
    }

    // Format time from decimal minutes to h, min, sec
    formatTime(decimalMinutes) {
        const hours = Math.floor(decimalMinutes / 60);
        const minutes = Math.floor(decimalMinutes % 60);
        const seconds = Math.round((decimalMinutes - Math.floor(decimalMinutes)) * 60);
        if (hours > 0) {
            return `${hours} h ${minutes} min ${seconds} sec`;
        } else {
            return `${minutes} min ${seconds} sec`;
        }
    }


    // Calculate max pulse based on gender and age
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

    // Calculate pulse zones based on max pulse
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

    // Describe pulse zones
    describePulseZones() {
        return {
            zone1: "Very light activity, helps with recovery.",
            zone2: "Light activity, improves basic endurance and fat burning.",
            zone3: "Moderate activity, enhances aerobic fitness.",
            zone4: "Hard activity, increases maximum performance capacity.",
            zone5: "Maximum effort, improves speed and power."
        }
    }

    // Analyze pulse profile
    analyzePulseProfile(gender, age) {
        const maxPulse = this.calculateMaxPulse(gender, age);
        const zones = this.calculatePulseZones(gender, age);
        const descriptions = this.describePulseZones();

        return {
            gender: gender,
            age: age,
            maxPulse: maxPulse,
            zones: zones,
            descriptions: descriptions,
            summary: `Complete pulse profile for a ${age}-year-old ${gender}`
        }
    }

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

export default RunningCalculator;