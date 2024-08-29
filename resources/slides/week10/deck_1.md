---
marp: true
theme: default
class:
  - invert

---

# REST APIs in Swift

- Traditional callback-based methods
- Modern async/await pattern
- Fetch and display data using SwiftUI

Notes: 
Today, we'll explore how to work with REST APIs in Swift using both callback-based methods and the modern async/await pattern. We'll use a weather API as our practical example.

---

# What is a REST API?

- Representational State Transfer (REST)
- Set of rules for web services
- Uses standard HTTP methods

Notes: 
A REST API defines rules for interacting with web services, enabling us to access and manipulate data on a server using standard HTTP methods.

---

# Why Use REST APIs?

- **Access Data**: Fetch information from servers
- **Send Data**: Submit user input or uploads
- **Interact with Services**: Integrate third-party services

Notes: 
REST APIs are essential for modern app development because they allow us to fetch, send, and interact with various data and services over the internet.

---

# HTTP Methods in REST APIs

- **GET**: Retrieve data
- **POST**: Submit data
- **PUT**: Update existing data
- **DELETE**: Remove data

Notes: 
Understanding these HTTP methods is crucial when working with REST APIs. Each method serves a different purpose in data manipulation.

---

# Components of a REST API Request

- **Base URL**: Root address of the API
- **Endpoint**: Specific path to the resource
- **Query Parameters**: Modify the request with key-value pairs

Notes: 
To interact with a REST API, we need a base URL, endpoint, and optionally, query parameters to refine our requests.

---

# Setting Up Your SwiftUI Project

1. Create a new SwiftUI project in Xcode.
2. Add internet permissions in `Info.plist`:

```xml
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoads</key>
  <true/>
</dict>
```

Notes: 
Start by setting up your SwiftUI project and ensuring that it has the necessary permissions to access the internet.

---

# Fetching Data Using Callbacks

### Step 1: Create a Data Model

```swift
import Foundation

struct WeatherData: Codable {
    let main: Main
    let name: String
}

struct Main: Codable {
    let temp: Double
}
```

Notes: 
Create a data model conforming to the `Codable` protocol, which simplifies JSON encoding and decoding.

---

# Step 2: Implement Network Call

```swift
import Foundation

class WeatherService {
    let apiKey = "your_api_key"
    let baseURL = "https://api.openweathermap.org/data/2.5/weather"

    func fetchWeather(for city: String, completion: @escaping (Result<WeatherData, Error>) -> Void) {
        // Network request implementation
    }
}
```

Notes: 
Define a network service using `URLSession` to fetch weather data asynchronously. Handle possible errors during the process.

---

# Step 3: Display Data in SwiftUI

### ViewModel and View

```swift
import SwiftUI

class WeatherViewModel: ObservableObject {
    // Properties and methods for data fetching
}

struct ContentView: View {
    @StateObject private var viewModel = WeatherViewModel()
    // UI components to display weather data
}
```

Notes: 
Use the MVVM pattern to separate network logic from the SwiftUI view, making the code modular and easy to maintain.

---

# Accessing a Weather API Using Async/Await

### Modern Approach

```swift
import Foundation

class WeatherServiceAsync {
    // Async method for fetching weather data
}
```

Notes: 
The async/await pattern makes asynchronous code more readable and maintainable, reducing the complexity of handling callbacks.

---

# Step 2: Update the ViewModel

### Using Async/Await

```swift
import SwiftUI

class WeatherViewModelAsync: ObservableObject {
    // Updated ViewModel using async/await
}
```

Notes: 
Update your ViewModel to use the async/await pattern, which simplifies error handling and improves code readability.

---

# Step 3: SwiftUI View with Async/Await

### Simplified UI Code

```swift
import SwiftUI

struct ContentViewAsync: View {
    @StateObject private var viewModel = WeatherViewModelAsync()
    // UI components for async/await
}
```

Notes: 
The SwiftUI view remains mostly unchanged, but benefits from the cleaner and more readable async/await pattern in the ViewModel.

---

# Questions?
