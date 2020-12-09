# AlertController pop-ups

## Overview
In iOS, if you would like a simple message to pop-up on the screen you can use the UIAlertController class.  The message is displayed in a small window with a button to close it.  The AlertController is not the type of UI object that you can added to your storyboard in the interface builder - it must be created and presented in code.
 
## Basic Alert
In this example, an IBAction is connected to a regular button in the view that the user can click on to make the alert pop-up. The code that is needed to create and display the alert would look like this:

```swift
// Create a new UIAlertController object with a custom title and message
let myAlert:UIAlertController = UIAlertController(title: "Basic Alert", message: "This is an alert without actions.", preferredStyle: UIAlertController.Style.alert)

// Create an 'OK' Button to close the alert
let myAction:UIAlertAction = UIAlertAction(title: "Ok", style: UIAlertAction.Style.default, handler: nil)

// Add the Button to the Alert
myAlert.addAction(myAction)
        
// Add the Button to the view
self.present(myAlert, animated: true, completion: nil)
```

If you wanted, you could add a function that would be called when the alert button is clicked.  This would be done by passing the name of your function (instead of nil) to the handler when you create your UIAlertAction. 
 
## Alert with triggered actions

If you want a function to be triggered when the alert first shows up, you would pass the name of that function to the completion parameter when when calling presentViewController.  The code would look like this:

```swift
// Create a new UIAlertController object with a custom title and message
let myActionsAlert:UIAlertController = UIAlertController(title: "Alert with actions", message: "This is an alert with actions.", preferredStyle: UIAlertController.Style.alert)

// Create a 'Close' Button to close the alert that calls an action function when triggered
let myAction:UIAlertAction = UIAlertAction(title: "Close", style: UIAlertAction.Style.default, handler: alertCloseAction)

// Add the Button to the Alert
myActionsAlert.addAction(myAction)

// Add the Button to the view that calls a completion function when the Alert is first opened
self.present(myActionsAlert, animated: true, completion: alertOpenAction)
```

The function that would be called would simply look like this:

```swift
func alertOpenAction() {
    print("AlertController has been open.")
}

// Function that runs after the AlertController has been closed 
func alertCloseAction( a: UIAlertAction) {
    print("AlertController was just closed.")
}
```

## Alert with multiple buttons and actions

You can add more than one button to an alert, each one having their own closing action.  The following code adds multiple buttons to the alert each with their own closing function:

```swift
// Create a new UIAlertController object with a custom title and message
let myOptionsAlert:UIAlertController = UIAlertController(title: "Alert with options", message: "This is an alert with multiple buttons that perform different actions.", preferredStyle: UIAlertController.Style.alert)

// Create a 'Accept' Button to close the alert that calls an action function when triggered
let acceptAction:UIAlertAction = UIAlertAction(title: "Accept", style: UIAlertAction.Style.default, handler: alertAcceptAction)

// Create a 'Cancel' Button to close the alert that calls an action function when triggered
let cancelAction:UIAlertAction = UIAlertAction(title: "Cancel", style: UIAlertAction.Style.cancel, handler: alertCancelAction)

// Add the Buttons to the Alert
myOptionsAlert.addAction(acceptAction)
myOptionsAlert.addAction(cancelAction)

// Add the Alert to the view that calls a clompletion functionwhen the Alert is first opened
self.present(myOptionsAlert, animated: true, completion: nil)
```

And here are the actions for the buttons added to the AlertController in this example:

```swift
// Function that runs when the alert's Accept button is clicked
func alertAcceptAction( a: UIAlertAction) {
    print("Accept button was pressed.")
}

// Function that runs when the alert's Cancel button is clicked
func alertCancelAction( a: UIAlertAction) {
    print("Cancel button was pressed.")
}
```
