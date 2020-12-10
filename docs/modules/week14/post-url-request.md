# URLRequest Sending Data With POST

There are two common ways you can send data through HTTP, the GET method and the POST method.  So far we have seen examples of using the GET method where data is turned into a string, and concatenated to the end of the URI as key/value pairs.  By default the URLRequest's HTTP method is set to GET.

## Using the POST Method

Adding variable data to the end of the URI leaves the information as clear-text, which is not secure at all.  This can be seen by your ISP, and anyone else watching the users internet traffic!

Using the POST method does **not** work by adding the variables as a clear-text string to the end of the URI.  Instead it is left as raw data and added to the body of the http request.  The server script will dictate when you need to use POST data instead of GET variables.

The following example will be used to illustrate how this is done.

![POST URLRequest Data](/F2020/assets/img/PostURLRequest_1.png)

When you need to use POST data in your application it will be added into the URLRequest object before you create and run your task.

This process requires you to convert your dictionary into a Data object, and then turn that into a JSON string.  Then you will concatenate this string value after the key that the server requires (in this case the key is "myPostInfo" and the value is the json string).

The last step is to convert the whole string back into a Data object and set it as the value of the request.httpBody.  Then you add the request to the session to create the task, and finish by running the task by calling resume.

Bellow, you can see how the URLRequest code looks for this example, and how it differs from the GET examples you have seen.

![POST URLRequest Data](/F2020/assets/img/PostURLRequest_2.png)

You can [download this example project here](/F2020/assets/downloads/URLRequestSendPost.zip) to try yourself.  You can also [download the server](/F2020/assets/downloads/URLRequestSendPostServer.zip)) needed for your application to communicate with.