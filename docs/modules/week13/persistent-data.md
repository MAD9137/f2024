# Persistent Data with UserDefaults

If you need your application to save values after the application is closed and then opened again you will use the **UserDefaults** class. Making a variable of type UserDefaults lets you save values to local storage on the device for your specific application.

When you make a variable of type UserDefaults you simply access its methods to save and load values to, and from the local storage on your device. Let’s look a simple example where an application needs to save a float value from a UISlider object to UserDefaults.

![Persistent Data with UserDefaults](/F2020/assets/img/UserDefaults_1.png)

In this example, the user sets the slider's value and then must click on the save button to save the value. When the user clicks the clear button it will clear the UserDefault value from the local storage. Also, when the application first loads the viewDidLoad function attempts to get the UserDefault value, and if the value exists for the desired key it will set the UISlider's value to the restored float.

This example also disables the clear button when there is no UserDefault value stored on loading. Only when a value is set will the clear button get enabled.

![Persistent Data with UserDefaults](/F2020/assets/img/UserDefaults_2.png)

The example from this lesson can be [download here](/F2020/assets/downloads/UserDefaults.zip).

A more complex example of saving a string and an image to UserDefaults can be [download here](/F2020/assets/downloads/UserDefaultsWithImage.zip).
