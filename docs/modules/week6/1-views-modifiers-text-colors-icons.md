# 🚀 Views, Modifiers and more

## 🛠️ Views

In SwiftUI, a `View` is a fundamental component that describes what appears on the screen. Each `View` is a building block of your app's interface.

### Basic Views

- **Text**

  Displays a line of text. You can modify its appearance using various modifiers.

  ```swift
  Text("Welcome to SwiftUI!")
      .font(.largeTitle) // Sets the font size
      .fontWeight(.bold) // Makes the font bold
      .foregroundColor(.green) // Changes the text color
  ```

- **Image**

  Displays images from your assets or SF Symbols.

  ```swift
  Image(systemName: "heart.fill")
      .resizable() // Allows resizing the image
      .scaledToFit() // Maintains aspect ratio
      .frame(width: 50, height: 50) // Sets specific dimensions
  ```

- **Button**

  Creates an interactive button.

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

- **TextField**

  A field where users can enter text.

  ```swift
  TextField("Enter your email", text: $email)
      .textFieldStyle(RoundedBorderTextFieldStyle())
      .padding()
  ```

- **Toggle**

  A switch control that toggles between on and off states.

  ```swift
  Toggle(isOn: $isOn) {
      Text("Enable feature")
  }
  .padding()
  ```

### Stacking Views

Views can be arranged in vertical, horizontal, or overlay layouts using container views.

- **VStack**

  Stacks views vertically.

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

- **HStack**

  Stacks views horizontally.

  ```swift
  HStack(spacing: 10) {
      Image(systemName: "star.fill")
      Text("Favorite")
      Spacer()
      Image(systemName: "star.fill")
  }
  .padding()
  ```

- **ZStack**

  Overlays views on top of each other.

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

### Combining Views

You can combine views to create more complex layouts.

- **Example of a Profile Card**

  ```swift
  VStack {
      Image(systemName: "person.circle.fill")
          .resizable()
          .frame(width: 100, height: 100)
          .foregroundColor(.purple)
      
      Text("John Doe")
          .font(.title)
          .fontWeight(.bold)
      
      Text("iOS Developer")
          .font(.subheadline)
          .foregroundColor(.gray)
      
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
          
          Button(action: {
              print("Message tapped!")
          }) {
              Text("Message")
                  .padding()
                  .background(Color.green)
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

## 🛠️ Modifiers

Modifiers are methods that you use to change a view’s appearance or behavior.

##### **2.1 Basic Modifiers**

- **Text Modifiers**

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

- **Button Modifiers**

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

- **Image Modifiers**

  ```swift
  Image(systemName: "star.fill")
      .resizable()
      .scaledToFit()
      .frame(width: 50, height: 50)
      .foregroundColor(.yellow)
      .shadow(radius: 5)
  ```

- **TextField Modifiers**

  ```swift
  TextField("Username", text: $username)
      .textFieldStyle(RoundedBorderTextFieldStyle())
      .padding()
      .background(Color.gray.opacity(0.1))
      .cornerRadius(8)
  ```

- **Slider Modifiers**

  ```swift
  Slider(value: $sliderValue, in: 0...100)
      .padding()
      .accentColor(.green)
  ```

### Combining Modifiers

Modifiers can be stacked to apply multiple changes.

```swift
Text("Beautiful Sunset")
    .font(.title)
    .foregroundColor(.orange)
    .padding()
    .background(Color.black)
    .cornerRadius(20)
    .shadow(color: .gray, radius: 10, x: 0, y: 5)
```

### Custom Modifiers

You can define your own view modifiers for reusable styles.

- **Creating a Custom Modifier**

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

- **Using the Custom Modifier**

  ```swift
  Text("Highlighted Text")
      .highlighted(with: .yellow)
  ```

### Practical Examples with Modifiers

- **Example: A Stylish Card View**

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

- **Example: A Custom Button with Gradients**

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

- **Creating a Custom Progress View**

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

- **Building a Notification Banner**

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

## 🛠️ Text

SwiftUI's `Text` view is one of the most fundamental building blocks for displaying and styling text in your app. This guide will cover everything you need to know about using `Text` in SwiftUI, from basic usage to advanced customization.

The `Text` view in SwiftUI is used to display one or more lines of text on the screen. It is simple to use and provides many powerful customization options, allowing you to create richly formatted text with minimal code.

**Basic Usage Example:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
    }
}
```

