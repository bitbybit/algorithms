class Marine {
  constructor() {
    this.health = 100
  }
  accept(visitor) { visitor.visitLight(this) }
}

class Marauder {
  constructor() {
    this.health = 125
  }
  accept(visitor) { visitor.visitArmored(this) }
}

class TankBullet {
  visitLight(unit) {
    unit.health -= 21
  }
  visitArmored(unit) {
    unit.health -= 32
  }
}
