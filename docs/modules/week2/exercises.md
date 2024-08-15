# 🤯 Exercises

## Exercise 1

Write a Swift Playground that prints the numbers from 1 to 100

- For numbers divisible by 3, print “Fizz”
- For numbers divisible by 5, print “Buzz”
- For numbers divisible by both 3 and 5, print “FizzBuzz”

::: details Solution 1

```swift
for number in 1...100 {
    if number % 3 == 0 && number % 5 == 0 {
        print("FizzBuzz")
    } else if number % 3 == 0 {
        print("Fizz")
    } else if number % 5 == 0 {
        print("Buzz")
    } else {
        print(number)
    }
}
```

:::

::: details Solution 2

```swift
for number in 1...100 {
    var output = ""
    
    let conditions: [Int: String] = [
        3: "Fizz",
        5: "Buzz"
    ]
    
    for (divisor, result) in conditions {
        if number % divisor == 0 {
            output += result
        }
    }
    
    if output.isEmpty {
        output = "\(number)"
    }
    
    print(output)
}
```

:::

::: details Solution 3

```swift
for number in 1...100 {
    switch (number % 3 == 0, number % 5 == 0) {
    case (true, false):
        print("Fizz")
    case (false, true):
        print("Buzz")
    case (true, true):
        print("FizzBuzz")
    default:
        print(number)
    }
}
```

:::

## Exercise 2

Given two arrays of any comparable type (e.g., Int, String) print an array containing the common elements between them without duplicates.

::: details Solution

```swift
import UIKit

let array1 = [1,2,2,2,3,4,4,5]
let array2 = [1,1,2,3,21,31,41,41,5]

let set1 = Set(array1)
let set2 = Set(array2)

let commonElements = set1.intersection(set2)

print(Array(commonElements))

```

```swift
// Output
[1, 2, 3, 5]
```

:::

## Exercise 3

Given a string, create a dictionary where the keys are unique words in the string, and the values are the number of times each word appears.
So, for example, if the string is "This is a simple Swift example. Swift is fun!" your resulting array should be 

`["This": 1, "is": 2, "a": 1, "simple": 1, "Swift": 2, "example.": 1, "fun!": 1]`

::: details Solution 1

```swift
import UIKit

let myString = "This is a simple Swift example. Swift is fun!"
var wordFrequency = [String: Int]()
let words = myString.split(separator: " ")

for word in words {
  let cleanedWord = String(word)
  wordFrequency[cleanedWord, default: 0] += 1
}
print(wordFrequency)

```

:::

::: details Solution 2

```swift
import UIKit

let myString = "This is a mean simple Swift example. A Swift example is that fun! Simple as this, I mean that!"

let allowedCharacterSet = CharacterSet(charactersIn: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ")
let filteredString = myString.unicodeScalars.filter { allowedCharacterSet.contains($0) }
let myNewString = String(filteredString)

var wordFrequency = [String: Int]()
let words = myNewString.split(separator: " ")

for word in words {
  let cleanedWord = String(word).lowercased()
  wordFrequency[cleanedWord, default: 0] += 1
}
print(wordFrequency)

```

:::

## Exercise 4

Given array of integers, filter out even numbers, and squares each remaining number. Print an array with the squared results.
So, for example if your array is `[1, 2, 3, 4, 5, 6]` your resulting array will be `[1, 9, 25]`

::: details Solution 1

```swift
import UIKit

let numbers = [1, 2, 3, 4, 5, 6]

let filteredNumbers = numbers.filter { number in
  number % 2 != 0
}

let squaredNumbers = filteredNumbers.map { number in
  number * number
}

print(squaredNumbers)
```

:::

::: details Solution 2

```swift
import UIKit

print([1, 2, 3, 4, 5, 6]
  .filter { $0 % 2 != 0 }
  .map { $0 * $0 })
```

:::

## Exercise 5

Write a Swift function that takes an integer as input and prints whether the number is positive, negative, or zero using an `if-else` statement.

::: details Solution

```swift
func checkNumber(_ number: Int) {
    if number > 0 {
        print("Positive")
    } else if number < 0 {
        print("Negative")
    } else {
        print("Zero")
    }
}

checkNumber(10)  // Output: Positive
checkNumber(-5)  // Output: Negative
checkNumber(0)   // Output: Zero
```

:::

## Exercise 6

Create a Swift function that uses a `guard` statement to ensure a given string is not empty before printing it. If the string is empty, print "String is empty" and exit the function.

::: details Solution

```swift
func printNonEmptyString(_ str: String) {
    guard !str.isEmpty else {
        print("String is empty")
        return
    }
    print(str)
}

printNonEmptyString("Hello") // Output: Hello
printNonEmptyString("")      // Output: String is empty
```

:::

## Exercise 7

Write a Swift `switch` statement that takes an integer and prints which quarter of the year it falls into. For example, 1 should print "Q1", 5 should print "Q2", etc.

::: details Solution

```swift
func quarterOfYear(month: Int) {
    switch month {
    case 1...3:
        print("Q1")
    case 4...6:
        print("Q2")
    case 7...9:
        print("Q3")
    case 10...12:
        print("Q4")
    default:
        print("Invalid month")
    }
}

quarterOfYear(month: 2)  // Output: Q1
quarterOfYear(month: 7)  // Output: Q3
quarterOfYear(month: 11) // Output: Q4
```

:::

## Exercise 8

Write a Swift `for` loop that iterates through a dictionary of names and ages, and prints a message for each person indicating if they are an adult (18 or older) or a minor.

::: details Solution

```swift
let people = ["Alice": 30, "Bob": 17, "Charlie": 20]

for (name, age) in people {
    if age >= 18 {
        print("\(name) is an adult.")
    } else {
        print("\(name) is a minor.")
    }
}

```

:::

## Exercise 9

Create a Swift `while` loop that prints the Fibonacci sequence up to a specified limit. Use `while` to continue printing until the last number is greater than or equal to the limit.

::: details Solution

```swift
func printFibonacci(upTo limit: Int) {
    var a = 0
    var b = 1
    
    while a <= limit {
        print(a, terminator: " ")
        let next = a + b
        a = b
        b = next
    }
}

printFibonacci(upTo: 10) // Output: 0 1 1 2 3 5 8
```

:::
