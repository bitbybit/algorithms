function compose(...fns) {
  return function composed(value) {
    const fnList = Array.from(fns)
    let result = value

    for (let i = fnList.length - 1; i > -1; i -= 1) {
      result = fnList[i](result)
    }

    return result
  }
}
