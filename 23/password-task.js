// Получаем ссылки на элементы, которые нам понадобятся.
const inputElement = document.querySelector(".input");
const buttonElement = document.querySelector(".btn");
const resultElement = document.querySelector(".result");

const input = document.querySelector('.input');
const resultBtn = document.querySelector('.result-btn');
const resultParagraph = document.querySelector('.result-paragraph');

// Добавляем слушатель события клика на кнопку.
resultBtn.addEventListener('click', function () {
    const passowrd = input.value;
    const validationResult = validationPassword(passowrd);
    displayRating(validationResult);
})

// Функция для анализа пароля.
function validationPassword(passowrd) {
    // Регулярные выражения для проверки наличия различных символов.
    const upperCaseRegex = /[A-ZА-Я]/g;
    const lowerCaseRegex = /[a-zа-я]/g;
    const digitRegex = /\d/g;
    const specialCharsRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/g;
    // Минимальная длина пароля.
    const minLength = 6;
    // Оценка сложности пароля.
    let rating = 0;
    // Сообщение с советами по улучшению пароля.
    let adviceMessage = '';
    // Проверяем, что пароль имеет достаточную длину.
    if(passowrd.length >= minLength){
        rating++;
    } else {
        adviceMessage += "Придумайте пароль больше 6 символов. <br>"
    }
    // Проверяем наличие заглавных букв.
    if(passowrd.match(upperCaseRegex)){
        rating++;
    } else {
        adviceMessage += "Добавьте заглавные буквы. <br>"
    }
    // Проверяем наличие строчных букв.
    if(passowrd.match(lowerCaseRegex)){
        rating++;
    } else {
        adviceMessage += "Добавьте строчные буквы. <br>"
    }
    // Проверяем наличие цифр.
    if(passowrd.match(digitRegex)){
        rating++;
    } else {
        adviceMessage += "Добавьте цифры буквы. <br>"
    }
    // Проверяем наличие особых символов.
    if (passowrd.match(specialCharsRegex)){
        rating++;
    } else {
        adviceMessage += "Добавьте особый символ. <br>"
    }
    // Возвращаем объект с оценкой сложности и сообщением с советами.
    return {rating: rating, message: adviceMessage};
}

// Функция для отображения оценки сложности пароля и советов.
function displayRating(validation) {
    if (validation.rating < 3){
        resultParagraph.innerHTML = `Слабый пароль :(<br>${validation.message}`
    } else if (validation.rating < 5) {
        resultParagraph.innerHTML = `Пароль средней сложности:<br>${validation.message}`
    } else {
        resultParagraph.innerHTML = `Сильный пароль!<br>`
    }
}