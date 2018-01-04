//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {HomeStack, SideBarLeft, SideBarStack} from '../Router/Router'
import Header from '../Home/header';

// create a component
class Store extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation = {this.props.navigation}/>
                <SideBarStack/>
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

//make this component available to the app
export default Store;
