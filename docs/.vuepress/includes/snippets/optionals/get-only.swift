// Create an optional variable
var myNum: Int? = 25  // Uncomment to set optional

/* Make a Get-Only variable that returns a 'safe' value for the above
optional if it's nil, otherwise return the unwrapped optional value */
var eventCount: Int {
    guard myNum != nil else { return 0 }
    return myNum!
}

// You can access the current Get-Only variable like a normal variable
var e = eventCount

// But you can not set its value directly 
// eventCount = 34