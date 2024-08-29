# 🤯 Exercises

### Code Questions and Answers on Callback Strategies in Swift

1. **Question:** Explain how delegation is used in SwiftUI and provide an example of implementing a custom view that uses delegation to handle user interactions.

   **Answer:**
   In SwiftUI, delegation can be implemented using protocols similar to how it is done in UIKit. However, SwiftUI prefers more declarative patterns such as bindings and environment objects. A custom view can still delegate actions to another object that conforms to a specific protocol.

   **Example:**
   ```swift
   protocol MyViewDelegate: AnyObject {
       func didTapButton()
   }

   struct CustomView: View {
       weak var delegate: MyViewDelegate?

       var body: some View {
           Button("Tap Me") {
               delegate?.didTapButton()
           }
       }
   }

   struct ContentView: View, MyViewDelegate {
       func didTapButton() {
           print("Button was tapped!")
       }

       var body: some View {
           CustomView(delegate: self)
       }
   }
   ```

2. **Question:** How can NotificationCenter's functionality be replicated in SwiftUI using `@Published` and `@ObservedObject`? Provide a simple example where a change in one view is observed by another.

   **Answer:**
   In SwiftUI, you can use `@Published` properties within an `ObservableObject` to notify other views of changes. The observing view uses `@ObservedObject` to listen to these changes and update accordingly.

   **Example:**
   ```swift
   class CounterManager: ObservableObject {
       @Published var count: Int = 0
   }

   struct IncrementView: View {
       @ObservedObject var counterManager: CounterManager

       var body: some View {
           Button("Increment Count") {
               counterManager.count += 1
           }
       }
   }

   struct DisplayView: View {
       @ObservedObject var counterManager: CounterManager

       var body: some View {
           Text("Count: \(counterManager.count)")
       }
   }

   struct ContentView: View {
       @StateObject private var counterManager = CounterManager()

       var body: some View {
           VStack {
               IncrementView(counterManager: counterManager)
               DisplayView(counterManager: counterManager)
           }
       }
   }
   ```

3. **Question:** Describe a scenario where closures would be more appropriate than delegation in SwiftUI, and provide an example using a closure as a callback.

   **Answer:**
   Closures are more appropriate than delegation when a single task or event needs a callback without needing to conform to a protocol. They are lightweight and can be defined inline, making them ideal for simple tasks or asynchronous operations.

   **Example:**
   ```swift
   struct ContentView: View {
       func performTask(completion: () -> Void) {
           print("Task started")
           completion()
       }

       var body: some View {
           Button("Start Task") {
               performTask {
                   print("Task completed!")
               }
           }
       }
   }
   ```

4. **Question:** How can you use a closure to capture and update state within a SwiftUI view? Illustrate this with an example of a counter that increments using a closure.

   **Answer:**
   Closures can capture state by referencing variables in their surrounding context. In SwiftUI, you can use a closure within a view to modify a `@State` variable.

   **Example:**
   ```swift
   struct CounterView: View {
       @State private var count: Int = 0

       var body: some View {
           VStack {
               Text("Count: \(count)")
               Button("Increment") {
                   let incrementClosure = {
                       count += 1
                   }
                   incrementClosure()
               }
           }
       }
   }
   ```

5. **Question:** Demonstrate how to use the responder chain concept in SwiftUI to handle multiple view events. Provide a complex example involving multiple buttons with different actions.

   **Answer:**
   In SwiftUI, the responder chain concept can be mimicked by using view modifiers and passing actions as closures to child views. This allows events to be handled at various levels in the view hierarchy.

   **Example:**
   ```swift
   struct CustomButton: View {
       let title: String
       let action: () -> Void

       var body: some View {
           Button(title) {
               action()
           }
           .padding()
           .background(Color.blue)
           .foregroundColor(.white)
           .cornerRadius(10)
       }
   }

   struct ContentView: View {
       @State private var message: String = ""

       var body: some View {
           VStack {
               CustomButton(title: "Button 1") {
                   handleAction("Button 1 tapped")
               }
               CustomButton(title: "Button 2") {
                   handleAction("Button 2 tapped")
               }
               Text(message)
                   .padding()
           }
       }

       func handleAction(_ newMessage: String) {
           message = newMessage
       }
   }
   ```

