---
marp: true
theme: default
class:
  - invert
---

# Enumerations (Enums)


Enums in Swift define a common type for a group of related values, allowing you to work with those values in a type-safe way. 
They are highly versatile, capable of storing additional data, adopting protocols, and containing methods.

---

# Defining and Using Enums

```swift
enum Direction {
    case north
    case south
    case east
    case west
}

let currentDirection = Direction.north
```

---

# Enums can be used in switch statements:

```swift
switch currentDirection {
case .north:
    print("Heading North")
case .south:
    print("Heading South")
case .east:
    print("Heading East")
case .west:
    print("Heading West")
}
```

<!-- Presentation Notes: Explain the basic usage of enums and switch statements. Highlight the type-safety and clarity they provide in code. -->

---

# Associated Values

Enums can store associated values of different types for each case.

```swift
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}

var productBarcode = Barcode.upc(8, 85909, 51226, 3)
productBarcode = .qrCode("ABCDEFGHIJKL")
```

---

# Switching over enums with associated values

```swift
switch productBarcode {
    
case .upc(let numberSystem, let manufacturer, let product, let check):
    print("UPC: \(numberSystem), \(manufacturer), \(product), \(check)")

case .qrCode(let code):
    print("QR Code: \(code)")

}
```

<!-- Presentation Notes: Discuss how associated values add more power and flexibility to enums, allowing them to store and manage additional data. -->

---

# Raw Values

Enums can also have raw values, which are values automatically assigned to each case.

```swift
enum Planet: Int {
    case mercury = 1, venus, earth, mars, jupiter, saturn, uranus, neptune
}

let earth = Planet.earth.rawValue  // 3
```

Another example with string raw values:

```swift
enum DayOfWeek: String {
    case monday, tuesday, wednesday, thursday, friday, saturday, sunday
}

let today = DayOfWeek.friday.rawValue  // "friday"
```

<!-- Presentation Notes: Explain raw values and how they can be integers or strings, providing a default value for each case. -->

---

# Enum Methods

Enums can have methods associated with them, just like classes and structs.

```swift
enum CompassPoint {
    case north, south, east, west

    func directionDescription() -> String {
        switch self {
        case .north: return "North"
        case .south: return "South"
        case .east:  return "East"
        case .west:  return "West"
        }
    }

    func oppositeDirection() -> CompassPoint {
        switch self {
        case .north: return .south
        case .south: return .north
        case .east:  return .west
        case .west:  return .east
        }
    }
}
```
---
# cont.

```swift
let direction = CompassPoint.east
print(direction.directionDescription())  // "East"
print(direction.oppositeDirection())     // "West"
```

---

**With static methods**:

```swift
enum Math {
    static func square(_ number: Int) -> Int {
        return number * number
    }

    static func cube(_ number: Int) -> Int {
        return number * number * number
    }
}

print(Math.square(4))  // "16"
print(Math.cube(2))    // "8"
```

<!-- Presentation Notes: Discuss how methods can be used to encapsulate functionality within enums. Explain static methods and their use cases. -->

---

# Generics

Generics allow you to write flexible and reusable functions and types that can work with any type.

```swift
func swapTwoValues<T>(_ a: inout T, _ b: inout T) {
    let temporaryA = a
    a = b
    b = temporaryA
}

var x = 5
var y = 10

swapTwoValues(&x, &y)

print("x is now \(x), y is now \(y)")  
// "x is now 10, y is now 5"
```

---

**Another example with strings:**

```swift
var firstName = "John"
var lastName = "Doe"

swapTwoValues(&firstName, &lastName)

print("First name is now \(firstName), last name is now \(lastName)")  
// "First name is now Doe, last name is now John"
```

<!-- Presentation Notes: Explain the concept of generics and how they provide type flexibility for functions. -->

---

# Generic Types

Generics can also be used with types like classes, structs, and enums. For example, a generic stack type:

```swift
struct Stack<Element> {
    var items: [Element] = []

    mutating func push(_ item: Element) {
        items.append(item)
    }

    mutating func pop() -> Element? {
        return items.isEmpty ? nil : items.removeLast()
    }
}
```

---
**cont.**

```swift
var stackOfStrings = Stack<String>()
stackOfStrings.push("Hello")
stackOfStrings.push("World")
print(stackOfStrings.pop()!)  // "World"

var stackOfIntegers = Stack<Int>()
stackOfIntegers.push(1)
stackOfIntegers.push(2)
print(stackOfIntegers.pop()!)  // "2"
```

---

**Another generic type example with a queue:**

```swift
struct Queue<Element> {
    private var elements: [Element] = []

    mutating func enqueue(_ element: Element) {
        elements.append(element)
    }

    mutating func dequeue() -> Element? {
        return elements.isEmpty ? nil : elements.removeFirst()
    }
}

var queueOfNumbers = Queue<Int>()
queueOfNumbers.enqueue(10)
queueOfNumbers.enqueue(20)
print(queueOfNumbers.dequeue()!)  // "10"
```

<!-- Presentation Notes: Show how generics are used in data structures to handle different types. -->

---

# Type Constraints

Type constraints specify that a type parameter must inherit from a specific class or conform to a particular protocol or protocol composition.

