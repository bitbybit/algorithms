function isSantaClausable(obj) {
  return (typeof obj.sayHoHoHo === 'function' || typeof obj.say_ho_ho_ho === 'function') &&
    (typeof obj.distributeGifts === 'function' || typeof obj.distribute_gifts === 'function') &&
    (typeof obj.goDownTheChimney === 'function' || typeof obj.go_down_the_chimney === 'function')
}
