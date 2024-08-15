# 🤯 Exercises

## Exercise 1

Write a Swift function that accepts an optional integer and returns its value multiplied by 2. If the optional is nil, return 0.

::: details Solution

```swift
func doubleOptionalValue(_ number: Int?) -> Int {
    return (number ?? 0) * 2
}

// Example usage:
print(doubleOptionalValue(5))  // Output: 10
print(doubleOptionalValue(nil)) // Output: 0
```

:::

## Exercise 2

Given an optional string, use optional binding to unwrap it and print "Hello, `your name`!" if the string has a value. If the optional is nil, print "Hello, Guest!".

::: details Solution

```swift
func greet(optionalName: String?) {
    if let name = optionalName {
        print("Hello, \(name)!")
    } else {
        print("Hello, Guest!")
    }
}

// Example usage:
greet(optionalName: "Alice") // Output: "Hello, Alice!"
greet(optionalName: nil)     // Output: "Hello, Guest!"
```

:::

## Exercise 3

Create a class `Person` with an optional property `address` of type `String?`. Use optional chaining to print the length of the address string if it exists; otherwise, print "No address available."

::: details Solution

```swift
class Person {
    var address: String?
}

let john = Person()
john.address = "123 Swift Lane"

if let addressLength = john.address?.count {
    print("Address length: \(addressLength)")
} else {
    print("No address available")
}

// Example usage:
john.address = nil
// Output: "No address available"
```

:::

## Exercise 4

Write a Swift function that takes two optional integers and returns their sum. If either integer is nil, treat it as 0.

::: details Solution

```swift
func sumOptionals(_ a: Int?, _ b: Int?) -> Int {
    return (a ?? 0) + (b ?? 0)
}

// Example usage:
print(sumOptionals(5, 10))  // Output: 15
print(sumOptionals(nil, 10)) // Output: 10
print(sumOptionals(nil, nil)) // Output: 0
```

:::

## Exercise 5

Define a function that uses a `guard` statement to unwrap an optional string parameter and prints its value. If the optional is nil, print "Invalid input."

::: details Solution

```swift
func printValidInput(_ input: String?) {
    guard let unwrappedInput = input else {
        print("Invalid input")
        return
    }
    print("Input is: \(unwrappedInput)")
}

// Example usage:
printValidInput("Hello, Swift!") // Output: "Input is: Hello, Swift!"
printValidInput(nil)             // Output: "Invalid input"
```

:::

## Exercise 6

Write a function in Swift that takes two integer parameters and returns their greatest common divisor (GCD) using the Euclidean algorithm.

::: details Solution

```swift
func gcd(_ a: Int, _ b: Int) -> Int {
    var a = a
    var b = b
    while b != 0 {
        let temp = b
        b = a % b
        a = temp
    }
    return a
}

let result = gcd(48, 18)
print(result)  // Output: 6
```

:::

## Exercise 7

Create a closure in Swift that takes an array of integers and returns a new array containing only the even numbers, sorted in ascending order.

::: details Solution

```swift
let filterAndSortEvenNumbers: ([Int]) -> [Int] = { numbers in
    return numbers.filter { $0 % 2 == 0 }.sorted()
}

let result = filterAndSortEvenNumbers([3, 1, 4, 1, 5, 9, 2, 6, 5])
print(result)  // Output: [2, 4, 6]
```

:::

## Exercise 8

Write a Swift function that takes a closure as a parameter. The function should execute the closure three times in a row.

::: details Solution

```swift
func repeatThreeTimes(closure: () -> Void) {
    closure()
    closure()
    closure()
}

repeatThreeTimes {
    print("Hello, Swift!")
}
// Output:
// Hello, Swift!
// Hello, Swift!
// Hello, Swift!
   ```

:::

## Exercise 9

Define a Swift closure that captures a variable from its surrounding context and increments it each time the closure is called.

::: details Solution

```swift
func createIncrementer() -> () -> Int {
    var total = 0
    let incrementer: () -> Int = {
        total += 1
        return total
    }
    return incrementer
}

let increment = createIncrementer()
print(increment())  // Output: 1
print(increment())  // Output: 2
print(increment())  // Output: 3
   ```

:::

## Exercise 10

Create a Swift function that accepts another function as an argument. This passed-in function should modify a given string by appending " is awesome!" to it.

::: details Solution

```swift
func modifyString(_ string: String, using modifier: (String) -> String) -> String {
    return modifier(string)
}

let appendAwesome: (String) -> String = { input in
    return input + " is awesome!"
}

let modifiedString = modifyString("Swift", using: appendAwesome)
print(modifiedString)  // Output: Swift is awesome!
```

:::
