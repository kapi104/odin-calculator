const numBtns = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const displayNumber = document.querySelectorAll('.dnumber');
const dot = document.querySelectorAll('.dot');
const backspace = document.querySelector('.backspace');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.operate');

let a = 0, b = 0, oper;
let currentNumber = 0;
let dotCount = 0;

const changeDisplay = function(num) {
  displayNumber[currentNumber].textContent = num;
  currentNumber += 1;
}

const clearDisplay = function() {
  displayNumber.forEach(num => {
    num.textContent = '';
    currentNumber = 0;
    dotCount = 0;
  })
}

const back = function() {
  if (currentNumber > 0)
  currentNumber -= 1;
  displayNumber[currentNumber].textContent = '';
}

const getNumber = function() {
  const arr = Array.from(displayNumber);
  let num = arr.map(number => number.textContent);
  return num.join('');
}

const resetOperatorColor = function(){
  operator.forEach(op => op.style.backgroundColor = 'orange')
}

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentNumber != 12) {
        if (btn.textContent != '.') {
          changeDisplay(btn.textContent);
        } else if (currentNumber != 0 && dotCount == 0) {
          changeDisplay(btn.textContent);
          dotCount = 1;
        }  
      }
      operator.forEach(op => op.style.backgroundColor = 'orange')
    })
  })

document.querySelector('.clear').addEventListener('click', () => {
  clearDisplay();
})

backspace.addEventListener('click', () => back())

operator.forEach(op => {
  op.addEventListener('click', action => {
    a = Number(getNumber());
    console.log(a);
    oper = action.target.attributes[1].value;
    console.log(action.target.attributes[1].value);
    resetOperatorColor();
    action.target.style.backgroundColor = 'rgb(201, 130, 0)';
    clearDisplay();
  })
})

equal.addEventListener('click', () => {
  b = Number(getNumber());
  console.log(a+oper+b)
  let result = String(operate(a, b, oper));
  let resultArray = [...result]
  console.log(resultArray);
  
})