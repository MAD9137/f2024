# 🤯 Exercises

Here are five progressively more complex code questions based on your lecture content:

## Exercise 1

How do you create a basic button in SwiftUI that prints "Button tapped!" when pressed and has a blue background with rounded corners?

::: details Solution

```swift
Button(action: {
    print("Button tapped!")
}) {
    Text("Press Me")
}
.padding()
.background(Color.blue)
.foregroundColor(.white)
.cornerRadius(8)
```

:::

## Exercise 2

Write a custom button style in SwiftUI that changes the background color to gray when the button is pressed and blue otherwise. Apply this custom style to a button with the label "Custom Style Button."

::: details Solution

```swift
struct CustomButtonStyle: ButtonStyle {
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding()
            .background(configuration.isPressed ? Color.gray : Color.blue)
            .foregroundColor(.white)
            .cornerRadius(8)
    }
}

Button("Custom Style Button") {
    print("Custom styled button tapped!")
}
.buttonStyle(CustomButtonStyle())
```

:::

## Exercise 3

Create a custom Toggle style where the background color is green when the toggle is on and red when off. Apply this style to a Toggle with the label "Custom Toggle."

::: details Solution

```swift
struct CustomToggleStyle: ToggleStyle {
    func makeBody(configuration: Configuration) -> some View {
        HStack {
            configuration.label
            Spacer()
            configuration.isOn ? Text("On") : Text("Off")
        }
        .padding()
        .background(configuration.isOn ? Color.green : Color.red)
        .cornerRadius(8)
        .onTapGesture {
            configuration.isOn.toggle()
        }
    }
}

@State private var isOn: Bool = false

Toggle("Custom Toggle", isOn: $isOn)
    .toggleStyle(CustomToggleStyle())
    .padding()
```

:::

## Exercise 4

How can you create a DatePicker in SwiftUI that allows users to select a date within the next year and displays the date using a graphical style?

::: details Solution

```swift
@State private var selectedDate = Date()

DatePicker("Select Date", selection: $selectedDate, in: Date()...Date().addingTimeInterval(60*60*24*365), displayedComponents: [.date])
    .datePickerStyle(GraphicalDatePickerStyle())
    .padding()
```

:::

## Exercise 5

Implement a determinate ProgressView in SwiftUI that shows the progress value from a state variable, and modify the state variable to update the progress.

::: details Solution

```swift
@State private var progress: Double = 0.5

ProgressView(value: progress, total: 1.0)
    .padding()

// To update the progress:
Button("Increase Progress") {
    progress = min(progress + 0.1, 1.0)
}
```

:::

## Exercise 6

Write a SwiftUI view that displays an alert with a title "Alert Title" and a single "OK" button. The alert should be shown when a button labeled "Show Alert" is tapped.

::: details Solution

```swift
import SwiftUI

struct BasicAlertView: View {
    @State private var showAlert = false

    var body: some View {
        Button("Show Alert") {
            showAlert = true
        }
        .alert("Alert Title", isPresented: $showAlert) {
            Button("OK", role: .cancel) { }
        }
    }
}

struct BasicAlertView_Previews: PreviewProvider {
    static var previews: some View {
        BasicAlertView()
    }
}
```

:::

## Exercise 7

Create an action sheet in SwiftUI that presents three options: "Save", "Share", and "Cancel". The action sheet should be triggered by a button labeled "Show Action Sheet".

::: details Solution

```swift
import SwiftUI

struct ActionSheetView: View {
    @State private var showActionSheet = false

    var body: some View {
        Button("Show Action Sheet") {
            showActionSheet = true
        }
        .actionSheet(isPresented: $showActionSheet) {
            ActionSheet(
                title: Text("Choose an Option"),
                buttons: [
                    .default(Text("Save")) { print("Save selected") },
                    .default(Text("Share")) { print("Share selected") },
                    .cancel()
                ]
            )
        }
    }
}

struct ActionSheetView_Previews: PreviewProvider {
    static var previews: some View {
        ActionSheetView()
    }
}
```

:::

## Exercise 8

Implement a SwiftUI view that shows an alert with a dynamic message based on user input. The view should have two buttons: one for showing a "Success" message and another for showing an "Error" message.

::: details Solution

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

