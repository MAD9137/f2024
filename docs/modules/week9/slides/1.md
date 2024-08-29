---
marp: true
theme: default
class:
  - invert
---

# Callback Strategies in Swift

In Swift development, handling asynchronous tasks and communication between objects is essential. This section covers six key callback strategies: **Delegation, NotificationCenter, Key-Value Observing (KVO), Closures, Target-Action,** and **Responder Chain**.

---

# Delegation

Delegation is a design pattern where one object (the delegate) is assigned the responsibility to act on behalf of another object (the delegator).

### Example Use Case
Used in **UITableView**. In SwiftUI, similar patterns use **@Binding** or **@EnvironmentObject**.

+++ 

## Implementation

### Define a Delegate Protocol

```swift
protocol MyViewDelegate: AnyObject {
    func didSelectRow(at index: Int)
    func didLongPressRow(at index: Int)
}
```

### Set Up the Delegator Class

```swift
struct MyListView: View {
    weak var delegate: MyViewDelegate?
    let items: [String]

    var body: some View {
        List(items.indices, id: \.self) { index in
            Text(items[index])
                .onTapGesture {
                    delegate?.didSelectRow(at: index)
                }
                .onLongPressGesture {
                    delegate?.didLongPressRow(at: index)
                }
        }
    }
}
```

Note: Use delegation to handle user interactions in SwiftUI custom views.

---

# NotificationCenter

NotificationCenter allows communication between different parts of your app by sending and observing notifications.

### SwiftUI Replacement
Use **@Published** in **ObservableObject** and **@ObservedObject** for state management.

+++ 

## Implementation

### Define Observable Class

```swift
class UserManager: ObservableObject {
    @Published var isLoggedIn: Bool = false
}
```

### Observing Changes

```swift
struct ContentView: View {
    @ObservedObject var userManager = UserManager()

    var body: some View {
        VStack {
            Text(userManager.isLoggedIn ? "User is logged in" : "User is not logged in")
            Button("Log In") {
                userManager.isLoggedIn = true
            }
            Button("Log Out") {
                userManager.isLoggedIn = false
            }
        }
    }
}
```

Presenter Notes:
Use **@ObservedObject** to observe changes in **@Published** properties.

---

# Key-Value Observing (KVO)

KVO allows objects to be notified when specific properties of other objects change.

### SwiftUI Approach
Use **@State**, **@Binding**, or **@ObservedObject** for state observation.

+++ 

## Example

### Create Observable Class

```swift
class ScoreManager: ObservableObject {
    @Published var score: Int = 0
}
```

### Observer View

```swift
struct ScoreView: View {
    @ObservedObject var scoreManager = ScoreManager()

    var body: some View {
        VStack {
            Text("Score: \(scoreManager.score)")
            Button("Increase Score") {
                scoreManager.score += 1
            }
        }
    }
}
```

Presenter Notes:
In SwiftUI, directly bind your UI to the observable state properties.

---

# Closures

Closures are self-contained blocks of code that can be passed around and executed.

### Use Cases
Used for callbacks to handle asynchronous operations or events.

+++ 

## Closure Syntax

```swift
{ (parameters) -> returnType in
    // code
}
```

### Basic Closure Example

```swift
let greet: () -> Void = {
    print("Hello, World!")
}
greet() // Output: Hello, World!
```

### Closures as Callbacks

```swift
typealias CompletionHandler = (Result<String, Error>) -> Void

func fetchData(completion: @escaping CompletionHandler) {
    DispatchQueue.global().async {
        let result: Result<String, Error> = .success("Data fetched")
        DispatchQueue.main.async {
            completion(result)
        }
    }
}

fetchData { result in
    switch result {
    case .success(let data):
        print(data)
    case .failure(let error):
        print(error)
    }
}
```

Presenter Notes:
Closures are widely used in Swift for handling completion handlers and asynchronous tasks.

---

# Target-Action

Target-Action allows one object to send messages (actions) to another in response to events.

### SwiftUI Replacement
Use state bindings and view modifiers to handle interactions.

+++ 

## Basic Button Handling

```swift
struct ContentView: View {
    @State private var message: String = ""

    var body: some View {
        VStack {
            Text(message)
            Button("Tap Me") {
                message = "Button was tapped"
            }
        }
    }
}
```

Presenter Notes:
In SwiftUI, use **@State** to manage changes and bind them to views.

---

# Responder Chain

The Responder Chain allows an event to be passed up the view hierarchy until it finds a suitable handler.

### SwiftUI Approach
Use view modifiers and environment values to handle events.

+++ 

## Basic Example

```swift
struct ContentView: View {
    @State private var message: String = ""

    var body: some View {
        VStack {
            Button("Tap Me") {
                handleTap()
            }
            Text(message)
        }
    }

    func handleTap() {
        message = "Button was tapped"
    }
}
```

Presenter Notes:
Understand how events can be propagated in the view hierarchy and handled appropriately.
