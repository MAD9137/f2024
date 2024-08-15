# 🤯 Exercises

## Exercise 1

Define a Swift struct named `Circle` that has a property `radius` of type `Double` and a computed property `circumference` that calculates the circumference of the circle.

::: details Solution

```swift
struct Circle {
    var radius: Double
    
    var circumference: Double {
        return 2 * .pi * radius
    }
}

// Usage
let circle = Circle(radius: 5)
print(circle.circumference) // Output: 31.41592653589793
```

:::

## Exercise 2

Create a Swift class named `Book` with properties `title` and `author`, both of type `String`. Add an initializer to set these properties and a method `description()` that returns a string with the book's details.

::: details Solution

```swift
class Book {
    var title: String
    var author: String
    
    init(title: String, author: String) {
        self.title = title
        self.author = author
    }
    
    func description() -> String {
        return "Title: \(title), Author: \(author)"
    }
}

// Usage
let book = Book(title: "1984", author: "George Orwell")
print(book.description()) // Output: Title: 1984, Author: George Orwell
```

:::

## Exercise 3

Write a Swift class `Account` with properties `balance` (Double) and `owner` (String). Include methods `deposit(amount:)` to add to the balance and `withdraw(amount:)` to subtract from the balance, ensuring the balance does not go below zero.

::: details Solution

```swift
class Account {
    var balance: Double
    var owner: String
    
    init(owner: String, balance: Double) {
        self.owner = owner
        self.balance = balance
    }
    
    func deposit(amount: Double) {
        balance += amount
    }
    
    func withdraw(amount: Double) {
        if amount <= balance {
            balance -= amount
        } else {
            print("Insufficient funds")
        }
    }
}

// Usage
let account = Account(owner: "Alice", balance: 100)
account.deposit(amount: 50)
print(account.balance) // Output: 150.0
account.withdraw(amount: 200) // Output: Insufficient funds
print(account.balance) // Output: 150.0
```

:::

## Exercise 4

Define a Swift struct `Rectangle` with properties `width` and `height`. Add a computed property `isSquare` that returns `true` if the rectangle is a square and `false` otherwise. Also, add a mutating method `doubleSize()` that doubles the width and height.

::: details Solution

```swift
struct Rectangle {
    var width: Double
    var height: Double
    
    var isSquare: Bool {
        return width == height
    }
    
    mutating func doubleSize() {
        width *= 2
        height *= 2
    }
}

// Usage
var rectangle = Rectangle(width: 5, height: 5)
print(rectangle.isSquare) // Output: true
rectangle.doubleSize()
print(rectangle.width) // Output: 10.0
print(rectangle.height) // Output: 10.0
```

:::

## Exercise 5

Create a Swift class `Employee` with a property `salary` (Double) and a computed property `annualSalary` that calculates the annual salary. Add a lazy property `bonus` that computes a 10% bonus based on the salary only when accessed. Demonstrate that the bonus is calculated lazily.

::: details Solution

```swift
class Employee {
    var salary: Double
    
    var annualSalary: Double {
        return salary * 12
    }
    
    lazy var bonus: Double = {
        print("Calculating bonus...")
        return salary * 0.1
    }()
    
    init(salary: Double) {
        self.salary = salary
    }
}

// Usage
let employee = Employee(salary: 5000)
print(employee.annualSalary) // Output: 60000.0
print(employee.bonus) // Output: Calculating bonus... \n 500.0
print(employee.bonus) // Output: 500.0 (no calculation message)
```

:::

## Exercise 6

Define an enum in Swift named `Season` that represents the four seasons: winter, spring, summer, and fall. Write a function that takes a `Season` as input and prints a message for each season.

::: details Solution

```swift
enum Season {
    case winter
    case spring
    case summer
    case fall
}

func describeSeason(_ season: Season) {
    switch season {
    case .winter:
        print("It's cold and snowy.")
    case .spring:
        print("Flowers are blooming.")
    case .summer:
        print("It's hot and sunny.")
    case .fall:
        print("Leaves are falling.")
    }
}

describeSeason(.winter)  // Output: It's cold and snowy.
describeSeason(.summer)  // Output: It's hot and sunny.
```

:::

## Exercise 7

Create an enum `Device` with associated values to represent different devices. Each device should have a name and a year of release. Write a function that takes a `Device` enum value and prints its name and year of release.

::: details Solution

```swift
enum Device {
    case phone(name: String, year: Int)
    case tablet(name: String, year: Int)
    case laptop(name: String, year: Int)
}

func describeDevice(_ device: Device) {
    switch device {
    case .phone(let name, let year):
        print("Phone: \(name), released in \(year)")
    case .tablet(let name, let year):
        print("Tablet: \(name), released in \(year)")
    case .laptop(let name, let year):
        print("Laptop: \(name), released in \(year)")
    }
}

let myPhone = Device.phone(name: "iPhone", year: 2020)
describeDevice(myPhone)  // Output: Phone: iPhone, released in 2020

let myTablet = Device.tablet(name: "iPad", year: 2019)
describeDevice(myTablet)  // Output: Tablet: iPad, released in 2019
```

:::

## Exercise 8

Write a Swift enum `TransportMode` that has raw values of type `String` for different transport modes: "Car", "Bus", "Bike", and "Walk". Write a function that takes a `String` and returns the corresponding `TransportMode` enum if it exists, or prints "Unknown transport mode" otherwise.

::: details Solution

```swift
enum TransportMode: String {
    case car = "Car"
    case bus = "Bus"
    case bike = "Bike"
    case walk = "Walk"
}

func getTransportMode(from string: String) -> TransportMode? {
    return TransportMode(rawValue: string)
}

if let mode = getTransportMode(from: "Bike") {
    print("Selected mode: \(mode.rawValue)")  // Output: Selected mode: Bike
} else {
    print("Unknown transport mode")
}

if let mode = getTransportMode(from: "Plane") {
    print("Selected mode: \(mode.rawValue)")
} else {
    print("Unknown transport mode")  // Output: Unknown transport mode
}
```

:::

## Exercise 9

Create a generic function `compareEnums<T: Comparable>(_ a: T, _ b: T) -> Bool` that compares two enum values with raw values. Demonstrate this function using an enum `Priority` with raw values of type `Int`.

::: details Solution

```swift
enum Priority: Int {
    case low = 1
    case medium = 2
    case high = 3
}

func compareEnums<T: Comparable>(_ a: T, _ b: T) -> Bool {
    return a > b
}

let priority1 = Priority.low
let priority2 = Priority.high

print(compareEnums(priority1.rawValue, priority2.rawValue))  // Output: false
print(compareEnums(priority2.rawValue, priority1.rawValue))  // Output: true
```

:::

## Exercise 10

Extend a generic `Stack` type to add a function `contains(_ item: Element) -> Bool` that checks whether a given item exists in the stack. Use this extension to demonstrate the new functionality with a stack of `String` values.

::: details Solution

```swift
struct Stack<Element: Equatable> {
    var items: [Element] = []

    mutating func push(_ item: Element) {
        items.append(item)
    }

    mutating func pop() -> Element? {
        return items.isEmpty ? nil : items.removeLast()
    }
}

extension Stack {
    func contains(_ item: Element) -> Bool {
        return items.contains(item)
    }
}

var stackOfStrings = Stack<String>()
stackOfStrings.push("Hello")
stackOfStrings.push("World")

print(stackOfStrings.contains("Hello"))  // Output: true
print(stackOfStrings.contains("Swift"))  // Output: false
```

:::
