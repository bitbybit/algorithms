/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  const argumentNames = func.toString().match(/\(([^)]*)\)/)[1]
    .split(',')
    .map(argumentName => argumentName.trim())
    .filter(argumentName => argumentName !== '')

  const dependencies = argumentNames.map(argumentName => this.dependency[argumentName])

  return function() {
    return func.apply(null, dependencies)
  };
}
