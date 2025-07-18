Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: **begin**, **end**, **step**.

If **begin** value is greater than the **end**, your function should return **0**.
If **end** is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

**Examples**

~~~if-not:nasm
```
2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)
```
~~~

```if:nasm
mov edi, 2
mov esi, 2
mov edx, 2
call sequence_sum    ; EAX <- 2

mov edi, 2
mov esi, 6
mov edx, 2
call sequence_sum    ; EAX <- 12 = 2 + 4 + 6

mov edi, 1
mov esi, 5
mov edx, 1
call sequence_sum    ; EAX <- 15 = 1 + 2 + 3 + 4 + 5

mov edi, 1
mov esi, 5
mov edx, 3
call sequence_sum    ; EAX <- 5 = 1 + 4
```

This is the first kata in the series:

1) Sum of a sequence (this kata)
2) [Sum of a Sequence [Hard-Core Version]](https://www.codewars.com/kata/sum-of-a-sequence-hard-core-version/javascript)
