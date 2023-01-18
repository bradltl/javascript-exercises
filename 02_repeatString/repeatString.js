const repeatString = function(string, num) {
    
    let inputString = string;
    let repeatString = '';
    
    let i = 0;

    if (num < 0) {
        return 'ERROR'
    } 
        
    while (i < num) {
            repeatString += inputString;
            i = i+1;
    
        }
    
        return repeatString
     
    


    
};

// Do not edit below this line
module.exports = repeatString;
