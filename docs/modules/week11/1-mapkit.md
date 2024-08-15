# 🚀 MapKit

MapKit is a powerful framework provided by Apple that allows developers to integrate maps into their iOS applications. With MapKit, you can display maps, annotate locations, create custom overlays, and provide turn-by-turn navigation. When combined with SwiftUI, MapKit becomes even more intuitive, enabling developers to create visually appealing and interactive maps with minimal code.

## 🛠️ Setting Up

To start using MapKit in your SwiftUI project, follow these steps:

1. **Import MapKit Framework**: First, import the MapKit framework into your SwiftUI view.

    ```swift
    import SwiftUI
    import MapKit
    ```

2. **Add Required Permissions**: Ensure that you have the necessary permissions to access location data. Open the `Info.plist` file and add the following keys:
    - `NSLocationWhenInUseUsageDescription`: A string explaining why your app needs access to the user’s location.
    - `NSLocationAlwaysUsageDescription`: (Optional) If your app needs to access the user’s location at all times.

    Example:

    ```xml
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>We need your location to show nearby places on the map.</string>
    ```

3. **Basic Map View**: Now, let’s create a basic map view using `Map`.

    ```swift
    struct BasicMapView: View {
        @State private var region = MKCoordinateRegion(
            center: CLLocationCoordinate2D(latitude: 37.7749, longitude: -122.4194),
            span: MKCoordinateSpan(latitudeDelta: 0.05, longitudeDelta: 0.05)
        )

        var body: some View {
            Map(coordinateRegion: $region)
                .edgesIgnoringSafeArea(.all)
        }
    }
    ```

    This code displays a map centered on San Francisco. The `MKCoordinateRegion` defines the visible region of the map, which is bound to the `Map` view.

## 🛠️ Annotating Locations

Annotations are markers on the map that indicate specific points of interest. To add annotations:

1. **Define Annotation Data**: Create a struct that conforms to the `Identifiable` protocol.

    ```swift
    struct Location: Identifiable {
        let id = UUID()
        let name: String
        let coordinate: CLLocationCoordinate2D
    }
    ```

2. **Create Annotation Array**: Define an array of locations.

    ```swift
    let locations = [
        Location(name: "Golden Gate Bridge", coordinate: CLLocationCoordinate2D(latitude: 37.8199, longitude: -122.4783)),
        Location(name: "Alcatraz Island", coordinate: CLLocationCoordinate2D(latitude: 37.8267, longitude: -122.4230))
    ]
    ```

3. **Add Annotations to Map**: Use the `Map` view's `annotationItems` modifier.

    ```swift
    struct AnnotatedMapView: View {
        @State private var region = MKCoordinateRegion(
            center: CLLocationCoordinate2D(latitude: 37.7749, longitude: -122.4194),
            span: MKCoordinateSpan(latitudeDelta: 0.1, longitudeDelta: 0.1)
        )
        
        let locations = [
            Location(name: "Golden Gate Bridge", coordinate: CLLocationCoordinate2D(latitude: 37.8199, longitude: -122.4783)),
            Location(name: "Alcatraz Island", coordinate: CLLocationCoordinate2D(latitude: 37.8267, longitude: -122.4230))
        ]

        var body: some View {
            Map(coordinateRegion: $region, annotationItems: locations) { location in
                MapMarker(coordinate: location.coordinate, tint: .red)
            }
            .edgesIgnoringSafeArea(.all)
        }
    }
    ```

    In this example, `MapMarker` is used to create red markers for each location.

## 🛠️ Customizing Annotations

You can further customize annotations by using `MapAnnotation` to create custom views for each annotation.

```swift
struct CustomAnnotatedMapView: View {
    @State private var region = MKCoordinateRegion(
        center: CLLocationCoordinate2D(latitude: 37.7749, longitude: -122.4194),
        span: MKCoordinateSpan(latitudeDelta: 0.1, longitudeDelta: 0.1)
    )
    
    let locations = [
        Location(name: "Golden Gate Bridge", coordinate: CLLocationCoordinate2D(latitude: 37.8199, longitude: -122.4783)),
        Location(name: "Alcatraz Island", coordinate: CLLocationCoordinate2D(latitude: 37.8267, longitude: -122.4230))
    ]

    var body: some View {
        Map(coordinateRegion: $region, annotationItems: locations) { location in
            MapAnnotation(coordinate: location.coordinate) {
                VStack {
                    Image(systemName: "star.circle.fill")
                        .foregroundColor(.blue)
                        .font(.largeTitle)
                    Text(location.name)
                        .font(.caption)
                        .background(Color.white.opacity(0.7))
                }
            }
        }
        .edgesIgnoringSafeArea(.all)
    }
}
```

