# Delay Code Execution

Sometimes it is useful to delay the execution of some code for a brief time, for example to display some information to the user before transitioning to another view.  This lesson will show you a few different ways to execute code after a small pause.

## Delay with DispatchQueue

In a later week you will learn how to execute code of a call-back function for a URL request on a background thread using `DispatchQueue.main.async{ ... }`.  There is another async method you can use to simply delay the execution of any code you would like (and not just from a URL request).  The following function will print a message to the console 2.0 seconds after this code is run:

```swift
// Execute some code on the main thread after the given deadline is reached
DispatchQueue.main.asyncAfter(deadline: DispatchTime.now() + 2.0) {
    // Code for delayed execution
    print("MainQueue - code executed after deadline reached.")
}
```

The deadline parameter is of type **DispatchTime** which represents a point in time relative to the system clock.  If you want the code execution to occur 2 seconds later you need to use the current time plus 2 seconds.  To do this use the `DispatchTime.now() + 2.0` to set the delay 2 seconds in the future.


## Delay with the Perform Method

You have seen how to use the `performSegue(withIdentifier, sender)` method to programmatically execute a segue in a previous lesson.  There are, in fact, many perform methods you are able to use in Swift, and some of them let you execute code after a delay.  The following method can be used in order to delay code execution by 2.0 seconds:

```swift
// Execute the selector function after the time delay has passed
perform(#selector(delayMyCallback), with: nil, afterDelay: 2.0)
```

This method will start a timer running on the current thread where this function is called, and will execute the function you pass to the `#selector` parameter.  In this case we have given the callback function the name delayMyCallback which is called 2.0 seconds later.  The custom function would then be written like this:

```swift
// Perform Selector function will run after delay
@objc func delayButtonCallback () {
    print("Perform delay has ended.")
}
```

:::warning NOTE
Functions that are accessed by `#selector()` parameters must be prefaced with `@objc` before the func declaration.
:::


## Delay with a Timer

The **Timer** class lets you create an object that can trigger a callback function on a set interval.  A Timer object can be configured to run just once, or repeat endlessly until you manually tell it to stop.  Timers are able to execute a function at the beginning of each time interval.

To create a timer in code, you simply instantiate a new Timer object like so:

```swift
// Create Timer variable
var timer : Timer?

// Initialize timer object to fire the timerCallBack function at a date in the future
timer = Timer(fireAt: Date(timeIntervalSinceNow: 2.0), interval: 0, target: self, selector: #selector(timerCallBack), userInfo: nil, repeats: false)
```

:::warning NOTE
Remember that the `Date(timeIntervalSinceNow)` initializer lets you create a date object set to a chosen number of seconds in the future from the current time.
:::

To have code execute at a scheduled date, you create a new Date object with timeIntervalSinceNow parameter and pass in the number of seconds to delay.  You set the repeat interval to 0 seconds, pass in the selector function, and set repeat to false.

Then, to make the timer start, you will need to schedule it to run in the current thread of execution like so:

```swift
// Add the timer to the current run-loop, and set it to run in the default run mode
RunLoop.current.add(timer!, forMode: .defaultRunLoopMode)
```

The last bit of code needed to make this example work is the selector function, which would look like this:

```swift
// Timer selector function to run at the scheduled date
@objc func timerCallBack (t:Timer)  -> Void{
    // Stop and delete the Timer object
    timer!.invalidate()
    timer = nil
}
```

When the scheduled date is reached the selector method will run, letting you execute some code in it when triggered.

You can [download an example project](/F2020/assets/downloads/BasicTimer.zip) that shows you how to delay code execution using these techniques.

[Back to Week 12](./index.md#during-class)