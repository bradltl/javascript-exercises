const fibonacci = function(posValue) {

    let firstValue = 0;
    let secondValue = 1;
    let sumValue = 1;
    posValue = Number(posValue);
    
    if (posValue < 0) {
        return "OOPS";
    }

    for (let i = 2; i <= posValue; i++) {
        sumValue = firstValue + secondValue;
        firstValue = secondValue;
        secondValue = sumValue;  


    }

    return sumValue;

};

// Do not edit below this line
module.exports = fibonacci;
