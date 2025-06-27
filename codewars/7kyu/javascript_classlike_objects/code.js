// create your Animal class like object here
class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  toString() {
    return `${this.name} is a ${this.type}`
  }
}
