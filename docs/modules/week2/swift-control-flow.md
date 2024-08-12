# 🧠 Swift control flow

Loops

## For Loop

Use the for-in loop to iterate over a sequence, such as items in an array, ranges of numbers, or characters in a string.

```swift
let cars = ["F-Type","Mustang", "Corvette", "Corolla"] 
for car in cars {
    print("Nice \(car)")
}
```

```swift
for index in 1...10 {
    print("\(index)")
}
```

As we know ranges in Swift only increment/step by one.To change this behavior we can use the stride functions provided by Swift:

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

// Use Stride to count in reverse:
for number in stride(from: 100, to: 0, by: -2){
    print(number) // stops at 2
}
```

## While Loop

A while starts first by evaluating a condition. If the condition is true, the statements inside the curly braces are executed until the condition becomes false.

```swift
var chargeCapacity = 100

while chargeCapacity >=10  {
    print(chargeCapacity)
    chargeCapacity -= 1
}
```

## Repeat While

A variation on the while loop, the repeat-while executes a statement first then evaluates the condition to determine if the loop should continue.

```swift
var count = 0

repeat {
    count += 1
    print(count)
} while count < 20
```

## Conditional Statements

### If

```swift
let pensionEligibleAge = 65
let myAge = 25

if myAge >= pensionEligibleAge {
    print("You qualify for a pension")
} else {
    print("You are not old enough to qualify for a pension" )
}
```

### Switch

A switch statement considers a value and compares it against several possible matching patterns. It then executes an appropriate block of code, based on the first pattern that matches successfully. A switch statement provides an alternative to the if statement for responding to multiple potential states.

- Parentheses are not required or recommended for the condition
- Must be exhaustive (all possibilities covered) - so usually requires a default clause
- default: must always be at the end of the case statements
- Each case must have at least one line of actual code
- Fall through is allowed using the fallthrough keyword
- No break statement is needed or used except when you don't want any actual execution (still required to add a line of code)
- Case statements with multiple conditions are allowed (separated by commas)
- You can use ranges in case statements

  - Example:
  
    ```swift
    let day = "Monday"
    switch day {
    case "Monday":
        print("It's the start of the week.")
    case "Friday":
        print("The weekend is almost here!")
    default:
        print("It's another day.")
    }
    ```

- **Matching Values:**
  - You can match a variable or constant against specific values.
  
    ```swift
    let grade = "A"
    switch grade {
    case "A", "A+":
        print("Excellent!")
    case "B":
        print("Good.")
    default:
        print("Needs improvement.")
    }
    ```

- **Range Matching:**
  - You can match values within a range.

    ```swift
    let score = 85
    switch score {
    case 0..<60:
        print("Fail")
    case 60..<80:
        print("Pass")
    case 80...100:
        print("Excellent!")
    default:
        print("Invalid score")
    }
    ```

- **Tuples:**
  - You can match multiple values using tuples.

    ```swift
    let point = (2, 3)
    switch point {
    case (0, 0):
        print("Origin")
    case (_, 0):
        print("On X-axis")
    case (0, _):
        print("On Y-axis")
    default:
        print("Somewhere else")
    }
    ```

- **Value Binding:**
  - You can bind matched values to constants or variables.

    ```swift
    let coordinates = (3, 4)
    switch coordinates {
    case (let x, let y) where x == y:
        print("Point is on the line x=y")
    case (let x, let y):
        print("Point is at (\(x), \(y))")
    }
    ```

- **Pattern Matching**:
  - You can use more complex patterns for matching.

    ```swift
    let data: Any = 42
    switch data {
    case is String:
        print("It's a string")
    case let value as Int:
        print("It's an integer: \(value)")
    default:
        print("Unknown type")
    }
    ```

- **`where` Clauses:**
  - You can add conditions to your cases using `where`.

    ```swift
    let temperature = 28
    switch temperature {
    case let t where t < 0:
        print("Freezing")
    case let t where t >= 0 && t < 20:
        print("Cold")
    default:
        print("Warm")
    }
    ```

- **Associated Values:**
  - In Swift, enums can have associated values that provide additional data.
  - `switch` can be used to extract and work with these associated values.

    ```swift
    enum Shape {
        case circle(radius: Double)
        case rectangle(width: Double, height: Double)
    }
    
    let shape = Shape.circle(radius: 5.0)
    
    switch shape {
    case .circle(let radius):
        let area = Double.pi * pow(radius, 2)
        print("Circle with radius \(radius) has area \(area)")
    case .rectangle(let width, let height):
        let area = width * height
        print("Rectangle with dimensions \(width) x \(height) has area \(area)")
    }
    ```
  
- **Matching Enum Cases:**
  - Enums can have multiple cases with associated values, and `switch` allows precise matching.
 
    ```swift
    enum Barcode {
        case upc(Int, Int, Int, Int)
        case qrCode(String)
    }
    
    let productBarcode = Barcode.upc(8, 85909, 51226, 3)
    
    switch productBarcode {
    case .upc(let numberSystem, let manufacturer, let product, let check):
        print("UPC: \(numberSystem)-\(manufacturer)-\(product)-\(check)")
    case .qrCode(let code):
        print("QR code: \(code)")
    }
    ```
  
- **Advanced Matching:**
  - You can use `if case` to further refine your matching with associated values.

    ```swift
    enum Measurement {
        case distance(Double)
        case temperature(Double)
    }
    
    let measurement = Measurement.temperature(25.0)
    
    if case .temperature(let temp) = measurement, temp > 30.0 {
        print("It's a hot day with \(temp)°C")
    } else if case .temperature(let temp) = measurement, temp < 10.0 {
        print("It's a cold day with \(temp)°C")
    } else {
        print("It's a moderate day with \(measurement)°C")
    }
    ```
