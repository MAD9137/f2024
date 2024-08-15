# 🚀 Data Binding

Data binding is a key concept in SwiftUI that allows your app's user interface to stay in sync with the underlying data. In SwiftUI, data binding is achieved through various property wrappers like `@State`, `@ObservedObject`, `@EnvironmentObject`, and `@Published`. These wrappers help manage the flow of data between the UI and the data models, making your app more reactive and easier to maintain.

## 🛠️ `@State`

The `@State` property wrapper is used to manage simple state within a SwiftUI view. It is most suitable for data that belongs to a single view and doesn't need to be shared with other views.

### Example: Counter App

Let's start with a simple example—a counter app where you press a button to increase a counter.

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

struct CounterView_Previews: PreviewProvider {
    static var previews: some View {
        CounterView()
    }
}
```

### Explanation

- `@State` is used to declare the `count` variable. 
- The `Text` view displays the current count, and it updates automatically when the `count` changes.
- The `Button` increments the `count` each time it’s pressed.

### Important Notes

- `@State` variables are private to the view they are defined in.
- They should be simple types like `Int`, `String`, or even custom structs, but they shouldn't be used for complex models.

## 🛠️ `@ObservedObject`

`@ObservedObject` is used when you need to manage state across multiple views or when the state is more complex. It works with classes that conform to the `ObservableObject` protocol.

### Example: Todo List App

Let's create a simple Todo list where items can be added dynamically.

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

struct TodoListView: View {
    @ObservedObject var todoList = TodoList()

    @State private var newItemTitle: String = ""

    var body: some View {
        VStack {
            TextField("New item", text: $newItemTitle)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
            
            Button(action: {
                todoList.addItem(title: newItemTitle)
                newItemTitle = ""
            }) {
                Text("Add Item")
                    .padding()
                    .background(Color.green)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            
            List {
                ForEach(todoList.items) { item in
                    HStack {
                        Text(item.title)
                        Spacer()
                        if item.isCompleted {
                            Image(systemName: "checkmark.circle")
                        }
                    }
                }
            }
        }
        .padding()
    }
}

struct TodoListView_Previews: PreviewProvider {
    static var previews: some View {
        TodoListView()
    }
}
```

### Explanation

- `TodoItem` and `TodoList` are classes that conform to `ObservableObject`.
- `TodoItem` uses `@Published` to notify any observing views about changes to its properties.
- `TodoList` manages an array of `TodoItem` and can add new items.
- `@ObservedObject` is used in `TodoListView` to observe changes in the `TodoList`.

### Important Notes

- `@ObservedObject` is great for observing data in a single view. However, if you need to share this data across many views, consider using `@EnvironmentObject`.

## 🛠️ `@EnvironmentObject`

### What is `@EnvironmentObject`?

`@EnvironmentObject` allows you to share data across multiple views in a SwiftUI app. It is typically used when you have a global data source that needs to be accessed by many views.

### Example: User Settings

Let's build a simple app that displays user settings across multiple views.

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

struct EditSettingsView: View {
    @EnvironmentObject var settings: UserSettings
    @State private var newUsername: String = ""

    var body: some View {
        VStack {
            TextField("New username", text: $newUsername)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
            
            Button(action: {
                settings.username = newUsername
            }) {
                Text("Save")
                    .padding()
                    .background(Color.green)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding()
    }
}

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            NavigationView {
                SettingsView()
            }
            .environmentObject(UserSettings())
        }
    }
}
```

### Explanation

- `UserSettings` is a global data source using `@EnvironmentObject`.
- The `SettingsView` and `EditSettingsView` both access `UserSettings` via `@EnvironmentObject`.
- Changes made in `EditSettingsView` are automatically reflected in `SettingsView`.

### Important Notes

- `@EnvironmentObject` requires that the object be provided at a higher level in the view hierarchy, typically at the root of your app or a major view.
- Failing to inject the `@EnvironmentObject` will cause your app to crash.

## 🛠️ `@Published`

`@Published` is a property wrapper used within an `ObservableObject` to automatically notify observers when the value changes. This is a crucial part of making your data reactive.

### Example: Stock Ticker

Let's create a simple stock ticker that updates the price of a stock and notifies the UI.

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

struct StockView: View {
    @ObservedObject var stock: Stock
    
    var body: some View {
        VStack {
            Text("Stock Price: \(stock.price)")
                .font(.largeTitle)
            Button(action: {
                stock.updatePrice(to: Double.random(in: 100...500))
            }) {
                Text("Update Price")
                    .padding()
                    .background(Color.red)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding()
    }
}

struct StockView_Previews: PreviewProvider {
    static var previews: some View {
        StockView(stock: Stock(price: 250))
    }
}
```

### Explanation

- The `Stock` class has a `price` property marked with `@Published`.
- When `price` changes, any view observing this object (like `StockView`) is automatically updated.

### Important Notes

- `@Published` should be used for properties in an `ObservableObject` that you expect to change and trigger UI updates.

## 🛠️ The Flow of Data Binding

### The Data Flow in SwiftUI

Data binding in SwiftUI is a unidirectional flow:

1. **Source of Truth:** The data originates from a source, often an `ObservableObject` or `@State`.
2. **Binding:** The data is passed to views via property wrappers (`@State`, `@ObservedObject`, `@EnvironmentObject`).
3. **UI Updates:** When the data changes, SwiftUI automatically updates the UI.

### Example: Combining Everything

Let's create an app that combines `@State`, `@ObservedObject`, `@EnvironmentObject`, and `@Published`.

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
                .foregroundColor(settings

.themeColor)
            
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

struct SettingsView: View {
    @EnvironmentObject var settings: AppSettings

    var body: some View {
        VStack {
            TextField("Username", text: $settings.username)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
            
            ColorPicker("Select Theme Color", selection: $settings.themeColor)
                .padding()

            NavigationLink(destination: ProfileView()) {
                Text("Go to Profile")
                    .padding()
                    .background(settings.themeColor)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding()
    }
}

struct ProfileView: View {
    @EnvironmentObject var settings: AppSettings

    var body: some View {
        VStack {
            Text("Username: \(settings.username)")
                .font(.title)
                .foregroundColor(settings.themeColor)

            Text("Favorite Color:")
                .font(.title2)
                .foregroundColor(settings.themeColor)
        }
        .padding()
    }
}

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            NavigationView {
                ContentView()
            }
            .environmentObject(AppSettings())
        }
    }
}
```

### Explanation

- `AppSettings` is the global data source using `@EnvironmentObject`.
- `ContentView`, `SettingsView`, and `ProfileView` all share the same `AppSettings` object.
- Changing the username or theme color in `SettingsView` will reflect across all views.

SwiftUI’s data binding system is powerful and flexible, allowing you to keep your user interface and data in sync effortlessly. By mastering `@State`, `@ObservedObject`, `@EnvironmentObject`, and `@Published`, you can build dynamic, reactive apps that respond to user input and data changes with ease. 

Remember that the choice of which property wrapper to use depends on the scope and complexity of the data you're working with:

- Use `@State` for simple, view-local state.
- Use `@ObservedObject` for complex or shared data between a few views.
- Use `@EnvironmentObject` for global data that needs to be accessed across many views.
- Use `@Published` to mark properties within an `ObservableObject` that should trigger UI updates when they change.
