//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native';
import {NavigationActions} from 'react-navigation';
import GeneralInfor from './GeneralInfor';
import OrdersManagement from './OrdersManagement';
import Personalinfor from './Personalinfor';
import Header from '../Home/header';

// create a component
export default class Profile extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Header navigation = {this.props.navigation}/>
                <GeneralInfor/>
                <ScrollView>
                    <Personalinfor/>
                    <OrdersManagement/>
                </ScrollView>
            </View>
            
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },
});

