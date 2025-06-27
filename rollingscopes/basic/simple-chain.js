const chain = Symbol('chain');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  [chain]: [],

  /**
   * @returns {number}
   */
  getLength() {
    return this[chain].length;
  },

  /**
   * @param {unknown} value
   * @returns {this}
   */
  addLink(value) {
    if (value === undefined) {
      this[chain].push('');
    } else {
      this[chain].push(value);
    }

    return this;
  },

  /**
   * @param {number} position
   * @returns {this}
   */
  removeLink(position) {
    const isValid = Number.isFinite(position) &&
      position > 0 &&
      position <= this[chain].length &&
      this[chain].at(position) !== undefined;

    if (!isValid) {
      this[chain] = [];

      throw new Error(`You can't remove incorrect link!`);
    }

    this[chain].splice(position - 1, 1);

    return this;
  },

  /**
   * @returns {this}
   */
  reverseChain() {
    this[chain].reverse();

    return this;
  },

  /**
   * @returns {string}
   */
  finishChain() {
    const result = this[chain]
      .map((item) => {
        if (item === '') {
          return '( )';
        }

        return `( ${item} )`;
      })
      .join('~~');

    this[chain] = [];

    return result;
  }
};

module.exports = {
  chainMaker
};
