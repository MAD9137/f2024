# 🧠 Swift collections

Swift comes equipped with collections you might already be familiar, and some that might be new for you.

## Arrays

The most basic is an **array** which looks similar in syntax to most other coding languages.

```swift
// Initialize Arrays
var firstArray: [Int] = [3, 5, 6, 7, 9, 12] //assign an array explicitly
var secondArray = [1, 3, 9] //inferred declaration

// All of the following methods will work to create an empty array
var thirdArray: [Character] = []
var fourthArray = [Bool]()
var fifthArray: Array<Int> = []
var sixthArray = Array<Double>()

// Array that holds any mixed types of data
var anyArray: [Any] = [false, "a", "string", 1, 3.45]

// Repeated value array initializer
var namesArray = Array(repeating: "Name", count: 5)
var scoresArray = [Int](repeating: 0, count: 10)

// Accessing Arrays
firstArray.isEmpty
firstArray.count
firstArray.contains(6)
let firstInteger = firstArray[0]
let arrayFirstTwoInts = firstArray[0..<2]
arrayFirstTwoInts.sorted(by:>)
let  lastInteger = firstArray.last!

// Modifying Arrays
firstArray[0] = 10
firstArray[2] += 20
var copiedArray = firstArray
copiedArray.append(22)
copiedArray.remove(at:0)
copiedArray.removeLast()
copiedArray.insert(32, at: 1)

var secondCopiedArray = copiedArray + [45, 57]
secondCopiedArray += [61, 69]
```

A little more on to how to use arrays in Swift:

1. **Creating an Array:**

   You can create an array in Swift using various syntaxes. Here's how you can create an array of integers:

   ```swift
   var numbers: [Int] = [1, 2, 3, 4, 5]
   ```

   Alternatively, you can use type inference:

   ```swift
   var fruits = ["Apple", "Banana", "Cherry"]
   ```

2. **Accessing Elements:**

   You can access elements in an array using their index. Array indices start at 0. For example:

   ```swift
   let firstNumber = numbers[0] // Access the first element (1)
   let secondFruit = fruits[1]  // Access the second element ("Banana")
   ```

3. **Modifying Arrays:**

   You can modify arrays in various ways, such as appending, inserting, or removing elements.

   - Appending an element to the end of an array:

     ```swift
     fruits.append("Orange")
     ```

   - Inserting an element at a specific index:

     ```swift
     fruits.insert("Grapes", at: 2) // Inserts "Grapes" at index 2
     ```

   - Removing an element:

     ```swift
     fruits.remove(at: 1) // Removes the element at index 1 ("Banana")
     ```

4. **Iterating Over an Array:**

   You can use loops to iterate over the elements of an array. For example, using a `for-in` loop:

   ```swift
   for fruit in fruits {
       print(fruit)
   }
   ```

5. **Array Count and Empty Check:**

   You can check the number of elements in an array using the `count` property and determine if an array is empty:

   ```swift
   let count = fruits.count // Number of elements in the array
   let isEmpty = fruits.isEmpty // Check if the array is empty
   ```

6. **Mapping an Array:**

   You can apply a transformation to each element in an array using the `map` function:

   ```swift
   let numbersSquared = numbers.map { $0 * $0 }
   // numbersSquared is now [1, 4, 9, 16, 25]
   ```

7. **Filtering an Array:**

   You can filter an array based on a condition using the `filter` function:

   ```swift
   let evenNumbers = numbers.filter { $0 % 2 == 0 }
   // evenNumbers is now [2, 4]
   ```

8. **Sorting an Array:**

   You can sort an array using the `sort` method:

   ```swift
   var unsortedNumbers = [5, 2, 8, 1, 3]
   unsortedNumbers.sort()
   // unsortedNumbers is now [1, 2, 3, 5, 8]
   ```

9. **Concatenating Arrays:**

   You can concatenate two arrays using the `+` operator:

   ```swift
   let moreFruits = ["Mango", "Pineapple"]
   let allFruits = fruits + moreFruits
   // allFruits contains all elements from fruits and moreFruits
   ```

These examples should help you get started with using arrays in Swift for various common tasks. Swift's array capabilities provide a powerful and flexible way to work with collections of data.

