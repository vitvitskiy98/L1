
const addBtn = document.querySelector('.result-btn');
const resultParagraph = document.querySelector('.result-paragraph');

addBtn.addEventListener('click', () =>{
    const newElement = document.createElement('div');
    const paragraph = document.createElement("p");

    paragraph.innerHTML = "Новый элемент";
    newElement.appendChild(paragraph);

    newElement.classList.add("new");
    resultParagraph.appendChild(newElement);
});
