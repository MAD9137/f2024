# Flow Control

Swift has all of the expected **flow control** statements ( **if**, **while**, **for** and **switch** ) that one expects. However, each has its own unique Swift way of writing them. There are creative differences in the syntax for each control statement, and instead of do-while and for-each loops Swift has an equivalent **repeat-while** and **for-in** loop statement.

## Conditional Statements

### If & If-Else Statements

If and If-Else statements in Swift look quite similar to the way they are written in other languages.  The following shows a simple if statement and a more complex one.

<!-- INSERT IF and IF-ELSE SNIPPET -->
<<< @/docs/.vuepress/includes/snippets/if.swift

### Switch Statements

Switch statements are similar to other languages, but there are some unique differences that you should note.  Swift switch statements are exhaustive, meaning it **must** handle all possible values for a given variable.  This really means you must include a default clause at the end.  The next difference is that each case clause is treated as its own block of code, and must contain some executable code (comments are not enough).  This means you do not need to add a break statement at the end of each case statement.  This also means that there is no automatic "fall-through" from one case to the next.  If you wish to have multiple case statements all fall-through to execute one block of code you must use one case statement that lists all the possible values that should run the same block of code.

<!-- INSERT IF and SWITCH SNIPPET -->
<<< @/docs/.vuepress/includes/snippets/switch.swift


## Logic Loops

### While & Repeat-While Loops

The while loop will look similar to other languages you have seen before, but instead of a do-while look, Swift has a repeat-while loop.  The following code demonstrates this.

<!-- INSERT WHILE LOOP SNIPPET -->
<<< @/docs/.vuepress/includes/snippets/while.swift

### For & For-In Loops

Swift has a slightly different way to write loops.  For loops look similar to other languages, but instead of a for-each, Swift uses a For-In notation.

<!-- INSERT FOR LOOP SNIPPET -->
<<< @/docs/.vuepress/includes/snippets/for.swift

The following videos will explain how to use flow control statements in Swift:

<!-- [Swift 5 Essential Training - The if Statement <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/the-if-statement?u=2199673) -->

<!-- [Swift 5 Essential Training - Use for-in loops <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/using-for-in-loops?u=2199673) -->

<!-- [Swift 5 Essential Training - While Loops <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/while-loops?u=2199673) -->

<!-- [Swift 5 Essential Training - The Switch Statement <Badge text="Lynda"/>](https://www.linkedin.com/learning/swift-5-essential-training/the-switch-statement?u=2199673) -->

[Swift Fundamentals - Controlling the Flow of Your Code <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=33af5c7f-ea65-48af-8978-3d2cd46b3388)

[Swift Developer Docs - Control Flow](https://docs.swift.org/swift-book/LanguageGuide/ControlFlow.html)

[Back to Week 3](./index.md#during-class)
