export function getReadableDateTime(date) {
    const dateObj = new Date(date)
    let year = dateObj.getUTCFullYear()
    let month = dateObj.getUTCMonth() + 1
    let day = dateObj.getUTCDate()

    let hour = dateObj.getUTCHours()
    let minute = dateObj.getUTCMinutes()
    let seconds = dateObj.getUTCSeconds()

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    if (hour < 10) {
        hour = "0" + hour
    }

    if (minute < 10) {
        minute = "0" + minute
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    let timeOfDay = "pm";

    if (hour < 12) {
        timeOfDay = "am"
    }

    return `${day}-${month}-${year} at ${hour}:${minute}:${seconds}${timeOfDay}`
}