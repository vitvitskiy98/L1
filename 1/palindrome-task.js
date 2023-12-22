const input = document.querySelector('.input');
const resultBtn = document.querySelector('.result-btn');
const resultParagraph = document.querySelector('.result-paragraph');

function isPalindrome() {
    const str = input.value.toLowerCase().replace(/\s/g, '');
    const reversedStr = str.toLowerCase().split('').reverse().join('').replace(/\s/g, '');
    if (str === reversedStr && (str !== '')) {
        resultParagraph.innerHTML = "Данная строка является палиндром."
    }
    else if (str == '') {
        resultParagraph.innerHTML = "Введите строку";
    }
    else {
        resultParagraph.innerHTML = "Данная строка не является палиндром.";
    }
}

resultBtn.addEventListener('click', isPalindrome)