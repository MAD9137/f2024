# 🚀 Flow control and Loops

Conditional statements are the backbone of decision-making in programming. They allow you to execute certain blocks of code based on specific conditions, making your programs dynamic and responsive to different inputs. Swift offers three primary ways to handle conditional logic: `if`, `guard`, and `switch`.

## 🛠️ **`if` Statement**

The `if` statement is the most basic form of conditional statement. It allows you to execute a block of code if a given condition evaluates to `true`.

**Syntax:**

```swift
if condition {
    // Code to execute if the condition is true
}
```

**Example:**

```swift
let temperature = 75

if temperature > 70 {
    print("It's a warm day!")
}
```

**Explanation:**
In this example, the `if` statement checks whether the `temperature` is greater than 70. If this condition is `true`, the message "It's a warm day!" is printed.

### `else` Clause

You can extend the `if` statement with an `else` clause to handle cases where the condition is `false`.

**Syntax:**

```swift
if condition {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

**Example:**

```swift
let isRaining = false

if isRaining {
    print("Take an umbrella.")
} else {
    print("No need for an umbrella today.")
}
```

**Explanation:**
Here, if `isRaining` is `true`, the program advises taking an umbrella. Otherwise, it suggests there’s no need for one.

#### `else if` Clause

For more complex decision-making, you can chain multiple conditions together using `else if`.

**Syntax:**

```swift
if condition1 {
    // Code to execute if condition1 is true
} else if condition2 {
    // Code to execute if condition2 is true
} else {
    // Code to execute if neither condition1 nor condition2 is true
}
```

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

**Explanation:**
This code assigns grades based on the value of `score`. It checks each condition in sequence, and as soon as one is `true`, the corresponding block of code is executed.

## 🛠️ **`guard` Statement**

The `guard` statement is another way to handle conditional logic, but with a different focus. It is used to exit a function, loop, or block of code early if a condition is not met. This helps to reduce nested code and improves readability.

**Syntax:**

```swift
guard condition else {
    // Code to execute if the condition is false
    return
}
```

**Example:**

```swift
func processAge(_ age: Int) {
    guard age >= 18 else {
        print("You must be at least 18 years old.")
        return
    }
    print("Access granted.")
}

processAge(16) // Output: You must be at least 18 years old.
processAge(21) // Output: Access granted.
```

**Explanation:**
In this function, `guard` checks if `age` is 18 or older. If not, it prints a message and exits the function. If the condition is met, the program continues to the next line.

## 🛠️ `switch`

The `switch` statement in Swift is a powerful control flow construct that allows you to execute different code paths based on the value of a particular expression. Unlike `if` statements, which evaluate conditions one by one, `switch` statements evaluate a single value against multiple possible patterns, making them ideal for situations where you need to match a value against a range of possibilities.

### **Basic `switch` Statement**

At its most basic level, the `switch` statement compares a value against a series of possible cases. If a match is found, the corresponding block of code is executed.

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

**Explanation:**
- The `switch` statement starts by evaluating the value of `grade`.
- It then compares `grade` to each of the cases ("A", "B", "C").
- If `grade` matches one of the cases, the code associated with that case is executed.
- The `default` case acts as a catch-all for any values that do not match any of the specified cases. It is similar to an `else` clause in an `if` statement.

### **No Implicit Fallthrough**

One of the key differences between Swift's `switch` and the `switch` statements in languages like C or Java is the absence of implicit fallthrough. In Swift, once a matching case is found and its code is executed, the control flow exits the `switch` statement automatically. This eliminates the common error of accidentally allowing multiple cases to execute unless explicitly intended.

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

**Explanation:**
- In this example, the `switch` statement matches `animal` to the case `"cat"`, and the corresponding `"Meow!"` is printed.
- The control flow then exits the `switch` statement without continuing to the other cases. This behavior prevents unintended code execution.

### **Handling Multiple Values in a Single Case**

Swift allows you to match multiple values within a single case by separating them with commas. This feature can be useful when multiple values should trigger the same code block.

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

**Explanation:**
- Here, the `switch` statement groups weekdays ("Monday" to "Friday") together in one case and weekends ("Saturday" and "Sunday") in another.
- If `day` matches any of the values in the first case, "Weekday" is printed. If it matches either "Saturday" or "Sunday", "Weekend" is printed.
- This allows for cleaner, more concise code when multiple values should be handled similarly.

### **Switching on Ranges**

The `switch` statement in Swift supports range matching, allowing you to check whether a value falls within a certain range of numbers.

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

**Explanation:**
- The code checks the value of `age` against different ranges.
- `0..<13` represents the range from 0 up to, but not including, 13.
- `13..<20` represents the range from 13 up to, but not including, 20.
- `65...` represents the range from 65 to infinity.
- Based on the value of `age`, the corresponding case is executed.

### **Switching on Tuples**

Swift's `switch` statement can also handle tuples, which are useful when you need to evaluate multiple related values together.

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

**Explanation:**
- The `switch` statement checks the `coordinates` tuple against different patterns.
- `(0, 0)` matches the origin.
- `(_, 0)` matches any point on the x-axis (the underscore `_` is a wildcard that matches any value).
- `(0, _)` matches any point on the y-axis.
- `(-5...5, -5...5)` matches any point within a 5x5 grid centered on the origin.
- This example showcases how tuples and ranges can be combined in a `switch` statement for complex pattern matching.

### **`where` Clause in `switch`**

Swift’s `switch` statement allows you to add extra conditions to cases using the `where` clause. This is useful when you want to match a case based on a condition that cannot be expressed by a simple pattern.

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

**Explanation:**
- The `where` clause adds an additional condition that must be met for the case to match.
- `let (x, y) where x == y` matches any point on the line `y = x`.
- `let (x, y) where x == -y` matches any point on the line `y = -x`.
- `let (x, y) where x > 0 && y > 0` matches any point in the first quadrant (where both `x` and `y` are positive).
- This approach allows for more granular control within a `switch` statement.

### **Enumerations and `switch`**

The `switch` statement is particularly well-suited for working with enumerations (enums) in Swift. When you switch on an enum, you can handle each possible case of the enum, ensuring that your code covers all possibilities.

**Example:**

```swift
enum Direction {
    case north
    case south
    case east
    case west
}

