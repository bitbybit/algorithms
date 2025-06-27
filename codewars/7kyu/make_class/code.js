function makeClass(...properties) {
  return class {
    constructor(...classProperties) {
      properties.forEach((property, propertyIndex) => this[property] = classProperties[propertyIndex])
    }
  }
}