In this example, a `Text` view displays the string "Hello, World!" on the screen.

### Text Initialization

You can create a `Text` view by passing a string directly or using localized strings for internationalization.

**Example:**

```swift
Text("Welcome to SwiftUI")
Text(LocalizedStringKey("greeting_message"))
```
The first line uses a plain string, while the second uses a localized string key.

### Text Modifiers

Modifiers allow you to customize the appearance and behavior of `Text` views. Below are some commonly used modifiers:

### Font
You can change the font of the text using the `.font()` modifier.

**Example:**

```swift
Text("Large Title")
    .font(.largeTitle)

Text("Custom Font")
    .font(.custom("HelveticaNeue", size: 20))
```

The first line uses a built-in font, and the second line applies a custom font.

### Font Weight

You can set the font weight using the `.fontWeight()` modifier.

**Example:**

```swift
Text("Bold Text")
    .fontWeight(.bold)

Text("Light Text")
    .fontWeight(.light)
```

### Text Color

Change the color of the text using the `.foregroundColor()` modifier.

**Example:**

```swift
Text("Colored Text")
    .foregroundColor(.blue)
```

### Text Alignment

Align text within its container using the `.multilineTextAlignment()` modifier.

**Example:**

```swift
Text("Center Aligned Text")
    .multilineTextAlignment(.center)
```

### Text Case

Transform the text to uppercase or lowercase using the `.textCase()` modifier.

**Example:**

```swift
Text("Uppercase Text")
    .textCase(.uppercase)
```

### Line Limit and Truncation

Control the number of lines or truncate the text with the `.lineLimit()` and `.truncationMode()` modifiers.

**Example:**

```swift
Text("This is a very long text that will be truncated if it exceeds the limit.")
    .lineLimit(1)
    .truncationMode(.tail)
```

### Kerning and Tracking

Adjust the spacing between characters with the `.kerning()` and `.tracking()` modifiers.

**Example:**

```swift
Text("Kerning Example")
    .kerning(2)

Text("Tracking Example")
    .tracking(2)
```

### Underline and Strikethrough

You can underline or strike through text using `.underline()` and `.strikethrough()` modifiers.

**Example:**

```swift
Text("Underlined Text")
    .underline()

Text("Strikethrough Text")
    .strikethrough()
```

### Text Interpolation

SwiftUI supports text interpolation, allowing you to dynamically insert values into text strings.

**Example:**

```swift
let name = "John"
let age = 30

Text("My name is \(name) and I am \(age) years old.")
```

### Text Styling with Attributed Strings

SwiftUI provides support for `AttributedString`, which allows for more granular text styling within a single `Text` view.

**Example:**

```swift
if #available(iOS 15.0, *) {
    var attributedString = AttributedString("Hello, SwiftUI")
    attributedString.foregroundColor = .blue
    attributedString.font = .largeTitle
    
    Text(attributedString)
}
```

### Combining Multiple Text Views

You can combine multiple `Text` views to apply different styles to different parts of the text.

**Example:**

```swift
Text("SwiftUI ")
    .font(.largeTitle)
    .foregroundColor(.blue) +
Text("Text")
    .font(.headline)
    .foregroundColor(.green)
```

### Accessibility with Text

SwiftUI's `Text` view supports accessibility out of the box. You can further enhance accessibility using modifiers like `.accessibilityLabel()`.

**Example:**

```swift
Text("Tap here")
    .accessibilityLabel("Tap this button to continue")
```

### Multiline Text with Custom Line Spacing

For multiline text, you can control the spacing between lines using the `.lineSpacing()` modifier.

**Example:**

```swift
Text("This is a multiline\ntext with custom\nline spacing.")
    .lineSpacing(10)
```

