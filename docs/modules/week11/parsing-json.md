# Parsing JSON

As you have learned, JavaScript Object Notation (JSON) is a commonly used technology for transporting information over the internet. This is because it is easy to package different types of information—even complex data structures—in to a string of text that can be transmitted to and from software to a server.

JSON lets you easily define variables, data structures, arrays and dictionaries of information in a simple to transmit/consume structure. JSON is easier to write than XML and, because of its ease-of-use, it is common for most development platforms to offer a way to create and parse JSON data.

## Define The Storage Object

Swift offers you a class called **JSONSerialization** that lets you take JSON data in a string and convert it into variable data within your Swift code. Let's look at the following JSON data, stored in a simple string, and see how we can convert it to use in Swift.

``` json
{
    “students”: [
        {
            “studentID”: 0,
            “studentName”: “Jane Doe”,
            “studentAge”: 25,
            “studentGrade”: 97.5
        },
        {
            “studentID”: 1,
            “studentName”: “Bob Lee”,
            “studentAge”: 19,
            “studentGrade”: 78.6
        },
        {
            “studentID”: 2,
            “studentName”: “Tammy Tam”,
            “studentAge”: 22,
            “studentGrade”: 94.2
        },
        {
            “studentID”: 3,
            “studentName”: “Jason Jasonson”,
            “studentAge”: 31,
            “studentGrade”: 89.1
        }
    ]
}
```

The first step is to understand how the JSON data you are using has been structured so we know how it needs to be stored in Swift. Looking at the example above, you will see there is a single key labeled “students” with a value of an array. Technically speaking, this key:value pair is a dictionary. The value is an array, where each element nested within the array is a separate dictionary of information.

Each dictionary in the array has a set of keys with different types of data associated with it. The “studentID” and “studentAge” are set to integer values, the “studentName” set to a string, and the “studentGrade” set to a float.

In Swift, you will need to create a single var that can hold the structure that gets returned from the JSONSerialization method. The var will look like a dictionary with a single key:value, where the value is an array of dictionaries. The inner dictionaries will need to have a string as the key, and an 'Any' object to store the mixed value types. The following shows how to define this object in Swift code.

``` swift
var jsonObject: [String:[[String:Any]]]?
```

::: tip
 This will need to be defined as an optional, likely at the top of your class so it can be set later.
:::

This object would need to look different depending on how the JSON data was packed.

## Parse JSON Data

When receiving a response from a URL request, you will often get it in the form of a Data object, which is the type required by the parsing method to convert the JSON data. Unfortunately, it is very hard to verify that you got the correct information when it is in the form of an Data object. You may decide to convert it to a string to validate that you have received the correct information, but it will need to be converted back to an Data object for the JSONSerialization to work.

For this example, we will assume that the above JSON data is stored as a string in a variable called **myJSONString** and will need to be converted. The following code will convert the string to a Data object, and then attempt to parse it and save it to the **jsonObject** variable.

```swift
if let myData: Data = myJSONString.data(using: String.Encoding.utf8) {
    do {
        jsonObject = try JSONSerialization.jsonObject(with: myData, options: []) as? [String:[[String:Any]]]
    } catch let convertError {
        print(“ERROR: “ + convertError.localizedDescription)
    }
}
```

Optional binding is used to safely try to convert the string to a data object. Within the binding statement there is a do{ try } catch{} block to attempt to convert the Data object into the dictionary array. In this example the **JSONSerialization.jsonObject(with: , options: )** method is used, passing the Data object and empty options parameter.

::: tip
The catch is used to help you identify any errors that might occur if something went wrong in parsing the data object.
:::

## Accessing Variables in the Converted Data

You have a dictionary with an array of dictionaries in it, but now you need access the variable within an object of type **[String:[[String:AnyObject]]]**. This is done by breaking down each element in the jsonObject first by making a variable to hold the array, then it's possible to use a for loop to access each element of the array. The following code shows how to do this and continues by accessing each dictionary in the array, and each element within each dictionary.

``` swift
let jsonObj = jsonObject {
    if let jsonArray = jsonObj["students"] as [[String:Any]]? {
        for thisDictionary in jsonArray {
            let jsonDictionaryRow = thisDictionary as [String:Any]
            let id = jsonDictionaryRow["studentID"] as? Int
            let name = jsonDictionaryRow["studentName"] as? String
            let age = jsonDictionaryRow["studentAge"] as? Int
            let grade = jsonDictionaryRow["studentGrade"] as? Double      // Do something with the current dictionary values
        }
    }
}
```

The structure of this code is dependent on the format of the information nested within the JSON data you started with. You always begin by looking at the structure of the JSON you are getting, as it will dictate what structure of object you will create in Swift to hold the JSON data, and what type of logic you will need to access the values.

  [Click here to download an example project](/mad9137/assets/downloads/ParsingJSON.zip) that parses a string of properly formatted JSON into an object in Swift, and outputs the values to a textView.

  [Click here for the legacy version](/mad9137/assets/downloads/legacyParsingJSON.zip)
  