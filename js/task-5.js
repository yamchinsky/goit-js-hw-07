// Напиши скрипт который, при наборе текста в инпуте input#name - input
// (событие input), подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const refs = {
  nameInput: document.querySelector(['#name-input']),
  nameOutput: document.querySelector(['#name-output']),
};

refs.nameInput.addEventListener('input', changeName);

function changeName(event) {
  if (event.currentTarget.value === '') {
    refs.nameOutput.textContent = 'незнакомец';
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
}