//import liraries
import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions, Button} from 'react-native';
import {MenuTab} from '../Router/Router';
import BannerSlider from './bannerSlider';
import Header from './header';
import ProductDetail from '../ProductDetail/ProductDetail'

const {height, width} = Dimensions.get("window");
// create a component
export default class HomeScreen extends Component {
    
    render() {
        return ( 
            <ScrollView
            horizontal
            pagingEnabled
            >
                <View style={{width: width, height: height, flex:1}}>
                    <Header navigation = {this.props.navigation}/>
                    <BannerSlider/>
                    <MenuTab style={{flex:1}} isClick={false}/>
                </View>
                <View style={{width: width, height: height, flex: 1}}>
                    <Header navigation = {this.props.navigation}/>
                    <ProductDetail/>
                </View>
            </ScrollView>
            
        );
    }
};

