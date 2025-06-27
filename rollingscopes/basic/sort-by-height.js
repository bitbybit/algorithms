/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array<number>} arr
 * @return {Array<number>}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filtered = arr.filter((height) => height !== -1);
  const sorted = filtered.sort((a, b) => a - b);

  let restoredIndex = 0;

  return arr.map((height) => {
    const isFiltered = height === -1;

    if (isFiltered) {
      return height;
    } else {
      const result = sorted[restoredIndex];

      restoredIndex += 1;

      return result;
    }
  });
}

module.exports = {
  sortByHeight
};
