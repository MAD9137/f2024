# 🧠 Swift basics

## Declaring Constants and Variables

In Swift, variables are declared using the `var` keyword and constants are declared using the `let` keyword. Constants are immutable meaning a constant cannot be changed once a value has been assigned to it. A variable is mutable and can have its value changed but the value must always be of the same type.

```swift
// Declare a constant
let minimumDrinkingAge = 27

// Declare a variable
var numberOfDrinks = 0

// change values
// this will cause an error because we are attempting
// to assign a value to a constant
minimumDrinkingAge = 25

// No error
numberOfDrinks = 1
```

To declare multiple variables on a single line:

```swift
var numberOfDrinks = 0, dressedWell = true, hasCashToPayTheBill = false
```

Attempt to assign a value of different type to a variable

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

## Naming Convention

Swift follows standard naming conventions:

- Typea and protocol (`class`, `struct`, `enum`, `protocol`) names should start with an uppercase letter
- Names of functions, constants, properties and local variables start with a lower case letter and use camelCase

Google's Swift style guide is available at [Swift Style Guide](https://google.github.io/swift)

## Type Annotations and Type Inference

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

## Value types and Reference types

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

## Variable creation and deferred value assignment

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

## Comments

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

## Semicolons

Swift doesn’t require the presence of a line terminating character like semicolons at the end of each line. However, if several statements are present on a single line, a semicolon is required.

```swift
// semicolon is not required
let counter = 23
print("The value of myCounter is: \(myCounter)")

// semicolon is required
let myCounter = 23; print("The value of myCounter is: \(myCounter)")
```

## Data Types

Data types are the building blocks of programming languages and Swift has all the common types one expects to see in a modern language; however, Swift was created in part to get away from its more complex C-style predecessors to make writing applications faster, easier and in a more expressive way. For instance, characters in Swift are stored as a set of unicode scalar values called **Extended Grapheme Clusters**.

For an example of this, the unicode character for the letter `a` is `\u{61}` and can be combined into a scalar value like `\u{61}\u{302}` to give the character `â`. The root `\u{61}` and modifier `\u{302}` are combined to represent a single character—this differs from C with its ASCII character set which leads to some interesting and expressive code.

## Strings

```swift
var firstString: String = "string 1" //assign a string explicitly

var secondString = "string 2" //inferred declaration
```

## Integers

```swift
var firstInt: Int = 1 //assign a integer explicitly

var secondInt = 2 //inferred declaration
```

## Floating Points

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

## Booleans

```swift
var firstBool: Bool = true //assign a bool explicitly

var secondBool = false //inferred declaration
```

## Numeric Literal Expressions

We have seen how to create and set whole and floating point numbers like:

```swift
var age: Int = 20
````

and

```swift
var height: Float = 211.5
```

...but if you had an integer variable representing a colour, it may be more advantageous to set it with a hexadecimal value. Setting an integer with a hexadecimal numeric literal value can be done like this:

```swift
var colorHex = 0xFF
```

Setting an integer with a binary numeric literal value can be done like this:

```swift
var colorBin = 0b11111111
```

Setting an integer with a octal numeric literal value can be done like this:

```swift
var colorOct = 0o377
```

## See Also

- [Swift Fundamentals - Constants: Why They're Important Pluralsight](https://app.pluralsight.com/course-player?clipId=7f7c8849-ac71-4eba-8765-2b9bc81700da)

- [Swift Fundamentals - Converting in Swift: When It Happens (And When it Doesn't)Pluralsight ](https://app.pluralsight.com/course-player?clipId=fa0d36ca-04a5-4b4a-b12a-66afe5c71b11)

- [Swift Fundamentals - Making Conversion Happen Pluralsight](https://app.pluralsight.com/course-player?clipId=e7b55ce2-2ab2-440d-bc00-8a1d5c5fed47)

- [Apple Developer Docs - Swift Standard Library ](https://developer.apple.com/documentation/swift/swift_standard_library)

- [The Basics — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html)