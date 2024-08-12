# 🧠 Structures and Classes

Structures are similar to classes in Swift but are a value types, where as classes are reference types. Value types are always passed by copying the value. This means the value of the struct is duplicated if you pass it into a function, or assign it to a variable or constant. Structs like classes are general-purpose building blocks and include the following similarities:

- can contain properties
- can contain methods
- can contain initializers
- can be extended
- can adopt protocols

Classes offer additional capabilities over structs including:

- inheritance
- type casting
- deinitializers
- reference counting

::: tip Tip
Prefer structs over classes as the additional capabilities of classes come at the expense of increased complexity. See [Choosing Between Structures and Classes - Apple Developer](https://developer.apple.com/documentation/swift/choosing-between-structures-and-classes)
:::

## Definition

Classes and structs have a similar definition syntax. Define structs using the `struct` keyword and classes using the `class` keyword followed by the name using UpperCamelCase.

```swift
// Define a struct
struct Person {
    var firstName: String
    var lastName: String
    var middleName: String?
    var address: Address?
}

// Define a class
class Address {
    var street: String
    var city: String
    var postalCode: String
    var province: String
}
```

## Properties

- Two types of properties, stored and computed
- Access properties using dot syntax

```swift
// Declaration
var newMember = Person(firstName: "j", lastName: "j")

// Edit firstName property using dot syntax
newMember.firstName = "Bob"
```

### Stored Properties

In its simplest form, a stored property is a constant or variable that’s stored as part of an instance of a particular class or structure. Stored properties can be either variable stored properties (introduced by the var keyword) or constant stored properties (introduced by the let keyword).

::: tip Note
If you create an instance of a structure and assign that instance to a constant, you can’t modify the instance’s properties, even if they were declared as variable properties. The same isn’t true for classes, which are reference types. If you assign an instance of a reference type to a constant, you can still change that instance’s variable properties.
:::

```swift
class Person {

    // Stored Properties
    var firstName: String
    var lastName: String
    var middleName: String?
}
```

### Computed Properties

In addition to stored properties, classes, structures, and enumerations can define computed properties, which don’t actually store a value. Instead, they provide a getter and an optional setter to retrieve and set other properties and values indirectly.

- you may omit `get` keyword
- `let` is not allowed for computed properties

```swift
class Person() {

    // Stored Properties
    var firstName: String
    var lastName: String
    var middleName: String?

    // Computed property
    var fullName: String {
        get {
            return "\(firstName) \(lastName)"
        }
        set {
            // Likely wouldn't use this
        }
    }

     // without setter
    var fullName: String {
        get {
            return "\(firstName) \(lastName)"
        }
    }

    // distilled to simplest form
    // preferred 
    var fullName: String {
        return "\(firstName) \(lastName)"
    }
}
```

## Methods

Methods are functions that are associated with a particular type. Classes, structures, and enumerations can all define instance methods, which encapsulate specific tasks and functionality for working with an instance of a given type. Classes, structures, and enumerations can also define type methods, which are associated with the type itself. Type methods are similar to class methods in Objective-C.

### Instance Methods

Instance methods are functions that belong to instances of a particular class, structure, or enumeration. They support the functionality of those instances, either by providing ways to access and modify instance properties, or by providing functionality related to the instance’s purpose. Instance methods have exactly the same syntax as functions, as described in Functions.

### Type Methods

You can also define methods that are called on the type itself. These kinds of methods are called type methods. You indicate type methods by writing the static keyword before the method’s func keyword. Classes can use the class keyword instead, to allow subclasses to override the superclass’s implementation of that method.

```swift
class Person {

     // Stored Properties
    var firstName: String
    var lastName: String
    var middleName: String?

    // Instance method the same as a function
    // references instance values note 'self' keyword
    func fullName() -> String {
        return "\(self.firstName) \(self.lastName)"
    }
    
    // Type method indicated by static keyword
    static func typeMethod() {
        print("hello, this is an instance method")
    }
    
    init(firstName: String, lastName: String, middleName: String?){
            self.firstName = firstName
            self.lastName = lastName
            
            // optional binding for middlename
            if let middleName = middleName {
                self.middleName = middleName
            }
    }
}

// declare an instance
let myPerson = Person(firstName: "Jill", lastName: "Johnson", middleName: "Julie")

// call type method
Person.typeMethod()

// call instance method
myPerson.fullName()
```

## Initializers

### Overview

Classes and structures must set all of their stored properties to an appropriate initial value by the time an instance of that class or structure is created. Stored properties can’t be left in an indeterminate state. You can set an initial value for a stored property within an initializer, or by assigning a default property value as part of the property’s definition. These actions are described in the following sections.

**Considerations:**

- Like functions, argument labels can be used with initializers. Implement using the same method as functions.
- Optionals should be used for values that will be set after initialization.
- Structs have memberwise initializers in the absence of a custom initializer.
- Classes must be initialized with default values or use a custom initializer.

### Declaration

```swift
init(firstName: String, lastName: String, middleName: String?){
        self.firstName = firstName
        self.lastName = lastName
        
        // optional binding for middlename
        if let middleName = middleName {
            self.middleName = middleName
        }
    }
```

## Extensions

Extensions add new functionality to an existing class, structure, enumeration, or protocol type. This includes the ability to extend types for which you don’t have access to the original source code (known as retroactive modeling). Extensions are similar to categories in Objective-C. (Unlike Objective-C categories, Swift extensions don’t have names.)

Extensions in Swift can:

- Add computed instance properties and computed type properties
- Define instance methods and type methods
- Provide new initializers
- Define and use new nested types
- Make an existing type conform to a protocol

In Swift, you can even extend a protocol to provide implementations of its requirements or add additional functionality that conforming types can take advantage of.

Example of a protocol extension on our Person class:

```swift
extension Person: CustomStringConvertible {
    var description: String {
        return "Person Type: \(firstName) \(lastName)"
    }
}
```

## Deinitializer

A deinitializer is called immediately before a class instance is deallocated. You write deinitializers with the deinit keyword, similar to how initializers are written with the init keyword. Deinitializers are only available on class types.

Swift automatically deallocates your instances when they’re no longer needed, to free up resources. Swift handles the memory management of instances through automatic reference counting (ARC), as described in Automatic Reference Counting. Typically you don’t need to perform manual cleanup when your instances are deallocated. However, when you are working with your own resources, you might need to perform some additional cleanup yourself. For example, if you create a custom class to open a file and write some data to it, you might need to close the file before the class instance is deallocated.

```swift
deinit {
    // perform the deinitialization
}
```

## See Also

- [Structures and Classes — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/ClassesAndStructures.html)
- [Properties — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Properties.html)
- [Methods — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Methods.html)
- [Initialization — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Initialization.html)
- [Extensions — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Extensions.html)