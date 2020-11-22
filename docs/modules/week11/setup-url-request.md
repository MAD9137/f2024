# Setup Projects To Make a URL Request

When developing an application that needs to use a **URLRequest** to to connect to a server in order to send or receive some data (like JSON), you will be given access to a preexisting server, or you might start by testing with your local web server (like MAMP or WAMP).

After testing your code to connect to the server, you might notice an error after you execute the URL request.  This usually happens when you are making an application that tries to communicate with an insecure server (http instead of https).  To allow your application to access this kind of URL you need to add a parameter to your **info.plist** file to grant your application permission to access that server.

:::warning NOTE
This should only ever be done for testing purposes.  You should never use this for a real release of your application, as your application will be rejected.
:::

As an example, look at this very simple app that has a button that will update a label in your view after making a URLRequest to a local server URL.  

![URL Request](/F2020/assets/img/SetupURLRequest_1.png)

When the button is pressed you would get an error message like the one shown at the bottom of the image below.

![URL Request](/F2020/assets/img/SetupURLRequest_2.png)

This is because Xcode defaults your iOS project's settings to *not* allow connections to any domains.  If you want to allow your application to access the network, you must add the **App Transport Security Settings** in your project's info.plist.

![URL Request](/F2020/assets/img/SetupURLRequest_3.png)

Right-clicking on the background of the settings in your info.plist gives you a context menu where you want to select 'Add Row'.  Then, you will have a field to type the property you would like to edit.  Start typing "App Transport Security Settings" into the key field.

![URL Request](/F2020/assets/img/SetupURLRequest_4.png)

After you have selected the "App Transport Security Settings" key, you will see that it was added as a Dictionary type with 0 items as the value.  You must add a new key-value pair to this dictionary.

![URL Request](/F2020/assets/img/SetupURLRequest_5.png)

To add a new key-value pair to this dictionary you must first expand the empty dictionary.  This is done by clicking on the arrow to the left of the entry to expand it.  There is nothing in it yet, but the arrow will point down when you have expanded it.

![URL Request](/F2020/assets/img/SetupURLRequest_6.png)

Then, right-click on the "App Transport Security Settings" key name and you will get the context menu where you will select "Add Row".

![URL Request](/F2020/assets/img/SetupURLRequest_7.png)

:::tip NOTE
You must expand the "App Transport Security Settings" dictionary before you can add a key-value pair to it.
:::

You know you have done this correctly when you see your new option indented under the "App Transport Security Settings" option.  Start typing, and select "Load Arbitrary Loads".

![URL Request](/F2020/assets/img/SetupURLRequest_8.png)

Set the value of "Allow Arbitrary Loads" equal to "YES" and that is it.  Save your changes to your info.plist file and new when you run your app you should be able to connect to the desired server.

![URL Request](/F2020/assets/img/SetupURLRequest_9.png)

:::tip NOTE
Make sure to save your changes to your info.plist file before testing your application.
:::

This will allow your application connect to insecure network addresses, but you would never want to keep this in a product you intended to release as this is unsafe.  If you have this feature enabled in your plist your application will be rejected from the app approval process.

You can [download the application here](/F2020/assets/downloads/SetupURLRequest.zip), and is already setup to access the school server.  [You can also download the server script here](/F2020/assets/downloads/SetupURLRequestServer.zip) if you want to setup the server script on your own system.  If you do, you will need to copy the server code into your htdocs (or www in WAMP) folder, and change the URL in the Xcode project to match the folder structure on your local server.

[Back to Week 11](./index.md#during-class)