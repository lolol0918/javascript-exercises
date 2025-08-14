const removeFromArray = function(arr) {
    // get the length of the arguments
    let argLength = arguments.length;
    // FOR EACH arg except the FIRST ONE
    for (let i = 1; i < argLength; i++) {
        // REMOVE FROM THE array
        arr = arr.filter(item => item !== arguments[i]);
    }      
    // return the new array
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
