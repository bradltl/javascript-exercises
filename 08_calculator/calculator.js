const add = function(first, second) {
  let answer = 0;
  answer = first + second;
  return answer;
	
};

const subtract = function(first, second) {
  let answer = 0;
  answer = first - second;
  return answer;
	
};

const sum = function(sumValues) {
	let answer = 0;

  for (let i = 0; i < sumValues.length; i++) {
    answer = answer + sumValues[i];
  }
  return answer;

};

const multiply = function(multiValues) {
  let answer = 1;

  for (let i = 0; i < multiValues.length; i++) {
    answer = answer * multiValues[i];
  }

  return answer;

};

const power = function(first, second) {
  let answer = 0;
  answer = first ** second;
  return answer;
	
};

const factorial = function(factValue) {
  let answer = 1;

  if (factValue === 0) {
    answer = 1;
    return answer;
  }

  for (let i = 1; i <= factValue; i++) {
    answer = answer * i;
  }

  return answer;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
