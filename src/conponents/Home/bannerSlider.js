//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';


// create a component
const { width, height } = Dimensions.get('window');
const imgWidth = width;
const imgHeight = imgWidth /2;
export default class BannerSlider extends Component {
    render() {
        return (
            <View style={{flex:0.4}}>
                <Swiper showsButtons={true} width={imgWidth} height={imgHeight}>
                    <Image style = {styles.imageBanner} source={require("../../images/banners/banner1.png")}/>
                    <Image style = {styles.imageBanner} source={require("../../images/banners/banner2.png")}/>
                    <Image style = {styles.imageBanner} source={require("../../images/banners/banner3.png")}/>
                </Swiper>
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
