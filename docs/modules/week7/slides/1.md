---
marp: true
theme: default
class:
  - invert
---

# Button

## Basic Button

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

---

# Button

## Button with Image

```swift
Button(action: {
    print("Image Button tapped!")
}) {
    Image(systemName: "star.fill")
        .font(.largeTitle)
        .foregroundColor(.yellow)
}
```

---

# Button

## Custom Button Styles

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

---

# TextField

## Basic TextField

```swift
@State private var name: String = ""

TextField("Enter your name", text: $name)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
```

---

# TextField

## TextField with Formatting

```swift
@State private var email: String = ""

TextField("Email", text: $email)
    .keyboardType(.emailAddress)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
```

## SecureField

```swift
@State private var password: String = ""

SecureField("Password", text: $password)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
```

---

# Toggle (Switch)

## Basic Toggle

```swift
@State private var isOn: Bool = false

Toggle("Enable Notifications", isOn: $isOn)
    .padding()
```

---

# Toggle (Switch)

## Custom Toggle Style

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

# Stepper

## Basic Stepper

```swift
@State private var value: Int = 0

Stepper("Value: \(value)", value: $value, in: 0...10)
    .padding()
```

---

# Stepper

## Stepper with Step Interval

```swift
@State private var value: Int = 0

Stepper("Value: \(value)", value: $value, in: 0...100, step: 10)
    .padding()
```

---

# Segmented Control

## Basic Segmented Control

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

# DatePicker

## Basic DatePicker

```swift
@State private var selectedDate = Date()

DatePicker("Select Date", selection: $selectedDate, displayedComponents: [.date])
    .datePickerStyle(WheelDatePickerStyle())
    .padding()
```

---

# DatePicker

## DatePicker with Range

```swift
@State private var selectedDate = Date()

DatePicker("Select Date", 
    selection: $selectedDate, 
    in: Date()...Date().addingTimeInterval(60*60*24*365), 
    displayedComponents: [.date]
)
.datePickerStyle(GraphicalDatePickerStyle())
.padding()
```

---

# ProgressView

## Indeterminate ProgressView

```swift
ProgressView()
    .progressViewStyle(CircularProgressViewStyle())
    .padding()
```

---

# ProgressView

## Determinate ProgressView

```swift
@State private var progress: Double = 0.5

ProgressView(value: progress)
    .padding()
```

---

# ActivityIndicator

## Basic Activity Indicator

```swift
ProgressView()
    .progressViewStyle(CircularProgressViewStyle())
    .scaleEffect(1.5)
    .padding()
```

---

# ActivityIndicator

## Custom Activity Indicator

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

---

# Questions?
