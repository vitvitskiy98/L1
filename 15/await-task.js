async function asyncFunction() {
    // Асинхронная операция 1
    const result1 = await someAsyncOperation1();
  
    // Асинхронная операция 2
    const result2 = await someAsyncOperation2();
  
    // Возвращаем результат выполнения
    return { result1, result2 };
}
  
// Примеры асинхронных операций
async function someAsyncOperation1() {
    return await new Promise((resolve) => setTimeout(() => resolve("Результат 1"), 1000));
}
  
async function someAsyncOperation2() {
    return await new Promise((resolve) => setTimeout(() => resolve("Результат 2"), 1500));
}
  
// Вызов асинхронной функции и обработка результата
asyncFunction().then((result) => {
    console.log("Результат выполнения:", result);
})