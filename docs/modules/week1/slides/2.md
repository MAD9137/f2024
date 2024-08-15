---
marp: true
theme: default
class:
  - invert
---

# Swift Basics

- Basic syntax and structure of Swift programs
* Variables, constants, and type inference
* Data types in Swift
* Operators and expressions

<!-- 
What we will see in this class: 
- Basic syntax and structure of Swift programs
* Variables, constants, and type inference
* Data types in Swift
* Operators and expressions
-->
---

# Swift Syntax and Structure

Here’s a simple example to demonstrate the basic structure of a Swift program:

```swift
import Foundation

let greeting = "Hello, Swift!"
print(greeting)
```

Let’s break this down:

- **`import Foundation`**: Imports the Foundation framework.
- **`let greeting = "Hello, Swift!"`**: Declares a constant `greeting`.
- **`print(greeting)`**: Prints the value of `greeting`.

<!---
The Foundation framework provides a base layer of functionality for apps and frameworks, including data storage and persistence, text processing, date and time calculations, sorting and filtering, and networking. The classes, protocols, and data types defined by Foundation are used throughout the macOS, iOS, watchOS, and tvOS SDKs.



-->

---

# Variables

**Variables** in Swift are declared using the `var` keyword and can hold data that might change over time. Here’s an example:

```swift
var currentTemperature = 72.5
print(currentTemperature)

currentTemperature = 68.0
print(currentTemperature)
```

---

# Constants
**Constants** are declared using the `let` keyword. Once a constant is set, its value cannot be changed:

```swift
let maximumScore = 100
print(maximumScore)
```

---

# To declare multiple variables on a single line

```swift
var numberOfDrinks = 0, dressedWell = true, hasCashToPayTheBill = false
```

---

# Attempt to assign a value of different type to a variable

```swift
var numberOfDrinks = 0
numberOfDrinks = 1
// numberOfDrinks = "two" // Error
```

---

# Best practices

- Use constants as much as possible. 
* Only use variables when you know its value will change.

---

# Naming Convention

Swift follows standard naming conventions:

- Type and protocol names start with an uppercase letter.
* Names of functions, constants, properties, and local variables start with a lowercase letter and use camelCase.

Google's Swift style guide is available at [Swift Style Guide](https://google.github.io/swift)

---

# Type Annotations and Type Inference

You can annotate the declaration with a type annotation:

```swift
var counter: Int
let increment: Float

let counterMax: Int = 25
```

Declaration using type inference:

```swift
let counterMax = 25
```

Type inference is the preferred approach when declaring constants and variables.

---

# Value Types and Reference Types

**Value types** include structs, arrays, and tuples. They are copied when assigned to another variable. 

**Reference types** include classes. They are shared by reference.

[🚀 Open playground Play1 🚀](../code/play1.playground/)

---

# Variable Creation and Deferred Value Assignment

Declare a new integer variable:

```swift
var users = 88
```

This is a **short-hand form**. For explicit declaration:

```swift
var users: Int = 88
```

If you don’t assign a value:

```swift
var users: Int
```

---

# Examples of deferred value assignment

```swift
var firstString: String
firstString = "string 1"

let secondString: String
secondString = "string 2"
```

---

# Comments

Single line comment:

```swift
// This is a single line comment
```

Multi-line comment:

```swift
/*
This is a multi-line comment
*/
```

---

# Semicolons

Semicolons are not required unless multiple statements are on a single line:

```swift
let counter = 23
print("The value of myCounter is: \(myCounter)")

let myCounter = 23; print("The value of myCounter is: \(myCounter)")
```

---

Swift has common data types with enhanced features

# Strings

```swift
var firstString: String = "string 1"
var secondString = "string 2"
```

---

# Integers

```swift
var firstInt: Int = 1
var secondInt = 2
```

---

# Floating Points

```swift
var firstDouble: Double = 1.234
var secondDouble = 3.14159265359

var firstFloat: Float = 5.678
var secondFloat = 3.1415 // WARNING: inferred as double
```

✱ The compiler infers all floating point values as doubles unless explicitly declared as a float.

---

# Booleans

```swift
var firstBool: Bool = true
var secondBool = false
```

---

# Numeric Literal Expressions

**Decimal Literals**

```swift
var age: Int = 20
var height: Float = 211.5
```

**Binary Literals**

```swift
var colorBin: Int = 0b11111111  // 255 in decimal
```

**Octal Literals**

```swift
var colorOct: Int = 0o377  // 255 in decimal
```

---

# Numeric Literal Expressions (cont.)

**Hexadecimal Literals**

```swift
var colorHex: Int = 0xFF  // 255 in decimal
```

**Exponential Notation**

```swift
var largeNumber: Double = 1.2e10
var smallNumber: Double = 1.2e-10
```

**Numeric Separators**

```swift
var longNumber: Int = 1_000_000
var hexNumber: Int = 0xFF_FF_FF
```

---

# Arithmetic Operators

```swift
let sum = 5 + 3
let difference = 5 - 3
let product = 5 * 3
let quotient = 5 / 3
let remainder = 5 % 3
```

---

# Assignment Operators

```swift
var value = 10
value += 5
value -= 2
value *= 2
value /= 2
value %= 3
```

