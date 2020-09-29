# Hiding Keyboards with First-Responders

When a user clicks in a textField or textView, the iOS virtual keyboard will come up at the bottom of the screen.  In iOS development, there is no automatic functionality for hiding the keyboard — the keyboard view just sits there once it has been summoned.  The reason is that the developer must decide how, and when, to hide the keyboard.

## Resigning a First-Responder

The first option for hiding a textField's, or a textView's keyboard is to access that outlet's ``resignFirstResponder()`` method which will dismiss the keyboard.  When the keyboard is currently shown on the screen (and currently won't go away) it is acting as your application's first responder.  A **first responder** is the current object in your app that is in focus and is receiving events.  You can set it so that a button—or even a click on the background of the view—calls that outlet's ``resignFirstResponder()`` method, and the keyboard will then go away.  

The ``touchesBegan()`` method is built into the viewController class that fires when the user touches the background of the view, and you can put code in this method to hide the keyboard.

Another option to hide the keyboard when the user taps on the background is to call the ``view.endEditing()`` method.  The ``view.endEditing()`` method tells the view to hide the keyboard belonging to the text sub-view within that view.  

To test this functionality add a textField, a textView, and a button to a view of an iOS application.

![Dismiss Keyboard](/F2020/assets/img/KeyResponder_1.png)

Then, connect the textField and textView to outlets, and your button to an action in your viewController class.

![Dismiss Keyboard](/F2020/assets/img/KeyResponder_2.png)

You can see below how to call the ``view.endEditing(true)`` method in the ``touchesBegan()`` method.  You can also see the ``resignFirstResponder()`` function is called on both the textField and textView within the action attached to the button.

![Dismiss Keyboard](/F2020/assets/img/KeyResponder_3.png)

:::warning NOTE
The ``touchesBegan`` method is a function built in to the viewController class that is exicuted when the user begins to touch the view itself.  This does **not** get fired when a sub-view is touched like a button, label or textView.
:::

The following videos describe using resignFirstResponder, and endEditing to hide the keyboard:

[Dismiss the Keyboard with First Responder <Badge text="Lynda"/>](https://www.linkedin.com/learning/ios-12-development-essential-training-1-fundamentals-ui-and-architecture/first-responders?u=2199673)

[Building Your First iOS App - First Responders <Badge text="Lynda"/>](https://www.linkedin.com/learning/building-your-first-ios-app/first-responders?u=2199673)
