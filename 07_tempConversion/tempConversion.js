const convertToCelsius = function(temp) {
  
  //if (!Number.isInteger(temp)) return "ERROR";
  let returnTemp = 0;
  // Deduct 32, then multiply by 5, then divide by 9
  temp = (((temp - 32) *5) / 9);
  returnTemp = Math.round(temp * 10) / 10
  return returnTemp;



};

const convertToFahrenheit = function(temp) {

  // °F = °C × (9/5) + 32
  //if (!Number.isInteger(temp)) return "ERROR";
  let returnTemp = 0;
  temp = (((temp * 9) /5) + 32);
  returnTemp = Math.round(temp * 10) / 10
  return returnTemp;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
