function memo(fn) {
  const cache = new Map()

  return function memoResult(arg) {
    const key = arg

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn(arg)
    cache.set(key, result)

    return result
  }
}
