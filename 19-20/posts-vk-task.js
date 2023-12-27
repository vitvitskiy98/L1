//Задание №19
// Получаем элемент, в котором будут отображаться посты.
const postList = document.getElementById('postList');
// Начальное смещение для загрузки постов.
let offset = 0;
// Токен доступа для VK API.
const accessToken = '059e74a6059e74a6059e74a6f20688cf640059e059e74a6601463adc63ed9e44304ec80';
// ID паблика
const ownerId = '-3183750';
// Количество постов, которые будут загружены за один запрос.
const count = 5;
// Имя callback-функции для обработки данных VK API.
const callbackName = 'loadPostsCallback';

// Функция для добавления постов в html.
function addPosts (posts) {
    posts.forEach(item => {
        const postItem = document.createElement('div');
        postItem.classList.add('post-item');
        postItem.innerText = item.text;
        postList.appendChild(postItem);
    });
}

// Функция для загрузки постов.
function loadPosts() {
    window[callbackName] = function (data) {
        if (data.response) {
            // Получаем список постов из данных VK API.
            const posts = data.response.items;
            addPosts(posts);
            // Увеличиваем смещение для следующего запроса.
            offset += posts.length;
            // Получаем данные из кэша localStorage.
            const cachedData = localStorage.getItem('cachedPosts');
            // Разбираем кэшированные данные, если они есть, или создаем пустой массив.
            const cachedPosts = cachedData ? JSON.parse(cachedData) : [];
            // Объединяем новые посты и кэшированные посты.
            const updatedPosts = [...posts, ...cachedPosts];
            // Сохраняем обновленные посты в кэш localStorage.
            savePostsToCache(updatedPosts);
        } else {
            console.error('Ошибка при загрузке постов:', data.error);
        }
    };

    // Создаем элемент script для выполнения запроса.
    const script = document.createElement('script');
    script.src = `https://api.vk.com/method/wall.get?owner_id=${ownerId}&count=${count}&offset=${offset}&access_token=${accessToken}&v=5.131&callback=${callbackName}`;
    document.body.appendChild(script);

    // Удаляем callback-функцию после выполнения запроса.
    script.onload = () => {
        delete window[callbackName];
        script.remove();
    };
}

// Максимальный размер кэша в байтах 
const MAX_CACHE_SIZE = getMaxLocalStorageSize();

function savePostsToCache(posts) {
    const updatedPosts = [...posts];
    console.log(updatedPosts)

    // Определяем текущий размер кэша
    let currentSize = new Blob([JSON.stringify(updatedPosts)]).size;

    // Пока размер кэша больше максимального, удаляем старые элементы.
    while (currentSize > MAX_CACHE_SIZE && updatedPosts.length > 0) {
        for (let i = 0; i < 5; i++) {
            updatedPosts.shift();
        }
        currentSize = new Blob([JSON.stringify(updatedPosts)]).size;
    }

    localStorage.setItem('cachedPosts', JSON.stringify(updatedPosts));

    calculateLocalStorageSize();
}

// Функция для загрузки данных из кэша localStorage.
function loadPostsFromCache() {
    const cachedData = localStorage.getItem('cachedPosts');
    if (cachedData) {
        const posts = JSON.parse(cachedData);
        addPosts(posts);
        return posts;
    }
    return [];
}

const widgetСontainer = document.getElementById('widget-container');
// Функция для проверки, если прокрутка близка к концу блока.
function isScrollAtBottom() {
    const postListHeight = widgetСontainer.clientHeight;
    const scrollTop = widgetСontainer.scrollTop;
    const scrollHeight = widgetСontainer.scrollHeight;   
    // Проверяем, если прокрутка близка к концу блока
    return scrollTop + postListHeight >= scrollHeight - 100;
}
// Добавляем слушатель события скроллинга к блоку.
widgetСontainer.addEventListener('scroll', () => {
    if (isScrollAtBottom()) {
        loadPosts();
    }
});

// Загружаем новые посты.
loadPosts();

// Загружаем данные из кэша.
const cachedPosts = loadPostsFromCache();

// В конце сохраняем данные в кэш, чтобы учесть ограничение размера.
savePostsToCache(cachedPosts);


//Задание №20
// Функция для подсчета объема данных в localStorage.
function calculateLocalStorageSize() {
    //Выполняем итерацию по всем элементам в localStorage, измеряя размер данных в каждом элементе и суммируя их, чтобы определить общий размер данных.
    const localStorageSize = Object.keys(localStorage).reduce((total, key) => {
        return total + localStorage[key].length;
    }, 0);
    // Округляем до MB и 2 десятичных знаков.
    const megabytes = (localStorageSize / (1024 * 1024)).toFixed(2);
    const maxMegabytes = (MAX_CACHE_SIZE / (1024 * 1024)).toFixed(2);

    console.log(`Занято памяти в localStorage: ${megabytes} MB / ${maxMegabytes} MB (максимальный размер)`);
}

// Вызываем функцию для подсчета и вывода информации о размере localStorage.
calculateLocalStorageSize();



// Код для получения MAX_CACHE_SIZE.
function getMaxLocalStorageSize() {
    const testKey = "test";
    let maxSize = 1;
    let testData = "a".repeat(1024 * 1024);
    while (true) {
      try {
        window.localStorage.setItem(testKey, testData);
        window.localStorage.removeItem(testKey);
        maxSize = testData.length;
        testData += "a".repeat(1024 * 1024);
      } catch {
        return maxSize;
      }
    }
}
  