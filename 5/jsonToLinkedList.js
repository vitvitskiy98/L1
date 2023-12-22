
// Создаем класс для представления узла связного списка
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  // Создаем класс для представления самого связного списка с методом append,
  // который добавляет элемент в конец связного списка
  class LinkedList{
    constructor() {
      this.head = null;
    }
    // Метод, который добавляет новый узел с заданным значением в конец связного списка
    append(value) {
      // Создаем новый узел и передаем значение (value)
      const newNode = new Node(value);
      // если нет head, добавляем его
      if (!this.head) {
        this.head = newNode;
        return;
      }
      // Если есть head, то инициализируем переменную ссылкой на головной узел
      let current = this.head;
      // Цикл перебирает узлы в связном списке, пока не будет найден последний узел списка
      // (тот, у которого next равен null)
      while (current.next) {
        current = current.next;
      }
      // После завершения цикла, мы находим последний узел списка и устанавливаем его next равным новому узлу
      current.next = newNode;
    }
  }
  // Функция принимает JSON-массив и преобразует его в связный список,
  // добавляя каждый элемент в конец списка с помощью метода append
  function jsonToLinkedList(jsonData) {
    const linkedList = new LinkedList();
    jsonData.forEach(item => {
      linkedList.append(item);
    });
    return linkedList;
  }
  // Пример использования
  alert("решение в консоли")
  const jsonData = [1, 2, 3, 4, 5];
  const linkedList = jsonToLinkedList(jsonData);
  console.log(linkedList);