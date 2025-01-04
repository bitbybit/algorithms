/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {number} disksNumber number of disks
 * @param {number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const seconds = Math.floor(turns / turnsSpeed * 60 * 60);

  return {
    turns,
    seconds
  }
}

module.exports = {
  calculateHanoi
};
