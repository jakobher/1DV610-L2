class RunningCalculator {

    // Calculate pace: time/distance
    calculatePace(distance, time) {
        return time / distance
    }

    // Convert pace (min/km) to speed (km/h)
    paceToSpeed(pace) {
        return 60 / pace
    }

    // Calculate time from distance and pace
    calculateTime(distance, pace) {
        return distance * pace
    }

    // Calculate distance from time and pace 
    calculateDistance(time, pace) {
        return time / pace
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