[Swift Fundamentals - Creating and Using Arrays Pluralsight](https://app.pluralsight.com/course-player?clipId=106b7818-9c87-4b74-a816-d6507c5bac2a)

[Apple Developer Docs - Array](https://developer.apple.com/documentation/swift/array)

## Dictionaries

In addition to the standard array, there are dictionaries that use key-value pairs, where keys are used for indexing instead of the zero-based index system as with arrays.

```swift
// Initialize Dictionaries
var firstDictionary: [String: Int] = ["apples": 5, "oranges": 2, "pears": 4] //assign a dictionary explictly
var secondDictionary = ["day": 23.5, "night": 18.4] //inferred declaration

// Both of the following methods will work to create an empty dictionary
var thirdDictionary: [Int: String] = [:]
var fourthDictionary = Dictionary<Int, String>()

// Accessing Dictionaries
firstDictionary.count
thirdDictionary.isEmpty
let keyArray = Array(firstDictionary.keys)
let valueArray = Array(firstDictionary.values)
let quantityOfPears = firstDictionary["pears"]!

// Modifying Dictionaries
firstDictionary["apples"] = 21
firstDictionary["oranges"] = nil
print(firstDictionary)
firstDictionary.removeAll()
firstDictionary["kiwis"] = 26
let purchasedItem = firstDictionary.removeValue(forKey:"kiwis")
```

Here are some extra examples that demonstrate how to use dictionaries in Swift:

1. **Creating a Dictionary:**

   You can create a dictionary in Swift using the following syntax:

   ```swift
   var personInfo: [String: Any] = ["name": "John", "age": 30, "isStudent": false]
   ```

   In this example, we have a dictionary `personInfo` with string keys and values of different types.

2. **Accessing Elements:**

   You can access values in a dictionary using keys:

   ```swift
   let name = personInfo["name"] as? String // Accessing the "name" key
   let age = personInfo["age"] as? Int      // Accessing the "age" key
   ```

   Note that you need to use optional binding (`as?`) when accessing dictionary values to handle potential nil values.

3. **Modifying Dictionaries:**

   You can add, update, or remove key-value pairs in a dictionary:

   - Adding a new key-value pair:

     ```swift
     personInfo["job"] = "Engineer"
     ```

   - Updating an existing value:

     ```swift
     personInfo["age"] = 31 // Updating the age to 31
     ```

   - Removing a key-value pair:

     ```swift
     personInfo.removeValue(forKey: "isStudent") // Removing the "isStudent" key-value pair
     ```

4. **Iterating Over a Dictionary:**

   You can iterate through a dictionary's key-value pairs using a `for-in` loop:

   ```swift
   for (key, value) in personInfo {
       print("\(key): \(value)")
   }
   ```

5. **Dictionary Count and Empty Check:**

   You can check the number of key-value pairs in a dictionary using the `count` property and determine if a dictionary is empty:

   ```swift
   let count = personInfo.count // Number of key-value pairs in the dictionary
   let isEmpty = personInfo.isEmpty // Check if the dictionary is empty
   ```

6. **Checking for Keys:**

   You can check if a dictionary contains a specific key using the `contains` method:

   ```swift
   if personInfo.contains(where: { $0.key == "name" }) {
       // The dictionary contains the key "name"
   }
   ```

7. **Getting Keys and Values:**

   You can get an array of keys or values from a dictionary:

   ```swift
   let keys = Array(personInfo.keys)
   let values = Array(personInfo.values)
   ```

8. **Merging Dictionaries:**

   You can merge two dictionaries using the `merge` method:

   ```swift
   var additionalInfo = ["city": "New York", "job": "Software Developer"]
   personInfo.merge(additionalInfo) { (_, new) in new }
   // Merges additionalInfo into personInfo, keeping new values for conflicting keys
   ```

These examples cover the basic operations you can perform with dictionaries in Swift. Dictionaries are useful for associating unique keys with values and are commonly used for tasks such as storing configuration settings, caching, and more.

[Swift Fundamentals - Working with Dictionaries Pluralsight](https://app.pluralsight.com/course-player?clipId=dc5c5d05-b044-4d6d-887d-ec14df9b5124)

[Apple Developer Docs - Dictionary](https://developer.apple.com/documentation/swift/dictionary)

## Sets

There are also sets: unordered collections of data of the same type. The function looks much like an array and can be used to generate arrays if needed. They function similar to an array, but also let you check if the set is empty, count the number of objects in the set, and will tell you if the set contains a specific value.

```swift
// Initialize Sets
var firstSet: Set<String> = ["Salt", "Egg", "Flour"] //define a set explicitly
var secondSet: Set = [1.1, 43.7, 15.9, 38.6, 2.2, 39.4] //inferred declaration

// Sets will discard duplicate values, and order is not preserved
var thirdSet: Set = [1.1, 2.2, 3.3, 4.4, 1.1]

// Both of the following methods will work to create an empty set
var fourthSet = Set<Int>()
var fifthSet: Set<Float> = []

// Accessing Sets
fifthSet.isEmpty
firstSet.count
thirdSet.contains(2.2)

// Checking if a set is a sub-set of another set
var testSet: Set = [1.1, 15.9]
testSet.isSubset(of:secondSet)
secondSet.isSuperset(of:testSet)
testSet.isDisjoint(with:secondSet)

// An array can hold the values of a set if needed
var arrayOfNumbers = Array(thirdSet).sorted()

// Set Operations
var intersectedSet: Set = thirdSet.intersection(secondSet)
var xOrSet: Set = thirdSet.symmetricDifference(secondSet)
var unionedSet: Set = thirdSet.union(secondSet)
var subtractedSet: Set = thirdSet.subtracting(secondSet)

// Modifying Sets
firstSet.insert("Pepper")
let ingredient = firstSet.remove("Salt")

// or the safer version of above
let indexOfEggs = firstSet.index(of:"Egg")
firstSet.remove(at:indexOfEggs!)

secondSet.formUnion(thirdSet)
```

And some more examples:

Certainly! Sets in Swift are collections of unique values with no defined order. Here are some examples that demonstrate how to use sets in Swift:

1. **Creating a Set:**

   You can create a set in Swift using the following syntax:

   ```swift
   var colors: Set<String> = ["Red", "Green", "Blue"]
   ```

   Alternatively, you can use type inference:

   ```swift
   var animals = Set(["Lion", "Tiger", "Bear"])
   ```

2. **Accessing Elements:**

   You can check if an element exists in a set and retrieve elements from a set:

   ```swift
   let hasRed = colors.contains("Red") // Check if "Red" is in the set
   let firstAnimal = animals.first     // Get the first element (not guaranteed to be in any specific order)
   ```

3. **Adding and Removing Elements:**

   You can add and remove elements from a set:

   - Adding elements:

     ```swift
     colors.insert("Yellow")
     ```

   - Removing elements:

     ```swift
     animals.remove("Bear")
     ```

4. **Iterating Over a Set:**

   You can iterate through the elements of a set using a `for-in` loop:

   ```swift
   for color in colors {
       print(color)
   }
   ```

5. **Set Count and Empty Check:**

   You can check the number of elements in a set using the `count` property and determine if a set is empty:

   ```swift
   let count = colors.count      // Number of elements in the set
   let isEmpty = colors.isEmpty  // Check if the set is empty
   ```

6. **Performing Set Operations:**

   Sets support common set operations such as union, intersection, and difference:

   - Union of two sets:

     ```swift
     let moreColors: Set<String> = ["Orange", "Green", "Purple"]
     let allColors = colors.union(moreColors)
     ```

   - Intersection of two sets:

     ```swift
     let commonColors = colors.intersection(moreColors)
     ```

   - Difference between two sets:

     ```swift
     let uniqueColors = colors.subtracting(moreColors)
     ```

7. **Checking for Subsets and Supersets:**

   You can check if one set is a subset or superset of another set:

   ```swift
   let isSubset = colors.isSubset(of: moreColors)
   let isSuperset = colors.isSuperset(of: moreColors)
   ```

8. **Converting Sets:**

   You can convert sets to arrays or vice versa:

   ```swift
   let colorArray = Array(colors)
   let colorSet = Set(colorArray)
   ```

These examples cover the fundamental operations you can perform with sets in Swift. Sets are particularly useful when you need to ensure that your collection contains unique values and don't require a specific order for the elements.

[Swift in Depth - Sets Pluralsight](https://app.pluralsight.com/course-player?clipId=2973b9e2-26f1-4d08-8af0-643354bf75ae)

[Apple Developer Docs - Sets](https://developer.apple.com/documentation/swift/set)

## Tuples

Tuples (opens new window) are containers of multiple values of any type but are not intended for complex data structures. Rather they are ideally suited for returning multiple values from functions.

Basic tuple

```swift 
// Declare tuple using type inference
let myTuple = (22, "twenty-two", 22.000)
print(myTuple)

// initialize a new tuple with a tuple
var newTuple = myTuple

// Access tuple elements using index
print(newTuple.0)   // outputs 22
print(newTuple.1)   // outputs twenty-two
print(newTuple.2)   // outputs 22.0
```

Decompose a tuple into separate variables

```swift
// Decompose a tuple
var (myTupleInt, myTupleString, myTupleFloat) = myTuple

print(myTupleInt)       // outputs 22
print(myTupleString)    // outputs twenty-two
print(myTupleFloat)     // outputs 22.0
```

In situations where a tuple value is not needed, it’s possible to ignore them using _ in the declaration. The underscores are required to identify each value to be ignored or an error will occur.

A few more examples:

Certainly! Tuples in Swift are used to group multiple values into a single compound value. Here are some examples that demonstrate how to use tuples in Swift:

1. **Creating a Tuple:**

   You can create a tuple by enclosing values in parentheses:

   ```swift
   let person = ("John", 30, "Engineer")
   ```

   In this example, we have created a tuple with three elements representing a person's name, age, and occupation.

2. **Accessing Elements:**

   You can access elements of a tuple using index numbers or named elements:

   ```swift
   let name = person.0 // Accessing the first element
   let age = person.1  // Accessing the second element
   let occupation = person.2 // Accessing the third element
   ```

   Alternatively, you can name the elements when defining the tuple:

   ```swift
   let person = (name: "John", age: 30, occupation: "Engineer")
   let name = person.name // Accessing the element by name
   let age = person.age   // Accessing the element by name
   ```

3. **Nested Tuples:**

   Tuples can be nested within other tuples:

   ```swift
   let coordinates = (x: (1, 2), y: (3, 4))
   let xCoordinate = coordinates.x // Accessing the nested tuple by name
   let yCoordinate = coordinates.y // Accessing the nested tuple by name
   ```

4. **Tuple Decomposition:**

   You can decompose a tuple into individual variables or constants:

   ```swift
   let (personName, personAge, personOccupation) = person
   ```

   Now, `personName`, `personAge`, and `personOccupation` hold the values from the `person` tuple.

5. **Tuple as a Function Return Value:**

   Tuples are often used as return values from functions to return multiple values at once:

   ```swift
   func getUserInfo() -> (name: String, age: Int, email: String) {
       // ...
       return ("Alice", 25, "alice@example.com")
   }

   let userInfo = getUserInfo()
   let userName = userInfo.name
   let userEmail = userInfo.email
   ```

6. **Tuple Matching:**

   You can use tuple patterns to match and extract values from tuples in a switch statement:

   ```swift
   switch person {
   case ("John", _, "Engineer"):
       print("John is an engineer.")
   case (_, _, "Doctor"):
       print("This person is a doctor.")
   default:
       print("Occupation is unknown.")
   }
   ```

7. **Named Elements with Underscore:**

   You can use an underscore `_` to ignore specific elements of a tuple when you don't need them:

   ```swift
   let (_, age, _) = person
   ```

These examples illustrate how to create, access, and work with tuples in Swift. Tuples are particularly useful when you want to group multiple values together for a specific purpose, like returning multiple values from a function or temporarily grouping related data.

```swift
// Ignore second and third tuple elements
var (tupleInt, _, _) = myTuple

print(tupleInt)        // outputs 22
```

:::warning Note
You get to choose what, if any values within a Touple gets a name. If any value does not have a name it must be accessed with the numerical index notation.
:::

[Swift Fundamentals - Creating and Decomposing Tuples Pluralsight](https://app.pluralsight.com/course-player?clipId=4aaf7333-6241-41cd-acdf-974891094f4e)