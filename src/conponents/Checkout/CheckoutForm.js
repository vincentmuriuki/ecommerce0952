//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';

// create a component
class CheckoutForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Fullname'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />

                <TextInput
                    placeholder='Email'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    keyboardType='email-address' //kiểu nhập
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />

                <TextInput
                    placeholder='Phone number'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    keyboardType='phone-pad' //kiểu nhập
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    underlineColorAndroid='transparent'
                    style={styles.input}  
                />

                <TextInput
                    placeholder='Receive Address'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />

                <TextInput
                    placeholder='Zipcode'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    autoCapitalize='none'
                    keyboardType='phone-pad' //kiểu nhập
                    autoCorrect={false}
                    autoFocus={true}
                    underlineColorAndroid='transparent'
                    style={styles.input}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    input:{
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 40,
        margin: 2,
        paddingHorizontal: 30,
        color: 'white',
        borderRadius: 20 //bo tròn góc
    },
});

//make this component available to the app
export default CheckoutForm;
