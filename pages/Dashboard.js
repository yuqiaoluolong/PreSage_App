import { useState, Component, PropTypes } from 'react';
import { Text, Image, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoundedButton from './elements/RoundedButton'
import VideoButton from './elements/VideoButton'
import SoundButton from './elements/SoundButton'
import PlayButton from './elements/PlayButton'
import EtcButton from './elements/EtcButton'

export default function DashboardPage({ navigation }) {

    const [status, setStatus] = useState(true);

    const onPressLearnMore1 = (

    fetch('https://aictest.hopto.org/PreSAGE/cameras/3/on', {
          method: 'GET',
          headers: {
             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlci1hZG1pbiIsInNjb3BlcyI6IlJPTEVfU1VQRVJVU0VSIiwiaWF0IjoxNjUzODc2Njc5LCJleHAiOjE2NTM5NjMwNzl9.GVpVYzkETy7urkW1F-iRKZXiWOWAYPausXXbztlG_Lk',
             'Content-Type': 'application/json',
             'Host': 'aictest.hopto.org',
             'Connection': 'keep-alive',
             'Content-Length': 65
          }
        })
      .then((response) => {
      console.log(response)
      setStatus(999)
      })
      .catch((error) => console.error(error)),
    console.log(status)
    );

    const onPressLearnMore2 = (status == 999 ? () => navigation.navigate('Play') : () => navigation.navigate('Dashboard'));

    return (
        <View style={{backgroundColor:'#fff', height: 800}}>
            <View style={{height:7}}/>
            <View style={{
                    flexDirection: "row",
                    height: 81,
                    padding: 20}}>
                <View style={{
                        backgroundColor: "#fff",
                        flex: 0.3,
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        borderRightWidth: 1,
                        borderRightColor: 'gray',
                        marginLeft: 0,}}>
                    <View style={{marginLeft: 10}}>
                        <Image style={styles.header_logo} source={require('./images/presage_logo.png')}/>
                    </View>
                </View>
                <View style={{
                        backgroundColor: "#fff",
                        flex: 1,
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray'
                        }}>
                    <Text>{"\n\t\t\t"}dashboard</Text>
                </View>
            </View>
            <View style={{ height: 520 }}>
                <ScrollView>
                    <Image style={styles.demo_box} source={require('./images/demo_box.png')}/>
                    <View style={{height:200, width: 300, margin: 30, backgroundColor: "red"}}>
                        <View style={{height:150, backgroundColor: "green"}}>
                            <Image style={styles.box_uphalf} source={require('./images/box_uphalf.png')} />
                        </View>
                        <View style={{
                          flexDirection: "row",
                          padding: 1,
                          height: 50,
                          width: 300,
                          backgroundColor: "#1b9e3f"}} >
                            <View style={{flex: 1}}>
                                <VideoButton style={styles.box_button} enable={true} onPress={onPressLearnMore1} />
                            </View>
                            <View style={{flex: 1}}>
                                <SoundButton style={styles.box_button} enable={true} />
                            </View>
                            <View style={{flex: 1}}>
                                <PlayButton style={styles.box_button} enable={true} onPress={onPressLearnMore2} />
                            </View>
                            <View style={{flex: 1}}>
                                <EtcButton style={styles.box_button} enable={true} />
                            </View>
                        </View>
                    </View>
                    <View style={{height:200, width: 300, margin: 30, backgroundColor: "red"}}>
                        <View style={{height:150, backgroundColor: "green"}}>
                            <Image style={styles.box_uphalf} source={require('./images/box_uphalf.png')} />
                        </View>
                        <View style={{
                          flexDirection: "row",
                          padding: 1,
                          height: 50,
                          width: 300,
                          backgroundColor: "#1b9e3f"}} >
                            <View style={{flex: 1}}>
                                <VideoButton style={styles.box_button} enable={true} />
                            </View>
                            <View style={{flex: 1}}>
                                <SoundButton style={styles.box_button} enable={true} />
                            </View>
                            <View style={{flex: 1}}>
                                <PlayButton style={styles.box_button} enable={true} onPress={() => navigation.navigate('Play')}  />
                            </View>
                            <View style={{flex: 1}}>
                                <EtcButton style={styles.box_button} enable={true} />
                            </View>
                        </View>
                    </View>

                </ScrollView>
            </View>
            <View style={{
                    flexDirection: "row",
                    height: 30,
                    width: 400,
                    padding: 10}}>
                <View style={{flex: 0.45 }} />
                <View style={{ flex: 1 }}>
                    <View style={{marginLeft: 18}}>
                        <Image style={styles.bottom_logo} source={require('./images/dashboard.png')}/>
                    </View>

                </View>
                <View style={{ flex: 1 }}>
                    <View style={{marginLeft: 18}}>
                        <Image style={styles.bottom_logo} source={require('./images/eventlogs.png')}/>
                    </View>

                </View>
            </View>
            <View style={{
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
            </View>
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
