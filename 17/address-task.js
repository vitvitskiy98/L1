const input = document.querySelector('.input');
const resultParagraph =  document.querySelector(".result-paragraph")

// Функция для выполнения геокодинга.
function geocode(address, callback) {
    // Выполняем геокодинг для заданного адреса с использованием API ЯндексКарт.
    return ymaps.geocode(address)
        .then((response) => {
           // Создаем массив для хранения подсказок.
            const suggestions = [];
            // Перебираем геообъекты.
            response.geoObjects.each(function (obj) {
                // Добавляем адрес в массив подсказок.
                suggestions.push(obj.getAddressLine());
            });
            // Вызываем колбэк и передаем ему массив подсказок.
            callback(suggestions);
        })
}

// Функция для отображения подсказок.
function displaySuggestions(suggestions) {
    // Очищаем блок от предыдущих подсказок.
    resultParagraph.innerHTML = '';
    // Перебираем подсказки.
    suggestions.forEach(suggestion => {
        // Создаем элемент списка для каждой подсказки.
        const listItem = document.createElement('li');
        // Устанавливаем текст элемента списка из подсказки.
        listItem.textContent = suggestion;
        // Добавляем обработчик клика на элементе списка.
        listItem.addEventListener('click', () => {
            // Устанавливаем значение поля ввода равным выбранной подсказке.
            input.value = suggestion;
            // Очищаем блок подсказок.
            resultParagraph.innerHTML = '';
        });
        // Добавляем элемент списка в блок для отображения подсказок.
        resultParagraph.appendChild(listItem);
    });
}

// Функция для создания дебаунса.
function debounce(func, delay) {
    // Переменная для хранения идентификатора таймера.
    let timeout;
    return function () {
        // Сохраняем текущий контекст.
        const context = this;
        // Сохраняем аргументы функции.
        const args = arguments;
        // Очищаем предыдущий таймер, если он был.
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            // Вызываем функцию с сохраненным контекстом и аргументами после задержки.
            func.apply(context, args);
        }, delay);
    };
}

// Функция для выполнения геокодинга с задержкой.
const geocodeWithDelay = debounce((address) => {
    // Проверяем, если адрес пуст.
    if (address.trim() === '') {
        // Очищаем блок и завершаем выполнение функции.
        resultParagraph.innerHTML = '';
        return;
    }
    // Выполняем геокодинг с заданным адресом.
    geocode(address, (suggestions) => {
        // Отображаем полученные подсказки.
        displaySuggestions(suggestions);
    });
}, 2000); // Устанавливаем задержку в 2 секунды.

// Обработчик события ввода адреса.
input.addEventListener('input', (event) => {
    const address = event.target.value;
    geocodeWithDelay(address);
});