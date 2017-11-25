//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

// create a component
class Logo extends Component {
    render() {
        return (
            <View style={styles.logoContainer}>
                <Image style={styles.logo}
                   source={require('../images/logo.png')}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
    },
    logo:{
        width: 100,
        height: 100
    }
});

//make this component available to the app
export default Logo;
