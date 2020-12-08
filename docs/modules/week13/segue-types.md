# Different Types of Segues

## The Show Style of Segue
In an iOS project when you want to transition from one view to another you connect the two viewControllers together with a Segue.  Look at the viewControllers in the following example.

![Different Types of Segues](/F2020/assets/img/SegueTypes_01.png)

We can connect the two viewControllers together directly from a UI object like a button in the first view to the second, or we can directly attache the two viewControllers together with a segue.  Below you can see how we can connect the two with the latter option.

![Different Types of Segues](/F2020/assets/img/SegueTypes_02.png)

It is most common to use the **Show** style of segue, which Apple recently created to automate the unwinding of a segues.  This segue displays the new viewController layered on top of the previous one, and adds the functionality so the user can simply swipe down to dismiss the new view to unwind it back to display the original one.

:::tip NOTE
Apple has deprecated their old style of segues named Push, Modal, Popover and Replace.  The new styles are called **Show**, **Show Detail**, **Present Modally**, and **Present As Popover**.  Show is the most common style and has replaced the Push segue, while Show Detail replaced Replace.  Present Modally works similar to the old Modal and Present As Popover is similar to the old Popover.
:::

Below you can see that the second view has been modified to show the effect of this segue, which appears at the top of the second viewController.

![Different Types of Segues](/F2020/assets/img/SegueTypes_03.png)

## Present Modally Segue

The second most common segue used would be the **Present Modally** segue which has many customizations allowing it to display in a few different ways.  One of the most common uses for the Present Modally segue is the ability to cover the entire screen with the second viewController.

To see a useful example of where this can be used, let us look at the following storyboard layout.

![Different Types of Segues](/F2020/assets/img/SegueTypes_04.png)

Here the navigationController has been embedded in the first viewController, and has caused the second view to no longer show the regular Show style of segue.  The navigationController will be embedded in every view connected after the initial viewController.  This requires the viewController to trigger the unwinding process by calling the `navigationController.popToRootViewController(animated: true)` method.

But what if you wanted there to be a view before the viewController with the navigationController embedded in it?  If you want this you will need to connect the segue form this new initial viewController to the navigationController.

![Different Types of Segues](/F2020/assets/img/SegueTypes_05.png)

Now, lets say you choose to use a Show segue.

![Different Types of Segues](/F2020/assets/img/SegueTypes_06.png)

Notice how this has modified all of the following viewControllers after (including the embedded navigationController).  

![Different Types of Segues](/F2020/assets/img/SegueTypes_07.png)

This has broken the navigationController's functionality all together.  Instead of having each view take up the full screen and have a navItem embedded at the top each viewController, they all seem to use the Show style of segue now.  In this case you will need to use a different kind of segue to retain the navigationController's functionality, you will need the **Present Modally** style of segue.

![Different Types of Segues](/F2020/assets/img/SegueTypes_08.png)

To change a segue's type after creating it you will need to click on the segue to highlight it.  Then, in the Attributes Inspector you will see the "Kind" option which you can change from **Show** to **Present Modally**.

![Different Types of Segues](/F2020/assets/img/SegueTypes_09.png)

But, when you change the kind of segue from **Show** to **Present Modally** you wont see ant difference at first.  You will also need to choose the Presentation style to alter how this type of segue is displayed.  In this kind of layout you will want to choose the Full Screen style of presentation so that the next viewController is displayed in full.

![Different Types of Segues](/F2020/assets/img/SegueTypes_10.png)

This will give each subsequent view the same effect as the navigationController, where each viewController takes up the whole screen, and in this case will display the navigationController's navItem at the top of each view.  One thing to keep in mind here is that the Show segue is still used to connect the last viewController.

![Different Types of Segues](/F2020/assets/img/SegueTypes_11.png)

You will want to keep it this way if you intend to continue allowing the navigationController to manage the segue to further views.

:::tip NOTE
It is possible to design your own custom segue, but this is outside the scope of this course.
:::
