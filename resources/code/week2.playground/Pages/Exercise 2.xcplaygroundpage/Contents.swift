/*
 
 Given two arrays of any comparable type (e.g., Int, String)
 print an array containing the common elements between them
 without duplicates.
 
*/

import Foundation

let array1 = [1,2,2,2,3,4,4,5]
let array2 = [1,1,2,3,21,31,41,41,5]

let set1 = Set(array1)
let set2 = Set(array2)

let commonElements = set1.intersection(set2)

print(Array(commonElements))
