import {wordEnding} from "./word-ending.module.js"

const input = document.querySelector('.input');
const resultBtn = document.querySelector('.result-btn');
const resultParagraph = document.querySelector('.result-paragraph');

resultBtn.addEventListener('click', ()=> {
    const inputValue = parseInt(input.value); 

    //Проверяем корректно ли введенное число.
    if (!isNaN(inputValue)) {
        //Вызываем методы из модуля для вывода сообщения с правильным окончанием.
       resultParagraph.innerHTML = `${wordEnding.messageCountString(inputValue)}`;
       resultParagraph.innerHTML += `<br>${wordEnding.userCountString(inputValue)}`;
    } else {
       resultParagraph.innerHTML = "Пожалуйста, введите корректное число.";
    }
});