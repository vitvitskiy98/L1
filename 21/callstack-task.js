const resultParagraph = document.querySelector(".result-paragraph");
function getCallStackSize() {
    let count = 0;
    try {
        function recurtion() {
            count++;
            recurtion();
        }

        recurtion()
    } catch { 
        console.log('Размер колстека: ', count);
        resultParagraph.innerHTML = "Размер колстека: "+ count
    }
}

getCallStackSize();

//Результаты
//1. Chrome
//Размер колстека:  12540
//2. Firefox
//Размер колстека:  31316
//3. Opera
//Размер колстека:  12552