const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  #tree = null;

  toString() {
    return JSON.stringify(this.#tree);
  }

  /**
   * @returns {Node|null}
   */
  root() {
    return this.#tree;
  }

  /**
   * @param {number} data
   */
  add(data) {
    if (!this.#hasRoot) {
      this.#addRoot(data);

      return;
    }

    if (this.has(data)) {
      return;
    }

    const parent = this.#searchParent({
      data,
      tree: this.#tree
    })

    switch (true) {
      case this.#isLeft(parent, data):
        parent.left = new Node(data);
        break;

      case this.#isRight(parent, data):
        parent.right = new Node(data);
        break;

      default:
        break;
    }
  }

  /**
   * @param {number} data
   * @returns {boolean}
   */
  has(data) {
    const node = this.find(data);

    return node !== null;
  }

  /**
   * @param {number} data
   * @returns {Node|null}
   */
  find(data) {
    return this.#searchNode({ data, tree: this.#tree });
  }

  /**
   * @param {number} data
   */
  remove(data) {
     this.#tree = this.#filterNode({
       data,
       tree: this.#tree
     });
  }

  /**
   * @returns {number}
   */
  min() {
    return this.#searchMin(this.#tree);
  }

  /**
   * @returns {number}
   */
  max() {
    return this.#searchMax(this.#tree);
  }

  /**
   * @param {number} data
   */
  #addRoot(data) {
    this.#tree = new Node(data);
  }

  /**
   * @param {params} params
   * @param {number} params.data
   * @param {Node|null} params.tree
   * @returns {Node|null}
   */
  #searchParent({
    data,
    tree
  }) {
    switch (true) {
      case (
        this.#isLeft(tree, data) &&
        tree?.left !== null &&
        tree?.left?.data !== data
      ):
        return this.#searchParent({ data, tree: tree.left });

      case (
        this.#isRight(tree, data) &&
        tree?.right !== null &&
        tree?.right?.data !== data
      ):
        return this.#searchParent({ data, tree: tree.right });

      default:
        return tree;
    }
  }

  /**
   * @param {params} params
   * @param {number} params.data
   * @param {Node|null} params.tree
   * @returns {Node|null}
   */
  #searchNode({
    data,
    tree
  }) {
    switch (true) {
      case tree?.data === data:
        return tree;

      case this.#isLeft(tree, data):
        return this.#searchNode({ data, tree: tree.left });

      case this.#isRight(tree, data):
        return this.#searchNode({ data, tree: tree.right });

      default:
        return null;
    }
  }

  /**
   * @param {params} params
   * @param {number} params.data
   * @param {Node|null} params.tree
   */
  #filterNode({
    data,
    tree
  }) {
    if (tree === null) {
      return tree;
    }

    if (data < tree.data) {
      tree.left = this.#filterNode({ data, tree: tree.left });

      return tree;
    }

    if (data > tree.data) {
      tree.right = this.#filterNode({ data, tree: tree.right });

      return tree;
    }

    if (tree.left === null) {
      return tree.right;
    }

    if (tree.right === null) {
      return tree.left;
    }

    let successor = tree.right;

    while (successor.left) {
      successor = successor.left;
    }

    tree.data = successor.data;
    tree.right = this.#filterNode({ data: successor.data, tree: tree.right });

    return tree;
  }

  /**
   * @param {Node|null} tree
   * @returns {number|null}
   */
  #searchMin(tree) {
    if (tree?.left?.data < tree?.data) {
      return this.#searchMin(tree.left);
    }

    return tree?.data ?? null;
  }

  /**
   * @param {Node|null} tree
   * @returns {number|null}
   */
  #searchMax(tree) {
    if (tree?.right?.data > tree?.data) {
      return this.#searchMax(tree.right);
    }

    return tree?.data ?? null;
  }

  /**
   * @param {Node|null} tree
   * @param {number} data
   * @returns {boolean}
   */
  #isLeft(tree, data) {
    return tree?.data > data;
  }

  /**
   * @param {Node|null} tree
   * @param {number} data
   * @returns {boolean}
   */
  #isRight(tree, data) {
    return tree?.data < data;
  }

  /**
   * @returns {boolean}
   */
  get #hasRoot () {
    return this.#tree !== null;
  }
}

module.exports = {
  BinarySearchTree
};
