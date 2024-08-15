# 🚀 Callback Strategies

In Swift development, handling asynchronous tasks and communication between objects is essential. Various callback strategies allow objects to communicate and respond to events or changes. This section covers six key callback strategies in Swift: Delegation, NotificationCenter, Key-Value Observing (KVO), Closures, Target-Action, and the Responder Chain. Each strategy is explained with clear definitions and illustrative code snippets.

## 🛠️ Delegation

Delegation is a design pattern where one object (the delegate) is assigned the responsibility to act on behalf of another object (the delegator). This pattern is particularly useful for handling events, providing data, or responding to user interactions in a way that allows the delegator to remain focused on its core functionality.

In the delegation pattern, the delegator defines a protocol that outlines the methods (or properties) it expects its delegate to implement. The delegate then implements these methods, allowing the delegator to communicate with it without having to know the specifics of the delegate’s implementation. This pattern promotes loose coupling and separation of concerns, making the code more modular and easier to maintain.

**Example Use Case:**  
A common use case for delegation is in a `UITableView`. A table view might need to handle user interactions like selecting a row, and delegation provides a clean way to delegate this responsibility to another class (usually a view controller).

**Implementation:**

1. **Define the Delegate Protocol:**

The protocol specifies the methods the delegate must implement. It helps the delegator communicate with the delegate.

```swift
protocol MyTableViewDelegate: AnyObject {
    func didSelectRow(at indexPath: IndexPath)
    func didLongPressRow(at indexPath: IndexPath)
}
```

2. **Set Up the Delegator Class:**

The delegator (in this case, a custom `UITableView` subclass) holds a weak reference to the delegate and calls the delegate methods when necessary.

```swift
class MyTableView: UITableView {
    weak var delegate: MyTableViewDelegate?

    // Simulate a row selection
    func simulateRowSelection(at indexPath: IndexPath) {
        delegate?.didSelectRow(at: indexPath)
    }

    // Simulate a row long press
    func simulateLongPress(at indexPath: IndexPath) {
        delegate?.didLongPressRow(at: indexPath)
    }
}
```

3. **Implement the Delegate in Another Class:**

The delegate class implements the methods defined in the protocol. This class will handle the events forwarded by the delegator.

```swift
class ViewController: UIViewController, MyTableViewDelegate {
    func didSelectRow(at indexPath: IndexPath) {
        print("Selected row at \(indexPath)")
    }

    func didLongPressRow(at indexPath: IndexPath) {
        print("Long pressed row at \(indexPath)")
    }
}
```

4. **Assign the Delegate:**

The delegate is assigned to the delegator. This setup allows the delegator to communicate with the delegate when events occur.

```swift
let tableView = MyTableView()
let viewController = ViewController()
tableView.delegate = viewController

// Simulate interactions
tableView.simulateRowSelection(at: IndexPath(row: 0, section: 0))
tableView.simulateLongPress(at: IndexPath(row: 1, section: 0))
```

**Examples:**

1. **Custom Alert System:**

   **Define the Delegate Protocol:**

   ```swift
   protocol AlertDelegate: AnyObject {
       func alertDidConfirm()
       func alertDidCancel()
   }
   ```

   **Set Up the Delegator Class:**

   ```swift
   class CustomAlert {
       weak var delegate: AlertDelegate?

       func confirm() {
           delegate?.alertDidConfirm()
       }

       func cancel() {
           delegate?.alertDidCancel()
       }
   }
   ```

   **Implement the Delegate in Another Class:**

   ```swift
   class AlertHandler: AlertDelegate {
       func alertDidConfirm() {
           print("Alert confirmed")
       }

       func alertDidCancel() {
           print("Alert canceled")
       }
   }
   ```

   **Assign the Delegate:**

   ```swift
   let alert = CustomAlert()
   let handler = AlertHandler()
   alert.delegate = handler

   // Simulate user actions
   alert.confirm()
   alert.cancel()
   ```

