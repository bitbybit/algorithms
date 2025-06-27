function once(fn) {
  let hasCalled = false

  return function (...args) {
    if (hasCalled) {
      return undefined
    }

    hasCalled = true

    return fn.call(this, ...args)
  }
}
