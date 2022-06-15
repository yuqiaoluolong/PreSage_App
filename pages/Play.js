import { useState, Component, PropTypes, useRef } from 'react';
import { Text, Image, TextInput, View, Button, ScrollView, StyleSheet } from 'react-native';
import * as React from 'react';
import {Client} from "@stomp/stompjs";
import * as encoding from 'text-encoding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoundedButton from './elements/RoundedButton'
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

export default function VideoPlayPage({ navigation }) {
    // initial image source code
    var baseImage = 'data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABsSFBcUERsXFhceHBsgKEIrKCUlKFE6PTBCYFVlZF9VXVtqeJmBanGQc1tdhbWGkJ6jq62rZ4C8ybqmx5moq6T/2wBDARweHigjKE4rK06kbl1upKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKT/wAARCAEgAYADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDoUXyolj3M+1Qu5jknHc+9NY0rHk1GxoAaxqMmlY0wmgBCaaTQaaaADNGaSigAzSjrTacOlAC0UUUAFFFJQAtJRRQAUUUUAFFFFACUEUtFADT9KSnUYoAQDNOoFFACEUhFPooAjNJUhGaZg0AGaUE0hGKTNAD9x9KN3tSbqcCDQAbhRupaMCgBNwpQR60ECkwKAHUU3bRzQA/NOBqPNOBoAkBp4NRA08GgCUGnqaiU08GgCZTVLUdPhufLlEaLKJkZpAp3kAgdV56d/wCXUWgakBoAhc8moWNPc8momNACE0wmgmmk0ABNNpTTaACiiigBRTqaKdQAUUUlABR3oooAKKKKACiiigAopKKAFopKWgANFFFABRRRQAtFJS0AFFFFABimlPSnUUAREEUVMRmmFPSgBAxFODCo8UUAS5oqME08MKAHUUUUAFFFFABTlOKSlFAEgNSKahFPU0ATA1IDUKmpAaAK7n5j9aiJp7n5j9ajJoAQ000p5pD1oASkpaSgBKWikoAcBS0gNL2oAKKKKACiijvQAlFL3pKACiiloASjNB5FN6UAOopAaWgApaSigBaKKKACiiigBaKKKACiiigBaKKRulACEA0wrT88UooAioqQrmmEc0AKGxTgc1HSigCWimBqeDmgApRSUooAcKeDUYpwoAkU1KDUINSA0AQP94/WmU5upphoAQmmk0pppoAKKKKAEozRRQAo60+mqOadQAlFLSGgAo70Ud6ADvSUUUAFFFFABTTSMc0UAFLSUtAC5pQaZRQA+ikBpc5oAWikpTQAUtJS0AFFFFABSNS0UAJgmnDpRRQAUhGaWigBhWm1KaaVoAZSg0hFFAEgOadUWaepoAdThTRSigB4qRTUQp4NAETHk0005upppoAZSGlpKACiiigBKKKKAHrS0g6UtABSUtJQAUlLRQAlFFFABSHpS008mgBMZoxS0tADaKdRigBtFLikoAKAaKKAFzS5GKSigBwOaWminUALRSUUALRRRQAUtJRQAtFFFABSE0tIRQAhGaaRS5pSMigBtLQRikFADgaeDUdOB5oAkBp4qNTTxQAw8mhlwtPRec0SjC0AQGm06m0ALSGjtRQAlKKKB1oAfRRRQAUlFFABRR2pKACiiigBp5NGKO9KOaAFAzTtnFOVcCgmgCMjBpccU/YT2p3lHFAEFFKRzineWcdKAI8UlPIptACUUYooAeDxRSDiloAWikpaAFopKWgAooooAWikpaACkNLRQA3FHSlAoIoAOoppGKUHFO6igBlKKCMUCgBRUqmohT1oAnX7opk33aev3RTJfu0AV6bTjTaACiiigBKctNpy0AOpKWkoAKSiigAooooAKQ0tNNACVLEueTUYqwn3RQA5VFOAUUwtgUKc0AOZsdBUZkOac1Rkc0ALGNz5NTNhRmmRjHNNkbJx2oAiY5JNJS0mKAENKBRS0AFFFFABRRRQAUtJS0AFLSUtABRRRQAtFFFADead25pD60ueKAEIoFLQVIGaACmkc04UuM0ANFPWmYp60ATr90fSmy/cpy/dFJJ9w0AVGptObrTaACii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';
    var byteString;
    var imageString;
    const imageRef = useRef();      // indicating use Reference for image later

    stompClient = new Client();     // stomp

    stompClient.configure({
        brokerURL: 'wss://aictest.hopto.org/PreSAGE/socket',
        connectHeaders: {
            login: 'guest',
            passcode: 'guest',
        },
        reconnectDelay: 500,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: () => {      // actions after connected
            console.log("On connect");
            stompClient.subscribe('/camera/3/live-stream', (message) => {       // subscribe to get the live feed data
                byteString = String.fromCharCode.apply(String, message._binaryBody);        // transform data received to image source code in correct formats
                console.log(byteString);
                imageString = byteString.substring(10,byteString.indexOf("cameraId")-3);
                console.log(imageString);
                baseImage='data:image/png;base64,'.concat(imageString);
                console.log(baseImage);
                imageRef.current.setNativeProps({       // change the image source code once receive new data
                    source: [resolveAssetSource({uri: baseImage})]
                });
            });
        },
        onStompError: (frame) => {
            console.log('Broker reported error: ' + frame.headers['message']);
            console.log('Additional details: ' + frame.body);
        },
        onDisconnect: (frame) => {
            console.log("Stomp Disconnect", frame);
        },
        onWebSocketClose: (frame) => {
            console.log("Stomp WebSocket Closed", frame);
        },
        debug: (str) => {
            console.log(new Date(), str);
        },
        onUnhandledMessage: (msg) => {
            console.log(msg);
        },
        forceBinaryWSFrames: true,
        appendMissingNULLonIncoming: true,
    });

    stompClient.activate();     // activate stomp client

    return (
        <View style={{backgroundColor:'#fff'}}>
            <View style={{height:10}}/>
            <View style={{      // header
                    flexDirection: "row",
                    height: 81,
                    padding: 20}}>
                <View style={{
                        backgroundColor: "#fff",
                        flex: 0.3,
                        borderBottomWidth: 1,
                        borderBottomColor: 'gray',
                        borderRightWidth: 1,
                        borderRightColor: 'gray' }}>
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
                    <Text>{"\n\t\t\t"}Video Play</Text>
                </View>

            </View>     // header ends
                <View style={{ height: 520 }}>      // live feed played here
                    <ScrollView>
                        <View style={{height:240, width: 350, margin: 20, backgroundColor: "gray"}}>
                            <Image ref={imageRef} style={{height: 240, width: 350}} source={require('./images/fake_live_stream.png')}/>     // this is the changing image plays the images received
                        </View>
                    </ScrollView>
                </View>
            // bottom bar
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