# 🚀 REST APIs

This week we aill work with REST APIs in Swift, exploring both traditional callback-based methods and the modern `async/await` pattern. In addition to understanding how to fetch data from a web service, you'll also learn how to display this data in a SwiftUI-based user interface.

We will use a weather API as a practical example throughout this guide, showcasing how to retrieve weather information for a specific city and present it in a simple SwiftUI app.

### What is a REST API?

A REST (Representational State Transfer) API is a set of rules that developers follow when creating and interacting with web services. These rules determine how a client (like an iOS app) can access and manipulate data on a server. REST APIs rely on standard HTTP methods, making them easy to use and widely supported.

### Why Use REST APIs in Your App?

REST APIs are essential in modern app development because they allow your app to:

- **Access Data**: Retrieve information from remote servers, such as weather data, news articles, or user profiles.
- **Send Data**: Submit data to a server, like user input, new posts, or file uploads.
- **Interact with External Services**: Integrate third-party services into your app, such as payment gateways, social media, or location-based services.

### HTTP Methods in REST APIs

Understanding the basic HTTP methods is crucial when working with REST APIs:

- **GET**: This method is used to retrieve data from a server. For example, when you want to fetch weather data for a city, you'd use a GET request.
- **POST**: Used to send data to a server, typically when creating new resources. For instance, submitting a user registration form would involve a POST request.
- **PUT**: This method updates an existing resource on the server. If you need to change user profile information, a PUT request would be appropriate.
- **DELETE**: As the name suggests, this method deletes a resource on the server. An example would be removing a user account.

### Components of a REST API Request

When making a request to a REST API, several key components come into play:

- **Base URL**: The root address of the API you're interacting with. For example, OpenWeatherMap's base URL is `https://api.openweathermap.org`.
- **Endpoint**: The specific path that leads to the desired resource. For instance, `/data/2.5/weather` is an endpoint that fetches current weather data.
- **Query Parameters**: These are key-value pairs added to the endpoint to modify the request, such as specifying a city or API key (e.g., `?q=London&appid=your_api_key`).

### Setting Up Your SwiftUI Project

Before diving into the code, ensure your SwiftUI project is set up correctly:

1. **Create a New SwiftUI Project**: Open Xcode, select "Create a new Xcode project," choose "App," and make sure "SwiftUI" is selected as the interface.
2. **Add Necessary Permissions**: If you're accessing the internet, ensure you have the appropriate permissions by adding the following to your `Info.plist`:

    ```xml
    <key>NSAppTransportSecurity</key>
    <dict>
        <key>NSAllowsArbitraryLoads</key>
        <true/>
    </dict>
    ```

### Accessing a Weather API Using Callbacks

In the first approach, we will use a traditional method involving callbacks to fetch weather data. This method is slightly more complex to manage due to the nested nature of the callback but is widely supported across different iOS versions.

#### Step 1: Create a Data Model

Start by creating a Swift model that corresponds to the JSON data returned by the weather API:

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

- **`Codable` Protocol**: The `Codable` protocol is essential here as it allows your Swift struct to be easily encoded to and decoded from JSON. This is especially useful when dealing with REST APIs where JSON is the standard data format.

#### Step 2: Implement the Network Call

Now, let's create a network service that fetches weather data using a callback:

```swift
import Foundation

class WeatherService {
    let apiKey = "your_api_key"
    let baseURL = "https://api.openweathermap.org/data/2.5/weather"
    
    func fetchWeather(for city: String, completion: @escaping (Result<WeatherData, Error>) -> Void) {
        let urlString = "\(baseURL)?q=\(city)&appid=\(apiKey)&units=metric"
        guard let url = URL(string: urlString) else {
            completion(.failure(NSError(domain: "", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid URL"])))
            return
        }
        
        let task = URLSession.shared.dataTask(with: url) { data, response, error in
            if let error = error {
                completion(.failure(error))
                return
            }
            
            guard let data = data else {
                completion(.failure(NSError(domain: "", code: 0, userInfo: [NSLocalizedDescriptionKey: "No data received"])))
                return
            }
            
            do {
                let weatherData = try JSONDecoder().decode(WeatherData.self, from: data)
                completion(.success(weatherData))
            } catch let decodingError {
                completion(.failure(decodingError))
            }
        }
        task.resume()
    }
}
```

- **`URLSession`**: This is a powerful API that allows you to perform network tasks, such as fetching data from the internet. Here, we use it to make a GET request to the weather API.
- **Error Handling**: We handle various potential errors, such as invalid URLs, lack of data, and decoding errors. This is crucial for creating a robust application that can deal with unexpected issues.

#### Step 3: Display the Data in SwiftUI

Next, we will create a simple SwiftUI interface to display the fetched weather data.

