/*
 
 Write a Swift switch statement that takes an integer
 and prints which quarter of the year it falls into.
 For example, 1 should print "Q1", 5 should print "Q2", etc.
 
 */

func quarterOfYear(month: Int) {
    switch month {
    case 1...3:
        print("Q1")
    case 4...6:
        print("Q2")
    case 7...9:
        print("Q3")
    case 10...12:
        print("Q4")
    default:
        print("Invalid month")
    }
}

quarterOfYear(month: 2)  // Output: Q1
quarterOfYear(month: 7)  // Output: Q3
quarterOfYear(month: 11) // Output: Q4
