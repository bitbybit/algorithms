/**
 * Create a repeating string based on the given parameters
 *
 * @param {unknown} str string to repeat
 * @param {Object} options options object
 * @param {number|undefined} options.repeatTimes
 * @param {string|undefined} options.separator
 * @param {unknown|undefined} options.addition
 * @param {number|undefined} options.additionRepeatTimes
 * @param {string|undefined} options.additionSeparator
 * @return {string} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {
  repeatTimes = 1,
  separator = '+',
  addition,
  additionRepeatTimes = 1,
  additionSeparator = '|'
} = {
  repeatTimes: 1,
  separator: '+',
  addition: undefined,
  additionRepeatTimes: 1,
  additionSeparator: '|'
}) {
  const strString = String(str);
  const additionString = String(addition);

  const hasAddition = addition !== undefined;

  const result = [];
  const additionResult = [];

  for (let j = 0; j < additionRepeatTimes; j++) {
    additionResult.push(additionString);
  }

  for (let i = 0; i < repeatTimes; i++) {
    if (!hasAddition) {
      result.push(strString);

      continue;
    }

    result.push(
      `${strString}${additionResult.join(additionSeparator)}`
    );
  }

  return result.join(separator);
}

module.exports = {
  repeater
};
