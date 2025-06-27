/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {number} n
 * @return {number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;

  while (result > 9) {
    const nList = String(result).split('').map(Number);

    result = nList.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue,
      0);
  }

  return result;
}

module.exports = {
  getSumOfDigits
};
