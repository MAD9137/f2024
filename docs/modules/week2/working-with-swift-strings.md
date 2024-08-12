# 🧠 Working with Swift strings

## Introduction

- Strings are a fundamental data type in programming, used for representing text and characters.
- In Swift, the String type is versatile and powerful, offering various methods and properties to work with text.

## Creating Strings

- Swift provides multiple ways to create strings:

  - **String Literals:** Enclosed in double quotation marks.

    ```swift
    let greeting = "Hello, World!"
    ```

  - **String Initialization:** Using the `String` constructor.

    ```swift
    let name = String("John")
    ```

## String Interpolation

- Swift allows you to include variables and expressions within a string using string interpolation.

  ```swift
  let age = 25
  let message = "My age is \(age) years."
  ```

## String Concatenation

- You can concatenate strings using the `+` operator.

  ```swift
  let firstName = "John"
  let lastName = "Doe"
  let fullName = firstName + " " + lastName
  ```

## String Length

- Get the length of a string using the `count` property.

  ```swift
  let text = "Swift Strings"
  let length = text.count
  ```

## Accessing Characters

- Access individual characters in a string using subscript notation.

  ```swift
  let word = "Swift"
  let firstCharacter = word[word.startIndex] // 'S'
  let secondCharacter = word[word.index(after: word.startIndex)] // 'w'
  ```

## String Slicing

- Extract substrings using subscript ranges.

  ```swift
  let text = "Hello, World!"
  let greeting = text[..<text.index(text.startIndex, offsetBy: 5)] // "Hello"
  ```

## String Comparison

- Compare strings using equality and inequality operators.

  ```swift
  let str1 = "apple"
  let str2 = "orange"
  if str1 == str2 {
      // Strings are equal
  }
  ```

## String Modification

- Strings in Swift are immutable by default.
- To modify a string, create a new one with the desired changes.

  ```swift
  var greeting = "Hello"
  greeting += ", World!" // "Hello, World!"
  ```

## String Methods

- Swift offers a wide range of methods for string manipulation:

### isEmpty

```swift
let emptyString = ""
if emptyString.isEmpty {
    print("The string is empty.")
}
```

### hasPrefix

```swift
let text = "Swift Programming"
if text.hasPrefix("Swift") {
    print("The string starts with 'Swift'.")
}
```

### hasSuffix

```swift
let file = "document.pdf"
if file.hasSuffix(".pdf") {
    print("It's a PDF file.")
}
```

### contains

```swift
let sentence = "Swift is fun!"
if sentence.contains("fun") {
    print("The sentence contains the word 'fun'.")
}
```

### lowercased and uppercased

```swift
let name = "John Doe"
let lowercaseName = name.lowercased()
let uppercaseName = name.uppercased()
print(lowercaseName) // "john doe"
print(uppercaseName) // "JOHN DOE"
```

### replacingOccurrences(of:with:)

```swift
let text = "Hello, World!"
let newText = text.replacingOccurrences(of: ",", with: " and")
print(newText) // "Hello and World!"
```

### split(separator:)

```swift
let sentence = "This is a sentence."
let words = sentence.split(separator: " ")
for word in words {
    print(word)
}
```

## Multiline Strings

- Swift offers convenient ways to work with multiline strings.
- Use triple double-quotes (`"""`) to create multiline string literals.

```swift
let multilineString = """
    This is a multiline
    string in Swift.
    You can have line breaks
    and indentation.
"""
```

## Special Characters in Strings

- Swift allows you to include special characters and escape sequences in strings:

Certainly! Here are examples of special characters and escape sequences in Swift strings:

### Newline character (\n)

```swift
let multilineText = "This is a\nmultiline\nstring."
print(multilineText)
```

```swift
// Output
This is a
multiline
string.
```

### Tab character (\t)

```swift
let indentedText = "This is an\tindented\ttext."
print(indentedText)
```

```swift
// Output
This is an    indented    text.
```

### Double quote character (\")

```swift
let quotedText = "He said, \"Hello!\""
print(quotedText)
```

```swift
// Output
He said, "Hello!"
```

**Single quote character (\'):

```swift
let singleQuotedText = "It's raining outside."
print(singleQuotedText)
```

```swift
// Output
It's raining outside.
```

### Backslash character (\\)

```swift
let path = "C:\\Users\\John\\Documents"
print(path)
```

```swift
// Output
C:\Users\John\Documents
```

These examples demonstrate how to use escape sequences to include special characters in Swift strings.

## Counting Characters in a String

- To count the number of characters in a string, use the `count` property of the string.

```swift
let text = "Swift Strings Example"
let characterCount = text.count
print("The number of characters in the string is: \(characterCount)")
```

```swift
// Output
The number of characters in the string is: 21
```

## Empty Strings

- An empty string is a string with zero characters.
- You can check if a string is empty using the `isEmpty` property.

Here are examples of checking if a string is empty using the `isEmpty` property:

```swift
// Example 1: Checking an empty string
let emptyString = ""
if emptyString.isEmpty {
    print("The string is empty.")
} else {
    print("The string is not empty.")
}

// Example 2: Checking a non-empty string
let nonEmptyString = "Hello, World!"
if nonEmptyString.isEmpty {
    print("The string is empty.")
} else {
    print("The string is not empty.")
}
```

```swift
// Output for Example 1
The string is empty.
```

```swift
// Output for Example 2
The string is not empty.
```

## Unicode and Special Characters

- Swift fully supports Unicode characters and special symbols in strings.

  ```swift
  let heart = "\u{2764}" // Unicode heart symbol
  ```

## Conclusion

- Swift Strings provide a robust set of features for text manipulation.
- Use them efficiently to work with text data in your Swift applications.
- Use Swift Playgrounds and Xcode Playgrounds to explore what you learned.
