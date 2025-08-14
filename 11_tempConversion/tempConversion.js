const convertToCelsius = a => Math.round(((a - 32) * (5/9)) * 10) / 10 ;

const convertToFahrenheit = a => Math.round(((a * (9/5)) + 32) * 10) / 10;


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