##### Create a ViewModel

We’ll use the MVVM (Model-View-ViewModel) pattern to separate the network logic from the SwiftUI view.

```swift
import SwiftUI
import Combine

class WeatherViewModel: ObservableObject {
    @Published var weatherData: WeatherData?
    @Published var city: String = ""
    @Published var errorMessage: String = ""
    
    private var weatherService = WeatherService()
    
    func fetchWeather() {
        weatherService.fetchWeather(for: city) { [weak self] result in
            DispatchQueue.main.async {
                switch result {
                case .success(let data):
                    self?.weatherData = data
                case .failure(let error):
                    self?.errorMessage = error.localizedDescription
                }
            }
        }
    }
}
```

- **`@Published` Properties**: These properties are observed by the SwiftUI view, allowing it to update automatically when the data changes.
- **Dispatching to the Main Thread**: Since `URLSession` runs on a background thread, we use `DispatchQueue.main.async` to update the UI on the main thread.

##### Create the SwiftUI View

Finally, let's create a SwiftUI view to display the weather data:

```swift
import SwiftUI

struct ContentView: View {
    @StateObject private var viewModel = WeatherViewModel()
    
    var body: some View {
        VStack {
            TextField("Enter city name", text: $viewModel.city)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
            
            Button(action: {
                viewModel.fetchWeather()
            }) {
                Text("Get Weather")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            
            if let weatherData = viewModel.weatherData {
                Text("City: \(weatherData.name)")
                Text("Temperature: \(weatherData.main.temp)°C")
            } else if !viewModel.errorMessage.isEmpty {
                Text(viewModel.errorMessage)
                    .foregroundColor(.red)
            }
        }
        .padding()
    }
}
```

- **TextField**: This allows the user to input the city name.
- **Button**: When clicked, this button triggers the `fetchWeather` method in the `WeatherViewModel`.
- **Conditional Views**: Depending on whether the weather data or an error message is available, the appropriate view is displayed.

### Accessing a Weather API Using Async/Await

While callbacks are effective, Swift's `async/await` pattern simplifies the process, making asynchronous code easier to read and maintain. Let's rewrite the previous example using this modern approach.

#### Step 1: Modify the WeatherService for Async/Await

Here's how the `WeatherService` would look using `async/await`:

```swift
import Foundation

class WeatherServiceAsync {
    let apiKey = "your_api_key"
    let baseURL = "https://api.openweathermap.org/data/2.5/weather"
    
    func fetchWeather(for city: String) async throws -> WeatherData {
        let urlString = "\(baseURL)?q=\(city)&appid=\(apiKey)&units=metric"
        guard let url = URL(string: urlString) else {
            throw URLError(.badURL)
        }
        
        let (data, _) = try await URLSession.shared.data(from: url)
        let weatherData = try JSONDecoder().decode(WeatherData.self, from: data)
        return weatherData
    }
}
```

- **Simplified Error Handling**: With `async

/await`, error handling becomes more straightforward using `try` and `catch`.

- **Cleaner Syntax**: The code is more readable, without the nesting that occurs with callbacks.

#### Step 2: Update the ViewModel

Now, let's update the `WeatherViewModel` to use the new async/await service:

```swift
import SwiftUI

class WeatherViewModelAsync: ObservableObject {
    @Published var weatherData: WeatherData?
    @Published var city: String = ""
    @Published var errorMessage: String = ""
    
    private var weatherService = WeatherServiceAsync()
    
    func fetchWeather() {
        Task {
            do {
                let data = try await weatherService.fetchWeather(for: city)
                DispatchQueue.main.async {
                    self.weatherData = data
                }
            } catch {
                DispatchQueue.main.async {
                    self.errorMessage = error.localizedDescription
                }
            }
        }
    }
}
```

- **`Task`**: This is used to call async functions from a non-async context, such as SwiftUI views or other non-async code.

#### Step 3: Use the Updated ViewModel in SwiftUI

Finally, update the SwiftUI view to use the new `WeatherViewModelAsync`:

```swift
import SwiftUI

struct ContentViewAsync: View {
    @StateObject private var viewModel = WeatherViewModelAsync()
    
    var body: some View {
        VStack {
            TextField("Enter city name", text: $viewModel.city)
                .padding()
                .textFieldStyle(RoundedBorderTextFieldStyle())
            
            Button(action: {
                viewModel.fetchWeather()
            }) {
                Text("Get Weather")
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            
            if let weatherData = viewModel.weatherData {
                Text("City: \(weatherData.name)")
                Text("Temperature: \(weatherData.main.temp)°C")
            } else if !viewModel.errorMessage.isEmpty {
                Text(viewModel.errorMessage)
                    .foregroundColor(.red)
            }
        }
        .padding()
    }
}
```