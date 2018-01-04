//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
class LoginWith extends Component {
    render() {
        return (

            <View>
                <View>
                    <Text style={styles.line}>
                        _______________________________________
                    </Text>
                    <Text style={styles.line}>
                        Or connect with
                    </Text>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.iconImage}
                            source={require('../../images/fb_icon.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={styles.iconImage}
                            source={require('../../images/google_icon.png')}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={styles.iconImage}
                            source={require('../../images/zalo_icon.png')}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.signup}>
                    <Text style={{color:'white'}}>Don't have an account ? </Text>
                    
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate('SignUp')}
                        >
                        <Text style={styles.signupText}>
                            JOIN US
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    line:{
        color: 'white',
        textAlign: 'center',
        color: '#82B1FF'
    },
    iconContainer:{
        paddingHorizontal: 70,
        paddingVertical: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    iconImage:{
        width: 50,
        height: 50
    },

    signup:{
        //color: 'white',
        alignContent:'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    signupText:{
        fontWeight:'bold',
        color:'#82B1FF',
    }

});

//make this component available to the app
export default LoginWith;
