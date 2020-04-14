export const postTime = (postCreateTime) => {

    const timeCoversion = (milliseconds) => {
        const seconds = (milliseconds / 1000).toFixed(0);
        const minutes = (milliseconds / (1000 * 60)).toFixed(0);
        const hours = (milliseconds / (1000 * 60 * 60)).toFixed(0);
        const days = (milliseconds / (1000 * 60 * 60 * 24)).toFixed(0);

        if (seconds < 60) {
            return seconds + " seconds";
        } else if (minutes < 60) {
            return minutes + " minutes";
        } else if (hours < 24) {
            return hours + " hours"
        } else {
            return days + " days"
        }
    }

    const currentTime = new Date();
    const timeDifference = Math.abs(currentTime - postCreateTime);
    const postTimeAgo = timeCoversion(timeDifference);
    return postTimeAgo;
}