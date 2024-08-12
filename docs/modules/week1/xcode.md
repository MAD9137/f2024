# 🧠 Xcode

[Xcode](https://en.wikipedia.org/wiki/Xcode) is an integrated development environment (IDE), which is a powerful code editor with many development tools integrated within it. It's a C-style compiler-based programming tool that lets you write your applications in C, Objective-C, and Swift. You then run the compiler on your code and it makes a packaged executable. The compiler interprets your code and translates into native machine code executable for the specific target operating system chosen.

When it was first released back in 2003, Xcode greatly simplified development of applications over its predecessor Project Builder. Xcode is free to download for Mac owners, and comes with the iOS SDK and an emulator for iOS development built in. Xcode allows the creation of projects using C, C++, Objective-C, the Swift coding language and more. As stated before, you will be using the newest version of Xcode and Swift for development in this course.

When using a compiler based programming language like Swift you must compile (or build) your project every time you want to see any changes you have made to your code or layout. If there are errors in your project, the compiler will offer you debug information that will help you find the bug and fix it. After successfully building your project Xcode makes the packaged executable file and runs it in the iOS simulator.

## Installing Xcode

You will need Xcode installed on your machine for this course. If you do not, you can install Xcode from the [Mac App Store](https://en.wikipedia.org/wiki/Xcode)

::: warning Note
Remember, if a new major version of Xcode (and Swift) comes out during the semester and you choose to upgrade, you will be accepting the responsibility to learn any new syntax in Swift and Xcode layouts. If you do not wish to update then make sure you have automatic updates turned off. This is done by opening up the App Store on your laptop, select **App Store -> Preferences** and uncheck **'Install app updates'**.
:::

## iOS SDK

The iOS SDK actually comes with Xcode, so there is no extra download or setup for this, but there are a few additional things we will want to do to make our lives easy.

## iOS Simulators

Next you will want to follow these steps to download the iOS simulators:

- Launch Xcode and click on the menu **Xcode -> Preferences**.
- Next, click the Components tab.
- You can download all available simulators but we'll try to stick to the latest.
