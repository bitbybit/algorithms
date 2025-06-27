function curryPartial(fn, ...args1) {
  if (args1.length >= fn.length) {
    return fn(...args1);
  }

  return function (...args2) {
    return curryPartial(fn, ...args1, ...args2)
  }
}
