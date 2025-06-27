function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = firstAttacker === fighter1.name ? fighter1 : fighter2;
  let defender = attacker === fighter1 ? fighter2 : fighter1;

  while (attacker.health > 0 && defender.health > 0) {
    defender.health -= attacker.damagePerAttack;

    [attacker, defender] = [defender, attacker];
  }

  return [attacker, defender].find(({ health }) => health > 0).name;
}
