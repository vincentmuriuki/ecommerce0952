//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';


// create a component
const { height, width } = Dimensions.get('window');
const imgWidth = width;
const imgHeight = imgWidth /2;
export default class BannerSlider extends Component {
    render() {
        return (
            <View>
                <View >
                    <Text>This is banner slider</Text>
                </View>
                <View>
                    <Swiper showsButtons={true} width={imgWidth} height={imgHeight}>
                        <Image source={require("../../images/temp/little.jpg")}/>
                        <Image source={require("../../images/temp/midi.jpg")}/>
                        <Image source={require("../../images/temp/maxi.jpg")}/>
                    </Swiper>
                </View>
            </View>
            
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    swiper: {
        flex: 1,
        backgroundColor: 'yellow',
    },

    imageBanner: {
        height: imgHeight,
        width: imgWidth,
    }
});
