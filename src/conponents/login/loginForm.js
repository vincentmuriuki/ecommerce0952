//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, TextInput} from 'react-native';

// create a component
class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email:"###",
            password: "###",
        }
    }

    checkAccount(){
        this.setState({
            email:"mail",
            password:"pass",
        })
    }

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

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={()=> this.checkAccount()}
                    >
                        <Text style={styles.buttonText}>
                            LOGIN
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
        backgroundColor: '#454545',
        borderRadius: 20
    },

    buttonText:{
        color: 'white',
        textAlign: 'center',
        color:'#82B1FF'
    },

    forgotPassword:{
        paddingRight:10,
        paddingVertical: 10,
        textAlign: 'right',
        color:'#82B1FF',
    }

});



//make this component available to the app
export default LoginForm;
