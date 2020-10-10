# Midterm Project - Event Scheduler

## Objective

For your midterm project, you will create an iOS application that lets users keep a schedule of events and their details.

In this application you will **import** and reuse the two class files you created in Assignment 1 (`Event.swift`, and `Schedule.swift`), and will be using the knowledge you gained from Assignment 2.

## Description

For this project, you will be creating an event schedule application that lets users create and maintain a list of special events.

**This application will have 3 different views**, the first being a TableViewController with a NavigationController embedded in it, and it will display a list of event titles from each Event object added to the schedule. This first view will have a ‘New’ button added to the navController bar at the top; when this button is pressed the app will segue to the second view.
The second view will be a regular view that has a textField, textView, datePicker and a button that allows the user to enter information about a new event. Clicking the button will add this information entered into a new Event object that will be passed back to the first view which will then be added to the Schedule object’s eventArray.

The third view will display title, date, and description information for an existing Event that the user selects. The application will segue to the third view when the user clicks on a cell in the tableView from the first view. When your first view prepares to segue to the third view, it will pass the Event object related to that cell along to the third view. The third view will have an optional Event variable to hold the object passed from the first view, and Labels to display the event’s title and date information and a textView to display the event’s description.

Your project should reflect  the following layout:

![Mid-term Project Structure and Layout](/F2020/assets/img/Midterm_1.png)

This application will have a similar layout to your assignment 2 with an initial tableView called ScheduleTableViewController connected to two other basic views. The ‘New’ button on the nav bar of the main view will connect to the NewEventViewController, and the prototype cell in the table will be connected to the EventInfoViewController.

### First View

The initial view will display a tableViewController with a navigationController embedded at the top of it. The tableViewController will be used to display a list of all the event names stored in a Schedule object’s eventArray.

In this view, there will also be a “Bar Button Item” from your Object Library added to the right hand side of the navigationController, labeled “New”. A segue connecting the first view directly to the second view will be executed in an action when the “New” button is clicked. Clicking on a tableViewCell will segue to the third view passing the associated Event object to the third view.

This tableView also must allow the user to swipe left on a cell to delete that cell. This feature is described further in the Application Logic section below.

![First View](/F2020/assets/img/Midterm_2.png)

### Second View

The second view will be a regular viewController, and will have a textField, a textView, a datePicker and a regular button added to it. The user will be able to enter a title for a new event in the textField, a description of the event in the textView, and select a date for the new event with the datePicker. The button should be labeled “Create New Event” and should be connected to an action. The button action should only execute its code if the user has entered a title for the event.

When a name is entered correctly, this button’s action will take the title and description from the textField and textView, and the date object from the datePicker and use these to create a new Event object. Then, the action will pass the event back to the first viewController using delegation in order to have it added to the Schedule object, and to update the tableView. Finally, at the end of the action you will need to navigate back to the first view by dismissing the segue programmatically.

![Second View](/F2020/assets/img/Midterm_3.png)

### Third View

Clicking on a cell in the tableView within the first view will segue to the third view of the application, passing the selected Event object to an optional Event object in the third viewController class through the first function’s **prepare(for segue)** function. The third view will be a basic viewController that will have Labels displaying that event’s information.

The navigationController will automatically generate the back buttons that lead back to the main tableViewController from the second and third views.

![Third View](/F2020/assets/img/Midterm_4.png)

### Application Logic

There are some modifications you will need to make to your Event and Schedule class, as well as creating a new file with an `EventPassingDelegate `protocol in it.

In your `Event` class, in addition to your base init method and your convenience init, you will need to add an additional `convenience init` method that takes 2 string for title and description and a Date object for the date. The self.date value in the Event class will be set by the date parameter passed into this init. This new convenience initializer will allow you to initialize a new Event by pass the datePicker’s .date value to the init method directly.

Next, in your Schedule class you will overload the `addNewEvent` method. The overloaded method will take in one parameter of type Event - this will allow you to pass in an Event object and append it directly to the eventArray.

All of your viewController classes should be given clear and descriptive names like ScheduleTableViewController, NewEventViewController and EventInfoViewController.

In the `ScheduleTableViewController`, you will create a variable of your Schedule type and initialize the object so it is ready to store new Event objects.

After successfully creating a new Event object in the NewEventViewController, it will be passed back to the ScheduleTableViewController. The Schedule will add the new Event passed to the first view within your Event passing delegate protocol function you create. This delegate function must also update the tableView after a new event is added by calling the main tableView’s `reloadData()` method.

You will also include some code that gives the user the ability to delete events from the schedule. This is done by including the the tableView function with `commit editingStyle, forRowAt indexPath` parameters, and deleting the correct object from the eventArray in your schedule.

