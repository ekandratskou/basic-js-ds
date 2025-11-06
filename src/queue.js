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

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // указатель на первый элемент (начало очереди)
    this.tail = null; // второй элемент (конец очереди)
  }

  getUnderlyingList() {
    const toPlain = (node) =>
      node ? { value: node.value, next: toPlain(node.next) } : null; // для пустой очереди вернет null
    return toPlain(this.head);
  }

  // добавляем элемент в конец очереди
  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode; // очередь пуста
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
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
