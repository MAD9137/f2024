# 🧠 Text Views

To display read-only text, or read-only text paired with an image, use the built-in [Text](https://developer.apple.com/documentation/swiftui/text) or [Label](https://developer.apple.com/documentation/swiftui/label) views, respectively. When you need to collect text input from the user, use an appropriate text input view, like [TextField](https://developer.apple.com/documentation/swiftui/textfield) or [TextEditor](https://developer.apple.com/documentation/swiftui/texteditor).

You add view modifiers to control the text’s font, selectability, alignment, layout direction, and so on. These modifiers also affect other views that display text, like the labels on controls, even if you don’t define an explicit Text view.

For design guidance, see [Typography](https://developer.apple.com/design/human-interface-guidelines/foundations/typography) in the Human Interface Guidelines.

## Text

A view that displays one or more lines of read-only text.

```swift
// Basic Declaration
Text("Hamlet")

// style modifiers
Text("by William Shakespeare")
    .font(.system(size: 12, weight: .light, design: .serif))
    .italic()
```

## Label

A standard label for user interface items, consisting of an icon with a title.

One of the most common and recognizable user interface components is the combination of an icon and a label. This idiom appears across many kinds of apps and shows up in collections, lists, menus of action items, and disclosable lists, just to name a few. You create a label, in its simplest form, by providing a title and the name of an image, such as an icon from the [SF Symbols](https://developer.apple.com/design/human-interface-guidelines/foundations/sf-symbols) collection:

```swift
// Basic declaration
Label("Lightning", systemImage: "bolt.fill")

// Icon only
Label("Lightning", systemImage: "bolt.fill")
                .labelStyle(.iconOnly)

// common label styling
VStack {
    Label("Rain", systemImage: "cloud.rain")
    Label("Snow", systemImage: "snow")
    Label("Sun", systemImage: "sun.max")
}
.labelStyle(.iconOnly)
```

## TextField

A control that displays an editable text interface.

You create a text field with a label and a binding to a value. If the value is a string, the text field updates this value continuously as the user types or otherwise edits the text in the field. For non-string types, it updates the value when the user commits their edits, such as by pressing the Return key.

```swift
@State private var username: String = ""
@FocusState private var emailFieldIsFocused: Bool = false

var body: some View {
    TextField(
        "User name (email address)",
        text: $username
    )
    .focused($emailFieldIsFocused)
    .onSubmit {
        validate(name: username)
    }
    .textInputAutocapitalization(.never)
    .disableAutocorrection(true)
    .border(.secondary)

    Text(username)
        .foregroundColor(emailFieldIsFocused ? .red : .blue)
}
```

## SecureField

A control into which the user securely enters private text.

Use a SecureField when you want behavior similar to a TextField, but you don’t want the user’s text to be visible. Typically, you use this for entering passwords and other sensitive information.

A SecureField uses a binding to a string value, and a closure that executes when the user commits their edits, such as by pressing the Return key. The field updates the bound string on every keystroke or other edit, so you can read its value at any time from another control, such as a Done button.

```swift
@State private var username: String = ""
@State private var password: String = ""

var body: some View {
    TextField(
        "User name (email address)",
        text: $username)
        .autocapitalization(.none)
        .disableAutocorrection(true)
        .border(Color(UIColor.separator))
    SecureField(
        "Password",
        text: $password
    ) {
        handleLogin(username: username, password: password)
    }
    .border(Color(UIColor.separator))
}
```

## Text Editor

A view that can display and edit long-form text.

A [TextEditor](https://developer.apple.com/documentation/swiftui/texteditor) view allows you to display and edit multiline, scrollable text in your app’s user interface. By default, the text editor view styles the text using characteristics inherited from the environment, like `font(_:)`, `foregroundColor(_:)`, and `multilineTextAlignment(_:)`.

```swift
struct TextEditingView: View {
    @State private var fullText: String = "This is some editable text..."

    var body: some View {
        TextEditor(text: $fullText)
    }
}
```
