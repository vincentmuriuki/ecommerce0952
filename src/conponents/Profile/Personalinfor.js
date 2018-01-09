//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
class Personalinfor extends Component {
    render() {
        return (
            <View style={styles.managementContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>PERSONAL INFORMATION</Text>
                    <TouchableOpacity>
                        <View style={{paddingHorizontal: 10}}>
                            <Image
                                source={require('../../images/appIcon/edit.png')}
                                tintColor='white'
                                style={{height: 15, width:15}}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.inforContainer}>
                    <View style={styles.row}>
                        <Text style={styles.textStyle}>Full Name</Text>
                        <Text style={styles.textStyle}>Customer's Name</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textStyle}>Email</Text>
                        <Text style={styles.textStyle}>Customer's Email</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textStyle}>Phone number</Text>
                        <Text style={styles.textStyle}>0912 345 678</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textStyle}>Address</Text>
                        <Text style={styles.textStyle}>Customer's Address</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.textStyle}>Checkout Information</Text>
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    managementContainer:{
        backgroundColor: '#454545',
    },

    titleContainer:{
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
    },

    title:{
        color: '#82B1FF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    inforContainer:{
        
    },

    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#bcbcbc',
        marginHorizontal: 2,
        marginVertical: 1,
    },
});

//make this component available to the app
export default Personalinfor;
