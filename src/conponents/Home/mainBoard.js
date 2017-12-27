//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


// create a component
class MainBoard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('mainboard')}
                    title="MainBoard"
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        height: 100,
        //justifyContent: 'center'
    },
});

//make this component available to the app
export default MainBoard;
