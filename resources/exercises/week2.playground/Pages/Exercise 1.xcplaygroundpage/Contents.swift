/*
 
 Write a Swift Playground that prints the numbers from 1 to 100

 For numbers divisible by 3, print “Fizz”
 For numbers divisible by 5, print “Buzz”
 For numbers divisible by both 3 and 5, print “FizzBuzz”
 
 */

// Solution 1

for number in 1...100 {
    if number % 3 == 0 && number % 5 == 0 {
        print("FizzBuzz")
    } else if number % 3 == 0 {
        print("Fizz")
    } else if number % 5 == 0 {
        print("Buzz")
    } else {
        print(number)
    }
}

// Solution 2

//for number in 1...100 {
//    var output = ""
//    
//    let conditions: [Int: String] = [
//        3: "Fizz",
//        5: "Buzz"
//    ]
//    
//    for (divisor, result) in conditions {
//        if number % divisor == 0 {
//            output += result
//        }
//    }
//    
//    if output.isEmpty {
//        output = "\(number)"
//    }
//    
//    print(output)
//}

// Solution 3

//for number in 1...100 {
//    switch (number % 3 == 0, number % 5 == 0) {
//    case (true, false):
//        print("Fizz")
//    case (false, true):
//        print("Buzz")
//    case (true, true):
//        print("FizzBuzz")
//    default:
//        print(number)
//    }
//}
