# URL Request to RESTful API

This lesson provides you with an understanding of how to use a URL request to make calls to a RESTful API, and how to handle the response that is returned by the server.  This example is using the same "Planets API" used in your Android development. 

You can review the structure of this API here: [https://lenczes.edumedia.ca/mad9137/pa_api/](https://lenczes.edumedia.ca/mad9137/pa_api/)

## API Overview

The URIs that let you communicate with the Planets API are HTTP GET requests which allow you to access the resources from the server.  There are 3 different URI's you can use to access different information about the planets of the solar system.

[https://lenczes.edumedia.ca/mad9137/pa_api/planet/read_all.php](https://lenczes.edumedia.ca/mad9137/pa_api/planet/read_all.php)
This URI responds by sending you JSON data containing all of the information about all of the planets (with no images)

[https://lenczes.edumedia.ca/mad9137/pa_api/planet/read.php?id=3](https://lenczes.edumedia.ca/mad9137/pa_api/planet/read.php?id=3)
This URI lets you get the JSON data about a specific planet (with no images)

[https://lenczes.edumedia.ca/mad9137/pa_api/planet/read_img.php?id=3](https://lenczes.edumedia.ca/mad9137/pa_api/planet/read_img.php?id=3)
Gets raw data for a specific planet's image (needs to be converted to UIImage in Swift)

:::tip NOTE
The 3 is replaceable with any number from 1-9 in order to get info about one of the 9 planets.
:::

## Application Overview

### First View
The example application provided in this lesson has a tableView with a navigationController embedded in it as it's initial view.  The navigationBar needs to have a barButtonItem labeled “Load”. 

The "Load" button's action will make a URLRequest to the Planets API to get all the planets' info (https://lenczes.edumedia.ca/mad9137/pa_api/planet/read_all.php).  Then, in the Callback method, the tableView is populated with the names of the 9 planets and the tableView is told to call reloadData() from within the DispatchQueue.main.async{...} method.

The prototype cell in the first view is connected via a segue to the second view of this application.  Clicking on a Cell in the tableView will pass the selected planet's info to the second view.  This will require you passing that planet's dictionary object through the segue.

### Second View
The second viewController class has a dictionary to hold the current planet's JSON data.  Clicking on a cell in the first view's table passes the current planet's JSON data to the second view in the prepareForSegue method.

This second view will be a regular viewController with some textLabels, a textView, and an imageView to display the information, and image for the specific planet selected by the user. 

It will set the label and textView with the data from the JSON object.  Then, it will need to run a URLRequest to get the image data.  This requires a URI for the specific planet's image by concatenating the planetID value to the end of "https://lenczes.edumedia.ca/mad9137/pa_api/planet/read_img.php?id=".

The callback method uses the DispatchQueue.main.async {} method to update the imageView after processing the image responses from the server.

:::tip Note
The planetID value is taken from the value for the "id" key stored in the JSON object passed to this view.
:::

You can [download a copy of this project](/F2020/assets/downloads/URLRequestToRESTfulAPI.zip) to see how this application works, and how the URIs are created to request the JSON data from the RESTful API.

[Back to Week 12](./index.md#during-class)