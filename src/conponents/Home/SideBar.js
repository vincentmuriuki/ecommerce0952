import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class  extends Component {
    state = {  }
    render() {
        return (
            <View>
                <Text>This is sidebar </Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Go back"
                />
            </View>
        );
    }
}

