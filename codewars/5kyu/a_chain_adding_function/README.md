We want to create a function that will add numbers together when called in succession.

```javascript
add(1)(2); // == 3
```

```ruby
add(1).(2); # equals 3
```

```python
add(1)(2) # equals 3
```

We also want to be able to continue to add numbers to our chain.

```javascript
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
```

```ruby
add(1).(2).(3); # 6
add(1).(2).(3).(4); # 10
add(1).(2).(3).(4).(5); # 15
```

```python
add(1)(2)(3) # 6
add(1)(2)(3)(4); # 10
add(1)(2)(3)(4)(5) # 15
```

and so on.

A single call should be equal to the number passed in.

```javascript
add(1); // == 1
```

```ruby
add(1); # 1
```

```python
add(1) # 1
```

We should be able to store the returned values and reuse them.

```javascript
var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
```

```ruby
var addTwo = add(2);
addTwo; # 2
addTwo + 5; # 7
addTwo(3); # 5
addTwo(3).(5); # 10
```

```python
addTwo = add(2)
addTwo # 2
addTwo + 5 # 7
addTwo(3) # 5
addTwo(3)(5) # 10
```

We can assume any number being passed in will be valid whole number. 
