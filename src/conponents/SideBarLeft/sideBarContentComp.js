//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import {NavigationActions} from 'react-navigation';

// create a component
class SideBarContentComp extends Component {
    constructor(props){
        super(props);
        this.state={isLogined: true};
    }

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
          routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    }

    render() {
        const loginJSX = (
            <View>
                <View style={styles.avatarContainer}>
                    <Image 
                        style={styles.avatar} 
                        source={require('../../images/avatar.jpg')}
                    />
                    <Text style={styles.customerName} >Customer's Name</Text>
                    <Text style={styles.customerAccumulation} >Score: 100</Text>
                </View>

                <View style={styles.textContainer}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen('HomeScreen')}
                    >
                        <Text  style={styles.textStyle}>Home</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.textContainer}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen('Profile')}
                    >
                        <Text style={styles.textStyle}>Profile</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.textContainer}>
                    <TouchableOpacity
                            onPress={this.navigateToScreen('Checkout')}
                    >
                        <Text style={styles.textStyle}>Check out</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.textContainer}>
                    <TouchableOpacity>
                        <Text style={styles.textStyle}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        const logoutJSX = (
            <View>
                <View style={styles.avatarContainer}>
                    <Image 
                        style={styles.avatar} 
                        source={require('../../images/appIcon/contact.png')}
                    />
                </View>

                <View style={styles.textContainer}>
                    <TouchableOpacity
                        onPress={this.navigateToScreen('HomeScreen')}
                    >
                        <Text  style={styles.textStyle}>Home</Text>
                    </TouchableOpacity>
                </View>
    
                <View style={styles.textContainer}>
                    <TouchableOpacity
                            onPress={this.navigateToScreen('Login')}
                    >
                        <Text  style={styles.textStyle}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ); 

        const mainJSX = this.state.isLogined ?loginJSX : logoutJSX ;
        return (
            <View  style={styles.container}>
                {mainJSX}
            </View>
            
        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },

    avatarContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#454545',
    },

    avatar:{
        borderRadius: 90,
        borderColor: 'white',
        borderWidth: 2,
        width: 100,
        height: 100,
    },

    customerName:{
        color: '#82B1FF',
        fontSize: 25,
    },

    customerAccumulation:{
        color: '#82B1FF',
        fontSize: 20,
    },

    textContainer: {
        paddingVertical: 10,
        paddingHorizontal: 30
    },

    textStyle:{
        color: '#82B1FF',
        fontSize: 20,
    }
});

//make this component available to the app
export default SideBarContentComp;
