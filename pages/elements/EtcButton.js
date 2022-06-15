import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native'

export default class EtcButton extends Component{

    render(){
        return (
            <View>
                {this._renderButton()}
            </View>
        );
    }

    _renderButton() {
        if (this.props.enable===true) {
            return(
                <TouchableOpacity       // let it become a button which are able to navigate to other pages after clicking
                    onPress={this.props.onPress}
                    activeOpacity={0.2}
                    focusedOpacity={0.5}
                    style={[styles.button, this.props.buttonStyle]}>
                    <View style={styles.container}>
                        <Image style={styles.play} source={require('./images/etc.png')} />      // attach the desired image(etc image here)
                    </View>
                </TouchableOpacity>
            );
        } else {
            return(
                <View style={[styles.button, this.props.buttonStyle, styles.buttonNotEnable]}>
                    <View style={styles.viewText}>
                        <Text style={styles.textMeg}>{this.props.text}</Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    viewText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textMeg: {
        color: 'white',
        fontSize: 15,
    },
    button: {
        height: 44,
        borderRadius: 6,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:50,
        marginRight:50
    },
    buttonNotEnable: {
        backgroundColor: '#B8B8B8',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        backgroundColor: '#1b9e3f',
    },
    play: {
        height: 30,
        width: 30,
    }
});