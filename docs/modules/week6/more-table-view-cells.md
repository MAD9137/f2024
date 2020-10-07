# More About TableViewCells

If you want to design a custom layout for tableViewCells, there are a few steps involved.  You need to add custom `UITableViewCell` class and tell the tableViews Prototype Cell to use this custom class.  Then, you need to create your layout in the storyboard within your Prototype Cell and connect the different UI elements to your custom tableViewCell class using IBOutlets as usual.

The last thing to do is to make sure you cast your dequeued cells as your custom class type when your are creating the cells and, if you are using a custom height to your cells, you must override the default height in code, too.

## Create a Custom UITableViewCell Class

Look at the example below.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_01.png)

This application is a 2-view application with a tableView as the first, and a regular view as the second.  It is connected with a segue from the Prototype Cell to the second view, and has a NavigationController embedded to control navigation.  If we want to edit the style of the cell to use our own custom layout, we must go through a few steps.  First, we select the Prototype Cell and open the Size Inspector on the right to increase the cell height in the storyboard.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_02.png)

You can click on 'Custom' and enter in the Row Height in the inspector, or just drag the bottom edge of the Prototype Cell down in the storyboard to change the height.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_03.png)

::: tip
This step only sets the height in the storyboard.  This same height value needs to be set in code later.
:::

Next, a new custom class file must be added to the project.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_04.png)

Choose a new Cocoa Touch Class and select the new class to be a Subclass of UITableViewCell.  Give it a name and save it in your project folder.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_06.png)

After your new file is created, open your storyboard and select you Prototype Cell again and open the Identity Inspector to set the Custom Class of the prototype so it uses your new tableViewCell class.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_08.png)

## Add a Layout

Now, in your storyboard you can add UI elements to the Prototype Cell by simply dragging in new UI objects from the Object Library.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_09.png)

You can add what ever you want, but remember that adding UI (such as buttons and switches) can complicate the functionality of your tableViewCells.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_10.png)

Next, you open the Assistant Editor so you can see your custom tableViewClass beside your storyboard.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_11.png)

All you need to do in your custom class is make your IBOutlets, and each cell will gain the same layout from the Prototype Cell.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_12.png)

Now, in your main TableViewController file, each time you dequeue a tableViewCell it will have the outlet properties you connected into your custom class.  The cell must have these new properties set to display your information.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_13.png)

## Changing the Cell Height

When you run your application at this point you will see that the height of your cells has not changed. This is because we have only set the height in the storyboard.  We must set the height in code to tell the tableView to change the height of all the cells it will create.  This is done with another tableView function you must add to your tableViewController class.  This function is called `tableView(tableView, heightForRowAt indexPath)->CGFloat`.

![UITableViewCells](/mad9137/assets/img/MoreAboutCells_14.png)

This function requires you to return a float that sets the cell height - in this case, 150 was used for the cell height in the storyboard at the beginning.  When we return 150 from this function and run the application again, the cells will display at the correct height.
