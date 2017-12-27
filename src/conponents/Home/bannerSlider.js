//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, KeyboardAvoidingView, Dimensions} from 'react-native';


// create a component
class BannerSlider extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <Text>This is bannerSlider</Text>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e74c3c',
        alignItems: 'center',
        height: 200,
        //justifyContent: 'center'
    },

    imageBanner: {
        backgroundColor: '#1abc9c',
        width: 100,
        resizeMode: 'contain'
    },
});

//make this component available to the app
export default BannerSlider;
