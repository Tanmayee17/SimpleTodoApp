# SimpleTodoApp

A React Native project to create a simple To-Do list application that allows users to add, edit, delete, and mark tasks as complete, with persistent storage using AsyncStorage. The app is enhanced with animations for a smooth user experience.

## Features

- **Add Tasks**: Users can add tasks to the to-do list.
- **Mark Tasks as Complete**: Toggle tasks as complete or incomplete with a single tap.
- **Edit Tasks**: Modify existing tasks for updates or corrections.
- **Persistent Storage**: Tasks are stored locally using AsyncStorage and reloaded upon app restart.
- **Animations**: Tasks fade in when added and shrink before being deleted, improving the user experience.
- **Cross-Platform**: The app works seamlessly on both Android and iOS devices.



## Installation and Setup

### Prerequisites

- Node.js and npm
- React Native CLI
- Expo CLI
- Android Studio or Xcode (for emulators)

### Steps to Set Up the Project

1. Clone the repository:
   git clone https://github.com/Tanmayee17/SimpleTodoApp.git
   cd SimpleTodoApp
   nstall dependencies:

2. Install dependencies:
npm install

3. Start the Expo development server:
expo start

4. To run the app on an emulator:
For Android: Use Android Studio to set up an emulator and run the app using:

npx react-native run-android

For iOS: Use Xcode to set up a simulator and run the app using:

npx react-native run-ios

5. To run on a physical device:

Install the Expo Go app from the App Store or Google Play.
Scan the QR code displayed in the terminal after running expo start.