---

# Comparison Operators

```swift
let isEqual = (5 == 5)
let isNotEqual = (5 != 3)
let isGreater = (5 > 3)
let isLesser = (5 < 3)
let isGreaterOrEqual = (5 >= 3)
let isLesserOrEqual = (5 <= 3)
```

---

# Logical Operators

```swift
let isTrue = true && true
let isFalse = true && false
let isEitherTrue = true || false
let isNotTrue = !true
```

---

# Ternary Conditional Operator

```swift
let age = 20
let isAdult = age >= 18 ? "Yes" : "No"
```

---

# Range Operators

```swift
let closedRange = 1...5
let halfOpenRange = 1..<5
```

---

# Comparison with JavaScript

JavaScript is dynamically typed. This flexibility can introduce subtle bugs:

```javascript
let dynamicVar = 42;
dynamicVar = "Now I'm a string";
```

Implicit type conversion can lead to unexpected results:

```javascript
let a = "5";
let b = 10;
let result = a + b; // "510"
```

---

# Problems with Weakly Typed Languages

1. **Implicit Type Coercion**

   ```javascript
   console.log('5' - 2); // 3
   console.log('5' + 2); // "52"
   ```

---

2. **Late Error Detection**

   ```javascript
   function add(x, y) {
       return x + y;
   }
   
   console.log(add(5, "10")); // "510"
   ```

---

3. **Unexpected Behavior**

   ```javascript
   console.log(0 == false); // true
   console.log('' == false); // true
   console.log([] == false); // true
   ```

---

# Swift's Strong Typing Advantage

Swift's strong typing ensures type safety:

```swift
let a: Int = 5
let b:

 String = "10"

// Swift will not compile this code:
let result = a + b // Error: Binary operator '+' cannot be applied to operands of type 'Int' and 'String'
```

Swift’s type system helps prevent errors by catching mismatched types during compilation rather than at runtime.

---

# The Absence of ++ and -- in Swift

## Increment and Decrement Operators

- Common in languages like C, C++, and JavaScript
- Used to increase or decrease a variable by 1
  - **Pre-increment** (++i): Increments before use
  - **Post-increment** (i++): Increments after use

---

## Example in JavaScript

```javascript
let i = 1;
let j = i++; // j is 1, i is 2
let k = ++i; // k is 3, i is 3
```

---

# Why Swift Doesn't Include ++ and --

- **Clarity and Readability**
  - Swift emphasizes clear, understandable code
  - Avoids the subtlety between ++i and i++

---

# Example in Swift

```swift
var i = 1
i += 1 // i is now 2
i -= 1 // i is now 1
```

---

# Avoiding Common Pitfalls

- In C:
  
```c
int x = 1;
int y = x++ + ++x; // y might not be what you expect
```

- Swift avoids such potential errors

---

# Consistency in Swift

- **Compound Assignment Operators**:
  - Swift uses += and -= for consistency
  - Matches other operators like *=, /=

---

# Simplification in Swift

- Removing ++ and -- simplifies the language
- Reduces special cases developers need to remember

---

# Incrementing in Swift

- Use compound assignment:

```swift
var counter = 0
counter += 1 // Increment by 1
counter -= 1 // Decrement by 1
print("Counter: \(counter)") // Outputs: 0
```

---

# Understanding Data Types as Classes in Swift

- Swift uses structures (struct) for data types like Int, Bool, String, etc.
- These data types have properties and methods, similar to classes.
- This provides an object-oriented approach and greater flexibility.

---

# Bool Type

- Represents a Boolean value (true or false).
- Implemented as a structure with various methods.

```swift
let randomBool = Bool.random()
print(randomBool) // Prints either 'true' or 'false'
```

**Explanation:** The `Bool` type has a static method called `random()` that returns a random Boolean value.

---

# Int Type

- Represents an integer value.
- Provides properties and methods for various operations.

```swift
let number: Int = 42
print(number.isMultiple(of: 2)) // true
```

**Explanation:** The `Int` type has an instance method `isMultiple(of:)` that checks if the integer is a multiple of another number.

---

# String Type

- Strings are sequences of characters with methods and properties.
- Can be manipulated using various instance methods.

```swift
let text = "Hello, Swift!"
print(text.uppercased()) // Prints "HELLO, SWIFT!"
```

**Explanation:** The `String` type has an instance method `uppercased()` that returns the string in uppercase.

---

# Double Type

- Represents a 64-bit floating-point number.
- Provides various properties and methods for numerical operations.

```swift
let value: Double = 3.14159
print(value.rounded()) // Prints '3.0' if rounded down or '4.0' if rounded up depending on the value
```

**Explanation:** The `Double` type has an instance method `rounded()` that returns the nearest integer value.

---

# Summary

- Basic types like `Bool`, `Int`, `String`, and `Double` are implemented as structs with methods and properties.
- This object-oriented approach provides greater flexibility and power in Swift programming.
- Leverage these capabilities to write more efficient and readable code.

---

# 🔗 References

1. [Apple's Swift Documentation](https://developer.apple.com/documentation/swift)
2. [Swift.org](https://swift.org)
3. [Google's Swift Style Guide](https://google.github.io/swift)

---

# Questions?
