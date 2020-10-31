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
Initializing and starting the Timer object is usually done at the same time __only if__ the timer is equal to nil to avoid starting multiple timers.
:::