class File {
  #fullName = ''
  #contents = []

  #line = 0
  #char = 0

  constructor(fullName, contents) {
    this.#fullName = fullName

    const strs = contents.split('\n').filter((str) => str !== '')

    this.#contents.push(...strs)
  }

  write(str) {
    this.#contents.push(str)
  }

  getContents() {
    return this.#contents.join('\n')
  }

  gets() {
    const result = this.#contents[this.#line]

    this.#line += 1

    return result
  }

  getc() {
    const contents = this.#contents.join('\n')
    const result = contents[this.#char]

    this.#char += 1

    return result
  }

  get fullName() {
    return this.#fullName
  }

  get filename() {
    return this.#fullName.slice(0, -`.${this.extension}`.length)
  }

  get extension() {
    return this.#fullName.split('.').at(-1)
  }
}
