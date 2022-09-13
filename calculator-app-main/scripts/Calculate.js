class Calculate {
  constructor(btns, screen, equation = []) {
    this.btns = btns;
    this.screen = screen;
    this.equation = equation;
  }

  keypadInput = (event) => {
    const btn = event.target;

    if (btn.value === "del") {
      this.equation.pop();
      this.writeOnScreen(this.equation.join(""));
    } else if (btn.value === "reset") {
      this.equation = ["0"];
      this.writeOnScreen(this.equation.join(""));
    } else if (btn.value === "equal") {
      this.computerDoMath();
    } else {
      this.equation.push(btn.value);
      this.writeOnScreen(this.equation.join(""));
    } 
  }

  keyboardInput = (event) => {
    const operators = ['+', '-', '*', '/'];

    if (!isNaN(Number(event.key))) {
      this.equation.push(event.key);
      this.writeOnScreen(this.equation.join(""));
    }
    else if (operators.includes(event.key)) {
      this.equation.push(event.key);
      this.writeOnScreen(this.equation.join(""));
    }
    else if (event.key === "Backspace") {
      this.equation.pop();
      this.writeOnScreen(this.equation.join(""));
    }
    else if (event.key === "Enter") {
      this.computerDoMath();
    }
    else {
      return;
    }
  }

  writeOnScreen = (toWrite) => {
    this.screen.innerHTML = toWrite;
  }

  computerDoMath = () => { 
    try {
      this.writeOnScreen(eval(this.equation.join("")));
    } catch(err) {
      this.writeOnScreen("Error")
    }
  }
}