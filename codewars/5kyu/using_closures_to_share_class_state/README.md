In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable.  In javascript we achieve this through closures and immediately-invoked function expressions.

In this kata, I want you to write make a `Cat` constructor that takes arguments `name` and `weight` to instantiate a new cat object.  The constructor should also have an `averageWeight` method that returns the average weight of cats created with the constructor.

```javascript
garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20
```

But that's not all.  Cats can change weight. Use `Object.defineProperty` to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:
```javascript
felix.weight = 25;
felix.weight // 25
Cat.averageWeight(); // now 25
```

`Object.defineProperty` must be used to pass all tests.  Storing a reference to all instances and recalculating the average weight each time is easier, but would prevent garbage collection from working properly if used in a production environment.

Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight; so, make sure to throw an error if both arguments are not recieved by the constructor.

# Summary of requirements:

1. `Cat` constructor, requiring arguments for `name` and `weight`
2. Throw an error if `name` or `weight` not specified when invoking the constructor.
3. `Cat.averageWeight()` method should give the average weight of all cat instances created with `Cat`, even after if the instance's properties have changed.
4. Must use `Object.defineProperty`
