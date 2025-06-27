Array.prototype.square = function () {
  return this.map((value) => Math.pow(value, 2))
}

Array.prototype.cube = function () {
  return this.map((value) => Math.pow(value, 3))
}

Array.prototype.sum = function () {
  return this.reduce((acc, cur) => acc + cur, 0)
}

Array.prototype.average = function () {
  if (this.length === 0) {
    return NaN
  }

  return this.sum() / this.length
}

Array.prototype.even = function () {
  return this.filter((value) => value % 2 === 0)
}

Array.prototype.odd = function () {
  return this.filter((value) => value % 2 !== 0)
}
