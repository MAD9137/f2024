# 🧠 Model Data and Property Wrappers

A property wrapper adds a layer of separation between code that manages how a property is stored and the code that defines a property. For example, if you have properties that provide thread-safety checks or store their underlying data in a database, you have to write that code on every property. When you use a property wrapper, you write the management code once when you define the wrapper, and then reuse that management code by applying it to multiple properties.

We won't be exploring creating property wrappers in this course but rather, consuming SwiftUI property wrappers including `@State` and `@AppStorage`

If you're interested in learning how to create your own property wrappers, see [Property Wrappers - Swift.org](https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID617)

## SwiftUI Property Wrappers

SwiftUI offers a declarative approach to user interface design. As you compose a hierarchy of views, you also indicate data dependencies for the views. When the data changes, either due to an external event or because of an action that the user performs, SwiftUI automatically updates the affected parts of the interface. As a result, the framework automatically performs most of the work that view controllers traditionally do.

[Review Model Data](https://developer.apple.com/documentation/swiftui/model-data)

Watch [Data Essentials - WWDC20](https://developer.apple.com/videos/play/wwdc2020/10040/)

### @State

SwiftUI manages the storage of a property that you declare as state. When the value changes, SwiftUI updates the parts of the view hierarchy that depend on the value. Use state as the single source of truth for a given value stored in a view hierarchy.

```swift
struct PlayButton: View {
    @State private var isPlaying: Bool = false

    var body: some View {
        Button(isPlaying ? "Pause" : "Play") {
            isPlaying.toggle()
        }
    }
}
```

If you pass a state property to a child view, SwiftUI updates the child any time the value changes in the parent, but the child can’t modify the value. To enable the child view to modify the stored value, pass a Binding instead.

### @Binding

Use a binding to create a two-way connection between a property that stores data, and a view that displays and changes the data. A binding connects a property to a source of truth stored elsewhere, instead of storing data directly. For example, a button that toggles between play and pause can create a binding to a property of its parent view using the Binding property wrapper.

- Declare the @State var in the parent view
- Declare the @Binding var in the child view
- Bind the UI element to the @Binding var. Don't forget to prepend with '$'

```swift
struct ParentView: View {
    // Declare state var
    @State var isEnabledParentView: Bool  = false

    var body: some View {
        // bind toggle view in parent to state var
        Toggle("ParentViewToggle", isOn: $isEnabledParentView)

        // call childView and pass binding to state var
        ChildView(isEnabledChildView: $isEnabledParentView)
    }
}

struct ChildView: View {
    // Create binding var
    @Binding var isEnabledChildView: Bool

    var body: some View {
        // bind child toggle view to childview binding
        Toggle("ChildViewToggle", isOn: $isEnabledChildView)
    }
}
```

### More Model Data

- [StateObject - Apple Developer](https://developer.apple.com/documentation/swiftui/stateobject)
- [ObservedObject - Apple Developer](https://developer.apple.com/documentation/swiftui/observedobject)
- [EnvironmentObject - Apple Developer](https://developer.apple.com/documentation/swiftui/environmentobject)

## Persistent Data

### @AppStorage

- A property wrapper alternative to 'UserDefaults'
- Not secure. Do not store sensitive or personal data in UserDefaults
- Use to store configuration or settings data
- If a key doesn't exist, a default value will be returned

### Core Data

Use Core Data to save your application’s permanent data for offline use, to cache temporary data, and to add undo functionality to your app on a single device. To sync data across multiple devices in a single iCloud account, Core Data automatically mirrors your schema to a CloudKit container. Through Core Data’s Data Model editor, you define your data’s types and relationships, and generate respective class definitions. Core Data can then manage object instances at runtime to provide the following features.

## See also

- [Property Wrappers - Swift.org](https://docs.swift.org/swift-book/LanguageGuide/Properties.html#ID617)
- [@State](https://developer.apple.com/documentation/swiftui/state)
- [Core Data - Apple Developer](https://developer.apple.com/documentation/coredata)