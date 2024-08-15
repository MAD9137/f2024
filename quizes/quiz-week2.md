# Quiz Week 2

## Question 1

What Swift method allows you to include variables or expressions inside a string literal?

- A) `stringInterpolation()`
- B) `insert()`
- C) `append()`
- D) `replacingOccurrences()`
- E) `\(expression)`

**Answer:** E

## Question 2

Which property of a Swift string checks if the string is empty?

- A) `isEmpty`
- B) `count`
- C) `contains(_:)`
- D) `hasPrefix(_:)`
- E) `hasSuffix(_:)`

**Answer:** A

## Question 3

How can you access a range of characters in a Swift string?

- A) Using `startIndex` and `endIndex` directly
- B) Using `text[startIndex..<endIndex]`
- C) Using `text.prefix()` and `text.suffix()`
- D) Using `text.substring(from: to:)`
- E) Using `text.split(separator:)`

**Answer:** B

## Question 4

What does the underscore (`_`) represent when used in a switch statement in Swift?

- A) A placeholder for ignored values
- B) A wildcard pattern that matches any value not explicitly matched by previous cases
- C) An external parameter name omission
- D) A tuple element placeholder
- E) A closure parameter placeholder

**Answer:** B

## Question 5

Which method is used to convert an array to a set, removing duplicate elements in Swift?

- A) `Set(array)`
- B) `Array(set)`
- C) `dictionary.keys`
- D) `dictionary.values`
- E) `Array(dictionary)`

**Answer:** A

## Question 6

What is the purpose of the `guard` statement in Swift?

- A) To execute code if a condition is true
- B) To handle multiple conditional paths
- C) To exit early from a block of code if a condition is false
- D) To iterate over a collection
- E) To sort elements in a collection

**Answer:** C

## Question 7

In a Swift `switch` statement, what is true about the absence of implicit fallthrough?

- A) The control flow exits the switch statement after executing a case's code.
- B) The control flow continues executing subsequent cases unless explicitly stopped.
- C) Each case must end with a `return` statement.
- D) The default case must be present.
- E) The switch statement can only handle integer values.

**Answer:** A

## Question 8

What is the output of the following code?
```swift
let scores = [85, 90, 75, 92, 88]
for score in scores where score > 80 {
    print("High score: \(score)")
}
```

- A) High score: 75
- B) High score: 85
- C) High score: 90
- D) High score: 75, High score: 85, High score: 90, High score: 92, High score: 88
- E) High score: 85, High score: 90, High score: 92, High score: 88

**Answer:** E

## Question 9

What does the `enumerated()` method do when used in a `for` loop?

- A) It returns a sequence of elements in a collection.
- B) It returns a sequence of pairs containing an index and the corresponding element.
- C) It filters elements based on a condition.
- D) It sorts the elements of the collection.
- E) It flattens a nested array.

**Answer:** B

## Question 10

Which higher-order function can be used to flatten a collection of collections and then transform the elements?

- A) map
- B) filter
- C) reduce
- D) flatMap
- E) compactMap

**Answer:** D