These questions and answers progressively cover the use of various callback strategies in Swift, illustrating the nuances and flexibility of SwiftUI.


































### Question 1:
**What will the following code snippet print, and why?**

```swift
func fetchData() async -> String {
    await Task.sleep(2 * 1_000_000_000)
    return "Fetched Data"
}

Task {
    let data = await fetchData()
    print(data)
}
```

**Answer:**
The code snippet will print:
```
Fetched Data
```
**Reason:** The `fetchData()` function is an asynchronous function that simulates a delay of 2 seconds using `Task.sleep`. When called within a `Task`, the function is awaited, and execution is paused until the function completes, at which point it returns the string "Fetched Data", which is then printed.

### Question 2:
**What happens if you try to call `fetchData()` from a non-async context without using `Task`? Provide an example and explain the outcome.**

**Answer:**
If you try to call `fetchData()` from a non-async context without using `Task`, the code will result in a compile-time error. 

**Example:**
```swift
func main() {
    let data = fetchData() // Error: 'async' call in a function that does not support concurrency
    print(data)
}
```

**Outcome Explanation:**  
The function `main()` is not marked as `async`, so it cannot directly call the asynchronous function `fetchData()`. To call `fetchData()`, it must be done within an async context, such as another async function or a `Task`.

### Question 3:
**Given the following code, what is the benefit of using `async let` for the two fetch operations?**

```swift
func fetchUserData(for userID: String) async -> String {
    // Simulate network call
    await Task.sleep(1 * 1_000_000_000)
    return "User data for \(userID)"
}

Task {
    async let user1Data = fetchUserData(for: "user123")
    async let user2Data = fetchUserData(for: "user456")

    let results = await (user1Data, user2Data)
    print("User 1: \(results.0), User 2: \(results.1)")
}
```

**Answer:**
The benefit of using `async let` is that both `fetchUserData` operations start executing in parallel rather than sequentially. This reduces the total wait time because the tasks are executed concurrently, potentially cutting the total execution time in half compared to running them sequentially.

### Question 4:
**How would you modify the function `fetchDataWithCompletion` to handle errors using `async/await` and `throw` an error if the network call fails?**

**Answer:**
To modify `fetchDataWithCompletion` to handle errors using `async/await`, you would need to convert the function into an `async` function that throws an error. Here's how you could do it:

```swift
enum DataError: Error {
    case networkFailure
}

func fetchData() async throws -> String {
    try await withCheckedThrowingContinuation { continuation in
        fetchDataWithCompletion { result in
            if result.isSuccess {
                continuation.resume(returning: result.data)
            } else {
                continuation.resume(throwing: DataError.networkFailure)
            }
        }
    }
}
```

This function now throws an error if the network call fails. The use of `withCheckedThrowingContinuation` allows the async function to throw an error if needed.

### Question 5:
**Write an async function `fetchDataFromMultipleSources()` that fetches data from two different sources in parallel and handles potential errors from both sources. The function should combine the data only if both fetches succeed. Otherwise, it should throw an error.**

**Answer:**
```swift
enum FetchError: Error {
    case source1Failed
    case source2Failed
}

func fetchDataFromSource1() async throws -> String {
    // Simulate a fetch that might fail
    await Task.sleep(1 * 1_000_000_000)
    throw FetchError.source1Failed // Simulate an error
}

func fetchDataFromSource2() async throws -> String {
    await Task.sleep(1 * 1_000_000_000)
    return "Data from source 2"
}

func fetchDataFromMultipleSources() async throws -> String {
    async let source1 = fetchDataFromSource1()
    async let source2 = fetchDataFromSource2()

    do {
        let data1 = try await source1
        let data2 = try await source2
        return "\(data1) and \(data2)"
    } catch FetchError.source1Failed {
        throw FetchError.source1Failed
    } catch FetchError.source2Failed {
        throw FetchError.source2Failed
    }
}
```

In this code, `fetchDataFromMultipleSources()` uses `async let` to fetch data from two sources in parallel. If either fetch fails, it throws an error. If both succeed, it returns the combined result.