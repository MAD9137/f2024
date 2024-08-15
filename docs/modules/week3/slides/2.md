---
marp: true
theme: default
class:
  - invert
---

# Functions

The basic syntax for defining a function in Swift is:

```swift
func functionName(parameterName: ParameterType) -> ReturnType {
    // Function body
    return someValue
}
```

**Components:**
- `func`: Keyword to declare a function.
- `functionName`: Descriptive name of the function.
- `parameterName: ParameterType`: Parameters with types.
- `-> ReturnType`: Return type of the function. Use `Void` if no return value.
- `return someValue`: The returned value.

---

# Example: Basic Function

```swift
func greet(name: String) -> String {
    return "Hello, \(name)!"
}

let message = greet(name: "Alice")
print(message)  // Output: Hello, Alice!
```

`greet` takes a `String` parameter `name` and returns a greeting message.

---

# Parameters and Return Values

Functions can accept multiple parameters and return various types of values.

**Example: Function with Multiple Parameters**

```swift
func addNumbers(a: Int, b: Int) -> Int {
    return a + b
}

let sum = addNumbers(a: 5, b: 3)
print(sum)  // Output: 8
```

`addNumbers` takes two `Int` parameters and returns their sum.

---

# Default Parameter Values

Provide default values for parameters.

**Example: Function with Default Parameters**

```swift
func makeGreeting(name: String = "Guest") -> String {
    return "Hello, \(name)!"
}

print(makeGreeting())        // Output: Hello, Guest!
print(makeGreeting(name: "Bob"))  // Output: Hello, Bob!
```

`"Guest"` is used as a default value for `name`.

---

# Variadic Parameters

Pass an arbitrary number of values of a specified type.

**Example: Variadic Parameters**

```swift
func sumOfNumbers(_ numbers: Int...) -> Int {
    return numbers.reduce(0, +)
}

print(sumOfNumbers(1, 2, 3, 4))  // Output: 10
```

`numbers` collects all passed `Int` values into an array.

---

# Function Scope

Each function has its own scope for variables.

**Example: Function Scope**

```swift
func exampleFunction() {
    let localVariable = "I am local to this function"
    print(localVariable)
}

exampleFunction()  // Output: I am local to this function
// print(localVariable)  // Error: Cannot find 'localVariable' in scope
```

`localVariable` is only accessible within `exampleFunction`.

---

# Closures

Closures are self-contained blocks of code that can be passed around and used in your code. They are defined using curly braces `{}`, with parameters, a return type, and the closure body.

**Basic Syntax**

```swift
{ (parameters) -> ReturnType in
    // Closure body
}
```

---

# Closures

**Example: Basic Closure**

```swift
let greetClosure: (String) -> String = { name in
    return "Hello, \(name)!"
}

let message = greetClosure("Alice")
print(message)  // Output: Hello, Alice!
```

`greetClosure` is a closure that takes a `String` parameter and returns a `String`.

---

# Capturing Values

Closures capture and store references to variables from their context.

**Example: Capturing Values**

```swift
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    let incrementer: () -> Int = {
        total += incrementAmount
        return total
    }
    return incrementer
}
let incrementByTwo = makeIncrementer(incrementAmount: 2)
print(incrementByTwo())  // Output: 2
print(incrementByTwo())  // Output: 4
```

`incrementByTwo` captures `incrementAmount` and `total`.

---

# Closures as Function Arguments

Closures can be passed as arguments to functions.

**Example: Closure as a Function Argument**

```swift
func performOperation(operation: () -> Void) {
    print("Starting operation...")
    operation()
    print("Operation completed.")
}

performOperation {
    print("Performing task...")
}
```

`performOperation` takes a closure and executes it within its scope.

---

# Trailing Closure Syntax

Trailing closures provide a syntactic shortcut when the closure is the last argument.

**Example: Trailing Closure Syntax**

```swift
func fetchData(completion: () -> Void) {
    print("Fetching data...")
    completion()
}

fetchData {
    print("Data fetched successfully!")
}
```

The trailing closure provides the implementation of `completion`.

---

# Autoclosures

Autoclosures automatically wrap an expression in a closure.

**Example: Autoclosure**

```swift
func logIfTrue(_ condition: @autoclosure () -> Bool) {
    if condition() {
        print("Condition is true")
    }
}

logIfTrue(1 + 1 == 2)  // Output: Condition is true
```

The expression `1 + 1 == 2` is wrapped in an autoclosure.

---

# Function as a Parameter

