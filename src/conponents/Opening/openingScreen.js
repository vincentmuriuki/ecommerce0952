//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import Logo from "../Login/logo";



// create a component
class OpeningScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>

                <TouchableOpacity 
                    onPress={()=> this.props.navigation.navigate('Login')}
                    >               
                    <View style={styles.loginContainer} >
                        <Text style={styles.login}>
                            LOG IN
                        </Text>
                    </View>
                </TouchableOpacity>
                
                        
                

                <View style={styles.skipContainer} >
                    <TouchableOpacity 
                        onPress={()=> this.props.navigation.navigate('SideBarLeft')}
                        >               
                        <Text style={styles.login}>
                            Skip and start shoping now >
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
        flex: 1,
        backgroundColor: '#292929',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    logoContainer:{
        paddingTop: 100,
        //paddingBottom: 50,
    },

    loginContainer:{
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: '#454545',
        width: 200,
    },

    login:{
        color: '#82B1FF',
        alignItems: 'center',
        paddingVertical: 10,
        fontFamily:'Syncopate-Bold',
    },

    skipContainer:{
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 100,
    },


});

//make this component available to the app
export default OpeningScreen;
