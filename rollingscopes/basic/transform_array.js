/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const isValid = Array.isArray(arr);

  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  if (!isValid) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const result = [];

  arr.forEach((value, index) => {
    switch (value) {
      case discardNext:
        break;

      case discardPrev:
        if (arr[index - 1] === result.at(-1)) {
          result.pop();
        }
        break;

      case doubleNext:
        if (arr[index + 1] !== undefined) {
          result.push(arr[index + 1]);
        }
        break;

      case doublePrev:
        if (
          arr[index - 1] !== undefined &&
          arr[index - 1] === result.at(-1)
        ) {
          result.push(arr[index - 1]);
        }
        break;

      default:
        if (arr[index - 1] !== discardNext) {
          result.push(value);
        }
        break;
    }
  });

  return result;
}

module.exports = {
  transform
};
