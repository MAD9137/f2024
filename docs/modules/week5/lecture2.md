
# 🚀 SwiftUI Basics

## 🛠️ Imperative Programming

Imperative programming focuses on describing **how** a program should achieve a specific result. It involves writing explicit instructions for the computer to follow, step by step. This approach is typically more concerned with the sequence of operations and the state of the program at each step.

**Example in Swift:**

Imagine you want to create a list of numbers from 1 to 5 and then print them. In imperative programming, you would write code like this:

```swift
var numbers: [Int] = []

for i in 1...5 {
    numbers.append(i)
}

for number in numbers {
    print(number)
}
```

In this example:
- You first initialize an empty array.
- Then you use a loop to add numbers to the array.
- Finally, you print each number.

## 🛠️ Declarative Programming

Declarative programming, on the other hand, focuses on **what** the program should achieve rather than how to achieve it. You specify the desired outcome and let the underlying system figure out how to implement it. This approach abstracts away the control flow and state management details.

**Example in Swift:**

Using Swift’s `map` function, you can achieve the same result in a more declarative way:

```swift
let numbers = (1...5).map { $0 }
numbers.forEach { print($0) }
```

In this example:
- `map` transforms each element in the range into a new array.
- `forEach` prints each element.

## 🛠️ Fundamentals of SwiftUI

SwiftUI is a framework introduced by Apple that enables you to build user interfaces using a declarative approach. With SwiftUI, you describe the UI and its state, and the framework handles the details of updating the interface when the state changes.

### Basic Components

1. **Views**: The building blocks of SwiftUI interfaces. Common views include `Text`, `Image`, `Button`, and `List`.

**Example:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("Hello, World!")
                .font(.largeTitle)
                .foregroundColor(.blue)
            
            Button(action: {
                print("Button tapped")
            }) {
                Text("Tap Me")
                    .padding()
                    .background(Color.gray)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
    }
}
```

In this example:
- `Text` displays a string.
- `Button` performs an action when tapped.
- `VStack` arranges its children vertically.

2. **Modifiers**: Methods used to configure and customize views.

**Example:**

```swift
Text("Styled Text")
    .font(.headline)
    .padding()
    .background(Color.yellow)
    .cornerRadius(10)
```

Here, `font`, `padding`, `background`, and `cornerRadius` are modifiers that apply styles to the `Text` view.

3. **State Management**: SwiftUI uses property wrappers like `@State` to manage state within a view.

**Example:**

```swift
import SwiftUI

struct CounterView: View {
    @State private var count = 0

    var body: some View {
        VStack {
            Text("Count: \(count)")
                .font(.largeTitle)

            Button(action: {
                count += 1
            }) {
                Text("Increment")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
    }
}
```

In this example:
- `@State` declares a mutable state variable.
- When the button is tapped, the `count` variable is updated, and the view re-renders to reflect the new state.

4. **Layouts**: SwiftUI provides various layout containers like `HStack`, `VStack`, and `ZStack` to organize views.

**Example:**

```swift
import SwiftUI

struct LayoutView: View {
    var body: some View {
        ZStack {
            Color.blue
                .edgesIgnoringSafeArea(.all)
            
            VStack {
                Text("Top")
                    .foregroundColor(.white)
                
                Spacer()
                
                Text("Bottom")
                    .foregroundColor(.white)
            }
        }
    }
}
```

In this example:
- `ZStack` layers its children on top of each other.
- `VStack` arranges views vertically.

## 🛠️ Code walkthrough

Now, let us clone the repo at `git@github.com:AlgonquinCollegeMAD/the-incrementer.git` (The Incrementer) and try to understand the code.

This SwiftUI code defines a simple app view for incrementing and reseting a number. Here’s a breakdown of each part:

### Importing SwiftUI

```swift
import SwiftUI
```

This imports the SwiftUI framework, which is necessary for creating the user interface.

### Struct Definition

```swift
struct ContentView: View {
```

Defines a `ContentView` struct that conforms to the `View` protocol, meaning it represents a piece of UI in SwiftUI.

### State Variable

```swift
@State var myNumber = 0
```

- `@State` is a property wrapper that allows the view to manage mutable state. Here, `myNumber` is initialized to `0`.
- The `@State` wrapper makes `myNumber` reactive. When its value changes, SwiftUI automatically updates the view.

### Body of the View

```swift
var body: some View {
  VStack {
```

- `var body: some View` defines the view's layout and contents.
- `VStack` arranges its child views vertically.

### Displaying the Number

```swift
Text("\(myNumber)")
  .font(.largeTitle)
  .foregroundColor(.white)
  .padding()
  .background(
    Circle()
      .foregroundColor(.red)
  )
```

- `Text("\(myNumber)")` displays the current value of `myNumber`.
- `.font(.largeTitle)` sets the text size.
- `.foregroundColor(.white)` sets the text color to white.
- `.padding()` adds space around the text.
- `.background(...)` sets the background of the text to a red circle.

### Buttons for Incrementing and Resetting

```swift
HStack {
  Button("Increment") {
    myNumber += 1
  }
  
  Button("Reset") {
    myNumber = 0
  }
}
```

- `HStack` arranges its child views horizontally.
- Two `Button` views are created:
  - The "Increment" button increases `myNumber` by 1 when pressed.
  - The "Reset" button sets `myNumber` back to 0.

### Preview

```swift
#Preview {
  ContentView()
}
```

- This is used to generate a preview of the `ContentView` in Xcode’s canvas. It shows how the `ContentView` will look when rendered.

Overall, this code creates a simple SwiftUI interface with a number displayed in a red circle and two buttons to increment and reset the number.

Understanding the difference between imperative and declarative programming helps you appreciate the design philosophy behind SwiftUI. SwiftUI simplifies UI development by allowing you to focus on **what** the UI should do rather than **how** to implement it, leveraging declarative programming principles. The use of views, modifiers, state management, and layout containers in SwiftUI enables you to build responsive and dynamic user interfaces efficiently.
