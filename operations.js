const add = function(a, b) {
  return a + b;
}

const substract = function(a, b) {
  return a - b; 
}

const multiply = function(a, b) {
  return a * b;
}

const divide = function(a, b) {
  return a / b;
}

const power = function(a, b) {
  return Math.pow(a, b);
}

const factorial = function(a, b) {
  return Math.factorial(a, b);
}

const operate = function(a, b, operator) {
  if(operator == 'plus') return add(a,b);
  if(operator == 'minus') return substract(a,b);
  if(operator == 'multiply') return multiply(a,b);
  if(operator == 'divide') return divide(a,b);
  if(operator == 'power') return power(a,b);
  if(operator == 'factorial') return factorial(a,b);
}