2. **Custom Data Source for a Collection View:**

   **Define the Delegate Protocol:**

   ```swift
   protocol CollectionViewDataSourceDelegate: AnyObject {
       func numberOfItems() -> Int
       func item(at index: Int) -> String
   }
   ```

   **Set Up the Delegator Class:**

   ```swift
   class CustomCollectionView {
       weak var dataSourceDelegate: CollectionViewDataSourceDelegate?

       func displayItems() {
           let count = dataSourceDelegate?.numberOfItems() ?? 0
           for index in 0..<count {
               let item = dataSourceDelegate?.item(at: index) ?? "Unknown"
               print("Item \(index): \(item)")
           }
       }
   }
   ```

   **Implement the Delegate in Another Class:**

   ```swift
   class DataSource: CollectionViewDataSourceDelegate {
       func numberOfItems() -> Int {
           return 5
       }

       func item(at index: Int) -> String {
           return "Item \(index)"
       }
   }
   ```

   **Assign the Delegate:**

   ```swift
   let collectionView = CustomCollectionView()
   let dataSource = DataSource()
   collectionView.dataSourceDelegate = dataSource

   // Display items
   collectionView.displayItems()
   ```

**Key Points:**

- **Weak References:** The delegate is typically a weak reference to avoid retain cycles and memory leaks.
- **Protocol-Oriented:** The delegator doesn’t need to know about the concrete implementation of the delegate; it only needs to know the protocol.
- **Flexibility:** Different classes can act as delegates, allowing for a flexible and reusable design.

## 🛠️ NotificationCenter

**NotificationCenter** is a powerful system in iOS that facilitates communication between different parts of your application by sending and observing notifications. This pattern helps decouple the components of your app, allowing them to work together without needing to be directly connected.

**NotificationCenter** allows objects to post notifications, which are broadcasted to any observers that have registered to listen for those notifications. This mechanism is useful for broadcasting information about events that multiple parts of an application might be interested in, without those parts needing to directly communicate with each other.

### **Key Components:**

1. **Posting Notifications:**  
   Notifications are posted to the `NotificationCenter` by using the `post(name:object:userInfo:)` method. The `name` parameter identifies the notification, while `object` and `userInfo` can be used to pass additional data.

2. **Observing Notifications:**  
   To observe a notification, an object registers itself with `NotificationCenter` using the `addObserver(_:selector:name:object:)` method. When the notification is posted, the `selector` method is called on the observing object.

3. **Defining Notification Names:**  
   Notifications are identified by names. Define notification names using a `Notification.Name` extension to avoid typos and ensure consistency.

### **Expanded Implementation Examples:**

#### **Basic Example: User Login**

**1. Post a Notification:**

When a user logs in, you might want to update various parts of your app. You can post a notification:

```swift
NotificationCenter.default.post(name: .userDidLogin, object: nil)
```

**2. Observe the Notification:**

In any class that needs to respond to the login event, add an observer:

```swift
NotificationCenter.default.addObserver(self, selector: #selector(handleUserLogin), name: .userDidLogin, object: nil)

@objc func handleUserLogin(notification: Notification) {
    print("User did login")
}
```

**3. Define the Notification Name:**

```swift
extension Notification.Name {
    static let userDidLogin = Notification.Name("userDidLogin")
}
```

#### **Advanced Example: Updating UI and Sending Data**

**1. Post a Notification with Data:**

Sometimes, you may need to pass additional information with your notification:

```swift
let userInfo = ["username": "john_doe", "loginTime": Date()]
NotificationCenter.default.post(name: .userDidLogin, object: nil, userInfo: userInfo)
```

**2. Observe Notification with Data:**

In the observing class, handle the notification and extract the data:

```swift
NotificationCenter.default.addObserver(self, selector: #selector(handleUserLogin(_:)), name: .userDidLogin, object: nil)

@objc func handleUserLogin(_ notification: Notification) {
    if let userInfo = notification.userInfo,
       let username = userInfo["username"] as? String,
       let loginTime = userInfo["loginTime"] as? Date {
        print("User \(username) logged in at \(loginTime)")
    }
}
```

**3. Define the Notification Name:**

```swift
extension Notification.Name {
    static let userDidLogin = Notification.Name("userDidLogin")
}
```

#### **Removing Observers**

It's important to remove observers when they are no longer needed, typically in the `deinit` method, to avoid memory leaks and unexpected behavior:

```swift
deinit {
    NotificationCenter.default.removeObserver(self, name: .userDidLogin, object: nil)
}
```

#### **Example: Managing Application State**

**1. Post Notifications on App State Changes:**

You might post notifications when the app enters the background or foreground:

```swift
NotificationCenter.default.post(name: .appDidEnterBackground, object: nil)
NotificationCenter.default.post(name: .appWillEnterForeground, object: nil)
```

**2. Observe Notifications for App State:**

