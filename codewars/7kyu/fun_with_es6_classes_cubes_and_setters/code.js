// Go ahead and define your class :)

class Cube {
  constructor(length) {
    this.length = length
  }

  set surfaceArea(value) {
    this.length = Math.sqrt(value / 6)
  }

  get surfaceArea() {
    return 6 * Math.pow(this.length, 2)
  }

  set volume(value) {
    this.length = Math.cbrt(value)
  }

  get volume() {
    return Math.pow(this.length, 3)
  }
}
