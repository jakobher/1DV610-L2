class FitnessAnalyzer {

    // Create complete profile
    createCompleteProfile(gender, age, activityLevel) {
        this.#validateInputs(gender, age, activityLevel)
        const restingHR = this.calculateRestingHeartRate(age, activityLevel)
        const maxHR = this.calculateMaxHeartRate(gender, age)
        const zones = this.calculatePulseZones(gender, age)
        const vo2Max = this.estimateVo2Max(maxHR, restingHR)

        return {
            gender: gender,
            age: age,
            maxHR: maxHR,
            restingHeartRate: restingHR,
            zones: zones,
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
    calculateMaxHeartRate(gender, age) {
        let maxHR = 0
        if (gender === 'male') {
            maxHR = 220 - age
        } else if (gender === 'female') {
            maxHR = 226 - age
        } else if (gender === 'other') {
            maxHR = 223 - age
        }
        return maxHR
    }

    // Calculate pulse zones based on max pulse
    calculatePulseZones(gender, age) {
        let maxHR = this.calculateMaxHeartRate(gender, age)

        return {
            zone1: { min: Math.round(maxHR * 0.5), max: Math.round(maxHR * 0.6) },
            zone2: { min: Math.round(maxHR * 0.6), max: Math.round(maxHR * 0.7) },
            zone3: { min: Math.round(maxHR * 0.7), max: Math.round(maxHR * 0.8) },
            zone4: { min: Math.round(maxHR * 0.8), max: Math.round(maxHR * 0.9) },
            zone5: { min: Math.round(maxHR * 0.9), max: maxHR }
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