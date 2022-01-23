const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.length == 0 ? 0 : array.reduce(((accumulator, curr) => accumulator + curr));
};

const multiply = function(array) {
	return array.length == 0 ? 0 : array.reduce(((accumulator, curr) => accumulator * curr));
};

const power = function(a, b) {
    return Math.pow(a, b); 
};

const factorial = function(a) {
    result = 1;
    
    for (a; a > 1; a--){
        result *= a;
    }
    
    return result;
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
