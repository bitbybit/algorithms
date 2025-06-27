/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  const hasDate = date !== undefined;

  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const autumn = [8, 9, 10];
  const winter = [11, 0, 1];

  const error = 'Unable to determine the time of year!';

  if (!hasDate) {
    return error;
  }

  if (!isValid(date)) {
    throw new Error('Invalid date!');
  }

  switch (true) {
    case spring.includes(date.getMonth()):
      return 'spring';

    case summer.includes(date.getMonth()):
      return 'summer';

    case autumn.includes(date.getMonth()):
      return 'autumn';

    case winter.includes(date.getMonth()):
      return 'winter';

    default:
      return error;
  }
}

/**
 * @param {unknown} date
 * @returns {boolean}
 */
function isValid(date) {
  try {
    date.getTime();
  } catch {
    return false;
  }

  return true;
}

module.exports = {
  getSeason
};
