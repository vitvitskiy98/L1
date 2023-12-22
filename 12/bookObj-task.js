const resultParagraph = document.querySelector(".result-paragraph");
const secondParagraph = document.querySelectorAll(".result-paragraph")[1];
const thirdParagraph = document.querySelectorAll(".result-paragraph")[2];
const changeBtn = document.querySelector("button");

const book = {
  title: "Преступление и наказание",
  author: "Фёдор Достоевский",
  year: 1866,

  // Метод для получения названия книги.
  getTitle: function () {
    return this.title;
  },

  // Метод для изменения названия книги.
  changeTitle: function (newTitle) {
    this.title = newTitle;
  },

  // Метод для получения имени автора.
  getAuthor: function () {
    return this.author;
  },

  // Метод для изменения имени автора.
  changeAuthor: function (newAuthor) {
    this.author = newAuthor;
  },

  // Метод для получения года издания.
  getYear: function () {
    return this.year;
  },

  // Метод для изменения года издания.
  changeYear: function (newYear) {
    this.year = newYear;
  },
};

function getBookInfo() {

  resultParagraph.innerHTML = "Предыдущее название книги: " + book.getTitle();
  secondParagraph.innerHTML = "Предыдущий автор книги: " + book.getAuthor();
  thirdParagraph.innerHTML = "Предыдущий год издания книги: " + book.getYear();

}
getBookInfo();

function changeBookExample() {
  book.changeTitle("1984");
  book.changeAuthor("Джордж Оруэлл");
  book.changeYear(1949);
  resultParagraph.innerHTML = "Новое название книги: " + book.getTitle();
  secondParagraph.innerHTML = "Новый автор книги: " + book.getAuthor();
  thirdParagraph.innerHTML = "Новый год издания книги: " + book.getYear();
}

changeBtn.addEventListener("click", changeBookExample);
