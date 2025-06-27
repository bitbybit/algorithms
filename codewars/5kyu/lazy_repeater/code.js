function makeLooper (str) {
  let index = 0

  return function () {
    if (index === str.length) {
      index = 0
    }

    const result = str.at(index)
    index += 1

    return result
  }
}
