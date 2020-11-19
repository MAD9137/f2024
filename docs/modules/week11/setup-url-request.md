# Setup Projects To Make a URL Request

When developing an application that needs to use a **URLRequest** to get some data from a server, you will be given access to a preexisting server, or you might be starting by testing with your local web server (like MAMP or WAMP).

After writing the code to connect to the server, you might notice an error after your code makes the request to connect.  When you are making an application that will communicate with a server to get data (like JSON), you need to add a parameter to your **info.plist** file to grant your application permission to access the network.

Assume you have a very simple app that just has a label in your view, and when the app is run the viewDidLoad method will make a URLRequest to the local server URL.  You would get an error message like in the image below:

![URL Request](/F2020/assets/img/LocalHostConnection_1.png)

This is because Xcode defaults your iOS project's settings to *not* allow connections to any domains.  If you want to allow your application to access the network, you must add the **App Transport Security Settings** in your project's info.plist.

![URL Request](/F2020/assets/img/LocalHostConnection_2.png)

Right-clicking on the background of the settings in your info.plist gives you a context menu where you want to select 'Add Row'.  Then, you will have a field to type the property you would like to edit.  Start typing "App Transport Security Settings" into the key field.

![URL Request](/F2020/assets/img/LocalHostConnection_3.png)

After you have selected the "App Transport Security Settings" key, you will see that it was added as a Dictionary type with 0 items as the value.  You must add a new key-value pair to this dictionary.

![URL Request](/F2020/assets/img/LocalHostConnection_4.png)

To add a new key-value pair to this dictionary you must first expand the empty dictionary.

![URL Request](/F2020/assets/img/LocalHostConnection_5.png)

Then, right-click on the "App Transport Security Settings" key name and you will get the context menu where you will select "Add Row"

![URL Request](/F2020/assets/img/LocalHostConnection_6.png)

::: tip
You must expand the "App Transport Security Settings" dictionary before you can add a key-value pair to it.
:::

You know you have done this correctly when you see your new option indented under the "App Transport Security Settings" option.  Start typing, and select "Load Arbitrary Loads".

![URL Request](/F2020/assets/img/LocalHostConnection_7.png)

Set the value of "Allow Arbitrary Loads" equal to "YES" and that is it.  Save your changes to your info.plist file and new when you run your app you should be able to connect to the desired server.

![URL Request](/F2020/assets/img/LocalHostConnection_8.png)

::: tip
Make sure to save your changes to your info.plist file before testing your application.
:::

You can [download the application here](/F2020/assets/downloads/SetupURLRequest.zip), and is already setup to access the school server.  [You can also download the server script here](/F2020/assets/downloads/SetupURLRequestServer.zip) if you want to setup the server script on your own system.  If you do, you will need to copy the server code into your htdocs (or www in WAMP) folder, and change the URL in the Xcode project to match the folder structure on your local server.

[Back to Week 11](./index.md#during-class)