struct DynamicAlertView_Previews: PreviewProvider {
    static var previews: some View {
        DynamicAlertView()
    }
}
```

:::

## Exercise 9

Write a SwiftUI view that uses a `NavigationLink` with programmatic control. The view should include a `Toggle` switch that, when turned on, triggers navigation to a `DetailView`.

::: details Solution

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

struct DetailView: View {
    var body: some View {
        Text("You have arrived at the Detail View")
            .font(.largeTitle)
            .padding()
            .navigationTitle("Detail")
    }
}
```

:::

## Exercise 10

Create a SwiftUI view with a `List` that contains two sections: "Fruits" and "Vegetables". Each section should have multiple items. Each item should be tappable and navigate to a detailed view showing the selected item's name.

::: details Solution

```swift
import SwiftUI

struct ContentView: View {
    let fruits = ["Apple", "Banana", "Cherry"]
    let vegetables = ["Carrot", "Broccoli", "Spinach"]

    var body: some View {
        NavigationView {
            List {
                Section(header: Text("Fruits")) {
                    ForEach(fruits, id: \.self) { fruit in
                        NavigationLink(destination: DetailView(item: fruit)) {
                            Text(fruit)
                        }
                    }
                }
                Section(header: Text("Vegetables")) {
                    ForEach(vegetables, id: \.self) { vegetable in
                        NavigationLink(destination: DetailView(item: vegetable)) {
                            Text(vegetable)
                        }
                    }
                }
            }
            .navigationTitle("Food List")
        }
    }
}

struct DetailView: View {
    var item: String

    var body: some View {
        Text("Details for \(item)")
            .font(.largeTitle)
            .padding()
            .navigationTitle(item)
    }
}
```

:::

## Exercise 11

How do you create a vertical `ScrollView` in SwiftUI that displays a list of items from 0 to 10, with each item displayed in a `Text` view?

::: details Solution

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        ScrollView {
            VStack {
                ForEach(0..<11) { index in
                    Text("Item \(index)")
                        .padding()
                        .background(Color.blue.opacity(0.1))
                        .cornerRadius(8)
                }
            }
        }
    }
}
```

:::

## Exercise 12

How can you use `ScrollViewReader` to scroll to an item with index 15 in a vertical `ScrollView` when a button is pressed?

::: details Solution

```swift
import SwiftUI

struct ContentView: View {
    @State private var scrollToIndex: Int? = nil
    
    var body: some View {
        VStack {
            Button("Scroll to Item 15") {
                scrollToIndex = 15
            }
            
            ScrollViewReader { proxy in
                ScrollView {
                    VStack {
                        ForEach(0..<50) { index in
                            Text("Item \(index)")
                                .padding()
                                .background(Color.purple.opacity(0.1))
                                .cornerRadius(8)
                                .id(index) // Assign ID for ScrollViewReader
                        }
                    }
                    .onChange(of: scrollToIndex) { newValue in
                        if let newValue = newValue {
                            withAnimation {
                                proxy.scrollTo(newValue, anchor: .center)
                            }
                        }
                    }
                }
            }
        }
    }
}
```

## Exercise 13

How can you customize a `TabView` to include a badge with the number 3 on the "Profile" tab and a badge with the number 5 on the "Messages" tab?

::: details Solution

```swift
import SwiftUI

struct CustomTabView: View {
    var body: some View {
        TabView {
            Text("Profile View")
                .tabItem {
                    Image(systemName: "person.fill")
                    Text("Profile")
                }
                .badge(3) // Adding a badge to indicate notifications
            
            Text("Messages View")
                .tabItem {
                    Image(systemName: "message.fill")
                    Text("Messages")
                }
                .badge(5)
        }
    }
}
```

:::

## Exercise 14

How can you create a `Form` with a `TextField`, a `Toggle`, and a `Picker`, where the `TextField` has conditional styling based on whether the `Toggle` is on or off?

::: details Solution

```swift
import SwiftUI

struct ContentView: View {
    @State private var name: String = ""
    @State private var isSubscribed: Bool = false
    @State private var selectedColor: Color = .blue
    
    var body: some View {
        Form {
            Section(header: Text("Personal Information")) {
                TextField("Name", text: $name)
                    .textFieldStyle(RoundedBorderTextFieldStyle())
                    .background(isSubscribed ? Color.green.opacity(0.2) : Color.red.opacity(0.2))
                
                Toggle("Subscribe to Newsletter", isOn: $isSubscribed)
            }
            
            Section(header: Text("Preferences")) {
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

:::

## Exercise 15

How do you use nested `ForEach` views to create a 3x3 grid layout in SwiftUI?

::: details Solution

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

:::
