# 🚀 Strings and Collections

## 🛠️ Strings

Strings are a fundamental data type in Swift, used to represent sequences of characters, such as words, sentences, or even entire paragraphs of text. Understanding how to work with strings is crucial for almost any programming task, from simple text manipulation to complex data processing.

### Creating Strings

A string in Swift can be created using string literals, which are simply a sequence of characters enclosed in double quotes:

```swift
let greeting = "Hello, World!"
```

Strings can also be created using the `String` initializer:

```swift
let anotherGreeting = String("Hello again!")
```

### String Interpolation

String interpolation allows you to create a new string by including the value of variables or expressions inside a string literal. You insert variables or expressions inside the string using `\(expression)`:

```swift
let name = "Alice"
let age = 30
let introduction = "My name is \(name) and I am \(age) years old."
```

This results in: `My name is Alice and I am 30 years old.`

### Concatenating Strings

Strings can be concatenated using the `+` operator or by appending one string to another using the `+=` operator:

```swift
let firstPart = "Hello"
let secondPart = ", World!"
let fullGreeting = firstPart + secondPart

var message = "Hello"
message += ", everyone!"
```

### Multiline Strings

Swift supports multiline strings, which are written using triple double quotes `"""`. This is particularly useful for representing longer pieces of text, such as a paragraph or formatted content:

```swift
let multilineString = """
This is a multiline
string in Swift.
You can write text over multiple lines.
"""
```

### Working with String Indices

Strings in Swift are not indexed by integers as in some other languages. Instead, Swift strings are indexed using a special `String.Index` type. This is because Swift strings are Unicode-compliant and a single character can take up more than one memory position.

To access individual characters in a string, you can use the `startIndex`, `endIndex`, and other index methods:

```swift
let text = "Hello, World!"
let firstCharacter = text[text.startIndex] // 'H'
let secondCharacter = text[text.index(after: text.startIndex)] // 'e'
let lastCharacter = text[text.index(before: text.endIndex)] // '!'
```

To access a range of characters, you can use index manipulation methods:

```swift
let startIndex = text.index(text.startIndex, offsetBy: 7)
let endIndex = text.index(text.startIndex, offsetBy: 12)
let substring = text[startIndex..<endIndex] // "World"
```

### Modifying Strings

Strings in Swift are value types, meaning that any modifications result in a new string being created. You can modify strings by appending, inserting, or removing characters.

To append a single character:

```swift
var welcome = "Hello"
welcome.append("!")
```

To insert a character at a specific index:

```swift
var welcome = "Hello!"
welcome.insert(",", at: welcome.index(welcome.startIndex, offsetBy: 5))
```

To remove a character or substring:

```swift
var welcome = "Hello, World!"
welcome.remove(at: welcome.index(before: welcome.endIndex)) // Remove '!'
let range = welcome.index(welcome.endIndex, offsetBy: -6)..<welcome.endIndex
welcome.removeSubrange(range) // Remove 'World'
```

### String Properties and Methods

Swift provides many useful properties and methods for working with strings:

- `isEmpty`: Checks if the string is empty.
  
  ```swift
  let emptyString = ""
  emptyString.isEmpty // true
  ```

- `count`: Returns the number of characters in the string.
  
  ```swift
  let text = "Hello"
  text.count // 5
  ```

- `uppercased()`: Converts the string to uppercase.
  
  ```swift
  let text = "Hello"
  text.uppercased() // "HELLO"
  ```

- `lowercased()`: Converts the string to lowercase.
  
  ```swift
  let text = "Hello"
  text.lowercased() // "hello"
  ```

- `contains(_:)`: Checks if the string contains a specific substring.
  
  ```swift
  let text = "Hello, World!"
  text.contains("World") // true
  ```

- `hasPrefix(_:)` and `hasSuffix(_:)`: Check if the string starts or ends with a specific substring.
  
  ```swift
  let text = "Hello, World!"
  text.hasPrefix("Hello") // true
  text.hasSuffix("World!") // true
  ```

- `replacingOccurrences(of:with:)`: Replaces all occurrences of a substring with another string.
  
  ```swift
  let text = "Hello, World!"
  let newText = text.replacingOccurrences(of: "World", with: "Swift")
  // "Hello, Swift!"
  ```

- `split(separator:)`: Splits the string into an array of substrings based on a separator.
  
  ```swift
  let sentence = "Hello, World, Swift"
  let words = sentence.split(separator: ",") 
  // ["Hello", "World", "Swift"]
  ```

