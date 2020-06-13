# Structures, Enumerations and Protocols

## Structs

**Structures** ( **structs** ) are similar to classes in Swift, but are a value type, where as classes are reference types.  Value types like structs are always passed by copying the value.  This means the value of the struct is duplicated if you pass it into a function, or assign it to a variable or constant.

Anything done to the copy of the struct when passed into a function will have no effect on the original struct outside the function, protecting it.  As seen in a previous lesson, a class value passed into a function is passed by reference, and has the original values changed by the logic of that function.

By design, a struct does not have a deinit method, and can not be set to nil.  They can not inherit from other structs, but can inherit protocols.  Structs have initializers automatically created to define all properties upon creation, and don't require you to make custom init methods.  If you create a custom init method for a struct it will get rid of the default init and replace it.

The following shows a simple example of creating a struct.

```swift
// A basic struct definition
struct Location {
    let coords: (north: Double?, west: Double?)
    var description: String

    // Uncomment to use custom struct init
    /*
     init (north: Double, west: Double, description: String) {
     self.coords.north = north
     self.coords.west = west
     self.description = description
     }
     */
}

// This struct initializer was created automatically from the tuple and string
// properties defined in the struct
var myLocation: Location = Location(coords: (60.5, 121.3), description:"Time to fish?")

// Uncomment init method above to use this custom constructor
//var myLocation: Location = Location(north:60.5, west:121.3, description:"A cool location")

print("Struct showing '\(myLocation.description)' at 'north:\(myLocation.coords.north!) , west:\(myLocation.coords.west!)' ")
```

The following video shows more information of creating and using structures:

[Swift 5 Essential Training - Basic Structs <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-structs?u=2199673)

[Swift Fundamentals - Defining and Using Structs <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=d3aaa70d-81e8-413a-8d6c-b0562a79684a)

## Enumerators

**Enumerators**, also called **enums** are a special kind of data type. They let you define a group of labels that are all related, and can be used as a type in your code logic for increasing the clarity and readability of your code.  When making enumerators you can use any basic type like characters, strings, integers, floating point, and double floating point values.  

You can also use complex types, like computed instance properties, computed type properties, stored type properties, and type methods as well as initializers, subscripts, and can inherit protocols.

```swift
// Basic definition of an emun
enum AccountStatus {
    case Offline
    case Online
    case Away
    case Invisible
    case DoNotDisturb
}

// Create an instance of the enum and set it explicitly
var userCoding: AccountStatus = AccountStatus.DoNotDisturb

// Create a second instance using the shorthand version
var useratLunch: AccountStatus = .Away

// Define and create a raw value enumeration
enum FileTypes: Int { case GIF, JPG, PNG, BMP }

// By default will create raw values 0 for GIF, 1 for JPG, etc.}
var myUpload = FileTypes(rawValue: 3)

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

The next videos show you how to use Enumeration in Swift:

[Swift 5 Essential Training - Swift Enumerations <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/swift-enumerations?u=2199673)

[Swift Fundamentals - Using Enumerations <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=c56e267b-5cbc-4571-bd5c-2b53bb14fa4e)

## Protocols

Classes and structs can inherit from one or more protocols.  A **protocol** is a list of requirements that must be fulfilled by that class or struct.  If you have a class inherit from a protocol that defines the requirement to have a string called userName then that class *must* manually define its own userName in the exact same way.

If the protocol requires an init, or function with a specific shape, the class that wants to inherit from that protocol *must* define the same parameters and return values for the function with that same name.

The following shows an example of making two example protocols and a class that inherits from them, fulfilling each requirement.

```swift
// The following is an example of how to define the requirements of a protocol that must
//  then be redefined by any class or struct that inherits from this protocol.
protocol ProtocolDefiner {
    var myPropertyDefinition: Int {get set} // Protocol definition for a property

    init(id: Int) // Protocol definition for an initializer

    func myFunctionDefinition(newId: Int) -> Int // Protocol definition for an initializer

}

// A simple example of a second protocol with a single property defined
protocol NameableProtocol {
    var myName: String {get}
}

// The following is an example of a class that inherits from both the protocols above 
// fulfilling the requirements of both.
class MyNewClass: ProtocolDefiner, NameableProtocol {
    var myPropertyDefinition: Int
    var myName: String

    // When defining an init method that a protocol required, the key word 'required'
    // must be used before it
    required init(id: Int) {
        // Neither properties were optional so they both need default values
        self.myPropertyDefinition = id
        self.myName = ""
    }

    // The function must follow the same structure for parameters and return value,
    // but can contain any code you want within
    func myFunctionDefinition(newId: Int) -> Int {
        let oldNumber = self.myPropertyDefinition
        self.myPropertyDefinition = newId
        return oldNumber
    }
}

// Creates an instance of the class with the prescribed init method from the first protocol.
var myProtocolClass: MyNewClass = MyNewClass(id: 5)

// Changes the property defined in the second protocol
myProtocolClass.myName = "Jon"

// Call the function from the first protocol, printing out the return value
print("User '\(myProtocolClass.myName)' is setting a new id value. Old value was \(myProtocolClass.myFunctionDefinition(newId: 35))")
```

This video shows example of using protocols:

[Swift 5 Essential Training - Introducing Protocols <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/introducing-protocols?u=2199673)

[Swift Fundamentals - Introducing Protocols <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=095103af-48f6-455e-92e3-161c462b9bb5)
