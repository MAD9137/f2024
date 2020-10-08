# Importing Swift Files

:::warning
**There is a potential to lose a lot of marks on any project that you do not correctly copy required files into!**  If you only making references to your other files, your project WILL NOT work correctly when you submit it.
:::

When you want to reuse a code file you have created in a different project, you will need to make sure to properly add the file to your new project.  You can drag in the file from another folder into the project folder within the Project Navigator of your new project in Xcode and drop them into your project folder.  Or another way is to right-click on your new project folder in the Project Navigator within Xcode and select **Add Files to "your project name"...**

![Add Swift Files to a Project](/F2020/assets/img/AddFiles_1.png)

Next, you will need to navigate to the location where your old files are stored and select the file(s) you wish to add to your current project.  You must make sure to check the '**Copy items if needed**' to **on** to make a duplicate of these files into your new project.  If you do not see this option you must click the Options button at the bottom of this window **before** clicking the Add button.

:::warning NOTE
Make sure '**Copy items if needed**' is checked **on** to actually copy the files into your project.  If you don't, your project will only have references to the files from their original location on your hard drive.  **If you do not select this option, your project will not work correctly when you submit it!**
:::

![Add Swift Files to a Project](/F2020/assets/img/AddFiles_2.png)

You must make sure that you **checked on** the option to 'Copy items if needed', and then you can click the Add button.  This will make sure the files are actually copied into your new project folder instead of simply referencing them form their old location.  Now you can see the files have been copied into your new project, and are ready to be used.

![Add Swift Files to a Project](/F2020/assets/img/AddFiles_3.png)

Copying the files into the new project makes sure that the files are local to your new project.  If you do not copy the files - and simply link them - you can run into trouble if the original files are moved or misplaced as that would break the link, and your project would fail to run.

:::warning
**Again, if you do not select _Copy items if needed_, your project WILL NOT work correctly when you submit it.  There will be no extensions for projects that are missing files!**
:::