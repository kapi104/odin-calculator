const numBtns = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const displayNumber = Array.from(document.querySelectorAll('.dnumber'));
const dot = document.querySelectorAll('.dot');
const backspace = document.querySelector('.backspace');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.operate');

let a = 0, b = 0, oper, operSelected, aSelected;
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
  if (currentNumber > 0) {
    currentNumber -= 1;
    displayNumber[currentNumber].textContent = '';
  }
}

const getNumber = function() {
  let numbers = displayNumber.map(num => num.textContent);
  numbers = numbers.join(''); 
  return Number(numbers);
}

const resetOperatorColor = function(){
  operator.forEach(op => op.style.backgroundColor = 'orange')
}

const showResult = function(result) {
  clearDisplay();
  let resultArray = String(result).split('');
  for (let i = 0; i < 12; i++) {
    displayNumber[i].textContent = resultArray[i];
  }
  console.log(resultArray)
}

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (operSelected == true) {
        clearDisplay();
        operSelected = false;
      }
      if (currentNumber != 12) {
        if (btn.textContent != '.') {
          changeDisplay(btn.textContent);
        } else if (currentNumber != 0 && dotCount == 0) {
          changeDisplay(btn.textContent);
          dotCount = 1;
        }  
      }
      operator.forEach((op) => op.classList.remove('activated'))
    })
  })

document.querySelector('.clear').addEventListener('click', () => {
  clearDisplay();
})

backspace.addEventListener('click', () => back())

operator.forEach(op => {
  op.addEventListener('click', action => {
    //jak dam wynik na display to bedzie dzialac
    a = getNumber();
    aSelected = true;
    oper = action.target.classList[1];
    operSelected = true; 
    operator.forEach((op) => op.classList.remove('activated'))
    action.target.classList.add('activated');
    console.log(a+ ' ' + oper)
  })
})

equal.addEventListener('click', () => {
  b = getNumber();
  if(aSelected == true && b != 0) {
    let result = operate(a, b, oper);
    b = 0;
    oper = '';
    operSelected = false;
    showResult(result)
    console.log(result)
  }
})