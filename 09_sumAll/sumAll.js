const sumAll = function (a, b) {
  
    // IF both args are number
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    // Check which one is bigger number
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    return (max - min + 1) * (min + max) / 2;
};

// Do not edit below this line
module.exports = sumAll;
