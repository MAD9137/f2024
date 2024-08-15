# 🤯 Exercise 2

## The Calculator

Create a function named `calculator` that takes two integers and a string representing an operation ("add", "subtract", "multiply", or "divide") as inputs. The function should perform the specified operation on the integers and return the result.

For example:

```swift
let result = calculator(10, 5, operation: "add")
print(result) // Output: 15
```

::: details Solution

```swift
func calculator(_ a: Int, _ b: Int, operation: String) -> Int? {
    switch operation {
    case "add":
        return a + b
    case "subtract":
        return a - b
    case "multiply":
        return a * b
    case "divide":
        return b != 0 ? a / b : nil
    default:
        return nil
    }
}

print(calculator(10, 5, operation: "add")) // prints 15
print(calculator(10, 5, operation: "divide")) // prints 2
print(calculator(10, 0, operation: "divide")) // prints nil
```

:::
