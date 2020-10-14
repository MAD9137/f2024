# Assignment 4

## Instructions

In this assignment, you will be creating a single table view application that will make a request to a specific URL https://lenczes.edumedia.ca/mad9137/a4/respond.php. If you want to see the server script, you can download the php file here.

Your project will display the information from the JSON data returned from the URLRequest. Each cell in the table will display the eventTitle, and eventDate strings in its label. There are no additional views or segues in this application.

The tableView will also have a navigation controller embedded in it, with a single barButtonItem added to the right side of the bar. This button will be labeled "Load", and will have an action that will be used to make the URL request.

When this URLRequest queries the server, the server script will return a string of JSON data that defines an array of dictionaries, which will look like this:

```php
[
  ["eventTitle" => "First Day Of Class", "eventDate" => "2018/09/05"],
  ["eventTitle" => "Submit Assignment 1", "eventDate" => "2018/10/01"],
  ["eventTitle" => "Submit Assignment 2", "eventDate" => "2018/10/15"],
  ["eventTitle" => "Submit Midterm Project", "eventDate" => "2018/10/29"],
  ["eventTitle" => "Submit Assignment 3", "eventDate" => "2018/11/12"],
  ["eventTitle" => "Submit Assignment 4", "eventDate" => "2018/11/26"],
  ["eventTitle" => "Submit Final Project", "eventDate" => "2018/12/13"],
  ["eventTitle" => "End Of Semester", "eventDate" => "2018/12/14"]
]
```

When you capture the response data in your callback function and serialize the JSON, it will need to be stored in an array of dictionaries. Your table view needs a class property to store it that looks like this:

```swift
var jsonArray: [[String:String]]?
```

In your `tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int{}` method, you will use optional binding to return the .count of the jsonArray.count and, if it is still nil, you return '0'.

In your `override tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell{}` method, again you will use optional binding on the jsonArray to access it only if the data was created properly. You will need to access the dictionary of values in the array using the indexPath.row passed to the tableView function.

You will then take the "eventTitle" and "eventDate" string values from your dictionary and set that cell's textLabel with this information.

::: tip
You will need to use the DispatchQueue.main.async {} in a callback function to update the UI, like when you call the reloadData() method on your tableView.
:::

## Assignment 4 - URLRequest with JSON (50pt total)

### Create Layout: (4pt total)

- TableViewController with embedded Navigation Controller (2pt)
- Add Bar Button Item to nav bar in table view labeled 'Load' (1pt)
- Give prototype cell an Identifier name (1pt)

### TableViewController class: (3pt total)

- Create IBAction for 'Load' button (1pt)
- Create jsonData object to hold response (2pt)

### Button Action function: (7pt total)

- Create button Action (1pt)
- Create URL (1pt)
- Create Request using URL (1pt)
- Create Session using shared session (1pt)
- Create task object from session passing in request and completion handler (2pt)
- Execute task (1pt)

### Completion Handler Request Task function: (9pt total)

- Create the completion handler function for the url session (2pt)
- If the serverError is not nil, execute the callback function passing in empty string for data and description of error message (2pt)
- If there was no error, convert the raw data to a utf8 json string, and execute callback passing in json string data, and nil for the error (5pt)

### Callback function: (12pt total)

- Output the error if it's not nil using the print method (1pt)
- If there is no error, print the json data (1pt)
- Convert json string to data (2pt)
- Attempt to convert the data to a json object stored in the jsonData object (3pt)
- Catch and print out any errors in jsonData conversion (2pt)
- Call reloadData on tableView on main thread with dispatch async (3pt)

### TableView(numberOfRowsInSection) method: (3pt total)

- Use optional binding to return json array count (2pt)
- If the json data does not exist return 0 (1pt)

### TableView(cellForRowAtIndexPath) method: (7pt total)

- Get a copy of the dequeued reusable cell (2pt)
- Use optional binding to get the jsonData object if it exists, and get the current dictionary by using the indexPath.row (3pt)
- Set each tableViewCell's textLabel with the 'eventTitle' and 'eventDate' values in the current json dictionary from the jsonData array (2pt)

Code is clear and well-commented (3pt)

Application runs without errors (2pt)

## Submission

Submit a .zip file of your assignment through Brightspace.

Use the following naming convention for submissions:

`username_assignment-title.zip` for example - `lenc0001_assignment-1.zip`

[Section 300](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196083&isprv=0)

[Section 310](https://brightspace.algonquincollege.com/d2l/lms/dropbox/user/folders_list.d2l?ou=196084&isprv=0)