### Text within a Dynamic Layout

Text views can dynamically resize based on their content, making them a perfect fit for various layouts in SwiftUI.

**Example:**

```swift
VStack {
    Text("SwiftUI is flexible")
        .font(.title)
    Text("It allows dynamic layouts with ease.")
        .font(.subheadline)
}
```

## 🛠️ Images

SwiftUI uses the `Image` view to load and display images. You can load images from various sources, such as the app's asset catalog, the system's built-in icons (SF Symbols), or even a remote URL.

**Loading an Image from Assets:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Image("exampleImage") // The image should be in the asset catalog.
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: 200, height: 200)
    }
}
```

**Loading a System Image (SF Symbol):**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Image(systemName: "star.fill") // SF Symbol
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: 50, height: 50)
            .foregroundColor(.yellow)
    }
}
```

**Loading an Image from a URL:**
While SwiftUI does not have a built-in way to load images from URLs directly, you can use `AsyncImage` in iOS 15 and later:

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        AsyncImage(url: URL(string: "https://example.com/image.jpg")) { image in
            image.resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 200, height: 200)
        } placeholder: {
            ProgressView()
        }
    }
}
```

### Resizing and Scaling Images

Resizing and scaling are essential to ensure images fit well within your UI. The `resizable()` modifier allows you to resize the image, and `aspectRatio(contentMode:)` controls how the image scales.

**Resizing and Scaling an Image:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Image("landscape")
            .resizable()
            .aspectRatio(contentMode: .fill)
            .frame(width: 300, height: 200)
            .clipped() // Ensures the image doesn't overflow the frame
    }
}
```

**Preserving the Aspect Ratio:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Image("portrait")
            .resizable()
            .aspectRatio(3/4, contentMode: .fit)
            .frame(width: 150)
    }
}
```

### Rendering Modes and Image Interpolation

SwiftUI provides rendering modes to control how images are displayed, such as whether they should respect color changes. Interpolation defines how images are smoothed when scaled.

**Using Rendering Modes:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "star")
                .renderingMode(.original) // Uses the original image colors
                .frame(width: 50, height: 50)
            
            Image(systemName: "star")
                .renderingMode(.template) // Uses the foreground color
                .foregroundColor(.blue)
                .frame(width: 50, height: 50)
        }
    }
}
```

**Setting Image Interpolation:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Image("highResolutionImage")
            .resizable()
            .interpolation(.high) // Smooths the image
            .frame(width: 300, height: 200)
    }
}
```

## 🛠️ Icons and SF Symbols

SF Symbols are a set of over 3,300 icons provided by Apple, designed to integrate seamlessly with the San Francisco system font.

**Using SF Symbols:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack {
            Image(systemName: "house.fill")
                .foregroundColor(.blue)
            Text("Home")
        }
        .font(.title)
    }
}
```

SF Symbols can be resized and customized similarly to other images.

### Customizing SF Symbols

SF Symbols offer extensive customization options. You can change their weight, scale, and color to match your design.

**Customizing Symbol Weight and Scale:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        HStack {
            Image(systemName: "heart.fill")
                .symbolRenderingMode(.palette) // Allows multiple colors
                .foregroundStyle(.red, .black) // Foreground color layers
                .imageScale(.large) // Increases the symbol size
                .font(.system(size: 40, weight: .bold)) // Custom font size and weight
        }
    }
}
```

### Accessibility Considerations

Making your images and icons accessible is crucial for all users, including those using VoiceOver. SwiftUI provides `accessibilityLabel` and `accessibilityHint` to enhance the user experience.

**Adding Accessibility to Images:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Image("profilePicture")
            .resizable()
            .frame(width: 100, height: 100)
            .accessibilityLabel("Profile picture of John Doe")
            .accessibilityHint("Double-tap to view profile")
    }
}
```

**Adding Accessibility to SF Symbols:**

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        Image(systemName: "star.fill")
            .foregroundColor(.yellow)
            .accessibilityLabel("Favorite icon")
    }
}
```
