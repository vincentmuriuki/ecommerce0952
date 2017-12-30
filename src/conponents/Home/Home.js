import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {MenuTab, MainTab} from './Router';

export default class Home extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };
    render() {
        return (
            <MainTab/>
        );
    }
}