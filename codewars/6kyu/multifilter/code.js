var multiFilter = function (...fns) {
  return function (value) {
    return Array.from(fns).every((fn) => {
      return fn(value)
    })
  }
}
