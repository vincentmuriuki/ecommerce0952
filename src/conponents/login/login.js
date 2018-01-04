//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import Logo from './logo';
import LoginForm from './loginForm';
import LoginWith from "./loginWith";
import loginForm from './loginForm';


// create a component
class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>

                <View>
                   <Logo />
                </View>

                <View>
                    <LoginForm 
                        navigation = {this.props.navigation}
                    />
                </View>

                <View>
                    <LoginWith
                        navigation = {this.props.navigation}
                    />
                </View>

            </KeyboardAvoidingView>
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
export default Login;
