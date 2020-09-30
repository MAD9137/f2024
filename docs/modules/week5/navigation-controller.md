# Navigating with a Navigation Controller

There are many ways to hook up one view to another in an iOS application, but the basic principles are always the same: the initial view of the application will have a Segue object that connects it to the second view.  If something in your application tells the Segue object to perform the segue, it transitions (with an animation) from the first view to the second.  When the second view is done, the segue can be 'unwound' to transition back to the first view again.

You can use a button action to trigger a segue hooked up between the current view and the second view of your application.  Then, to get back to the first view, the second view could use its own button to tell the segue to unwind and go back to initial view.

Another way is to have the current view's code trigger the segue to show the second view.  The second view still needs its own code to unwinds segue back to initial view.  In this case, it is the logic in your two viewController classes that would trigger the segue instead of the users interaction with a button.
Yet another commonly used way to control navigation from one view to another is to embed a **NavigationController** in the main view of your application.  A NavigationController embedded in a view can manage navigation to additional views connected by segues, and back to the initial view that contains the NavigationController.

## Embedding a NavigationController in a View

A NavigationController embedded in a view can manage navigation to additional views connected by segues, and back to the initial view the navigationController is embedded in.  To learn how to use a NavigationController, we will continue from last lesson's example project.  The following image shows the project's storyboard with the existing tableView and a second basic viewController added to the storyboard.  This new view has a label displaying “Second View”, as well as a new viewController class called SecondViewController that has been setup to control this new view.

![Navigation Controller](/F2020/assets/img/NavController_1.png)

:::tip
Always remember to set your new view's Custom Class in the Identity Inspector within your storyboard.
:::

Just to review, in your existing custom tableViewController class in the sample project, you have the array with 7 elements that is used to create the tableViewCells.

![Navigation Controller](/F2020/assets/img/NavController_2.png)

The idea here is that you want to have each cell in the table be a clickable button that will navigate to the next view.  We want the NavigationController to add and manage the interface to let us navigate to the next view and back.

## Embed NavigationController in View

Start by selecting the view in the storyboard you want as the initial root view for the navigation - in this case the tableView.  Then, click on the Editor menu at the top and selection Embed In -> Navigation Controller.

![Navigation Controller](/F2020/assets/img/NavController_3.png)

You will see a few things change in your storyboard, the first of which is that the new navigationController has been added, looking like an entirely new view that is grey with the words "Navigation Controller" written on it.

If the original view had previously been set to the initial view, the navigationController will instead be set to the initial view of the application.  You can also see the navigationController is connected to the tableView by an arrow with a symbol on it.  This is called a **segue** and will navigate to the first view of the tableView when the application loads the navigationController.

## Connecting a Segue

Next, we want to connect the tableView's prototype cell with a segue to the second view.  When you connect the Prototype Cell of a table to another view it will make a segue connection for each cell created in the table to that second view.

To connect this segue, start by selecting your tableView's prototype cell in the storyboard.

![Navigation Controller](/F2020/assets/img/NavController_4.png)

Press and hold the control key and mouse click (Control+click) on the selected cell and drag the connection out from the cell.  Drag it to the view you want to connect to - in this case the one labeled Second View.

![Navigation Controller](/F2020/assets/img/NavController_5.png)

When it highlights the second view in blue, let go of the mouse button and a menu will pop up.

![Navigation Controller](/F2020/assets/img/NavController_6.png)

In the menu that opens up, under the Segue Selection heading, select the **Show** option.

![Navigation Controller](/F2020/assets/img/NavController_7.png)

Now, when you run the application the will see the tableView has a grey horizontal bar across the top of it.  This is the navigationController and will show buttons as you navigate away from the initial view.

![Navigation Controller](/F2020/assets/img/NavController_8.png)

Each cell in the tableView will now work like a button letting you click on it and segue to the second view.

The second view will also show the grey navigationController bar that has persisted at the top, now with a Back button in it created by the navigation. This button has been created by the navigationController, and pressing it tells the navigationController to unwind the segue back to the previous view.

## Unwinding Segue with Navigation Controller

If you want to programmatically unwind a segue in your code while using a NavigationController, you need to call the following function:

```swift
navigationController?.popViewController(animated: true)
```

If you want to unwind all the segues back to the initial view, you can simply call this:

```swift
navigationController?.popToRootViewController(animated: true)
```

## Passing values from a TableViewCell to a second ViewController

In the last lesson, you used the IndexPath.row value passed into the tableView(tableView, cellForRowAt indexPath) function to access each array object and get information for each cell in the tableView.  When using a TableView where you have your Prototype Cell connected to segue to another view and you want to pass information about that specific cell the user tapped, you will need the identify what cell was tapped as you prepare to segue to the next view.

In your `prepare(for segue, sender)` function you can get the number of the cell that that was tapped to triggered the segue using the following code:

```swift
let indexPathRow = tableView.indexPathForSelectedRow?.row
```

This gets the currently selected tableViewCell's row number, which can be used to as an index for getting that cell's data from an array like this:

```swift
let currentUser = userArray[indexPathRow]
```

This will let you access the corresponding data to pass to the next viewController class.

The following videos give you more knowledge about navigating between multiple views in your application.

[iOS 11 Fundamentals - Choosing a Navigation Method for Multiple View Controllers <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=85f6fc73-cdcd-4d51-aac9-fe75a47dfc8e)

[iOS 11 Fundamentals - Adding a Navigation Controller to an Existing Project <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=05997bc1-2616-4f1e-b763-822531782c32)

[iOS 11 Fundamentals - Creating a Tabbed Application <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=63f9a169-beac-4224-8915-439359659d84)

[iOS 11 Fundamentals - Creating iOS Apps with Multiple Screens Summary <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=18de4f3f-2c73-49cd-859a-de794d8e636a)
