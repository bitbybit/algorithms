class Shape {
  get area() {
    return 0
  }

  toString() {
    return this.area
  }
}

class Square extends Shape {
  constructor(side) {
    super()

    this.side = side
  }

  get area () {
    return this.side ** 2
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super()

    this.width = width
    this.height = height
  }

  get area () {
    return this.width * this.height
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super()

    this.base = base
    this.height = height
  }

  get area () {
    return (this.base * this.height) / 2
  }
}

class Circle extends Shape {
  constructor(radius) {
    super()

    this.radius = radius
  }

  get area () {
    return (this.radius ** 2) * Math.PI
  }
}

class CustomShape extends Shape {
  constructor(area) {
    super()

    this._area = area
  }

  get area () {
    return this._area
  }
}
