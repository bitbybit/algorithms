BRIEFING
===
Greetings, warrior! In this kata you will learn, how `Object.create` method does its job.

First over, what does it do? The signature of `Object.create` is like this:
```javascript
//throws TypeError
//returns newly created object
Object.create(prototype, [properties])
```

`Object.create` serves to create new object that inherits given prototype and has properties being defined by "properties" parameter set on it.
Parameters values must meet following requirements:

* <span style="line-height:3"></span>`prototype` parameter should be some object<sup>1</sup> (i.e. a non-primitive value) or `null` (but not `undefined`!).
  If bad value passed for `prototype`, error `TypeError` must be thrown.

* `properties` parameter can be of any type or omitted at all.

As a result of execution, <span style="line-height:1.7"></span>`Object.create` will return a newly created object with inner property `[[Prototype]]`<sup>2</sup>
set to value of <span style="line-height:2.4"></span>`prototype` parameter.
If `properties` parameter is passed and is not `undefined`, then `Object.create` will make call <span style="line-height:2.4"></span>`Object.defineProperties(obj,properties)`, where `obj` is the object to be returned by <span style="line-height:2.4"></span>`Object.create`.

---
OBJECTIVES
===
In absence of the original `Object.create` create your own implementation of it that acts like the original one and assign it to the <span style="line-height:2.4"></span>`Object.create`. To access/modify inner `[[Prototype]]` property of an object, use the methods `Object.getPrototypeOf()` and `Object.setPrototypeOf()`, respectively. <sup>2</sup>

Your implementation will be used like this:
```javascript
var citizen = {
  sleep: function(){ return "zzZ..."; },
  panic: function(){ return "AaAaAaAa!"; }
};

var veteran = Object.create(citizen,{
        panic: {
          value: function(){
            return "SNAFU";
          }
        }
      });
```

INFORMATION
===

1. [Formal description of Object.create function in ECMAScript 5.1](http://es5.github.io/#x15.2.3.5)
2. [Prototype-based inheritance description in ECMAScript 5.1](http://es5.github.io/#x4.2.1)

### Notes

<sup>1</sup> In JavaScript everything is an object, except these primitives:

* `null`
* `undefined`
* numbers (`42`, `3.14`, `-1`, `NaN`, `Infinity`, `Number('123')`, etc.)
* big Integers (`-1n`, `0n`, `1n`, `BigInt(123)`, etc.)
* strings (`""`, `"dan"`, `"abnormal termination"`, `String(123)`, etc.)
* boolean (`true`, `false`, `Boolean(123)`)
* symbols (`Symbol("abc"), Symbol())`

Everything else, like RegExp literals (`/abc/`), `function`s, values created by invoking a function with `new`, `Array`s, ... are objects.

<sup>2</sup> An inner property is a property is not accessible through language constructs. But `[[Prototype]]` is an exception and is acessible through `Object.setPrototypeOf()` and `Object.getPrototypeOf()`.

My thanks to:
* @PetrSr for corrections on number literals.
