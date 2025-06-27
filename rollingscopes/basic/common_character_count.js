/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const [sMax, sMin] = s1.length > s2 ?
    [s1.split(''), s2.split('')] :
    [s2.split(''), s1.split('')];

  let result = 0;

  for (const char of sMin) {
    const sMaxIndex = sMax.indexOf(char);

    if (sMaxIndex !== -1) {
      result += 1;

      sMax.splice(sMaxIndex, 1);
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
