---
marp: true
theme: default
class:
  - invert
---

# `if`

The `if` statement executes a block of code if the condition is true.

```swift
if condition {
    // Code to execute if the condition is true
}
```

---

**Example:**

```swift
let temperature = 75

if temperature > 70 {
    print("It's a warm day!")
}
```

---

# `else`

The `else` clause provides an alternative block of code when the condition is false.

```swift
if condition {
    // Code if true
} else {
    // Code if false
}
```

---

**Example:**

```swift
let isRaining = false

if isRaining {
    print("Take an umbrella.")
} else {
    print("No need for an umbrella today.")
}
```

---

## `else if`

The `else if` clause allows for multiple conditions.

```swift

if condition1 {
    // Code if condition1 is true
} else if condition2 {
    // Code if condition2 is true
} else {
    // Code if neither condition is true
}
```

---

**Example:**

```swift
let score = 85

if score >= 90 {
    print("Grade: A")
} else if score >= 80 {
    print("Grade: B")
} else if score >= 70 {
    print("Grade: C")
} else {
    print("Grade: F")
}
```

---

# `guard`

The `guard` statement exits early if the condition is not met.

```swift
guard condition else {
    // Code if condition is false
    return
}
```

---

**Example:**

```swift
func processAge(_ age: Int) {
    guard age >= 18 else {
        print("You must be at least 18 years old.")
        return
    }
    print("Access granted.")
}

processAge(16)
processAge(21)
```

---

# `switch`

The `switch` statement handles multiple possible values.

**Example:**
```swift
let grade = "B"

switch grade {
case "A":
    print("Excellent!")
case "B":
    print("Good job!")
case "C":
    print("You passed.")
default:
    print("See you next semester.")
}
```

---

# No Implicit Fallthrough

Swift's `switch` does not fall through to the next case automatically.

**Example:**

```swift
let animal = "cat"

switch animal {
case "dog":
    print("Woof!")
case "cat":
    print("Meow!")
case "bird":
    print("Tweet!")
default:
    print("Unknown animal sound.")
}
```

---

# Handling Multiple Values in a Single Case

**Example:**

```swift
let day = "Saturday"

switch day {
case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
    print("Weekday")
case "Saturday", "Sunday":
    print("Weekend")
default:
    print("Invalid day")
}
```

---

**Same example using one liners:**

```swift
let day = "Saturday"

switch day {
case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday": print("Weekday")
case "Saturday", "Sunday": print("Weekend")
default: print("Invalid day")
}
```

---

# Switching on Ranges

**Example:**

```swift
let age = 25

switch age {
case 0..<13:
    print("Child")
case 13..<20:
    print("Teenager")
case 20..<65:
    print("Adult")
case 65...:
    print("Senior")
default:
    print("Invalid age")
}
```

---

# Switching on Tuples

**Example:**

```swift
let coordinates = (3, 0)

switch coordinates {
case (0, 0):
    print("At the origin")
case (_, 0):
    print("On the x-axis")
case (0, _):
    print("On the y-axis")
case (-5...5, -5...5):
    print("Within bounds")
default:
    print("Outside bounds")
}
```

---

# `where`

**Example:**

```swift
let point = (2, -3)

switch point {
case let (x, y) where x == y:
    print("On the line y = x")
case let (x, y) where x == -y:
    print("On the line y = -x")
case let (x, y) where x > 0 && y > 0:
    print("In the first quadrant")
default:
    print("Somewhere else")
}
```

---

# Enumerations and `switch`

```swift
enum Direction {
    case north
    case south
    case east
    case west
}
```

---

**Example:**

```swift
let travelDirection = Direction.east

switch travelDirection {
case .north: print("Heading North")
case .south: print("Heading South")
case .east:  print("Heading East")
case .west:  print("Heading West")
}
```

---

# `switch` and Pattern Matching

**Example with Optional Binding:**
```swift
let name: String? = "Alice"

switch name {
case .some(let value):
    print("Hello, \(value)!")
case .none:
    print("No name provided.")
}
```

---

# `for`

The `for` loop iterates over a sequence.

```swift
for item in sequence {
    // Code to execute for each item
}
```

---

**Example:**

```swift
let names = ["Alice", "Bob", "Charlie"]

for name in names {
    print("Hello, \(name)!")
}
```

---

## Looping with Ranges

**Example:**
```swift
for number in 1...5 {
    print(number)
}
```

---

# `while`

The `while` loop executes as long as the condition is true.

```swift
while condition {
    // Code to execute while the condition is true
}
```

---

**Example:**

```swift
var countdown = 5

while countdown > 0 {
    print("T-minus \(countdown)...")
    countdown -= 1
}
```

---

# `repeat-while`

The `repeat-while` loop executes at least once and then checks the condition.

```swift
repeat {
    // Code to execute
} while condition
```

---

**Example:**

```swift
var number = 0

repeat {
    print("Number is \(number)")
    number += 1
} while number < 3
```

---

# Combining Loops and Conditionals

**Example:**

```swift
let numbers = [1, 2, 3, 4, 5]

for number in numbers {
    if number % 2 == 0 {
        print("\(number) is even")
    } else {
        print("\(number) is odd")
    }
}
```

---

# `for in`

The `for-in` loop is used to iterate over collections.

---

**Example with Array:**

```swift
let fruits = ["Apple", "Banana", "Cherry"]

for fruit in fruits {
    print(fruit)
}
```

---

**Example with dictionary:**

```swift
let ages = ["Alice": 30, "Bob": 25, "Charlie": 35]

for (name, age) in ages {
    print("\(name) is \(age) years old.")
}
```

---

# Looping with Indexes

Use `enumerated()` to get indexes while iterating.

**Example:**

```swift
let animals = ["Dog", "Cat", "Bird"]

for (index, animal) in animals.enumerated() {
    print("Animal at index \(index) is \(animal).")
}
```

---

# Using forEach

**Example with Set:**

```swift
let numbers: Set = [1, 2, 3, 4, 5]

numbers.forEach { number in
    print(number)
}
```

---

# Looping with Conditions

**Example with Continue:**

```swift
let numbers = [1, 2, 3, 4, 5]

for number in numbers {
    if number % 2 == 0 {
        continue
    }
    print("\(number) is odd")
}
```

---

# Looping with Conditions

**Example with Break:**

```swift
let numbers = [1, 2, 3, 4, 5]

for number in numbers {
    if number == 4 {
        break
    }
    print(number)
}
```
---

# Questions?
