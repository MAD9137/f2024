/*
 
 Create a Swift while loop that prints the Fibonacci sequence up
 to a specified limit. Use while to continue printing until the
 last number is greater than or equal to the limit.
 
 */

func printFibonacci(upTo limit: Int) {
    var a = 0
    var b = 1
    
    while a <= limit {
        print(a, terminator: " ")
        let next = a + b
        a = b
        b = next
    }
}

printFibonacci(upTo: 10) // Output: 0 1 1 2 3 5 8
