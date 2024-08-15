# 🚀 Enums and Generics

## 🛠️ Enumerations (Enums)

Enums in Swift define a common type for a group of related values, allowing you to work with those values in a type-safe way. They are highly versatile, capable of storing additional data, adopting protocols, and containing methods.

### Defining and Using Enums

Enums are defined using the `enum` keyword, followed by the name of the enum and the cases it can represent.

```swift
enum Direction {
    case north
    case south
    case east
    case west
}

let currentDirection = Direction.north
```

Enums can also be used in switch statements, which make your code more readable and less error-prone.

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

### Associated Values

Enums can store associated values of different types for each case. This feature makes enums much more powerful, as they can now carry additional data.

```swift
enum Barcode {
    case upc(Int, Int, Int, Int)
    case qrCode(String)
}

var productBarcode = Barcode.upc(8, 85909, 51226, 3)
productBarcode = .qrCode("ABCDEFGHIJKL")

switch productBarcode {
case .upc(let numberSystem, let manufacturer, let product, let check):
    print("UPC: \(numberSystem), \(manufacturer), \(product), \(check)")
case .qrCode(let code):
    print("QR Code: \(code)")
}
```

### Raw Values

Enums can also have raw values, which are values automatically assigned to each case. Raw values can be of any type, including strings, characters, or any integer or floating-point number.

```swift
enum Planet: Int {
    case mercury = 1, venus, earth, mars, jupiter, saturn, uranus, neptune
}

let earth = Planet.earth.rawValue  // 3

if let planet = Planet(rawValue: 4) {
    print("The fourth planet is \(planet).")
} else {
    print("No such planet exists.")
}
```

Another example with string raw values:

```swift
enum DayOfWeek: String {
    case monday, tuesday, wednesday, thursday, friday, saturday, sunday
}

let today = DayOfWeek.friday.rawValue  // "friday"
```

### Enum Methods

Enums can have methods associated with them, just like classes and structs. This feature allows you to encapsulate functionality directly within the enum.

```swift
enum CompassPoint {
    case north, south, east, west

    func directionDescription() -> String {
        switch self {
        case .north:
            return "North"
        case .south:
            return "South"
        case .east:
            return "East"
        case .west:
            return "West"
        }
    }

    func oppositeDirection() -> CompassPoint {
        switch self {
        case .north:
            return .south
        case .south:
            return .north
        case .east:
            return .west
        case .west:
            return .east
        }
    }
}

let direction = CompassPoint.east
print(direction.directionDescription())  // "East"
print(direction.oppositeDirection())     // "West"
```

Enums with static methods:

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

## 🛠️ Generics

Generics allow you to write flexible and reusable functions and types that can work with any type. By writing code that avoids duplication, generics help you create clean, maintainable code.

### Defining a Generic Function

Generics are most commonly used in functions. Here’s a simple example of a generic function that swaps two values.

```swift
func swapTwoValues<T>(_ a: inout T, _ b: inout T) {
    let temporaryA = a
    a = b
    b = temporaryA
}

var x = 5
var y = 10
swapTwoValues(&x, &y)
print("x is now \(x), y is now \(y)")  // "x is now 10, y is now 5"
```

Another example with strings:

```swift
var firstName = "John"
var lastName = "Doe"
swapTwoValues(&firstName, &lastName)
print("First name is now \(firstName), last name is now \(lastName)")  // "First name is now Doe, last name is now John"
```

### Generic Types

Generics can also be used with types like classes, structs, and enums. For example, here’s a generic stack type:

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

var stackOfStrings = Stack<String>()
stackOfStrings.push("Hello")
stackOfStrings.push("World")
print(stackOfStrings.pop()!)  // "World"

var stackOfIntegers = Stack<Int>()
stackOfIntegers.push(1)
stackOfIntegers.push(2)
print(stackOfIntegers.pop()!)  // "2"
```

Another generic type example with a queue:

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

### Type Constraints

Sometimes you want to impose constraints on the types that can be used with generics. This is where type constraints come in. Type constraints specify that a type parameter must inherit from a specific class or conform to a particular protocol or protocol composition.

```swift
func findIndex<T: Equatable>(of valueToFind: T, in array: [T]) -> Int? {
    for (index, value) in array.enumerated() {
        if value == valueToFind {
            return index
        }
    }
    return nil
}

let numbers = [1, 2, 3, 4, 5]
if let index = findIndex(of: 3, in: numbers) {
    print("Index: \(index)")  // "Index: 2"
}

