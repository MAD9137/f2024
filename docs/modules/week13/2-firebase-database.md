# 🚀 Firebase Firestore

Firebase Firestore is a flexible, scalable database for mobile, web, and server development. It is a NoSQL document database that allows you to store and sync data across client apps through real-time listeners and offline support.

## 🛠️ Setting Up

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click "Add project" and follow the instructions to create a new project.
   - Once the project is created, click "Add app" and choose the iOS icon to add an iOS app to your Firebase project.

2. **Register Your App:**
   - Enter your app’s iOS bundle ID and optionally provide an App Store ID.
   - Click "Register app."

3. **Download `GoogleService-Info.plist`:**
   - Download the `GoogleService-Info.plist` file and drag it into your Xcode project. Ensure that it is added to the app target.

4. **Add Firebase SDK Using Swift Package Manager:**
   - Open your Xcode project.
   - Go to `File > Add Packages`.
   - Enter the Firebase SDK URL: `https://github.com/firebase/firebase-ios-sdk`
   - Select the packages you need, such as `FirebaseFirestore`.

## 🛠️ Integrating

1. **Initialize Firebase in Your App:**

   Open `AppDelegate.swift` or `YourApp.swift` (if using SwiftUI) and configure Firebase.

   ```swift
   import SwiftUI
   import Firebase

   @main
   struct YourApp: App {
       init() {
           FirebaseApp.configure()
       }

       var body: some Scene {
           WindowGroup {
               ContentView()
           }
       }
   }
   ```

2. **Create a Firestore Manager:**

   This class will handle Firestore operations.

   ```swift
   import Foundation
   import FirebaseFirestore

   class FirestoreManager: ObservableObject {
       private var db = Firestore.firestore()

       @Published var users: [User] = []

       func addUser(name: String, age: Int) {
           let user = User(name: name, age: age)
           do {
               _ = try db.collection("users").addDocument(from: user)
           } catch {
               print("Error adding user: \(error.localizedDescription)")
           }
       }

       func fetchUsers() {
           db.collection("users").addSnapshotListener { [weak self] snapshot, error in
               if let error = error {
                   print("Error fetching users: \(error.localizedDescription)")
                   return
               }
               self?.users = snapshot?.documents.compactMap {
                   try? $0.data(as: User.self)
               } ?? []
           }
       }
   }

   struct User: Codable, Identifiable {
       @DocumentID var id: String?
       var name: String
       var age: Int
   }
   ```

3. **Create a SwiftUI View to Display Data:**

   ```swift
   import SwiftUI

   struct ContentView: View {
       @StateObject private var firestoreManager = FirestoreManager()

       @State private var name: String = ""
       @State private var age: String = ""

       var body: some View {
           VStack {
               List(firestoreManager.users) { user in
                   Text("\(user.name), \(user.age) years old")
               }

               HStack {
                   TextField("Name", text: $name)
                   TextField("Age", text: $age)
                       .keyboardType(.numberPad)
               }
               .padding()

               Button("Add User") {
                   if let age = Int(age) {
                       firestoreManager.addUser(name: name, age: age)
                       name = ""
                       age = ""
                   }
               }
               .padding()
           }
           .onAppear {
               firestoreManager.fetchUsers()
           }
       }
   }
   ```

### Examples

1. **Adding Data to Firestore:**

   To add a document to a collection:

   ```swift
   func addUser(name: String, age: Int) {
       let user = User(name: name, age: age)
       do {
           _ = try db.collection("users").addDocument(from: user)
       } catch {
           print("Error adding user: \(error.localizedDescription)")
       }
   }
   ```

2. **Reading Data from Firestore:**

   To fetch data with real-time updates:

   ```swift
   func fetchUsers() {
       db.collection("users").addSnapshotListener { [weak self] snapshot, error in
           if let error = error {
               print("Error fetching users: \(error.localizedDescription)")
               return
           }
           self?.users = snapshot?.documents.compactMap {
               try? $0.data(as: User.self)
           } ?? []
       }
   }
   ```

3. **Updating Data in Firestore:**

   To update an existing document:

   ```swift
   func updateUser(userId: String, newName: String) {
       db.collection("users").document(userId).updateData([
           "name": newName
       ]) { error in
           if let error = error {
               print("Error updating user: \(error.localizedDescription)")
           } else {
               print("User successfully updated")
           }
       }
   }
   ```

4. **Deleting Data from Firestore:**

   To delete a document:

   ```swift
   func deleteUser(userId: String) {
       db.collection("users").document(userId).delete() { error in
           if let error = error {
               print("Error deleting user: \(error.localizedDescription)")
           } else {
               print("User successfully deleted")
           }
       }
   }
   ```
