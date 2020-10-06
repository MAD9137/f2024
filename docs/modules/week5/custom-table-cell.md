# A Custom Struct for TableViewCell Information

Often, you will have multiple pieces of data you want to use in a tableViewCell - for example the cell's image and text for a the label.  The best practice is to make some kind of data object that holds all the pieces of information for each cell, and then make an array of those objects.  This could be done by using an number of technologies like tuple, structs, classes or even using dictionaries instead of arrays.  For this example, you will make a simple Struct that holds all the properties for each cell.

To do this you need to create a new Swift file in your project folder that will hold the definition for this struct.  Then you will make an array of these struct objects filled out with the unique data to build the table's cells from.

## Create a Swift struct containing data for a cell

To create a new Swift file, right-click (Control+click) on your project folder and select New File.

![Custom Cell](/F2020/assets/img/CustomizeCell_1.png)

Select a Swift File to make a custom struct that will hold the data, and click Next.

![Custom Cell](/F2020/assets/img/CustomizeCell_2.png)

Name the file, in this case the struct will be called UserInfo so the file would also need to be named UserInfo.  Then, click the Create button.

After the struct file is created, you will need to write a Swift struct that has the properties you want passed to each tableCell (name and imageName in this case).

![Custom Cell](/F2020/assets/img/CustomizeCell_3.png)

For this example, a series of different images is added in the Assets.xcassets file imported from the zip file from the previous lesson, each one will be displayed with an associated name.  The UserInfo objects will store a name, and a string that contains an associated image name.

![Custom Cell](/F2020/assets/img/CustomizeCell_4.png)

Going back into the tableViewController class, the String array must be changed to hold UserInfo objects, and populated with the init method of the struct.  Each UserInfo object has been created with a unique name and the name of an image from the assets.

Next, in the `tableView(_ tableView: UITableView, numberOfRowsInSection section: Int)` function, verify the array name is the same that we are returning the count of (if you chose to changed it).

Lastly, we need to set each new cell to its corresponding data from the array of objects.  The image below shows how to access `name` and `imageName` properties from the struct in the array using the `indexPath.row` value, and set the cell textLabel and imageView with this data.

![Custom Cell](/F2020/assets/img/CustomizeCell_5.png)

When the application runs, it will now show each piece of custom data displayed properly within each of the tableViewCell objects, but the images have been shrunk to fit inside the slim table cells.  If you want to change the size of each of the tableViewCells, you simply need to change the height of the Prototype Cell.

First, select the tableView and open the Size Inspector on the right of Xcode.

![Custom Cell](/F2020/assets/img/CustomizeCell_6.png)

Then, make sure the Automatic box is unchecked beside the **Row Height** value and type in the exact number of pixels you want for each row's height. You can now see the application running in the iOS simulator with the custom image size in the table cells.

![Custom Cell](/F2020/assets/img/CustomizeCell_7.png)
