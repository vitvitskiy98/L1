const resultParagraph = document.querySelector(".result-paragraph")
function func(variable) { 
    return function innerFunc() {
        console.log(`Получаем доступ к внешней функции. Переменная равна: ${variable}`)
        resultParagraph.innerHTML =`Получаем доступ к внешней функции. Переменная равна: ${variable}`
    }
    return innerFunc;
}

func(5)()