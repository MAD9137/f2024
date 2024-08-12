# 😵‍💫 Exercise 8

## The Anagram Tester

Create a function that receives 2 strings and returns true if one is the anagram of the other.
For example:

```swift
let string1 = "Listen"
let string2 = "Silent"

if yourFunction(string1, string2) {
    print("\(string1) and \(string2) are anagrams.")
} else {
    print("\(string1) and \(string2) are not anagrams.")
}
```

::: details Solution

```swift
func yourFunction(_ str1: String, _ str2: String) -> Bool {
    // Remove spaces and convert both strings to lowercase
    let cleanStr1 = str1.lowercased().replacingOccurrences(of: " ", with: "")
    let cleanStr2 = str2.lowercased().replacingOccurrences(of: " ", with: "")
    
    // Check if the sorted characters of both strings match
    return cleanStr1.sorted() == cleanStr2.sorted()
}

// Example usage:
let string1 = "Listen"
let string2 = "Silent"

if yourFunction(string1, string2) {
    print("\(string1) and \(string2) are anagrams.")
} else {
    print("\(string1) and \(string2) are not anagrams.")
}

```

:::
