# Highlighting and Deleting a CollectionView Cell

One of the major differences between a CollectionView and a TableView is the method for deleting cells.  As you know the TableView has a built in system for deleting cells, but you must take a more manual approach for deleting a cell from  CollectionView.

Assume we have a simple collection project setup like the one illustrated in the following image.

![User defaults](/mad9137/assets/img/CollectionViewDeletingCells_1.png)

The steps that must be take to allow the user to delete a cell are as follows:
1. Selecting and setting the colour of the cell's background.
2. Cell backgrounds highlight (changes colour) when tapped, and when a different cell it tapped the previous one becomes unhighlighted (returns to it's original colour).
3. Add a button action to trigger the delete functionality.

## Setting the Colour of a CollectionViewCell
Highlighting a CollectionViewCell can be done in many ways, and is really up to the developer. The easiest way might be to simply change the cell's background colour.  To add this effect you will want to create two colours in your class, one for the normal background colour, and one for the highlighted colour.

At the top of your class you will add the following variables.

```swift
var cellColour: UIColor = UIColor.systemGray5
var selectedCellColour: UIColor = UIColor.systemBlue
```

You can use what ever colours you would like of course, as long as they have adequate contrast.

Next you will need to set the the colour of each cell as you create them.  You will do this in the `collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell` function where you setup each the content for each cell.  There you will set the colour like this.

```swift
cell.contentView.backgroundColor = cellColour
```

:::tip NOTE
This setup will be used to change the colour of the background of a cell that has been tapped on signaling when it has been selected.  You can use any method you would like to signal this selection of a cell other than changing the background.
:::

## Change Colour When Selected, and Change it Back When Unselected
The cell's background colour will need to be changed to the selected colour when the user taps on a cell.  The CollectionViewController class has functions built in that will trigger when the user selects it by tapping on the cell.  You can set the cell background colour can be changed in this function like this.

```swift
override func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    let selectedCell = collectionView.cellForItem(at: indexPath)
    selectedCell!.contentView.backgroundColor = selectedCellColour
}
```

There is also a function you can use to change the colour back to the unselected colour when a cell becomes unselected.  This is done in the function shown below.

```swift
override func collectionView(_ collectionView: UICollectionView, didDeselectItemAt indexPath: IndexPath) {
    let selectedCell = collectionView.cellForItem(at: indexPath)
    selectedCell!.contentView.backgroundColor = cellColour
}
```

## Button Action to Delete Cell
There is no built-in functionality to delete a cell from a collection view like there is when swiping left on a cell in a TableView. You must add the code to delete a cell, and reload the CollectionView date from within a button action (or some other function you find appropriate).  In this example the action for the BarButtonItem situated in the left of the NavigationController will trigger this functionality, which looks like this.

```swift
@IBAction func deleteButtonAction(_ sender: Any) {
    if let indexPaths = collectionView.indexPathsForSelectedItems {
        namesArray.remove(at: indexPaths[0].row)
        collectionView.deleteItems(at: [indexPaths[0]])
        collectionView.reloadData()
    }
}
```

This gets the indexPath value for the selected row.  Then the indexPath is used to determine which array item, and CollectionView cell to delete.  After deleting the cell from the CollectionView, you must call the reloadData function to refresh the collection's list of cells.

The image below shows this within the context of a CollectionViewController class.

![User defaults](/mad9137/assets/img/CollectionViewDeletingCells_2.png)

:::warning NOTE
You will need to setup up a slightly more complicated solution if you want a segue to be triggered when the user taps on a cell in the CollectionView.  One idea would be to create an "Edit" button that would change the functionality of tapping on a CollectionViewCell from triggering the segue to simply selecting the cell so it can be deleted.
:::
