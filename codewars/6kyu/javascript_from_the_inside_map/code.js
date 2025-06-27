/* You code goes here */
Array.prototype.map = function(callbackParam, contextParam = this) {
  const result = []

  for (let i = 0; i < this.length; i += 1) {
    if (!(i in this)) {
      continue
    }

    result[i] = callbackParam.call(contextParam, this[i], i, this)
  }

  return result.length === 0 ? this : result
}
