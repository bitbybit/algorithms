function cache(func) {
  const cache = new Map()

  return function(...args) {
    const key = JSON.stringify(Array.from(args))

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = func(...args)

    cache.set(key, result)

    return result
  }
}
