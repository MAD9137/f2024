---
marp: true
theme: default
class:
  - invert
---

# Imperative Programming

Imperative programming focuses on describing **how** a program should achieve a specific result. It involves writing explicit instructions for the computer to follow, step by step.

---

## Example in Swift:

```swift
var numbers: [Int] = []

for i in 1...5 {
    numbers.append(i)
}

for number in numbers {
    print(number)
}
```

---

# Declarative Programming

Declarative programming focuses on **what** the program should achieve rather than how to achieve it. You specify the desired outcome and let the underlying system figure out how to implement it.

---

## Example in Swift:

```swift
let numbers = (1...5).map { $0 }
numbers.forEach { print($0) }
```

---

# Fundamentals of SwiftUI

SwiftUI is a framework introduced by Apple that enables you to build user interfaces using a declarative approach.

---

# Basic Components

- **Views**: Building blocks of interfaces (e.g., `Text`, `Image`, `Button`).
- **Modifiers**: Configure and customize views.

---

# View

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

---

# Modifiers 

```swift
Text("Styled Text")
    .font(.headline)
    .padding()
    .background(Color.yellow)
    .cornerRadius(10)
```

---

# State Management

SwiftUI uses property wrappers like `@State` to manage state within a view.

---

# Example: Counter

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
---

# Layouts in SwiftUI

SwiftUI provides layout containers like `HStack`, `VStack`, and `ZStack` to organize views.

---

## Example: Layout Views

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

---

# Code Walkthrough: The Incrementer

Clone the repo: `git@github.com:AlgonquinCollegeMAD/the-incrementer.git`.

This code defines a simple app view for incrementing and resetting a number.

---

# Code Walkthrough: The Incrementer

### SwiftUI Components

```swift
import SwiftUI

struct ContentView: View {
    @State var myNumber = 0

    var body: some View {
        VStack {
            Text("\(myNumber)")
                .font(.largeTitle)
                .foregroundColor(.white)
                .padding()
                .background(
                    Circle()
                        .foregroundColor(.red)
                )
            HStack {
                Button("Increment") { myNumber += 1 }
                Button("Reset") { myNumber = 0 }
            }
        }
    }
}
```

---

# Questions?