**Syntax for Function as a Parameter:**

```swift
func higherOrderFunction(parameter: (ParameterType) -> ReturnType) {
    // Function body
}
```

---

# Function as a Parameter

**Example: Passing Functions as Arguments**

```swift
func applyOperation(to numbers: [Int], operation: (Int) -> Int) -> [Int] {
    var results = [Int]()
    for number in numbers {
        results.append(operation(number))
    }
    return results
}

func double(number: Int) -> Int {
    return number * 2
}

let numbers = [1, 2, 3, 4]
let doubledNumbers = applyOperation(to: numbers, operation: double)
print(doubledNumbers)  // Output: [2, 4, 6, 8]
```

`applyOperation` applies `double` to each element in `numbers`.

---

# Passing Closures as Function Parameters

Closures can be passed as arguments to functions.

**Example: Passing Closures as Parameters**

```swift
func performCalculation(using operation: (Int, Int) -> Int, a: Int, b: Int) -> Int {
    return operation(a, b)
}

let multiplication: (Int, Int) -> Int = { x, y in
    return x * y
}

let result = performCalculation(using: multiplication, a: 5, b: 10)
print(result)  // Output: 50
```

`performCalculation` takes a closure `operation` to perform a calculation.

---

# Returning Closures from Functions

Functions can return closures.

**Example: Returning Closures from Functions**

```swift
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    return {
        total += incrementAmount
        return total
    }
}

let incrementByFive = makeIncrementer(incrementAmount: 5)
print(incrementByFive())  // Output: 5
print(incrementByFive())  // Output: 10
```

`makeIncrementer` returns a closure that increments `total`.

---

# Closures with a Capture List

Capture lists can control how values are captured.

**Example: Closures with a Capture List**

```swift
func createCounter(incrementAmount: Int) -> () -> Int {
    var total = 0
    return { [weak self] in
        total += incrementAmount
        return total
    }
}
```

`[weak self]` prevents strong reference cycles.

---

# Demonstrating Closures as First-Class Citizens

**Example: Closures for Event Handling**

```swift
func buttonClicked(action: () -> Void) {
    action()
}

buttonClicked {
    print("Button was clicked!")
}
```

---

# Demonstrating Closures as First-Class Citizens

**Example: Closures for Asynchronous Operations**

```swift
func fetchData(completion: @escaping (String) -> Void) {
    DispatchQueue.global().async {
        let data = "Fetched data"
        DispatchQueue.main.async {
            completion(data)
        }
    }
}

fetchData { result in
    print(result)  // Output: Fetched data
}
```

---

# Defining a Named Closure

**Example: Defining a Named Closure**

```swift
let greet: (String) -> String = { name in
    return "Hello, \(name)!"
}

let greeting = greet("Alice")
print(greeting) // Output: "Hello, Alice!"
```

`greet` is a named closure that takes a `String` and returns a `String`.

---

# Benefits of Named Closures

1. **Reusability:** Named closures can be reused in different contexts.
2. **Readability:** Named closures improve code readability.

**Example: Using Named Closures**

```swift
func performOperation(operation: () -> Void) {
    operation()
}

let printMessage: () -> Void = {
    print("Operation performed.")
}

performOperation(operation: printMessage)
```

`printMessage` is a named closure used as an argument.

---

# Capturing Values in Closures

Closures capture and store references to variables and constants from their surrounding context.They capture variables and constants by reference.

**Example: Capturing Values**

```swift
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    return {
        total += incrementAmount
        return total
    }
}

let incrementByThree = makeIncrementer(incrementAmount: 3)
print(incrementByThree())  // Output: 3
print(incrementByThree())  // Output: 6
```

The closure captures `total` and `incrementAmount`.

---

# Strong Reference Cycles and Weak References

**(Problem) Strong Reference Cycles**: Closures can cause strong reference cycles if they capture `self`.

**(Solution) Weak References**: Use `[weak self]` to prevent strong reference cycles.


```swift
class Example {
    var value = 42
    lazy var closure: () -> Void = { [weak self] in
        print(self?.value ?? "No value")
    }
}

let example = Example()
example.closure()
```

`[weak self]` prevents a strong reference cycle.

---

# Summary

1. **Functions:** Define reusable blocks of code. Use parameters, return types, and support default values and variadic parameters.
2. **Closures:** Self-contained blocks of code, support capturing values, and can be passed around as first-class citizens.
3. **Function and Closure Usage:** Pass functions and closures as arguments, return closures from functions, and manage capturing values.

---

# Questions?