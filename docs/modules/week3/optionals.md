# 🧠 Optionals

Optionals are used in situations where a value may be absent. An optional type either holds a value or nothing (nil) however, accessing an optional with a nil value will cause an error so special handling is required to safely access an optional's payload. In Swift, this has the advantage of allowing the compiler to detect possible exception errors at compile time, which reduces the occurrence of these errors at run time.

Exception errors commonly occur when trying to access a property or call a function on a variable which is set to nil. Swift prevents property access and method calls on optional constants and variables preventing many Exceptions errors. The following code is allowed because Swift knows that the variable cheese can never be nil:

```swift
var cheese = "Cheddar"
let length = cheese.count // safe as count cannot be nil
let uppercaseCheese = cheese.uppercased() // safe as cheese cannot be nil
print(uppercaseCheese)
````

However the same code fails when using an optional String variable:

```swift
var cheese: String? = "Cheddar"
let length = cheese.count // This produces a compilation Error
let uppercaseCheese = cheese.uppercased() // This produces a compilation Error
print(uppercaseCheese)
````

But the following code blocks will work. Can you spot the differences?

```swift
// Force unwrapping an optional
var cheese: String? = "Cheddar"
let length = cheese!.count 
let uppercaseCheese = cheese!.uppercased() 
print(uppercaseCheese)

// Implicitly unwrapped optional
var cheese: String! = "Cheddar"
let length = cheese.count 
let uppercaseCheese = cheese.uppercased() 
print(uppercaseCheese)
```

The Swift compiler knows, at compile time, which constants and variables can contain nil. This allows Swift to detect and prevent statements that may result in a nil value.

**Considerations:**

- All variables in Swift are non-nil-able by default
- Optionals are declared by appending ? to the type annotation
- If you attempt to assign a nil value to a standard Swift variable the compiler will throw an error

## Declaration

```swift
// Assigning nil to a non-optional 
var cheese = "Cheddar"

// This produces a compilation Error
cheese = nil 
```

To support nil values in constants and variables Swift requires you to declare them as optional (they are allowed to contain nil) when they are created.

```swift
// an optional String
var nilableCheese: String? = "Cheddar" 

// by default will initialize with a nil value
var nilableCheese: String?

// this is allowed because nilableCheese is 
// an optional which is allowed to contain nil
nilableCheese = nil
```

Note: An optional can be nil or have a legal value for its type

## Safely Accessing an Optional

An optional needs to be unwrapped to safely use its value. Generally, this means employing a method to first check for the presence of a payload and if so, accessing its value.

### Forced Unwrapping

Use an if statement to check if an optional contains a value and access the value using forced unwrapping by appending ! to the optional name.

```swift
// create an optional Int
var optionalInt: Int?

// Forced unwrapping: up to the developer to make sure the value is not nil
// standard long form nil check, never force unwrap an optional that’s nil
if optionalInt != nil {
    // the ! allows us to pull out the value in an optional type
    var unwrappedInt = optionalInt!
}
```

### Optional Binding

A less verbose way to unwrap the value in an optional. Optional binding provides a method to assign the optional's value to a temporary constant or variable within an if or while statement.

```swift
// create an optional Int
var optionalInt: Int? 

// returns true if not nil then creates the unwrappedInt constant as a non-optional
if let unwrappedInt = optionalInt { 
    print(unwrappedInt)
} else {
    print("No value")
}
```

When the condition is true (the optional is not nil) its value is assigned to the constant unwrappedInt. This constant is only available for use within the conditional body, this is its scope, it does not exist outside the conditional body. When the condition is false (the optional is nil) the conditional body is not executed.

This limited scope allows for more concise naming:

```swift
let name:String? = "Pat"

if let name = name { // scoping allows us to use the same name
    print(name)
}
 
// multiple if let statements are allowed:
if  let month = month,
    let day = day,
    let year = year { 
     print("Happy Birthday!") // only executes if there are no nil values
}
```

If the original optional is no longer needed after accessing its value, you can use the same name for the new constant/variable.

```swift
// Declare optional
let number: Int? = 420

// reuse optional name in optional binding
if let number = number {
    print("My number is: \(number)")
}

// or shorten even more by removing duplicate name
// this may be only available in 5.7
if let number {
    print("My number is: \(number)")
}
```

### Implicitly Unwrapped Optionals

Often, the certainty that an optional will always have a value is evident at declaration. Having to force un-wrap or use optional binding each time an optional is accessed can be time consuming so implicitly unwrapping an optional removes the requirement to check for nil. This can be accomplished by replacing ? with ! when declaring the optional.

Implicitly unwrapped optionals are normal optionals but can be used like non-optional values.

```swift
let possibleNumber: Int! = 420

// no need to force unwrap or use optional binding
var newNumber = possibleNumber
```

### Guard

Similar to an if-else statement, guard statements control execution flow by testing if a condition is true or false. Unlike an if statement though, guard always has an else clause where the code it contains is executed if the condition isn't true and control flow is transferred to the code containing the guard statement. When true, execution continues after the closing brace of the guard statement. You can use guard let to unwrap optionals at the start of a function, and return from the function if the optional is nil:

```swift
// inside a function body
func checkName(userName: String?) 
{
    guard let name = userName else {
         print("name is nil")

        // returns if userName is nil
        return 
    }

    print("name was not nil") // the constant name is scoped for this function
}
```

### Nil-coalescing Operator

Another method for checking optionals is to use the nil-coalescing operator ??. it will check whether an optional contains a value or not. If there is a value, it unwraps and returns it. Otherwise it returns a default value you provide in code. For example:

```swift
let middleName: String?  
let defaultName = "Raya"
let returnedName = middleName ?? defaultName
print(returnedName)
```

## See Also

- [Early Exit — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID525)
- [Optionals — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/TheBasics.html#ID330)
- [Nil-Coalescing Operator — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/BasicOperators.html#ID72)
- [Swift Fundamentals - Optionals - An Introduction Pluralsight](https://app.pluralsight.com/course-player?clipId=987e8f42-09a6-4ad0-b313-93f26ab082f2)
- [Swift Fundamentals - Unwrapping Your Optionals Pluralsight](https://app.pluralsight.com/course-player?clipId=5ca834db-075b-4290-9f87-1610b838df6f)