Handle these notifications to manage app behavior accordingly:

```swift
NotificationCenter.default.addObserver(self, selector: #selector(handleAppDidEnterBackground), name: .appDidEnterBackground, object: nil)
NotificationCenter.default.addObserver(self, selector: #selector(handleAppWillEnterForeground), name: .appWillEnterForeground, object: nil)

@objc func handleAppDidEnterBackground(notification: Notification) {
    print("App did enter background")
}

@objc func handleAppWillEnterForeground(notification: Notification) {
    print("App will enter foreground")
}
```

**3. Define Notification Names for App State:**

```swift
extension Notification.Name {
    static let appDidEnterBackground = Notification.Name("appDidEnterBackground")
    static let appWillEnterForeground = Notification.Name("appWillEnterForeground")
}
```

**NotificationCenter** is an essential tool for handling events and broadcasting information across different parts of your app. By using notifications, you can keep your app components loosely coupled, making your code more modular and maintainable. With the examples provided, you should now have a thorough understanding of how to implement and use NotificationCenter effectively in your Swift applications.

## 🛠️ Key-Value Observing (KVO)

Key-Value Observing (KVO) is a mechanism in Swift that allows objects to be notified when specific properties of other objects change. It’s particularly useful for observing changes in model objects, updating the UI, or triggering other side effects when a property value changes.

KVO is based on the Foundation framework and is often used in scenarios where you need to observe changes without tightly coupling the observer and the observed object.

**Key Concepts:**
- **Observable Properties:** Properties marked with `@objc dynamic` are observable.
- **Observers:** Objects that observe changes to properties.
- **Change Dictionary:** Provides details about the change (e.g., new and old values).

**Example Use Cases:**
1. Monitoring changes in a user profile.
2. Observing progress updates in a download manager.
3. Tracking state changes in a game or application.

#### Basic Implementation

1. **Create the Observable Class:**

To use KVO, the properties you want to observe must be marked with `@objc dynamic`. This allows KVO to monitor changes to these properties.

```swift
import Foundation

class ScoreManager: NSObject {
    @objc dynamic var score: Int = 0
}
```

2. **Add and Handle Observers:**

Observers will register to watch for changes in the properties of the observable class.

```swift
import Foundation

class ScoreObserver: NSObject {
    var scoreManager = ScoreManager()

    override init() {
        super.init()
        scoreManager.addObserver(self, forKeyPath: #keyPath(ScoreManager.score), options: [.new, .old], context: nil)
    }

    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if keyPath == #keyPath(ScoreManager.score) {
            let newValue = change?[.newKey] as? Int ?? 0
            let oldValue = change?[.oldKey] as? Int ?? 0
            print("Score changed from \(oldValue) to \(newValue)")
        }
    }

    deinit {
        scoreManager.removeObserver(self, forKeyPath: #keyPath(ScoreManager.score))
    }
}
```

In the above example:
- `addObserver(_:forKeyPath:options:context:)` registers the observer to monitor changes to the `score` property.
- `observeValue(forKeyPath:of:change:context:)` is called whenever the observed property changes.

#### Examples

**Example 1: Observing Multiple Properties**

```swift
class User: NSObject {
    @objc dynamic var name: String = ""
    @objc dynamic var age: Int = 0
}

class UserObserver: NSObject {
    var user = User()

    override init() {
        super.init()
        user.addObserver(self, forKeyPath: #keyPath(User.name), options: [.new, .old], context: nil)
        user.addObserver(self, forKeyPath: #keyPath(User.age), options: [.new, .old], context: nil)
    }

    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        switch keyPath {
        case #keyPath(User.name):
            let newName = change?[.newKey] as? String ?? ""
            print("User's name changed to \(newName)")
        case #keyPath(User.age):
            let newAge = change?[.newKey] as? Int ?? 0
            print("User's age changed to \(newAge)")
        default:
            super.observeValue(forKeyPath: keyPath, of: object, change: change, context: context)
        }
    }

    deinit {
        user.removeObserver(self, forKeyPath: #keyPath(User.name))
        user.removeObserver(self, forKeyPath: #keyPath(User.age))
    }
}
```

**Example 2: Handling Changes with Context**

KVO allows for passing a `context` parameter, which can be useful for distinguishing between different observation tasks.