let travelDirection = Direction.east

switch travelDirection {
case .north:
    print("Heading North")
case .south:
    print("Heading South")
case .east:
    print("Heading East")
case .west:
    print("Heading West")
}
```

**Explanation:**
- The `switch` statement checks the value of `travelDirection` against each case of the `Direction` enum.
- If `travelDirection` is `.east`, the corresponding block of code prints "Heading East."
- This approach is type-safe, ensuring that all possible cases of the enum are handled.

### **`switch` Statement and Pattern Matching**

Swift’s `switch` statement is deeply integrated with pattern matching, allowing you to match complex patterns and decompose values within cases.

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

**Explanation:**
- Here, the `switch` statement is used to handle an optional `String`.
- `.some(let value)` matches if `name` contains a value, and `let value` binds the unwrapped value to the `value` constant.
- `.none` matches if `name` is `nil`.
- This pattern-matching capability makes `switch` statements a powerful tool in Swift, especially for handling optionals and other complex data structures.

The `switch` statement in Swift is a robust and versatile tool for controlling program flow. Its ability to handle complex patterns, ranges, tuples, and enumerations, combined with the absence of implicit fallthrough and support for `where` clauses, makes it far more powerful than traditional `switch` statements in other languages. 

# Loops in Swift

Loops allow you to execute a block of code multiple times, which is essential for tasks like processing collections or repeating actions until a certain condition is met. Swift offers three main types of loops: `for`, `while`, and `repeat-while`.

## 🛠️ **`for` Loop**

The `for` loop is used to iterate over a sequence, such as an array, range, or string.

**Syntax:**

```swift
for item in sequence {
    // Code to execute for each item
}
```

**Example:**

```swift
let names = ["Alice", "Bob", "Charlie"]

for name in names {
    print("Hello, \(name)!")
}
```

**Explanation:**
This `for` loop iterates over the `names` array and prints a greeting for each name.

### Looping with Ranges

You can also use ranges to control the number of iterations.

**Example:**

```swift
for number in 1...5 {
    print(number)
}
```

**Explanation:**
This loop prints the numbers from 1 to 5, inclusive.

## 🛠️ **`while` Loop**

The `while` loop repeats a block of code as long as its condition is `true`.

**Syntax:**

```swift
while condition {
    // Code to execute while the condition is true
}
```

**Example:**

```swift
var countdown = 5

while countdown > 0 {
    print("T-minus \(countdown)...")
    countdown -= 1
}
```

**Explanation:**
This loop counts down from 5 to 1, printing a message each time.

## 🛠️ **`repeat-while` Loop**

The `repeat-while` loop is similar to the `while` loop, but it guarantees that the loop's body will be executed at least once because the condition is checked after the code runs.

**Syntax:**

```swift
repeat {
    // Code to execute
} while condition
```

**Example:**

```swift
var number = 0

