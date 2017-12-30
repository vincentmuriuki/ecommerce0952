import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class  extends Component {
    static navigationOptions = {
        drawerLabel: 'SideBar',
    };
    render() {
        return (
            <View>
                <Text>This is sidebar </Text>
            </View>
        );
    }
}

