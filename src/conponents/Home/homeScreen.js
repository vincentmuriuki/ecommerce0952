//import liraries
import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import {MenuTab} from '../Router/Router';
import BannerSlider from './bannerSlider';
import Header from './header';
import ProductDetail from '../ProductDetail/ProductDetail'

// create a component
export default class HomeScreen extends Component {
    
    render() {
        let screenWidth = Dimensions.get("window").width;
        let screenHeight = Dimensions.get("window").height;
        return ( 
            <ScrollView
            horizontal
            pagingEnabled
            >
                <View style={{width: screenWidth, height: screenHeight}}>
                    <Header navigation = {this.props.navigation}/>
                    <BannerSlider/>
                    <MenuTab style={{flex:1}} />
                </View>
                <View style={{width: screenWidth, height: screenHeight}}>
                    <Header navigation = {this.props.navigation}/>
                    <ProductDetail/>
                </View>
            </ScrollView>
            
        );
    }
};

