import { useState, Component, PropTypes } from 'react';
import { Text, Image, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoundedButton from './elements/RoundedButton'

export default function LoginPage({ navigation }) {
    var arr;
    const [status, setStatus] = useState(true);
    const [username, setUsername] = useState(true);
    const [password, setPassword] = useState(true);
    const onPressLearnMore = (

    fetch('https://aictest.hopto.org/PreSAGE/auth/login', {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json',
             'Host': 'aictest.hopto.org',
             'Connection': 'keep-alive',
             'Content-Length': 65
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
      .then((response) => response.json())
      .then((json) => {
      console.log(json)
      arr = json.status
      setStatus(json.status)
      })
      .catch((error) => console.error(error)),
    console.log(status),
    typeof status == 'undefined' ? () => navigation.navigate('Dashboard') : () => navigation.navigate('Login')
    )
                   return (
                       <View style={{backgroundColor: "#fff"}}>
                           <View>
                               <Text>{"\n\n"}</Text>
                               <Image style={styles.logo} source={require('./images/presage_heading.png')}/>
                               <Text>{"\n\n\n"}</Text>
                               <Text style={styles.titleText}>
                                   {"\t"}Log-in to your account
                                   {"\n"}
                               </Text>
                               <Text style={styles.baseText}>{"\t"}Username</Text>
                               <TextInput
                                       style={{ margin: 20, height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 10}}
                                       placeholder="  Enter Username"
                                       onChangeText={text => setUsername(text)}
                                       />

                               <Text style={styles.baseText}>{"\t"}Password</Text>
                               <TextInput
                                       style={{ margin: 20, height: 50, borderColor: 'gray', borderWidth: 1, borderRadius: 10}}
                                       placeholder="  Enter Password"
                                       onChangeText={text => setPassword(text)}
                                       secureTextEntry={true}
                                       />
                           </View>
                           <RoundedButton
                                   enable={true}
                                   textStyle={styles.textStyle}
                                   text='Login'
                                   buttonStyle={styles.container}
                                   onPress={onPressLearnMore} />
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
