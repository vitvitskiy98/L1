// Получаем ссылки на элементы, которые нам понадобятся.
const tableBody = document.getElementById("table-body");
const pagination = document.getElementById("pagination");
// Создаем переменные для храния загруженных данных, текущей страницы и количества айтемов на ней.
let data = [];
let currentPage = 1;
const itemsPerPage = 50;

// Функция для загрузки данных с сервера.
async function fetchData() {
    try {
        // Отправляем запрос на указанный URL.
        const response = await fetch("http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true");
        // Ожидаем асинхронный ответ и преобразуем его в формат JSON.
        const json = await response.json();
        data = json;
        // Вызываем функцию для отображения данных на странице
        // на текущую страницу пагинации, на которую мы хотим отобразить данные.
        displayData(currentPage);
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
    }
}

// Функция для отображения данных на странице.
function displayData(page) {
    // Рассчитываем индексы начала и конца данных для текущей страницы.
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = data.slice(start, end);
    // Очищаем содержимое таблицы перед добавлением новых данных.
    tableBody.innerHTML = "";
    // Создаем строки таблицы и заполняем их данными.
    paginatedData.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.tel}</td>
            <td>${item.address}</td>
            <td>${item.city}</td>
            <td>${item.state}</td>
            <td>${item.zip}</td>
        `;
        tableBody.appendChild(row);
    });
    // Генерируем кнопки пагинации для текущей страницы.
    generatePaginationButtons(page);
}

// Функция для генерации кнопок пагинации
function generatePaginationButtons(currentPage) {
    // Рассчитываем общее количество страниц на основе общего количества данных .
    //и количества элементов на странице.
    const totalPages = Math.ceil(data.length / itemsPerPage);
    // Очищаем пагинацию перед созданием новых кнопок.
    pagination.innerHTML = "";
    // Создаем кнопки для каждой страницы и добавляем их.
    for (let i = 1; i <= totalPages; i++) {
        // Создаем новую кнопку и задаем ей номер.
        const button = document.createElement("button");
        button.textContent = i;
        // Добавляем обработчик клика, который будет вызывать функцию отображания другой страницы при нажатии на кнопку.
        button.addEventListener("click", () => {
            currentPage = i;
            displayData(currentPage);
        });
        // Если кнопка соответствует текущей странице, делаем её активной.
        if (i === currentPage) {
            button.classList.add("active");
        }
        // Добавляем кнопку к элементу 'pagination'.
        pagination.appendChild(button);
    }
}

// Функция для сортировки таблицы по выбранной колонке
function sortTable(columnIndex) {
    // Сортируем массив айтемов, 
    // a и b представляют два элемента массива, которые сравниваются между собой.
    data.sort((a, b) => {
        // columnIndex указывает, какую колонку нужно использовать для сравнения. 
        // С помощью Object.keys(a)[columnIndex] и Object.keys(b)[columnIndex] извлекаем  
        // значение ввыбранной колонке для элементов a и b.
        const keyA = a[Object.keys(a)[columnIndex]];
        const keyB = b[Object.keys(b)[columnIndex]];
        if (typeof keyA === 'number' && typeof keyB === 'number') {
            // Если значения числовые, используйте стандартное сравнение.
            return keyA - keyB;
        } else {
            // Сравнивает значения keyA и keyB с учетом локализации.
            return keyA.localeCompare(keyB);
        }
    });
    displayData(currentPage);
}

// Загрузка данных при загрузке страницы.
fetchData();
