const { ListNode } = require('./list_node.js');

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
class Queue {
  #list = null;

  /**
   * @returns {ListNode|null}
   */
  getUnderlyingList() {
    return this.#list;
  }

  /**
   * @param {number} value
   */
  enqueue(value) {
    const node = new ListNode(value);

    if (!this.#hasRoot) {
      this.#list = node;

      return;
    }

    let current = this.#list;

    while (current !== null) {
      if (current.next === null) {
        current.next = node;

        return;
      } else {
        current = current.next
      }
    }
  }

  /**
   * @returns {number|null}
   */
  dequeue() {
    if (!this.#hasRoot) {
      return null;
    }

    const value = this.#list.value;

    this.#list = this.#list.next;

    return value;
  }

  /**
   * @returns {boolean}
   */
  get #hasRoot () {
    return this.#list !== null;
  }
}

module.exports = {
  Queue
};
