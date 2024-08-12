# 😵‍💫 Exercise 9

## Testing Optional Bidings

Create a function called "printFullName" that takes two optional String parameters: "first" and "last". The function should print the full name if both parameters have values, and print an error message if either or both are nil. Use optional binding to achieve this.

For example:

```swift
var firstName: String? = "John"
var lastName: String? = nil

printFullName(first: firstName, last: lastName) // Should print "Error: Missing name components."
printFullName(first: "Alice", last: lastName)   // Should print "Error: Missing last name."
printFullName(first: firstName, last: "Doe")     // Should print "John Doe"
printFullName(first: "Bob", last: "Smith")       // Should print "Bob Smith"
}
```

::: details Solution 1

```swift
func printFullName(first: String?, last: String?) {
    // Use optional binding to check if both "first" and "last" have values
    if let firstName = first, let lastName = last {
        // Both first and last names have values, so print the full name
        print("\(firstName) \(lastName)")
    } else if first == nil && last == nil {
        // Both first and last names are nil, print an error message
        print("Error: Missing name components.")
    } else if first == nil {
        // First name is nil, print an error message
        print("Error: Missing first name.")
    } else {
        // Last name is nil, print an error message
        print("Error: Missing last name.")
    }
}

// Test cases
var firstName: String? = "John"
var lastName: String? = nil

printFullName(first: firstName, last: lastName) // Should print "Error: Missing last name."
printFullName(first: "Alice", last: lastName)   // Should print "Error: Missing last name."
printFullName(first: firstName, last: "Doe")    // Should print "John Doe"
printFullName(first: "Bob", last: "Smith")      // Should print "Bob Smith"

```

:::

::: details Solution 2

```swift
func printFullName(first: String?, last: String?) {
    switch (first, last) {
    case (.some(let firstName), .some(let lastName)):
        // Both first and last names have values, so print the full name
        print("\(firstName) \(lastName)")
    case (.none, .none):
        // Both first and last names are nil, print an error message
        print("Error: Missing name components.")
    case (.none, .some):
        // First name is nil, print an error message
        print("Error: Missing first name.")
    case (.some, .none):
        // Last name is nil, print an error message
        print("Error: Missing last name.")
    }
}

// Test cases
var firstName: String? = "John"
var lastName: String? = nil

printFullName(first: firstName, last: lastName) // Should print "Error: Missing last name."
printFullName(first: "Alice", last: lastName)   // Should print "Error: Missing last name."
printFullName(first: firstName, last: "Doe")    // Should print "John Doe"
printFullName(first: "Bob", last: "Smith")      // Should print "Bob Smith"

```

:::
