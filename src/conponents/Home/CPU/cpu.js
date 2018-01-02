//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';
import {CPUTab} from '../Router';


// create a component
export default class Cpu extends Component {
    static navigationOptions = {
        tabBarLabel: 'CPU',
    };
    render() {
        return (
            <View style={{flex:1}}>
                <CPUTab/>
            </View>
        );
    }
}
