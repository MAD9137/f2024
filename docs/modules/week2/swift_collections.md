---
title: Swift Collections
---

# Swift Collections

Swift comes equipped with the some interesting collections.

[Gathering inventory with collections <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/gathering-inventory-with-collections?u=2199673)

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

[Swift Arrays <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/swift-arrays?u=2199673)

[Core array methods <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/core-array-methods?u=2199673)

[Apple Developer Docs - Array](https://developer.apple.com/documentation/swift/array)

## Dictionaries

In addition to the standard array, there are **dictionaries** that use key-value pairs, where keys are used for indexing instead of the zero-based index system as with arrays.

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

[Swift Dictionaries <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/swift-dictionaries?u=2199673)

[Core dictionary methods <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/core-dictionary-methods?u=2199673)

[Apple Developer Docs - Dictionary](https://developer.apple.com/documentation/swift/dictionary)

## Sets

There are also **sets**: unordered collections of data of the same type. The function looks much like an array and can be used to generate arrays if needed. They function similar to an array, but also let you check if the set is empty, count the number of objects in the set, and will tell you if the set contains a specific value.

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

[Working with sets <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/working-with-sets?u=2199673)

[Core set methods <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/core-set-methods?u=2199673)

[Apple Developer Docs - Sets](https://developer.apple.com/documentation/swift/set)

## Tuples

Tuples are similar to a spontaneously-defined structure of data. *They can hold unlike types of data* which are strictly ordered the way you define them. They can be used to pass multiple pieces of data in to, and return from, a function.

```swift
// Initialize Tuples
var areaCode = ("Ottawa", 613)
var inputValues: (Float, Int, Bool) = (5.5, 102, true)

// Giving some of your Tuple values a name
var studentGrades: (firstName: String, lastName: String, [Int])studentGrades = ("Jon", "Doe", [88, 98, 90])

// Accessing Tuples
let studentFirstName = studentGrades.0
let studentLastName = studentGrades.1
let firstGrade = studentGrades.2[0]
let bestGrade = studentGrades.2.max()!
print("\(studentGrades.firstName) \(studentGrades.lastName) had the highest mark with \(bestGrade)%")

// Decomposing Tuples
let (height, weight, living) = inputValues
let (firstName, lastName, marks) = studentGrades
let averageMark = marks.reduce(0, +) / marks.count

// Use underscores to omit values you don't want to decompose to save on processing
let (city, _) = areaCode

// Modifying Tuples
areaCode.0 = "Toronto"
areaCode.1 = 416

// Changing a Tuple value by it name 
studentGrades.firstName = "Bob"
```

:::warning NOTE
You get to choose what, if any values within a Touple gets a name. If any value does not have a name it must be accessed with the numerical index notation.
:::

[Swift Tuples <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/swift-tuples?u=2199673)

[Back to Week 2](./index.md#during-class)