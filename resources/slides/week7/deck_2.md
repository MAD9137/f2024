---
marp: true
theme: default
class:
  - invert
---

# Alerts

An Alert in SwiftUI is a modal dialog that presents important information and optionally requests a response.

### Basic Alert Structure

- **Title**: A string or text view describing the purpose of the alert.
- **Message**: A string or text view providing additional information.
- **Buttons**: One or more buttons for user actions or dismissal.

---

### Creating a Simple Alert

```swift
import SwiftUI

struct SimpleAlertView: View {
    @State private var showAlert = false

    var body: some View {
        Button("Show Alert") {
            showAlert = true
        }
        .alert("Important Message", isPresented: $showAlert) {
            Button("OK", role: .cancel) { }
        }
    }
}

```

---

### Adding Multiple Buttons

```swift
import SwiftUI

struct MultiButtonAlertView: View {
    @State private var showAlert = false

    var body: some View {
        Button("Show Alert") {
            showAlert = true
        }
        .alert("Are you sure?", isPresented: $showAlert) {
            Button("Delete", role: .destructive) {
                print("Item deleted")
            }
            Button("Cancel", role: .cancel) { }
        }
    }
}

```

---

### Displaying Dynamic Content

```swift
import SwiftUI

struct DynamicAlertView: View {
    @State private var showAlert = false
    @State private var alertMessage = ""

    var body: some View {
        VStack {
            Button("Show Success Alert") {
                alertMessage = "Operation was successful!"
                showAlert = true
            }

            Button("Show Error Alert") {
                alertMessage = "Something went wrong."
                showAlert = true
            }
        }
        .alert("Notice", isPresented: $showAlert) {
            Button("OK", role: .cancel) { }
        } message: {
            Text(alertMessage)
        }
    }
}

```

---

# Action Sheets

An Action Sheet slides up from the bottom, presenting multiple options for user selection.

### Basic Action Sheet Structure

- **Title (Optional)**: Describes the context.
- **Message (Optional)**: Provides additional information.
- **Buttons**: List of action options.

---

### Creating a Simple Action Sheet

```swift
import SwiftUI

struct SimpleActionSheetView: View {
    @State private var showActionSheet = false

    var body: some View {
        Button("Show Action Sheet") {
            showActionSheet = true
        }
        .actionSheet(isPresented: $showActionSheet) {
            ActionSheet(title: Text("Choose an Option"), message: Text("Select one of the options below."), buttons: [
                .default(Text("Option 1")) {
                    print("Option 1 selected")
                },
                .default(Text("Option 2")) {
                    print("Option 2 selected")
                },
                .cancel()
            ])
        }
    }
}

```

<!--
- **@State Property**: Controls action sheet visibility.
- **Button**: Triggers action sheet display.
- **actionSheet Modifier**: Presents the action sheet with title, message, and buttons.
-->

---

### Action Sheets with Destructive Options

```swift
import SwiftUI

struct DestructiveActionSheetView: View {
    @State private var showActionSheet = false

    var body: some View {
        Button("Show Destructive Action Sheet") {
            showActionSheet = true
        }
        .actionSheet(isPresented: $showActionSheet) {
            ActionSheet(title: Text("Delete Item"), message: Text("This action cannot be undone."), buttons: [
                .destructive(Text("Delete")) {
                    print("Item deleted")
                },
                .cancel()
            ])
        }
    }
}

```

<!--
Destructive Button: Indicates critical actions.
-->
---

### Action Sheets with Multiple Actions

```swift
import SwiftUI

struct MultiActionSheetView: View {
    @State private var showActionSheet = false

    var body: some View {
        Button("Show Multi-Option Action Sheet") {
            showActionSheet = true
        }
        .actionSheet(isPresented: $showActionSheet) {
            ActionSheet(title: Text("Choose Your Action"), buttons: [
                .default(Text("Save")) {
                    print("Save selected")
                },
                .default(Text("Share")) {
                    print("Share selected")
                },
                .default(Text("Edit")) {
                    print("Edit selected")
                },
                .cancel()
            ])
        }
    }
}

```
<!--
Multiple Default Buttons: Each option represented by a button with its own action.
-->
---

