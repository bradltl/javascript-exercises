const removeFromArray = function(inputArray, removeValue) {

    let returnArray = [];
    for (item in inputArray) {
        if (item != removeValue) {
            returnArray.push(item);
        }
    }

    return returnArray;
};

// Do not edit below this line
module.exports = removeFromArray;
