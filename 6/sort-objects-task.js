const resultParagraph = document.querySelector(".result-paragraph");

const people = [
    { name: 'John', age: 25 },
    { name: 'Anna', age: 30 },
    { name: 'Vlad', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Alice', age: 25 },
    { name: 'Masha', age: 24 },
    { name: 'Nastya', age: 22 }
];
  

function compareObjs(firstObj, secondObj) {
    // Сначала сравниваем возраст
    if (firstObj.age < secondObj.age) {
        return -1;
    } else if (firstObj.age > secondObj.age) {
        return 1;
    } else {
        // Если возрасты равны, сравниваем имена по алфавиту
        return firstObj.name.localeCompare(secondObj.name);
    }
}
people.sort(compareObjs);

resultParagraph.innerHTML = JSON.stringify(people);
  