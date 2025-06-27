The [State Design Pattern](https://www.youtube.com/watch?v=yZt7mUVDijU) can be used, for example, to manage the state of a tank in the StarCraft game.

The pattern consists in isolating the state logic in different classes rather than having multiple `if`s to determine what should happen.

## Your Task

Complete the code so that when a `Tank` goes into `SiegeMode` it cannot move and its damage goes to `20`. When it goes to `TankMode` it should be able to move and the damage should be set to `5`.

You have 3 classes:

- `Tank`: has a `state`, `canMove` and `damage` properties
- `SiegeState` and `TankState`: has `canMove` and `damage` properties

**Note**: The tank initial state should be `TankState`.

## Resources

- [PatternCraft > State](https://www.youtube.com/watch?v=yZt7mUVDijU)
- [SourceMaking > State](https://sourcemaking.com/design_patterns/state)
- [Wikipedia > State](https://en.wikipedia.org/wiki/State_pattern)

# PatternCraft series

- **State Pattern**
- [Strategy Pattern](http://www.codewars.com/kata/patterncraft-strategy/)
- [Visitor Pattern](http://www.codewars.com/kata/patterncraft-visitor/)
- [Decorator Pattern](http://www.codewars.com/kata/patterncraft-decorator/)
- [Adapter Pattern](http://www.codewars.com/kata/patterncraft-adapter/)
- [Command Pattern](http://www.codewars.com/kata/patterncraft-command/)

The original [PatternCraft series (by John Lindquist)](https://www.youtube.com/playlist?list=PL8B19C3040F6381A2) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.
