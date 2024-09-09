/*
 
 Create a Swift function that uses a guard statement to ensure
 a given string is not empty before printing it.
 If the string is empty, print "String is empty"
 and exit the function.
 
 */

func printNonEmptyString(_ str: String) {
    guard !str.isEmpty else {
        print("String is empty")
        return
    }
    print(str)
}

printNonEmptyString("Hello") // Output: Hello
printNonEmptyString("")      // Output: String is empty
