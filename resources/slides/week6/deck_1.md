---
marp: true
theme: default
class:
  - invert
---

# What is a View?

- A `View` in SwiftUI represents the UI elements in your app.
- It is the fundamental building block of your app's interface.

---

# Text

```swift
Text("Welcome to SwiftUI!")
    .font(.largeTitle)
    .fontWeight(.bold)
    .foregroundColor(.green)
```

---

# Image

```swift
Image(systemName: "heart.fill")
    .resizable()
    .scaledToFit()
    .frame(width: 50, height: 50)
```

---

# Button

```swift
Button(action: {
    print("Button was pressed!")
}) {
    Text("Press Me")
        .font(.title2)
        .padding()
        .background(Color.blue)
        .foregroundColor(.white)
        .cornerRadius(10)
}
```

---

# Textfield

```swift
TextField("Enter your email", text: $email)
    .textFieldStyle(RoundedBorderTextFieldStyle())
    .padding()
```

---

# Toggle

```swift
Toggle(isOn: $isOn) {
    Text("Enable feature")
}
.padding()
```

---

# VStack

```swift
VStack(alignment: .leading, spacing: 20) {
    Text("Header")
        .font(.headline)
    Text("Subheader")
        .font(.subheadline)
    Text("Detail text")
        .font(.body)
}
.padding()
```

---

# HStack

```swift
HStack(spacing: 10) {
    Image(systemName: "star.fill")
    Text("Favorite")
    Spacer()
    Image(systemName: "star.fill")
}
.padding()
```

---

# ZStack

```swift
ZStack {
    Color.blue
        .edgesIgnoringSafeArea(.all)
    VStack {
        Text("Overlayed Text")
            .font(.largeTitle)
            .foregroundColor(.white)
        Spacer()
    }
}
```

---

# Combining Views

## Profile Card Example

```swift
VStack {
    Image(systemName: "person.circle.fill")
        .resizable()
        .frame(width: 100, height: 100)
        .foregroundColor(.purple)
    
    Text("John Doe")
        .font(.title)
        .fontWeight(.bold)
    
    HStack {
        Button(action: {
            print("Follow tapped!")
        }) {
            Text("Follow")
                .padding()
                .background(Color.blue)
                .foregroundColor(.white)
                .cornerRadius(10)
        }
    }
}
.padding()
.background(Color.white)
.cornerRadius(15)
.shadow(radius: 10)
```

---

# Modifiers

## Basic Modifiers

```swift
Text("SwiftUI is amazing!")
    .font(.title)
    .fontWeight(.semibold)
    .foregroundColor(.purple)
    .padding()
    .background(Color.yellow)
    .cornerRadius(10)
    .shadow(color: .gray, radius: 5, x: 0, y: 5)
```

---

# Modifiers

## Button Modifiers

```swift
Button(action: {
    print("Custom button tapped!")
}) {
    Text("Custom Button")
        .font(.headline)
        .padding()
        .background(Color.orange)
        .foregroundColor(.white)
        .cornerRadius(20)
        .shadow(radius: 10)
}
```

---

# Modifiers

## Image Modifiers

```swift
Image(systemName: "star.fill")
    .resizable()
    .scaledToFit()
    .frame(width: 50, height: 50)
    .foregroundColor(.yellow)
    .shadow(radius: 5)
```

---

# Custom Modifiers

## Creating a Custom Modifier

```swift
struct Highlighted: ViewModifier {
    var color: Color
    
    func body(content: Content) -> some View {
        content
            .padding()
            .background(color)
            .cornerRadius(10)
            .shadow(radius: 10)
    }
}

extension View {
    func highlighted(with color: Color) -> some View {
        self.modifier(Highlighted(color: color))
    }
}
```

---

# Custom Modifiers

## Using a Custom Modifier

```swift
Text("Highlighted Text")
    .highlighted(with: .yellow)
```

---

# Practical Examples

## Stylish Card View

```swift
struct CardView: View {
    var body: some View {
        VStack {
            Image(systemName: "star.fill")
                .resizable()
                .frame(width: 60, height: 60)
                .foregroundColor(.yellow)
            
            Text("Star Card")
                .font(.title)
                .foregroundColor(.black)
                .padding()
            
            Text("This is a description for the card view.")
                .font(.body)
                .foregroundColor(.gray)
                .padding()
        }
        .padding()
        .background(Color.white)
        .cornerRadius(15)
        .shadow(radius: 10)
    }
}
```

---

# Practical Examples

## Gradient Button

```swift
struct GradientButton: View {
    var body: some View {
        Button(action: {
            print("Gradient button pressed!")
        }) {
            Text("Gradient Button")
                .font(.headline)
                .padding()
                .foregroundColor(.white)
                .background(LinearGradient(gradient: Gradient(colors: [.blue, .purple]),
                                            startPoint: .leading,
                                            endPoint: .trailing))
                .cornerRadius(15)
                .shadow(radius: 10)
        }
    }
}
```

---

# Advanced Examples

## Custom Progress View

```swift
struct CustomProgressView: View {
    var progress: Double
    
    var body: some View {
        VStack {
            Text("Progress: \(Int(progress * 100))%")
                .font(.headline)
                .padding()
            
            ZStack {
                Circle()
                    .stroke(Color.gray.opacity(0.3), lineWidth: 20)
                
                Circle()
                    .trim(from: 0, to: CGFloat(progress))
                    .stroke(Color.blue, lineWidth: 20)
                    .rotationEffect(Angle(degrees: -90))
                
                Text("\(Int(progress * 100))%")
                    .font(.largeTitle)
                    .foregroundColor(.blue)
            }
            .padding()
        }
    }
}
```

---

# Notification Banner

```swift
struct NotificationBanner: View {
    var message: String
    var backgroundColor: Color
    
    var body: some View {
        HStack {
            Text(message)
                .font(.headline)
                .foregroundColor(.white)
                .padding()
        }
        .background(backgroundColor)
        .cornerRadius(10)
        .shadow(radius: 5)
    }
}
```

---

# Questions?