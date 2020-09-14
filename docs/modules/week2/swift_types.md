---
title: Swift Types
---

## Value types and Reference types

In Swift there are two main categories of data types: value types and reference types.

**Value types** are the predefined data structures provided by the language like ints, floats, chars, strings, bools, structs, arrays, dictionaries, tuples, enumerators and optionals. **Reference types** include classes, functions and function closures.

The main difference between value and reference data types is the way they are passed around in memory. When a value type is passed in to a function as a parameter, it is actually duplicated in memory and the duplicate is what is manipulated within the function; when the function ends, the copy is deleted. Reference types are handled differently, and pass a reference (pointer to the original object) around directly. *This means the original object passed in to a function is changed when the function manipulates the passed-in value.*

## Mutability with `var` and `let`

So far in Swift you have seen how to create variables with the keyword **var** like this:

```swift
var height: int = 20
```

...but what if you wanted to to create an immutable piece of data, like a const in JavaScript?

Using the keyword **let** instead of var creates your variable with read-only access; once an initial value is set can not be changed. The following shows you an example of how to define a constant integer using let.

```swift
let length: int = 60
```

## Types

Data types are the building blocks of programming languages and Swift has all the common types one expects to see in a modern language; however, Swift was created in part to get away from its more complex C-style predecessors to make writing applications faster, easier and in a more expressive way. For instance, characters in Swift are stored as a set of unicode scalar values called **Extended Grapheme Clusters**.

For an example of this, the unicode character for the letter “a” is "\u{61}” and can be combined into a scalar value like "\u{61}\u{302}" to give the character “â”. The root \u{61} and modifier \u{302} are combined to represent a single character—this differs from C with its ASCII character set—which leads to some interesting and expressive code.

The following videos outline the similarities and differences between Objective-C and Swift data types, how Swift types are created and how they are accessed.

### Strings

```swift
var firstString: String = "string 1" //assign a string explicitly

var secondString = "string 2" //inferred declaration
```

### Characters

```swift
var firstChar: Character = "A" //assign a character explicitly

var secondChar = "B" //WARNING: inferred declaration defaults to string
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

**NOTE:** The compiler infers all floating point values as doubles unless explicitly declared as a float.

### Booleans

```swift
var firstBool: Bool = true //assign a bool explicitly

var secondBool = false //inferred declaration
```

### Numeric Literal Expressions

We have seen how to create and set whole and floating point numbers like:

```swift
var age: int = 20
```

and

```swift
var height: float = 211.5
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

### Optional variable creation and deferred value assignment

As you have seen, in Swift the keywords var and let can be used when creating a new variable. The variable's type can be set through inference (like in JavaScript) when you set a value to that variable.

[Swift 5 Essential Training - Value vs Reference Types](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types?u=2199673)

You can make a new integer variable called 'users' like this:

```swift
var users = 88
```

which seems to be inferring the type (an int) based on the value it is being set to.

Languages that use inference are called **loosely-typed languages**. Swift is, in fact, a **strongly-typed language**, meaning the variable's type *must* be chosen when you create it.

The example "var users = 88" is actually considered a **short-hand form** for the explicit version of the same declaration, which looks like:

```swift
var users:int = 88
```

This short-hand can only be used initially when assigning a value to your variable as you create it.

If you wanted to create a new variable but don't want to assign a value to it, you must assign the type like:

```swift
var users:int
```

or the compiler will throw errors. These are called **optional variables**, and to use them you must also start checking if your optional value is equal to **nil** in your code before you access is using an if statement.

The following shows you examples of the different ways you can define a variable:

```swift
var firstString: String = "string 1" //assign a string explicitly

var secondString: String //deferred declaration
secondString = "string 2" //deferred value assignment

var thirdString = "string 3" //inferred declaration

let fourthString: String = "string 4" //assign a constant string explicitly

let fifthString: String //deferred constant declaration
fifthString = "string 5" //deferred constant value assignment

let sixthString = "string 6" //inferred constant declaration
```

[Apple Developer Docs - Swift Standard Library](https://developer.apple.com/documentation/swift/swift_standard_library)

[Swift 5 Essential Training - Variables](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables?u=2199673)

[Back to Week 2](./index.md#during-class)