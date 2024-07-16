# Traffic Tracer Mobile Application

This is a React Native application built using Expo. It includes authentication with Firebase, basic navigation, and several screens such as Driver Login, Driver Sign Up, Driver Profile, and other essential functionalities.

## Fearures

- User Authentication (Sign Up, Sign In, Sign Out)
- User Profile Management
- Driver Fines Details and Status
- User Profile Status
- Reminders

## Installation


 1.  **Prerequisites:**

    
   - Node.js
- npm 
- Expo CLI (npm install -g expo-cli)
- Firebase project (with authentication and Firestore enabled)

    


2. **Clone the repository:**

    ```bash
    git clone https://github.com/DileshMadushan/Traffic-Tracer-Mobile-Application.git
    cd Traffic-Tracer-Mobile-Application
    ```

3. **Install dependencies:**

    ```bash
    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    npm install @react-navigation/stack
    npm install firebase
    expo install @react-native-async-storage/async-storage
    ```

4. **Set up Firebase:**

    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add a new web app to your Firebase project.
    - Copy the Firebase configuration and replace it in `FirebaseConfig.ts`.

## Running the Application

To start the application, run:

```bash
npx expo start
```

## Screen

- Driver Login: The screen for driver login.
- Driver Sign Up: The screen for driver registration.
- Driver Profile: The screen displaying driver profile information.
- Fine Details: The screen for viewing fine details.
- Fine Status: The screen for checking the status of fines.
- Reminder: The screen for setting reminders.
- User Profile Status: The screen for viewing user profile status.

## Aim
This project aims to provide a seamless experience for drivers to manage their profiles, fines, and other related tasks using the Traffic-Tracer mobile application.