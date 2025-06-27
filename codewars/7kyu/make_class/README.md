I don't like writing classes like this:

```javascript
class Animal {
    constructor(name, species, age, health, weight, color) {
        this.name = name;
        this.species = species;
        this.age = age;
        this.health = health;
        this.weight = weight;
        this.color = color;
    }
}
```
```coffeescript
Animal = (@name, @species, @age, @health, @weight, @color) ->
```
```python
class Animal:
    def __init__(self, name, species, age, health, weight, color):
        self.name = name
        self.species = species
        self.age = age
        self.health = health
        self.weight = weight
        self.color = color
```

Give me the power to create a similar class like this:
```javascript
const Animal = makeClass("name", "species", "age", "health", "weight", "color");
```
```coffeescript
Animal = makeClass "name", "species", "age", "health", "weight", "color"
```
```python
Animal = make_class("name", "species", "age", "health", "weight", "color")
```
