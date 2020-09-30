# Customizing TableViewCells

The TableView class has functions built in to help create and manage the TableViewCells (reminder: cells are the rows in your table).  The TableView will only ever create enough Cell objects to fill the height of the TableView, plus a few more.  The Cell objects get recycled as you scroll through the TableView (when the table has more Cells than the TableView can display at one time on screen).  Each Cell that scrolls off the top of the screen has its contents removed, and is reused as the next cell brought on the bottom the screen with new data displayed in it.

When you want to add different information into each cell of a TableView, you must do it when the cells are being created in the **tableView(tableView, cellForRowAtIndexPath)->UITableViewCell** function.  This function gets called once for each cell that gets created.  It gets a copy of the specific cell so you can customize it.  At the end of this function, you are required to return your modified UITableViewCell object as the return type indicates.

## Customizing TableViewCells Labels

Each TableViewCell object already contains some UI objects that can set to display information.  The most commonly used is the textLabel to add some text to each cell in the table.  To access and change the cell's properties, you must first create a variable that will equal the specific UITableViewCell object we currently want to edit.  You do this by calling a function from your TableView object called dequeueReusableCell().  The parameters passed to this function control what cell is currently being manipulated.

```swift
let newCell = tableView.dequeueReusableCell(withIdentifier: "MyTableCell", for: indexPath)
```

:::tip
The Identifier value used in this function **must** be the same as the Identifier value you entered in for your Prototype Cell in your storyboard.
:::

The image and label are subviews of a content view, which is a subview within each tableViewCell object.  The imageView and textLabel are defined as optional values, and must be accessed in a safe way.  It is most common to see Optional Chaining used as a way to check, and then access, optionals all in one step.  Optional chaining is done by adding the question mark (?) at the end of the optional value, before the dot operator to access the parameter like this.

```swift
newCell.textLabel?.text = “Test Student”
```

You can see the optional chaining using the question mark (?) to safely access the cell's textLabel.  You can also see the application running in the simulator displaying the cell's content.

![Table View](/F2020/assets/img/TableViews_11B.png)

:::tip
The number of the current cell being created is found in the indexPath.row value, which is automatically passed into this function for you.
:::

## Using Images in your iOS project

For this example, you will see how to edit the cell's image, but to do this you will need to import an image into our project.  You can start by  [downloading this zip file](/F2020/assets/downloads/ImageAssets.zip) containing test images to work with.  After unzipping the images to a folder on your computer, you will open your project that you built in the previous lesson.

In your Project Navigator, select your Assets.xcassets file: it will display all the assets currently in this project.  Currently, the empty AppIcon is the only thing in your list of assets.  Click the plus (+) icon at the bottom of the assets list and choose the Import option.

![Edit Cells](/F2020/assets/img/EditCell_1.png)

Navigate to the folder you just uncompressed the images to and select the default-pic-100.png and click open.

![Edit Cells](/F2020/assets/img/EditCell_2.png)

You will now see the image added to your assets folder, and will be able to access it in your code.

![Edit Cells](/F2020/assets/img/EditCell_3.png)

Then, in your tableView(tableView, cellForRowAt indexPath) function, after you modify the textLabel's text you can add the following line of code to set the image.

```swift
newCell.imageView?.image = UIImage(named: "default-pic-100")
```

There are a variety of ways to set a UIImage object in Swift. You can also just start typing the name of your image file to add an Image Literal.

```swift
default-pic-100
```

When you select the image literal of your image, it transforms your image file name into a small icon of your image right in xCode's editor.  If you ever comment it out, you will see the markup for an image literal looks like this:

```swift
#imageLiteral(resourceName: "default-pic-100")
```

## Using Arrays to hold TableViewCell content

The most common way of adding different information into each cell of a tableView will be to create an array that holds individual pieces of information.  Each piece of data in the array will hold the information for a single cell.

This means you use the array's count to define the number of rows in the tableView when you override the tableView(tableView, numberOfRowsInSection).  As you learned in the previous lesson, this function is called to set the number of tableViewCell objects, and you want to set this equal to the number of elements in your array.

The tableView(tableView, cellForRowAtIndexPath) function has a parameter passed in called indexPath that tells this function which row of the table the cell is being created for.  Calling the indexPath.row gives you an integer value that is a 0-based index referring to what cell is being created at that time.  This can be used to access the array element you need for the current table cell you are on.

The image below shows a modified tableViewController file from the previous lesson.  Added to the class was an array of strings called namesArray with a bunch of test names in it.  This is an example of the data model that will be used to populate the tableViewCells with custom data.

![Edit Cells](/F2020/assets/img/EditCell_4.png)

:::tip
The `namesArray.count` is returned from the tableView(tableView, numberOfRowsInSection) function telling the tableView how many cells to make.
:::

Then, in the tableView(tableView, cellForRowAtIndexPath) function the namesArray[indexPath.row] gets the correct piece of data for the current cell being created and sets the textLabel?.text with it using optional chaining.  You can also see how to set the cell's image to a new UIImage with the name of the file you imported into your Assets.xcassets folder simply by referencing the file's name (without the extension).  Now, when the app is run in the iOS simulator, you can see the 7 names from the array are in their own cell of the tableView.

The following videos show more options for modifying TableViewCell objects to design its style to fit your application.  These videos continue from last lesson building onto the TableView that was added into a normal ViewController.  You will see how to manually add a custom TableViewCell object into a TableView to be used as the Prototype Cell, adding images, and choosing accessory icons to table cells.

[iOS 11 Fundamentals - Dequeuing and Reusing iOS Table View Cells <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=3d4ca343-4b6d-4345-9175-bad70f8df60d)

[iOS 11 Fundamentals - Reusing iOS Table View Cells <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=2c17e870-82dc-470b-bbbb-a5453b95b6ff)

[iOS 11 Fundamentals - Switching iOS Table View Cell Styles <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=e2bebd32-6127-4961-98cb-58bca9d34886)

[iOS 11 Fundamentals - Configuring iOS Table View Cell Styles <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=cc976b5a-aefc-425d-a167-b99b2ddc976c)
