
const template = document.getElementById("template-example");
const input = document.querySelector('.input');
const resultBtn = document.querySelector('.result-btn');
const resultParagraph = document.querySelector('.result-paragraph');

resultBtn.addEventListener("click", function () {
    // Клонируем содержимое шаблона.
    const clone = document.importNode(template.content, true); 
    // Добавляем клонированный элемент в контейнер.
    resultParagraph.appendChild(clone);
    // resultParagraph.appendChild(template.content) вызовёт всего один раз
});