# Best Practices for Using Alerts and Action Sheets

1. **Use Alerts for Critical Information**: Alerts should be used sparingly for critical messages.
2. **Provide Clear and Concise Messages**: Ensure clarity in the title and message.
3. **Use Destructive Buttons Wisely**: Mark critical actions as destructive.
4. **Always Include a Cancel Option**: Allow users to dismiss without action.
5. **Test for Readability on All Devices**: Ensure alerts and action sheets are readable across devices.
6. **Avoid Nesting Alerts or Action Sheets**: Prevent confusion by avoiding nested dialogs.

---

# NavigationLink in SwiftUI

In SwiftUI, `NavigationLink` is used to navigate between views within a `NavigationView`. It creates a button-like element that, when tapped, navigates to a new view.

---

## Basic Syntax

### Content View

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                Text("Welcome to the Main View")
                
                NavigationLink(destination: DetailView()) {
                    Text("Go to Detail View")
                        .font(.headline)
                        .foregroundColor(.blue)
                        .padding()
                        .background(Color.yellow)
                        .cornerRadius(10)
                }
            }
            .navigationTitle("Home")
        }
    }
}
```

---

### Detail View

```swift
struct DetailView: View {
    var body: some View {
        Text("This is the Detail View")
            .font(.largeTitle)
            .padding()
            .navigationTitle("Detail")
    }
}
```

<!--
- `NavigationView` manages navigation.
- `NavigationLink` specifies the view to navigate to via `destination`.
-->
---

## Customizing NavigationLink Appearance

### Content View

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: DetailView()) {
                    HStack {
                        Image(systemName: "arrow.right.circle")
                            .font(.largeTitle)
                            .foregroundColor(.green)
                        Text("Navigate to Detail")
                            .font(.title)
                            .foregroundColor(.black)
                    }
                    .padding()
                    .background(Color.orange)
                    .cornerRadius(15)
                }
            }
            .navigationTitle("Custom Link")
        }
    }
}
```

---

### Detail View

```swift
struct DetailView: View {
    var body: some View {
        Text("Detailed View Content")
            .font(.largeTitle)
            .padding()
            .navigationTitle("Detail")
    }
}
```

<!--
- Customize `NavigationLink` with any view modifier.
- Use images and text to enhance appearance.
-->
---

## Programmatic Navigation

### Content View

```swift
import SwiftUI

struct ContentView: View {
    @State private var shouldNavigate = false
    
    var body: some View {
        NavigationView {
            VStack {
                Toggle("Navigate to Detail", isOn: $shouldNavigate)
                    .padding()
                
                NavigationLink(destination: DetailView(), isActive: $shouldNavigate) {
                    EmptyView()
                }
                .hidden()
            }
            .navigationTitle("Programmatic Navigation")
        }
    }
}
````

---

### Detail View

```swift
struct DetailView: View {
    var body: some View {
        Text("You have arrived at the Detail View")
            .font(.largeTitle)
            .padding()
            .navigationTitle("Detail")
    }
}
```

<!--
- Control navigation using state variables.
- Toggle triggers navigation.
-->
---

## NavigationLink with List

### Content View

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Item 1", "Item 2", "Item 3"]

    var body: some View {
        NavigationView {
            List(items, id: \.self) { item in
                NavigationLink(destination: DetailView(item: item)) {
                    Text(item)
                }
            }
            .navigationTitle("Item List")
        }
    }
}
```
---
### Detail View

```swift
struct DetailView: View {
    var item: String

    var body: some View {
        Text("Detail for \(item)")
            .font(.largeTitle)
            .padding()
            .navigationTitle(item)
    }
}
```

<!--
- Use `NavigationLink` within `List` for dynamic items.
- Each item navigates to a detailed view.
-->
---

# Custom Back Button

