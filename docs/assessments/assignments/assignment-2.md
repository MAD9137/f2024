# Assignment 2: Event List

## Description

In this assignment you will be creating an iOS application that will display a list of events in the main view of the application using a TableView. Each event’s title will be listed in a separate cell of TableView in this initial view.  A NavigationController will be embedded in this initial TableView, and a segue will be connected from the Prototype Cell of the TableView to the second ViewController.

Clicking on any of the cells in table will transition the user to a second view that will have a label to display the event title, and the date. It will also have a textView to display the event description. The textView must be set to not allow editing, of its text, and be able to detect Phone Numbers, web Links and Addresses.

## Requirements and Marks

### Setup

* Create a new iOS Single View Application project in Xcode. (1pt.)
* Import the Event, and Schedule class from your first assignment into your project folder. (1pt.)

### Storyboard

* Create a TableViewController and set it as the initial view of the application. (2pt.)
* Add a new swift file for a custom UITableViewController class. (1pt.)
* Set the custom class for your TableViewController. (1pt.)
* Embed a NavigationController in the TableViewController. (1pt.)
* Connect the Prototype Cell in the TableView to the regular ViewController with a Segue. (1pt.)
* In the second ViewController add 2 Labels and a TextView object. (3pt.)
* Connect the Labels and TextView to IBOutlets. (3pt.)
* Edit the TextView Attributes to turn Editable off, and Phone Number, Link and Address on. (4pt.)

### Schedule (TableViewController)

* Create a (non-optional) Schedule object to use in your tableViewController class. (1pt.)
* Add at least 3 default test events to the schedule using the addNewEvent() function. (3pt.)
* Use the eventArray count in the schedule object to set the number of rows for the table. (1pt.)
* Set each TableViewCell label text to the title of one of the events from the schedule. (2pt.)
* When the user taps on a cell in the table the application must pass the corresponding event object to the destination viewController’s Event property. (4pt.)

### Event Info (ViewController)

* Create an optional Event property in this class to hold the data passed from the tableView. (1pt.)
* In the viewDidLoad() function set the title and date labels, and the description textView to the data stored within the optional Event object. (3pt.)

### Project

* Clear and descriptive naming of variable, functions and identifiers (2pt.)
* Well commented code describing all main functionality (2pt.)
* Project compiles and runs without errors (1pt.)

## Submission

Submit a .zip file of your assignment through Brightspace.

Use the following naming convention for submissions:

`username_assignment-title.zip` for example - `lenc0001_assignment-2.zip`

[Section 300](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196083&isprv=0)

[Section 310](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196084&isprv=0)
