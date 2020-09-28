
# iOS Project Structure

Before continuing, it might be a good idea to refer back to the lesson showing a [Basic tour of Xcode](/modules/week1/xcode-tour.md) if you are still unsure about the names of all the different terms related to the Xcode IDE.

We will start by examining what is in an empty Single View Application.

## Project Folder and Files

Start by looking in the project navigator on the left of Xcode. You will see a root project file with a blue-coloured label and the name of your project. Clicking on this will show you the project settings. There is nothing we need to touch in there right now.

The project file has a project folder under it that contains all of the files needed to make this project work. When referring to the project folder in these tutorials, we mean this folder within the project navigator in Xcode. If you hit the play button in the toolbar at the top to launch your application, it would compile showing you a blank view. There is a second folder named *Products* that we don't need to touch.

Within the project folder you will see a bunch of files, two of which have the .swift file extension: AppDelegate.swift and viewController.swift.

You won't be editing AppDelegate.swift for your first few projects.  The AppDelegate has some Swift code in it that does all of the handshakes with the operating system.  Code can be added to this file that will fire when specific operating system functions happen, like when your app gains or loses focus.

For now, most of your work will be done in two files in the project folder: the ViewController.swift file, and a file called Main.storyboard.

## Storyboards

Clicking on the Main.storyboard shows the application's layout in the editor area. The Main.storyboard file shows your single empty view graphically in the editor area, and lets you add and define the layout of your application.

Button, text and images can be dragged onto the view right from the object library in the bottom right area of Xcode. You can even add additional views and connect them together within your storyboard file, which will be covered in a later lesson.

:::warning
Do not mix up the Main.storyboard and the LaunchScreen.storyboard.
:::

## Views, viewControllers

So, what is a view in comparison to a viewController? Well, the **view** is the blank canvas that is in the storyboard. That view has all of its logic written in the ViewController.swift file seen in the project navigator. When speaking of the view in your iOS application, you are referring to the graphical layout in the editor area when editing your Storyboard.

When describing the **ViewController,** it is the code that controls a specific view. When you want to add a new view, you will add the view to the Storyboard, and then create a new viewController file to define the code for that new view.

## Subviews, and the UIKit

The basic UI elements of an app refer to the button, text areas, and images. In iOS development, these can be found in the object library in the library area in the bottom right of Xcode. All UI elements including the images, buttons and text areas are all referred to as **subviews** within your application's main view.

Apple has created the **UIKit** portion of the iOS development framework that defines all of the classes and code for these elements. This week you will be starting to lay out basic UI elements to build an iOS application.

The following videos describe the structure of an Xcode project, differences between views and view controller files, as well as an understanding of what the UIKit is and what it contains:

[Creating an iOS Project in Xcode <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=6cb38e78-1745-4aa6-aecf-3ce1659a4e98)

[Working with iOS Projects <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=33f81d66-9093-4dbd-af6e-5cfdfedd9157)
