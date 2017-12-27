//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,TouchableOpacity} from 'react-native';
import Logo from "../Login/logo";
import Home from "../Home/Home"



// create a component
class OpeningScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Logo/>
                </View>
                <View style={styles.button}>
                    <Button
                        onPress ={() => this.props.navigation.navigate('Login')}
                        title="LOG IN"
                        color="#03A9F4"
                    />
                </View>
                <View style={styles.button} >
                    <TouchableOpacity 
                        onPress={()=> this.props.navigation.navigate('Home')}
                        >               
                        <Text style={styles.skip}>
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
        backgroundColor: '#3498db',
    },

    logoContainer:{
        paddingTop: 100,
        //paddingBottom: 50,
    },

    button:{
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 100,
    },

    skip:{
        color: '#ffffff',
        alignItems: 'center',
    }
});

//make this component available to the app
export default OpeningScreen;
