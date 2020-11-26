# Timer Loops and CADisplayLink Loops

In iOS development, it is possible to execute code in a repeating loop with a specific amount of time between executions using a timer.  There are two different types of timers that you can use: the Timer and the CADisplayLink class.  They work the same way, letting you execute a selector function on a set interval for which you specify the length of the delay.  These repeating timers will continuously run, executing the code until you tell them to stop.

They can be used to perform tasks that need continuous updating, like doing routine server calls, keeping precise time, reading from an input like an accelerometer, or running custom animations.  If your application does require a looping timer, you must first decide which one you should use.

## Using a Repeating Timer Loop

The **Timer** class offers the most flexibility with a specifiable double floating point time interval that has a "sub-millisecond precision over a range of 10,000 years" (from Apple's Swift documentation on TimeInterval).  It also lets you schedule the timer to start on a given date in the future, as seen in the previous lesson.  To use a Timer in your project, you will need to start by creating an optional Timer object in your code—usually in the main scope of your class.

```swift
// Create an optional Timer object
var myTimer : Timer?
```

This object will need to be initialized and scheduled to run in the current thread.  When you use any of the Timer initializers, you need to then manually add it to the current run-loop.  In this example, we will see how to combine these two items in one by using a function called `scheduledTimer()` within the base Timer class which creates, and adds, the timer object to the current run-loop automatically.  The function used in this example looks like this:

```swift
// Create a timer object, set the length of interval between calls to the selector function, and set the timer to loop
timer = Timer.scheduledTimer(timeInterval: 0.005, target: self, selector: #selector(timerCallBack), userInfo: nil, repeats: true)
```

After initializing it, you can start your Timer object's execution by telling it to fire, like so:

```swift
// Tell the timer to start
timer!.fire()
```

:::warning NOTE
Initializing and starting the Timer object is usually done at the same time _only if_ the timer is equal to nil to avoid starting multiple timers.
:::

Whenever you decide to stop the timer from running, you invalidate it and you should always set the timer object equal to nil to delete it when you are done with it.

```swift
// Stop the timer from running and delete the object
timer?.invalidate()
timer = nil
```

The **selector** method is a function that you create, and decide what code to execute each time the timer repeats.  In the example in this lesson, it is called `timerCallBack`, but the name is your choice.  The basic structure for a selector method is:

```swift
@objc func timerCallBack () {
    // The timer repeats the execution of your code written here
}
```

This function can be used to increment a value, display the next frame of an animation, make a url request, or check the state of the devices accelerometer.

:::warning NOTE
When the timer is started the selector method is executed, then the timer waits for the time interval to elapse before executing the selector method the second time.
:::


## Using the CADisplayLink Class to Loop

The **CADisplayLink** class, as mentioned before, works the same as the Timer object for repeating the execution of some code.  There are a few differences to keep in mind when choosing which class to use in your project. 

The first major difference is that the CADisplayLink is specifically created to run code in a loop, where as the Timer class lets you choose whether or not the timer repeats or executes only a single time.

The next difference is that the CADisplayLink is locked directly to the refresh rate of the screen on the device.  This means you must set the interval time as a preferred frames-per-second.  This is quite different to the Timer, which lets you define the amount of time between executions in seconds (and milliseconds).  This requires a bit of math if you would like to tell the CADisplayLink object to have a specific amount of seconds between executions.

Other than those differences, these two classes work in the same way. 

To create a CADisplayLink you would write:

```swift
// Create an optional CADisplayLink object
var cadlTimer : CADisplayLink?
```

Then you initialize, and set the length of time between executions like so:

```swift
// Create a timer object that will call our function cadlTimerCallBack
cadlTimer = CADisplayLink(target: self, selector: #selector(cadlTimerCallBack))

// Set how often this timer should run the callback function
cadlTimer?.preferredFramesPerSecond = 60
```

You can then start the timer by adding it to the current run-loop:

```swift
// Tell the timer to start
cadlTimer?.add(to: .current, forMode: .defaultRunLoopMode)
```

When you wan to stop the loop from running you do the same process as with the Timer object, you invalidate the object and then set it equal to nil to delete it.  In this example this code would look like this:

```swift
// Stop the timer from running and delete the object
cadlTimer?.invalidate()
cadlTimer = nil
```

Again, the selector method is a function that you create, and decide what code to execute each time the timer repeats.  In the example in this lesson it is called `cadlTimerCallBack`, but again the name is your choice.  The basic structure for this selector method would be:

```swift
@objc func cadlTimerCallBack () {
    // The timer repeats the execution of your code written here
}
```

As mentioned above, this function is where you would increment a value, display the next frame of an animation, make a url request, or check the state of the device's accelerometer.

The major difference between the two timers is the performance.  The CADisplayLink timer will fire with extremely precise regularity making any visual updates execute as smoothly as possible.  The Timer object runs in the main thread and will seem to be less consistent whenever there is a lot being processed.

You can [download an example project here](/F2020/assets/downloads/TimerLoops.zip) showing how to implement both types of timers.

[Back to Week 12](./index.md#during-class)