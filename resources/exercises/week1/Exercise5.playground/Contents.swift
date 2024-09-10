/**
 
Modify the code so that number is inferred as a type
and decimal is explicitly annotated as a type.

Then, perform an operation that combines both variables
and explain the result.

*/

var number: Int = 50
var decimal = 25.5

//var number = 50 // Type inferred as Int
//var decimal: Double = 25.5 // Explicitly annotated as Double

let sum = Double(number) + decimal
