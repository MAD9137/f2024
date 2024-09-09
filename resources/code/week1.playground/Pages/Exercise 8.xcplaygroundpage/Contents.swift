func makeIncrementer(incrementAmount: Int) -> () -> Int {
    var total = 0
    return {
        total += incrementAmount
        return total
    }
}

let incrementByTwo = makeIncrementer(incrementAmount: 2)
print(incrementByTwo()) // Prints: ?
print(incrementByTwo()) // Prints: ?

// Solution
//
// 2
// 4
