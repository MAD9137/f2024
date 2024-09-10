/**
 
 What will be the output of the two print statements?
 Explain how the closure captures the incrementAmount
 and total values.
 
 */

func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    return {
        total += incrementAmount
        return total
    }
}

let incrementByTwo = makeIncrementer(incrementAmount: 2)

print(incrementByTwo())
print(incrementByTwo())
