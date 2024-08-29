# 🚀 Callback Strategies

In Swift development, handling asynchronous tasks and communication between objects is essential. Various callback strategies allow objects to communicate and respond to events or changes. This section covers six key callback strategies in Swift: Delegation, NotificationCenter, Key-Value Observing (KVO), Closures, Target-Action, and the Responder Chain. Each strategy is explained with clear definitions and illustrative code snippets.

## 🛠️ Delegation

Delegation is a design pattern where one object (the delegate) is assigned the responsibility to act on behalf of another object (the delegator). This pattern is particularly useful for handling events, providing data, or responding to user interactions in a way that allows the delegator to remain focused on its core functionality.

In SwiftUI, delegation is typically replaced by other mechanisms like environment objects or bindings. However, you can use similar concepts for custom view components.

**Example Use Case:**  
A common use case for delegation is in a `UITableView`. In SwiftUI, a similar pattern is using custom views and `@Binding` or `@EnvironmentObject`.

**Implementation:**

1. **Define a Delegate Protocol:**

```swift
protocol MyViewDelegate: AnyObject {
    func didSelectRow(at index: Int)
    func didLongPressRow(at index: Int)
}
```

2. **Set Up the Delegator Class:**

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

3. **Implement the Delegate in Another Class:**

```swift
struct ContentView: View, MyViewDelegate {
    func didSelectRow(at index: Int) {
        print("Selected row at \(index)")
    }

    func didLongPressRow(at index: Int) {
        print("Long pressed row at \(index)")
    }

    var body: some View {
        MyListView(delegate: self, items: ["Item 1", "Item 2", "Item 3"])
    }
}
```

## 🛠️ NotificationCenter

**NotificationCenter** is a powerful system in iOS that facilitates communication between different parts of your application by sending and observing notifications. In SwiftUI, you typically use `@Published` properties in `ObservableObject` for similar functionality.

### **Key Components:**

1. **Posting Notifications:**

Instead of using `NotificationCenter`, you use `ObservableObject` and `@Published` properties.

```swift
class UserManager: ObservableObject {
    @Published var isLoggedIn: Bool = false
}
```

2. **Observing Notifications:**

In SwiftUI, you use `@ObservedObject` to observe changes.

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

3. **Defining Notification Names:**

In SwiftUI, defining notification names is not necessary since you use `@Published` and `@ObservedObject` to manage state.

## 🛠️ Key-Value Observing (KVO)

Key-Value Observing (KVO) allows objects to be notified when specific properties of other objects change. In SwiftUI, state changes are observed using `@State`, `@Binding`, or `@ObservedObject`.

**Example Use Cases:**
1. Monitoring changes in a user profile.
2. Observing progress updates in a download manager.

#### Basic Implementation

1. **Create the Observable Class:**

```swift
import SwiftUI

class ScoreManager: ObservableObject {
    @Published var score: Int = 0
}
```

2. **Add and Handle Observers:**

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

## 🛠️ Closures

Closures in Swift are self-contained blocks of code that can be passed around and executed. They capture and store references to variables and constants from the context in which they are defined.

### 1. **Closure Syntax and Types**

**Closure Syntax:**

```swift
{ (parameters) -> returnType in
    // code
}
```

**Example: Basic Closure**

```swift
let greet: () -> Void = {
    print("Hello, World!")
}

greet() // Output: Hello, World!
```

### 2. **Closure as Callbacks**

Closures are frequently used for callbacks to handle asynchronous operations or to respond to events.

**Example Use Case:** Handling completion of a network request.

**Implementation:**

1. **Define a Closure Type:**

```swift
typealias CompletionHandler = (Result<String, Error>) -> Void
```

2. **Use Closure as a Callback:**

```swift
func fetchData(completion: @escaping CompletionHandler) {
    // Simulating a network request
    DispatchQueue.global().async {
        // Simulate a success response
        let result: Result<String, Error> = .success("Data fetched")
        DispatchQueue.main.async {
            completion(result)
        }
    }
}
```

3. **Call the Function:**

```swift
fetchData { result in
    switch result {
    case .success(let data):
        print(data) // Output: Data fetched
    case .failure(let error):
        print(error)
    }
}
```

