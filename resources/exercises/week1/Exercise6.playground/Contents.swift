/**
 
What will be the result of intersect?
Write the correct code to get the intersection
of the two ranges and explain the outcome.
 
*/

let range1 = 1...4
let range2 = 2..<5

//let intersect = range1.intersection(range2)


// Correct code

let set1 = Set(range1)
let set2 = Set(range2)
let intersectionSet = set1.intersection(set2)
print(intersectionSet)

//intersect is a set that represents the overlap between range1 and range2.
