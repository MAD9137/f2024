# Connecting UI Outlets

In iOS development, you will be using Swift to react to input and manipulate views in your application using a viewController. Let's look at how to make connection between UI objects and the code in the viewController class.

## Connecting a UI Outlet

First, select the Main.storyboard from the project folder, and select the view you want to make the connection to.  Open the **Assistant Editor** so you see the Swift code form the viewController file beside the storyboard you are editing displayed in the editor area of Xcode at the same time.  

:::tip
The button to open the Assistant Editor is the two interlocking circles in the top right of the toolbar area.

![Assistant Editor Icon](/F2020/assets/img/assistant-editor.png)
:::

After dragging the UI object you want from the Object Library into your view, you need to connect the UI object to the viewController class for that view.  You make the connection by holding the Control key on your keyboard while you click ( **control+click** ) and holding your mouse button down, then dragging it to the top area inside your viewController class definition and releasing your mouse button wherever the blue horizontal line appears.  The blue line only appears in appropriate places to place the Outlet, and should show a small tool-tip labeling it with “Insert Outlet or Outlet Collection.”

:::tip
You can change the alignment of the Assistant Editor; showing it to the right, or below.  This is done by clicking and holding your mouse over the "Show the Assistant Editor" button in the Toolbar area on the right.
:::

![Outlets](/F2020/assets/img/Outlets_1.png)

After you control+click and drag from your storyboard UI object to your viewController class, a small pop-up menu will be displayed.  Enter the name you would like to use for the Outlet in the name field.  Make sure the connection type is set to Outlet, and the type is the same type of UI class as the object you are connecting it to, and then click the Connect button.

![Outlets](/F2020/assets/img/Outlets_2.png)

In the viewController class you will now have a line of code added that looks similar to this.

```swift
@IBOutlet weak var outletName: UILabel!
```

The outletName will be replaced by whatever you called your outlet name, and the UILabel would be whatever type of object you connected to your code.  A graphical circle with a dot in it appears to the left of the line of code above when connected correctly.

Once the outlet is properly connected, the code within the viewController class can access and change the properties of the object connected to this outlet.  In the example of a UILabel, the text property can update the text that the label displays like this:

```swift
OutletName.text = “Hello World”
```

![Outlets](/F2020/assets/img/Outlets_3.png)

Running the application shows the text of the UILabel that was updated in the viewDidLoad() method of your UIViewController class.

The next set of videos shows detailed instructions on how to add UI objects to a view:

[Accessing Subviews and Downcasting in Swift <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=c213fbf2-b9c4-4b69-a340-439a407b6c07)

[Connecting View Objects with Actions and Outlets <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=2d72054e-b63c-49de-9443-8cd7eef75770)

[Creating and Troubleshooting Actions and Outlets <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=2fd8c1a7-e9a6-4102-b823-be47bf94a47a)
