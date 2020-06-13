# Importing Swift Files

When you want to reuse a code file you have created in a different project, you will need to make sure to properly add the file to your new project.  You can drag in the file from your finder into Xcode and drop them into your project folder, or you can right-click on the project folder in Xcode and select 'Add Files to "project name"...'

![Add Swift Files to a Project](/mad9137/assets/img/AddFiles_1.png)

Next, you will need to navigate to the location where your files are stored.

![Add Swift Files to a Project](/mad9137/assets/img/AddFiles_2.png)

You will select the file(s) you wish to add to your current project, and then you must click the Options button at the bottom of this window **before** clicking add.

::: tip
Make sure '**Copy items if needed**' is checked **on** to actually copy the files into your project.  If you don't, your project will only have references to the files!
:::

![Add Swift Files to a Project](/mad9137/assets/img/AddFiles_3.png)

You must make sure that you **checked on** the option to 'Copy items if needed', and then you can click the Add button.  This will make sure the files are copied into your new project folder instead of simply linking them form their old location.  Now you can see the files have been copied into your new project, and are ready to be used.

![Add Swift Files to a Project](/mad9137/assets/img/AddFiles_4.png)

Copying the files into the new project makes sure that the files are local to your new project.  If you do not copy the files - and simply link them - you can run into trouble if the original files are moved or misplaced as that would break the link, and your project would fail to run.
