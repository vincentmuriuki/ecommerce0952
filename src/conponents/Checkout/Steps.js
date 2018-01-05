//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

// create a component
class Steps extends Component {
    render() {
        return (
            <View style={styles.stepsContainer}>
                    <TouchableOpacity>
                        <View style={styles.step}>
                            <Text>1</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.line}>------</Text>
                    <TouchableOpacity>
                        <View style={styles.step}>
                            <Text>2</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.line}>------</Text>
                    <TouchableOpacity>
                        <View style={styles.step}>
                            <Text>3</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    stepsContainer:{
        paddingVertical: 20,
        paddingHorizontal: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    step:{
        width: 30,
        height: 30,
        backgroundColor: '#82B1FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
    },

    line:{
        color: '#82B1FF',
        fontSize: 20,
        paddingHorizontal: 5,
    },
});

//make this component available to the app
export default Steps;
