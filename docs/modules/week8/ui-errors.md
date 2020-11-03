# Debugging UI Connection Errors

In iOS application development *—* as with any kind of development *—* it is important to learn how to debug problems that arise.

## UI to Code Connection Errors

**Scenario 1: After making a connection from a UI element to your code (action or outlet) you either renamed the outlet variable or action function name, deleted a UI connection accidentally, or unintentionally made more than one connection to the same UI element.**

Let us look at a simple example of a single view application with the following layout and code.

![UI Connection Error](/F2020/assets/img/ConnectionError_1.png)

When the button is pressed the Label text will update to show the result of the **divide** function.

Now, let's assume the developer of this application has decided to change the UILabel outlet variable name from myLabel to buttonLabel in their code.

![UI Connection Error](/F2020/assets/img/ConnectionError_2.png)

There will not be any noticeable errors in the code because of this change, but the label object in the storyboard has not been changed.  The error will only be noticed the next time the developer tries to compile and run the application.

![UI Connection Error](/F2020/assets/img/ConnectionError_3.png)

When the developer tries to run the application, it will crash before the application starts running in the simulator and will display an error report in Xcode that looks similar to the image above.

::: tip
 When your application crashes because of a broken UI connection to an outlet or an action, the AppDelegate.swift file is shown in the editor.
:::

When your application crashes, the information about the error will be printed down in the console at the bottom of Xcode.  The error message prints a description of the error followed by a print out of the application call stack.  To see what error you have, you must scroll to the top of the error message to see the description. In this case, we see the reason for the crash:

```swift
this class is not key value coding-compliant for the key myLabel.
```

This tells you part of the information you are looking for, the variable myLabel, is being used as a key for some value that is missing.  When the developer connected the Label to their code, a connection was made in the storyboard for that UI element.  When the variable name was was changed, the storyboard does not know about this, so it is up to the developer to update the change in the storyboard.

![UI Connection Error](/F2020/assets/img/ConnectionError_4.png)

To fix this, open the Assistant Editor to view your storyboard and code at the same time.  To look at a UI object's connection, you can go in the inspector and open the Connections Inspector, or just right-click on the UI object in the storyboard and you will see a full list of all the connections currently for that object.

You can see in the image above that the variable in code is buttonLabel, while the connection in the layout is still referencing myLabel.  To remove the old connection, you must click the little 'x' beside the old name.

![UI Connection Error](/F2020/assets/img/ConnectionError_5.png)

After removing the old reference from the object, you should see that the connection indicator to the left of your outlet variable code has no dot in the center of the circle.  This indicates that this outlet has no connection made to it.  The next step is to connect the UI object to the new outlet variable.

This is done the same way you created the connection, by holding control and clicking the left mouse button on the UI object, and dragging the blue line to the new variable name you created.

![UI Connection Error](/F2020/assets/img/ConnectionError_6.png)

When you reconnect a UI object to an outlet in code, you will see the variable name highlight only for connections to outlets of the correct UI object type *—* in this case a UILabel.  Action are connected in the same way, but will highlight the whole function when dragging a UI connection to it.

![UI Connection Error](/F2020/assets/img/ConnectionError_7.png)

The application should now run and as expected.

## Identifier Connection issues

If you are missing Segue identifiers or tableView Prototype Cell identifiers that you are attempting to access in code, your application will crash.  This is a very common reason for a project to crash, and can be easily remedied by checking that your segue and prototype cell identifiers are set in the storyboard with the *exact same name* that you are using to access them in your code.

## Segue Identifier Errors

If you are missing a segue identifier or it is spelled incorrectly and you try to call performSegue(withIdentifier: "myIdentifier", sender: sender), your application will crash.  When your application crashes due to the mistyped segue identifier, you will see an error message with a reason that looks something like:

```swift
Receiver (<MyProject.MyTableViewController: 0x7ff542d089d0>) has no segue with identifier 'showSecondVieww'
```

This tells you that you missed naming your segue, or there is a spelling mismatch between your code and the segue identifier in the storyboard.

## Prototype Cell Identifier Errors

If you have misspelled, or forgotten to name a Prototype Cell identifier and you try to dequeue a cell from that prototype, your application will crash showing a reason in the console like:

```swift
unable to dequeue a cell with identifier myCelll - must register a nib or a class for the identifier or connect a prototype cell in a storyboard
```

This tells you that your prototype cell identifier name is missing or misspelled.

:::tip
If your application is missing or has a misspelled identifier, it will only crash when you try to compile the application, before it launches in the simulator.
:::

The following video shows how to investigate using the Connections inspector:

[iOS 11 Development Essential Training: Troubleshoot UI-to-code connections](https://www.lynda.com/iOS-tutorials/Troubleshoot-UI-code-connections/597993/666709-4.html)

[Back to Week 8](./index.md#during-class)