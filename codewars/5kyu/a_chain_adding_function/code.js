function add (n) {
  let result = n

  const fn = function (m) {
    return add(result + m);
  }

  fn.toString = function () {
    return result
  }

  return fn
}
