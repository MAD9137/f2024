# 🧠 Swift Views

Views are the building blocks that you use to declare your app’s user interface. Each view contains a description of what to display for a given state. Every bit of your app that’s visible to the user derives from the description in a view, and any type that conforms to the View protocol can act as a view in your app.

## Create a View

SwiftUI offers a declarative approach to user interface design. With a traditional imperative approach, the burden is on your controller code not only to instantiate, lay out, and configure views, but also to continually make updates as conditions change. In contrast, with a declarative approach, you create a lightweight description of your user interface by declaring views in a hierarchy that mirrors the desired layout of your interface. SwiftUI then manages drawing and updating these views in response to events like user input or state changes.

Create a `struct` that conforms to the `View` [protocol](https://developer.apple.com/documentation/swiftui/view) and implement the required body computed property.

```swift
struct myView: View {
    var body: some View {

    }
}
```

SwiftUI reads the value of the `body` property any time it needs to update the view, which can happen repeatedly during the life of the view, typically in response to user input or system events. The value that the view returns is an element that SwiftUI draws onscreen.

The View protocol’s secondary requirement is that conforming types must indicate an [associated type](https://docs.swift.org/swift-book/LanguageGuide/Generics.html#ID189) for the `body` property. However, you don’t make an explicit declaration. Instead, you declare the `body` property as an [opaque type](https://docs.swift.org/swift-book/LanguageGuide/OpaqueTypes.html) using the `some View` syntax, to indicate only that the body’s type conforms to View. The exact type depends on the body’s content, which varies as you edit the body during development. Swift infers the exact type automatically.

## Add UI Elements

Describe your view’s appearance by adding content to the view’s `body` property. You can compose the body from built-in views that SwiftUI provides, as well as custom views that you’ve defined elsewhere. For example, you can create a body that draws the string “Hello, World!” using a built-in Text view:

```swift
struct MyView: View {
    var body: some View {
        Text("Hello, World!")
    }
}
```

### Configure UI Elements with Modifiers

To configure the views in your view’s `body`, you apply view modifiers. A modifier is nothing more than a method called on a particular view. The method returns a new, altered view that effectively takes the place of the original in the view hierarchy.

SwiftUI extends the View protocol with a large set of methods for this purpose. All View protocol conformers — both built-in and custom views — have access to these methods that alter the behavior of a view in some way. For example, you can change the font of a text view by applying the font modifier:

```swift
struct MyView: View {
    var body: some View {
        VStack {
            Text("Hello, World!")
                .font(.title)
            Text("Glad to meet you.")
        }
    }
}
```

## Add a New View to the View Hierarchy

After you define a view, you can incorporate it in other views, just like you do with built-in views. You add your view by declaring it at the point in the hierarchy at which you want it to appear. For example, you could put MyView in your app’s ContentView, which Xcode creates automatically as the root view of a new app:

```swift
struct ContentView: View {
    var body: some View {
        MyView(helloFont: .title)
    }
}
```

## See Also

- [View Fundamentals - Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/declaring-a-custom-view)
- [View Protocol - Apple Developer Documentation](https://developer.apple.com/documentation/swiftui/view)
- [Understanding Views - OS 14 Getting Started | Pluralsight](https://app.pluralsight.com/course-player?clipId=b548ca85-bcb1-45cd-a401-ef6f4eab45d6)