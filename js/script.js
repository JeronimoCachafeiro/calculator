function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

const display = document.querySelector('.display-text');
const keys = document.querySelector('.keys');
const btns = document.querySelectorAll('btn');

let displayValue = '';
let a;
let b;
let operator;
keys.addEventListener('click', function (e) {
  if (e.target.matches('.number')) {
    if (display.textContent == 0) display.textContent = '';
    display.textContent += e.target.textContent;
    displayValue += e.target.textContent;
    console.log(displayValue);
  } else if (e.target.matches('.operator')) {
    
    a = +displayValue;
    displayValue = '';
    switch (true) {
      case e.target.matches('.add'):
        operator = add;
        display.textContent += ' + ';
        break;
      case e.target.matches('.subtract'):
        operator = subtract;
        display.textContent += ' - ';
        break;
      case e.target.matches('.multiply'):
        operator = multiply;
        display.textContent += ' * ';
        break;
      case e.target.matches('.divide'):
        operator = divide;
        console.log(operator);
        display.textContent += ' / ';
        break;
    }
  } else if (e.target.matches('.equals')) {
    b = +displayValue;
      console.log(a);
      console.log(b);
      console.log(operate);
      display.textContent = operate(operator, a, b);
  }
});

