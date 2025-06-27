function nouveau (Constructor, ...props) {
  const instance = Object.create(Constructor.prototype)
  const result = Constructor.apply(instance, props)

  return result !== null &&
  (typeof result === "object" || typeof result === "function") ?
    result :
    instance
}
