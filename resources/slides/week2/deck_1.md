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

# Questions?