repeat {
    print("Number is \(number)")
    number += 1
} while number < 3
```

**Explanation:**
Here, the loop prints the value of `number` and then increments it. This continues until `number` is 3, ensuring the loop runs at least once.

## 🛠️ Combining Loops and Conditionals

Loops and conditionals often work together to create complex control flows.

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

**Explanation:**
This code iterates over the `numbers` array and checks whether each number is even or odd, printing the result.

Understanding and mastering conditional statements and loops is crucial in Swift programming. These constructs form the foundation of controlling the flow of your programs, enabling you to build logic that can respond to different situations and iterate over data efficiently. 

# Looping Through Collections in Swift

When working with collections in Swift, such as arrays, dictionaries, and sets, looping is a fundamental technique for processing data. Swift offers several powerful and flexible ways to loop through collections, allowing you to iterate over elements, keys, values, and even perform operations like filtering and transforming data.

## 🛠️ **For-In Loop**

The most common way to loop through a collection in Swift is by using the `for-in` loop. This loop iterates over each element in the collection.

**Example with Array:**

```swift
let fruits = ["Apple", "Banana", "Cherry"]

for fruit in fruits {
    print(fruit)
}
```

**Explanation:**
- The `for-in` loop iterates over each element in the `fruits` array.
- Each element is assigned to the `fruit` constant within the loop body, allowing you to perform operations on it (in this case, printing).

**Example with Dictionary:**

```swift
let ages = ["Alice": 30, "Bob": 25, "Charlie": 35]

for (name, age) in ages {
    print("\(name) is \(age) years old.")
}
```

**Explanation:**
- When looping through a dictionary, each iteration provides a key-value pair (`name` and `age` in this example).
- The `for-in` loop allows you to access both the keys and values in the dictionary simultaneously.

## 🛠️ **Looping with Indexes**

Sometimes you may need the index of each element while looping through an array. Swift provides the `enumerated()` method for this purpose, which returns a sequence of pairs, each containing an index and the corresponding element.

**Example with Array and Indexes:**

```swift
let animals = ["Dog", "Cat", "Bird"]

for (index, animal) in animals.enumerated() {
    print("Animal at index \(index) is \(animal).")
}
```

**Explanation:**
- The `enumerated()` method returns both the index and the element in each iteration.
- This is particularly useful when you need to track the position of each element in the collection.

## 🛠️ **Using `forEach`**

Swift's collections also provide a `forEach` method, which is an alternative to the `for-in` loop. The `forEach` method takes a closure and applies it to each element in the collection.

**Example with Set:**

```swift
let numbers: Set = [1, 2, 3, 4, 5]

numbers.forEach { number in
    print(number)
}
```

**Explanation:**
- The `forEach` method iterates over each element in the set and applies the closure to it.
- It’s a more functional programming style approach and is particularly useful when you prefer working with closures.

**Note:** Unlike `for-in`, `forEach` does not allow you to use `continue` or `break` within the closure.

## 🛠️ **Looping with Conditions**

You can combine loops with conditional statements like `if` or `guard` to process only certain elements of a collection.

**Example with Array and Condition:**

```swift
let scores = [85, 90, 75, 92, 88]

for score in scores where score > 80 {
    print("High score: \(score)")
}
```

**Explanation:**
- The `where` clause filters the elements during iteration, so the loop only processes elements that meet the condition (in this case, scores greater than 80).

## 🛠️ **Looping with Dictionary Keys or Values**

When working with dictionaries, sometimes you may want to loop only through the keys or only through the values.

**Example with Keys:**

```swift
let countryCodes = ["US": "United States", "GB": "United Kingdom", "IN": "India"]

for countryCode in countryCodes.keys {
    print("Country code: \(countryCode)")
}
```

**Example with Values:**

```swift
for countryName in countryCodes.values {
    print("Country name: \(countryName)")
}
```

**Explanation:**
- `.keys` returns a collection of all the keys in the dictionary.
- `.values` returns a collection of all the values in the dictionary.

---

## 🛠️ **Nested Loops**

In some cases, you might need to loop through elements within another loop, known as a nested loop. This is often used when working with multidimensional collections.

**Example with Nested Loops:**

```swift
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix {
    for value in row {
        print(value, terminator: " ")
    }
    print() // New line after each row
}
```

**Explanation:**
- The outer loop iterates through each row (which is an array) in the `matrix`.
- The inner loop iterates through each element within the row, printing each value.
- This approach is useful for processing multidimensional arrays, like matrices.

## 🛠️ **Early Exit with `break` and `continue`**

While looping through collections, you might want to exit the loop early or skip certain iterations. Swift provides the `break` and `continue` keywords for these purposes.

**Example with `continue`:**

```swift
let names = ["John", "Jane", "Jill", "Jake"]