## Content View

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            NavigationLink(destination: DetailView()) {
                Text("Navigate to Detail")
                    .font(.headline)
                    .padding()
                    .background(Color.blue)
                    .cornerRadius(10)
                    .foregroundColor(.white)
            }
            .navigationTitle("Home")
        }
    }
}
```

---

## Detail View

```swift
struct DetailView: View {
    var body: some View {
        VStack {
            Text("This is the Detail View")
                .font(.largeTitle)
                .padding()
            
            Spacer()
        }
        .navigationTitle("Detail")
        .navigationBarBackButtonHidden(true)
        .toolbar {
            ToolbarItem(placement: .navigationBarLeading) {
                Button(action: {
                    // Custom back button action
                }) {
                    HStack {
                        Image(systemName: "chevron.left")
                        Text("Back")
                    }
                }
            }
        }
    }
}
```

<!--
- Hide default back button and add a custom one.
- Use `.navigationBarBackButtonHidden(true)` to hide the default.
-->
---

## Passing Data Through NavigationLink

### Content View

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            NavigationLink(destination: DetailView(name: "John Doe")) {
                Text("Navigate with Data")
                    .padding()
                    .background(Color.purple)
                    .cornerRadius(10)
                    .foregroundColor(.white)
            }
            .navigationTitle("Home")
        }
    }
}
```

---

### Detail View

```swift

struct DetailView: View {
    var name: String

    var body: some View {
        Text("Hello, \(name)!")
            .font(.largeTitle)
            .padding()
            .navigationTitle("Personalized Greeting")
    }
}
```

<!--
- Pass data to destination view via initializer.
-->
---

# List

## Basic Usage

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

    var body: some View {
        List(items, id: \.self) { item in
            Text(item)
        }
    }
}
```

<!--
`List` creates a scrollable column of data.
-->
---

## Dynamic Lists

```swift
import SwiftUI

struct Fruit: Identifiable {
    let id = UUID()
    let name: String
}

struct ContentView: View {
    @State private var fruits = [
        Fruit(name: "Apple"),
        Fruit(name: "Banana"),
        Fruit(name: "Cherry")
    ]

    var body: some View {
        List(fruits) { fruit in
            Text(fruit.name)
        }
    }
}
```

<!--
- Use `Identifiable` for dynamic lists.
- `@State` allows list updates.
-->
---

## Customizing List Rows

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        List(items, id: \.self) { item in
            HStack {
                Image(systemName: "fruit")
                Text(item)
                    .font(.headline)
                Spacer()
                Image(systemName: "star")
            }
            .padding()
        }
    }
}
```

<!--
- Customize rows with `HStack` and other views.
-->
---

## Using ForEach Inside List

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        List {
            ForEach(items, id: \.self) { item in
                Text(item)
            }
        }
    }
}
```

<!--
- `ForEach` provides more flexibility within `List`.
-->
---

## Editing and Deleting Items

```swift
import SwiftUI

struct ContentView: View {
    @State private var items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        List {
            ForEach(items, id: \.self) { item in
                Text(item)
            }
            .onDelete(perform: delete)
            .onMove(perform: move)
        }
        .toolbar {
            EditButton()
        }
    }

    func delete(at offsets: IndexSet) {
        items.remove(atOffsets: offsets)
    }

    func move(from source: IndexSet, to destination: Int) {
        items.move(fromOffsets: source, toOffset: destination)
    }
}
```

<!--
- Use `.onDelete` and `.onMove` for item management.
- `EditButton` toggles edit mode.
-->
---

## Sectioning in Lists

```swift
import SwiftUI

struct ContentView: View {
    let fruits = ["Apple", "Banana", "Cherry"]
    let vegetables = ["Carrot", "Broccoli", "Spinach"]

