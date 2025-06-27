Although shapes can be very different by nature, they can be sorted by the size of their area.

<b style='font-size:16px'>Task:</b>

<ul>

<li>Create different shapes that can be part of a sortable list. The sort order is based on the size of their respective areas:
<ul>
<li>The area of a <i><b style="color:lightgreen">Square</b></i> is the square of its <i><b>side</b></i></li>
<li>The area of a <i><b style="color:lightgreen">Rectangle</b></i> is <i><b>width</b></i> multiplied by <i><b>height</b></i></li>
<li>The area of a <i><b style="color:lightgreen">Triangle</b></i> is <i><b>base</b></i> multiplied by <i><b>height</b></i> divided by 2</li>
<li>The area of a <i><b style="color:lightgreen">Circle</b></i> is the square of its <i><b>radius</b></i> multiplied by π</li>
<li>The <i><b>area</b></i> of a <i><b style="color:lightgreen">CustomShape</b></i> is given</li>
</ul>
</li>
<br>
<li>The default sort order of a list of shapes is ascending on area size:</li>

```python
side = 1.1234
radius = 1.1234
base = 5
height = 2

# All classes must be subclasses of the Shape class

shapes: List[Shape] = [Square(side), Circle(radius), Triangle(base, height)]
shapes.sort()
```
```csharp
var side = 1.1234D;
var radius = 1.1234D;
var base = 5D;
var height = 2D;

var shapes = new List<Shape>{ new Square(side),
                            new Circle(radius),
                            new Triangle(base, height) };
shapes.Sort();
```
```fsharp
let side = 1.1234
let radius = 1.1234
let base = 5.
let height = 2.

let shapes = [ Square(side);
             Circle(radius),
             Triangle(base, height) ]
let sorted = Seq.sort shapes        
```
```java
double side = 1.1234;
double radius = 1.1234;
double base = 5;
double height = 2;

ArrayList<Shape> shapes = new ArrayList<Shape>();
shapes.add(new Square(side));
shapes.add(new Circle(radius));
shapes.add(new Triangle(base, height));

Collections.sort(shapes);
```
```haskell
-- use record syntax
Square      { side :: Double }
Rectangle   { width :: Double, height :: Double }
Triangle    { base :: Double, height :: Double }
Circle      { radius :: Double }
CustomShape { area :: Double }

-- your types have to implement Show

shapes :: [Shape] 
shapes = [Square 1.1234, Circle 1.1234, Triangle 5 2]
```
```javascript
let side = 1.1234;
let radius = 1.1234;
let base = 5;
let height = 2;

let shapes = [ new Square(side)
             , new Circle(radius)
             , new Triangle(base, height)
             ];
shapes.sort( (a,b) => Number(a>b)-Number(a<b) ); // instead of the default lexicographical sort, natural sort will be used
```
<li>Use the correct π constant for your circle area calculations:</li>

```python
math.pi
```
```csharp
System.Math.PI
```
```fsharp
System.Math.PI        
```
```java
Math.PI
```
```haskell
pi from Prelude
```
```javascript
Math.PI
```
</ul>
<br>
