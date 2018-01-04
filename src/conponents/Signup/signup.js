//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import SignupForm from "./signupForm";
import Logo from "../Login/logo";



// create a component
class Signup extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <View>
                    <Logo/>
                </View>
                <View>
                    <SignupForm navigation = {this.props.navigation}/>
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
export default Signup;
