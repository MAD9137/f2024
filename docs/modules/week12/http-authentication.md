# Basic HTTP Access Authentication

With modern RESTful web services, it is common for the server to be protected with some kind of network security (like the AAA process) that requires authentication to access the server contents.  This means the client application making the URL request must include the authentication information in the header of the URLRequest in order to gain access to the requested resource.

AAA server security process requires the server resources to do the following:

- Authentication – Requires the user to identify using a login and password with encryption.
- Authorization – Requires the user to have permission to access resources.
- Accounting – Requires the server to record user actions.

When building an application that requires server authentication, you are required to add a specific HTTP request header field in order to request access to the server’s information.  This lesson will teach you how to add custom header information into your URLRequest so you can authenticate with the server.  The header of your URLRequest must be modified after you create the URLRequest object, and before you use it to create the dataTask.

:::warning NOTE
This example is **very** basic, and only shows how to add content to the URLRequest header.  True authentication for different servers will require a unique, prescribed set of parameters set in the header which is designed by the developers of the server-side code.
:::

The following code is an example of making, and sending, a simple request to a server; similar to what you have seen in previous lessons.

```swift
// Create a url set to the desired server address
if let myUrl: URL = URL(string: "https://lenczes.edumedia.ca/mad9137/httpAuthentication/authRespond.php") {

    // Create the request object passing it the url object
    var myURLRequest: URLRequest = URLRequest(url: myUrl)
    
    // Create the URLSession object that will be used to make the requests
    let mySession: URLSession = URLSession.shared

    // Create a task from the session by passing in your request, and the callback handler
    let myTask = mySession.dataTask(with: myURLRequest, completionHandler: requestTask )

// Tell the task to run
myTask.resume()
}
```

This pattern of code showed how to request a resource from some URL without authentication.  But in this case, this server script will return an error message due to the missing information i the URLRequest' header.  So, it is here in this code you need to add the custom information into the header to the URLRequest object.  The block of code below shows where, and how, to add a custom field into the header of the URLRequest object.

```swift
// Create a url set to the desired server address 
if let myUrl: URL = URL(string: "https://lenczes.edumedia.ca/mad9137/httpAuthentication/authRespond.php") {

    // Create the request object passing it the url object 
    var myURLRequest: URLRequest = URLRequest(url: myUrl) 

    // Create authentication credentials as a string converted to utf8 encoded data 
    let authString = "seb:myPassword" 
    
    if let utf8String = authString.data(using: String.Encoding.utf8) {
        
        // Convert the unicode data to base 64 bit encoded string
        let base64String = utf8String.base64EncodedString(options: .init(rawValue: 0))
        
        // Add the header key "Authorization" with the value of "Basic:" added before our converted data
        myURLRequest.addValue("Basic_" +  base64String, forHTTPHeaderField: "my-authentication")

    }

    // Create the URLSession object that will be used to make the requests
    let mySession: URLSession = URLSession.shared 

    // Create a task from the session by passing in your request, and the callback handler 
    let myTask = mySession.dataTask(with: myURLRequest, completionHandler: requestTask ) 

    // Tell the task to run 
    myTask.resume() 
}
```

Any text can be used for the field name and the value; it is the server developer's choice of what header field names and values to check for.  Your application must send the URLRequest with the required header field and value added to it in order for the server to send the correct response data back to your code.

:::tip NOTE
When the header field "my-authentication" is sent to the server it will be found in the $_SERVER["HTTP_MY_AUTHENTICATION"] variable in the PHP script.  The name is automatically converted by the server to all capitol letters, with '-' changed to '_' and "HTTP_" added to the front.
:::

Header resources are stored as field **keys** with an associated **value**.  The name of the HTTP header field required by this specific server script is called “my-authentication”, and it's value must be “Basic_c2ViOm15UGFzc3dvcmQ=”.  

This value comes from the string “seb:myPassword” converted to data, and then converted to a base 64 bit string, which will convert the text to “c2ViOm15UGFzc3dvcmQ=”.  That converted string then has the text "Basic_" added to the front of it.  The developer of the server script chose the format of the value that is required by the client application in order to successfully authenticate the request.

In the example project provided in this lesson, you will also see how the PHP server script is looking for the specific custom request header field which controls access to the data.  If you try to access the server script without adding the correct field, and value to the header you will get the the PHP script's error message as a response.

:::tip NOTE
URLRequest header fields are defined as a custom key-value pair of strings in the header of the request object.  This is done using the URLRequest.addValue(“”, forHTTPHeaderField: “”) where the first parameter is the value, and the second is the field key name.
:::

You can [download the example iOS project here](/F2020/assets/downloads/HttpAuthentication.zip), and you can choose to [download the php server script](/F2020/assets/downloads/HttpAuthenticationServer.zip) that works with this example if you want to try to run this example in wamp or mamp.

[Back to Week 12](./index.md#during-class)