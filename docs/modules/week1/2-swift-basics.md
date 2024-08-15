# 🚀Swift Basics

## 🛠️ Introduction to Swift

Swift is a powerful and intuitive programming language developed by Apple, designed to work across a wide range of Apple's platforms like iOS, macOS, watchOS, and tvOS. With its concise and expressive syntax, Swift is easy for beginners to pick up while also providing the tools professionals need to build complex applications.

In this chapter, we will cover:

- Basic syntax and structure of Swift programs
- Variables, constants, and type inference
- Data types in Swift
- Operators and expressions

These concepts form the foundation for more advanced topics in Swift and iOS development.

## 🛠️ Swift Syntax and Structure

Swift’s syntax is clear and concise, making it approachable for new programmers while still being powerful for seasoned developers. Swift is a strongly typed language, meaning that every variable and constant has a specific type that cannot be changed after it is set.

Here’s a simple example to demonstrate the basic structure of a Swift program:

```swift
import Foundation

let greeting = "Hello, Swift!"
print(greeting)
```

Let’s break this down:

- **`import Foundation`**: This line imports the [Foundation framework](https://developer.apple.com/documentation/foundation/), which provides essential data types, collections, and utilities for Swift.

- **`let greeting = "Hello, Swift!"`**: This declares a constant `greeting` with the value `"Hello, Swift!"`.

- **`print(greeting)`**: This prints the value of `greeting` to the console.

This example demonstrates a simple Swift program. As we continue, we'll explore more complex structures and operations.

## 🛠️ Variables, Constants, Types, and Type Inference

**Variables** in Swift are declared using the `var` keyword and can hold data that might change over time. Here’s an example:

```swift
var currentTemperature = 72.5
print(currentTemperature)

currentTemperature = 68.0
print(currentTemperature)
```

Here, `currentTemperature` is a variable initially set to `72.5` and later updated to `68.0`. Variables allow for flexibility when the data may need to change during the execution of the program.

**Constants** are declared using the `let` keyword. Once a constant is set, its value cannot be changed:

```swift
let maximumScore = 100
print(maximumScore)

// Uncommenting the next line would cause an error
// maximumScore = 110
```

Constants are useful for values that should remain the same throughout the program, providing safety and predictability.

**To declare multiple variables on a single line**

```swift
var numberOfDrinks = 0, dressedWell = true, hasCashToPayTheBill = false
```

**Attempt to assign a value of different type to a variable**

```swift
// Initialize variable using type inference
var numberOfDrinks = 0

// change the value to 1
numberOfDrinks = 1

// attempt to change the value to a string type will
// throw an error
numberOfDrinks = "two"  
```

::: tip Best Practice
Use constants as much as possible. Only use variables when you know its value will change.
:::

### Naming Convention

Swift follows standard naming conventions:

- Type and protocol (`class`, `struct`, `enum`, `protocol`) names should start with an uppercase letter
- Names of functions, constants, properties and local variables start with a lower case letter and use camelCase

Google's Swift style guide is available at [Swift Style Guide](https://google.github.io/swift)

### Type Annotations and Type Inference

When declaring a constant or variable, you can annotate the declaration with a type annotation. A type annotation assigns a data type in a variable or constant declaration.

```swift
// Declaration with type annotation
var counter: Int
let increment: Float

// Declaration with type annotation and initialization
let counterMax: Int = 25

// Declaration using type inference
let counterMax = 25
```

::: tip Best Practice
Type inference is the preferred approach when declaring constants and variables.
:::

### Value types and Reference types

In Swift there are two main categories of data types: value types and reference types.

**Value types** are the predefined data structures provided by the language like ints, floats, chars, strings, bools, structs, arrays, dictionaries, tuples, enumerators and optionals. **Reference types** include classes, functions and function closures.

The main difference between value and reference data types is the way they are passed around in memory. When a value type is passed in to a function as a parameter, it is actually duplicated in memory and the duplicate is what is manipulated within the function; when the function ends, the copy is deleted. Reference types are handled differently, and pass a reference (pointer to the original object) around directly. This means the original object passed in to a function is changed when the function manipulates the passed-in value.

Here's an example that illustrates the difference between a value type and a reference type in Swift using a struct (value type) and a class (reference type):

```swift
// Define a struct (value type)
struct ValuePerson {
    var name: String
    var age: Int
}

// Define a class (reference type)
class ReferencePerson {
    var name: String
    var age: Int
    
    init(name: String, age: Int) {
        self.name = name
        self.age = age
    }
}

// Create instances of the value type and reference type
var valuePerson1 = ValuePerson(name: "Alice", age: 30)
var valuePerson2 = valuePerson1 // Create a copy of valuePerson1

var referencePerson1 = ReferencePerson(name: "Bob", age: 25)
var referencePerson2 = referencePerson1 // Create a reference to referencePerson1

// Modify the instances
valuePerson2.name = "Alicia" // Changes do not affect valuePerson1
referencePerson2.name = "Bobby" // Changes affect referencePerson1

// Print the original instances
print("Value Type Example:")
print("valuePerson1: \(valuePerson1.name), \(valuePerson1.age)") // Alice, 30
print("valuePerson2: \(valuePerson2.name), \(valuePerson2.age)") // Alicia, 30 (valuePerson2 is a copy)

print("\nReference Type Example:")
print("referencePerson1: \(referencePerson1.name), \(referencePerson1.age)") // Bobby, 25
print("referencePerson2: \(referencePerson2.name), \(referencePerson2.age)") // Bobby, 25 (referencePerson2 refers to the same object)

```

In this example:

1. `ValuePerson` is a struct, which is a value type. When we create a copy of `valuePerson1`, changes to one instance do not affect the other because they are separate copies.

2. `ReferencePerson` is a class, which is a reference type. When we create `referencePerson2` as a reference to `referencePerson1`, changes made to one instance are reflected in the other because they both point to the same underlying object in memory.

This demonstrates the key difference between value types and reference types in Swift: value types are copied when assigned to another variable, while reference types are shared by reference.

### Variable creation and deferred value assignment

As you have seen, in Swift the keywords var and let can be used when creating a new variable. The variable's type can be set through inference (like in JavaScript) when you set a value to that variable.

You can make a new integer variable called 'users' like this:

```swift
var users = 88
```

As you have seen, this is inferring the type (an Int) based on the value it is being set to.

Languages that only use inference are called **loosely-typed languages**. Swift is, in fact, a **strongly-typed language**, meaning the variable's type must be chosen when you create it.

The example `var users = 88` is actually considered a **short-hand form** for the explicit version of the same declaration, which looks like:

```swift
var users: Int = 88
```

Using the short-hand can **only** be used when initially assigning a value to your variable as you create it.

If you wanted to create a new variable but don't want to assign a value to it, you must assign the type like:

```swift
var users: Int
```

The following shows you examples of the different ways you can define a variable:

```swift
var firstString: String //deferred declaration of a string
firstString = "string 1" //deferred value assignment

let secondString: String //deferred declaration of a constant string
secondString = "string 2" //deferred constant value assignment
```

The following is a link to videos that describe the basics of creating variables in Swift:

[Swift Fundamentals - Understanding Variables in Swift Pluralsight](https://app.pluralsight.com/course-player?clipId=3ea8a4be-3d91-4c9b-8db0-6d7148a59bcb)

### Comments

Like all programming languages, developers can markup code with comments. Comments in Swift are non executable text that are indicated with // for single line comments or /* */ for multi-line comments.

Single line comment

```swift
// This is a single line comment
```

Multi-line comment

```swift
/*
this is a multi-line comment

All the Lorem Ipsum generators on the Internet tend to repeat predefined 
chunks as necessary, making this the first true generator on the Internet. 
It uses a dictionary of over 200 Latin word
*/
```

### Semicolons

Swift doesn’t require the presence of a line terminating character like semicolons at the end of each line. However, if several statements are present on a single line, a semicolon is required.

```swift
// semicolon is not required
let counter = 23
print("The value of myCounter is: \(myCounter)")

// semicolon is required
let myCounter = 23; print("The value of myCounter is: \(myCounter)")
```

### Data Types

Data types are the building blocks of programming languages and Swift has all the common types one expects to see in a modern language; however, Swift was created in part to get away from its more complex C-style predecessors to make writing applications faster, easier and in a more expressive way. For instance, characters in Swift are stored as a set of unicode scalar values called **Extended Grapheme Clusters**.

For an example of this, the unicode character for the letter `a` is `\u{61}` and can be combined into a scalar value like `\u{61}\u{302}` to give the character `â`. The root `\u{61}` and modifier `\u{302}` are combined to represent a single character—this differs from C with its ASCII character set which leads to some interesting and expressive code.

### Strings

```swift
var firstString: String = "string 1" //assign a string explicitly

var secondString = "string 2" //inferred declaration
```

### Integers

```swift
var firstInt: Int = 1 //assign a integer explicitly

var secondInt = 2 //inferred declaration
```

### Floating Points

```swift
var firstDouble: Double = 1.234 //assign a double explicitly

var secondDouble = 3.14159265359 //inferred declaration
```

```swift
var firstFloat: Float = 5.678 //assign a float explicitly

var secondFloat = 3.1415 //WARNING: all inferred floats are interpreted as doubles
```

::: warning Note 
The compiler infers all floating point values as doubles unless explicitly declared as a float.
:::

### Booleans

```swift
var firstBool: Bool = true //assign a bool explicitly

var secondBool = false //inferred declaration
```

To expand on the topic of Numeric Literal Expressions and operators in Swift, here's how you can cover all aspects:

---

### Numeric Literal Expressions in Swift

In Swift, numeric literals are values that are directly represented in the code without any computation. You can represent numbers in various formats, depending on the type of value and the context in which you want to use it. 

**Decimal Literals** are the most common way to represent whole and floating-point numbers. These literals do not require any prefix.

```swift
var age: Int = 20
var height: Float = 211.5
```

**Binary Literals** are useful when working directly with binary data or when you need to interact with systems that use binary numbering. Binary literals are prefixed with `0b`.

```swift
var colorBin: Int = 0b11111111  // 255 in decimal
```

**Octal Literals** can be used in systems where the octal number system is preferable. These literals are prefixed with `0o`.

```swift
var colorOct: Int = 0o377  // 255 in decimal
```

**Hexadecimal Literals** are widely used in contexts like color representation in UI programming or working with memory addresses. These literals are prefixed with `0x`.

```swift
var colorHex: Int = 0xFF  // 255 in decimal
```

**Exponential Notation**. For floating-point numbers, you can use exponential notation to represent very large or very small numbers more conveniently. The notation uses an `e` or `E` to indicate the power of 10.

```swift
var largeNumber: Double = 1.2e10  // 12,000,000,000
var smallNumber: Double = 1.2e-10  // 0.00000000012
```

**Numeric Separators**. Swift allows you to use underscores (`_`) as separators within numeric literals to make them easier to read, especially for large numbers.

```swift
var longNumber: Int = 1_000_000  // One million
var hexNumber: Int = 0xFF_FF_FF  // 16777215 in decimal
```

### Operators in Swift

Swift includes a wide range of operators to perform calculations and manipulate values. Here's an overview of some key operator categories:

**Arithmetic Operators**. Swift supports the basic arithmetic operators you would expect:

```swift
let sum = 5 + 3        // Addition
let difference = 5 - 3 // Subtraction
let product = 5 * 3    // Multiplication
let quotient = 5 / 3   // Division
let remainder = 5 % 3  // Modulo
```

**Assignment Operators** assign values to variables:

```swift
var value = 10
value += 5  // value is now 15
value -= 2  // value is now 13
value *= 2  // value is now 26
value /= 2  // value is now 13
value %= 3  // value is now 1
```

**Comparison Operators** return a Boolean value based on the comparison:

```swift
let isEqual = (5 == 5)  // true
let isNotEqual = (5 != 3)  // true
let isGreater = (5 > 3)  // true
let isLesser = (5 < 3)  // false
let isGreaterOrEqual = (5 >= 3)  // true
let isLesserOrEqual = (5 <= 3)  // false
```

**Logical Operators**
Logical operators are used to combine Boolean expressions:

```swift
let isTrue = true && true   // Logical AND, true
let isFalse = true && false // Logical AND, false
let isEitherTrue = true || false  // Logical OR, true
let isNotTrue = !true  // Logical NOT, false
```

**Ternary Conditional Operator**
The ternary conditional operator is a shorthand for `if-else` statements that assigns one of two values based on a condition.

```swift
let age = 20
let isAdult = age >= 18 ? "Yes" : "No"  // "Yes"
```

**Range Operators**
Range operators create a range of values:

```swift
let closedRange = 1...5  // 1, 2, 3, 4, 5
let halfOpenRange = 1..<5  // 1, 2, 3, 4
```

---

This expanded section should provide a comprehensive overview of numeric literals and operators in Swift, giving your readers a solid foundation in handling these essential elements of the language.

### See Also

- [Swift Fundamentals - Constants: Why They're Important Pluralsight](https://app.pluralsight.com/course-player?clipId=7f7c8849-ac71-4eba-8765-2b9bc81700da)

- [Swift Fundamentals - Converting in Swift: When It Happens (And When it Doesn't)Pluralsight ](https://app.pluralsight.com/course-player?clipId=fa0d36ca-04a5-4b4a-b12a-66afe5c71b11)

- [Swift Fundamentals - Making Conversion Happen Pluralsight](https://app.pluralsight.com/course-player?clipId=e7b55ce2-2ab2-440d-bc00-8a1d5c5fed47)

- [Apple Developer Docs - Swift Standard Library ](https://developer.apple.com/documentation/swift/swift_standard_library)

- [The Basics — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html)

## 🛠️ Comparison with JavaScript

JavaScript is a dynamically typed language, meaning that the type of a variable is determined at runtime rather than at compile-time. This flexibility can be convenient for quick scripting but can lead to subtle and hard-to-diagnose bugs, especially in larger codebases.

In JavaScript, a variable can change its type based on the value assigned to it:

```javascript
let dynamicVar = 42; // Initially a number
dynamicVar = "Now I'm a string"; // Now a string
```

This flexibility is a double-edged sword. While it allows for rapid prototyping, it can also introduce unexpected behavior. For example:

```javascript
let a = "5";
let b = 10;
let result = a + b; // "510" (string concatenation, not addition)
```

In the above example, JavaScript implicitly converts the number `10` into a string and concatenates it with `"5"`, resulting in `"510"` instead of the expected `15`.

## 🛠️ Problems with Weakly Typed Languages

1. **Implicit Type Coercion:**
   JavaScript automatically converts types during operations, which can lead to confusing outcomes:

   ```javascript
   console.log('5' - 2); // 3 (string '5' is converted to a number)
   console.log('5' + 2); // "52" (number 2 is converted to a string)
   ```

   The rules for type coercion are not always intuitive, which can lead to bugs that are difficult to trace.

2. **Late Error Detection:**
   Since JavaScript is dynamically typed, type-related errors are only detected at runtime, not at compile-time. This means that a type error might only be discovered when the specific line of code is executed, possibly after the application has been deployed:

   ```javascript
   function add(x, y) {
       return x + y;
   }
   
   console.log(add(5, "10")); // "510" instead of 15
   ```

   In this example, no error is thrown until the function is called with arguments of different types.

3. **Unexpected Behavior:**
   Weak typing can lead to unexpected behavior if developers are not vigilant. For example, comparing values of different types in JavaScript can produce surprising results:

   ```javascript
   console.log(0 == false); // true
   console.log('' == false); // true
   console.log([] == false); // true
   ```

   JavaScript's loose equality (`==`) allows for type coercion, which can produce results that may not align with the developer's intent.

## 🛠️ Swift's Strong Typing Advantage

In contrast, Swift's strong typing ensures that once a variable's type is set, it cannot change. This eliminates many of the issues seen in dynamically typed languages like JavaScript. In Swift:

```swift
let a: Int = 5
let b: Int = 10
let result = a + b // 15 (as expected)
```

In this example, both `a` and `b` are explicitly defined as integers, and their types cannot change. This prevents the kind of unexpected behavior seen in JavaScript. Additionally, Swift’s type inference still allows for concise code while maintaining type safety:

```swift
let x = 5 // Inferred as Int
let y = 10.0 // Inferred as Double
```

If you try to add `x` and `y` directly, Swift will produce a compile-time error, prompting you to handle the type mismatch explicitly:

```swift
let sum = Double(x) + y // Correct: Converts `x` to `Double`
```

This ensures that your code behaves predictably and reduces the likelihood of runtime errors.

**JavaScript Comparison:**

In JavaScript, variables are dynamically typed, meaning the same variable can hold different types at different times, which can introduce bugs if not carefully managed:

```javascript
let dynamicVar = 42; // Number
dynamicVar = "Now a string"; // Now a string
```

In Swift, you would receive a compile-time error if you attempted to change the type of a variable after it has been set.

## 🛠️ The Absence of `++` and `--` in Swift

In many programming languages, such as C, C++, and JavaScript, you may have encountered the `++` (increment) and `--` (decrement) operators. These operators are used to increase or decrease the value of a variable by 1, and they can be used in two forms:

- **Pre-increment (`++i`)**: Increments the value of `i` before it is used in an expression.
- **Post-increment (`i++`)**: Increments the value of `i` after it is used in an expression.

For example, in JavaScript, you might write:

```javascript
let i = 1;
let j = i++; // j is 1, i is 2
let k = ++i; // k is 3, i is 3
```

However, Swift intentionally does not include these operators. The Swift language designers made this decision to avoid potential confusion and errors that can arise from using `++` and `--`.

## 🛠️ Reasons for Removing `++` and `--` in Swift

1. **Clarity and Readability:**
   The `++` and `--` operators can make code less readable, especially for developers who are not familiar with their nuances. For instance, the difference between pre-increment (`++i`) and post-increment (`i++`) can be subtle and lead to misunderstandings. Swift favors clarity and simplicity, which is why it encourages the use of more explicit forms like `+= 1` or `-= 1`.

   ```swift
   var i = 1
   i += 1 // i is now 2
   i -= 1 // i is now 1
   ```

   This approach leaves no ambiguity about when the increment or decrement occurs, making the code easier to understand and maintain.

2. **Avoiding Common Pitfalls:**
   The `++` and `--` operators can introduce bugs when misused, especially in complex expressions. Consider the following example in C:

   ```c
   int x = 1;
   int y = x++ + ++x; // y might not be what you expect
   ```

   The value of `y` depends on the order of evaluation, which can vary between different compilers. This can lead to inconsistent behavior and hard-to-find bugs. By eliminating these operators, Swift reduces the risk of such errors.

3. **Consistency:**
   Swift's approach to incrementing and decrementing values is consistent with its philosophy of making code safer and more predictable. Using explicit operations like `+= 1` and `-= 1` keeps the syntax consistent with other compound assignment operators (`*=`, `/=`, etc.), leading to more uniform and understandable code.

4. **Simplification:**
   Removing `++` and `--` simplifies the language's syntax and reduces the number of special cases that developers need to remember. This aligns with Swift's goal of being an easy-to-learn language while still being powerful.

## 🛠️ Incrementing and Decrementing in Swift

In Swift, instead of using `i++` or `++i`, you simply use the compound assignment operators `+=` and `-=` to increment or decrement a variable:

```swift
var counter = 0
counter += 1 // Increment by 1
counter -= 1 // Decrement by 1

print("Counter: \(counter)") // Outputs: 0
```

This approach ensures that the operation is clear and that there's no ambiguity about the order of operations. The code remains readable, understandable, and less prone to errors.

While the `++` and `--` operators are common in many languages, Swift’s decision to exclude them is driven by a desire to create a language that prioritizes clarity, safety, and simplicity. By using `+=` and `-=`, Swift encourages developers to write code that is explicit and easy to follow, reducing the likelihood of subtle bugs and making the language more consistent and approachable.

**Range Operators**

Range operators define a range of values:

```swift
let closedRange = 1...5 // Includes 1, 2, 3, 4, 5
let halfOpenRange = 1..<5 // Includes 1, 2, 3, 4

print("Closed Range: \(closedRange), Half-Open Range: \(halfOpenRange)")
```

## 🛠️ Understanding Data Types as Classes

In Swift, even basic data types like `Int`, `Bool`, `String`, and others are implemented as structures (`struct`) rather than traditional primitive types. This means they have properties and methods, just like classes. Let's look at some examples to illustrate this:

#### 1. `Bool` Type

The `Bool` type in Swift represents a Boolean value (`true` or `false`). It's implemented as a structure with various methods. 

**Example:**

```swift
let randomBool = Bool.random()
print(randomBool) // Prints either 'true' or 'false'
```

- **Explanation**: The `Bool` type has a static method called `random()` that returns a random Boolean value (`true` or `false`).

#### 2. `Int` Type

The `Int` type represents an integer value. It, too, has properties and methods.

**Example:**

```swift
let number: Int = 42

print(number.isMultiple(of: 2)) // true
```

- **Explanation**: The `Int` type has an instance method `isMultiple(of:)` that checks if the integer is a multiple of another number.

#### 3. `String` Type

Strings in Swift are not just sequences of characters; they have a rich set of methods and properties.

**Example:**

```swift
let text = "Hello, Swift!"

print(text.uppercased()) // Prints "HELLO, SWIFT!"
```

- **Explanation**: The `String` type has an instance method `uppercased()` that returns the string in uppercase.

#### 4. `Double` Type

The `Double` type represents a 64-bit floating-point number. It also provides various properties and methods.

**Example:**

```swift
let value: Double = 3.14159

print(value.rounded()) // Prints '3.0' if rounded down or '4.0' if rounded up depending on the value
```

- **Explanation**: The `Double` type has an instance method `rounded()` that returns the nearest integer value.

By understanding that basic types like `Bool`, `Int`, `String`, etc., are classes (or more accurately, structs with methods and properties), you can leverage their full capabilities in your Swift programs. This object-oriented approach provides greater flexibility and power in working with these types.
