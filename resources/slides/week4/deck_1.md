---
marp: true
theme: default
class:
  - invert
---

# Classes

In Swift, a class is a blueprint for creating objects. These objects are instances of a class and can encapsulate properties and methods to represent and manipulate data.

```swift
class Vehicle {
    var type: String
    var numberOfWheels: Int

    init(type: String, numberOfWheels: Int) {
        self.type = type
        self.numberOfWheels = numberOfWheels
    }

    func description() -> String {
        return "A \(type) with \(numberOfWheels) wheels."
    }
}
```

<!---
Explain the structure of a class and how to define properties and methods. Highlight the `init` method for initialization.*
--->

---

# Creating Instances of a Class

```swift
let car = Vehicle(type: "Car", numberOfWheels: 4)
print(car.description()) // Output: A Car with 4 wheels.
```

<!---
Demonstrate creating an instance of a class and accessing its methods.*
--->

---

# Properties in Classes

```swift
class Person {
    var name: String = "John Doe"
    let birthYear: Int

    init(birthYear: Int) {
        self.birthYear = birthYear
    }
}
```

<!---
Discuss the difference between variable and constant properties in a class.*
--->

---

# Methods in Classes

```swift
class Counter {
    var count: Int = 0

    func increment() {
        count += 1
    }

    func reset() {
        count = 0
    }
}
```

<!---
Explain how methods work within a class and their effect on properties.*
--->

---

# Defining and Using Structs in Swift

Structs are similar to classes but are value types. Each instance keeps its own copy of the data.

---

# Defining a Struct

```swift
struct Rectangle {
    var width: Double
    var height: Double

    func area() -> Double {
        return width * height
    }
}
```

<!---
Define a struct and its properties and methods.*
--->

---

# Creating Instances of a Struct

```swift
let rect = Rectangle(width: 10.0, height: 5.0)
print("Area: \(rect.area())") // Output: Area: 50.0
```

<!---
Show how to create and use instances of a struct.*
--->

---

# Value Semantics in Structs

```swift
var original = Rectangle(width: 10.0, height: 5.0)
var copy = original
copy.width = 20.0

print(original.width) // Output: 10.0
print(copy.width)     // Output: 20.0
```

<!---
Explain value semantics and how modifying a copy affects only that instance.*
--->

---

# Value vs. Reference Types 

```swift
struct Point {
    var x: Int
    var y: Int
}

var point1 = Point(x: 0, y: 0)
var point2 = point1
point2.x = 10

print(point1.x) // Output: 0
print(point2.x) // Output: 10
```

✱ You cannot inherit from a Struct

---
# Value vs. Reference Types

```swift
class PointClass {
    var x: Int
    var y: Int

    init(x: Int, y: Int) {
        self.x = x
        self.y = y
    }
}

var point3 = PointClass(x: 0, y: 0)
var point4 = point3
point4.x = 10

print(point3.x) // Output: 10
print(point4.x) // Output: 10
```

<!---
Compare and contrast value types (structs) and reference types (classes).*
--->

---

# Inheritance

Classes support inheritance, allowing new classes to inherit properties and methods.

```swift
class Animal {
    var name: String
    init(name: String) {
        self.name = name
    }
    func sound() -> String {
        return "Some sound"
    }
}
class Dog: Animal {
    override func sound() -> String {
        return "Woof!"
    }
}
let dog = Dog(name: "Buddy")
print(dog.sound()) // Output: Woof!
```

<!---
Explain inheritance and how subclasses can override methods.*
--->

---

# Mutability

- **Structs:** Immutable when declared with `let`.
- **Classes:** Only the reference is immutable with `let`.

```swift
let fixedPoint = Point(x: 1, y: 2)
// fixedPoint.x = 3 // Error

let mutablePoint = PointClass(x: 1, y: 2)
mutablePoint.x = 3 // Works fine
```

<!---
Clarify mutability differences between structs and classes.*
--->

---

# Practical Scenarios

## Scenario 1: Modeling a 2D Point

```swift
struct Point {
    var x: Double
    var y: Double
}
```

---

# Practical Scenarios

## Scenario 2: Modeling a User

```swift
class User {
    var username: String
    var password: String
    var email: String

    init(username: String, password: String, email: String) {
        self.username = username
        self.password = password
        self.email = email
    }

    func resetPassword(newPassword: String) {
        self.password = newPassword
    }
}
```

<!---
Provide practical examples for when to use structs vs. classes.*
--->

---

# Computed Properties

Computed properties do not store a value but compute it each time it's accessed.

---

# Defining Computed Properties

```swift
struct Circle {
    var radius: Double

    var area: Double {
        return .pi * radius * radius
    }
}
```

<!---
Show how to define computed properties.*
--->

---

# Getters and Setters

```swift
struct Rectangle {
    var width: Double
    var height: Double

    var area: Double {
        get {
            return width * height
        }
        set(newArea) {
            width = newArea / height
        }
    }
}
```

<!---
Explain the use of getters and setters in computed properties.*
--->

---

# Shorthand for Getters

```swift
struct Temperature {
    var celsius: Double

    var fahrenheit: Double {
        return celsius * 9 / 5 + 32
    }
}
```

<!---
Demonstrate shorthand syntax for read-only computed properties.*
--->

---

# Read-Only Computed Properties

```swift
struct Point {
    var x: Double
    var y: Double

    var magnitude: Double {
        return (x * x + y * y).squareRoot()
    }
}

let point = Point(x: 3, y: 4)
print(point.magnitude) // Output: 5.0
```

<!---
Explain read-only computed properties.*
--->

---

# Using Computed Properties with Classes and Structs

```swift
class Person {
    var firstName: String
    var lastName: String

    var fullName: String {
        return "\(firstName) \(lastName)"
    }

    init(firstName: String, lastName: String) {
        self.firstName = firstName
        self.lastName = lastName
    }
}

let person = Person(firstName: "John", lastName: "Doe")
print(person.fullName) // Output: John Doe
```

<!---
Show examples of computed properties in classes.*
--->

---

# Lazy Properties

Lazy properties are initialized only when they are first accessed.

---

# Defining Lazy Properties

```swift
class DataManager {
    lazy var data: [String] = {
        print("Initializing data...")
        return ["Data1", "Data2", "Data3"]
    }()
}
```

<!---
Explain how to define and use lazy properties.*
--->

---

# Accessing Lazy Properties

```swift
let manager = DataManager()
print(manager.data) // Output: Initializing data... \n ["Data1", "Data2", "Data3"]
```

<!---
Show how accessing a lazy property triggers its initialization.*
--->

---

# Use Cases for Lazy Properties

- Expensive Initializations
- Dependence on Other Properties
- Avoiding Unnecessary Work

Lazy properties are only available in classes.

<!---
Discuss practical scenarios where lazy properties are beneficial.*
--->

---

# Questions?
