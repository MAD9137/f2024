# URL Request Parsing JSON

This lesson gives you the working knowledge of how to make a URLRequest and how to parse the JSON text response into an object.  Most server code is transmitted using strings of JSON data.  Now that you understand how to parse JSON and make a URLRequest, let's see how—and where—we parse the string of JSON into a usable Swift object.

The view is set up the same as in the simpleUrlRequest application, and looks like this:

![Request Parsing](/F2020/assets/img/URLRequestParsingJSON_1.png)

The only changes to the code from the simpleUrlRequest version happens in the callback function. The first thing is to define an object using a dictionary to store the JSON structure that we receive from the server.  On line 60 you can see:

```swift
var jsonObject: [String:Any]?
```

This is the structure of dictionary in the server's JSON data response.  Next, you can see where the string is converted into a Data object on line 69 of the code:

![Request Parsing](/F2020/assets/img/URLRequestParsingJSON_2.png)

Within the response string conversion, there is do/catch block of logic to convert the Data object into a Dictionary of the type we defined above.

You can [download a copy of this project here](/F2020/assets/downloads/URLRequestParsingJSON.zip) or the [legacy version here](/F2020/assets/downloads/legacyURLRequestParsingJSON.zip).  You can [download a copy of the php server script here](/F2020/assets/downloads/URLRequestParsingJSONServer.zip).

[Back to Week 11](./index.md#during-class)