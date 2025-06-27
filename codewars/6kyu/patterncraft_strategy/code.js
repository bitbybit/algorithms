class Fly {
  move(unit) {
    unit.position += 10
  }
}

class Walk {
  move(unit) {
    unit.position += 1
  }
}

class Viking {
  constructor() {
    this.moveBehavior = new Walk()
    this.position = 0
  }

  move() {
    this.moveBehavior.move(this)
  }
}
