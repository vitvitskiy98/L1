
const addAnimationBtn = document.querySelector('.result-btn');
const resultParagraph = document.querySelector('.result-paragraph');
const resultBlock = document.querySelector(".result-block");

addAnimationBtn.addEventListener('click', () => {
    resultBlock.classList.toggle("animated");
    addAnimationBtn.innerHTML ="Удалить анимацию";
    if(!resultBlock.classList.contains("animated")) {
        addAnimationBtn.innerHTML ="Добавить анимацию";
    }
});
