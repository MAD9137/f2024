let range1 = 1...4
let range2 = 2..<5

let intersect = range1.intersection(range2)


//The result of intersect will be:
//
//
//Optional(2...4)
//
//Correct code to get the intersection:
//
//let range1 = 1...4
//let range2 = 2..<5
//
//if let intersect = range1.intersection(range2) {
//    print(intersect)
//}
//intersect is a range that represents the overlap between range1 and range2.
