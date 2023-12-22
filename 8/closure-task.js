  const resultParagraph = document.querySelector(".result-paragraph")
  const firstFunc = () => 2 + 2;
  const secondFunc = () => 10 / 5;
  const thirdFunc = () => Math.pow(5, 6);
  const arrayOfFunctions = [firstFunc, secondFunc, thirdFunc];

function executeFunctions(functions) {
    return function() {
         // Создаем массив для хранения результатов.
      const results = [];
      // Проходим по каждой функции и добавляем ее результат в массив.
      for (const func of functions) {
        results.push(func());
      }
      
      // Возвращаем массив результатов.
      return results;
      // После выполнения всех функций в массиве functions, возвращается массив results
      // Возвращаемая анонимная функция имеет доступ к внешней переменной functions, это и есть пример замыкания
    };
  }

  const combinedFunction = executeFunctions(arrayOfFunctions);
  resultParagraph.innerHTML += combinedFunction()