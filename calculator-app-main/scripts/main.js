const keypadBtns = document.querySelectorAll('.btn');
const calcScreen = document.querySelector('#screen');

const calc = new Calculate(keypadBtns, calcScreen);

document.body.addEventListener('keydown', calc.keyboardInput);

keypadBtns.forEach(btn => {
  btn.addEventListener('click', calc.keypadInput);
})