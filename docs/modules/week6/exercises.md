# 🤯 Exercises

## Exercise 1

Create a SwiftUI `Text` view that displays the text "Hello, SwiftUI!" in large title font, bold, and with a red color.

::: details Solution

```swift
Text("Hello, SwiftUI!")
    .font(.largeTitle)
    .fontWeight(.bold)
    .foregroundColor(.red)
```

:::

## Exercise 2

Create a SwiftUI `Button` that prints "Button tapped!" when pressed. The button should have a title "Tap Me", a blue background, white text color, and a corner radius of 8.

::: details Solution

```swift
Button(action: {
    print("Button tapped!")
}) {
    Text("Tap Me")
        .padding()
        .background(Color.blue)
        .foregroundColor(.white)
        .cornerRadius(8)
}
```

:::

## Exercise 3

Create a SwiftUI `VStack` that contains two `Text` views: "Welcome" in a large title font and "to SwiftUI" in a subheadline font with a green color. Add padding around the VStack.

::: details Solution

```swift
VStack {
    Text("Welcome")
        .font(.largeTitle)
    
    Text("to SwiftUI")
        .font(.subheadline)
        .foregroundColor(.green)
}
.padding()
```

:::

## Exercise 4

Write a SwiftUI `HStack` that displays an `Image` of a filled star, a `Text` view with the label "Star", and another `Image` of a filled star. Use `Spacer` to push the text to the center, and set a horizontal padding around the `HStack`.

::: details Solution

```swift
HStack {
    Image(systemName: "star.fill")
    
    Spacer()
    
    Text("Star")
    
    Spacer()
    
    Image(systemName: "star.fill")
}
.padding(.horizontal)
```

:::

## Exercise 5

Create a SwiftUI `ZStack` that layers a blue rectangle and a `Text` view that reads "Hello, World!" in white large title font. The `Text` should be vertically and horizontally centered over the blue rectangle. The blue rectangle should take up the full screen, ignoring the safe area.

::: details Solution

```swift
ZStack {
    Color.blue
        .edgesIgnoringSafeArea(.all)
    
    Text("Hello, World!")
        .font(.largeTitle)
        .foregroundColor(.white)
}
```

:::

## Exercise 6

How can you create a horizontal stack in SwiftUI with two text views, "Left" and "Right", and customize the spacing between them to 15 points?

::: details Solution

```swift
HStack(spacing: 15) {
    Text("Left")
    Text("Right")
}
```

Explanation: This code creates an HStack that arranges "Left" and "Right" text views horizontally with 15 points of space between them.

:::

## Exercise 7

How would you create a vertical stack that contains a title at the top and a horizontal stack below it with two text views, "Item 1" and "Item 2", separated by a spacer?

::: details Solution

```swift
VStack {
    Text("Title")
        .font(.largeTitle)
    
    HStack {
        Text("Item 1")
        Spacer()
        Text("Item 2")
    }
}
```

Explanation: This VStack contains a title and an HStack. The HStack has two text views separated by a Spacer, which pushes "Item 2" to the far right.

:::

## Exercise 8

How can you create a ZStack with two rectangles, one red and one blue, where the blue rectangle is offset by 20 points to the right and 20 points down from the red rectangle?

::: details Solution

```swift
ZStack {
    Rectangle()
        .fill(Color.red)
        .frame(width: 100, height: 100)
    
    Rectangle()
        .fill(Color.blue)
        .frame(width: 100, height: 100)
        .offset(x: 20, y: 20)
}
```

Explanation: This ZStack layers a red rectangle with a blue rectangle offset by 20 points to the right and down, creating a layered effect.

:::

## Exercise 9

How can you use GeometryReader to center a text view within its parent view, ensuring it always stays centered regardless of the parent view's size?

::: details Solution

```swift
GeometryReader { geometry in
    Text("Centered Text")
        .frame(width: geometry.size.width, height: geometry.size.height)
        .background(Color.orange)
        .position(x: geometry.size.width / 2, y: geometry.size.height / 2)
}
```

Explanation: This example uses GeometryReader to get the size of the parent view and centers the text view by setting its position to the middle of the available space.

:::

## Exercise 10

How can you create a layout with a custom navigation bar at the top, a centered text view, and a footer at the bottom, ensuring the navigation bar and footer respect the safe areas?

::: details Solution

```swift
VStack {
    Text("Custom Navigation Bar")
        .font(.largeTitle)
        .padding()
        .frame(maxWidth: .infinity)
        .background(Color.gray)
        .padding(.top, UIApplication.shared.windows.first?.safeAreaInsets.top ?? 0)
    
    Spacer()
    
    Text("Centered Content")
        .font(.title)
        .background(Color.white)
    
    Spacer()
    
    Text("Footer Content")
        .padding()
        .background(Color.orange)
        .padding(.bottom, UIApplication.shared.windows.first?.safeAreaInsets.bottom ?? 0)
}
.background(Color.gray.opacity(0.2))
.edgesIgnoringSafeArea(.bottom)
```

Explanation: This VStack arranges a custom navigation bar at the top, a centered text view, and a footer at the bottom. Safe area insets ensure that the navigation bar and footer are positioned correctly within the safe areas, while the edgesIgnoringSafeArea(.bottom) allows the background color to extend to the bottom of the screen.

:::
