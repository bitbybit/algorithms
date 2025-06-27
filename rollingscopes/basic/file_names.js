/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {string[]} names
 * @return {string[]}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];

  for (let i = 0; i < names.length; i++) {
    const prevNames = result.slice(0, i);
    const currentName = names[i];
    const re = new RegExp(`^${currentName}\\((\\d)\\)$`)

    const renamed = prevNames.find(
      (renamedName) => renamedName.match(re) !== null
    );

    const hasRenamed = renamed !== undefined;

    if (hasRenamed) {
      const [, lastSuffix] = renamed.match(re);
      const suffix = Number(lastSuffix) + 1;

      result.push(`${currentName}(${suffix})`);

      continue;
    }

    const exact = prevNames.find(
      (exactName) => exactName === currentName
    );

    const hasExact = exact !== undefined;

    if (hasExact) {
      result.push(`${currentName}(1)`);

      continue;
    }

    result.push(currentName);
  }

  return result;
}

module.exports = {
  renameFiles
};
