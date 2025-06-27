The [Visitor Design Pattern](https://www.youtube.com/watch?v=KSEyIXnknoY) can be used, for example, to determine how an attack deals a different amount of damage to a unit in the StarCraft game.

The pattern consists of delegating the responsibility to a different class.

When a unit takes damage it can tell the visitor what to do with itself.

## Your Task

Complete the code so that when a `Tank` attacks a `Marine` it takes `21` damage and when a `Tank` attacks a `Marauder` it takes `32` damage.

The Marine's initial health should be set to `100` and the Marauder's health should be set to `125`.

You have 3 classes:

- `Marine`: has a `health` property and `accept(visitor)` method
- `Marauder`: has a `health` property and `accept(visitor)` method
- `TankBullet`: the visitor class. Has `visitLight(unit)` and `visitArmored(unit)` methods

## Ressources

- [PatternCraft > Visitor](https://www.youtube.com/watch?v=KSEyIXnknoY)
- [SourceMaking > Visitor](https://sourcemaking.com/design_patterns/visitor)
- [Wikipedia > Visitor](https://en.wikipedia.org/wiki/Visitor_pattern)

# PatternCraft series

- [State Pattern](http://www.codewars.com/kata/patterncraft-state/)
- [Strategy Pattern](http://www.codewars.com/kata/patterncraft-strategy/)
- **Visitor Pattern**
- [Decorator Pattern](http://www.codewars.com/kata/patterncraft-decorator/)
- [Adapter Pattern](http://www.codewars.com/kata/patterncraft-adapter/)
- [Command Pattern](http://www.codewars.com/kata/patterncraft-command/)

The original [PatternCraft series (by John Lindquist)](https://www.youtube.com/playlist?list=PL8B19C3040F6381A2) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.
