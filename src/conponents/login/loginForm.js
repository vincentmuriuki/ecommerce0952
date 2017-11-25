//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';

// create a component
class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    keyboardType='email-address' //kiểu nhập
                    autoCapitalize='none'
                    autoCorrect={false}
                    autoFocus={true}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>
                        Forgot password ?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 5,
    },

    input:{
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 40,
        margin: 10,
        paddingHorizontal: 30,
        color: 'white',
        borderRadius: 20 //bo tròn góc
    },

    buttonContainer:{
        margin: 10,
        padding: 10,
        backgroundColor: '#2980b9',
        borderRadius: 20
    },

    buttonText:{
        color: 'white',
        textAlign: 'center',
    },

    forgotPassword:{
        paddingRight:10,
        paddingVertical: 10,
        textAlign: 'right',
        color:'white',
    }

});



//make this component available to the app
export default LoginForm;
