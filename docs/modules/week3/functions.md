# 🧠 Functions

Self contained blocks of code that perform a specific task functions are exactly the same as methods in classes

## Defining a Function

### Basic Function

When defining a function, start with the `func` keyword followed by the function name , `()` and braces `{ }` to enclose the code block. The following example takes no arguments, prints to the console and returns nothing.

```swift
// Basic function definition
func printHello() {
    print("Hello")
}
```

### Parameters and Return Values

Building on basic function definitions, you can add optional parameters and a return type to the definition. Some considerations when implementing parameters and return types include:

- Parameters are defined inside the parenthesis `(parameterName: <Type>)` of the function declaration
- Within the code block of the function, parameters are constants/immutable
- The return type is defined after the parenthesis using `-> <Type>`
- If a return type is defined, the function must return the defined type
- The variable being assigned the function's return value can use type inference

```swift
// function parameter and return type definition
func changeFirstName(oldName: String, newName: String) -> String {

    let confirmMessage = "Changed first from \(oldName) to \(newName)"
    return confirmMessage
}

// Call function using type inference
// Preferred
let confirmNameChange = changeFirstName(oldName: "Harry", newName: "Hank")

// Call function using type annotation
let confirmNameChange: String = changeFirstName(oldName: "Harry", newName: "Hank")
```

### Argument Labels

Function parameters have both a parameter name and an argument label. An argument label is used when calling a function and the parameter name is used within the code block of the function. By default, parameters use their parameter name as the argument label (implicit) when an argument label isn't included in the function definition.

Syntax: `(argumentLabel parameterName: <Type>)`

```swift
func changeFirstName (from oldName: String, to newName: String) {
    // Code in here
    print("Changed first name from \(oldName) to \(newName)")
}
```

Generally, argument labels are required when calling a function and it's considered a best practice to use argument labels either explicitly or implicitly. However, it is possible to remove the requirement for an argument label using `_` in place of the argument label.

```swift
func calculateArea(_ height: Int, _ width: Int) -> Int {

    return height * width
}

// Call the function
calculateArea(52, 52)
```

### Variadic Parameters

A variadic parameter accepts zero or more values of the same type. Use a variadic parameter to indicate that a parameter accepts a varying number of input values when calling a function.

```swift
// define function
func sumNumbers(_ numbers: Int...) -> Int {
    var sum = 0
    for number in numbers {
        sum += number
    }
    return sum
}

// call function
let mySum = sumNumbers(2, 5, 6, 4, 5)
```

### Implicit Return Values

If the body of a function is a single expression, a function will implicitly return the result of the expression.

```swift
func add(_ number1: Int, _ number2: Int){
    number1 + number2
}

add(5, 5)
```

## Calling a Function

### Overview

Calling a function is relatively straight-forward. We've been calling functions throughout the preceding material but it's important to note that when calling a function, the **arguments must be supplied in the order they are defined**. This is where ignoring argument labels when defining a function could lead to confusion or uncertainty.

Leveraging argument labels either explicitly or implicitly offers additional support from Xcode when calling a function. Code completion features can prepopulate argument labels reducing the need to type them out resulting in code that's easy to read, understand intent and document.

```swift
// call basic function with no parameters
basicFunc()

// with argument labels
changeFirstName(oldName: "Harry", newName: "Hank")

// Seems harmless 
chan ngeFirstName("Hank", "Harry")
```     
        
### Igno        
 nc xc                          c c p bv0n                                                                                                                                                                                                                                                                                                                                                                      ÷÷÷////  
It is possible to call a function without assigning the return value to a constant or variable but doing so will produce a warning at compile time. Instead, use `_` and assign the function to it to ignore the return value.

```swift
// Function definition returns an Int
func returnNumber() -> Int {
    return 420
}

// Call function
// Technically allowed but not a best practice
returnNumber()

// Tell Swift to ignore the return value
_ = returnNumber()
```

## Function types

In Swift, functions are types like any other but they are expressed differently. Where `String` or `Int` are self explanatory a function type is described using its parameter and return types. For example:

```swift
// Given the definition
func calculateArea(width: Int, height: Int) -> Int {
    return width * height
}

// the function type would be expressed as
(Int, Int) -> Int
```

A function with no return value or no parameters:

```swift
// Given the definition
func printHello(){
    print("Hello")
}

// the function type would be expressed as
() -> Void
```

:::tip Tip
`Void` is a type alias for an empty tuple. Functions that return nothing actually return an empty tuple.
:::

**Considerations:**

- Function types must always include a return type
- If the function doesn't return anything, use Void as the return type
- Parameter types need only be declared if they are present in the function definition

## See Also

- [Functions — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Functions.html)
- [Swift Fundamentals - Functions Pluralsigh](https://app.pluralsight.com/course-player?clipId=f21113b3-9517-460b-b335-18b0ac1c4bed)