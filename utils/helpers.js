module.exports = {
  // the helper method 'format_time' will take in a timestamp and return a string with only the time
  formatLogDetails: (logDetails) => {
    // We use the 'toLocaleTimeString()' method to format the time as H:MM:SS AM/PM
    if (logDetails.length > 20) {
      let shortened = logDetails.slice(0, 20) + "...";
      return shortened;
    }
  },
};
