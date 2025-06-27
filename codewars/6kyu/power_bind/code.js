Function.prototype.bind = function (ctx) {
  const fn = this.__fn || this

  const bound = function () {
    return fn.call(ctx)
  }

  bound.__fn = fn

  return bound
};
