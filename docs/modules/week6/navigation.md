# 🧠 Navigation

Use navigation containers to provide structure to your app’s user interface, enabling people to easily move among the parts of your app. For example, people can move forward and backward through a stack of views using a NavigationStack, or choose which view to display from a tab bar using a TabView.

Watch this WWDC22 video on iOS navigation: [Explore navigation design for iOS](https://developer.apple.com/videos/play/wwdc2022/10001/)

## Basic navigation

Use a navigation stack to present a stack of views over a root view. People can add views to the top of the stack by clicking or tapping a NavigationLink, and remove views using built-in, platform-appropriate controls, like a Back button or a swipe gesture. The stack always displays the most recently added view that hasn’t been removed, and doesn’t allow the root view to be removed.

People click or tap a navigation link to present a view inside a NavigationStack or NavigationSplitView. You control the visual appearance of the link by providing view content in the link’s label closure. For example, you can use a Label to display a link:

```swift
// Inside body
NavigationStack {
     List {
        NavigationLink("Page 1", destination: Text("Page 1"))
        NavigationLink("Page 2", destination: Text("Page 2"))
        NavigationLink("Page 3", destination: Text("Page 3"))
    }
}
```

use a predefined view for destination

```swift
// Inside body
NavigationStack {
     List {
        NavigationLink("Page 1", destination: Page1View())  
        NavigationLink("Page 2", destination: Page2View())
        NavigationLink("Page 3", destination: Page3View())
    }
}
```
::: tip Note
[NavigationStack](https://developer.apple.com/documentation/swiftui/navigationstack) supersedes [NavigationView](https://developer.apple.com/documentation/swiftui/navigationview). Use availability checking to validate os version. see [Check API Availability](https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html#ID523) for more information
:::

## Passing data between views

```swift
// Setup data
var people = [Person]()

people.append(Person(firstName: "Bob", lastName: "Johnson"))
people.append(Person(firstName: "Tim", lastName: "Tuna"))
people.append(Person(firstName: "John", lastName: "Johnson"))

NavigationStack {
     List(people) { person in
        NavigationLink(person.fullName, destination: PersonDetailView(person: person)))  
     }
}
```

## Navigation Configuration

```swift
NavigationStack {
     List(people) { person in
        NavigationLink(person.fullName, destination: PersonDetailView(person: person)))
        // Navigation title
     }.navigationTitle("People")
     .navigationBarTitleDisplayMode(.inline) // change title display config
     .navigationBarItems(leading: Button("Click") { // add items to navigation bar
                    print("clicked")
                })
}
```

[Navigation Title](https://developer.apple.com/documentation/swiftui/configure-your-apps-navigation-titles)

## Tab Views

To create a user interface with tabs, place views in a TabView and apply the `tabItem(_:)` modifier to the contents of each tab. On iOS, you can also use one of the badge modifiers, like `badge(_:)`, to assign a badge to each of the tabs.

[Tab views](https://developer.apple.com/documentation/swiftui/tabview)

```swift
TabView {
    Tab1View()
        .badge(2)
        .tabItem {
            Image(systemName: "1.circle")
            Text("Tab 1")
        }
            
    Tab2View()
        .tabItem {
            Image(systemName: "2.circle")
            Text("Tab 2")
        }
            
    Tab3View()
        .tabItem {
            Image(systemName: "3.circle")
            Text("Tab 3")
        }
    }.tabViewStyle(.page(indexDisplayMode: .always))
    .edgesIgnoringSafeArea(.all)
    .indexViewStyle(.page(backgroundDisplayMode: .always))
}
```

## See also

[Navigation - Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/navigation-bars)
[Tab bars - Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/components/navigation-and-search/tab-bars)