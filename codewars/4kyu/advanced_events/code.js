function Event() {
  const handlers = []

  return {
    subscribe(...handlerFns) {
      const validHandlerFns = Array.from(handlerFns).filter((handler) => typeof handler === 'function')

      handlers.push(...validHandlerFns)
    },

    unsubscribe(...handlerFns) {
      for (const handlerFn of handlerFns) {
        const index = handlers.lastIndexOf(handlerFn)

        if (index === -1) {
          continue
        }

        handlers.splice(index, 1)
      }
    },

    emit(...args) {
      for (const handler of handlers.slice()) {
        handler.call(this, ...args)
      }
    }
  }
}
