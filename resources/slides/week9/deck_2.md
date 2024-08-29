---
marp: true
theme: default
class:
  - invert
---

# Swift Async/Await

Swift's async/await is a modern concurrency model introduced in Swift 5.5. It simplifies writing asynchronous code, making it look more like synchronous code, improving readability and maintainability.

---

# Key Concepts

- **Asynchronous Functions (`async`)**: Functions that perform asynchronous operations and can be paused and resumed.
- **Await Expressions (`await`)**: Used to pause the execution of an async function until the result is available.
- **Task**: Represents a unit of asynchronous work. Used to start an asynchronous operation.

Note: These concepts help manage time-consuming operations like network requests or file I/O.

---

# Declaring Asynchronous Functions

```swift
func fetchData() async -> String {
    await Task.sleep(2 * 1_000_000_000) // Simulates a 2-second delay
    return "Fetched Data"
}
```

- The function `fetchData` is marked with `async`.
- `await` pauses execution until the task is complete.

Note: Asynchronous functions must be called from within other async functions or a Task.

---

# Calling an Async Function

Example of calling an async function from another async function:

```swift
func loadUserData() async -> String {
    let data = await fetchData()
    return "User data loaded: \(data)"
}
```

- `loadUserData` uses `await` to call `fetchData`.

Note: `await` ensures `fetchData` completes before proceeding.

---

# Using `Task` to Create an Async Context

```swift
Task {
    let data = await fetchData()
    print(data)
}
```

- `Task` creates an asynchronous context in a synchronous environment.

Note: Without a `Task` or being inside an `async` function, calling an async function will result in a compile-time error.

---

# Sequential Async Calls

```swift
Task {
    let user1Data = await fetchUserData(for: "user123")
    print(user1Data)
    
    let user2Data = await fetchUserData(for: "user456")
    print(user2Data)
}
```

- Each async function is called in order after the previous completes.

Note: `await` ensures tasks are executed sequentially.

---

# Parallel Execution with `async let`

```swift
Task {
    async let user1Data = fetchUserData(for: "user123")
    async let user2Data = fetchUserData(for: "user456")
    
    let results = await (user1Data, user2Data)
    print("User 1: \(results.0), User 2: \(results.1)")
}
```

- `async let` allows multiple async functions to run concurrently.

Note: Use `async let` for parallel task execution to improve efficiency.

---

# Combining Results from Async Functions

```swift
Task {
    async let data1 = fetchData()
    async let data2 = fetchData()
    
    let combinedData = await "\(data1) & \(data2)"
    print("Combined Data: \(combinedData)")
}
```

- Combines the results of two async functions after both are complete.

Note: Useful for tasks that can run concurrently and then combine their results.

---

# Handling Errors in Async Functions

```swift
Task {
    do {
        let data = try await fetchDataWithError()
        print(data)
    } catch {
        print("Failed to fetch data: \(error)")
    }
}
```

- Use `try await` to call async functions that may throw errors.
- Handle errors with a `catch` block.

Note: Proper error handling is crucial for robust async code.

---

# Converting Callbacks to Async/Await

Example using callbacks:

```swift
func fetchDataWithCompletion(completion: @escaping (String) -> Void) {
    DispatchQueue.global().async {
        sleep(2)
        let data = "Fetched Data"
        DispatchQueue.main.async {
            completion(data)
        }
    }
}
```

Converted to async/await:

```swift
func fetchData() async -> String {
    await withCheckedContinuation { continuation in
        fetchDataWithCompletion { data in
            continuation.resume(returning: data)
        }
    }
}
```

Note: Conversion simplifies asynchronous code and improves readability.

---

# Conclusion

Swift's async/await model:

- Provides a streamlined way to manage asynchronous tasks.
- Simplifies code that deals with time-consuming operations.
- Enhances readability and maintainability by mimicking synchronous code structure.

Note: Mastering async/await will greatly improve handling concurrency in Swift.

---

# Questions?

Feel free to ask any questions about Swift's async/await model or async programming in general!

---

<!-- _class: lead -->
# Presentation Notes

- Emphasize how async/await improves code readability and maintainability.
- Highlight key differences between callbacks and async/await.
- Provide examples of real-world applications, such as network requests.
- Encourage questions and discussions about handling concurrency and error management in Swift.

---
```