    var body: some View {
        List {
            Section(header: Text("Fruits")) {
                ForEach(fruits, id: \.self) { fruit in
                    Text(fruit)
                }
            }
            Section(header: Text("Vegetables")) {
                ForEach(vegetables, id: \.self) { vegetable in
                    Text(vegetable)
                }
            }
        }
    }
}
```

<!--
- Use `Section` for grouping items.
-->
---

## Custom List Styles

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        List(items, id: \.self) { item in
            Text(item)
                .padding()
                .background(Color.yellow)
                .cornerRadius(8)
        }
        .listStyle(GroupedListStyle())
    }
}
```

<!--
- Modify list appearance with `listStyle`.
-->
---

## List with Navigation

```swift
import SwiftUI

struct DetailView: View {
    let item: String

    var body: some View {
        Text("Details for \(item)")
            .font(.largeTitle)
    }
}

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        NavigationView {
            List(items, id: \.self) { item in
                NavigationLink(destination: DetailView(item: item)) {
                    Text(item)
                }
            }
            .navigationTitle("Fruits")
        }
    }
}
```

<!--
- Combine `List` with `NavigationView` and `NavigationLink` for navigable lists.
-->

---

# Sheets

Sheets in SwiftUI are a modal presentation style that overlays a view on top of another view. Ideal for showing additional context or forms without leaving the current screen.

---

## Basic Usage

To present a sheet in SwiftUI, use the `sheet` modifier with a condition.

```swift
import SwiftUI

struct ContentView: View {
    @State private var isSheetPresented = false

    var body: some View {
        VStack {
            Button("Show Sheet") {
                isSheetPresented = true
            }
            .sheet(isPresented: $isSheetPresented) {
                Text("Hello, this is a sheet!")
                    .font(.largeTitle)
                    .padding()
            }
        }
    }
}
```

<!--
- `@State private var isSheetPresented`: Manages sheet presentation.
- `.sheet(isPresented: $isSheetPresented)`: Shows the sheet when the condition is true.
-->

---

## Binding Sheets

Pass data or interact with the sheet using bindings.

```swift
import SwiftUI

struct ContentView: View {
    @State private var isSheetPresented = false
    @State private var textToDisplay = "Hello from ContentView!"

    var body: some View {
        VStack {
            Button("Show Sheet") {
                isSheetPresented = true
            }
            .sheet(isPresented: $isSheetPresented) {
                SheetView(text: $textToDisplay)
            }
        }
    }
}
```

---

```swift
struct SheetView: View {
    @Binding var text: String

    var body: some View {
        VStack {
            Text(text)
                .font(.largeTitle)
                .padding()
            Button("Change Text") {
                text = "Text updated from SheetView!"
            }
        }
    }
}
```

<!--
- `@Binding var text: String`: Allows two-way communication between views.
- Button updates `text`, reflecting changes in both views.
-->
---

## Customizing the Sheet Presentation

Customize appearance, size, and behavior of sheets.

```swift
import SwiftUI

struct ContentView: View {
    @State private var isSheetPresented = false

    var body: some View {
        VStack {
            Button("Show Sheet") {
                isSheetPresented = true
            }
            .sheet(isPresented: $isSheetPresented) {
                SheetView()
                    .frame(width: 300, height: 400) // Custom size
            }
        }
    }
}
```

---

```swift
struct SheetView: View {
    var body: some View {
        VStack {
            Text("This is a customized sheet!")
                .font(.largeTitle)
                .padding()
            Spacer()
        }
    }
}
```

<!--
- `.frame(width:height:)`: Sets custom size of the sheet.
-->
---

## Interaction Between Views

Manage interactions between presenting view and sheet.

```swift
import SwiftUI

struct ContentView: View {
    @State private var isSheetPresented = false

    var body: some View {
        VStack {
            Button("Show Sheet") {
                isSheetPresented = true
            }
            .sheet(isPresented: $isSheetPresented) {
                SheetView(isPresented: $isSheetPresented)
            }
        }
    }
}
```

---

```swift
struct SheetView: View {
    @Binding var isPresented: Bool

    var body: some View {
        VStack {
            Text("Tap to dismiss")
                .font(.largeTitle)
                .padding()
            Button("Dismiss") {
                isPresented = false
            }
        }
    }
}
```

