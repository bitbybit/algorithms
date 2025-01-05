/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let current = 1;
    let deepest = 0;

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        const child = this.calculateDepth(item);

        if (child > deepest) {
          deepest = child;
        }
      }
    })

    return current + deepest;
  }
}

module.exports = {
  DepthCalculator
};
