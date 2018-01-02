//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    CheckBox
} from 'react-native';




// create a component
class SignupForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='User name'
                    autoFocus={true}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Your Email'
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
                <TextInput
                    placeholder='Confirm Password'
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    secureTextEntry
                    style={styles.input}
                />

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={()=> this.props.navigation.navigate('MainScreen')}
                >
                    <Text style={styles.buttonText}>
                        Try it Free and make a purchase
                    </Text>
                </TouchableOpacity>

                <View style={styles.login}>
                    <Text style={{color:'white'}}>Already have an account ? </Text>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('Login')}
                    >
                        <Text style={styles.loginText}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                </View>
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

    login:{
        paddingVertical: 30,
        alignContent:'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    loginText:{
        fontWeight:'bold',
        color:'white'
    }
});

//make this component available to the app
export default SignupForm;
