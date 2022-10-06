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

const display = document.querySelector(".display");
const keys = document.querySelector(".keys");
const btns = document.querySelectorAll("btn");

let a = "";
let b = "";
let c = "";
let operator;
let operand = "";

keys.addEventListener("click", function (e) {
  if (e.target.matches(".number")) {
    operand += e.target.textContent;
    display.textContent += operand.slice(-1);
  } else if (e.target.matches(".operator")) {
    if (e.target.matches(".equals") || typeof a === "number") {
      b = +operand;
      c = operate(operator, a, b);
      a = c;
      b = "";
      operand = "";
      display.textContent = "";
      display.textContent += c;
    } else {
      a = +operand;
      operand = "";
    }
    switch (true) {
      case e.target.matches(".add"):
        operator = add;
        display.textContent += " + ";
        break;
      case e.target.matches(".subtract"):
        operator = subtract;
        display.textContent += " - ";
        break;
      case e.target.matches(".multiply"):
        operator = multiply;
        display.textContent += " * ";
        break;
      case e.target.matches(".divide"):
        operator = divide;
        display.textContent += " / ";
        break;
    }
  } else if (e.target.matches('.clear')) {
    a = '';
    b = '';
    c = '';
    operand = '';
    operator = '';
    display.textContent = '';
  }
});
