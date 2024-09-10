---
marp: true
theme: default
class:
  - invert
---

# Strings in Swift

**Creating**

- Use string literals: `"Hello, World!"`
- Using the `String` initializer: `String("Hello again!")`

---

# String Interpolation

**Inserting Values into Strings**

- Use `\()` inside a string literal.
- Example:
  
  ```swift
  let name = "Alice"
  let introduction = "My name is \(name)"
  ```

---

# Concatenating Strings

**Combining Strings**

- Use `+` or `+=` operator.
- Example:

  ```swift
  let part1 = "Hello"
  let part2 = "World!"
  let greeting = part1 + " " + part2
  ```

---

# Multiline Strings

**Handling Multiple Lines**

- Use triple double quotes `"""`.
- Example:

  ```swift
  let text = """
  This is a
  multiline string.
  """
  ```

---

# String Indices

**Accessing Characters**

- Use `String.Index` type.
- Example:

  ```swift
  let first = text[text.startIndex]
  let last = text[text.index(before: text.endIndex)]
  ```

---

# Modifying Strings

**Appending, Inserting, Removing**

- Example:

  ```swift
  var greeting = "Hello"
  greeting.append("!")
  greeting.insert(",", at: greeting.index(after: greeting.startIndex))
  ```

---

# String Properties

**Common String Methods**

- `isEmpty`: Checks if string is empty.
- `count`: Number of characters.
- `uppercased()`, `lowercased()`, `contains()`, `hasPrefix()`, `hasSuffix()`.

---

# String Comparisons

**Comparing Strings**

- Unicode-aware, locale-sensitive.
- Example:

  ```swift
  let comparison = "apple" < "banana" // true
  ```

---

# Arrays in Swift

**Creating Arrays**

- Ordered collections of values.
- Example:

  ```swift
  var numbers = [1, 2, 3, 4, 5]
  ```

---

# Accessing Array Elements

**Get and Set Values**

- Example:

  ```swift
  let first = numbers[0]
  let last = numbers.last!
  ```

---

# Modifying Arrays

**Adding, Removing, Replacing**

- Example:

  ```swift
  numbers.append(6)
  numbers.remove(at: 0)
  numbers[2] = 10
  ```

---

# Iterating Over Arrays

**Looping Through Arrays**

- Example:

  ```swift
  for number in numbers {
      print(number)
  }
  ```

---

# Dictionaries in Swift

**Creating Dictionaries**

- Store key-value pairs.
- Example:

  ```swift
  var info = ["name": "John", "age": 30]
  ```

---

# Accessing and Modifying Dictionaries

**Using Keys**

- Example:

  ```swift
  let name = info["name"]
  info["age"] = 31
  ```

---

# Iterating Over Dictionaries

**Looping Through Key-Value Pairs**

- Example:

  ```swift
  for (key, value) in info {
      print("\(key): \(value)")
  }
  ```

---

# Sets in Swift

**Creating Sets**
- Unordered collections of unique values.
- Example:
  ```swift
  var ingredients: Set<String> = ["Salt", "Pepper"]
  ```

---

# Set Operations

**Combining and Filtering**

- Intersection, Union, Difference.
- Example:

  ```swift
  let common = set1.intersection(set2)
  ```

---

# Tuples in Swift

**Grouping Values**

- Example:

  ```swift
  let person = (name: "John", age: 30)
  ```

---

# Accessing Tuples

**Using Index or Name**

- Example:

  ```swift
  let name = person.name
  let age = person.1
  ```

---

# Conversions Between Collections

**Converting Arrays, Sets, Dictionaries**

- Example:

  ```swift
  let array = [1, 2, 3]
  let set = Set(array)
  let dict = ["a": 1, "b": 2]
  ```
  
---

# 🛠️ Higher-Order Functions in Swift

Higher-order functions allow you to operate on collections using a functional programming style. They enable concise, expressive, and efficient code by applying closures or functions to elements in a collection.

---

# `map`

### Transforming Strings

```swift
let languages = ["Swift", "Python", "JavaScript"].map { $0.uppercased() }
print(languages) // Output: ["SWIFT", "PYTHON", "JAVASCRIPT"]
```

- Converts each string in the array to uppercase.

---

# `map`

### Transforming Numbers

```swift
let numbers = [1, 2, 3, 4, 5]
let squares = numbers.map { $0 * $0 }
print(squares) // Output: [1, 4, 9, 16, 25]
```

- Calculates the square of each number in the array.

---

# `filter`

### Filtering Even Numbers

```swift
let numbers = [1, 2, 3, 4, 5, 6]
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print(evenNumbers) // Output: [2, 4, 6]
```

- Returns a new array containing only the even numbers.

---

# `filter`

### Filtering Strings by Length

