# PreSage_App
This is an application for PreSage users to login and view live-feed. Below is the steps required to install and run it on simulators.

## what is required to have before installation:
    Android Studio
    Xcode(for MacOS)
After downloading above two apps(if don't have), follow the instructions on the React Native website: https://reactnative.dev/docs/environment-setup up to Creating a new application(choose React Native CLI Quickstart and corresponding operating system instead of Expo CLI Quickstart).
    
## 1. create a new React Project 
Open Android Studio and the terminal in it. Run the following code in the terminal(make sure you are in the desired location for the app before runing the code):
        
        npx react-native init PreSageApp
        
After that, reopen Android Studio and click at 'open' button at the top right corner. Find the location of 'PreSageApp' project file and click at open.
You can check whether all steps are done correctly by running the following code in the terminal(make sure current location is PreSageApp/...). If everything is installed correctly, an ios simulator window displaying information about React Native would appear after several minutes.

        npx react-native run-ios

## 2. copy the code into the project
Expand the file list at right side of the window: presage_app -> src -> App.js. Copy and paste the content in App.js on GitHub into it.
In the same folder, copy and paste all contents in the pages file folder on GitHub into src in Android Studio.

Then install the following dependencies:

        npm install @react-navigation/native
        npm install react-native-screens react-native-safe-area-context
        npm install @react-navigation/native-stack
        
If you are on a Mac and developing for iOS, run the following code:

        npx pod-install ios
After that, refer to the site: https://stackoverflow.com/questions/36289125/react-native-fetch-from-https-server-with-self-signed-certificate 
to fix the self-signed certificate problem. Refer to the first answer to fix that for iOS simulator and follow the second one to fix that for android simulator.Since the 2nd answer is unclear, below is detailed explanation.

Create a new file named CustomClientFactory.java in the folder where MainApplication.java is located(ancroid/app/src/main/java/com/presageapp/MainApplication.java). Copy and paste the first part of code in the 2nd answer into it. Remember to add the following line of code at the top:

        package com.presageapp;
Delete the following line of code in CustomClientFactory.java(at the bottom, the last few lines):

        Log.e(TAG, e.getMessage());
        

In MainApplication.java:

add the following line of code at the top:

        import com.facebook.react.modules.network.OkHttpClientProvider;
add the following line of code in the end of the function ' @Override public void onCreate()':

        OkHttpClientProvider.setOkHttpClientFactory(new CustomClientFactory());

## 3. run the code in simulators        

        npx react-native run-ios
        npx react-native run-android