for name in names {
    if name == "Jill" {
        continue // Skip this iteration
    }
    print(name)
}
```

**Example with `break`:**

```swift
for name in names {
    if name == "Jill" {
        break // Exit the loop
    }
    print(name)
}
```

**Explanation:**
- `continue` skips the current iteration and proceeds with the next one.
- `break` exits the loop entirely when a certain condition is met.

## 🛠️ Higher-Order Functions

Higher-order functions are powerful tools in Swift that allow you to operate on collections in a functional programming style. They enable you to write concise, expressive, and efficient code by applying closures or functions to elements in a collection. The most commonly used higher-order functions in Swift are `map`, `filter`, `reduce`, `flatMap`, `compactMap`, `sorted`, and `forEach`.

### **`map`**

The `map` function transforms each element in a collection based on a closure you provide. It creates a new collection by applying the closure to each element in the original collection.

#### **Example 1: Transforming Strings**

```swift
let languages = ["Swift", "Python", "JavaScript"].map { $0.uppercased() }

print(languages) // Output: ["SWIFT", "PYTHON", "JAVASCRIPT"]
```

**Explanation:**
- The `map` function converts each string in the `languages` array to uppercase using the `uppercased()` method.
- The result is a new array containing the transformed strings.

#### **Example 2: Transforming Numbers**

```swift
let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map { $0 * $0 }

print(squares) // Output: [1, 4, 9, 16, 25]
```

**Explanation:**
- The `map` function calculates the square of each number in the `numbers` array.
- The result is a new array containing the squared values.

### **`filter`**

The `filter` function creates a new collection containing only the elements that satisfy a condition specified in the closure.

#### **Example 1: Filtering Even Numbers**

```swift
let numbers = [1, 2, 3, 4, 5, 6]
let evenNumbers = numbers.filter { $0 % 2 == 0 }

print(evenNumbers) // Output: [2, 4, 6]
```

**Explanation:**
- The `filter` function returns a new array containing only the even numbers from the original `numbers` array.

#### **Example 2: Filtering Strings by Length**

```swift
let words = ["Swift", "is", "awesome"]
let longWords = words.filter { $0.count > 3 }

print(longWords) // Output: ["Swift", "awesome"]
```

**Explanation:**
- The `filter` function returns a new array containing only the words that have more than three characters.

### **`reduce`**

The `reduce` function combines all elements in a collection into a single value, using a closure that specifies how to combine the elements.

#### **Example 1: Summing Numbers**

```swift
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce(0) { $0 + $1 }

print(sum) // Output: 15
```

**Explanation:**
- The `reduce` function starts with an initial value of `0` and then adds each number in the `numbers` array to this initial value, resulting in the sum of all numbers.

#### **Example 2: Concatenating Strings**

```swift
let words = ["Swift", "is", "awesome"]
let sentence = words.reduce("") { $0 + " " + $1 }

print(sentence) // Output: " Swift is awesome"
```

**Explanation:**
- The `reduce` function concatenates all the strings in the `words` array into a single string, separated by spaces.

### **`flatMap`**

The `flatMap` function is used to flatten a collection of collections and then map the elements using a closure.

#### **Example 1: Flattening and Transforming Arrays**

```swift
let nestedArrays = [[1, 2, 3], [4, 5], [6, 7, 8]]
let flattenedArray = nestedArrays.flatMap { $0.map { $0 * 2 } }

print(flattenedArray) // Output: [2, 4, 6, 8, 10, 12, 14, 16]
```

**Explanation:**
- The `flatMap` function first flattens the nested arrays into a single array and then doubles each element.

#### **Example 2: Filtering and Flattening Optionals**

```swift
let optionalNumbers: [Int?] = [1, nil, 3, nil, 5]
let nonNilNumbers = optionalNumbers.flatMap { $0 }

print(nonNilNumbers) // Output: [1, 3, 5]
```

**Explanation:**
- The `flatMap` function removes all `nil` values and returns an array containing only non-optional values.

### **`compactMap`**

The `compactMap` function is similar to `flatMap`, but it specifically removes `nil` values from a collection of optionals.

#### **Example 1: Removing Nil Values**

```swift
let optionalNumbers: [Int?] = [1, nil, 3, nil, 5]
let nonNilNumbers = optionalNumbers.compactMap { $0 }

