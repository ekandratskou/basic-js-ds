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
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

//определение очереди
class Queue {
  constructor() {
    this.head = null; // указатель на первый элемент (начало очереди)
    this.tail = null; // последний элемент (конец очереди)
  }

  getUnderlyingList() {
    return this.head;
  }

  // добавляем элемент в конец очереди
  enqueue(value) {
    const node = { value, next: null }; // создаем узел как простой объект
    if (this.head === null) {
      this.head = node; // очередь пуста
      this.tail = node;
    } else {
      this.tail.next = node; // связываем старый хвост с новым узлом
      this.tail = node; //обновляем хвост, теперь он указывает на новый узел
    }
  }

  // удаляем элемент из начала очереди и возвращаем его значение
  dequeue() {
    if (this.head === null) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head === null) {
      //queue is empty
      this.tail = null;
    }

    return value;
  }
}

module.exports = {
  Queue,
};
