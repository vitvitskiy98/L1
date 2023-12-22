function parseJSON(jsonString) {
  // Удаляем пробелы
  jsonString = jsonString.trim();
  // Проверяем, что строка начинается с "{" и заканчивается "}"
  if (jsonString[0] !== "{" || jsonString[jsonString.length - 1] !== "}") {
    throw new Error(
      'Invalid JSON: JSON object must start with "{" and end with "}"'
    );
  }
  // Создаем пустой объект JSON
  const jsonObject = {};
  // Регулярное выражение, чтобы разбить строку JSON на пары ключ-значение.
  // Регулярное выражение ищет соответствия вида "ключ": значение и извлекает их.
  const regex =
    /"([^"]+)":\s*(("[^"]*")|(true|false|null)|(\d+\.?\d*|\.\d+)|\{[^{}]*\}|\[[^\[\]]*\])/g;
  // В цикле while происходит поиск всех соответствий регулярному выражению в строке jsonString.
  // Каждое соответствие обрабатывается и добавляется в объект jsonObject.
  let match;
  while ((match = regex.exec(jsonString)) !== null) {
    // Извлекаем ключ
    const key = match[1];
    let value = match[2];

    if (value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
      value = value.slice(1, -1);
    }
    // Значение обрабатывается в зависимости от его типа
    if (value === "null") {
      jsonObject[key] = null;
    } else if (value === "true") {
      jsonObject[key] = true;
    } else if (value === "false") {
      jsonObject[key] = false;
    } else if (!isNaN(value)) {
      jsonObject[key] = +value;
    } else if (value.startsWith("{") && value.endsWith("}")) {
      // Рекурсия, если значение является объектом
      jsonObject[key] = parseJSON(value);
    } else if (value.startsWith("[") && value.endsWith("]")) {
      jsonObject[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/["']/g, ""));
    } else {
      jsonObject[key] = value;
    }
  }
  return jsonObject;
}
// Строка для парсинга
const string =
  '{"name":"Vlad","surname":"Vitvitskii","hobbies":["table tennis","foreign languages"],"info":{"city":"Moscow","country":"Russia"}}';
alert("Решение в консоли");
console.log(parseJSON(string));
