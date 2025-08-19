const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce((acc, current) => acc + current, 0);


const multiply = (a) => a.reduce((acc, current) => acc * current, 1);

const power = (base, exponent) => {
  let arr = Array(exponent).fill(base);
  return arr.reduce((acc, current) => acc * current, 1);
};

const factorial = (a) =>
  Array.from({ length: a }, (_, i) => a - i)
    .reduce((acc, current) => acc * current, 1);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