### 3. **Capturing Values**

**Example: Capturing Values**

```swift
func makeIncrementer(incrementAmount: Int) -> () -> Void {
    var total = 0
    return {
        total += incrementAmount
        print(total)
    }
}

let incrementByTwo = makeIncrementer(incrementAmount: 2)
incrementByTwo() // Output: 2
incrementByTwo() // Output: 4
```

### 4. **Closure Shorthand Syntax**

**Example: Shorthand Syntax**

```swift
let numbers = [1, 2, 3, 4, 5]
let squaredNumbers = numbers.map { $0 * $0 }
print(squaredNumbers) // Output: [1, 4, 9, 16, 25]
```

### 5. **Trailing Closure Syntax**

**Example: Trailing Closure**

```swift
func performOperation(with completion: () -> Void) {
    print("Performing operation")
    completion()
}

performOperation {
    print("Operation completed")
}
```

### 6. **Escaping vs. Non-Escaping Closures**

**Example: Escaping Closure**

```swift
func fetchData(completion: @escaping () -> Void) {
    DispatchQueue.global().async {
        // Simulate some work
        DispatchQueue.main.async {
            completion()
        }
    }
}
```

**Example: Non-Escaping Closure**

```swift
func doSomething(with closure: () -> Void) {
    closure()
}

doSomething {
    print("This is non-escaping")
}
```

### 7. **Closures with Capture Lists**

**Example: Capture List**

```swift
class ViewController: UIViewController {
    var name: String = "ViewController"

    func setupClosure() {
        let closure: () -> Void = { [weak self] in
            print(self?.name ?? "No name")
        }
        closure()
    }
}
```

## 🛠️ Target-Action

The Target-Action design pattern is used to enable one object to send messages (actions) to another object in response to specific events. This pattern is commonly used in iOS development for handling user interactions with UI elements.

In SwiftUI, interactions are handled using state bindings and view modifiers.

**Detailed Example with Buttons:**

**1. Basic Button Tap Handling:**

```swift
import SwiftUI

struct ContentView: View {
    @State private var message: String = ""

    var body: some View {
        VStack {
            Text(message)
                .padding()
            Button("Tap Me") {
                message = "Button was tapped"
            }
        }
    }
}
```

**2. Handling Multiple Events:**

```swift
struct SliderAndSwitchView: View {
    @State private var sliderValue: Double = 0
    @State private var switchIsOn: Bool = false

    var body: some View {
        VStack {
            Slider(value: $sliderValue, in: 0...100) {
                Text("Slider")
            }
            .padding()
            Text("Slider value: \(sliderValue)")

            Toggle("Switch", isOn: $switchIsOn)
                .padding()
            Text("Switch is \(switchIsOn ? "ON" : "OFF")")
        }
    }
}
```

**3. Dynamic Target Configuration:**

```swift
struct DynamicButtonView: View {
    @State private var message: String = ""

    var shouldHandleTap: Bool = true

    var body: some View {
        VStack {
            if shouldHandleTap {
                Button("Dynamic

 Button") {
                    message = "Button was tapped"
                }
            }
            Text(message)
                .padding()
        }
    }
}
```

## 🛠️ Responder Chain

The Responder Chain is a mechanism in UIKit that allows an event to be passed up the view hierarchy until it finds an object that can handle it. In SwiftUI, similar concepts are used with view modifiers and environment values.

**Basic Responder Chain:**

1. **Setting Up the Responder Chain:**

```swift
import SwiftUI

struct ContentView: View {
    @State private var message: String = ""

    var body: some View {
        VStack {
            Button("Tap Me") {
                handleTap()
            }
            Text(message)
                .padding()
        }
    }

    func handleTap() {
        message = "Button was tapped"
    }
}
```

2. **Advanced Handling with View Modifiers:**

```swift
struct CustomButton: View {
    let action: () -> Void
    let title: String

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
            CustomButton(action: {
                message = "Custom Button was tapped"
            }, title: "Tap Me")
            Text(message)
                .padding()
        }
    }
}
```

---
