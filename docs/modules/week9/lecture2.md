# 🚀 Swift `async`/`await`

Swift's `async`/`await` is a modern concurrency model introduced in Swift 5.5. It simplifies writing asynchronous code by making it look more like synchronous code, improving readability and maintainability. This model helps in handling operations that are time-consuming or need to wait for external resources, such as network requests or file operations.

### Key Concepts

1. **Asynchronous Functions (`async`):** Functions that perform asynchronous operations and can be paused and resumed. They are declared with the `async` keyword.
2. **Await Expressions (`await`):** Used to pause the execution of an asynchronous function until the result is available. It is placed before calling an `async` function.
3. **Task:** Represents a unit of asynchronous work. You use `Task` to start an asynchronous operation.

### Declaring and Calling Asynchronous Functions

In Swift, asynchronous functions are declared using the `async` keyword. This keyword indicates that the function performs work that might take some time to complete and can be paused and resumed later. A crucial rule when working with asynchronous functions is that they can only be called from within other asynchronous functions or within a `Task`. This ensures that the asynchronous nature of these functions is properly managed.

#### Basic Syntax

```swift
func fetchData() async -> String {
    // Simulate a network delay
    await Task.sleep(2 * 1_000_000_000) // 2 seconds
    return "Fetched Data"
}
```

- **`func fetchData() async -> String`:** This function named `fetchData` is an asynchronous function. It takes no parameters and returns a `String`. The `async` keyword before the return type indicates that this function is asynchronous.

- **`await Task.sleep(2 * 1_000_000_000)`:** Inside the function, `await` is used before calling another asynchronous operation. In this case, `Task.sleep` simulates a delay of 2 seconds, pausing the function's execution.

- **`return "Fetched Data"`:** After the delay, the function returns a string `"Fetched Data"`. This return value could represent the result of a network request, file read, or another asynchronous task in real-world scenarios.

#### Example of an Async Function Calling Another Async Function

If you want to call the `fetchData()` function from another function, that function must also be asynchronous. Here’s how you can do that:

```swift
func loadUserData() async -> String {
    // Call another async function
    let data = await fetchData()
    return "User data loaded: \(data)"
}
```

- **Calling an Async Function:** The `loadUserData()` function is declared as `async` because it calls another async function, `fetchData()`. The `await` keyword pauses the execution of `loadUserData()` until `fetchData()` returns its result.

### Calling an Asynchronous Function

To call an asynchronous function, you must be in an asynchronous context. Swift provides two primary ways to do this: inside another asynchronous function or within a `Task`.

#### Calling in an Async Context Using `Task`

If you are in a synchronous context (e.g., inside a regular function or the global scope), you need to use a `Task` to create an asynchronous context. Here’s how to call `fetchData()` using a `Task`:

```swift
Task {
    let data = await fetchData()
    print(data)
}
```

- **`Task { ... }`:** The `Task` initializer creates an asynchronous context, allowing you to use `await` to call async functions like `fetchData()`.

- **Restrictions:** Without a `Task` or being inside another async function, attempting to call `fetchData()` would result in a compile-time error.

#### Expanded Example with Multiple Async Calls

Here’s an example where you call `fetchUserData(for:)` twice, sequentially, within a `Task`:

```swift
Task {
    let user1Data = await fetchUserData(for: "user123")
    print(user1Data)
    
    let user2Data = await fetchUserData(for: "user456")
    print(user2Data)
}
```

- **Sequential Execution:** The `await` keyword ensures that the second call to `fetchUserData(for: "user456")` only starts after the first call completes.

#### Parallel Execution with `async let`

Swift also allows you to execute multiple asynchronous tasks in parallel using `async let`, which can improve efficiency by running tasks concurrently:

```swift
Task {
    async let user1Data = fetchUserData(for: "user123")
    async let user2Data = fetchUserData(for: "user456")
    
    let results = await (user1Data, user2Data)
    print("User 1: \(results.0), User 2: \(results.1)")
}
```

- **`async let`:** This keyword starts both `fetchUserData` calls in parallel. The execution proceeds without waiting for either task to complete immediately.

- **Parallel Execution:** By using `async let`, the two tasks run concurrently, potentially reducing the overall waiting time compared to sequential execution.

### Handling Asynchronous Results

When dealing with asynchronous results, it's common to combine results or handle errors.

#### Combining Results

You can combine results from multiple asynchronous functions like this:

```swift
Task {
    async let data1 = fetchData()
    async let data2 = fetchData()
    
    let combinedData = await "\(data1) & \(data2)"
    print("Combined Data: \(combinedData)")
}
```

- **Combining Strings:** In this example, the results of two asynchronous `fetchData()` calls are combined into a single string after both tasks complete.

#### Handling Errors

Asynchronous functions can throw errors, which can be managed using `try` and `await` together:

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

- **`try await`:** When calling an asynchronous function that can throw an error, you use `try` along with `await`.

- **`catch` block:** Errors thrown by the asynchronous function are caught in the `catch` block, allowing you to handle the error appropriately.

In Swift, asynchronous functions declared with the `async` keyword offer a powerful way to manage tasks that take time to complete, such as network requests or file I/O. These functions can only be called from within other asynchronous functions or a `Task`, ensuring that the asynchronous operations are properly managed and executed without blocking the main thread or mishandling concurrency.

### Example: Converting Callbacks to Async/Await

Let's start with an example using callbacks. Consider a function that fetches data with a completion handler:

```swift
func fetchDataWithCompletion(completion: @escaping (String) -> Void) {
    DispatchQueue.global().async {
        // Simulate a network delay
        sleep(2)
        let data = "Fetched Data"
        DispatchQueue.main.async {
            completion(data)
        }
    }
}
```

**Usage:**

```swift
fetchDataWithCompletion { data in
    print(data)
}
```

#### Async/Await Conversion

1. **Convert the Callback Function to an Async Function:**

```swift
func fetchData() async -> String {
    // Use withCheckedContinuation to bridge between callback and async/await
    await withCheckedContinuation { continuation in
        fetchDataWithCompletion { data in
            continuation.resume(returning: data)
        }
    }
}
```

2. **Usage of the Async Function:**

```swift
Task {
    let data = await fetchData()
    print(data)
}
```

### Handling Errors

Async functions can throw errors just like synchronous functions. You can use `try` with `await` to handle errors.

**Error Handling Example:**

```swift
enum DataError: Error {
    case networkError
}

func fetchDataWithError() async throws -> String {
    // Simulate a network delay
    await Task.sleep(2 * 1_000_000_000) // 2 seconds
    throw DataError.networkError
}
```

**Usage:**

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

### Combining Async Functions

You can call multiple async functions in sequence or in parallel. Here’s how to do both:

**Sequential Execution:**

```swift
func processData() async {
    let data1 = await fetchData()
    let data2 = await fetchData()
    print("\(data1), \(data2)")
}
```

**Parallel Execution:**

```swift
func processDataInParallel() async {
    async let data1 = fetchData()
    async let data2 = fetchData()
    let results = await (data1, data2)
    print("\(results.0), \(results.1)")
}
```

Swift's `async`/`await` provides a streamlined way to handle asynchronous code, making it easier to read and write. Converting from callback-based asynchronous code involves:

1. **Creating an `async` function** using `withCheckedContinuation` or `withUnsafeContinuation`.
2. **Calling async functions** using `await` in a `Task` or another async context.
3. **Handling errors** with `try` and `catch` in async functions.
4. **Managing concurrency** with async let for parallel execution.
