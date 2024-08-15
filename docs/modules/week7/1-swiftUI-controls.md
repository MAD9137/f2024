# 🚀 SwiftUI Controls

We will explore several essential SwiftUI controls: Buttons, TextField, Toggle, Stepper, Segmented Control, DatePicker, ProgressView, and ActivityIndicator. Each section provides detailed explanations and code snippets to help you understand and implement these controls in your SwiftUI applications.

## 🛠️ Button

Buttons are one of the most commonly used controls in any UI, allowing users to perform actions when tapped. In SwiftUI, buttons are highly customizable, both in terms of appearance and behavior.

### Basic Button
A basic button can be created using the `Button` initializer, where you specify the label and the action:

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

### Button with Image
You can also create a button with an image:

```swift
Button(action: {
    print("Image Button tapped!")
}) {
    Image(systemName: "star.fill")
        .font(.largeTitle)
        .foregroundColor(.yellow)
}
```

### Custom Button Styles
SwiftUI allows you to create custom button styles:

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



















## 🛠️ TextField

`TextField` allows users to input text. It can be customized with various modifiers to control its appearance and behavior.

### Basic TextField
A simple `TextField` can be created as follows:

```swift
@State private var name: String = ""

TextField("Enter your name", text: $name)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
```

### TextField with Formatting
You can also add a placeholder and keyboard type:

```swift
@State private var email: String = ""

TextField("Email", text: $email)
    .keyboardType(.emailAddress)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
```

### SecureField
For password inputs, use `SecureField`:

```swift
@State private var password: String = ""

SecureField("Password", text: $password)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
```

---

## 🛠️ Toggle (Switch)

The `Toggle` control is a switch that can be toggled on or off. It’s useful for binary choices, such as turning a setting on or off.

### Basic Toggle
Here's a simple `Toggle` example:

```swift
@State private var isOn: Bool = false

Toggle("Enable Notifications", isOn: $isOn)
    .padding()
```

### Custom Toggle Style
You can create a custom style for the `Toggle`:

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

Toggle("Custom Toggle", isOn: $isOn)
    .toggleStyle(CustomToggleStyle())
    .padding()
```

---

## 🛠️ Stepper

The `Stepper` control allows users to increment or decrement a value by pressing plus or minus buttons.

### Basic Stepper
Here’s how to use a basic `Stepper`:

```swift
@State private var value: Int = 0

Stepper("Value: \(value)", value: $value, in: 0...10)
    .padding()
```

### Stepper with Step Interval
You can specify a step interval:

```swift
@State private var value: Int = 0

Stepper("Value: \(value)", value: $value, in: 0...100, step: 10)
    .padding()
```

---

## 🛠️ Segmented Control

A `SegmentedControl` is useful for selecting between multiple options, typically within a limited set.

### Basic Segmented Control
You can create a segmented control using `Picker`:

```swift
@State private var selectedSegment = 0

Picker("Select Option", selection: $selectedSegment) {
    Text("Option 1").tag(0)
    Text("Option 2").tag(1)
    Text("Option 3").tag(2)
}
.pickerStyle(SegmentedPickerStyle())
.padding()
```

---

## 🛠️ DatePicker

The `DatePicker` control allows users to select a date and time.

### Basic DatePicker
Here’s a basic `DatePicker`:

```swift
@State private var selectedDate = Date()

DatePicker("Select Date", selection: $selectedDate, displayedComponents: [.date])
    .datePickerStyle(WheelDatePickerStyle())
    .padding()
```

### DatePicker with Range
You can restrict the date range:

```swift
@State private var selectedDate = Date()

DatePicker("Select Date", selection: $selectedDate, in: Date()...Date().addingTimeInterval(60*60*24*365), displayedComponents: [.date])
    .datePickerStyle(GraphicalDatePickerStyle())
    .padding()
```

---

## 🛠️ ProgressView

`ProgressView` is used to indicate progress of a task.

### Indeterminate ProgressView
A basic indeterminate `ProgressView`:

```swift
ProgressView()
    .progressViewStyle(CircularProgressViewStyle())
    .padding()
```

### Determinate ProgressView
A determinate `ProgressView` shows a specific progress value:

```swift
@State private var progress: Double = 0.5

ProgressView(value: progress)
    .padding()
```

---

## 🛠️ ActivityIndicator

While SwiftUI doesn’t have a built-in `ActivityIndicator`, you can create one using a spinning `ProgressView`.

### Basic Activity Indicator
Here’s how to create an `ActivityIndicator` using `ProgressView`:

```swift
ProgressView()
    .progressViewStyle(CircularProgressViewStyle())
    .scaleEffect(1.5)
    .padding()
```

For more control over the appearance, you can wrap UIKit's `UIActivityIndicatorView` in a SwiftUI view.

```swift
import UIKit
import SwiftUI

struct ActivityIndicator: UIViewRepresentable {
    @Binding var isAnimating: Bool

    func makeUIView(context: Context) -> UIActivityIndicatorView {
        let indicator = UIActivityIndicatorView(style: .large)
        indicator.hidesWhenStopped = true
        return indicator
    }

    func updateUIView(_ uiView: UIActivityIndicatorView, context: Context) {
        isAnimating ? uiView.startAnimating() : uiView.stopAnimating()
    }
}

@State private var isLoading: Bool = true

ActivityIndicator(isAnimating: $isLoading)
    .padding()
```