# 🤯 Exercises

## Exercise 1

```swift
import Foundation

let message = "Hello, Swift!"
let times = 3
print(message)
```

**Question:**  

Modify the code so that it prints the message "Hello, Swift!" three times on separate lines. What is the correct code?

::: details Solution

```swift
import Foundation

let message = "Hello, Swift!"
let times = 3
for _ in 1...times {
    print(message)
}
```

:::

## Exercise 2

```swift
var score = 10
score = 20

let highScore = 100
highScore = 200
```

**Question:**  

Identify the error in the code and correct it. What will be the result of running the corrected code?

::: details Solution

The error is that you cannot modify a constant (`highScore`). Correct code:

```swift
var score = 10
score = 20

var highScore = 100
highScore = 200
```

The result will be:

- `score` is 20
- `highScore` is 200

:::

## Exercise 3

```swift
struct Point {
    var x: Int
    var y: Int
}

class Circle {
    var radius: Double
    init(radius: Double) {
        self.radius = radius
    }
}

let point1 = Point(x: 5, y: 10)
var point2 = point1
point2.x = 15

let circle1 = Circle(radius: 10.0)
let circle2 = circle1
circle2.radius = 15.0

print(point1.x, point2.x)
print(circle1.radius, circle2.radius)
```

**Question:**  

What will be the output of this code? Explain why `point1` and `point2` show different results, while `circle1` and `circle2` show the same results.

::: details Solution

The output will be:

```swift
5 15
15 15
```

- `point1` and `point2` are instances of a struct, which is a value type. Changing `point2` does not affect `point1`.
- `circle1` and `circle2` are instances of a class, which is a reference type. Both variables refer to the same instance, so changes to one affect the other.

:::

## Exercise 4

```swift
let binaryValue = 0b1010
let octalValue = 0o12
let hexValue = 0xF

let sum = binaryValue + octalValue + hexValue
```

**Question:**  

What is the value of `sum` after executing this code? Provide an explanation of how each numeric literal contributes to the total.

::: details Solution

- `binaryValue` (0b1010) is 10 in decimal.
- `octalValue` (0o12) is 10 in decimal.
- `hexValue` (0xF) is 15 in decimal.

The sum is `10 + 10 + 15 = 35`.

:::

## Exercise 5


```swift
var number: Int = 50
var decimal = 25.5
```

**Question:**  

Modify the code so that `number` is inferred as a type and `decimal` is explicitly annotated as a type. Then, perform an operation that combines both variables and explain the result.

::: details Solution

Modified code:

```swift
var number = 50 // Type inferred as Int
var decimal: Double = 25.5 // Explicitly annotated as Double

let sum = Double(number) + decimal
```

The result will be:

- `sum` is 75.5. `number` is converted to `Double` to perform the addition with `decimal`.

:::

## Exercise 6

```swift
let range1 = 1...4
let range2 = 2..<5

let intersect = range1.intersection(range2)
```

**Question:**  

What will be the result of `intersect`? Write the correct code to get the intersection of the two ranges and explain the outcome.

::: details Solution

The result of `intersect` will be:

```swift

Optional(2...4)

```

Correct code to get the intersection:

```swift
let range1 = 1...4
let range2 = 2..<5

let set1 = Set(range1)
let set2 = Set(range2)
let intersectionSet = set1.intersection(set2)
print(intersectionSet)
```

`intersect` is a set that represents the overlap between `range1` and `range2`.

:::

## Exercise 7


```swift
var value = 10
value++ // Try to increment
```

**Question:**  

Modify the code to correctly increment the value of `value` and then print it. Explain why the original code would not work in Swift.

::: details Solution

Correct code:

```swift
var value = 10
value += 1
print(value)
```

The original code (`value++`) does not work in Swift because the increment (`++`) and decrement (`--`) operators were removed in Swift 3. You need to use `+= 1` to increment a variable.

:::

## Exercise 8


```swift
func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    return {
        total += incrementAmount
        return total
    }
}

let incrementByTwo = makeIncrementer(incrementAmount: 2)
print(incrementByTwo()) // Prints: ?
print(incrementByTwo()) // Prints: ?
```

**Question:**

What will be the output of the two `print` statements? Explain how the closure captures the `incrementAmount` and `total` values.

::: details Solution

The output will be:

```swift
2
4
```

- The closure captures `incrementAmount` (which is 2) and `total` (which starts at 0 and is incremented each time the closure is called).
- The first call to `incrementByTwo()` adds 2 to `total`, resulting in 2.
- The second call adds another 2, resulting in 4.

:::

## Exercise 9


```swift
let optionalString: String? = "Swift"
let unwrappedString: String = optionalString!

print(unwrappedString.count)
```

**Question:**

What will be the result of the `print` statement? What happens if `optionalString` were `nil` instead of `"Swift"`?

::: details Solution

The result of the `print` statement will be:

```swift
5
```

- The `count` property of the `unwrappedString` (which is `"Swift"`) is 5.
- If `optionalString` were `nil`, force unwrapping (`!`) would cause a runtime crash, because you cannot force unwrap a `nil` optional.

:::

## Exercise 10

```swift
enum Weather {
    case sunny
    case cloudy
    case rainy
    case windy
}

let currentWeather = Weather.cloudy

switch currentWeather {
case .sunny:
    print("It's sunny!")
case .cloudy:
    print("It's cloudy!")
case .rainy:
    print("It's rainy!")
default:
    print("The weather is windy!")
}
```

**Question:**

What will be printed by this code? Modify the `currentWeather` to test all possible cases and describe the output for each case.

::: details Solution

The output will be:

```swift
It's cloudy!
```

- For `Weather.sunny`, it will print `"It's sunny!"`
- For `Weather.cloudy`, it will print `"It's cloudy!"`
- For `Weather.rainy`, it will print `"It's rainy!"`
- For `Weather.windy`, it will print `"The weather is windy!"`

The `default` case is used to handle any cases not explicitly covered by the previous `case` statements, though in this example, it handles the `windy` case.

:::
