# URL Request Parsing JSON

This lesson gives you the basic knowledge of how to make a URLRequest that will parse a JSON text response from a server, and convert the information into an object (a dictionary).  For this course, all server data will be transmitted using strings of JSON data.  When using JSON in Swift, all strings of JSON information are converted to Swift dictionaries using the built-in parser and data converter.  

Because a server can only send you a string of text, it will be up to you to determine what the server's response text is.  When developing iOS applications that make URLRequests, you will need to get comfortable printing the server's response text out (for example to the console) to verify what the server's response text looks like. It might be a string of JSON information, but it also might be an error message telling you that something has gone wrong.  If the server response is correct you must analyze the JSON information in the response string in order to model your Swift dictionary object correctly.

Now that you understand how to parse JSON and you have learned how to make a URLRequest, let's see how, and where we parse the string of JSON data and convert it into a usable Swift object.

The storyboard layout in this example is basically the same as the SimpleUrlRequest application, and looks like this:

![Request Parsing](/F2020/assets/img/URLRequestParsingJSON_1.png)

The only difference in this code happens in the callback function. The first change is to define a dictionary object to store the converted JSON data structure that we receive from the server.  On line 60 you can see:

```swift
var jsonObject: [String:Any]?
```

:::tip NOTE
This will need to be defined as an optional variable to allow for the chance that the conversion will fail. 
:::

This dictionary must have a structure that mirrors the server's JSON data response.  We can check what the string of data the server is sending by printing out the `result` variable just after line 50.  The text sent from the server looks like this `{"name":"Jon Doe","email":"jdoe@gmail.com"}`, a JSON object that represents two key-value pairs.  In this case the keys are strings, and so are the values, so line 60 could define a dictionary with **String:String**, but it also works to get the values as **String:Any** as well.

:::warning NOTE
This object will need to be defined in a unique shape that matches the shape of the JSON data. If you are unsure what the server's JSON data looks like you can always print out the result of converting the serverData to a string.
:::

Next, you will see where the String is converted back into a Data object on line 69 of the code:

![Request Parsing](/F2020/assets/img/URLRequestParsingJSON_2.png)

Within the response string conversion, there is do/catch block of logic to convert the Data object into a Dictionary of the type we defined above.  

```swift
jsonDictionary = try JSONSerialization.jsonObject(with: myData, options: []) as? [String:Any]
```

This conversion requires you to cast the return value as the exact same type as the jsonDictionary variable created above.  If this operation fails the error is caught in the do-catch and the error message is printed to the console to help debug what went wrong.

The end of the callBack function will update the UI on the main thread as long as the jsonDictionary object is populated with variables.  If the dictionary is still nil then something went wrong, and a debug message is printed to the console.

You can [download a copy of this project here](/F2020/assets/downloads/URLRequestParsingJSON.zip).  You can [download a copy of the php server script here](/F2020/assets/downloads/URLRequestParsingJSONServer.zip).

[Back to Week 11](./index.md#during-class)