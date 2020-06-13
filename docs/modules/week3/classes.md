# Classes

**Classes** are the main tool used to build object-oriented code. Swift has simplified the way to define a class, **class instance** properties and methods from the Objective-C syntax. There is even a way to define a custom **deinitialization** method to let you execute code when an object is being destroyed.

## Basic Class Definition

The following code shows how to create the basic structure of a class in Swift, create properties, and initialize properties using the **init** method.

```swift
// BASIC CLASS DEFINITION
class MyClass {
    let messageText: String = "Hello new class"
    func printMyMessage() {
        print(messageText)
    }
}

var printable = MyClass()
printable.printMyMessage()


// CREATE A BASE CLASS THAT USES AN INITIALIZER
class ClothingProduct {
    var cost: Float // requires init
    let brand: String // requires init
    var quantity: Int?

     // Create an init function that requires values passed in for all non-optional
     // properties
    init(brand: String, cost: Float){
        self.cost = cost
        self.brand = brand
    }
    // This is how you create a second definition for init also allowing quantity passed in
    convenience init(brand: String, cost: Float, quantity: Int){
        self.init(brand: brand, cost: cost) // Call the base init and pass in brand and cost
        self.quantity = quantity
    }
}

// The next line shows how to create instances of the ClothingProduct using the base
// init constructor method
let exampleClothes1: ClothingProduct = ClothingProduct(brand: "Polo", cost: 45.99)

// And the next line shows how to create instances of the ClothingProduct class using
// the convenience init method
let exampleClothes2: ClothingProduct = ClothingProduct(brand: "North Face", cost: 125.99, quantity: 25)

// BASIC CLASS INHERITANCE
class ParentClass {
    // Your code here
    var userId: Int?
}

class ChildClass: ParentClass {
    // Extend class with your code here
    var userName: String?
}
```

## Class Convenience, and Failable Initializers

It is possible to define more than one **init** method in your class for your coding convenience.  This allows you to create the same objects in different ways.  The following code demonstrates an example of creating a convenience init, and a failable init method.  **Failable init methods** are create when you are not guaranteed valid input values sent to create an instance of your new class.

  **Note**: This code example extends the ClothingProduct class from the example above.

```swift
// CREATE A CLASS THAT INHERITS FROM THE CLOTHINGPRODUCT CLASS ADDING ITS OWN CONVENIENCE
// INITIALIZER METHOD
class Footwear: ClothingProduct {
    // Define ClothingProduct class properties here
    var laces: Bool?

    // Define a convenience init method to include a bool for laces
    convenience init(brand: String, cost: Float, laces: Bool){
        self.init(brand: brand, cost: cost) // Call the base init and pass in brand and cost
        self.laces = laces
    }
}

// Create a Footwear instance using the base class' init constructor method
var exampleShoes1: Footwear = Footwear(brand: "Adidas", cost: 59.99)
// Example of creating a Footwear instance using the new continence init constructor
var exampleShoes2: Footwear = Footwear(brand: "Vans", cost: 59.99, laces: true)

// CREATE A CLASS THAT INHERITS FROM THE CLOTHINGPRODUCT CLASS ADDING AN OVERRIDDEN,
// AND A FAILABLE CONVENIENCE INITIALIZER
class Hat: ClothingProduct {
    //Extended CslothingProduct class with your code here
    var circumference: Float?
    var description = ""

   // Overriding the super class' init method is done like this
    override init(brand: String, cost: Float){
        super.init(brand: brand, cost: cost) // Call the base init and pass in brand and cost
        self.circumference = 57.8
    }

   // A failable convinience initializer method is defined with the ? after the word init
   //    convenience init?(brand: String, cost: Float, description: String? {
        self.init(brand: brand, cost: cost) // Call the base init and pass in brand and cost
        guard let safeDescription = description, safeDescription.isEmpty == false            else {
                return nil
        }
        self.description = safeDescription
    }
}

// Create example of a Hat instance using the overridden init constructor
var exampleHat1: Hat = Hat(brand: "Tilly", cost: 34.99)
// Create a Hat instance using the new failable convenience init constructor.
// Don't forget that a failable init always returns an optional value so you must unwrap
// this instance of Hat
var exampleHat2: Hat = Hat(brand: "New Era", cost: 42.99, description: "Another hat")!
```

## Class Instance Properties and Methods

In Swift a class can contain instance **properties**, and **methods**.  This is the code that defines what variables and functions each object created from your class will have copied into it.  An **instance property is like a variable** that holds data within your class instance, and an **instance method is a** **function** that you call from the copy of your object that can manipulate the data within itself.  The following shows some good practices for creating and accessing class instance properties, and methods.

