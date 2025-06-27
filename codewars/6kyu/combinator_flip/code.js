function flip(fn) {
  return function(...args) {
    return fn(...Array.from(args).reverse())
  }
}
