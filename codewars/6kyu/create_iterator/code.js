const createIterator = (array) => {
  return {
    _index: 0,

    next() {
      const result = {
        value: array[this._index],
        done: this._index >= array.length
      }

      this._index += 1

      return result
    },

    get index() {
      return this._index > array.length ? array.length : this._index
    }
  }
};
