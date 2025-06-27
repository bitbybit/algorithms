class Event {
  constructor() {
    this.handlers = []
  }

  subscribe(handlerFn) {
    this.handlers.push(handlerFn)
  }

  unsubscribe(handlerFn) {
    this.handlers = this.handlers.filter((handler) => handler !== handlerFn)
  }

  emit(...args) {
    for (const handler of this.handlers) {
      handler(...args)
    }
  }
}
