//import liraries
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MenuTab} from './Router';
import Header from './header';
import BannerSlider from './bannerSlider';

// create a component
export default class HomeScreen extends Component {
    render() {
        return ( 
            <View style={{flex:1}}>
                <Header navigation = {this.props.navigation}/>
                <BannerSlider/>
                <MenuTab/>
            </View>
        );
    }
};

