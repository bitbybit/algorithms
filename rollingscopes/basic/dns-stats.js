/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array<string>} domains
 * @return {{
 *   [domain: string]: number
 * }}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  for (const domain of domains) {
    const domainSplit = domain.split('.');
    const domainReversed = domainSplit.reverse();

    for (let i = 0; i < domainReversed.length; i++) {
      const zone = `.${[
        ...domainReversed.slice(0, i),
        domainReversed[i],
      ].join('.')}`;

      result[zone] = result[zone] === undefined ?
        1 : result[zone] + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
