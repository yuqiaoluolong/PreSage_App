import { useState, Component, PropTypes } from 'react';
import { Text, Image, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoundedButton from './elements/RoundedButton'

export default function EventLogPage({ navigation }) {
    return (
        <View style={{backgroundColor:'#fff'}}>
            <View style={{height:10}}/>
            <View style={{      // header
                    flexDirection: "row",
                    height: 81,
                    padding: 20}}>
                <View style={{      // background
                        backgroundColor: "#fff",
                        flex: 0.3,
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        borderRightWidth: 1,
                        borderRightColor: 'gray' }}>
                    <View style={{marginLeft: 10}}>     // presage logo
                        <Image style={styles.header_logo} source={require('./images/presage_logo.png')}/>
                    </View>
                </View>
                <View style={{
                        backgroundColor: "#fff",
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray'
                        }}>
                    <Text>{"\n\t\t\t"}event logs</Text>
                </View>

            </View>     // header ends
                <View style={{ height: 520 }}>      // blank to adjust height, add content later
                    <ScrollView>
                    </ScrollView>
                </View>
            //bottom bar
            <View style={{      // bottom bar images
                    flexDirection: "row",
                    height: 30,
                    width: 400,
                    padding: 10}}>
                <View style={{backgroundColor: "#fff", flex: 0.45 }} />
                <View style={{backgroundColor: "#fff", flex: 1 }}>
                    <View style={{marginLeft: 18}}>
                        <Image style={styles.bottom_logo} source={require('./images/dashboard.png')}/>
                    </View>
                </View>
                <View style={{backgroundColor: "#fff", flex: 1 }}>
                    <View style={{marginLeft: 18}}>
                        <Image style={styles.bottom_logo} source={require('./images/eventlogs.png')}/>
                    </View>
                </View>
            </View>     // bottom bar images end
            <View style={{      // bottom bar text and buttons
                    flexDirection: "row",
                    height: 70,
                    width: 400,
                    padding: 10}}>
                <View style={{flex: 0.2 }} />
                <View style={{ flex: 1 }}>
                    <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
                </View>
                <View style={{flex: 0.1 }} />
                <View style={{ flex: 1 }}>
                    <Button title="Event Logs" onPress={() => navigation.navigate('EventLog')} />
                </View>
                <View style={{flex: 0.3 }} />
            </View>     // bottom bar text and buttons end
        </View>
    );
}

const styles = StyleSheet.create({
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