- `trimmingCharacters(in:)`: Removes leading and trailing characters from the string.
  
  ```swift
  let text = "  Hello, World!  "
  let trimmedText = text.trimmingCharacters(in: .whitespaces)
  // "Hello, World!"
  ```

### Unicode and Extended Grapheme Clusters

Swift strings are fully Unicode-compliant and can represent extended grapheme clusters, which are sequences of one or more Unicode scalars that form a single human-readable character. This means that Swift handles characters such as accents or emojis correctly.

```swift
let eAcute: Character = "\u{E9}" // é
let combinedEAcute: Character = "\u{65}\u{301}" // e followed by ́
let emoji = "😀"
```

### String Comparisons

String comparisons in Swift are Unicode-aware and locale-sensitive. Swift strings can be compared using standard comparison operators (`==`, `<`, `>`, etc.):

```swift
let string1 = "apple"
let string2 = "banana"
let string3 = "Apple"

string1 < string2 // true
string1 == string3 // false
```

### String Mutability

In Swift, whether a string is mutable or immutable depends on how it is declared. If a string is declared with `let`, it is immutable. If it is declared with `var`, it is mutable:

```swift
let constantString = "This cannot change"
// constantString += "Oops" // Error: Cannot mutate a 'let' constant

var variableString = "This can change"
variableString += " and grow"
```

### String Iteration

You can iterate over each character in a string using a `for-in` loop:

```swift
let text = "Hello"
for character in text {
    print(character)
}
// Prints H e l l o
```

### Substrings

When you extract a part of a string, you get a `Substring` rather than a new `String`. Substrings in Swift are views of the original string, which means they don't create a new string in memory unless you explicitly convert them:

```swift
let text = "Hello, World!"
let startIndex = text.index(text.startIndex, offsetBy: 7)
let endIndex = text.index(text.startIndex, offsetBy: 12)
let substring = text[startIndex..<endIndex] // "World"

let newString = String(substring) // Converts Substring to String
```

Strings are versatile and powerful in Swift, allowing you to handle text efficiently and with great flexibility. From basic concatenation to complex manipulations involving Unicode characters, Swift's string handling capabilities are designed to be both easy to use and highly effective. Understanding how to work with strings is crucial for mastering Swift, as they are used in almost every aspect of programming.

Swift offers a rich set of collection types, including arrays, dictionaries, sets, and tuples. Each serves a unique purpose, allowing you to store and manipulate groups of values in different ways.

## 🛠️ Arrays

Arrays are ordered collections of values. They can hold multiple values of the same type and are one of the most commonly used collection types.

### Creating Arrays

You can create arrays in several ways:

```swift
var firstArray: [Int] = [3, 5, 6, 7, 9, 12] // Explicitly typed array
var secondArray = [1, 3, 9] // Type inferred array
```

Creating empty arrays:

```swift
var thirdArray: [Character] = []
var fourthArray = [Bool]()
var fifthArray: Array<Int> = []
var sixthArray = Array<Double>()
```

You can also create arrays with repeated values:

```swift
var namesArray = Array(repeating: "Name", count: 5)
var scoresArray = [Int](repeating: 0, count: 10)
```

### Accessing Array Elements

Accessing elements in an array is straightforward:

```swift
let firstInteger = firstArray[0]
let arrayFirstTwoInts = firstArray[0..<2] // Access a range of elements
let lastInteger = firstArray.last!
```

You can check properties like:

```swift
firstArray.isEmpty
firstArray.count
firstArray.contains(6)
```

### Modifying Arrays

Arrays are mutable if declared with `var`:

```swift
firstArray[0] = 10
firstArray[2] += 20
copiedArray.append(22)
copiedArray.remove(at: 0)
copiedArray.insert(32, at: 1)
```

You can concatenate arrays:

```swift
var secondCopiedArray = copiedArray + [45, 57]
secondCopiedArray += [61, 69]
```

### Iterating Over Arrays

Use loops to iterate through array elements:

```swift
for number in firstArray {
    print(number)
}
```

### Advanced Array Operations

Arrays can be mapped, filtered, and sorted:

```swift
let numbersSquared = firstArray.map { $0 * $0 }
let evenNumbers = firstArray.filter { $0 % 2 == 0 }
firstArray.sort()
```

Arrays can also be concatenated:

