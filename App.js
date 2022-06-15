import { StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/Login'                               // The following 4 pages are written in the pages file
import DashboardPage from './pages/Dashboard'
import EventLogPage from './pages/Event'
import VideoPlayPage from './pages/Play'                            //

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">                    // This is for building up the stack of ages
        <Stack.Screen name="Login" component={LoginPage} />         // 1st page in the stack, would be shown when the app is opened
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="EventLog" component={EventLogPage} />
        <Stack.Screen name="Play" component={VideoPlayPage} />
      </Stack.Navigator>                                            // the end of stack
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({                                  // the style defined for later use in picture display
    logo: {
        width: 365,
        height: 100,
    },
    baseText: {
        fontSize: 20,
        fontFamily: "Cochin",
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
    },
    container:{
        margin:100,
        backgroundColor: '#1E90FF',
        borderColor: '#1E90FF',
        borderRadius:10,
        borderWidth:2,
    },
    textStyle:{
        color:'white',
        fontSize:20,
    },
    header_logo: {
        width: 40,
        height: 40,
    },
    demo_box: {
        margin: 30,
        width: 100,
        height: 50,
    },
    demo: {
        margin: 30,
        width: 300,
        height: 200,
    },
    bottom_logo: {
        margin: 0,
        width: 30,
        height: 30,
    },
    box_uphalf: {
        width: 300,
        height: 150,
    },
    box_button: {
        width: 30,
        height: 30,
    },
});