// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {
  const keys = string.split('.')

  if (this[keys[0]] === undefined) {
    return undefined
  }

  if (keys.length > 1) {
    return this[keys[0]].hash(keys.slice(1).join('.'))
  }

  return this[keys[0]]
}
