# 🚀 Firebase Auth

## 🛠️ Integrate Firebase

Swift Package Manager (SPM) is a tool for managing Swift code distribution and dependency management. Firebase can be integrated into your Swift project using SPM, allowing you to leverage Firebase's backend services like authentication, real-time databases, and more.

### 1. Create a Firebase Project

1. **Go to the Firebase Console**:
   - Navigate to the [Firebase Console](https://console.firebase.google.com/).

2. **Add a New Project**:
   - Click "Add Project."
   - Follow the prompts to create a new Firebase project. Provide a project name and agree to the terms and conditions.
   - Click "Create Project" and wait for Firebase to initialize your project.

### 2. Register Your iOS App with Firebase

1. **Add an iOS App to Your Firebase Project**:
   - In the Firebase Console, locate your project and click the iOS icon to add an iOS app.

2. **Configure Your App**:
   - Enter your app’s bundle ID (found in Xcode under your project settings).
   - Optionally, enter an App Store ID if your app is already published.
   - Click "Register App."

3. **Download `GoogleService-Info.plist`**:
   - Click "Download GoogleService-Info.plist" to get the configuration file for your Firebase project.
   - Save this file to a location on your computer.

4. **Add `GoogleService-Info.plist` to Your Xcode Project**:
   - Open your Xcode project.
   - Drag the `GoogleService-Info.plist` file into the project navigator. Ensure the file is added to the appropriate targets and select "Copy items if needed."

### 3. Add Firebase SDK Using Swift Package Manager

1. **Open Your Project in Xcode**:
   - Open Xcode and your project.

2. **Add Firebase as a Package Dependency**:
   - In Xcode, go to `File` > `Add Packages...`.
   - Enter the Firebase GitHub repository URL: `https://github.com/firebase/firebase-ios-sdk`.
   - Click "Add Package."

3. **Select Firebase Libraries**:
   - In the package options, you’ll see a list of Firebase libraries. Select the ones you need. For example:
     - FirebaseAuth
     - FirebaseFirestore (if you plan to use Firestore)

   - Click "Add Package" to include the selected libraries in your project.

### 4. Initialize Firebase in Your App

1. **Import Firebase**:
   - Open `AppDelegate.swift` and import Firebase at the top:

     ```swift
     import Firebase
     ```

2. **Configure Firebase**:
   - In the `application(_:didFinishLaunchingWithOptions:)` method, initialize Firebase:

     ```swift
     func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
         FirebaseApp.configure()
         return true
     }
     ```

### 5. Verify Firebase Integration

1. **Check Firebase Console**:
   - Go to the Firebase Console and check the "Dashboard" of your project.
   - You should see data appearing in your Firebase Analytics or other services you’ve integrated.

2. **Run Your App**:
   - Build and run your app in Xcode.
   - Verify that Firebase is correctly set up by checking for logs or using Firebase features (e.g., authentication, Firestore) in your app.

## 🛠️ Firebase Authentication

Firebase Authentication provides backend services to help authenticate users in your app. It supports email and password accounts, as well as federated identity providers like Google, Facebook, and Twitter. This guide will walk you through integrating Firebase Authentication into a Swift-based iOS application.

### Prerequisites

Before diving into Firebase Authentication, ensure you have:
- A Firebase project set up in the [Firebase Console](https://console.firebase.google.com/).
- Firebase SDK integrated into your iOS project.
- Basic knowledge of Swift and Xcode.

### 1. Setting Up Firebase in Your iOS Project

#### 1.1 Adding Firebase to Your Project

1. **Create a Firebase Project**:
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click "Add Project" and follow the setup flow.

2. **Register Your App with Firebase**:
   - In your Firebase project, click on the iOS icon to add an iOS app.
   - Enter your app’s bundle ID and other details. Download the `GoogleService-Info.plist` file.

3. **Add Firebase SDK to Your Project**:
   - Open Xcode and your project.
   - Drag the `GoogleService-Info.plist` file into your Xcode project.
   - Open `Podfile` and add the Firebase pods you need:

     ```ruby
     pod 'Firebase/Auth'
     ```

   - Run `pod install` in your terminal to install the pods.

4. **Configure Firebase in Your App**:
   - Open `AppDelegate.swift` and import Firebase:

     ```swift
     import Firebase
     ```

   - Initialize Firebase in `application(_:didFinishLaunchingWithOptions:)`:

     ```swift
     func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
         FirebaseApp.configure()
         return true
     }
     ```

### 2. Setting Up Authentication Methods

#### 2.1 Email and Password Authentication

1. **Enable Email/Password Authentication**:
   - In the Firebase Console, navigate to Authentication > Sign-in method.
   - Enable Email/Password and save.

2. **Sign Up a New User**:
   - Create a sign-up function in your Swift code:

     ```swift
     import FirebaseAuth

     func signUp(email: String, password: String, completion: @escaping (Result<User, Error>) -> Void) {
         Auth.auth().createUser(withEmail: email, password: password) { (authResult, error) in
             if let error = error {
                 completion(.failure(error))
                 return
             }
             guard let user = authResult?.user else {
                 completion(.failure(NSError(domain: "AuthError", code: -1, userInfo: [NSLocalizedDescriptionKey: "User not found"])))
                 return
             }
             completion(.success(user))
         }
     }
     ```

3. **Sign In an Existing User**:
   - Create a sign-in function:

     ```swift
     func signIn(email: String, password: String, completion: @escaping (Result<User, Error>) -> Void) {
         Auth.auth().signIn(withEmail: email, password: password) { (authResult, error) in
             if let error = error {
                 completion(.failure(error))
                 return
             }
             guard let user = authResult?.user else {
                 completion(.failure(NSError(domain: "AuthError", code: -1, userInfo: [NSLocalizedDescriptionKey: "User not found"])))
                 return
             }
             completion(.success(user))
         }
     }
     ```

4. **Sign Out the User**:

   ```swift
   func signOut() {
       do {
           try Auth.auth().signOut()
       } catch let signOutError as NSError {
           print("Error signing out: %@", signOutError)
       }
   }
   ```

### 3. Handling Authentication States

You might want to manage the user’s authentication state throughout your app:

```swift
import FirebaseAuth

class AuthManager {
    static let shared = AuthManager()

    private init() {}

    func observeAuthState() {
        Auth.auth().addStateDidChangeListener { (auth, user) in
            if let user = user {
                print("User is signed in: \(user.email ?? "No email")")
            } else {
                print("No user is signed in.")
            }
        }
    }
}
```

### 4. Advanced Authentication

#### 4.1 Password Reset

To enable users to reset their passwords:

```swift
func resetPassword(email: String, completion: @escaping (Result<Void, Error>) -> Void) {
    Auth.auth().sendPasswordReset(withEmail: email) { error in
        if let error = error {
            completion(.failure(error))
            return
        }
        completion(.success(()))
    }
}
```

#### 4.2 Email Verification

After signing up, you may want to send a verification email:

```swift
func sendEmailVerification(user: User, completion: @escaping (Result<Void, Error>) -> Void) {
    user.sendEmailVerification { error in
        if let error = error {
            completion(.failure(error))
            return
        }
        completion(.success(()))
    }
}
```

#### 4.3 Handling User Profiles

To update user profile information:

```swift
func updateProfile(user: User, displayName: String?, photoURL: URL?, completion: @escaping (Result<Void, Error>) -> Void) {
    let changeRequest = user.createProfileChangeRequest()
    changeRequest.displayName = displayName
    changeRequest.photoURL = photoURL
    changeRequest.commitChanges { error in
        if let error = error {
            completion(.failure(error))
            return
        }
        completion(.success(()))
    }
}
```