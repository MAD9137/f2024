# 🤯 Exercise 6

## The Reverser

Create a function named `reverseWords` that takes a sentence as input and returns the sentence with the words in reverse order.

For example:

```swift
let sentence = "The quick brown fox"
let reversed = reverseWords(sentence)
print(reversed) // Output: "fox brown quick The"
```

::: details Solution

```swift
func reverseWords(_ sentence: String) -> String {
    return sentence.split(separator: " ").reversed().joined(separator: " ")
}

let sentence = "The quick brown fox"
let reversed = reverseWords(sentence)
print(reversed) // prints "fox brown quick The"
```

:::
