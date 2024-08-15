# 🤯 Exercise 10

## The Mapper

Create a function named `capitalizeWords` that takes an array of strings and a closure as inputs. The closure should define how each string in the array is transformed. The function should return a new array with the transformed strings.

For example:

```swift
let words = ["swift", "programming", "language"]
let capitalized = capitalizeWords(words) { $0.capitalized }
print(capitalized) // Output: ["Swift", "Programming", "Language"]
```

::: details Solution

```swift
func capitalizeWords(_ array: [String], transform: (String) -> String) -> [String] {
    return array.map(transform)
}

let words = ["swift", "programming", "language"]
let capitalized = capitalizeWords(words) { $0.capitalized }
print(capitalized) // prints ["Swift", "Programming", "Language"]

let uppercased = capitalizeWords(words) { $0.uppercased() }
print(uppercased) // prints ["SWIFT", "PROGRAMMING", "LANGUAGE"]
```

:::
