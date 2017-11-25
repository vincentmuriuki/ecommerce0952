//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import Logo from './logo';
import LoginForm from './loginForm';
import LoginWith from "./loginWith";


// create a component
class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                <View>
                   <Logo />
                </View>

                <View>
                    <LoginForm />
                </View>

                <View>
                    <LoginWith/>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
});

//make this component available to the app
export default Login;
