# 🧠 Protocols

A protocol defines a blueprint of methods, properties, and other requirements that suit a particular task or piece of functionality. The protocol can then be adopted by a class, structure, or enumeration to provide an actual implementation of those requirements. Any type that satisfies the requirements of a protocol is said to conform to that protocol.

**Considerations:**

- Protocols don’t actually implement any functionality themselves. Think of them as tools that provide access to additional capabilities in a consistent manner regardless of the adopting entity.
- Protocols can be extended.
- Adopting a protocol is the act of referencing it in the definition of a struct, class or enumeration.
- Conforming to a protocol means that the underlying code meets the requirements as defined in the protocol.
- Protocols are types.

::: tip Note
At this stage in our journey with Swift and iOS, we're primarily concerned with adopting and conforming to protocols included with the development tools and frameworks we'll be learning to build iOS apps.
:::

## Definition

Define a protocol with the `protocol` keyword followed by the protocol name using UpperCamelCase. For example:

```swift
// Define a basic protocol
protocol MyProtocol {

    // state a requirement that an adopting entity
    // must implement the following properties
    var myNumber: Int {get set}
    var myString: String {get}
}
```

## Adoption and Conformance

Using an example from the Swift Standard Library, we'll adopt the [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible) protocol enabling us to output more meaningful text to the console when debugging.

```swift
// Adopt the CustomStringConvertible protocol
struct Box: CustomStringConvertible {

    // create a computed property to conform to protocol
    var description: String {
        return "The box is \(width) units wide by \(height) units high"
    }
    
    // properties
    var width: Int
    var height: Int
}

var myBox = Box(width: 25, height: 25)

// Now the print function will reference the description property of myBox and
// output to the console.
print(myBox)
````

## See Also

- [Protocols — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Protocols.html)
- [Swift Fundamentals - Introducing Protocols Plural](https://app.pluralsight.com/course-player?clipId=095103af-48f6-455e-92e3-161c462b9bb5)