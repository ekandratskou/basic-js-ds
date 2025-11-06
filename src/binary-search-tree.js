const { NotImplementedError } = require("../lib/errors");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    this._root = addWith(this._root, data);

    function addWith(node, value) {
      if (!node) return new Node(value);
      if (node.data === value) return node;

      if (value < node.data) {
        node.left = addWith(node.left, value);
      } else {
        node.right = addWith(node.right, value);
      }
      return node;
    }
  }

  find(data) {
    return findWith(this._root, data);

    function findWith(node, value) {
      if (!node) return null;
      if (node.data === value) return node;
      return value < node.data
        ? findWith(node.left, value)
        : findWith(node.right, value);
    }
  }

  has(data) {
    return searchWith(this._root, data);

    function searchWith(node, value) {
      if (!node) return false;
      if (node.data === value) return true;
      return value < node.data
        ? searchWith(node.left, value)
        : searchWith(node.right, value);
    }
  }

  remove(data) {
    this._root = removeNode(this._root, data);

    function removeNode(node, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // узел найден
        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        // оба потомка есть
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this._root) return null;
    let curNode = this._root;
    while (curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    if (!this._root) return null;
    let curNode = this._root;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