<!--
- `@Binding var isPresented: Bool`: Controls the sheet’s presentation state.
- Button sets `isPresented` to false, dismissing the sheet.
-->
---

# TabView

`TabView` is a container for creating tabbed navigation, similar to UITabBarController in UIKit.

---

## Basic Usage

Wrap views in `TabView` and use `tabItem` to define tabs.

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            Text("Home View")
                .tabItem {
                    Image(systemName: "house.fill")
                    Text("Home")
                }
            
            Text("Settings View")
                .tabItem {
                    Image(systemName: "gearshape.fill")
                    Text("Settings")
                }
        }
    }
}
```

<!--
- `TabView`: Container for tabs.
- `.tabItem`: Defines each tab’s icon and title.
-->
---

## Customizing Tab Items

Customize tab items with colors, badges, and images.

```swift
import SwiftUI

struct CustomTabView: View {
    var body: some View {
        TabView {
            Text("Profile View")
                .tabItem {
                    Image(systemName: "person.fill")
                        .renderingMode(.original)
                    Text("Profile")
                }
                .badge(3)
            
            Text("Messages View")
                .tabItem {
                    Image(systemName: "message.fill")
                        .renderingMode(.original)
                    Text("Messages")
                }
                .badge(5)
        }
    }
}
```

<!--
- `.renderingMode(.original)`: Keeps original icon color.
- `.badge(_:): Adds a notification badge.
-->
---

## Custom Tab Bar

Create a fully customized tab bar.

```swift
import SwiftUI

struct CustomTabBarView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Label("Home", systemImage: "house.fill")
                }
            
            SettingsView()
                .tabItem {
                    Label("Settings", systemImage: "gearshape.fill")
                }
        }
        .accentColor(.purple)
    }
}
```

---

```swift
struct HomeView: View {
    var body: some View {
        Text("Welcome to Home")
    }
}

struct SettingsView: View {
    var body: some View {
        Text("Settings Page")
    }
}
```

<!--
- `.accentColor(_:): Customizes selected tab color.
-->
---

## Dynamic Tab Items

Generate tab items dynamically.

```swift
import SwiftUI

struct DynamicTabView: View {
    let tabs = ["Home", "Settings", "Profile"]
    
    var body: some View {
        TabView {
            ForEach(tabs, id: \.self) { tab in
                Text("\(tab) View")
                    .tabItem {
                        Image(systemName: "star.fill")
                        Text(tab)
                    }
            }
        }
    }
}
```

<!--
- `ForEach`: Generates tab items based on an array.
-->
---

## Handling Tab Selection

Track selected tab changes.

```swift
import SwiftUI

struct TabSelectionView: View {
    @State private var selectedTab = 0
    
    var body: some View {
        TabView(selection: $selectedTab) {
            Text("First View")
                .tabItem {
                    Text("First")
                }
                .tag(0)
            
            Text("Second View")
                .tabItem {
                    Text("Second")
                }
                .tag(1)
        }
        .onChange(of: selectedTab) { newValue in
            print("Selected tab: \(newValue)")
        }
    }
}
```

<!--
- `@State private var selectedTab`: Tracks selected tab.
- `.onChange(of:perform:)`: Responds to tab changes.
-->
---

## Advanced Customization

Combine `TabView` with other components.

```swift
import SwiftUI

struct AdvancedTabView: View {
    var body: some View {
        TabView {
            NavigationView {
                Text("Home View")
                    .navigationTitle("Home")
            }
            .tabItem {
                Image(systemName: "house.fill")
                Text("Home")
            }
            
            NavigationView {
                Text("Profile View")
                    .navigationTitle("Profile")
            }
            .tabItem {
                Image(systemName: "person.fill")
                Text("Profile")
            }
        }
    }
}
```

<!--
- `NavigationView`: Allows navigation within each tab.
-->
---

# Form

A `Form` is used for presenting a collection of form elements, suitable for user input and settings screens.

---

## Basic Structure

Create a form with various controls like `TextField`, `Toggle`, `Slider`, and `Picker`.

```swift
import SwiftUI

