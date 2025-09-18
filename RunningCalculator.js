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
}

export default RunningCalculator;