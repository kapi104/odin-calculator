const numBtns = document.querySelectorAll('.num');
const display = document.querySelector('.display');
let a = 0, b = 0;
console.log(numBtns)

const changeDisplay = function(num) {
  display.textContent += num;
}

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      changeDisplay(btn.textContent);
    })
  })