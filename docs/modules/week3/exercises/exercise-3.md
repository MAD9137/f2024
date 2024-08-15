# 🤯 Exercise 3

## The Filterer

Create a function named `filterStrings` that takes an array of strings and a closure as inputs. The closure should define a condition for filtering the strings (e.g., filtering strings with a certain prefix). The function should return an array of strings that satisfy the closure’s condition.

For example:

```swift
let strings = ["apple", "banana", "cherry", "apricot"]
let filtered = filterStrings(strings) { $0.hasPrefix("a") }
print(filtered) // Output: ["apple", "apricot"]
```

::: details Solution

```swift
func filterStrings(_ array: [String], condition: (String) -> Bool) -> [String] {
    return array.filter(condition)
}

let strings = ["apple", "banana", "cherry", "apricot"]
let filtered = filterStrings(strings) { $0.hasPrefix("a") }
print(filtered) // prints ["apple", "apricot"]

let lengthFiltered = filterStrings(strings) { $0.count > 5 }
print(lengthFiltered) // prints ["banana", "cherry"]
```

:::