print(nonNilNumbers) // Output: [1, 3, 5]
```

**Explanation:**
- The `compactMap` function returns an array with all `nil` values removed from the original array.

#### **Example 2: Converting Strings to Ints**

```swift
let strings = ["1", "a", "3", "b", "5"]
let validNumbers = strings.compactMap { Int($0) }

print(validNumbers) // Output: [1, 3, 5]
```

**Explanation:**
- The `compactMap` function attempts to convert each string to an integer. If the conversion fails (resulting in `nil`), the value is omitted from the final array.

### **`sorted`**

The `sorted` function returns a new array with the elements sorted according to a closure that specifies the sorting order.

#### **Example 1: Sorting Numbers in Ascending Order**

```swift
let numbers = [5, 2, 9, 1, 7]
let sortedNumbers = numbers.sorted()

print(sortedNumbers) // Output: [1, 2, 5, 7, 9]
```

**Explanation:**
- The `sorted` function sorts the numbers in ascending order.

#### **Example 2: Sorting Strings by Length**

```swift
let words = ["Swift", "is", "awesome"]
let sortedWords = words.sorted { $0.count < $1.count }

print(sortedWords) // Output: ["is", "Swift", "awesome"]
```

**Explanation:**
- The `sorted` function sorts the words in the array by their length in ascending order.

### **`forEach`**

The `forEach` function is used to perform an operation on each element of a collection. It is similar to a `for-in` loop but more functional.

#### **Example 1: Printing Elements**

```swift
let names = ["Alice", "Bob", "Charlie"]
names.forEach { print("Hello, \($0)!") }
```

**Explanation:**
- The `forEach` function iterates over each element in the `names` array and prints a greeting for each.

#### **Example 2: Multiplying Elements**

```swift
let numbers = [1, 2, 3]
var product = 1
numbers.forEach { product *= $0 }

print(product) // Output: 6
```

**Explanation:**
- The `forEach` function multiplies each number in the `numbers` array to the `product` variable.

## 🛠️ Chaining Multiple Higher-Order Functions

Higher-order functions can be chained together to perform complex operations in a concise way.

### Example: Filtering, Mapping, and Reducing Strings

```swift
let sentences = ["hello world", "swift programming", "functional style"]
let result = sentences
    .filter { $0.count > 10 }
    .map { $0.uppercased() }
    .reduce("", { $0 + " " + $1 })
print(result) // Output: "SWIFT PROGRAMMING FUNCTIONAL STYLE"
```

<!-- This example filters sentences longer than 10 characters, converts them to uppercase, and then concatenates them into a single string. -->

### Example: Sorting, Mapping, and Filtering Numbers

```swift
let numbers = [5, 1, 9, 3, 8]
let result = numbers
    .sorted()
    .map { $0 * 2 }
    .filter { $0 > 10 }
print(result) // Output: [12, 16, 18]
```

<!-- This example sorts numbers in ascending order, doubles each value, and then filters out values greater than 10. -->


### Example: Compacting, Mapping, and Reducing Optionals

```swift
let optionalNumbers: [Int?] = [2, nil, 4, nil, 6]
let result = optionalNumbers
    .compactMap { $0 }
    .map { $0 * $0 }
    .reduce(0, +)
print(result) // Output: 56
```

<!-- This example removes nil values from an array of optionals, squares each number, and calculates the sum of the squared values. -->


### Example: Flattening, Sorting, and Mapping Arrays

```swift
let nestedArrays = [[3, 1, 4], [1, 5, 9], [2, 6, 5]]
let result = nestedArrays
    .flatMap { $0 }
    .sorted()
    .map { $0 * 2 }
print(result) // Output: [2, 2, 4, 6, 8, 10, 10, 18]
```

<!-- This example flattens a nested array of integers, sorts the values, and then doubles each value. -->


### Example: Filtering, Mapping, and Sorting Strings

```swift
let words = ["swift", "objective-c", "kotlin", "java", "python"]
let result = words
    .filter { $0.count > 5 }
    .map { $0.uppercased() }
    .sorted()
print(result) // Output: ["OBJECTIVE-C", "PYTHON", "KOTLIN"]
```

<!-- This example filters words longer than 5 characters, converts them to uppercase, and then sorts them alphabetically. -->