```swift
// CREATE A CLASS THAT INHERITS FROM THE CLOTHINGPRODUCT CLASS AND USES GET/SET
// PROPERTIES AND SOME GET ONLY PROPERTIES// THIS CLASS ALSO HAS AN INSTANCE METHOD
// TO PUT THE ITEM ON SALE WHICH WILL REDUCE THE PRICE BY A PERCENTAGE
class Pants: ClothingProduct {
    // Extended ClothingProduct class with your code here
    var onSale = false
    var waist: Float = 0.0 // In inches
    var inseam: Float = 0.0  // In inches

    // Create a measurements property using get/set to access the waist and inseam
    // properties
    var measurements: (Float, Float) {
        get{
            return (waist, inseam)
        }
        set{
            waist = newValue.0
            inseam = newValue.1
        }
    }

    // Create get-only property for the 'waist' value converted to centimeters
    var waistInMetric: Int {
        return Int(Double(waist) * 2.54)
    }

    // Create get-only property for the 'inseam' value converted to centimeters
    var inseamInMetric: Int {
        return Int(Double(inseam) * 2.54)
    }

    // Create property-observers for a string value that holds the colour of the pants
    // that print the new and old colour values
    var colour = "White" {
        willSet {
            print("\(newValue) pants are added to the inventory")
        }
        didSet {
            print("\(oldValue) pants have been removed from the inventory")
        }
    }

    // A convenience initializer method testing the get/set, and observer properties
    convenience init(brand: String, cost: Float, waist:Float, inseam: Float, colour: String){
        self.init(brand: brand, cost: cost) // Call the base init and pass in brand and cost
        self.measurements = (waist, inseam)
        self.colour = colour
    }

    // Create the instance method to put the item on sale which will reduce the price by
    // a percentage
    func putOnSale(percentOff: Int) {
        guard onSale == false && percentOff > 0 && percentOff < 100 else {
            print("Error: Invalid percent entered");
              return
        }
        onSale = true
        self.cost *= (1.00 - Float(percentOff)/100.0)
        print("Sale price: \(self.cost)")
    }
}

// Create an instance of the Pants class giving it some test data
var examplePants1: Pants = Pants(brand: "Levis", cost: 39.99, waist: 34, inseam: 36, colour: "Blue")

// Check the getter function for the measurements
examplePants1.measurements

// Check the getter function for the get-only properties
examplePants1.waistInMetricexamplePants1.inseamInMetric // Test the convenience initializer
methodexamplePants1.colour = "Black" // Test the putOnSale instanc
methodexamplePants1.putOnSale(percentOff: -25)  // Outputs the error
messageexamplePants1.putOnSale(percentOff: 35)
```

## Class Deinit Method and Static Class Properties

Static class properties are variables that only exists in the master class definition, and is **not** copied into each instance of the class.  These can keep track of how many copies of the object has been created by using the class init to increment the static class value on creation for example.  In this way you could also use a class **deinit** method to then decrement the static value every time a copy of that class gets deallocated, and removed from memory.  the deinit method is a built in instance method you never call manually in code, but is automatically fired each time an instance of your class is deleted.

The following code example shows how to use static member properties and set them using init and deinit.

```swift
// A CLASS WITH A DEINITIALIZER METHOD, AND STATIC CLASS PROPERTIES
class Messager {
    // Create a static property to count how many times the printMessage function has
    // been called
    static var messageCount = 0
    // Create a static property to count how many Messager objects have been created
    static var objectCount = 0

    // An init method counts up every time a Messager object is created
    init () {
        // Accessing the static class property is done through the class definition
        Messager.objectCount += 1
        print ("Messager object created, count is \(Messager.objectCount)")
    }

    // The deinit function fires just before an object gets removed from memory
    deinit {
        // Accessing the static class property and decrement
        Messager.objectCount -= 1
        print ("Messager object destroyed, count is now \(Messager.objectCount)")
    }

    // This is a function to increment the count and print the updated message
    func printMessage() {
        // Increment the message's triggerCount
        Messager.messageCount += 1
        print ("Message count is \(Messager.messageCount)")
    }
}

// Create an instance of the Messager class to see the init message
var messager: Messager? = Messager()

// Call the printMessage method a few times
messager!.printMessage()
messager!.printMessage()

// Delete the Messager instance and it will print out the deinit message
messager = nil
```

The following shows you how to create and use classes in Swift:

[Swift 5 Essential Training - Basic Classes <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/basic-swift-classes?u=2199673)

[Swift Fundamentals - Using Classes and Objects <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=463e68d1-c028-4b08-a2a2-940bd785e157)
