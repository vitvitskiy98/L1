const resultParagraph = document.querySelector(".result-paragraph");

let count = 0;
function recursiveDocumentWrite(elem) {
  console.log(count++);
  elem = "<p class ='doc-write'>" + count + "</p>"
  resultParagraph.innerHTML = elem
  document.write(recursiveDocumentWrite(elem));
}
recursiveDocumentWrite();

// https://habr.com/ru/articles/305366/
// Статья про document.write()