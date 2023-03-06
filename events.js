const numBtns = document.querySelectorAll('.num');
const display = document.querySelector('.display');
const displayNumber = document.querySelectorAll('.dnumber');
const dot = document.querySelectorAll('.dot');
const backspace = document.querySelector('.backspace')
let a = 0, b = 0;
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
    })
  })

document.querySelector('.clear').addEventListener('click', () => {
  clearDisplay();
})

backspace.addEventListener('click', () => back())