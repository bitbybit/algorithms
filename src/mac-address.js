/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {string} inputString
 * @return {boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  return inputString.match(
    /^[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}-[A-F\d]{2}$/
  ) !== null;
}
module.exports = {
  isMAC48Address
};
