//import liraries
import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {MenuTab} from '../Router/Router';
import BannerSlider from './bannerSlider';
import Header from './header';

// create a component
export default class HomeScreen extends Component {
    render() {
        return ( 
            <View style={{flex:1}}>
                <Header navigation = {this.props.navigation}/>
                <BannerSlider/>
                <MenuTab style={{flex:1}}/>
            </View>
        );
    }
};

