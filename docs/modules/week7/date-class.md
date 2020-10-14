# The Date Class

## The Foundation Framework

The Foundation framework is one of Apple's APIs used for iOS application development.  Apple's developer site describes it as an API to “access the essential classes that define basic object behaviour, data types, collections, and operating-system services.”  This also includes the Date object.

::: tip
Read here for more information about iOS Foundation classes: [https://developer.apple.com/documentation/foundation](https://developer.apple.com/documentation/foundation)
:::

## The Date class

In order to use the Date class, you must import the foundation classes at the top of the .swift file like so:

``` swift
import Foundation
```

:::tip NOTE
The UIKit library also imports the Foundation library.  If your class imports the UIKit library you do NOT need to import the Foundation library as well.
:::

The definition Apple gives for the Date class is that it: “provides methods for comparing dates, calculating the time interval between two dates, and creating a new date from a time interval relative to another date.”  This class lets you create individual date objects that each hold a specific date.

## Creating Date objects with the base initializer

An object created from the Date class will define a single point in time, independent of any particular calendar system or time zone.  The functions provided in the Date class offer developers different ways to set a specific date/time value in the past or future.

The following code shows how to use the base initializer to set a date object to the current date and time on the device.

``` swift
// This is the base initializer for the Date class
var currentDate:Date = Date()
```

## Creating Date objects using the convenience initializers

There are Date class convenience initializers that let you set the number of seconds that has passed *since January, 1st, 1970, 12:00 am midnight* (unix time code) or, the more modern reference date, *since January, 1st, 2001, 12:00 am*, and an initializer that lets you set a date in the past or future from the current time.

The following code shows examples off how to set an Date object to a specific date and time using the convenience initializers:

``` swift
// The following init methods set the date object to a date offset in seconds passed in as the TimeInterval input parameter for each initializer.
// Make a Date object and set its date using the Date(timeIntervalSince1970) init method
var date1:Date = Date(timeIntervalSince1970: 1492998900.0)

// Make a Date object and set its date using the Date(timeIntervalSinceReferenceDate) init method
var date2:Date = Date(timeIntervalSinceReferenceDate: 514691700.0)

// Make a Date object and set its date using the Date(timeIntervalSinceNow) init method
var date3:Date = Date(timeIntervalSinceNow: -13583250.0)
```

## Setting Date objects with a DateFormatter

The following shows how to manually set an Date object to a specific date-and-time using an DateFormatter object:

``` swift
// Using the DateFormatter class to set to a specific date format
// Make a Date object
var date4:Date?

// Create a date formatting object that will be used to create NSDate objects set to a specified date string.
let formatter = DateFormatter()

// Set the formatting object's dateFormat property to a date string formate.
formatter.dateFormat = "yyyy/MM/dd HH:mm"

// Pass a string with a date and time to the date formatting object to have it return an NSDate set correctly.
date4 = formatter.date(from: "2017/04/23 21:55")
```

## Setting Date objects using DateComponents

The following shows how to manually set an Date object to a specific date and time in code:

```swift
// The following creates a date object and sets it using date components passed to a calendar object
// Make a Date object
var date5:Date?

// Create a date component object that will be used to create Date objects set to a specified date.
var components = DateComponents()

// Set the timezone reference to the device's current timezone
components.timeZone = TimeZone.ReferenceType.local

// Set the individual date and time properties of the date component
components.year = 2022
components.month = 7
components.day = 21
components.hour = 12
components.minute = 55

// Create a calendar from devices current calendar
let calendar = Calendar.current

// Use the calendar object to create a date object using the information in the components
date5 = calendar.date(from: components)
```

## Accessing Date object values

If you want to get a string with the date and time from your Date object, you do it in the following way:

```swift
// When you want the time as a text string you can use this
print("Curret time is: \(date5!.description)")
// Or simply
print("Curret time is: \(date5!)")

// But you will see that the .description always gives you a value referring to UTC
// What you need to do is to get the date formatted by using the DateFormatter class
let thisDate = DateFormatter.localizedString(from: date5!, dateStyle: DateFormatter.Style.short, timeStyle: DateFormatter.Style.short)

print("Curret time is: \(thisDate)")
```

The built-in formatting options that are stored in the Style enumerator are full, long, medium, short and none.

::: tip
A full reference for the Date class can be found here: [https://developer.apple.com/documentation/foundation/date](https://developer.apple.com/documentation/foundation/date)
:::

[Back to Week 7](./index.md#during-class)