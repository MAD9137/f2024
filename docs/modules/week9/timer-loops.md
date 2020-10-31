# Delay Code Execution

## Delay with DispatchQueue

Sometimes it is useful to delay the execution of some code for a brief time, for example to display some information to the user before transitioning to another view.  This lesson will show you a few different ways to execute code after a small pause.

In a later week you will learn how to execute code of a call-back function for a URL request on a background thread using `DispatchQueue.main.async{ ... }`.  There is another async method you can use to simply delay the execution of any code you would like (and not just from a URL request).  The following function will print a message to the console 2.0 seconds after this code is run:

```


```