struct ContentView: View {
    @State private var name: String = ""
    @State private var age: Int = 18
    @State private var isSubscribed: Bool = false
    @State private var selectedColor: Color = .blue

    var body: some View {
        Form {
            Section(header: Text("Personal Information")) {
                TextField("Name", text: $name)
                Stepper(value: $age, in: 0...100) {
                    Text("Age: \(age)")
                }
            }
            
            Section(header: Text("Preferences")) {
                Toggle("Subscribe to Newsletter", isOn: $isSubscribed)
                
                Picker("Favorite Color", selection: $selectedColor) {
                    Text("Red").tag(Color.red)
                    Text("Green").tag(Color.green)
                    Text("Blue").tag(Color.blue)
                }
                .pickerStyle(SegmentedPickerStyle())
            }
        }
    }
}
```

<!--
- `Section`: Organizes form elements.
- `TextField`, `Toggle`, `Slider`, `Picker`: Different controls for user input.
-->
---

## Key Components

- **Section**: Divides the form into parts.
- **TextField**: For text input.
- **Toggle**: For on/off switches.
- **Slider**: For selecting a range value.
- **Picker**: For selecting from options

---

## Advanced Form Handling

Manage complex forms with multiple sections and validation.

```swift
import SwiftUI

struct AdvancedFormView: View {
    @State private var username: String = ""
    @State private var password: String = ""
    @State private var termsAccepted: Bool = false
    
    var body: some View {
        Form {
            Section(header: Text("Account Info")) {
                TextField("Username", text: $username)
                    .autocapitalization(.none)
                
                SecureField("Password", text: $password)
            }
            
            Section(header: Text("Terms and Conditions")) {
                Toggle("I accept the terms and conditions", isOn: $termsAccepted)
            }
            
            Button("Submit") {
                if username.isEmpty || password.isEmpty {
                    print("Please fill in all fields.")
                } else if !termsAccepted {
                    print("You must accept the terms and conditions.")
                } else {
                    print("Form submitted successfully!")
                }
            }
        }
    }
}
```

<!--
- `SecureField`: For password input.
- Validation checks before submission.
-->
---

## Styling Forms

Customize form appearance.

```swift
import SwiftUI

struct StyledFormView: View {
    @State private var name: String = ""
    @State private var email: String = ""

    var body: some View {
        Form {
            Section(header: Text("Contact Info").font(.headline)) {
                TextField("Name", text: $name)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                
                TextField("Email", text: $email)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .keyboardType(.emailAddress)
            }
        }
        .background(Color(.systemGray6))
        .cornerRadius(10)
    }
}
```

<!--
- `textFieldStyle(RoundedBorderTextFieldStyle())`: Custom text field style.
- `.background(Color(.systemGray6))`: Form background color.
- `.cornerRadius(10)`: Rounded corners for the form.
-->
---

## Dynamic Forms

Generate form elements dynamically.

```swift
import SwiftUI

struct DynamicFormView: View {
    let fields = ["Name", "Email", "Phone Number"]
    @State private var values: [String] = Array(repeating: "", count: 3)

    var body: some View {
        Form {
            ForEach(fields.indices, id: \.self) { index in
                TextField(fields[index], text: $values[index])
            }
        }
    }
}
```

<!--
- `ForEach`: Creates form fields dynamically based on an array.
-->
---

# ForEach


In SwiftUI, **ForEach** is a powerful and versatile view that is used to create multiple views dynamically. It is particularly useful for generating lists or collections of views based on data.

---

# What is ForEach?

- **ForEach** is a view that iterates over a collection of data, generating a view for each item.
- Commonly used in conjunction with lists and other container views to dynamically display data.

---

# Basic Syntax

```swift
ForEach(data) { item in
    // View for each item
}
```

**Parameters:**
- `data`: A collection of data items (e.g., an array or range).
- `item`: The current item in the iteration.

<!-- Notes:
Explain that ForEach dynamically generates views and how it fits into SwiftUI's declarative framework.
-->

---

# Using ForEach with Arrays

### Example: Displaying a List of Strings

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        VStack {
            ForEach(items, id: \.self) { item in
                Text(item)
                    .font(.headline)
            }
        }
    }
}
```

