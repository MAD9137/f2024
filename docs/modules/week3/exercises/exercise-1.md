# 🤯 Exercise 1

## The Finder

Create a function named `findFirst` that takes an array of integers and a closure as inputs. The closure should define a condition to find the first element that satisfies it. The function should return the first element that meets the condition, or `nil` if no such element exists.

For example:

```swift
let numbers = [1, 3, 7, 9, 2, 8]
let firstEven = findFirst(numbers) { $0 % 2 == 0 }
print(firstEven) // Output: 2
```

::: details Solution

```swift
func findFirst(_ array: [Int], condition: (Int) -> Bool) -> Int? {
    return array.first(where: condition)
}

let numbers = [1, 3, 7, 9, 2, 8]
let firstEven = findFirst(numbers) { $0 % 2 == 0 }
print(firstEven) // prints 2

let firstGreaterThanFive = findFirst(numbers) { $0 > 5 }
print(firstGreaterThanFive) // prints 7

let firstNegative = findFirst(numbers) { $0 < 0 }
print(firstNegative) // prints nil
```

:::
