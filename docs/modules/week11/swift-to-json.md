# Convert Swift Data to JSON

If you have variables in your Swift code that you need to turn into a string of JSON data there a few steps needed to accomplish this.  You must create a new dictionary in your code, add the different variable values to the dictionary, convert the dictionary to a data object, and convert the data to a string of text.

## Create the Dictionary

For this example lets assume you have a project with the following outlets created:

```swift
// Define outlets for the UI objects in the view
@IBOutlet weak var nameTextField: UITextField!
@IBOutlet weak var descriptionTextView: UITextView!
@IBOutlet weak var durationSlider: UISlider!
@IBOutlet weak var exerciseDatePicker: UIDatePicker!
```

If you needed to take the text strings from the textField and textView, the float from the slider and the date description from the datePicker and convert it to a string of JSON data you will first need to put all of these values into a (Swift) dictionary.  Because there are mixed types of values we will need to start by defining a `[String:Any]` dictionary like so :

```swift
// Define a dictionary to hold the UI objects data
var exerciseDictionary: [String: Any] = [:]
```

Then you add the values for the keys, in this case trainer, description, duration, date like so:

```swift
// Add the UI object's values for the appropriate keys in the dictionary
exerciseDictionary["trainer"] = myTextField.text
exerciseDictionary["description"] = myTextView.text
exerciseDictionary["duration"] = mySlider.value
exerciseDictionary["date"] = myDatePicker.date.description
```

## Convert the Dictionary

Now that you have all of your data in one place you need to covert it to JSON serialized data, and then convert that data to a utf8 encoded string.  Below you can see how this is done:

```swift
// Try to convert the dictionary to JSON data, and the data to a utf8 encoded string
do {
    jsonData = try JSONSerialization.data(withJSONObject: exerciseDictionary, options: [])
    jsonString = String(data: jsonData!, encoding: .utf8)
}
catch {
    print ("Converted error = \(error.localizedDescription)")
}
```

If this works there will be no errors found the the do-try-catch logic, and the jsonString will contain a valid string of JSON with the key, value pairs within.  In this example this JSON is destined for a server via a URLRequest, so we need to do something about spaces and special characters found in the date description.  The two additional steps we would need to take is to 'massage' the text in the string in order to transmit it via HTTP is to reformat the date's description when we add it to the dictionary, like so:

```swift
// Massage the date value
exerciseDictionary["date"] = String(myDatePicker.date.description.dropLast(9)) 
```

This will drop the last 9 characters, turning the the string from "2018-11-28 09:01:45 +0000" to "2018-11-28 09:01".  This make the date the correct format for setting the MySQL date value in the table this data is going to be inserted into.

:::warning NOTE
This is not the best way to convert a date into a string.  You should look back to the lesson on formatting a date string here [The Date Class](/modules/week7/date-class.md)
:::

After the date value is added in the correct format, the last thing need is to encode all of the spacial characters in the jsonString to be web query compliant.  This is done like so:

```swift
// Encode all special characters to be web query compliant
let escapedJSONString = jsonString?.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)
```

Now this JSON string is ready to be added to the end of a URL so it can be passed to the server through the URLRequest.

[Back to Week 11](./index.md#during-class)