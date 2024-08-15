# 🚀Classes and Structs

In Swift, a class is a blueprint for creating objects. These objects are instances of a class and can encapsulate properties (attributes) and methods (functions) to represent and manipulate data. Classes in Swift are powerful tools for modeling complex data structures and behaviors, and they form the backbone of object-oriented programming (OOP) in Swift.

## 🛠️ Defining a Class
To define a class in Swift, you use the `class` keyword followed by the class name and a pair of curly braces `{}` to enclose its properties and methods.

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

In this example, the `Vehicle` class has two properties: `type` (a `String`) and `numberOfWheels` (an `Int`). The class also has an initializer `init` to set these properties when a new instance of the class is created. Additionally, there's a method `description()` that returns a description of the vehicle.

## 🛠️ Creating Instances of a Class
Once a class is defined, you can create instances (objects) of that class by calling its initializer.

```swift
let car = Vehicle(type: "Car", numberOfWheels: 4)
print(car.description()) // Output: A Car with 4 wheels.
```

Here, `car` is an instance of the `Vehicle` class. We initialized it with the type "Car" and 4 wheels, and then called the `description()` method to print its details.

## 🛠️ Properties in Classes
Properties in a class can store values that describe the object. In Swift, properties can be variable (`var`) or constant (`let`). Properties can have default values, or they can be set using initializers.

```swift
class Person {
    var name: String = "John Doe"
    let birthYear: Int

    init(birthYear: Int) {
        self.birthYear = birthYear
    }
}
```

In this `Person` class, `name` has a default value, while `birthYear` is a constant property set during initialization.

## 🛠️ Methods in Classes
Methods are functions that belong to a class. They can manipulate the class's properties or perform specific actions. Methods are defined like regular functions but within the context of a class.

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

In the `Counter` class, we have two methods: `increment()` increases the `count` property by 1, and `reset()` sets it back to 0.

## 🛠️ Defining and Using Structs in Swift

### Introduction to Structs
Structs in Swift are similar to classes but are typically used for simpler data structures. They are value types, meaning each instance of a struct keeps its own copy of the data, and changes to one instance do not affect others.

### Defining a Struct
A struct is defined using the `struct` keyword, followed by its name and a pair of curly braces `{}` to enclose its properties and methods.

```swift
struct Rectangle {
    var width: Double
    var height: Double

    func area() -> Double {
        return width * height
    }
}
```

The `Rectangle` struct has two properties, `width` and `height`, and a method `area()` that calculates the area of the rectangle.

### Creating Instances of a Struct
Instances of a struct are created by calling its initializer, similar to classes.

```swift
let rect = Rectangle(width: 10.0, height: 5.0)
print("Area: \(rect.area())") // Output: Area: 50.0
```

Here, `rect` is an instance of the `Rectangle` struct, initialized with a width of 10.0 and a height of 5.0.

### Value Semantics in Structs
Structs are value types, which means they are copied when passed around in code.

```swift
var original = Rectangle(width: 10.0, height: 5.0)
var copy = original
copy.width = 20.0

print(original.width) // Output: 10.0
print(copy.width)     // Output: 20.0
```

In this example, modifying `copy` does not affect `original`, demonstrating the value semantics of structs.

## 🛠️ Key Differences Between Structs and Classes

### Value vs. Reference Types
- **Structs** are value types: Each instance holds its own copy of data, and modifying one instance doesn’t affect others.
- **Classes** are reference types: Instances share the same data, and changes to one instance affect all references to that instance.

```swift
// Struct Example
struct Point {
    var x: Int
    var y: Int
}

var point1 = Point(x: 0, y: 0)
var point2 = point1
point2.x = 10

print(point1.x) // Output: 0
print(point2.x) // Output: 10

// Class Example
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

### Inheritance
- **Classes** support inheritance, allowing you to create a new class based on an existing one, inheriting its properties and methods.
- **Structs** do not support inheritance.

```swift
// Inheritance with Classes
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

### Mutability
- **Structs**: When using a `let` keyword to declare a struct, all of its properties become immutable, even if they are declared as `var`.
- **Classes**: Only the reference is immutable when using `let`. The properties themselves can still be modified.

```swift
let fixedPoint = Point(x: 1, y: 2)
// fixedPoint.x = 3 // Error: Cannot modify because `fixedPoint` is a `let` constant

let mutablePoint = PointClass(x: 1, y: 2)
mutablePoint.x = 3 // Works fine
```

### Memory Management
- **Classes** are reference types and use automatic reference counting (ARC) to manage memory.
- **Structs** are value types and are managed by Swift’s value semantics, with no need for ARC.

### When to Use Structs vs. Classes

### Use Structs When:
- The data structure represents a simple piece of data.
- You want to ensure data is copied rather than shared.
- The structure does not need to inherit behavior.
- Value semantics are desired.

### Use Classes When:
- The data structure requires inheritance.
- You need to manage shared, mutable state.
- Reference semantics are required.

## 🛠️ Practical Scenarios

### Scenario 1: Modeling a 2D Point
A 2D point is a simple piece of data with `x` and `y` coordinates, making a struct the ideal choice.

```swift
struct Point {
    var x: Double
    var y: Double
}
```

### Scenario 2: Modeling a User
A user might have multiple attributes and behaviors, potentially requiring inheritance and shared state, making a class more suitable.

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

Understanding the differences between structs and classes in Swift is crucial for writing efficient, maintainable code. Classes offer flexibility with inheritance and shared state, while structs provide simplicity and predictable behavior with value semantics. Choosing the right type for your data structures depends on the specific needs of your application.

## 🛠️ Computed Properties

