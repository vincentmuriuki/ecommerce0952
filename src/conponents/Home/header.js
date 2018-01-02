import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

const {height} = Dimensions.get('window');

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity 
                        style={styles.iconContainer}
                        onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                    >
                        <Image style={styles.icon} source={require("../../images/appIcon/ic_menu.png")}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer}
                    >
                        <Image style={styles.icon} source={require("../../images/appIcon/search0.png")}/>
                    </TouchableOpacity>
                </View>
                <Text style={{color:'white'}}>DOO STORE</Text>
                <TouchableOpacity 
                    style={styles.iconContainer}
                    onPress={()=> this.props.navigation.navigate('Cart')}
                >
                    <Image style={styles.icon} source={require("../../images/appIcon/cart2.png")}/>
                </TouchableOpacity>
        
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: height/12,
        backgroundColor: 'black',
        alignContent:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    iconContainer:{
        padding: 15
    },

    icon:{
        width: 20,
        height: 20,
    }
});

