# 🧠 Layout Views

Use layout containers to arrange the elements of your user interface. Stacks and grids update and adjust the positions of the subviews they contain in response to changes in content or interface dimensions. You can nest layout containers inside other layout containers to any depth to achieve complex layout effects.

To finetune the position, alignment, and other elements of a layout that you build with layout container views, see [Layout adjustments](https://developer.apple.com/documentation/swiftui/layout-adjustments). For design guidance, see [Layout](https://developer.apple.com/documentation/swiftui/layout-adjustments) in the Human Interface Guidelines.

## Stacks

Stack views are the most primitive layout container available in SwiftUI. Use stacks to group collections of views into horizontal or vertical lines, or to stack them on top of one another.

Use `HStack` to lay out views in a horizontal line, `VStack` to position views in a vertical line, and `ZStack` to layer views on top of one another. Then, combine stack views to compose more complex layouts. These three kinds of stacks, along with their alignment and spacing properties, view modifiers, and `Spacer` views combine to allow extensive layout flexibility.

### Repeating Views

You can also use [HStack](https://developer.apple.com/documentation/swiftui/hstack), [VStack](https://developer.apple.com/documentation/swiftui/vstack), [LazyHStack](https://developer.apple.com/documentation/swiftui/lazyhstack), and [LazyVStack](https://developer.apple.com/documentation/swiftui/lazyvstack) to repeat views or groups of views. Place a stack view inside a ScrollView so your content can expand beyond the bounds of its container. Users can simultaneously scroll horizontally, vertically, or in both directions.

Stack views and lazy stacks have similar functionality, and they may feel interchangeable, but they each have strengths in different situations. Stack views load their child views all at once, making layout fast and reliable, because the system knows the size and shape of every subview as it loads them. Lazy stacks trade some degree of layout correctness for performance, because the system only calculates the geometry for subviews as they become visible.

### HStack

A view that arranges its subviews in a horizontal line.

```swift
var body: some View {
    HStack(
        alignment: .top,
        spacing: 10
    ) {
        ForEach(
            1...5,
            id: \.self
        ) {
            Text("Item \($0)")
        }
    }
}
```

### VStack

A view that arranges its subviews in a vertical line.

```swift
var body: some View {
    VStack(
        alignment: .leading,
        spacing: 10
    ) {
        ForEach(
            1...10,
            id: \.self
        ) {
            Text("Item \($0)")
        }
    }
}
```

### ZStack

A view that overlays its subviews, aligning them in both axes.

```swift
let colors: [Color] =
    [.red, .orange, .yellow, .green, .blue, .purple]

var body: some View {
    ZStack {
        ForEach(0..<colors.count) {
            Rectangle()
                .fill(colors[$0])
                .frame(width: 100, height: 100)
                .offset(x: CGFloat($0) * 10.0,
                        y: CGFloat($0) * 10.0)
        }
    }
}
```

## ScrollView

When the content of a view doesn’t fit in the display, you can wrap the view in a [ScrollView](https://developer.apple.com/documentation/swiftui/scroll-views) to enable people to scroll on one or more axes. Configure the scroll view using view modifiers. For example, you can set the visibility of the scroll indicators or the availability of scrolling in a given dimension.

You can put any view type in a scroll view, but you most often use a scroll view for a layout container with too many elements to fit in the display. For some container views that you put in a scroll view, like lazy stacks, the container doesn’t load views until they are visible or almost visible. For others, like regular stacks and grids, the container loads the content all at once, regardless of the state of scrolling.

[Lists](https://developer.apple.com/documentation/swiftui/lists) and [Tables](https://developer.apple.com/documentation/swiftui/tables) implicitly include a scroll view, so you don’t need to add scrolling to those container types. However, you can configure their implicit scroll views with the same view modifiers that apply to explicit scroll views. For design guidance, see [Scroll views](https://developer.apple.com/design/human-interface-guidelines/components/presentation/scroll-views) in the Human Interface Guidelines.

```swift
var body: some View {
    ScrollView {
        VStack(alignment: .leading) {
            ForEach(0..<100) {
                Text("Row \($0)")
            }
        }
    }
}
```

## List

Use a list to display a one-dimensional vertical collection of views. The list is a complex container type that automatically provides scrolling when it grows too large for the current display. You build a list by providing it with individual views for the rows in the list, or by using a [ForEach](https://developer.apple.com/documentation/swiftui/foreach) to enumerate a group of rows. You can also mix these strategies, blending any number of individual views and ForEach constructs.

Use view modifiers to configure the appearance and behavior of a list and its rows, headers, sections, and separators. For example, you can apply a style to the list, add swipe gestures to individual rows, or make the list refreshable with a pull-down gesture. You can also use the configuration associated with [Scroll views](https://developer.apple.com/documentation/swiftui/scroll-views) to control the list’s implicit scrolling behavior. For design guidance, see [Lists and tables](https://developer.apple.com/design/human-interface-guidelines/components/layout-and-organization/lists-and-tables) in the Human Interface Guidelines.

- Members of a list must be uniquely identifiable either by providing an `id` parameter or conforming to the `Identifiable` protocol.

```swift
// setup models and data
struct Person: Identifiable {
     let id = UUID()
     var name: String
     var phoneNumber: String
 }

var staff = [
    Person(name: "Juan Chavez", phoneNumber: "(408) 555-4301"),
    Person(name: "Mei Chen", phoneNumber: "(919) 555-2481")
]

// our List view
struct StaffList: View {
    var body: some View {
        List {
            ForEach(staff) { person in
                Text(person.name)
            }
        }
    }
}
```

## Groups

You can create groups of views that serve different purposes. For example, a Group construct treats the specified views as a unit without imposing any additional layout or appearance characteristics. A Form presents a group of elements with a platform-specific appearance that’s suitable for gathering input from people.

Use a group to collect multiple views into a single instance, without affecting the layout of those views, like an `HStack`, `VStack`, or `Section` would. After creating a group, any modifier you apply to the group affects all of that group’s members. For example, the following code applies the headline font to three views in a group.

```swift
// On its own will only display the first element
Group {
    Text("SwiftUI")
    Text("Combine")
    Text("Swift System")
}

// nested in a VStack will display all elements
VStack {
    Group {
        Text("SwiftUI")
        Text("Combine")
        Text("Swift System")
    }
}
```

Use groups to stay within the 10 view restriction for ViewBuilder.

## See Also

- [Combining and Laying out Views | Pluralsight](https://app.pluralsight.com/course-player?clipId=e60fad74-fd64-467f-85cf-bc2d6849b197)
- [Understanding SwiftUI Layouts | Pluralsight](https://app.pluralsight.com/course-player?clipId=3f6cfe68-e945-4d19-bbc1-2947de7e0662)