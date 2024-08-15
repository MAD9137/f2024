# Quiz

## Question 1

What does the `!` operator do when used with optionals in Swift?

- A) It makes the optional into a non-optional.
- B) It converts the optional to a string.
- C) It forces unwraps the optional value.
- D) It binds the optional value to a constant.
- E) It checks if the optional is nil.

**Answer:** C

## Question 2

What is the purpose of `guard let` in optional unwrapping?

- A) To bind an optional to a new constant if it is not nil, and to continue execution only if the optional is not nil.
- B) To unwrap an optional and print an error message if it is nil.
- C) To convert an optional to an implicitly unwrapped optional.
- D) To force unwrap an optional and handle any runtime errors.
- E) To create a new optional from a non-optional value.

**Answer:** A

## Question 3

What will be the output of the following code snippet?

```swift
var number: Int? = nil
let result = number ?? 10
print(result)
```

- A) "10"
- B) "nil"
- C) "0"
- D) "number"
- E) "10.0"

**Answer:** A

## Question 4

How does optional chaining handle nested optionals?

- A) It forces unwrapping of each optional in the chain.
- B) It provides a default value for each optional in the chain.
- C) It safely calls properties, methods, and subscripts on an optional, returning nil if any part of the chain is nil.
- D) It converts all nested optionals into implicitly unwrapped optionals.
- E) It replaces nil values with default values at each level of the chain.

**Answer:** C

## Question 5

In what scenario would using an implicitly unwrapped optional be most appropriate?

- A) When you need to unwrap the optional multiple times throughout your code.
- B) When the optional is guaranteed to have a value after initialization, but you want to avoid unwrapping it every time.
- C) When you are unsure if the optional will have a value and want to handle it safely.
- D) When you want to convert the optional into a non-optional type.
- E) When you want to avoid using optional binding.

 **Answer:** B

## Question 6

What is the return type of a function that does not return any value in Swift?

- A) Void
- B) Null
- C) Optional
- D) Any
- E) Empty

**Answer:** A

## Question 7

What does the closure syntax `{ (parameters) -> ReturnType in ... }` represent?

- A) A named function
- B) A variadic parameter
- C) A closure
- D) A default parameter
- E) An autoclosure
  
**Answer:** C

## Question 8

In the example `func makeIncrementer(incrementAmount: Int) -> () -> Int`, what does the closure inside `makeIncrementer` capture?

- A) Only the `incrementAmount`
- B) Only the `total`
- C) Both `incrementAmount` and `total`
- D) The return type `() -> Int`
- E) The function parameter `incrementAmount` only
  
**Answer:** C

## Question 9

What is the key difference between escaping and non-escaping closures in Swift?

- A) Escaping closures must be executed within the function scope.
- B) Non-escaping closures can outlive the function they are passed into.
- C) Escaping closures are executed after the function returns.
- D) Non-escaping closures are used only in synchronous tasks.
- E) Escaping closures cannot be passed as arguments.
  
**Answer:** C

## Question 10

How does using a trailing closure syntax improve code readability?

- A) By allowing multiple closures in a single function call.
- B) By simplifying syntax for nested functions.
- C) By separating the closure body from the function call.
- D) By automatically wrapping the closure in an autoclosure.
- E) By eliminating the need for function parameters.

**Answer:** C