```swift
let moreNumbers = [2, 4, 6]
let allNumbers = firstArray + moreNumbers
```

## 🛠️ Dictionaries

Dictionaries store key-value pairs, where each key is unique. They are useful for mapping data, such as associating names with ages or storing configuration settings.

### Creating Dictionaries

You can create a dictionary like this:

```swift
var personInfo: [String: Any] = ["name": "John", "age": 30, "isStudent": false]
```

Empty dictionaries can be created with:

```swift
var thirdDictionary: [Int: String] = [:]
var fourthDictionary = Dictionary<Int, String>()
```

### Accessing and Modifying Dictionaries

Access elements using keys:

```swift
let name = personInfo["name"] as? String
let age = personInfo["age"] as? Int
```

Modify dictionaries by adding, updating, or removing key-value pairs:

```swift
personInfo["job"] = "Engineer"
personInfo["age"] = 31
personInfo.removeValue(forKey: "isStudent")
```

### Iterating Over Dictionaries

You can loop through dictionaries like this:

```swift
for (key, value) in personInfo {
    print("\(key): \(value)")
}
```

### Dictionary Operations

Merge dictionaries or check for keys:

```swift
personInfo.merge(["city": "New York"]) { (_, new) in new }
if personInfo.contains(where: { $0.key == "name" }) { /* ... */ }
```

Convert keys and values to arrays:

```swift
let keys = Array(personInfo.keys)
let values = Array(personInfo.values)
```

## 🛠️ Sets

Sets are unordered collections of unique values. They are useful when the order doesn't matter, and you need to ensure that all values are distinct.

### Creating Sets

Create a set explicitly or using type inference:

```swift
var firstSet: Set<String> = ["Salt", "Egg", "Flour"]
var secondSet: Set = [1.1, 43.7, 15.9, 38.6]
```

Empty sets can be created as follows:

```swift
var fourthSet = Set<Int>()
var fifthSet: Set<Float> = []
```

### Accessing and Modifying Sets

Check properties like emptiness, count, or membership:

```swift
fifthSet.isEmpty
firstSet.count
thirdSet.contains(2.2)
```

Add or remove elements:

```swift
firstSet.insert("Pepper")
let ingredient = firstSet.remove("Salt")
```

### Set Operations

Perform set operations like union, intersection, or difference:

```swift
var intersectedSet = thirdSet.intersection(secondSet)
var unionedSet = thirdSet.union(secondSet)
var subtractedSet = thirdSet.subtracting(secondSet)
```

## 🛠️ Tuples

Tuples group multiple values into a single compound value. They are particularly useful for returning multiple values from functions.

### Creating Tuples

Create a tuple by grouping values:

```swift
let person = (name: "John", age: 30, occupation: "Engineer")
```

### Accessing Tuple Elements

Access elements by name or index:

```swift
let name = person.name
let age = person.age
```

Alternatively, access by index:

```swift
print(person.0)  // Outputs "John"
print(person.1)  // Outputs 30
```

### Decomposing Tuples

Decompose tuples into individual variables:

```swift
let (personName, personAge, personOccupation) = person
```

### Advanced Tuple Usage

Tuples can be nested or used in switch statements:

```swift
let coordinates = (x: (1, 2), y: (3, 4))

switch person {
case ("John", _, "Engineer"):
    print("John is an engineer.")
case (_, _, "Doctor"):
    print("This person is a doctor.")
default:
    print("Occupation is unknown.")
}
```

Ignore specific elements when decomposing:

```swift
let (_, age, _) = person
```

## 🛠️ The Use of `_` in Swift

In Swift, the underscore (`_`) is a versatile character that can be used in various contexts to simplify your code, ignore certain values, or convey specific intentions. Below are some common uses of `_` in Swift:
 
 ### 1. Ignoring Values
When working with tuples, function parameters, or other scenarios where you don’t need to use certain values, you can use `_` to ignore them.

**Example with Tuples:**

```swift
let person = (name: "Alice", age: 25, occupation: "Engineer")
let (_, age, _) = person
print(age)  // Outputs: 25
```

In this example, the name and occupation are ignored, and only the age is extracted from the tuple.

**Example with For Loops:**

```swift
for _ in 1...5 {
    print("Hello!")
}
```

Here, the loop runs five times, but the loop variable is not used, so `_` is employed to ignore it.

### 2. Omitting External Parameter Names in Function Definitions
When defining functions, you can use `_` to omit the external parameter name, making the function call more concise.

