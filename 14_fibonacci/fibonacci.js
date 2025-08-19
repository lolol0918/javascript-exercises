const fibonacci = function (n) {
    let nth = parseInt(n);
    if (nth === 0) return 0;
    if (nth < 0) return "OOPS";
    if (nth === 1) return 1;


    // create an array of length n, then use reduce to update the accumulator [a, b] 
    return Array.from({length: n}).reduce(([a, b]) => [b, a + b], [0, 1])[0];

};

// Do not edit below this line
module.exports = fibonacci;
