const form = document.getElementById("myForm");
const popup = document.getElementById("popup");
const result = document.getElementById("result");

const closePopupButton = document.getElementById("closePopup");
// Добавляем обработчик события на отправку формы.
form.addEventListener("submit", (event)=> {
    // Предотвращаем отправку формы по умолчанию.
    event.preventDefault();
    // Получаем значения полей формы.
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    // Проверяем, что оба поля заполнены.
    if (!name || !email) {
        alert("Заполните все поля")
        return
    }
    // Отображаем данные во всплывающем окне.
    result.innerHTML  = `Вы ввели следующие данные:<br>Имя: ${name}<br>Email: ${email}`;
    popup.style.display = "block";
    form.style.display = "none";
});

// Закрытие всплывающего окна при нажатии на кнопку.
closePopupButton.addEventListener("click", ()=> {
    popup.style.display = "none";
    form.style.display = "flex";
});