In this example, each annotation is represented by a custom view containing a star icon and the location's name.

## 🛠️ User Interactions

MapKit in SwiftUI also allows you to respond to user interactions, such as taps on annotations.

```swift
struct InteractiveMapView: View {
    @State private var region = MKCoordinateRegion(
        center: CLLocationCoordinate2D(latitude: 37.7749, longitude: -122.4194),
        span: MKCoordinateSpan(latitudeDelta: 0.1, longitudeDelta: 0.1)
    )
    
    let locations = [
        Location(name: "Golden Gate Bridge", coordinate: CLLocationCoordinate2D(latitude: 37.8199, longitude: -122.4783)),
        Location(name: "Alcatraz Island", coordinate: CLLocationCoordinate2D(latitude: 37.8267, longitude: -122.4230))
    ]
    
    @State private var selectedLocation: Location?

    var body: some View {
        Map(coordinateRegion: $region, annotationItems: locations) { location in
            MapAnnotation(coordinate: location.coordinate) {
                Button(action: {
                    selectedLocation = location
                }) {
                    Image(systemName: "star.circle.fill")
                        .foregroundColor(.blue)
                        .font(.largeTitle)
                }
            }
        }
        .edgesIgnoringSafeArea(.all)
        .alert(item: $selectedLocation) { location in
            Alert(title: Text(location.name), message: Text("You selected \(location.name)."), dismissButton: .default(Text("OK")))
        }
    }
}
```

Here, tapping on a location’s annotation will show an alert with the location’s name.

## 🛠️ Custom Map Overlays

MapKit also supports overlays, which are shapes like circles, polygons, and polylines that can be drawn over the map.

```swift
struct OverlayMapView: View {
    @State private var region = MKCoordinateRegion(
        center: CLLocationCoordinate2D(latitude: 37.7749, longitude: -122.4194),
        span: MKCoordinateSpan(latitudeDelta: 0.1, longitudeDelta: 0.1)
    )

    var body: some View {
        Map(coordinateRegion: $region, overlayItems: [MKCircle(center: CLLocationCoordinate2D(latitude: 37.8199, longitude: -122.4783), radius: 500)]) { overlay in
            MapOverlay(overlay: overlay)
        }
        .edgesIgnoringSafeArea(.all)
    }
}
```

This example demonstrates how to create a circular overlay with a radius of 500 meters centered on the Golden Gate Bridge.

### User Location

To display the user’s current location on the map:

1. **Enable Location Tracking**: Bind a boolean to the `Map` view to track the user’s location.

    ```swift
    struct UserLocationMapView: View {
        @State private var region = MKCoordinateRegion(
            center: CLLocationCoordinate2D(latitude: 37.7749, longitude: -122.4194),
            span: MKCoordinateSpan(latitudeDelta: 0.1, longitudeDelta: 0.1)
        )
        
        @State private var showsUserLocation = true

        var body: some View {
            Map(coordinateRegion: $region, showsUserLocation: showsUserLocation)
                .edgesIgnoringSafeArea(.all)
        }
    }
    ```

2. **Handling Location Updates**: You may need to handle location updates manually using `CLLocationManager`.

    ```swift
    import CoreLocation

    class LocationManager: NSObject, ObservableObject, CLLocationManagerDelegate {
        private let manager = CLLocationManager()

        @Published var userLocation: CLLocationCoordinate2D?

        override init() {
            super.init()
            manager.delegate = self
            manager.requestWhenInUseAuthorization()
            manager.startUpdatingLocation()
        }

        func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
            userLocation = locations.first?.coordinate
        }
    }

    struct UserLocationMapView: View {
        @StateObject private var locationManager = LocationManager()

        var body: some View {
            if let userLocation = locationManager.userLocation {
                Map(coordinateRegion: .constant(MKCoordinateRegion(
                    center: userLocation,
                    span: MKCoordinateSpan(latitudeDelta: 0.1, longitudeDelta: 0.1)
                )), showsUserLocation: true)


                .edgesIgnoringSafeArea(.all)
            } else {
                Text("Loading location...")
            }
        }
    }
    ```

This code creates a custom `LocationManager` to handle location updates and shows the user's location on the map.