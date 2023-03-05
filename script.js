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

const operate = function(a, b, operator) {
  if(operator == '+') return add(a,b);
  if(operator == '-') return substract(a,b);
  if(operator == '*') return multiply(a,b);
  if(operator == '/') return divide(a,b);
}