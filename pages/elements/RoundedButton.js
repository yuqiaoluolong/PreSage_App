import React, {
    Component
} from 'react'

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'

import PropTypes from 'prop-types';

export default class RoundedButton extends Component {
    static propTypes = {
        enable: PropTypes.bool.isRequired,
    };

    render() {
        return (
            <View>
                {this._renderButton()}
            </View>
        );
    }

    _renderButton() {

        if (this.props.enable===true) {
            return(
                <TouchableOpacity
                    onPress={this.props.onPress}

                    style={[styles.button, this.props.buttonStyle]}>
                    <View style={styles.viewText}>

                        <Text style={[styles.textMeg, this.props.textStyle]}>{this.props.text}</Text>
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
        borderRadius: 6,        // rounded corner
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNotEnable: {
        backgroundColor: '#B8B8B8',
    }
});