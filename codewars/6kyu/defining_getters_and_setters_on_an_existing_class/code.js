Object.defineProperty(Person.prototype, 'name', {
  get() {
    return this.getName()
  },

  set(value) {
    const [firstName, lastName] = value.split(' ')

    this.firstName = firstName
    this.lastName = lastName
  },
})
