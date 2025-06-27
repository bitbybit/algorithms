The [Decorator Design Pattern](https://www.youtube.com/watch?v=17XTOODeWQE) can be used, for example, in the StarCraft game to manage upgrades.

The pattern consists in "incrementing" your base class with extra functionality.

A decorator will receive an instance of the base class and use it to create a new instance with the new things you want "added on it".

## Your Task

Complete the code so that when a `Marine` gets a `WeaponUpgrade` it increases the damage by `1`, and if it is a `ArmorUpgrade` then increase the armor by `1`.

You have 3 classes:

- `Marine`: has a `damage` and an `armor` properties
- `MarineWeaponUpgrade` and `MarineArmorUpgrade`: upgrades to apply on marine. Accepts a `Marine` in the constructor and has the same properties as the `Marine`

## Resouces

- [PatternCraft > Decorator](https://www.youtube.com/watch?v=17XTOODeWQE)
- [SourceMaking > Decorator](https://sourcemaking.com/design_patterns/decorator)
- [Wikipedia > Decorator](https://en.wikipedia.org/wiki/Decorator_pattern)

# PatternCraft series

- [State Pattern](http://www.codewars.com/kata/patterncraft-state/)
- [Strategy Pattern](http://www.codewars.com/kata/patterncraft-strategy/)
- [Visitor Pattern](http://www.codewars.com/kata/patterncraft-visitor/)
- **Decorator Pattern**
- [Adapter Pattern](http://www.codewars.com/kata/patterncraft-adapter/)
- [Command Pattern](http://www.codewars.com/kata/patterncraft-command/)

The original [PatternCraft series (by John Lindquist)](https://www.youtube.com/playlist?list=PL8B19C3040F6381A2) is a collection of Youtube videos that explains some of the design patterns and how they are used (or could be) on StarCraft. 
