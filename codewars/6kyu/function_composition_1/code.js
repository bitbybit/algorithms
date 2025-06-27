function compose(f, g) {
  return function fn(...args) {
    return f(g(...args))
  }
}