let strings = ["apple", "banana", "cherry"]
if let index = findIndex(of: "banana", in: strings) {
    print("Index: \(index)")  // "Index: 1"
}
```

Another example with a generic function that uses a type constraint:

```swift
func compareValues<T: Comparable>(_ a: T, _ b: T) -> Bool {
    return a > b
}

print(compareValues(10, 5))    // "true"
print(compareValues("apple", "banana"))  // "false"
```

### Extending Generic Types

You can extend a generic type to add new functionality, just like you can with non-generic types.

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

Another extension example with Queue:

```swift
extension Queue {
    var count: Int {
        return elements.count
    }
}

print("Queue has \(queueOfNumbers.count) elements.")  // "Queue has 1 elements."
```

---

## 🛠️ Initializers

Initializers are special methods used to create instances of a particular type. They ensure that all stored properties are initialized properly before the object is used.

### Basic Initializer

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

Another example:

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

### Parameterized Initializer

You can also create initializers that accept parameters to customize the instance during initialization.

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

Another example with a Rectangle struct:

```swift
struct Rectangle {
    var width: Double
    var height: Double

    init(width: Double, height: Double) {
        self.width = width
        self.height = height
    }

    func area() -> Double {
        return width * height
    }
}

let rect = Rectangle(width: 5.0, height: 10.0)
print("Area of the rectangle: \(rect.area())")  // "Area of the rectangle: 50.0"
```

### Failable Initializer

A failable initializer can return `nil` if something goes wrong during initialization. This is useful when initializing with invalid parameters.

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

let someCreature = Animal(species: "")
if someCreature == nil {
    print("Initialization failed.")
} else {
    print("Initialization succeeded.")
}
```

Another example:

```swift
struct Password {
    var value: String

    init?(value: String) {
        if value.count < 8 {
            return nil
        }
        self.value = value
    }
}

let password = Password(value: "1234567")
if password == nil {
    print("Password too short.")
} else {
    print("Password set successfully.")
}
```

### Initializer Delegation

In complex types like classes, one initializer can call another initializer, which is known as initializer delegation.

```swift
class Vehicle {
    var numberOfWheels: Int
    var color: String

    init(numberOfWheels: Int, color: String) {
        self.numberOfWheels = numberOfWheels
        self.color = color
    }

    convenience init() {
        self.init(numberOfWheels: 4, color: "Black")
    }
}

let car = Vehicle()
print("Car has \(car.numberOfWheels) wheels and is \(car.color).")  // "Car has 4 wheels and is Black."
```

Another example with a Person class:

```swift
class Person {
    var name: String
    var age: Int

    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    convenience init(name: String) {
        self.init(name: name, age: 0)
    }
}

let baby = Person(name: "Lily")
print("Name: \(baby.name), Age: \(baby.age)")  // "Name: Lily, Age: 0"
```

### Designated Initializers

In Swift, classes can have two types of initializers: designated initializers and convenience initializers. Understanding the difference between these two types is crucial for building robust class hierarchies.


A designated initializer is the primary initializer for a class. It fully initializes all properties introduced by that class and calls an appropriate superclass initializer to ensure the superclass is also properly initialized. Each class must have at least one designated initializer.

Designated initializers are typically written in classes and are responsible for ensuring that all properties of the class have valid initial values. 

Example:

```swift
class Person {
    var name: String
    var age: Int

    // Designated initializer
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

let person = Person(name: "Alice", age: 30)
print("Name: \(person.name), Age: \(person.age)")  // "Name: Alice, Age: 30"
```

Another example with a `Vehicle` class:

```swift
class Vehicle {
    var numberOfWheels: Int
    var color: String

    // Designated initializer
    init(numberOfWheels: Int, color: String) {
        self.numberOfWheels = numberOfWheels
        self.color = color
    }
}

let bike = Vehicle(numberOfWheels: 2, color: "Red")
print("Bike has \(bike.numberOfWheels) wheels and is \(bike.color).")  // "Bike has 2 wheels and is Red."
```

### Convenience Initializers

A convenience initializer is a secondary, supporting initializer that allows you to create instances of a class in a more convenient or specific way. Convenience initializers delegate the initialization process to a designated initializer within the same class. They are not required, but they provide syntactic shortcuts for common initialization patterns.

Convenience initializers are defined using the `convenience` keyword.

Example:

