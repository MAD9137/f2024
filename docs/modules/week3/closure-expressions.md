# 🧠 Closure Expressions

Global and nested functions, as introduced in Functions, are actually special cases of closures. Closures take one of three forms:

- Global functions are closures that have a name and don’t capture any values.
- Nested functions are closures that have a name and can capture values from their enclosing function.
- **Closure expressions** are unnamed closures written in a lightweight syntax that can capture values from their surrounding context.
A closure can capture constants and variables from the surrounding context in which it’s defined. The closure can then refer to and modify the values of those constants and variables from within its body, even if the original scope that defined the constants and variables no longer exists.

Let's watch [Making sense of closures](https://app.pluralsight.com/course-player?clipId=9ee3067f-5457-4adc-a207-8df346115701) to learn more.

# See Also

- [Closures — The Swift Programming Language (Swift 5.7)](https://docs.swift.org/swift-book/LanguageGuide/Closures.html#ID103)