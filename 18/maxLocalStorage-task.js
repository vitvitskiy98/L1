
// В веб-браузерах нет прямого способа определить максимальный объем localStorage через JavaScript без итеративной проверки.
function getMaxLocalStorageSize() {
  // Создаем переменную, которая будет хранить общий объем данных, добавленных в локальное хранилище
  let totalSize = 0;
  try {
    // Проверяем наличие локального хранилища в браузере
    if ('localStorage' in window && window['localStorage'] !== null) {
      // Создается переменная testKey, которая будет использоваться в качестве ключа для записи данных в локальное хранилище
      let testKey = 'test';
      // Создается переменная testData, которая содержит строку, повторенную много раз (1 МБ данных).
      // Эта строка будет добавляться в локальное хранилище
      let testData = '1'.repeat(1024 * 1024); // 1 МБ данных
      // Бесконечный цикл, который будет продолжаться, пока не произойдет ошибка
      while (true) {
        // Данные записываются в локальное хранилище с использованием текущего ключа testKey и данных testData
        localStorage.setItem(testKey, testData);
        // Обновляется общий объем данных
        totalSize += testData.length;
        testKey += '1';
      }
    }
  } catch (e) {
    console.log(e); // Выводим ошибку в консоли.
    localStorage.clear(); // Удаляем все тестовые данные.
    // Вычисляется максимальный размер в байтах, килобайтах, мегабайтах и гигабайтах
    let maxSizeBytes = totalSize;
    let maxSizeKB = maxSizeBytes / 1024;
    let maxSizeMB = maxSizeKB / 1024;
    let maxSizeGB = maxSizeMB / 1024;
    // Результат возвращается в виде объекта
    return {
      bytes: maxSizeBytes,
      kilobytes: maxSizeKB,
      megabytes: maxSizeMB,
      gigabytes: maxSizeGB
    };
  }
}
// Пример использования функции
let maxLocalStorageSize = getMaxLocalStorageSize();
alert("Результат в консоли!")
console.log('Максимальный объем localStorage:');
console.log('Байт: ' + maxLocalStorageSize.bytes + ' байт');
console.log('Килобайт: ' + maxLocalStorageSize.kilobytes + ' КБ');
console.log('Мегабайт: ' + maxLocalStorageSize.megabytes + ' МБ');
console.log('Гигабайт: ' + maxLocalStorageSize.gigabytes + ' ГБ');
getMaxLocalStorageSize();
  