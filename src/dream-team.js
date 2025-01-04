/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const isValid = Array.isArray(members) &&
    members.some(isValidMember);

  if (!isValid) {
    return false;
  }

  /**
   * @type {string[]}
   */
  const result = [];

  members.forEach(member => {
    if (isValidMember(member)) {
      result.push(
        member.trim().toUpperCase().at(0)
      );
    }
  })

  result.sort((a, b) => a.localeCompare(b));

  return result.join('');
}

/**
 * @param {unknown} member
 * @returns {boolean}
 */
function isValidMember(member) {
  return typeof member === 'string'
}

module.exports = {
  createDreamTeam
};
