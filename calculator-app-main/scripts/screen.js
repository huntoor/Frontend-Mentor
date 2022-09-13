const calcScreen = document.querySelector('#screen');
const keypadBtns = document.querySelectorAll('.btn');
const operators = ['+', '-', '*', '/'];
const equation = [];
let number = 0;

const equationLogicCheck = (eq, input) => {
  const operators = ['+', '-', '*', '/'];
  if (!eq[0]) return false;
  else if (eq.slice(-1)[0] !== input && !operators.includes(eq.slice(-1)[0])) {
    return true;
  }
}

const keyboardInput = (event) => {
  if (!isNaN(Number(event.key))) {
    equation.push(event.key);
  }
  else if (operators.includes(event.key) && equationLogicCheck(equation, event.key)) {
    equation.push(event.key);
  }
  else if (event.key === "Backspace") {
    equation.pop();
  }
  else if (event.key === "Enter") {
    computerDoMath(equation);
  }
  else {
    return;
  }
  calcScreen.innerHTML = equation.join('');
}

const keypadInput = (event) => {
  const btn = event.target;

  if (!isNaN(Number(btn.value))) {
    equation.push(btn.value);
  } else if (operators.includes(btn.value) && equationLogicCheck(equation, btn.value)) {
    equation.push(btn.value);
  } else if (btn.value === "del") {
    equation.pop();
  } else if (btn.value === "reset") {
    equation.splice(0, equation.length);
  } else if (btn.value === "equal") {
    computerDoMath(equation);
  } else {
    return;
  }
  calcScreen.innerHTML = equation.join('');
}

document.body.addEventListener('keydown', keyboardInput);

keypadBtns.forEach(btn => {
  btn.addEventListener('click', keypadInput);
})