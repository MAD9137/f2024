# A Custom Class for TableViewCell Information

Often, you will have multiple pieces of data you want to use in a tableViewCell - for example the cell's image and text for a the label.  The best practice is to make some kind of data object that holds all the pieces of information for each cell, and then make an array of those objects.  This could be done by using an number of technologies like tuple, structs, classes or even using dictionaries instead of arrays.  For this class, the preferred method will be to make a class that holds all the properties for each cell.

To do this you need to create a new Swift class in your project folder that will hold the data for each cell.  Then you will make an array of these objects filled out with the unique data to build the table's cells from.

## Create a Swift class containing data for a cell

To create a new Swift class, right-click (Control+click) on your project folder and select New File.

![Custom Class](/mad9137/assets/img/CustomizeCell_1.png)

Select a Swift File to make a custom class that will hold the data, and click Next.

![Custom Class](/mad9137/assets/img/CustomizeCell_2.png)

Give a name the new class file (usually if the class is going to be called UserInfo then the file would also be named UserInfo).  Then, click the Create button.

After your class file is created, you will need to write a Swift class that has the properties you want passed to each tableCell.  You should create an init method that takes parameters to setup all the properties to make it easy to create objects of this type.

![Custom Class](/mad9137/assets/img/CustomizeCell_3.png)

For this example, we have a series of different images in our Assets.xcassets file, each one will be displayed with an associated name.  The UserInfo objects will store a user name, and a string that contains an associated image name.

![Custom Class](/mad9137/assets/img/CustomizeCell_4.png)

Going back into the tableViewController class for our table, we start by editing the array to hold a series of UserInfo objects created with the init method we wrote.  Each UserInfo object has been created with a unique name and the name of an image from our assets.

Next, in the tableView(tableView, numberOfRowsInSection) function we update the array name that we are returning the count of.

Lastly, we need to set each new cell to its corresponding data from the array of objects.

![Custom Class](/mad9137/assets/img/CustomizeCell_5.png)

When the application runs, it will now show each piece of custom data displayed properly within each of the tableViewCell objects, but the images have been shrunk to fit inside the slim table cells.  If you want to change the size of each of the tableViewCells, you simply need to change the height of the Prototype Cell.

First, select your tableView's tableCell prototype.

![Custom Class](/mad9137/assets/img/CustomizeCell_6.png)

Then, drag it bigger in the storyboard editor or type in the exact number of pixels you want for each row's height in the Size Inspector on the right in Xcode and hit enter (make sure the Custom box is checked on beside the value). You can now see the application running in the iOS simulator with all of the custom images at full size in the table cells.

![Custom Class](/mad9137/assets/img/CustomizeCell_7.png)
