# Passing Data Back to A View Controller

As you have seen, you can pass the value of a variable from a viewController to a second viewController class through a segue.  However, passing values from a second view back to the first is a different story.

Passing data from a second view back to an initial viewController requires you to make and use your own custom **Delegation Protocol**.  This protocol will be inherited by the first viewController class, requiring your first viewController class to write its own definition of the protocol function.  In your second viewController, you must instantiate an object of your Delegate Protocol (make a variable of your Protocol Delegate type).  This object's method will let the second viewController class call the function written in your first viewController, and pass in the data you want to pass as the function's parameter.  The first viewController's function is then able to set a value within the first viewController class.

For an example, let's look at the following project which has two views with their own viewController classes.  The first view on the left has a textLabel that displays “0”, and a button labeled “Edit Number” below.  The second view has a button labeled “Save New Number” with a slider below it.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_01.png)

The first view has the textLabel hooked up as an outlet called `numberLabel`, and the button is connected to an action called `editButtonAction`.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_02.png)

The second view has its button is connected to an action called `saveButtonAction`, and it’s slider connected to an outlet called `mySlider`.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_03.png)

## Defining a Delegate Protocol

The next thing this project would need you to add is a new protocol that defines our custom delegate.  The first class will inherit from this protocol, so that it can be a delegate to pass a number from the second view back to the first.  The protocol needs to define the variable that the inheriting class will need to define its own copy of.  To do this, you will begin by creating a new Swift file in your solution by right-clicking (control+click) on project folder and select New File.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_04.png)

After choosing Swift File as the type, the file should be named something appropriate like “Protocols” or something similar.  Then, you need to add a protocol that defines a function that will take the float value of the slider in the second view and pass it into the delegate function in the first view letting the first view have access to the value within that function.  This protocol can be defined in the following way:

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_05.png)

## First View Inherits from the Delegate Protocol

Now that you have a new protocol, you want to make your first view be a delegate for that type of protocol.  You do this in your viewController's class definition where it inherits from UIViewController and adding a comma, and then adding your new numberPassingDelegate protocol after it.

After inheriting from this protocol you will see an error generated in your code.  This is warning you that you have not defined the protocol function that the delegate must define.  So you must add that as well.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_06.png)

After inheriting from the protocol and defining the required function, you must add some code into the viewController's `prepare(for segue: UIStoryboardSegue, sender: Any?)` method.  After checking if you are performing the correct segue, you must get an instance of the next viewController referring to it as a copy of your SecondViewController.  You must then set the first viewController as the delegate for the SecondViewController object before segueing to it.

You must also call `performSegueWithIdentifier` in your button action, letting the button segue to the second view.  The final thing this class needs is to use the value when the second view passes it back to the first.  In this example, we will just use the float passed in to update the numberLabel outlet's text.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_07.png)

## Second View Passing Data to First

The next thing you need to do is add an optional delegate object to the second view of the NumberPassingDelegate type you created.  This is required so that your first view can successfully set itself as the delegate for this class, and now that this object exists the connection will be successfully created in the prepare() function of the first view.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_08.png)

Lastly, you need your second view's button action to call the `passNumberBack` method from the delegate object, and pass in the value from the slider before ending this view.  The last thing you do in the action is dismissing the secondViewController by calling the dismiss function, which takes two parameters - the animated parameter is a boolean controlling whether or not the second view will be hidden with an animation or not.  The second parameter, `completion:` takes a function passed in as a variable.  This completion function gets executed after the segue unwinds back to the first view.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_09.png)

Now, when you run the application you will be able to click the button in the first view to transition to the second.  In the second, you can move the slider to any position and click the “Save New Number” button.  This will pass the float value back to the first view's delegate function which sets the textLabel in the first view before dismissing the second view.  Now, your first view has the value passed from the second.

![Passing data back to a view controller](/F2020/assets/img/PassDataBack_10.png)

[Back to Week 6](./index.md#during-class)