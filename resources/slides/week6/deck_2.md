---
marp: true
theme: default
class:
  - invert
---

# Stacks and Frames

SwiftUI is a powerful framework that allows developers to build user interfaces across all Apple platforms using a declarative Swift syntax. Understanding how to use layouts and stacks is essential for organizing views.

---

# Stacks

SwiftUI's layout system arranges views within a parent container. Understanding how to control and manipulate layouts is crucial for creating well-structured and responsive designs.

---

# Basic Concepts

- **View Hierarchy**: Views are arranged in a hierarchy where a parent view contains child views.
- **Modifiers**: Methods that return a new view after applying some change to the original view.

---

# Types of Stacks

SwiftUI provides three main types of stacks:

- **HStack**: Arranges views horizontally.
- **VStack**: Arranges views vertically.
- **ZStack**: Overlays views on top of each other.

---

# HStack (Horizontal Stack)

**Basic Usage:**

```swift
HStack {
    Text("Hello")
    Text("World")
}
```

*Explanation:* "Hello" and "World" are placed next to each other horizontally.

Note:
- HStack arranges its children in a horizontal line.
- It's useful for aligning content side by side.

---

# Customizing HStack

**Spacing:**

```swift
HStack(spacing: 20) {
    Text("Hello")
    Text("World")
}
```

*Explanation:* Adds 20 points of space between "Hello" and "World".

Note:
- Adjust the spacing between children using the spacing parameter.

---

# VStack (Vertical Stack)

**Basic Usage:**

```swift
VStack {
    Text("Hello")
    Text("World")
}
```

*Explanation:* "Hello" is placed above "World".

Note:
- VStack arranges its children vertically.
- It's useful for stacking content on top of each other.

---

# Customizing VStack

**Alignment:**

```swift
VStack(alignment: .leading) {
    Text("Hello")
    Text("World")
}
```

*Explanation:* Aligns "Hello" and "World" along their leading edges (left-aligned).

Note:
- Customize alignment with parameters such as `.leading`, `.center`, or `.trailing`.

---

# ZStack (Layered Stack)

**Basic Usage:**

```swift
ZStack {
    Text("Hello")
    Text("World")
}
```

*Explanation:* "World" is layered on top of "Hello".

Note:
- ZStack overlays its children, useful for creating layered effects.

---

# Combining Stacks

**Nesting Stacks:**

```swift
VStack {
    HStack {
        Text("Left")
        Spacer()
        Text("Right")
    }
    Text("Bottom")
}
```

*Explanation:* Combines VStack and HStack to create a more complex layout.

Note:
- Use nesting to create intricate and flexible layouts.

---

# Alignment Guides

**Custom Alignment:**

```swift
VStack(alignment: .leading) {
    Text("Hello")
        .alignmentGuide(.leading) { d in d[.trailing] }
    Text("World")
}
```

*Explanation:* Aligns "Hello" and "World" with custom alignment guides.

Note:
- Use alignment guides for precise control over view alignment.

---

# Frames in SwiftUI

**Setting a Frame:**

```swift
Text("Hello, SwiftUI!")
    .frame(width: 200, height: 100)
    .background(Color.blue)
```

*Explanation:* Sets a frame of 200x100 points with a blue background.

Note:
- Frames define a view's size and position.

---

# Flexible Frames

**Using nil for Flexible Frames:**

```swift
Text("Flexible Frame")
    .frame(width: nil, height: 50)
    .background(Color.green)
```

*Explanation:* Height is fixed at 50 points; width adjusts to content.

Note:
- Use `nil` for flexible dimensions.

---

# Positioning Views

**Absolute Positioning:**

```swift
Circle()
    .fill(Color.purple)
    .frame(width: 100, height: 100)
    .position(x: 150, y: 200)
```

*Explanation:* Positions a circle at (150, 200) within its parent view.

Note:
- Absolute positioning can lead to inflexible layouts.

---

# Safe Area in SwiftUI

**Default Safe Area Behavior:**

```swift
Text("Hello, SwiftUI!")
    .background(Color.blue)
```

*Explanation:* Automatically positions within the safe area.

Note:
- SwiftUI adjusts views to respect safe areas.

---

# Ignoring Safe Area

**Extending Content Beyond Safe Area:**

```swift
Text("Safe Area Example")
    .edgesIgnoringSafeArea(.all)
```

*Explanation:* Extends background beyond the safe area to fill the screen.

Note:
- Use `edgesIgnoringSafeArea` to control content extension.

---

# Combining Frames and Safe Area

**Complex Layout Example:**

```swift
ZStack {
    GeometryReader { geometry in
        Color.blue
            .edgesIgnoringSafeArea(.all)
        Text("Safe Area Content")
            .background(Color.white)
    }
}
```

*Explanation:* Uses `ZStack` and `GeometryReader` for dynamic layout.

---

# Questions?