```swift
func findIndex<T: Equatable>(of valueToFind: T, in array: [T]) -> Int? {
    for (index, value) in array.enumerated() {
        if value == valueToFind {
            return index
        }
    }
    return nil
}
```

---
**cont.**

```swift
let numbers = [1, 2, 3, 4, 5]
if let index = findIndex(of: 3, in: numbers) {
    print("Index: \(index)")  // "Index: 2"
}
```

---
**cont.**

```swift
let strings = ["apple", "banana", "cherry"]
if let index = findIndex(of: "banana", in: strings) {
    print("Index: \(index)")  // "Index: 1"
}
```

---

**Another example with a generic function using a type constraint:**

```swift
func compareValues<T: Comparable>(_ a: T, _ b: T) -> Bool {
    return a > b
}

print(compareValues(10, 5))    // "true"
print(compareValues("apple", "banana"))  // "false"
```

<!-- Presentation Notes: Explain type constraints and how they limit the types that can be used with generics. -->

---

# Extending Generic Types

You can extend a generic type to add new functionality.

```swift
extension Stack {
    var topItem: Element? {
        return items.isEmpty ? nil : items[items.count - 1]
    }
}

if let topItem = stackOfStrings.topItem {
    print("The top item on the stack is \(topItem).")  // "The top item on the stack is Hello."
}
```
---

**Another extension example with Queue:**

```swift
extension Queue {
    var count: Int {
        return elements.count
    }
}

print("Queue has \(queueOfNumbers.count) elements.")  // "Queue has 1 elements."
```

<!-- Presentation Notes: Show how extending generic types can add additional properties and methods. -->

---

# Basic Initializer

A basic initializer is defined using the `init` keyword.

```swift
struct Fahrenheit {
    var temperature: Double
    init() {
        temperature = 32.0
    }
}

var f = Fahrenheit()
print(f.temperature)  // "32.0"
```

---

**Another example:**

```swift
struct Point {
    var x: Double
    var y: Double

    init() {
        x = 0.0
        y = 0.0
    }
}

let origin = Point()
print("Point is at (\(origin.x), \(origin.y))")  // "Point is at (0.0, 0.0)"
```

<!-- Presentation Notes: Introduce basic initializers and their purpose in setting default values. -->

---

# Parameterized Initializer

Initializers can accept parameters to customize the instance during initialization.

```swift
struct Celsius {
    var temperatureInCelsius: Double
    init(fromFahrenheit fahrenheit: Double) {
        temperatureInCelsius = (fahrenheit - 32.0) / 1.8
    }
}

let boilingPointOfWater = Celsius(fromFahrenheit: 212.0)
print(boilingPointOfWater.temperatureInCelsius)  // "100.0"
```
---

**Another example with a Rectangle struct:**

```swift
struct Rectangle {
    var width: Double
    var height: Double

    init(width: Double, height: Double) {
        self

.width = width
        self.height = height
    }
}

let myRectangle = Rectangle(width: 10.0, height: 5.0)
print("Rectangle has width \(myRectangle.width) and height \(myRectangle.height).")  
// "Rectangle has width 10.0 and height 5.0."
```

<!-- Presentation Notes: Explain parameterized initializers and their role in setting properties based on input values. -->

---

# Initializer Delegation

Initializers (class and structs) can call other initializers

```swift
struct Color {
    var red, green, blue: Double

    init() {
        red = 0.0
        green = 0.0
        blue = 0.0
    }

    init(red: Double, green: Double, blue: Double) {
        self.red = red
        self.green = green
        self.blue = blue
    }

    init(white: Double) {
        self.init(red: white, green: white, blue: white)
    }
}

let redColor = Color(red: 1.0, green: 0.0, blue: 0.0)
let whiteColor = Color(white: 1.0)
```

<!-- Presentation Notes: Describe initializer delegation and its use in providing multiple ways to initialize an instance. -->

---

# Failable Initializers

Failable initializers can return `nil` if initialization fails.

```swift
struct Animal {
    var species: String

    init?(species: String) {
        if species.isEmpty {
            return nil
        }
        self.species = species
    }
}

let lion = Animal(species: "Lion")
let unknownAnimal = Animal(species: "")
```

<!-- Presentation Notes: Introduce failable initializers and their use in handling initialization failures. -->

---

# Required Initializers

The `required` keyword ensures that all subclasses must implement the initializer.

```swift
class Vehicle {
    required init() {
        // Initializer code
    }
}

class Car: Vehicle {
    required init() {
        // Initializer code specific to Car
    }
}
```

<!-- Presentation Notes: Explain required initializers and their necessity in subclassing. -->

---

# Convenience Initializers

Convenience initializers are secondary initializers that must call a designated initializer.

```swift
class Product {
    var name: String
    var price: Double

    init(name: String, price: Double) {
        self.name = name
        self.price = price
    }

    convenience init(name: String) {
        self.init(name: name, price: 0.0)
    }
}

let defaultProduct = Product(name: "Default Product")
print(defaultProduct.price)  // "0.0"
```

<!-- Presentation Notes: Describe convenience initializers and their role in providing additional initialization options. -->

---

# Questions?