## Requirements and Rubric

### Setup Storyboard Layout and Needed Class Files (19pt)

* Add Event.swift and Schedule.swift files to the project folder (2pt)
* Create a Protocol.swift class file (1pt)
* Create a tableView with a navigation controller embedded in for the initial view (2pt)
* Add a new tableViewController class file in your project folder (1pt)
* Set the tableView in your storyboard to use the new ScheduleTableViewController (1pt)
* Add 2 more views to your storyboard (2pt)
* Add 2 new viewController class files to the project folder (2pt)
* Set the second view to use the NewEventViewController (1pt)
* Set the third view to use the EventInfoViewController (1pt)
* Add Bar Button Item in upper right of Navigation Bar in tableViewController labeled ‘New’ (1pt)
* Add textField, textView, datePicker and button labeled ‘Create’ to second view (4pt)
* Add Labels to third view to display event information (1pt)

### Make Storyboard Connections for Outlets, Actions and Segues (11pt)

#### First View

* Connect tableView to an outlet in the ScheduleTableViewController (1pt)
* Connect ‘New’ button to an action in the ScheduleTableViewController (1pt)
* Connect a segue called “ShowNewEvent” from the ScheduleTableViewController to the NewEventViewController (2pt)
* Connect a segue called “ShowEventInfo” from the tableViewCell prototype to the EventInfoViewController (2pt)

#### Second View

* Connect textField, textView and datePicker to outlets in the NewEventViewController (3pt)
* Connect ‘Create’ buttons to an action in the NewEventViewController (1pt)

#### Third View

* Connect textFields to outlets in the EventInfoViewController (1pt)

### Coding in Protocol, Event, Schedule swift files (10pt)

* Write a protocol that defines a function that lets an Event object be passed in as a parameter (2pt)
* In the Event class add a new base init, and the 2 convenience init methods (6pt)
* in the Schedule class add an overloaded addNewEvent function with an Event parameter (2pt)

### Coding in EventInfoViewController (5pt)

* Add an uninitialized optional Event property in this class (1pt)
* In the viewDidLoad function if the optional Event object is set, display its info in the Labels (4pt)

### Coding in NewEventViewController (13pt)

* Add an uninitialized optional delegate property of your protocol type in this class (1pt)
* Inside the button’s action, if the textField’s text property is not equal to an empty string, then create a new event from the users input. Then pass the Event to the delegate’s function before unwinding the segue (7pt)
* Add dismissing the textView’s, and textField’s keyboard in the button’s action (2pt)
* Add dismissing the textView’s, and textField’s keyboard in the touchesBegan function (3pt)

### Coding in ScheduleTableViewController (8pt)

* Make this class inherit from your delegate protocol (1pt)
* Add a Schedule property in this class and initialize it right away (1pt)
* In the viewDidLoad function add an initial Event to the Schedule with test data (1pt)
* In the “New’ button action perform the segue with the correct identifier to show the NewEventViewController (2pt)
* Write the delegate function to add the Event passed to it into the Schedule, and then call the reloadData method from your tableView (3pt)

### Coding tableView functions in ScheduleTableViewController (9pt)

* Override the tableView’s **numberOfRowsInSection** function (1pt)
* Override the tableView’s **cellForRowAt indexPath** function (1pt)
* In the **numberOfRowsInSection** function return the event count from your Schedule object (1pt)
* In the **cellForRowAt indexPath** function dequeue a tableViewCell using the prototype cell’s identifier, accessing your Schedule’s array at the current indexPath, and displaying the event’s title in the cell’s Label before returning it (4pt)
* Use the tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath){} function to delete the array element corresponding to the current indexPath when a cell is deleted from the table (2pt)

### Coding prepareForSegue function in ScheduleTableViewController (10pt)

* Override the viewController’s prepareForSegue function (1pt)
* If the segue is going to the new event view, get a copy of the next viewController and set its delegate to the initial tableViewController class (3pt)
* If the segue is going to the event info view, get a copy of the next viewController. Then guard against the sender as a UITableViewCell, and also guarding against the indexPath being retrieved from the tableView.indexPathForCell passing it the cell. If the guard is passed set the next viewController’s Event object to the correct event in your Schedule’s array (6pt)

**Proper Constraints on UI objects (10pt)**
**Code is clear and well-commented (10pt)**
**Application runs without errors (5pt)**

**Total (110pt)**

## Submission

Submit a .zip file of your assignment through Brightspace.

Use the following naming convention for submissions:

`username_assignment-title.zip` or for example  `benn0057_mid-term.zip`

[Section 300](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196083&isprv=0)

[Section 310](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196084&isprv=0)
