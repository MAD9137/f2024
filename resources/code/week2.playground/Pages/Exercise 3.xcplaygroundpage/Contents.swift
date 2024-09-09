/*
 
 Given a string, create a dictionary where the keys are unique 
 words in the string, and the values are the number of times
 each word appears. So, for example, if the string is
 This is a simple Swift example. Swift is fun!" your resulting
 array should be

 ["This": 1, "is": 2, "a": 1, "simple": 1, "Swift": 2, "example.": 1, "fun!": 1]
 
 */

//Solution 1

import UIKit

let myString = "This is a simple Swift example. Swift is fun!"
var wordFrequency = [String: Int]()
let words = myString.split(separator: " ")

for word in words {
  let cleanedWord = String(word)
  wordFrequency[cleanedWord, default: 0] += 1
}
print(wordFrequency)

//Solution 2

//import UIKit
//
//let myString = "This is a mean simple Swift example. A Swift example is that fun! Simple as this, I mean that!"
//
//let allowedCharacterSet = CharacterSet(charactersIn: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ")
//let filteredString = myString.unicodeScalars.filter { allowedCharacterSet.contains($0) }
//let myNewString = String(filteredString)
//
//var wordFrequency = [String: Int]()
//let words = myNewString.split(separator: " ")
//
//for word in words {
//  let cleanedWord = String(word).lowercased()
//  wordFrequency[cleanedWord, default: 0] += 1
//}
//print(wordFrequency)