### Introduction to Computed Properties
In Swift, properties are usually used to store values, but sometimes you might want a property that doesn't store a value directly but instead computes its value each time it's accessed. These are known as computed properties. Computed properties provide a flexible way to work with data, allowing you to encapsulate complex logic within a property.

### Defining Computed Properties
Computed properties are defined using the `var` keyword, just like regular properties. However, instead of assigning a stored value, you provide a getter and, optionally, a setter to calculate the property's value.

```swift
struct Circle {
    var radius: Double
    
    var area: Double {
        return .pi * radius * radius
    }
}
```

In this example, the `Circle` struct has a computed property `area`. This property doesn't store a value but calculates the area of the circle whenever it is accessed.

### Getters and Setters
Computed properties can have both a getter and a setter. The getter returns a value, while the setter allows you to define what happens when a new value is assigned to the property.

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

Here, the `Rectangle` struct has a computed property `area` with both a getter and a setter. The getter calculates the area based on the current `width` and `height`, while the setter allows you to set a new area, adjusting the `width` accordingly.

#### Shorthand for Getters
If a computed property has only a getter, you can omit the `get` keyword and simply return the computed value.

```swift
struct Temperature {
    var celsius: Double
    
    var fahrenheit: Double {
        return celsius * 9 / 5 + 32
    }
}
```

In the `Temperature` struct, the `fahrenheit` property is a computed property with only a getter, making the syntax concise and easy to read.

### Read-Only Computed Properties
Computed properties with only a getter are read-only. This means you can read their value but not assign a new value to them.

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
// point.magnitude = 10 // Error: Cannot assign to property: 'magnitude' is a get-only property
```

In this example, the `magnitude` property is read-only because it only has a getter. Attempting to assign a new value to it will result in a compile-time error.

### Using Computed Properties with Classes and Structs
Computed properties can be used with both classes and structs. They are particularly useful when you need to derive a value based on other properties or when you want to provide a convenient way to access calculated data.

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

In the `Person` class, the `fullName` property is a computed property that concatenates the `firstName` and `lastName` properties.

### Practical Scenarios for Computed Properties
- **Derived Values:** Use computed properties to derive values from other properties, such as calculating the area of a shape or converting between different units of measurement.
- **Data Validation:** Encapsulate logic to validate or adjust data when setting a property value.
- **Lazy Computation:** Avoid storing data that might not always be needed, computing it on-the-fly when accessed.

Computed properties in Swift are a powerful tool that allows you to encapsulate logic within properties, making your code cleaner and more intuitive.

## 🛠️ Lazy Properties

### Introduction to Lazy Properties
In Swift, lazy properties are properties that are not initialized until they are first accessed. This is useful for properties that are expensive to initialize or that depend on other properties that may not yet be set. By marking a property as `lazy`, you can delay its initialization until it is actually needed, which can improve performance and reduce memory usage.

### Defining Lazy Properties
To define a lazy property, you use the `lazy` keyword before the property declaration. Lazy properties must always be variables (`var`), as they are only initialized once and their value cannot be changed afterwards.

```swift
class DataManager {
    lazy var data: [String] = {
        // Expensive operation to initialize data
        print("Initializing data...")
        return ["Data1", "Data2", "Data3"]
    }()
}
```

In this example, the `data` property is marked as `lazy`. The closure provided after the `=` is used to initialize `data`. This closure is not executed until `data` is accessed for the first time.

### Accessing Lazy Properties
A lazy property is not initialized until it is first accessed. This means that if you create an instance of a class containing a lazy property but never access the lazy property, the closure used for initialization will never be executed.

```swift
let manager = DataManager()
// The closure to initialize `data` has not been executed yet

print(manager.data) // Output: Initializing data... \n ["Data1", "Data2", "Data3"]
```

In this example, the `data` property is accessed for the first time, triggering the initialization. The message "Initializing data..." is printed, indicating that the lazy property is being initialized.

### Use Cases for Lazy Properties
Lazy properties are particularly useful in the following scenarios:

1. **Expensive Initializations:** If the initialization of a property involves a time-consuming or resource-intensive operation, you can delay its initialization until it is actually needed.

2. **Dependence on Other Properties:** If the value of a property depends on other properties that may not be set at the time of initialization, you can use a lazy property to defer its setup until all required data is available.

3. **Avoiding Unnecessary Work:** If a property might not be used in every instance of a class, a lazy property ensures that initialization only occurs if the property is accessed.

### Example: Caching Data
Consider a class that manages user settings and performs an expensive operation to fetch settings data from a database.

```swift
class UserSettings {
    lazy var settingsData: [String: Any] = {
        // Simulate an expensive operation to fetch settings
        print("Fetching settings data...")
        return ["Theme": "Dark", "FontSize": 14]
    }()

    func fetchSettings() {
        // Access the lazy property to trigger initialization
        let data = settingsData
        print("Settings: \(data)")
    }
}

let settings = UserSettings()
settings.fetchSettings() // Output: Fetching settings data... \n Settings: ["Theme": "Dark", "FontSize": 14]
```

In this example, `settingsData` is a lazy property. The initialization closure is executed when `settingsData` is first accessed, in this case, when `fetchSettings()` is called.

### Important Notes
- Lazy properties are only available in classes, not structs or enums, because structs and enums are value types and have different initialization requirements.
- Lazy properties are not thread-safe by default. If multiple threads access a lazy property concurrently, you might need to use synchronization mechanisms to ensure thread safety.

Lazy properties in Swift offer a powerful way to optimize the performance of your code by delaying the initialization of properties until they are actually needed. This can be particularly beneficial when dealing with expensive or complex operations.
