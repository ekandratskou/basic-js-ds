const { NotImplementedError } = require("../lib/errors");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  // удаление всех узлов с начала списка, если они равны - к
  while (l !== null && l.value == k) {
    // список не пуст и значение узла равно - к
    l = l.next;
  }

  let curr = l;
  while (curr !== null && curr.next !== null) {
    // пока не дошли до конца списка
    if (curr.next.value === k) {
      // проверяем содержит следующий узел - к
      //Пропустить узел со значением k и перепрыгнуть на следующий узел
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return l;
}

module.exports = {
  removeKFromList,
};
