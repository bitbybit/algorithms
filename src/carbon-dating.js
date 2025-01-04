const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {string} sampleActivity string representation of current activity
 * @return {number | boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const sampleActivityNum = Number(sampleActivity);

  const isValid = typeof sampleActivity === 'string' &&
    Number.isFinite(sampleActivityNum) &&
    sampleActivityNum > 0;

  if (!isValid) {
    return false;
  }

  const rate = 0.693 / HALF_LIFE_PERIOD;

  const age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / rate);

  const isInadequate = age < 0;

  if (isInadequate) {
    return false;
  }

  return age;
}

module.exports = {
  dateSample
};
