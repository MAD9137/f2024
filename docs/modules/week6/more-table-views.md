# More About Table Views

## Accessing a Clicked TableViewCell

Connecting a segue from a tableView's Prototype Cell to another view will allow each cell (using that prototype) in that tableView to trigger the segue and navigate to the next view.  Triggering a segue causes the tableView to first call a function called `prepare(for segue: UIStoryboardSegue, sender: Any?)` before the segue transition happens to let you first run your own code in preparation.

Within this function you can get access to the next (destination) viewController object and pass data to it.  You can also get the specific cell that was clicked, or the indexPath row and section for the cell that is currently selected in the tableView.

Below is an example of this function accessing these values, which can be used to identifying what data needs to be passed to the next view.  This example works when you have a segue connected directly to the tableView Prototype Cell.

``` swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {

    // Make a variable that holds the segue's destination viewController object
    let nextVC = segue.destination as? ViewController

    // Create a variable that holds the current sender value cast as a cell
    let cell = sender as? UITableViewCell

    // Create a variable to hold the selected cell's indexPath
    let cellIndexPath = tableView.indexPath(for: cell)

    // Create variables to hold the section and row of the selected cell
    let selectedCellSection = cellIndexPath.section
    let selectedCellRow = cellIndexPath.row

}
```

Now you are able to use both the 'cell' and 'indexPath' variables in your code after this statement if it passes the guard.  This is most commonly used to access an element from an array based on the indexPath.row value for the corresponding cell that was clicked on.

If you do not connect the segue from your tableView Prototype Cell and, instead, use another object like a button to trigger the segue, then the sender will not be the selected tableViewCell.  If this is the case you would get the selected cell this way:

``` swift
override func prepare(for segue: UIStoryboardSegue, sender: Any?) {

    // First get the indexPath from the tableView object
    let selectedCellIndexPath = tableView.indexPathForSelectedRow!

    // Use the cellForRow(at: indexPath) method in the tableView to get selected cell
    let myCell = tableView.cellForRow(at: selectedCellIndexPath)

}
```

## Reloading TableView Data

Every time you modify the array that holds the data for the tableView, like when you have added or removed an element from the array used to populate a tableView, the table does **not** automatically refresh on its own to show these changes.  You are responsible for calling a function to refresh the tableView in order to show the new data in the array.  You will need to do this at the end of the function that adds or removes the data to the array.

To tell the tableView to refresh itself you must call the following function from the base tableView object:

``` swift
self.tableView?.reloadData()
```

This will call a series of function that initialize the table setting the number of sections, the number of rows in the sections, and the tableViewCell initializer `(cellForRowAt indexPath)` to setup the tables current list of cells with the updated array data in the tableView.

## Deleting items from a tableView

TableViews have the ability to allow the user to swipe left on a tableViewCell object to reveal a 'Delete' button.  This button allows the user to delete the cell (and the data related to it) when clicked.  To use this functionality you must define an override function in code.  This function is written in, and commented out in, all new TableViewControllers by default.  To use it, add the following function (or simply uncomment the function that looks like this if you have started with a TableViewController class):

``` swift
override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
    if editingStyle == .delete {
        // Delete the row from the data source
        tableView.deleteRows(at: [indexPath], with: .fade)
    } else if editingStyle == .insert {
        // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
    }
}
```

You will see that there are two cases handled in an if/else statement when it is checking an editingStyle variable to see if it equals the enumeration values `.delete` or `.insert`.  The `if editingStyle == .delete` portion of code needs to be modified between the comment `// Delete the row from the data source` and the line of code `tableView.deleteRows(at: [indexPath], with: .fade)`.

You must add your own line of code here to remove the deleted cell's corresponding data from your array.  You must delete the object from your array right before the line of code `tableView.deleteRows(at: [indexPath], with: .fade)` has been called.

Arrays have a `remove(at:)` function that lets you delete a specific element out of the array at a given position:

``` swift
myArray.remove(at: indexPath.row)
```

The next line of code in the 'if' statement is a call to a method within the tableView object:

``` swift
tableView.deleteRows(at: [indexPath], with: .fade)
```

Doing this will delete the array element associated with the cell, and will remove the tableViewCell object from the tableView.  It will then recreate the list of cells in the tableView using the current elements in your array.  

:::warning NOTE
If you do not successfully remove the array element before the deleteRows() method is called your table view will have errors.
:::

## Adding multiple Sections to a tableView

Sections in a table allow you to group similar types of data into separate groups of cells.  So far we have only seen how to use a single default section to group our tableViewCells.  For an example of this, assume your tableViewController class has two arrays of data you need to display in a single tableView.  In this example they are called `teacherArray` and `studentArray`, each containing there own number of objects.

The first step in displaying more than one section in a tableView by adding a UITableView function called `numberOfSections(in tableView) -> Int` which requires you to return the number of sections you would like display in your table.  When you know exactly how many sections you want in your table, you will just return a numeric literal value like this:

``` swift
override func numberOfSections(in tableView: UITableView) -> Int {

    // Display 2 section to display 'Students' and 'Teachers'
    return 2
}
```

The next step will deal with the fact that each array might have a different number of objects in it.  You will need to do this by modifying your `tableView(tableView, numberOfRowsInSection)->Int` function so that you return a different number of cells for each section.  In this example, we will return the count of each array using a switch statement to identify what section we are handling.  It would look like this:

``` swift
override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {

    switch section {
    case 0:
        return teacherArray.count
    case 1:
        return studentArray.count
    default:
        return 0
    }
}
```

::: tip
Sections use a 0-base index, so the first section is 0 in the switch statement.
:::

The next step is to decide if you want to display a header with a title above each section in the tableView.  If you do, you must add another tableView function to your code to do this.  The `tableView(tableView, titleForHeaderInSection)->String` function lets you set each title using a similar switch statement seen above:

``` swift
override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {

    switch section {
    case 0:
        return "Teachers"
    case 1:
        return "Students"
    default:
        return nil
    }
}
```

The last step you need to manage is filling each cell with data.  You will need to modify the code to use the same switch/case code pattern inside the `tableView(tableView, sellForRowAt indexPath)` function to accomplish this.  In this example, the correct array is accessed for each cell being created like so:

``` swift
override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {

    let cell = tableView.dequeueReusableCell(withIdentifier: "tableCell", for: indexPath)

    switch indexPath.section {
    case 0:
        cell.textLabel?.text = teacherArray[indexPath.row].name
    case 1:
        cell.textLabel?.text = studentArray[indexPath.row].name
    default:
        cell.textLabel?.text = "Error: No cell data for this section!"
    }

    return cell
}
```

:::  tip
You will need to add the same switch/case logic in the prepare(for segue, sender) and in the code for deleting and adding new cells to the table if you use more than one section.
:::

[Back to Week 6](./index.md#during-class)