```swift
class Timer: NSObject {
    @objc dynamic var timeRemaining: Int = 0
}

class TimerObserver: NSObject {
    var timer = Timer()
    private let kTimerContext = 0

    override init() {
        super.init()
        timer.addObserver(self, forKeyPath: #keyPath(Timer.timeRemaining), options: [.new, .old], context: &kTimerContext)
    }

    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if context == &kTimerContext {
            let newTime = change?[.newKey] as? Int ?? 0
            print("Time remaining: \(newTime)")
        } else {
            super.observeValue(forKeyPath: keyPath, of: object, change: change, context: context)
        }
    }

    deinit {
        timer.removeObserver(self, forKeyPath: #keyPath(Timer.timeRemaining), context: &kTimerContext)
    }
}
```

**Example 3: Removing Observers Safely**

It’s crucial to remove observers to prevent crashes or unexpected behavior. This should be done in the `deinit` method or when the observer is no longer needed.

```swift
class ScoreObserver: NSObject {
    var scoreManager = ScoreManager()

    override init() {
        super.init()
        scoreManager.addObserver(self, forKeyPath: #keyPath(ScoreManager.score), options: [.new, .old], context: nil)
    }

    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        // Handle the change
    }

    deinit {
        scoreManager.removeObserver(self, forKeyPath: #keyPath(ScoreManager.score))
    }
}
```

**Considerations:**
- **Thread Safety:** KVO notifications are sent on the same thread where the observed property is modified, so ensure thread safety if updating the UI.
- **Performance:** Observing a large number of properties or frequent changes can impact performance. Use KVO judiciously.

KVO is a powerful feature in Swift that allows for efficient and flexible observation of property changes. 

## 🛠️ Closures

Closures in Swift are self-contained blocks of code that can be passed around and executed. They capture and store references to variables and constants from the context in which they are defined, making them a powerful tool for asynchronous programming and callbacks.

**Key Characteristics:**
- **Self-contained:** Closures can be passed around and used in different parts of your code.
- **Capture values:** They capture and store references to variables and constants from their surrounding context.
- **No explicit names required:** Closures can be used anonymously (i.e., without being named).

### 1. **Closure Syntax and Types**

Closures come in three primary forms:

1. **Global Functions** are closures that have a name and do not capture any values.
2. **Nested Functions** are closures that have a name and can capture values from their enclosing function.
3. **Anonymous Closures** (or Closure Expressions) are unnamed closures, often used for short-lived tasks.

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

Closures capture values from their surrounding context. This is known as "capturing values."

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

In the example above, the closure captures the `incrementAmount` and the `total` variable from the surrounding function context.

### 4. **Closure Shorthand Syntax**

Swift provides a shorthand syntax for closures, including:
- **Implicit returns for single-expression closures.**
- **Shorthand argument names (`$0`, `$1`, etc.).**

**Example: Shorthand Syntax**

```swift
let numbers = [1, 2, 3, 4, 5]
let squaredNumbers = numbers.map { $0 * $0 }
print(squaredNumbers) // Output: [1, 4, 9, 16, 25]
```

In the example above, `{ $0 * $0 }` is a shorthand closure that squares each number in the array.

### 5. **Trailing Closure Syntax**

When a closure is the last argument in a function call, you can use trailing closure syntax to make the code cleaner.

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

**Escaping Closure:**  
A closure that is passed as an argument to a function but is executed after the function returns.

**Non-Escaping Closure:**  
A closure that is guaranteed to be executed before the function returns. This is the default behavior.

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

Capture lists help manage memory by defining how captured values should be held (strong, weak, unowned).

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

In the example above, `[weak self]` prevents a strong reference cycle, ensuring that the closure does not retain the `ViewController` instance.


Closures in Swift are a powerful and flexible feature that allows for concise and reusable code. They are used extensively for handling asynchronous operations, capturing values, and providing clean and expressive syntax for callbacks.

## 🛠️ Target-Action

The Target-Action design pattern is used to enable one object to send messages (actions) to another object in response to specific events. This pattern is commonly used in iOS development for handling user interactions with UI elements such as buttons, sliders, and switches. When a user interacts with a UI element, the element sends an action message to its target object, which performs the appropriate response.

**How It Works:**

1. **Target:** The object that will receive and respond to the action.
2. **Action:** The method to be called on the target when the event occurs.
3. **Event:** The specific user interaction or system event that triggers the action.

**Implementation Steps:**

1. **Create the UI Element:**
   Define a UI element such as a UIButton, UISlider, or UISwitch.

