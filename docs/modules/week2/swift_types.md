---
title: Swift Types
---

# Swift Types

In Swift there are two main categories of data types: value types and reference types.

## Value types and Reference types

**Value types** are the predefined data structures provided by the language like ints, floats, chars, strings, bools, structs, arrays, dictionaries, tuples, enumerators and optionals. **Reference types** include classes, functions and function closures.

The main difference between value and reference data types is the way they are passed around in memory. When a value type is passed in to a function as a parameter, it is actually duplicated in memory and the duplicate is what is manipulated within the function; when the function ends, the copy is deleted. Reference types are handled differently, and pass a reference (pointer to the original object) around directly. *This means the original object passed in to a function is changed when the function manipulates the passed-in value.*
<!-- [The quest begins: variables <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/the-quest-begins-variables?u=2199673) -->
<!-- [Value vs Reference Types <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/value-vs-reference-types?u=2199673) -->

## Types

Data types are the building blocks of programming languages and Swift has all the common types one expects to see in a modern language; however, Swift was created in part to get away from its more complex C-style predecessors to make writing applications faster, easier and in a more expressive way. For instance, characters in Swift are stored as a set of unicode scalar values called **Extended Grapheme Clusters**.

For an example of this, the unicode character for the letter “a” is "\u{61}” and can be combined into a scalar value like "\u{61}\u{302}" to give the character “â”. The root \u{61} and modifier \u{302} are combined to represent a single character—this differs from C with its ASCII character set—which leads to some interesting and expressive code.
<!-- The following videos outline the similarities and differences between Objective-C and Swift data types, how Swift types are created and how they are accessed.

[Type safety and inference <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/type-safety-and-inference?u=2199673)

[Swift operators <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/swift-operators?u=2199673) -->

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
var age: Int = 20
```

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
<!-- The folowing videos give more information about variable in Swift: -->
<!-- [Understanding strings <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/understanding-strings?u=2199673) -->
<!-- [Working with strings <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/working-with-strings?u=2199673) -->
<!-- [Type conversions <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/type-conversions?u=2199673) -->
<!-- [Bools and logical operators <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/bools-and-logical-operators?u=2199673) -->

### Variable creation and deferred value assignment

As you have seen, in Swift the keywords var and let can be used when creating a new variable. The variable's type can be set through inference (like in JavaScript) when you set a value to that variable.

You can make a new integer variable called 'users' like this:

```swift
var users = 88
```

As you have seen, this is inferring the type (an Int) based on the value it is being set to.

Languages that only use inference are called **loosely-typed languages**. Swift is, in fact, a **strongly-typed language**, meaning the variable's type *must* be chosen when you create it.

The example "var users = 88" is actually considered a **short-hand form** for the explicit version of the same declaration, which looks like:

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

The following videos descibe the basics of creating variables in Swift:

[Swift Fundamentals - Understanding Variables in Swift <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=3ea8a4be-3d91-4c9b-8db0-6d7148a59bcb)


## Mutability with `var` and `let`

So far in Swift you have seen how to create variables with the keyword **var** like this:

```swift
var height: Int = 20
```

...but what if you wanted to to create an immutable piece of data, like a const in JavaScript?

Using the keyword **let** instead of var creates your variable with read-only access; once an initial value is set can not be changed. The following shows you an example of how to define a constant integer using let.

```swift
let length: Int = 60
```

The next videos descibes constant variables, and why they are commonly used:

[Swift Fundamentals - Constants: Why They're Important <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=7f7c8849-ac71-4eba-8765-2b9bc81700da)

[Swift Fundamentals - Introducing Operators <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=8d583eb8-8b34-4e66-8c58-8808d4fb1d94)

[Swift Fundamentals - Converting in Swift: When It Happens (And When it Doesn't)<Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=fa0d36ca-04a5-4b4a-b12a-66afe5c71b11)

[Swift Fundamentals - Making Conversion Happen <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=e7b55ce2-2ab2-440d-bc00-8a1d5c5fed47)
<!-- [Variables and constants <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/variables-and-constants?u=2199673) -->

For more information about Swift variables you can look at the Apple documentation here:

[Apple Developer Docs - Swift Standard Library](https://developer.apple.com/documentation/swift/swift_standard_library)

[Back to Week 2](./index.md#during-class)