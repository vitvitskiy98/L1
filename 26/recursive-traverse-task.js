const inputBlock = document.querySelector(".input-block")
const resultBtn = document.querySelector(".result-btn");
const resultParagraph = document.querySelector('.result-paragraph');

// Функция для рекурсивного обхода дерева DOM.

function recursiveTraverseDom(el) {
  var children = el.childNodes, i = children.length;
  // если это элемент то, рекурсивно обходим дочерние элементы.
  while (i--) if (el.nodeType === 1) {
    recursiveTraverseDom(children[i])
    console.log(children[i])
  };
}
recursiveTraverseDom(inputBlock)



alert("Список элементов в консоли")
    


