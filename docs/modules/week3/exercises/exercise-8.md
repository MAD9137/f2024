# 🤯 Exercise 8

## The Combiner

Create a function named `combineArrays` that takes two arrays of integers and a closure as inputs. The closure should define how the corresponding elements of the arrays are combined. The function should return an array with the combined elements.

For example:

```swift
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combined = combineArrays(array1, array2) { $0 + $1 }
print(combined) // Output: [5, 7, 9]
```

::: details Solution

```swift
func combineArrays(_ array1: [Int], _ array2: [Int], combine: (Int, Int) -> Int) -> [Int] {
    return zip(array1, array2).map(combine)
}

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combined = combineArrays(array1, array2) { $0 + $1 }
print(combined) // prints [5, 7, 9]

let multiplied = combineArrays(array1, array2) { $0 * $1 }
print(multiplied) // prints [4, 10, 18]
```

:::
