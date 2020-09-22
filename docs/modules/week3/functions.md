# Functions

## Basic Function

A function that has no parameters or return type will simply execute the code inside the function everywhere the function name is executed in your code.

```swift
// A BASIC FUNCTION IN SWIFT
// In Swift defining a basic function looks like this

func outputPi(){
    print("3.14159265359");
}

// And this is how you call that function
outputPi()
```

:::tip
  All examples of functions will be followed by an example of how to call the function, like in the example above.
:::

## Function Parameters

Writing functional structure helps speed up development by encapsulating chunks of logic that are repeated throughout your code. A function that has no parameters or return type will simply execute the code inside the function everywhere the function name is called.

```swift
// FUNCTION PARAMETERS
// This is how to define a function that takes a single parameter

func outputInt(myInt: Int){
    print("Integer: \(myInt)");
}

outputInt(myInt: 5)
```

```swift
// A function with 2 parameters

func addInt(firstInt: Int, toSecondInt: Int){
    print("Integer: \(firstInt + toSecondInt)");
}

addInt(firstInt: 10, toSecondInt: 20)
```

```swift
// Writing a function with 3 parameters with labels for the second and third parameters

func addFirstNumerator(firstNumerator: Double, toSecondNumerator secondNumerator: Double, andDivideBy denominator: Double){
    print("Float: \( (firstNumerator + secondNumerator) / denominator)");
}

addFirstNumerator(firstNumerator: 11.1, toSecondNumerator: 13.4, andDivideBy: 3.5)
```

```swift
// OMITTING FUNCTION PARAMETER LABELS
// As seen above, you must write the parameter label for each parameter after the first.
// To define a function that lets you omit parameter labels when calling the function,
// use an underscore as the label

func addTwoDoublesAndDivide(_ firstNumerator: Double, _ secondNumerator: Double, _ denominator: Double){
    print("Double: \( (firstNumerator + secondNumerator) / denominator)");
}

addTwoDoublesAndDivide(1.1, 2.2, 3.3)
```

```swift
// DEFAULT FUNCTION PARAMETERS
// Defining a function with default parameter values

func outputUserName(name: String = "Jon Doe") -> String{
    return ("Hello \(name)");
}

outputUserName()
outputUserName(name: "Jane Doe")
```

```swift
// VERIADIC FUNCTION PARAMETERS
// A variadic parameter lets you pass in a variable number of parameters of a given type
// to your function. You create a variadic parameter like this.

func printName(_ names: String...) {
    for (n) in names {
        print(n, separator: "", terminator: " ")
    }
}

printName("Bob", "Dave", "Sam", "Nash")
```

```swift
// IN-OUT FUNCTION PARAMETERS
// The "inout" modifier can be added to a function's parameter when you want the values
// to be passed by reference.

func resetPosition(_ posX: inout Double, _ posY: inout Double){
    posX = 0.0    posY = 0.0
}

// Make x and y double values that will be passed by reference to the next functions.
var x = 5.5, y = 10.9
print("Start by setting x and y position to: \(x), \(y)")

// To pass the values by reference you add the ampersand character before the variable
// name you are passing in
resetPosition(&x, &y)

// Now the original x and y have been set to 0.0 within the function
print("resetPosition has set the position to: \(x), \(y)")
```

```swift
/*
 PASSING A FUNCTION INTO A FUNTION AS A PARAMETER

 Below we create a parameter in our restart function called resetterFunc that will have
 the resetPosition function passed in.  It is a function type, and must be declared with
 the same input parameters (inout Double, inout Double) and return type which is empty in
 this case ->()
 */
func restart(resetterFunc: (inout Double, inout Double)->(), positionX: inout Double, positionY: inout Double){    if positionX != 0.0 || positionY != 0.0 {
    resetterFunc(&positionX, &positionY)
    }
}

// Set x and y to test values
x = 9.9; y = 4.5
print("Set test position to: \(x), \(y)")

// Pass function resetPosition, along with the values by reference to the function like this
restart(resetterFunc: resetPosition, positionX: &x, positionY: &y )
print("restart set the position to: \(x), \(y)")

```

## Function Return Values

A function can return a value at the end of it execution to pass data to the code that called it.  The different options for passing data out of a function are outlined below.

```swift
// FUNCTION RETURN VALUES
// A function with 2 parameters and a return value
func addInt(_ firstInt: Int, _ secondInt: Int) -> Int{
    return firstInt + secondInt
}

let result = addInt(10, 20)
```

```swift
// USING A FUNCTION TYPE
// Using a "function type" to create a copy of the function above, and use it
let addTwoIntsObj: (Int, Int) -> Int = addInt
addTwoIntsObj(7, 9)

// Even when creating a function type for the most basic of functions requires an
// empty parameter, and return type to be declared

let printPi: () -> () = outputPiprintPi()
```

```swift
// RETURNING A FUNCTION TYPE OUT OF A FUNCTION
// The return value after the initial -> must be formatted with the same
// input parameters (inout Double, inout Double) and return type,
// which is empty in this case ->()

func getResetterFunction() -> (inout Double, inout Double) -> (){
    return resetPosition
}

// Make x and y double values that will be passed by reference to the function type.
var x = 5.5, y = 10.9
print("Start by setting x and y position to: \(x), \(y)")

// Set a new var to the function returned from our function
var myResetterFunc = getResetterFunction()
// Pass the values by reference to the returned function type like this
myResetterFunc(&x, &y)
print("The getResetterFunction is used to set the x and y back to: \(x), \(y) with the functionality returned")
```

```swift
// RETURNING A TOUPLE FROM A FUNCTION
// Define the return touple after the -> with the data types you want

func getMidPoint() -> (xOutput: Double, yOutput: Double) {
    return (10.0, 10.0)
}
var midPoint = getMidPoint()

// You can access the tuple results numerically
midPoint.0 += 1.0midPoint.1 -= 1.0

// And you can access the values by the return value labels
x = midPoint.xOutput
y = midPoint.yOutput
```

## Closures

Closures are blocks of code that can be written inline, or stored as a variable.  You will see some functions have closures as a parameter, requiring you to pass it a block of functional code, that you can write directly in the function call, or define a variable equal to a code closure that can be passed into the closure parameter of the function.

The following videos show examples of creating and using functions, closures, and aliasing:

[Swift 5 Essential Training - Basic Functions <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/basic-functions?u=2199673)

[Swift 5 Essential Training - Complex Functions <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/complex-functions?u=2199673)

[Swift 5 Essential Training - Understanding Closures <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/understanding-closures?u=2199673)

[Swift 5 Essential Training - Type Aliasing <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/type-aliasing?u=2199673)

[Swift Fundamentals - Creating Functions <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=b8915e3c-4847-4fcf-937b-b6e13ba8755f)

[Swift Fundamentals - Making Sense of Closures <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=9ee3067f-5457-4adc-a207-8df346115701)

[Back to Week 3](./index.md#during-class)