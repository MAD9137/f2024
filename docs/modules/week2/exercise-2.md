# 😵‍💫 Exercise 2

## The FizzBuzz

Write a Swift Playground that prints the numbers from 1 to 100

- For numbers divisible by 3, print “Fizz”
- For numbers divisible by 5, print “Buzz”
- For numbers divisible by both 3 and 5, print “FizzBuzz”

::: details Solution 1

```swift
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
```

:::

::: details Solution 2

```swift
for number in 1...100 {
    var output = ""
    
    let conditions: [Int: String] = [
        3: "Fizz",
        5: "Buzz"
    ]
    
    for (divisor, result) in conditions {
        if number % divisor == 0 {
            output += result
        }
    }
    
    if output.isEmpty {
        output = "\(number)"
    }
    
    print(output)
}
```

:::

::: details Solution 3

```swift
for number in 1...100 {
    switch (number % 3 == 0, number % 5 == 0) {
    case (true, false):
        print("Fizz")
    case (false, true):
        print("Buzz")
    case (true, true):
        print("FizzBuzz")
    default:
        print(number)
    }
}
```

::: detail Variation

```swift
for number in 1...100 {
    switch (number % 2 == 0, number % 3 == 0, number % 5 == 0) {
    
    case (false, true, false):
        print("Fizz")
    case (false, false, true):
        print("Buzz")
    case (true, false, false):
        print("Guzz")
      
    case (false, true, true):
        print("FizzBuzz")
    case (true, true, false):
        print("FizzGuzz")
    case (true, false, true):
        print("BuzzGuzz")
      
    case (true, true, true):
        print("FizzBuzzGuzz")
    
    default:
        print(number)
    }
}
```

:::
