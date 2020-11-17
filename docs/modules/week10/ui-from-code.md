# Create User Interfaces from Code

## Overview

Sometimes you will find a need to generate a UI object in code - this could be because it cannot be defined in a storyboard (e.g. you don't know how many elements are needed from a server response) or you want to add custom UI elements to a table cell.

This lesson will show you how to create some of the basic UI elements in code, and add them to the application's current view.

To create most UI objects you need to:

1. Declare a variable of the specific UI object.
2. Initialize the UI object using a CGRect to define it's Frame.
3. Add the object to the current view.
4. Set Colour, text and other parameters of the object.

:::tip
Steps 1 and 2 can be combined in to one line of code, and steps 3 and 4 can be done in either order (i.e. set the object's properties, and then add it to the parent view).
:::

## Define a Frame for a UI Object

All UI objects in iOS are visually **placed** and **sized** by its Frame.  The Frame defines the object's position within its parent view, and the object's size.  It does this using an object called a CGRect - that is all a Frame is.

Below you can see a diagram of a Frame:

![Frame](/F2020/assets/img/CodedUI-Frame.png)

And here you can see the corresponding values for a CGRect:

![Frame](/F2020/assets/img/CodedUI-CGRect.png)

Let's look at some examples of how to add a user interface to a view by creating a UITextView, UITextField, UIImage, and UIButton in code.

## Create a UITextView in code

First, at the top of the viewController class, declare an @IBOutlet variable of the type of UI object you want.

```swift
@IBOutlet var newTextView : UITextView!
```

Second, you need to define a CGRect that will hold the parameters for the UI object's frame (position and size).  The CGRect values are passed to the UI object's init method, which will create the UI object with the desired size, and origin.

```swift
// Define the new TextView size and positioning with a rectlet
textViewFrame = CGRect(x: 20, y: 340, width: 340, height: 1600)

// Create TextViewobject
newTextView = UITextView(frame: textViewFrame)
```

Next, you add the new UI object to the main view of the application.

```swift
// Add TextView to the main view
self.view.addSubview(newTextView)
```

And lastly you can edit the text, colour and other properties of the new UI object.

```swift
/// Setup TextView text, and style
newTextView.text = "This is some text."
newTextView.textColor = UIColor(red: 0.9, green: 0.8, blue: 0.8, alpha: 1.0)
newTextView.backgroundColor = UIColor.darkGray
```

Now when an application that contains this code is run, you should see a textView 30 point from the left, and top of the view.  It will have a width of 150, and a height of 80 points, and will have red text on a dark grey background with some text displayed within it.

## Create a UITextField in code

At the top of the viewController class, declare an @IBOutlet for a textField.

```swift
@IBOutlet var newTextField : UITextField!
```

Second, define a CGRect to hold the UI object's frame (position and size), and create the txtField with it

```swift
// Define the new txtField size and positioning with a rect
let txtFieldFrame = CGRect(x: 25, y: 280, width: 330, height: 40)

// Create txtFieldobject
newTextField = UITextField(frame: txtFieldFrame)
```

Next, add the new UI object to the main view of the application.

```swift
// Add txtField to the main view
self.view.addSubview(newTextField)
```

And lastly you can edit the text, colour and other properties of the new UI object.

```swift
// Setup TextField placeholder-text, and style
newTextField.placeholder = "This is placeholder text."

// Setup TextField font
newTextField.font = UIFont(name: newTextField.font!.fontName, size: 14)

// Setup TextField text and background colors
newTextField.backgroundColor = UIColor(red: 0.5, green: 0.8, blue: 0.5, alpha: 1.0)newTextField.textColor = UIColor.black

// Setup TextField border style
newTextField.layer.cornerRadius = 18
newTextField.layer.borderWidth = 3
newTextField.layer.borderColor = UIColor.lightGray.cgColor

// Setup TextField padding
newTextField.layer.sublayerTransform = CATransform3DMakeTranslation(10, 0, 0)

// Setup TextField's security mode (normal or password)
newTextField.isSecureTextEntry = false
```

When the application is run there will be a textField vertically centred in the view.

## Create a UIImageView in code

At the top of the viewController class, declare an @IBOutlet for an imageView.

```swift
@IBOutlet var newImageView : UIImageView!
```

Second, define a CGRect to hold the UI object's frame (position and size), and create the imageView with it

```swift
// Define the new imageView size and positioning with a rect
let imageFrame = CGRect(x: 35, y: 35, width: 300, height: 223)

// Create imageView object (size is automatically calculated from the image)
newImageView = UIImageView(image: UIImage(named: "ACLogo"))
```

Next, add the new UI object to the main view of the application.

```swift
// Add imageView to the main view
self.view.addSubview(newImageView)
```

And lastly you can edit the text, colour and other properties of the new UI object.

```swift
// Set a new size if the original size is not desired
newImageView.frame = imageFrame
```

When the application is run there will be an imageView near the bottom of the view.

## Create a UIButton in code

At the top of the viewController class, declare an @IBOutlet for a button.

```swift
@IBOutlet var newButton : UIButton!
```

Second, define a CGRect to hold the UI object's frame (position and size), and create the button with it

```swift
// Define the new Button size and positioning with a rect
let buttonFrame = CGRect(x: 90, y: 535, width: 200, height: 50)

// Create Button object
newButton = UIButton(frame: buttonFrame)
```

Next, add the new UI object to the main view of the application.

```swift
// Add TextView to the main view
self.view.addSubview(newButton)
```

And lastly you can edit the text, colour and other properties of the new UI object.

```swift
// Setup Button text and style
newButton.setTitle("Press Me", for: .normal)
newButton.setTitleColor(UIColor.cyan, for: .highlighted)
newButton.backgroundColor = UIColor.grey
```

Now when the application runs, you should see a button below the textField.  There is no action attached to it, but we will see how to do add one in the next lesson.

You can [download a working copy of this code here](/mad9137/assets/downloads/UIFromCode.zip).  In this project the code to create each UI object has been written into its own function.  Then, each function is called in the viewDidLoad() function.