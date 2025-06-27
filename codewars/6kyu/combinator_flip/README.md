Create a combinator function named flip that takes a function as an argument and returns that function with it's arguments reversed.

For example:

```javascript
flip(print)(4,5) // returns "5 -> 4"
```
```javascript
function print(a,b) {
  return a + " -> " + b;
}
```

```coffeescript
file(print)(4,5) # return '5 -> 4'
```

```coffeescript
print = (a,b) ->
  a + ' -> ' + b
```
The idea is to reverse any number of arguments using a higher order function, without any concern for the function being passed into it. 