2. **Configure the Target-Action:**
   Use the `addTarget(_:action:for:)` method to specify the target object and action method for the event type you want to handle.

3. **Implement the Action Method:**
   Define a method in the target object that will be called when the event occurs. This method should be marked with `@objc` to make it accessible to the Objective-C runtime, which is necessary for the target-action mechanism.

**Detailed Example with UIButton:**

**1. Basic Button Tap Handling:**

```swift
import UIKit

class ViewController: UIViewController {
    private let myButton = UIButton(type: .system)

    override func viewDidLoad() {
        super.viewDidLoad()

        // Setup button properties
        myButton.setTitle("Tap Me", for: .normal)
        myButton.frame = CGRect(x: 100, y: 100, width: 100, height: 50)
        view.addSubview(myButton)
        
        // Set up target-action
        myButton.addTarget(self, action: #selector(buttonTapped), for: .touchUpInside)
    }

    @objc private func buttonTapped() {
        print("Button was tapped")
    }
}
```

**2. Handling Multiple Events:**

You can use the target-action pattern to handle multiple types of events for a single UI element.

```swift
class CustomViewController: UIViewController {
    private let slider = UISlider()
    private let switchControl = UISwitch()

    override func viewDidLoad() {
        super.viewDidLoad()

        // Setup slider properties
        slider.frame = CGRect(x: 100, y: 200, width: 200, height: 30)
        view.addSubview(slider)

        // Set up target-action for slider
        slider.addTarget(self, action: #selector(sliderValueChanged(_:)), for: .valueChanged)
        
        // Setup switch properties
        switchControl.frame = CGRect(x: 100, y: 250, width: 100, height: 30)
        view.addSubview(switchControl)

        // Set up target-action for switch
        switchControl.addTarget(self, action: #selector(switchValueChanged(_:)), for: .valueChanged)
    }

    @objc private func sliderValueChanged(_ sender: UISlider) {
        print("Slider value changed to \(sender.value)")
    }

    @objc private func switchValueChanged(_ sender: UISwitch) {
        print("Switch is \(sender.isOn ? "ON" : "OFF")")
    }
}
```

**3. Dynamic Target Configuration:**

You might want to configure the target dynamically based on certain conditions.

```swift
class DynamicViewController: UIViewController {
    private let button = UIButton(type: .system)
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        button.setTitle("Dynamic Tap", for: .normal)
        button.frame = CGRect(x: 100, y: 100, width: 150, height: 50)
        view.addSubview(button)
        
        // Configure target-action based on some condition
        let shouldHandleTap = true // This could be based on some logic
        if shouldHandleTap {
            button.addTarget(self, action: #selector(dynamicButtonTapped), for: .touchUpInside)
        }
    }

    @objc private func dynamicButtonTapped() {
        print("Dynamic button was tapped")
    }
}
```

**4. Using Target-Action with Custom UI Components:**

You can also use the target-action pattern with custom UI components.

```swift
class CustomButton: UIButton {
    func setup() {
        // Custom setup if needed
        addTarget(self, action: #selector(customButtonTapped), for: .touchUpInside)
    }

    @objc private func customButtonTapped() {
        print("Custom button tapped")
    }
}

class CustomViewController: UIViewController {
    private let customButton = CustomButton()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        customButton.frame = CGRect(x: 100, y: 100, width: 200, height: 50)
        view.addSubview(customButton)
        customButton.setup()
    }
}
```

**5. Handling Actions in Subclasses:**

You might want to handle actions in a subclass of a UI component.

```swift
class CustomButtonSubclass: UIButton {
    override func sendActions(for controlEvents: UIControl.Event) {
        super.sendActions(for: controlEvents)
        if controlEvents.contains(.touchUpInside) {
            print("Custom subclass button tapped")
        }
    }
}

class SubclassViewController: UIViewController {
    private let customButton = CustomButtonSubclass()

    override func viewDidLoad() {
        super.viewDidLoad()
        
        customButton.setTitle("Subclass Button", for: .normal)
        customButton.frame = CGRect(x: 100, y: 100, width: 200, height: 50)
        view.addSubview(customButton)
    }
}
```

The Target-Action pattern is a flexible and powerful way to handle user interactions in iOS development. By setting up targets and actions, you can ensure that your app responds appropriately to user inputs and system events. This pattern is particularly useful for UI elements but can also be adapted for other types of objects and interactions.
