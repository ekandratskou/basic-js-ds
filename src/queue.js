const { NotImplementedError } = require("../lib/errors");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

//определение узла связанного списка
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//определение очереди
class Queue {
  constructor() {
    this.head = null; // указатель на первый элемент (начало очереди)
    this.tail = null; // второй элемент (конец очереди)
  }

  getUnderlyingList() {
    const toPlain = (node) =>
      node ? { value: node.value, next: toPlain(node.next) } : null; // рекурсивно строим всю цепочку узлов
  }

  // добавляем элемент в конец очереди
  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode; // очередь пуста
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // связываем старый хвост с новым узлом
      this.tail = newNode; //обновляем хвост, теперь он указывает на новый узел
    }
  }

  // удаляем элемент из начала очереди и возвращаем его значение
  dequeue() {
    if (!this.head) {
      return undefined; // очередь пуста
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; // если очередь опустела
    }
    return removedValue;
  }
}

module.exports = {
  Queue,
};
