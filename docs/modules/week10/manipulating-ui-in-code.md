# Manipulating UI In Code

## Overview

Sometimes you want to modify an existing UI object in code; this lesson will show the methodology to making changes to UI. This lesson will build on the example code from the previous lesson and will look at modifying the basic UI objects previously looked at.

## Alpha of UI Objects

You can change the opacity of a UI object if you wish to. This can be used to imply that something is disabled, or it can be used to show what is behind that object. You do this by setting the **.alpha** value of the object like so:

```swift
myTextField.alpha = 0.5
```

This would cause the UI object to draw its graphics blended 50% with the graphics behind it.

:::tip
Objects that are only partial drawn are not disabled, and the user can still interact with them.
:::

## Hidden UI Objects

One of the useful parameters for your UI objects is to be hidden. You can hide and show UI objects by setting its **.isHidden** parameter. If you wanted to hide a textField for instance, you can set it like this:

```swift
myTextField.isHidden = true
```

This simply prevents the UI object from being displayed until it is set back to false.

:::tip
Hidden objects are not disabled; the user can potentially still interact with a hidden object.
:::

## Enabled UI Objects

If you wish to make a UI object disabled, meaning the user can not interact with it, you must set the **.isEnabled** parameter equal to false. You can do this like so:

```swift
myTextField.isEnabled = false
```

When you decide to enable that object, you simple set it back to true.

:::tip
Only objects that the user can interact with have an **.isEnabled** parameter.  Also note that UITextView objects also have a **.isSelectable** parameter that controls if the user can select, and copy the text.
:::

## Resizing UI Objects

Changing a UI object’s size is done by setting the object’s frame.size property. Even though the size has a .width and a .height value, these are read-only values and can not be modified directly. To do change the size you must set the frame.size equal to a new **CGSize** object, passing in a new width and height. You do this like so:

```swift
myTextView.frame.size = CGSize(width: 180, height: 65)
```

This sets a new size to the textView object to 180 points wide, by 65 points tall.

## Moving UI Objects

Setting a UI object’s position within its parent view is done by setting the object’s frame.origin property. The parent view is whatever this view is added to (eg. main view, scrollview). Even though the origin has a .x and a .y value, these are read-only values and can not be modified directly. To change its position you must set its origin equal to a new **CGPoint** object like this:

```swift
myTextView.frame.origin = CGPoint(x: 50, y: 250)
```

This code would move the textView to a location within its parent view with its upper left corner drawn at x = 50, and y = 250.

## Moving and Resizing UI Objects

If you want to change the position, and size of an object at the same time, you can set the object’s frame equal to a new **CGRect**. As described in the last lesson, a frame is of type CGRect, and you can set an object’s .frame parameter to set a new location for it’s origin, and size. You would set it like this:

```swift
myImageView.frame = CGRect(x: 20, y: 35, width: 200, height: 200)
```

This would set the upper left of this imageView to x = 20, y = 35, and set the image width and height to 200.

## Animating Changes to UI Objects

Some of the changes can be ‘animated’ using the **UIView.animate()** function built in to the UIKit framework. Animating changes to objects shows the changes over a period of time, letting the change to an object’s position shows the object slide from its initial location, to it’s new location.

You do this by setting the new position, size or alpha to its new value inside a code block that you pass to the animate function. Looking at the imageView example above, if you wanted the image to slide down on the screen by 100 pixels in the y-direction you would set its position like this:

```swift
UIView.animate(withDuration: 0.5, animations: {     self.myImageView.frame.origin = CGPoint(x: 20, y: 135)})
```

:::tip
You must use ‘self.’ before the UI object inside the animate function to identify the object you are modifying.
:::

This animation can be set to what ever duration you like, in this case it will last 0.5 seconds.  You can also make changes to multiple objects within one animation function call, and all the changes will occur in the same amount of time.

If you want to animate multiple objects, each with their own duration you can call the animate function multiple times in a row.  Each time you call the animate function, you would pass a different UI change with it's own duration to it.

## Setting a Button’s Action

When you create a UIButton you will want to have an action associated with it. You have learned that a UIButton's action is a specific function that is triggered when the user has taped the button linked to that action.

You can do this for your button in code by first creating a new function in your viewController class to be used as the action for that button, like so:

```swift
@IBAction func myButtonAction(_ sender: Any) {     print(“Button pressed”)}
```

You may want the action to be triggered when the button detected a touchUpInside, touchDown, touchDragOutside, touchDragInside, or one of the other interactions a user can have with that button. You set your action, with the desired controlEvent event like this:

```swift
myButton.addTarget(self, action: #selector(myButtonAction), for: .touchUpInside)
```

:::tip
These control events can be found in the UIControlEvents struct.
:::

Now the button will trigger the myButtonAction function when the user has released their finger inside the button.

You can  [download an example project here](/F2020/assets/downloads/UIUpdatingCode.zip) that builds on the previous lesson's project on creating UI in code.  This example incorporates the information on manipulating UI in code learned in this lesson.