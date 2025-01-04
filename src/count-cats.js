/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = 0;

  matrix.flat(1).forEach((item) => {
    if (item === '^^') {
      result += 1;
    }
  })

  return result;
}

module.exports = {
  countCats
};
