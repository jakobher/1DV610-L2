class FitnessAnalyzer {

    // Create complete profile
    createCompleteProfile(gender, age, activityLevel) {
        this.#validateInputs(gender, age, activityLevel)
        const restingHR = this.calculateRestingHeartRate(age, activityLevel)
        const maxPulse = this.calculateMaxPulse(gender, age)
        const zones = this.calculatePulseZones(gender, age)
        const descriptions = this.describePulseZones()
        const vo2Max = this.estimateVo2Max(maxPulse, restingHR)

        return {
            gender: gender,
            age: age,
            maxPulse: maxPulse,
            restingHeartRate: restingHR,
            zones: zones,
            descriptions: descriptions,
            vo2Max: vo2Max.toFixed(2),
            summary: `Complete fitness profile for a ${age}-year-old ${gender}`
        }
    }

    // Calculate resting heart rate based measurements
    calculateRestingHeartRate(age, activityLevel) {
        let baseRestingHR = 70 - Math.floor(age / 4);
        if (activityLevel === 'low') {
            baseRestingHR += 5;
        } else if (activityLevel === 'medium') {
            baseRestingHR += 0;
        } else if (activityLevel === 'high') {
            baseRestingHR -= 5;
        } else if (activityLevel === 'athlete') {
            baseRestingHR -= 10;
        }
        return baseRestingHR;
    }

    // Calculate max pulse based on gender and age
    calculateMaxPulse(gender, age) {
        let maxPulse = 0
        if (gender === 'male') {
            maxPulse = 220 - age
        } else if (gender === 'female') {
            maxPulse = 226 - age
        } else if (gender === 'other') {
            maxPulse = 223 - age
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

    // Estimate Vo2 max from max pulse and resting heart rate
    estimateVo2Max(maxHR, restingHR) {
        return 15.3 * (maxHR / restingHR) + 3.5
    }

    // Validate inputs from user
    #validateInputs(gender, age, activityLevel) {
        if (!gender || (gender !== 'male' && gender !== 'female' && gender !== 'other')) {
            throw new Error('Gender must be "male", "female" or "other"')
        }
        if (!age || age < 18 || age > 100) {
            throw new Error('Age must be between 18 and 100')
        }
        if (!activityLevel || (activityLevel !== 'low' && activityLevel !== 'medium' && activityLevel !== 'high' && activityLevel !== 'athlete')) {
            throw new Error('Activity level must be "low", "medium", "high" or "athlete"')
        }
    }
}

export default FitnessAnalyzer