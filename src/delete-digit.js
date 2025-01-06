/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {number} n
 * @return {number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('');

  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    const digitsCropped = [...digits.slice(0, i), ...digits.slice(i + 1)];
    const nCropped = Number(digitsCropped.join(''));

    if (nCropped > result) {
      result = nCropped;
    }
  }

  return result;
}

module.exports = {
  deleteDigit
};
