---
marp: true
theme: default
class:
  - invert
---

# Data Binding in SwiftUI

SwiftUI uses data binding to keep the UI in sync with data. Key property wrappers: `@State`, `@ObservedObject`, `@EnvironmentObject`, and `@Published`.

---

# 🛠️ `@State`

- Manages simple state within a view.
- Suitable for data that belongs to a single view.

```swift
import SwiftUI

struct CounterView: View {
    @State private var count: Int = 0

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
        .padding()
    }
}
```

^ Presentation Note: Discuss how `@State` allows the view to respond to user interaction by updating its local state.

---

# 🛠️ `@ObservedObject`

- Manages state across multiple views.
- Works with classes conforming to `ObservableObject`.

```swift
import SwiftUI
import Combine

class TodoItem: Identifiable, ObservableObject {
    let id = UUID()
    @Published var title: String
    @Published var isCompleted: Bool
    
    init(title: String, isCompleted: Bool = false) {
        self.title = title
        self.isCompleted = isCompleted
    }
}

class TodoList: ObservableObject {
    @Published var items: [TodoItem] = []
    
    func addItem(title: String) {
        let newItem = TodoItem(title: title)
        items.append(newItem)
    }
}
```

^ Presentation Note: Highlight the use of `@ObservedObject` to manage complex state shared across views.

---

# 🛠️ `@EnvironmentObject`

- Used for sharing data across multiple views.
- Ideal for global data sources.

```swift
import SwiftUI

class UserSettings: ObservableObject {
    @Published var username: String = "John Doe"
}

struct SettingsView: View {
    @EnvironmentObject var settings: UserSettings

    var body: some View {
        VStack {
            Text("Username: \(settings.username)")
                .font(.title)
            NavigationLink(destination: EditSettingsView()) {
                Text("Edit Settings")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding()
    }
}
```

^ Presentation Note: Explain `@EnvironmentObject` for global state that needs to be accessible in multiple views.

---

# 🛠️ `@Published`

- Used within `ObservableObject` classes.
- Notifies observers when the value changes.

```swift
import SwiftUI
import Combine

class Stock: ObservableObject {
    @Published var price: Double
    
    init(price: Double) {
        self.price = price
    }
    
    func updatePrice(to newPrice: Double) {
        price = newPrice
    }
}
```

^ Presentation Note: Describe how `@Published` is used to automatically update the UI when data changes.

---

# Data Flow in SwiftUI

1. **Source of Truth**: Data originates from a source (`ObservableObject` or `@State`).
2. **Binding**: Data is passed to views via property wrappers (`@State`, `@ObservedObject`, `@EnvironmentObject`).
3. **UI Updates**: Changes in data automatically update the UI.

---

# Example: Combining All Concepts

- Combines `@State`, `@ObservedObject`, `@EnvironmentObject`, and `@Published`.

```swift
import SwiftUI
import Combine

class AppSettings: ObservableObject {
    @Published var themeColor: Color = .blue
    @Published var username: String = "User"
}

struct ContentView: View {
    @EnvironmentObject var settings: AppSettings

    var body: some View {
        VStack {
            Text("Hello, \(settings.username)!")
                .font(.largeTitle)
                .foregroundColor(settings.themeColor)
            
            NavigationLink(destination: SettingsView()) {
                Text("Go to Settings")
                    .padding()
                    .background(settings.themeColor)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding()
    }
}
```

^ Presentation Note: Show how different property wrappers interact to maintain a responsive UI.

---

# Key Takeaways

- `@State`: Simple view-local state.
- `@ObservedObject`: Complex or shared data between a few views.
- `@EnvironmentObject`: Global data accessible across many views.
- `@Published`: Triggers UI updates for `ObservableObject` properties.

^ Presentation Note: Conclude with a summary of when to use each property wrapper in SwiftUI.
```