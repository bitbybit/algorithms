/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array<boolean>>} matrix
 * @return {Array<Array<number>>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  const result = Array(rows).fill([])
    .map(() => Array(columns).fill(0));

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const isTopLeft = matrix?.[row - 1]?.[column - 1] ?? false;
      const isTop = matrix?.[row - 1]?.[column] ?? false;
      const isTopRight = matrix?.[row - 1]?.[column + 1] ?? false;
      const isLeft = matrix[row]?.[column - 1] ?? false;
      const isRight = matrix[row]?.[column + 1] ?? false;
      const isBottomLeft = matrix?.[row + 1]?.[column - 1] ?? false;
      const isBottom = matrix?.[row + 1]?.[column] ?? false;
      const isBottomRight = matrix?.[row + 1]?.[column + 1] ?? false;

      result[row][column] =
        (isTopLeft ? 1 : 0) +
        (isTop ? 1 : 0) +
        (isTopRight ? 1 : 0) +
        (isLeft ? 1 : 0) +
        (isRight ? 1 : 0) +
        (isBottomLeft ? 1 : 0) +
        (isBottom ? 1 : 0) +
        (isBottomRight ? 1 : 0);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
