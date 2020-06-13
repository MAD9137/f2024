# Connect Actions to UI Objects

An **IBAction** is a function you create in your viewController class that will run when the user interacts with a chosen UI object.  This is a special class method , and will be triggered every time UI objects like buttons are pressed.  To connect a UI object to an action, you must create the associations manually.  

## Creating an Action connected to a UI Object

Actions can be made by holding control on the keyboard while clicking on the UI object in the storyboard and dragging down into your viewController class code.  You must drag down into the area *between* the other methods (e.g. under the viewDidLoad function).

By using control+click and dragging the mouse into your code, a blue line will be shown within your code to indicate the appropriate locations where you can create this action.  A tool tip will pop up displaying “Insert Outlet, Action, or Outlet Collection” showing locations in your code where the function can be created.

![Create action](/mad9137/assets/img/actions_1.png)

After you control+click and drag from your UI object to your viewController class, a small pop-up menu will be displayed.  First, make sure the Connection is set to "Action" (this may attempt to set to "Outlet" by default).

![Configure the action](/mad9137/assets/img/actions_2.png)

Enter the name you would like to use for the Action in the name field.  Make sure the type is the same type of UI class as the object you are connecting it to (i.e. UIButton), and then click the Connect button.

![Configure the action](/mad9137/assets/img/actions_2.png)

When an action is successfully created, it will generate a block of code similar to this:

```swift
@IBAction func myButtonAction(_ sender: Any) {
    // Code here runs when button pressed
}
```

In the debug area of the image below, you can see the result of the button being pressed in the simulator.

![Result of creating an action](/mad9137/assets/img/actions_4.png)

The next set of videos illustrates how to create an action, and gives you an overview of building layouts with the UIKit:

[Adding and Arranging UI Elements <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=6f088078-bb88-4d2c-80e2-ca8cf4350d3d)

[Adding Simple Functionality <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=82e34173-616a-4523-84b0-d8d84a2b87f9)

[Using the UIKit Framework <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=9ba4c837-c2ef-4057-a549-54fa1aad1e01)

[Defining Views and View Hierarchies <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=374906c0-1695-4bf2-aa0f-94699ab89145)
