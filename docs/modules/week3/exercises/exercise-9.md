# 🤯 Exercise 9

## The Checker

Create a function named `allSatisfy` that takes an array of integers and a closure as inputs. The closure should define a condition that all elements in the array must satisfy. The function should return `true` if all elements satisfy the condition, otherwise `false`.

For example:

```swift
let numbers = [2, 4, 6, 8]
let areAllEven = allSatisfy(numbers) { $0 % 2 == 0 }
print(areAllEven) // Output: true
```

::: details Solution

```swift
func allSatisfy(_ array: [Int], condition: (Int) -> Bool) -> Bool {
    return array.allSatisfy(condition)
}

let numbers = [2, 4, 6, 8]
let areAllEven = allSatisfy(numbers) { $0 % 2 == 0 }
print(areAllEven) // prints true

let hasNegative = allSatisfy(numbers) { $0 > 0 }
print(hasNegative) // prints true
```

:::
