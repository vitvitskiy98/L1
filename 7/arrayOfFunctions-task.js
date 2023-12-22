const firstParagraph = document.querySelector(".result-paragraph");
const secondParagraph = document.querySelectorAll(".result-paragraph")[1];
const thirdParagraph = document.querySelectorAll(".result-paragraph")[2];

async function executeFuncByOrder(functions) {
  for (let i = 0; i < functions.length; i++) {
    await new Promise((resolve) => {
      functions[i](i, resolve);
    });
  }
}

const newFunc = new Function(
  "index",
  "resolve",
  'document.querySelectorAll(".result-paragraph")[2].innerHTML =`Вызвана функция ${index + 1}`;setTimeout(resolve, 1000);'
);

const arrFunc = [
  function (index, resolve) {
    firstParagraph.innerHTML = `Вызвана функция ${index + 1}`;
    setTimeout(resolve, 1000);
  },
  (index, resolve) => {
    secondParagraph.innerHTML = `Вызвана функция ${index + 1}`;
    setTimeout(resolve, 1000);
  },
  newFunc
];

executeFuncByOrder(arrFunc);
