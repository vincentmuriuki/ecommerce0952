//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';


// create a component
class Cpu extends Component {
    static navigationOptions = {
        tabBarLabel: 'CPU',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../images/cpu.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };
    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => this.props.navigation.navigate('MainBoard')}
                    title="CPU"
                />
            </View>
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignItems: 'center',
        //justifyContent: 'center'
        flex:1
    },
});

//make this component available to the app
export default Cpu;