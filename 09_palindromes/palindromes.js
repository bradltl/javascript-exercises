const palindromes = function (inputString) {

    //Use Regex to remove non-character values from string

    let origString = inputString.replace(/[^a-zA-Z]+/g, '');


    let reverseString = '';

    //Reverse the string characters
    for (let i = inputString.length; i >= 0; i--) {
        reverseString = reverseString + inputString.charAt(i);

    }

    //Remove non-character values
    reverseString = reverseString.replace(/[^a-zA-Z]+/g, '');

    //Convert both strings to lower case for comparison
    origString = origString.toLowerCase();
    reverseString = reverseString.toLowerCase();


    //Check to see if the strings match
    if (origString === reverseString) {
        return true;
    }

    return false;

};

// Do not edit below this line
module.exports = palindromes;
