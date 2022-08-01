const calcScreen = document.querySelector('#screen');
const operators = ['+', '-', '*', '/'];
const equation = [];

const equationLogicCheck = (eq, input) => {
  const operators = ['+', '-', '*', '/'];
  if (!eq[0]) return false;
  else if (eq.slice(-1)[0] !== input && !operators.includes(eq.slice(-1)[0])) {
    return true;
  }
}

const keyboardInput = (event) => {
  if (Number(event.key)) {
    equation.push(event.key);
  }
  else if (operators.includes(event.key) && equationLogicCheck(equation, event.key)) {
    equation.push(event.key);
  }
  else if (event.key === "Backspace") {
    equation.pop();
  }
  else {
    return;
  }
  calcScreen.innerHTML = equation.join('');
}

document.body.addEventListener('keydown', keyboardInput);

const keypadInput = (input) => { }