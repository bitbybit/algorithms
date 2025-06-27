function createFunctions(n) {
  var callbacks = [];

  for (let i = 0; i < n; i += 1) {
    callbacks.push(function() {
      return i;
    });
  }

  return callbacks;
}
