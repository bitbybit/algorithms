var Cat = class {
  name

  #weight

  static _sumWeight = 0
  static _instanceCount = 0

  constructor(name, weight) {
    if (name === undefined || weight === undefined) {
      throw new Error()
    }

    this.name = name
    this.#weight = weight

    Cat._instanceCount += 1
    Cat._sumWeight += weight;

    Object.defineProperty(this, 'weight', {
      get() {
        return this.#weight;
      },

      set(value) {
        Cat._sumWeight = Cat._sumWeight - this.#weight + value
        this.#weight = value;
      },

      enumerable: true,
      configurable: true
    })
  }

  static averageWeight() {
    return Cat._sumWeight / Cat._instanceCount
  }
}
