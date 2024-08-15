# 🤯 Exercise 5

## The Transformer

Create a function named `transform` that takes an array of integers and a closure as inputs. The closure should define a transformation to be applied to each element of the array (e.g., doubling each element). The function should return a new array with the transformed elements.

For example:

```swift
let numbers = [1, 2, 3, 4]
let transformedNumbers = transform(numbers) { $0 * 2 }
print(transformedNumbers) // Output: [2, 4, 6, 8]
```

::: details Solution

```swift
func transform(_ array: [Int], transformation: (Int) -> Int) -> [Int] {
    return array.map(transformation)
}

let numbers = [1, 2, 3, 4]
let transformedNumbers = transform(numbers) { $0 * 2 }
print(transformedNumbers) // prints [2, 4, 6, 8]

let squaredNumbers = transform(numbers) { $0 * $0 }
print(squaredNumbers) // prints [1, 4, 9, 16]
```

:::