```swift
let words = ["Swift", "is", "awesome"]
let longWords = words.filter { $0.count > 3 }
print(longWords) // Output: ["Swift", "awesome"]
```

- Returns words with more than three characters.

---

# `reduce`

### Summing Numbers

```swift
let numbers = [1, 2, 3, 4, 5]
let sum = numbers.reduce(0) { $0 + $1 }
print(sum) // Output: 15
```

- Combines all elements into a single value, starting with `0`.

---

# `reduce`

### Concatenating Strings

```swift
let words = ["Swift", "is", "awesome"]
let sentence = words.reduce("") { $0 + " " + $1 }
print(sentence) // Output: " Swift is awesome"
```

- Concatenates strings into a single sentence.

---

# `flatMap`

### Flattening and Transforming Arrays

```swift
let nestedArrays = [[1, 2, 3], [4, 5], [6, 7, 8]]
let flattenedArray = nestedArrays.flatMap { $0.map { $0 * 2 } }
print(flattenedArray) // Output: [2, 4, 6, 8, 10, 12, 14, 16]
```

- Flattens and transforms the elements in the nested arrays.

---

# `flatMap`

### Filtering and Flattening Optionals

```swift
let optionalNumbers: [Int?] = [1, nil, 3, nil, 5]
let nonNilNumbers = optionalNumbers.flatMap { $0 }
print(nonNilNumbers) // Output: [1, 3, 5]
```

- Removes `nil` values and returns non-optional elements.

---

# `compactMap`

### Removing Nil Values

```swift
let optionalNumbers: [Int?] = [1, nil, 3, nil, 5]
let nonNilNumbers = optionalNumbers.compactMap { $0 }
print(nonNilNumbers) // Output: [1, 3, 5]
```

- Similar to `flatMap`, but specifically for removing `nil`.

---

# `compactMap`

### Converting Strings to Ints

```swift
let strings = ["1", "a", "3", "b", "5"]
let validNumbers = strings.compactMap { Int($0) }
print(validNumbers) // Output: [1, 3, 5]
```

- Converts strings to integers, omitting invalid conversions.

---

# `sorted`

### Sorting Numbers in Ascending Order

```swift
let numbers = [5, 2, 9, 1, 7]
let sortedNumbers = numbers.sorted()
print(sortedNumbers) // Output: [1, 2, 5, 7, 9]
```

- Sorts the array in ascending order.

---

# `sorted`

### Sorting Strings by Length

```swift
let words = ["Swift", "is", "awesome"]
let sortedWords = words.sorted { $0.count < $1.count }
print(sortedWords) // Output: ["is", "Swift", "awesome"]
```

- Sorts words by length in ascending order.

---

# `forEach`

### Printing Elements

```swift
let names = ["Alice", "Bob", "Charlie"]
names.forEach { print("Hello, \($0)!") }
```

- Iterates over each element and prints a greeting.

---

# `forEach`

### Multiplying Elements

```swift
let numbers = [1, 2, 3]
var product = 1
numbers.forEach { product *= $0 }
print(product) // Output: 6
```

- Multiplies each number, accumulating the product.

---

# 🛠️ Chaining Multiple Higher-Order Functions

You can chain higher-order functions for complex operations in a concise way.

---

# Example: Filter, Map, Reduce

```swift
let sentences = ["hello world", "swift programming", "functional style"]
let result = sentences
    .filter { $0.count > 10 }
    .map { $0.uppercased() }
    .reduce("", { $0 + " " + $1 })
print(result) // Output: "SWIFT PROGRAMMING FUNCTIONAL STYLE"
```

---

# Example: Sort, Map, Filter

```swift
let numbers = [5, 1, 9, 3, 8]
let result = numbers
    .sorted()
    .map { $0 * 2 }
    .filter { $0 > 10 }
print(result) // Output: [12, 16, 18]
```

---

# Example: Compact, Map, Reduce

```swift
let optionalNumbers: [Int?] = [2, nil, 4, nil, 6]
let result = optionalNumbers
    .compactMap { $0 }
    .map { $0 * $0 }
    .reduce(0, +)
print(result) // Output: 56
```

---

# Example: Flatten, Sort, Map

```swift
let nestedArrays = [[3, 1, 4], [1, 5, 9], [2, 6, 5]]
let result = nestedArrays
    .flatMap { $0 }
    .sorted()
    .map { $0 * 2 }
print(result) // Output: [2, 2, 4, 6, 8, 10, 10, 18]
```

---

# Example: Filter, Map, Sort

```swift
let words = ["swift", "objective-c", "kotlin", "java", "python"]
let result = words
    .filter { $0.count > 5 }
    .map { $0.uppercased() }
    .sorted()
print(result) // Output: ["OBJECTIVE-C", "PYTHON", "KOTLIN"]
```

---

# Questions?
