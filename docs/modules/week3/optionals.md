# Optionals and Guard Statements

## Binding of Optionals

Optional variables and constants are created by ending their definitions with a ? (question mark) symbol. This allows you to leave the variable or constant set to nil and set its value at a later time.

Previously, in the lesson entitled More about Swift Types, was the information on how to create optional values.

In the example below you can see how to validate if an optional is set to nil, or set to a valid value.

<!-- INSERT OPTIONALS SNIPPET -->
<<< @/docs/.vuepress/includes/snippets/optionals/optionals.swift

[Introducing optionals](https://www.linkedin.com/learning/swift-5-essential-training/introducing-optionals?u=2199673)

[Swift Fundamentals - Optionals, an Introduction <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=987e8f42-09a6-4ad0-b313-93f26ab082f2)

[Swift Fundamentals - Unwrapping Optionals <Badge text="Pluralsight"/>](https://app.pluralsight.com/course-player?clipId=5ca834db-075b-4290-9f87-1610b838df6f)

[Swift 5 Essential Training - Unwrapping Optionals <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/unwrapping-optionals?u=2199673)

[Programming for Non-Programmers: Swift Optionals  <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/programming-for-non-programmers-ios-12-and-swift-5/optionals?u=2199673)

[Swift 5 Essential Training - Chaining Optionals  <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/chaining-optionals?u=2199673)

## Guard Statements

The guard statement is used for the opposite reason of an if statement.  With an if statement, the idea is to execute a statement's block of code if the condition is true.

The guard statement lets a block of code run if a condition is false.  A guard statement must contain an else clause that gets triggered if the condition fails.  A guard must also end with a control-transfer statement, which means that guard statements can only be used inside of other flow-control statements.

If the guard statement succeeds, the rest of the code within the flow-control that follows after it will be allowed to run.  If the guard statement fails, the control-transfer statement in the else clause is used to end execution within the flow-control statement immediately.

The code below demonstrates how to use a guard statement to prevent code from running or not.

<!-- INSERT GUARDS SNIPPET -->
<<< @/docs/.vuepress/includes/snippets/optionals/guards.swift

[Swift 5 Essential Training - The Guard Statement <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/swift-5-essential-training/the-guard-statement?u=2199673)

[Programming for Non-Programmers: Guard Statements <Badge text='Linkedin Learning'/>](https://www.linkedin.com/learning/programming-for-non-programmers-ios-12-and-swift-5/guard-statements?u=2199673)

### Get-Only Variables

Another helpful use for a guard statement is to use the to make **get-only** variables.  This is where you create a variable to safely access another optional variable safely without  the need to worry if it has been set or not.  By creating the additional "safe" get-only variable you can predetermine what value gets returned when the original value is still nil.

<!-- INSERT GET_ONLY SNIPPET -->
<!-- <<< @/docs/.vuepress/includes/snippets/optionals/get-only.swift -->

[Back to Week 3](./index.md#during-class)