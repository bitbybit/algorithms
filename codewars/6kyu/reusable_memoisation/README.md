Recursive algorithms can sometimes be optimised with memoisation. Often however, the memoisation is tightly coupled with the algorithm, making reuse difficult.

### Task

Implement a reusable memoisation function  
that, given a function of one argument, returns a memoised function of one argument.

Functions of more than one argument can be memoised by currying the function and memoising it for every argument, one at a time. This has easier reusability than having a different memoisation component for every number of arguments.  
( This scenario will be tested. )

### Performance vs. reusability

Maximum performance is not the goal of this kata; maximum simplicity and reusability is.  
If, for any specific application, you need maximum performance, you would probably customise your reusable memo function for the job, and possibly couple it more tightly, thus shifting the balance away from simplicity and reusability more towards performance. There's always a balance to be struck, just as there is in resource allocation ( time vs. space, CPU vs. memory ).

### Testing

Your function will be tested with naive implementations of recursive staples `factorial`, `Ackermann` and `Fibonacci`, and the algorithm for finding a longest common subsequence.  
The submit tests are exactly the same as the example tests, only with some random testing thrown in, but there are no surprises. If you pass the example tests, you should pass the submit tests, and you can read the example tests. ( It is recommended that you do. )

Ackermann and the longest common subsequence implementation will test multiply memoising a curried function.

```if:javascript
The datatype of the function argument can be any primitive or object.  
If a function of zero arguments is passed, it is to be treated as a function of one argument which is `undefined`.
```
```if:haskell
The datatype of the function argument can be any `Enum` instance. Any `Integral`s will be non-negative.
```

### Related kata

* any factorial or Fibonacci kata, e.g. [The Millionth Fibonacci Kata](https://www.codewars.com/kata/the-millionth-fibonacci-kata/)
* [Ackermann Function](https://www.codewars.com/kata/ackermann-function/)
* [Longest Common Subsequence](http://www.codewars.com/kata/longest-common-subsequence/) and its [Performance version](https://www.codewars.com/kata/longest-common-subsequence-performance-version/)
