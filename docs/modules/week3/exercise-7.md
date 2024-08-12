# 😵‍💫 Exercise 7

## The Traffic Light model

Create a model type for a traffic light that contains a method `nextLight` that returns the next traffic light color based on the current one.

For example:

```swift
let currentLight: TrafficLight = .red
let next = currentLight.nextLight()
print("The next traffic light color is: \(next)") 
// Output should be "The next traffic light color is: green"
````

::: details Solution

```swift
enum TrafficLight {
    case red
    case yellow
    case green
  
    func nextLight() -> TrafficLight {
        switch self {
        case .red:
            return .green
        case .yellow:
            return .red
        case .green:
            return .yellow
        }
    }
}

let currentLight: TrafficLight = .green
let next = currentLight.nextLight()
print("The next traffic light color is: \(next)")
// Output should be "The next traffic light color is: yellow"
```

:::
