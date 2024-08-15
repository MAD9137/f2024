# 🤯 Exercise 4

## The Sorter

Create a function named `customSort` that takes an array of integers and a closure as inputs. The closure should define the sorting criteria (e.g., sorting by even numbers first, then odd numbers). The function should return a sorted array based on the closure’s criteria.

For example:

```swift
let numbers = [3, 8, 2, 7, 5, 6]
let sortedNumbers = customSort(numbers) { $0 % 2 == 0 && $1 % 2 != 0 }
print(sortedNumbers) // Output: [8, 2, 6, 3, 7, 5]
```

::: details Solution

```swift
func customSort(_ array: [Int], criteria: (Int, Int) -> Bool) -> [Int] {
    return array.sorted(by: criteria)
}

let numbers = [3, 8, 2, 7, 5, 6]
let sortedNumbers = customSort(numbers) { $0 % 2 == 0 && $1 % 2 != 0 }
print(sortedNumbers) // prints [8, 2, 6, 3, 7, 5]

let valueSortedNumbers = customSort(numbers) { $0 < $1 }
print(valueSortedNumbers) // prints [2, 3, 5, 6, 7, 8]
```

:::
