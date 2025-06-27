The [Strategy Design Pattern](https://www.youtube.com/watch?v=MOEsKHqLiBM) can be used, for example, to determine how a unit moves in the StarCraft game.

The pattern consists in having a different strategy to one functionality. A unit, for example, could move by walking or flying.

## Your Task

Complete the code so that when a `Viking` is flying its position increases by `10` each time it moves. If it is walking then the position is increased by `1`.

In this Kata, Viking starts as a ground unit when it is created.

You have `3` classes:

- `Viking`: has a `position`, `moveBehavior` and `move` method.
- `Fly` and `Walk`: the move behaviors with the `move(unit)` method. `Fly` has to move `10` positions at a time and `Walk` has to move `1`.

## Resouces

- [PatternCraft > Strategy](https://www.youtube.com/watch?v=MOEsKHqLiBM)
- [SourceMaking > Strategy](https://sourcemaking.com/design_patterns/strategy)
- [Wikipedia > Strategy](https://en.wikipedia.org/wiki/Strategy_pattern)

# PatternCraft series

- [State Pattern](http://www.codewars.com/kata/patterncraft-state/)
- **Strategy Pattern**
- [Visitor Pattern](http://www.codewars.com/kata/patterncraft-visitor/)
- [Decorator Pattern](http://www.codewars.com/kata/patterncraft-decorator/)
- [Adapter Pattern](http://www.codewars.com/kata/patterncraft-adapter/)
- [Command Pattern](http://www.codewars.com/kata/patterncraft-command/)

The original [PatternCraft series (by John Lindquist)](https://www.youtube.com/playlist?list=PL8B19C3040F6381A2) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft.