```swift
class Person {
    var name: String
    var age: Int

    // Designated initializer
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }

    // Convenience initializer
    convenience init(name: String) {
        self.init(name: name, age: 0)
    }
}

let baby = Person(name: "Lily")
print("Name: \(baby.name), Age: \(baby.age)")  // "Name: Lily, Age: 0"
```

Another example with a `Rectangle` class:

```swift
class Rectangle {
    var width: Double
    var height: Double

    // Designated initializer
    init(width: Double, height: Double) {
        self.width = width
        self.height = height
    }

    // Convenience initializer
    convenience init(size: Double) {
        self.init(width: size, height: size)
    }

    func area() -> Double {
        return width * height
    }
}

let square = Rectangle(size: 5.0)
print("Square area: \(square.area())")  // "Square area: 25.0"
```

### Rules for Initializers in Class Hierarchies

1. **Designated Initializers:** 
    - Must call a designated initializer from its immediate superclass.
    - Must fully initialize all properties introduced by the class before calling a superclass initializer.

2. **Convenience Initializers:**
    - Must call another initializer from the same class.
    - Ultimately must call a designated initializer.

### Example with Class Hierarchies

Here’s how designated and convenience initializers work in a class hierarchy:

```swift
class Vehicle {
    var numberOfWheels: Int

    // Designated initializer
    init(numberOfWheels: Int) {
        self.numberOfWheels = numberOfWheels
    }
}

class Car: Vehicle {
    var color: String

    // Designated initializer
    init(numberOfWheels: Int, color: String) {
        self.color = color
        super.init(numberOfWheels: numberOfWheels)
    }

    // Convenience initializer
    convenience init(color: String) {
        self.init(numberOfWheels: 4, color: color)
    }
}

let car = Car(color: "Blue")
print("Car has \(car.numberOfWheels) wheels and is \(car.color).")  // "Car has 4 wheels and is Blue."
```

Another example with a `Book` and `EBook` class:

```swift
class Book {
    var title: String
    var author: String

    // Designated initializer
    init(title: String, author: String) {
        self.title = title
        self.author = author
    }
}

class EBook: Book {
    var fileSize: Int

    // Designated initializer
    init(title: String, author: String, fileSize: Int) {
        self.fileSize = fileSize
        super.init(title: title, author: author)
    }

    // Convenience initializer
    convenience init(title: String) {
        self.init(title: title, author: "Unknown", fileSize: 0)
    }
}

let ebook = EBook(title: "Swift Programming")
print("EBook title: \(ebook.title), Author: \(ebook.author), File size: \(ebook.fileSize)MB")  // "EBook title: Swift Programming, Author: Unknown, File size: 0MB"
```

## 🛠️ Deinitializers

Deinitializers are used to perform any necessary cleanup before an object is deallocated. Unlike initializers, deinitializers are only available in class types.

### Defining a Deinitializer

Deinitializers are defined using the `deinit` keyword. They do not take any parameters and are written without parentheses.

```swift
class BankAccount {
    var balance: Double

    init(balance: Double) {
        self.balance = balance
        print("Bank account opened with balance: \(balance)")
    }

    deinit {
        print("Bank account with balance \(balance) is being closed.")
    }
}

var account: BankAccount? = BankAccount(balance: 1000.0)
account = nil  // This will trigger the deinitializer
```

Another example with a class that manages a temporary file:

```swift
class TemporaryFile {
    let filePath: String

    init(filePath: String) {
        self.filePath = filePath
        print("Temporary file created at: \(filePath)")
    }

    deinit {
        print("Deleting temporary file at: \(filePath)")
    }
}

var tempFile: TemporaryFile? = TemporaryFile(filePath: "/tmp/tempfile.txt")
tempFile = nil  // This will trigger the deinitializer
```

### Deinitializers in Practice

Deinitializers are particularly useful in managing resources like files, network connections, or database connections that need to be explicitly closed or cleaned up.

```swift
class DatabaseConnection {
    var dbName: String

    init(dbName: String) {
        self.dbName = dbName
        print("Database connection opened to \(dbName)")
    }

    deinit {
        print("Closing database connection to \(dbName)")
    }
}

var connection: DatabaseConnection? = DatabaseConnection(dbName: "MyDatabase")
connection = nil  // This will trigger the deinitializer
```

Another practical example:

```swift
class Logger {
    init() {
        print("Logger started.")
    }

    deinit {
        print("Logger stopped.")
    }
}

func performTask() {
    let logger = Logger()
    print("Performing a task...")
    // Logger will be deallocated automatically when the function ends
}

performTask()
```
