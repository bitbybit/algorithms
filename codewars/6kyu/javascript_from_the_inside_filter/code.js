/* You code goes here */
Array.prototype.filter = function(callbackParam, contextParam = this) {
  const result = []
  const length = this.length

  for (let i = 0; i < length; i += 1) {
    if (!(i in this)) {
      continue
    }

    if(callbackParam.call(contextParam, this[i], i, this)) {
      result.push(this[i])
    }
  }

  return result
}
