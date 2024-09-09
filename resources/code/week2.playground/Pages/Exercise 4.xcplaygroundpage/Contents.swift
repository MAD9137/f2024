/*
 
 Given array of integers, filter out even numbers,
 and squares each remaining number.
 Print an array with the squared results.
 So, for example if your array is [1, 2, 3, 4, 5, 6]
 your resulting array will be [1, 9, 25]
 
 */

// Solution 1

import UIKit

let numbers = [1, 2, 3, 4, 5, 6]

let filteredNumbers = numbers.filter { number in
  number % 2 != 0
}

let squaredNumbers = filteredNumbers.map { number in
  number * number
}

print(squaredNumbers)

// Solution 2

//import UIKit
//
//print([1, 2, 3, 4, 5, 6]
//  .filter { $0 % 2 != 0 }
//  .map { $0 * $0 })
