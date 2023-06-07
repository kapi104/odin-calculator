const numBtns = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const displayNumber = Array.from(document.querySelectorAll('.dnumber'));
const dot = document.querySelectorAll('.dot');
const backspace = document.querySelector('.backspace');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.evaluate');

let currentNumber = 0;
let dotCount = 0;

// changes number diplayed

const changeDisplay = function(num) {
  displayNumber[currentNumber].textContent = num;
  currentNumber += 1;
}

numBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    if (currentNumber != 12) {

      if (btn.textContent != '.') {

        if (btn.classList.contains('operator')) {
          
          if (currentNumber != 0 && !(displayNumber[currentNumber - 1].classList.contains('op'))) {

            displayNumber[currentNumber].classList.add('op')
            changeDisplay(btn.textContent);

          }

        } 
        else {
          
          if (!(currentNumber == 1 && displayNumber[0].textContent == '0' && btn.textContent == '0')){

          changeDisplay(btn.textContent);

        }
      
      }


      } else if (currentNumber != 0 && dotCount == 0) {

        changeDisplay(btn.textContent);
        dotCount = 1;

      }  
    }
  })
})

// clear all

const clearDisplay = function() {
  displayNumber.forEach(num => {

    num.textContent = '';
    num.classList.remove('op');
    
  })

  currentNumber = 0;
  dotCount = 0;
}

document.querySelector('.clear').addEventListener('click', () => {
  clearDisplay();
})

// backspace

const back = function() {
  if (currentNumber > 0) {

    currentNumber -= 1;
    displayNumber[currentNumber].textContent = '';
    displayNumber[currentNumber].classList.remove('op');

  }
}

backspace.addEventListener('click', () => back());

// show result

const showResult = function(result) {
  clearDisplay();
  let resultArray = String(result).split('');
  for (let i = 0; i < 12; i++) {
    displayNumber[i].textContent = resultArray[i];
  }
  console.log(resultArray)
  currentNumber = resultArray.length;
}

// get result

const getNumber = function() {
  let numbers = displayNumber.map(num => num.textContent);
  numbers = numbers.join(''); 
  return numbers;
}

const checkLastOp = function() {
  if (displayNumber[currentNumber - 1].textContent == '+' ||
      displayNumber[currentNumber - 1].textContent == '-' ||
      displayNumber[currentNumber - 1].textContent == '*' ||
      displayNumber[currentNumber - 1].textContent == '/'
  ) {
    displayNumber[currentNumber - 1].textContent = '';
    currentNumber -= 1;
  }
}

equal.addEventListener("click", () => {
  checkLastOp();
  let strNumber = getNumber();
  console.log(strNumber);
  let result = eval(strNumber);
  console.log(result);

  showResult(result);
})
