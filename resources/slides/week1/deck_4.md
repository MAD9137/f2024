---
marp: true
theme: default
class:
  - invert
---

# Swift Extensions

- Add new functionality to existing types
- Used for classes, structs, enums, or protocols
- No need to modify original code

---

# Key Concepts

1. **Adding Methods**
2. **Adding Computed Properties**
3. **Protocol Conformance**
4. **Adding Initializers**

Note: Extensions cannot add stored properties or override existing behavior.

---

# Example: Adding a Method to `String`

```swift
extension String {
    func capitalizeFirst() -> String {
        return prefix(1).uppercased() + dropFirst()
    }
}
```

- Adds method to capitalize the first letter of a string.

Note: Helps in extending existing types without subclassing.

---

# Example: Adding a Computed Property

```swift
extension String {
    var wordCount: Int {
        return self.split(separator: " ").count
    }
}
```

- Computes the number of words in a string.

Note: Computed properties provide derived values without storing them.

---

# Example: Adding Method to `Bool`

```swift
extension Bool {
    mutating func toggle() {
        self = !self
    }
}
```

- Method to invert a boolean value.

Note: `mutating` keyword allows the method to modify `self` in structs and enums.

---

# Protocol Conformance with Extensions

```swift
protocol Describable {
    func describe() -> String
}

extension Bool: Describable {
    func describe() -> String {
        return self ? "True" : "False"
    }
}
```

- Adds protocol conformance to `Bool`.
- Implements `describe()` method.

---

# Key Restrictions

1. **No Stored Properties:** Extensions cannot add stored properties.
2. **No Overrides:** Existing methods, properties, or behaviors cannot be overridden in extensions.

---

# Practical Applications

- **Readability:** Group related functionalities.
- **Protocol Conformance:** Add conformance to existing types without changing the original code.

```swift
extension String: CustomStringConvertible {
    var description: String {
        return "String: \(self)"
    }
}
```
