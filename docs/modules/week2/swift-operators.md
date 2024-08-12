# 🧠 Swift operators

An operator is a token/character written in code that is used to indicate an action to be performed on values that precede or follow an operator. Swift supports most of the operators you're already familiar with and a few you're not.

## Assignment Operator

```swift
let b = 42
var a = 3
```

## Arithmetic Operators

```swift
1 + 2       // Addition operator
12 - 9      // Subtraction operator
3 * 3       // Mulitiplication operator
10 / 5      // Division operator
```
:::warning Note
The addition operator + can also be used to concatentate strings.
:::

## Comparison Operators

```swift
2 == 2      // Equal to
2 != 1      // Not equal to
2 > 1       // Greater than
1 < 2       // Less than
1 >= 2      // Greater than or equal to
2 <= 1      // Less than or equal to
```

## Range Operators

There are two range operators in Swift:

The half-open range operator: `..<` which includes the starting value and excludes the final value
The closed range operator: `...` which includes both the starting and final values

```swift
let range = 1..<10 // defines a range containing the values 1 through 9
let range = 1...10 // defines a range containing the values 1 through 10
```

One sided range:

Defines a range that continues as far as possible is one direction

```swift
let range = ..<10 // defines a range containing the values less than 10
let range = 1... // defines a range containing the values 1 and greater
```

Check if a value is contained in a range:

The contains method returns true if the value is contained in the range, else it returns false.

```swift
let range = ..<10 // defines a range containing the values less than 10
print(range.contains(3)) // will print true
print(range.contains(10)) // will print false
```

::: danger Important

- The start of a range must be less than or equal to its end.
- Ranges in swift only increment/step by one.
- Ranges are very useful in loops and switch statements.
:::

## Stride

As we know ranges in Swift only increment/step by one. To change this behavior we can use the stride functions provided by Swift:

```swift
stride(to: ) // inclusive, exclusive

stride(through: ) // inclusive, inclusive
```

Examples:
```swift
for number in stride(from: 0, through: 256, by: 16){
    print(number)
}

for number in stride(from: 1, to: 100, by: 2){
    print(number) // stops at 98
} 
```

Use Stride to count in reverse:

```swift
for number in stride(from: 100, to: 0, by: -2){
    print(number) // stops at 2
}
```

## Logical NOT `!`

```swift
// Logical Not Operator

let hasDriversLicense = false
if !hasDriversLicense {
    print("You cannot drive this car")
}
```

## Logical AND `&&`

```swift
// Logical And Operator

let hasDriversLicense = true
let hasKeys = true

if hasDriversLicense && hasKeys{
    print("Start car")
}
```

## Logical OR `||`

```swift
// Logical Or Operator

let haskeys = false
let keyFobUnlock = true

if hasKeys || keyFobUnlock {
    print("You may get in the car")
}
```

## See Also

- [Swift Fundamentals - Introducing Operators Pluralsight](https://app.pluralsight.com/course-player?clipId=8d583eb8-8b34-4e66-8c58-8808d4fb1d94)
- [Basic Operators — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html)