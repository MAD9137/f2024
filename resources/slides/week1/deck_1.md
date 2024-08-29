---
marp: true
theme: default
class:
  - invert
---

# What is iOS?

iOS is the operating system developed by Apple Inc. for its mobile devices, including the iPhone and iPad

Launched in 2007 with the first iPhone, iOS is a UNIX-based operating system that leverages C, C++, and Objective-C for its core components. 

With each new version, iOS brings enhancements in performance, user experience, and features, making it a powerful platform for mobile app development.

<!--
**Presentation Notes:**
- We build for the os, not the browser
- We build using native tools, not Hybrids (Vantages, disadvantages?)
-->

---

# Course Goals

By the end of this course, you will:

- Understand the Basics of Swift
* Develop iOS Applications
* Integrate your app with backend services
<!--
1. **Understand the Basics of Swift**: Learn the Swift programming language, including syntax, data types, control flow, and more.
2. **Develop iOS Applications**: Build and design iOS apps using Xcode and SwiftUI, from creating user interfaces to integrating with APIs.
3. **Deploy and Test Apps**: Deploy your apps on physical devices and test them using simulators and real-world scenarios.
4. **Navigate the App Store**: Understand the Apple App Store review process and app submission guidelines.

-->

---

# Course Structure

The course is divided into two main parts:

- Swift fundamentals
* Building iOS Apps using SwiftUI

<!--
1. **Swift Fundamentals**: We will start with the basics of Swift using Swift Playgrounds, a lightweight environment ideal for learning and experimenting with code.
2. Explain why we need swift before SwiftUI
3. **Building iOS Apps**: Transition to Xcode to build and deploy native iOS applications, utilizing SwiftUI for modern user interface design.
4. We will have a class in git
5. We will talk about Firebase, a backend services provider
6. We will talk about specific Swift Frameworks
-->

---

# Course Requirements

## macOS

To ensure compatibility with the latest development tools and stability, please ensure you are running macOS 14.5 (Sonoma).

**How to Check Your macOS Version:**

1. Click the Apple icon in the upper left corner of your screen.
2. Select “About This Mac.”

---

# Xcode

Xcode is the integrated development environment (IDE) required for iOS development. It includes tools for writing, debugging, and testing code, as well as designing user interfaces.

Download Xcode from the [Mac App Store](https://apps.apple.com/ca/app/xcode/id497799835?mt=12).

---

# Why Xcode?

- **Official IDE**: Xcode is the official IDE provided by Apple, ensuring compatibility with the latest iOS features and updates.
* **Integrated Tools**: Includes Interface Builder, Instruments, and SwiftUI previews for a complete development experience.
* **Tip**: While you might consider other editors like VSCode, Xcode provides essential tools and features specifically tailored for iOS development.

<!--
**Presentation Notes:**
- Discuss the significance of Xcode as the official IDE for iOS development.
- Provide instructions for downloading and installing Xcode.
- Explain why Xcode is preferred over other editors.
-->

---

# Swift Playgrounds

Swift Playgrounds is a versatile tool for learning and experimenting with Swift code. It provides an interactive environment where you can explore code snippets, create simple applications, and understand programming concepts without the overhead of a full IDE.

## Resources

- Download playgrounds for macOS: [Swift Playgrounds - Mac](https://apps.apple.com/ca/app/id1496833156)
- Download playgrounds for iPadOS: [Swift Playgrounds - iPad](https://apps.apple.com/ca/app/id908519492)
- [Swift Playgrounds - Apple](https://www.apple.com/ca/swift/playgrounds/)
- [Build Your First App in Swift Playgrounds - WWDC22](https://developer.apple.com/videos/play/wwdc2022/10019/)

<!--
**Presentation Notes:**
- Introduce Swift Playgrounds as a learning tool.
- Provide links for downloading Swift Playgrounds on macOS and iPadOS.
- Mention additional resources for getting started with Swift Playgrounds.
-->

---

# Apple Developer Program

To deploy your apps to physical devices and distribute them via the App Store, you need an Apple Developer Account and a membership in the Apple Developer Program.

## Advantages of Enrolling

- **App Distribution**: Release your apps on the App Store.
- **Beta Releases**: Access and test beta versions of Apple’s software.
- **App Store Analytics**: Monitor app performance and user engagement.
- **Developer Support**: Get technical support from Apple’s engineers.

<!--
**Presentation Notes:**
- Explain the need for an Apple Developer Account and Program membership.
- Highlight the benefits of enrolling, including app distribution and support.
- Provide information on how to enroll and relevant resources.
-->

---

# Exploring Xcode

Xcode is the Integrated Development Environment (IDE) for macOS used to develop iOS applications. 

It provides a comprehensive suite of tools for coding, debugging, designing, and testing applications.

---

# Xcode Overview

Xcode integrates various tools into a single environment, streamlining the development process. Familiarizing yourself with Xcode’s layout and features will help you navigate and utilize the IDE effectively.

<!--
**Presentation Notes:**
- Provide an overview of Xcode and its importance.
- Explain that Xcode integrates multiple tools to streamline development.
-->

---

# The Xcode Window Layout

## Toolbar

The toolbar is a crucial component providing quick access to essential development tools:
- **Run/Stop Button**
- **Scheme Selector**

<!--
- Starts or stops your app on the simulator or a connected device.
- Allows you to choose the target device or simulator for running your app.
-->

---

# Navigator Area

The navigator area helps manage project files and navigate through code:

- **Project Navigator**
- **Source Control Navigator**
- **Bookmark Navigator**
- **Find Navigator**
- **Issue Navigator**
- **Test Navigator**
- **Debug Navigator**
- **Breakpoint Navigator**
- **Report Navigator**

<!--
- **Project Navigator**: Displays the hierarchy of your project files. You can open, manage, and reorganize files from this navigator.
- **Source Control Navigator**: Provides access to version control features, allowing you to view and manage changes in your code repository.
- **Bookmark Navigator**: Helps you manage bookmarks within your code, enabling quick navigation to marked locations.
- **Find Navigator**: Allows you to search for text, symbols, and other elements within your project.
- **Issue Navigator**: Displays a list of issues, such as errors and warnings, generated during the build process.
- **Test Navigator**: Manages and runs your project's unit tests, showing results and allowing easy navigation to test code.
- **Debug Navigator**: Provides information about the runtime state of your application, including memory usage, threads, and more.
- **Breakpoint Navigator**: Lists all breakpoints set in your code, allowing you to manage and navigate them easily.
- **Report Navigator**: Displays logs and reports generated by Xcode, including build, run, and analysis reports.
-->

---

# Editor Area

The Code editor area is where you write and edit code

---

# Debug Area

The debug area is essential for diagnosing issues and understanding app behavior:

* **Debug Console**: Displays runtime messages, errors, and log outputs. Interact with the debugger and view print statements here.
* **Variables View**

---

# Questions?
