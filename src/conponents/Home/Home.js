import React, { Component } from 'react';
import { View,Text } from 'react-native';
import {MenuTab, MainTab} from './Router';

export default class Home extends Component {
    render() {
        return (
        <MainTab/>
        );
    }
}