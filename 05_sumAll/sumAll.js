const sumAll = function(startNum, endNum) {
    let answer = 0;
    let smallNum = 0;
    let bigNum = 0;

    //test for positive numbers
    if (startNum < 0 || endNum < 0) {
        return "ERROR";
    }

    //test to ensure value are numbers
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return "ERROR";


    //make sure we add the correct direction
    if (startNum < endNum) {
        smallNum = startNum;
        bigNum = endNum;
    } else {
        smallNum = endNum;
        bigNum = startNum;
    }
    
    //add the numbers
    for (let i = smallNum; i <= bigNum; i++) {
        answer = answer + i;
    }

    return answer;

};

// Do not edit below this line
module.exports = sumAll;
