# More About TableViewCells

If you want to design a custom layout for tableViewCells, there are a few steps involved.  You need to add custom `UITableViewCell` class and tell the tableViews Prototype Cell to use this custom class.  Then, you need to create your layout in the storyboard within your Prototype Cell and connect the different UI elements to your custom tableViewCell class using IBOutlets as usual.

The last thing to do is to make sure you cast your dequeued cells as your custom class type when your are creating the cells and, if you are using a custom height to your cells, you must override the default height in code, too.

## Create a Custom UITableViewCell Class

Look at the example below.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_01.png)

This simple project has a TableViewController as the only view within it.  If we want to edit the style of the cell to use our own custom layout, we must go through a few steps.  

First, we select the TableView (Not TableViewController) and open the Size Inspector on the right to increase the cell height in the storyboard.  In the Size Inspector uncheck 'Automatic' and enter in a custom Row Height value.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_02.png)

::: tip
This step only sets the height in the storyboard.  This same height value needs to be set in code later.
:::

Next, a new custom class file must be added to the project.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_03.png)

Choose a new Cocoa Touch Class.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_04.png)

Select the new class to be a Subclass of UITableViewCell.  Give it a name and save it in your project folder.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_05.png)

After your new file is created, open your storyboard and select you Prototype Cell again and open the Identity Inspector to set the Custom Class of the prototype so it uses your new tableViewCell class.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_06.png)

## Add a Layout

Now, in your storyboard you can add UI elements to the Prototype Cell by simply dragging in new UI objects from the Object Library.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_07.png)

You can add what ever you want, but remember that adding UI (such as buttons and switches) can complicate the functionality of your tableViewCells.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_08.png)

Next, you open the Assistant Editor so you can see your custom tableViewClass beside your storyboard.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_09.png)

All you need to do in your custom class is make your IBOutlets, and each cell will gain the same layout from the Prototype Cell.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_10.png)

Now, in your main TableViewController file, each time you dequeue a tableViewCell it will have the outlet properties you connected into your custom class.  The cell must have these new properties set to display your information.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_11.png)

:::warning NOTE
When using your own custom UITableViewCell class you must cast the cell returned from the `tableView.dequeueReusableCell(withIdentifyer: String, for: IndexPath)` function using `as? YourTableViewCell` class name.  This creates an optional copy of the dequeued cell so you must also unwrap the cell when you return it from the tableView function.
:::

## Changing the Cell Height

When you run your application at this point you will see that the height of your cells has not changed. This is because we have only set the height in the storyboard.  We must set the height in code to tell the tableView to change the height of all the cells it will create.  This is done with another tableView function you must add to your tableViewController class.  This function is called `tableView(tableView, heightForRowAt indexPath)->CGFloat`.

![UITableViewCells](/F2020/assets/img/MoreAboutCells_12.png)

This function requires you to return a float that sets the cell height - in this case, 150 was used for the cell height in the storyboard at the beginning.  When we return 150 from this function and run the application again, the cells will display at the correct height.