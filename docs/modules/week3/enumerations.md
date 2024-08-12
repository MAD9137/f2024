# 🧠 Enumerations

Enumerators, also called enums are a special kind of data type. They let you define a group of labels that are all related, and can be used as a type in your code logic for increasing the clarity and readability of your code. When making enumerators you can use any basic type like characters, strings, integers, floating point, and double floating point values.

You can also use complex types, like computed instance properties, computed type properties, stored type properties, and type methods as well as initializers, subscripts, and can inherit protocols.

## Definition

```swift
// Basic definition of an enum
enum Presence {
    case Offline
    case Online
    case Away
    case Invisible
    case DoNotDisturb
}

// Multiple cases can be declares on a single line, separated by commas.
enum Presence {
    case Offline, Online, Away, Invisible, DoNotDisturb
}
```

## Declaration and Usage

```swift
// Create an instance of the enum and set it explicitly
var userStatus: Presence = Presence.Away

// Create an instance using the shorthand version
var userStatus: Presence = .Away

// Create an instance of the enum using inference
// Preferred method
var userStatus = Presence.Away

// Change a value using dot syntax
userStatus = .Online
```

## Raw Values

Raw values allows a developer to explicitly or implicitly assign default values to each case. Raw values can be strings, characters or any of the integer or floating-point data types.

```swift
// Define and create a raw value enumeration
// Will implicitly create raw values 0 for GIF, 1 for JPG, etc.}
enum FileTypes: Int { case GIF, JPG, PNG, BMP }

// Declaration using an initializer will return an optional !!
var myUpload = FileTypes(rawValue: 3)

print(myUpload!)

// Define and create an example of an explicit raw values
enum CoinValue: Float {
    case Penny = 0.01
    case Nickel = 0.05
    case Dime = 0.1
    case Quarter = 0.25
    case Loonie = 1.00
    case Toonie = 2.00
}
// Create an instance of this enum
var totalCost = CoinValue.Toonie

// Explicitly call the raw value of the enum
totalCost.rawValue
```

## See Also

- [Enumerations — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Enumerations.html#)
- [Swift Fundamentals - Using Enumerations Pluralsight](https://app.pluralsight.com/course-player?clipId=c56e267b-5cbc-4571-bd5c-2b53bb14fa4e)