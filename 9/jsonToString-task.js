const resultParagraph = document.querySelector(".result-paragraph");

const jsonExample = {
  name: "Vlad",
  surname: "Vitvitskii",
  hobbies: ["table tennis", "foreign languages"],
  info: {
    city: "Moscow",
    country: "Russia",
  },
};

// Создаем функцию, которая рекурсивно обходит структуру данных JSON без использования JSON.stringify.

function JSONToString(obj) {
  // Функция поддерживает строки, числа, логические значения, массивы и объекты
  if (typeof obj === "string") {
    return `"${obj}"`;
  } else if (
    typeof obj === "number" ||
    typeof obj === "boolean" ||
    obj === null
  ) {
    return `${obj}`;
  } else if (Array.isArray(obj)) {
    const elements = obj.map((element) => JSONToString(element));
    return `[${elements.join(",")}]`;
  } else if (typeof obj === "object") {
    const keys = Object.keys(obj);
    const pairs = keys.map((key) => `"${key}":${JSONToString(obj[key])}`);
    return `{${pairs.join(",")}}`;
  } else {
    throw new Error(`Тип данных не поддерживается: ${typeof obj}`);
  }
}

resultParagraph.innerHTML = JSONToString(jsonExample);
