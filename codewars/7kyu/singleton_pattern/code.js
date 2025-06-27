class Singleton {
  static instance

  constructor() {
    if (Singleton.instance === undefined) {
      Singleton.instance = this
    }

    return Singleton.instance
  }
}