**Example:**

```swift
func greet(_ name: String) {
    print("Hello, \(name)!")
}

greet("John")  // Outputs: Hello, John!
```

In this example, the external parameter name is omitted, so you can call `greet` without specifying a parameter name.

### 3. Ignoring Return Values
Sometimes, functions return multiple values or results that you might not be interested in. You can use `_` to ignore those values.

**Example:**

```swift
let (quotient, _) = 9.dividedReportingOverflow(by: 2)
print(quotient)  // Outputs: 4
```

Here, the remainder is ignored, and only the quotient is captured.

### 4. Using `_` as a Wildcard Pattern
In switch statements, `_` can be used as a wildcard pattern to match any value that hasn’t been explicitly matched by previous cases.

**Example:**

```swift
let fruit = "Apple"

switch fruit {
case "Banana":
    print("It's a Banana.")
case "Orange":
    print("It's an Orange.")
default:
    print("It's some other fruit.")
}
```

In this case, `_` (represented by `default`) catches all values not matched by the other cases.

### 5. Placeholder in Closures
When defining closures, you can use `_` to ignore parameters that you don’t need to work with.

**Example:**

```swift
let numbers = [1, 2, 3, 4, 5]
let evenNumbers = numbers.filter { $0 % 2 == 0 }
print(evenNumbers)  // Outputs: [2, 4]
```

In this example, `$0` represents the first (and only) parameter passed to the closure, but if there were more parameters, you could ignore them using `_`.

### 6. Ignoring Optional Values
When using optional binding (`if let` or `guard let`), you might encounter a situation where you only care about the success of the binding and not the value itself. `_` can be used in such scenarios.

**Example:**

```swift
let optionalValue: Int? = 42

if let _ = optionalValue {
    print("There is a value, but I don't need it.")
}
```

Here, the existence of a value is checked, but the actual value is ignored.

## 🛠️ Conversions

Swift provides flexible and straightforward ways to convert between different collection types. This section will cover how to create sets from arrays, arrays from sets, and arrays from dictionaries.

### Creating a Set from an Array

A set is an unordered collection of unique elements. You can easily convert an array to a set in Swift, which is useful when you need to eliminate duplicate elements from an array.

**Example:**

```swift
let array = [1, 2, 3, 3, 4, 5, 5]
let set = Set(array)
print(set)  // Outputs: [2, 3, 1, 4, 5] (order may vary)
```

Here, the array `[1, 2, 3, 3, 4, 5, 5]` is converted into a set, automatically removing the duplicate elements `3` and `5`.

### Creating an Array from a Set

Since a set is unordered and contains unique elements, converting it back to an array is simple. The resulting array will contain the same elements but without any specific order.

**Example:**

```swift
let set: Set<Int> = [1, 2, 3, 4, 5]
let array = Array(set)
print(array)  // Outputs: [1, 2, 3, 4, 5] (order may vary)
```

In this example, the set is converted back to an array. The array will include all the unique elements from the set.

### 3. Creating an Array from a Dictionary

A dictionary is a collection of key-value pairs. Converting a dictionary to an array can be done in different ways depending on whether you want to extract keys, values, or both.

**Example: Converting Dictionary Keys to an Array**

```swift
let dictionary = ["a": 1, "b": 2, "c": 3]
let keysArray = Array(dictionary.keys)
print(keysArray)  // Outputs: ["a", "b", "c"] (order may vary)
```

**Example: Converting Dictionary Values to an Array**

```swift
let valuesArray = Array(dictionary.values)
print(valuesArray)  // Outputs: [1, 2, 3] (order may vary)
```

**Example: Converting Dictionary Key-Value Pairs to an Array of Tuples**

```swift
let keyValueArray = Array(dictionary)
print(keyValueArray)  // Outputs: [("a", 1), ("b", 2), ("c", 3)] (order may vary)
```

In these examples:

- `dictionary.keys` returns a collection of keys, which is then converted to an array.
- `dictionary.values` returns a collection of values, which is also converted to an array.
- `Array(dictionary)` converts the entire dictionary to an array of tuples, where each tuple contains a key-value pair.

---

By converting between arrays, sets, and dictionaries, you can take advantage of the unique properties of each collection type to manage your data more effectively. Whether you need the uniqueness of a set, the ordered nature of an array, or the key-value pairing of a dictionary, Swift provides simple and efficient ways to transition between these collection types.

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