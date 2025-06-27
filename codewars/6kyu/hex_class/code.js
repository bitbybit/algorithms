class Hex {
  constructor(value) {
    this.value = value
  }

  valueOf() {
    return this.value
  }

  toString() {
    return this.toHex(this.value)
  }

  toJSON() {
    return this.toString()
  }

  plus(value) {
    return new Hex(this.valueOf() + value.valueOf())
  }

  minus(value) {
    return new Hex(this.valueOf() - value.valueOf())
  }

  toHex(number) {
    return `0x${number.toString(16).toUpperCase()}`
  }

  toNumber(hex) {
    return Hex.parse(hex)
  }

  static parse(string) {
    return Number(!string.startsWith('0x') ? `0x${string}` : string);
  }
}
