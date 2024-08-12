# 🧠 Controls

SwiftUI provides controls that enable user interaction specific to each platform and context. For example, people can initiate events with buttons and links, or choose among a set of discrete values with different kinds of pickers. You can also display information to the user with indicators like progress views and gauges.

Use these built-in controls and indicators when composing custom views, and style them to match the needs of your app’s user interface. For design guidance, see [All components](https://developer.apple.com/design/human-interface-guidelines/components/all-components) in the Human Interface Guidelines.

## Button

A control that initiates an action.

You create a button by providing an action and a label. The action is either a method or closure property that does something when a user clicks or taps the button. The label is a view that describes the button’s action — for example, by showing text, an icon, or both:

```swift
Button(action: signIn) {
    Text("Sign In")
}

Button(action: {
    // What to do
    // call func or closure
}) {
    // Appearance
    Text("Sign In")
}

// Alternate declaration
Button("Sign In", action: signIn)
```

## Links

A control for navigating to a URL.

Create a link by providing a destination URL and a title. The title tells the user the purpose of the link, and can be a string, a title key that produces a localized string, or a view that acts as a label. The example below creates a link to example.com and displays the title string as a link-styled view:

```swift
Link("View Our Terms of Service",
      destination: URL(string: "https://www.example.com/TOS.html")!)
```

## Slider

A control for selecting a value from a bounded linear range of values.

A [Slider](https://developer.apple.com/documentation/swiftui/slider) consists of a “thumb” image that the user moves between two extremes of a linear “track”. The ends of the track represent the minimum and maximum possible values. As the user moves the thumb, the slider updates its bound value.

```swift
@State private var speed = 50.0
@State private var isEditing = false

var body: some View {
    VStack {
        Slider(
            value: $speed,
            in: 0...100,
            step: 5,
            onEditingChanged: { editing in
                isEditing = editing
            }
        )
        Text("\(speed)")
            .foregroundColor(isEditing ? .red : .blue)
    }
}
```

## Stepper

A control that performs increment and decrement actions.

Use a stepper control when you want the user to have granular control while incrementing or decrementing a value. For example, you can use a stepper to:

- Change a value up or down by 1.
- Operate strictly over a prescribed range.
- Step by specific amounts over a stepper’s range of possible values.

```swift
struct StepperView: View {
    @State private var value = 0
    let step = 5
    let range = 1...50

    var body: some View {
        Stepper(value: $value,
                in: range,
                step: step) {
            Text("Current: \(value) in \(range.description) " +
                 "stepping by \(step)")
        }
            .padding(10)
    }
}
```

## Toggle

A control that toggles between on and off states.

You create a [Toggle](https://developer.apple.com/documentation/swiftui/toggle) by providing an isOn binding and a label. Bind isOn to a Boolean property that determines whether the toggle is on or off. Set the label to a view that visually describes the purpose of switching between toggle states. For example:

```swift
@State private var vibrateOnRing = false

var body: some View {
    Toggle(isOn: $vibrateOnRing) {
        Text("Vibrate on Ring")
    }
}
```

## See Also

- [Button - Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/button)