function undoRedo(object) {
  const undos = []
  const redos = []

  return {
    set(key, value) {
      undos.push(structuredClone(object))
      redos.length = 0

      object[key] = value
    },

    get(key) {
      return object[key]
    },

    del(key) {
      undos.push(structuredClone(object))
      redos.length = 0

      delete object[key]
    },

    undo() {
      if (undos.length === 0) {
        throw new Error()
      }

      redos.push(structuredClone(object))

      Object.keys(object).forEach((key) => delete object[key])
      Object.assign(object, undos.pop())
    },

    redo() {
      if (redos.length === 0) {
        throw new Error()
      }

      undos.push(structuredClone(object))

      Object.keys(object).forEach((key) => delete object[key]);
      Object.assign(object, redos.pop())
    }
  }
}
