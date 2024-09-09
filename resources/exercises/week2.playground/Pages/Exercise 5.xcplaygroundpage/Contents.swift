/*
 
 Write a Swift function that takes an integer as input
 and prints whether the number is positive, negative,
 or zero using an if-else statement.
 
 */

func checkNumber(_ number: Int) {
    if number > 0 {
        print("Positive")
    } else if number < 0 {
        print("Negative")
    } else {
        print("Zero")
    }
}

checkNumber(10)  // Output: Positive
checkNumber(-5)  // Output: Negative
checkNumber(0)   // Output: Zero
