const input = document.querySelector('.input');
const resultBtn = document.querySelector('.result-btn');
const resultParagraph = document.querySelector('.result-paragraph');

// Странным числом считается число, которое равно сумме всех своих делителей, кроме самого себя.
function isItStrangeNum(number) {
    if (number <= 0) {
        // Ноль и отрицательные числа не могут быть странными.
        return false;
    }

    // Создаём переменную для хранения суммы всех делителей.
    let sumOfDivisors = 0;

    // Создаём цикл, который ищет все делители.
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            // Суммируем все делители, когда находим их.
            sumOfDivisors += i;
        }
    }

    // Сравниваем сумму всех делителей с исходным числом.
    return sumOfDivisors === number;
}

const handleStrangeNum = () => {
      // Преобразуем значение инпута в число.
      const inputValue = parseInt(input.value); 

      //Проверяем корректно ли введенное число.
      if (!isNaN(inputValue)) {
          //Проверяем число на странность.
          if(isItStrangeNum(inputValue)){
              resultParagraph.innerHTML = "Это странное число!";
          } else {
              resultParagraph.innerHTML = "Введённое число не является странным";
          }
      } else {
          resultParagraph.innerHTML = "Введите натуральное число";
      }
}
resultBtn.addEventListener('click', handleStrangeNum);