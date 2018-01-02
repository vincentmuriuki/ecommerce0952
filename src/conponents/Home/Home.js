import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {MainTab} from './Router';
import Header from './header'

export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (
            <View style={{flex:1}}>
                <Header navigation = {this.props.navigation}/>
                <MainTab/>
            </View>
            
        );
    }
}