<!-- Notes:
Highlight the importance of `id: \.self` for unique identification of strings in the array.
-->

---

# Explanation of Array Example

- `items`: An array of strings.
- `id: \.self`: Tells **ForEach** to use the string itself as a unique identifier.

<!-- Notes:
Emphasize that `id: \.self` is a simple way to uniquely identify items in basic collections.
-->

---

# Using ForEach with Identifiable Data

### Example: Displaying a List of Custom Data

```swift
import SwiftUI

struct Item: Identifiable {
    var id = UUID()
    var name: String
}

struct ContentView: View {
    let items = [
        Item(name: "Apple"),
        Item(name: "Banana"),
        Item(name: "Cherry")
    ]

    var body: some View {
        VStack {
            ForEach(items) { item in
                Text(item.name)
                    .font(.headline)
            }
        }
    }
}
```

<!-- Notes:
Discuss the benefits of conforming custom data models to the Identifiable protocol for unique identification.
-->

---

# Explanation of Custom Data Example

- `Item`: A custom data model conforming to **Identifiable**.
- `id`: A unique identifier using `UUID()`.
- **ForEach** automatically uses the `id` property to identify each item.

<!-- Notes:
Explain the convenience of automatic `id` usage in ForEach with Identifiable types.
-->

---

# ForEach with Ranges

### Example: Generating a Grid of Numbers

```swift
import SwiftUI

struct ContentView: View {
    let range = 1...5

    var body: some View {
        VStack {
            ForEach(range, id: \.self) { number in
                Text("Number \(number)")
                    .font(.headline)
            }
        }
    }
}
```

<!-- Notes:
Illustrate the use of ranges with ForEach to create sequences or repeated views.
-->

---

# Explanation of Range Example

- `range`: A range of integers from 1 to 5.
- `id: \.self`: Uses the number itself as a unique identifier.

<!-- Notes:
Highlight the flexibility of ForEach with numeric ranges for dynamic content creation.
-->

---

# Using ForEach in Lists

### Example: List of Items

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        List {
            ForEach(items, id: \.self) { item in
                Text(item)
            }
        }
    }
}
```

<!-- Notes:
Describe how ForEach works seamlessly within List views to create rows dynamically.
-->

---

# Advanced Usage

## Conditional Views

### Example: Conditional Styling

```swift
import SwiftUI

struct ContentView: View {
    let items = ["Apple", "Banana", "Cherry"]

    var body: some View {
        VStack {
            ForEach(items, id: \.self) { item in
                Text(item)
                    .font(.headline)
                    .foregroundColor(item == "Banana" ? .yellow : .black)
            }
        }
    }
}
```

<!-- Notes:
Show the flexibility of ForEach for applying conditional logic and styling within loops.
-->

---

# Nested ForEach

### Example: Nested ForEach

```swift
import SwiftUI

struct ContentView: View {
    let rows = [
        ["A", "B", "C"],
        ["D", "E", "F"],
        ["G", "H", "I"]
    ]

    var body: some View {
        VStack {
            ForEach(rows, id: \.self) { row in
                HStack {
                    ForEach(row, id: \.self) { item in
                        Text(item)
                            .padding()
                            .background(Color.gray.opacity(0.2))
                            .cornerRadius(5)
                    }
                }
            }
        }
    }
}
```

<!-- Notes:
Demonstrate how nested ForEach loops can build complex, grid-like layouts efficiently.
-->

---

# Best Practices

- **Unique Identifiers**: Ensure each item has a unique identifier to avoid rendering issues.
- **Performance**: Optimize data structures and view updates for large data sets.
- **Dynamic Content**: Use ForEach to keep your UI responsive and adaptable.

---

# Questions?