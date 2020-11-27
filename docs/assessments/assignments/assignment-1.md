# Assignment 1: Build Event and Schedule Class

## Description

In this assignment you will be creating a simple iOS project with a textView to display information about events. You will be creating 2 classes in this project in Swift: an Event class, and a Schedule class. You will be creating methods for the schedule class to create copies of, and access Event objects within an array property in your schedule class, and outputting the event information to the textView.

## Requirements

### Step 1

Begin by [downloading this iOS project](/F2020/assets/downloads/Assignment_01_Start.zip) to start with.  This has a textView object in the main view that is connected to an outlet in your viewController class.  This project will be used to create your assignment, and shows you an example of where to output your messages in the viewController’s viewDidLoad() method.  This is where you will Testing the Classes.

### Step 2

Create the Event class in the Event.swift file

* Add an optional String variable called ‘title’
* Add an optional String variable called ‘description’
* Add an optional Date variable called ‘date’
* Copy in the following function into your Event class:

```swift
func setDate(formatedDateString: String){
    let formatting = DateFormatter()
    formatting.dateFormat = "yyyy/MM/dd HH:mm"
    self.date = formatting.date(from: formatedDateString)!
}
```

:::tip
*To use Date objects you must have “import Foundation” at the top of your Event.swift file, and you will need to pass the setDate() function a string formatted like this “2016/09/26 12:34”.*
:::

* Create a base init function that takes 2 String parameters; title and description that sets the self.title and self.description properties in the class.
* Create a convenience init function that takes 3 String parameters called title, description and dateString. Call the base init to set the self.title and self.description variables, and pass the dateString to the setDate() function to set the Date object.
* Create a getInfo function that takes no parameters, and returns a String formatted with the event’s title, event’s date.description, and the event’s description text. (Note: The date.description returns a string formatted with the current date and time.)

### Step 3

Create the Schedule class in the Schedule.swift file

* Add an **empty** Event array variable called eventArray
* Add a **get-only** Int called eventCount, use a guard statement to check if isEmpty is false on the array, else return 0. If the guard passes return the array’s count value.
* Create an addNewEvent function that takes in 3 String parameters called title, description and dateString. Append a new Event object to the array using these values within this function.
* Create a function called outputAllEvents that takes no arguments, and returns a string. Use a guard to check if the isEmpty is false on the array, else return an error message. If the guard passes, then loop through the eventArray array concatenating the String data returned from each event’s getInfo function to a new formatted string, and return that string

### Step 4

Testing the classes in the viewController.swift file

* In the viewController.swift file you will create an instance of your Schedule class, and add some code to the bottom of the viewDidLoad function
* Output the eventCount value by concatenating it to the textViewOutput.text String
* Call the addNewEvent function 3 or more time to add some test data to a couple of events in the array
* Output the eventCount value again by concatenating it to the textViewOutput.text String
* Last call the outputAllEvents function concatenating it’s return text to the textViewOutput.text String

## Marks Rubric

### Create Event Class (15pt)
* Define event class **(1pt)**
* Add 2 Strings and 1 Date property **(3pt)**
* Create init that takes 3 Strings **(5pt)** (2 for definition, 3 for setting values)
* Copy setDate function provided **(1pt)**
* Create getInfo function **(5pt)** (must return info as a formatted String with all 3 event properties used)

### Create Schedule Class (15pt)
* Define schedule class **(1pt)**
* Add empty Event array: eventArray **(1pt)**
* Create get-only property: eventCount **(4pt)** (1 for definition, 2 for guard else return 0, 1 for returning count)
* Create addNewEvent function **(4pt)**
* Create outputAllEvents function **(5pt)** (1 for definition, 2 for guard else print and return, 1 for for-loop, 1 for printing each)

### Test (7pt)
* Create instance of Schedule class **(1pt)**
* Print message with eventCount (at 0) **(1pt)**
* Create 3 events using addNewEvent **(3pt)**
* Print message with eventCount (at 3) **(1pt)**
* Call outputAllEvents function **(1pt)**

### Quality Control (8pt)
* Clear and comprehensible commenting **(4pt)**
* Code runs with no errors **(4pt)**

### Total: 45pt

## Submission

Submit a .zip file of your assignment through Brightspace.

Use the following naming convention for submissions:

`username_assignment-title.zip` (for example - `lenc0001_assignment-1.zip`)

Due by: Oct. 02, 11:59pm

[Assignment 1 - Section 300](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196083&isprv=0)

[Assignment 1 - Section 310](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196084&isprv=0)

<!-- Notes for the future 
    
    Things to change:
    -make event Title a non-optional variable, it must always be set
    -rename Event's description variable to about
    -change GetInfo function to output info using a calculated property for the description value from CustomStringConvertible protocol (See Swift video with Simon Allardice on Pluralsight)

    Things to add:
    -make Event inherit from CostomStringConvertable protocol
-->