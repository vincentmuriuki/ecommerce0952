import React, { Component } from 'react';
import { TextInput, View, Text, TouchableOpacity, Dimensions, StyleSheet, Image } from 'react-native';

const {height, width} = Dimensions.get('window');
const heightScreen = height;
const widthScreen = width;

export default class Header extends Component {
    render() {
        return (
            <View>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity 
                            style={styles.iconContainer}
                            onPress={()=>this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Image style={styles.icon} source={require("../../images/appIcon/ic_menu.png")}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textStyle}>DOO STORE</Text>
                    <TouchableOpacity 
                        style={styles.iconContainer}
                        onPress={()=> this.props.navigation.navigate('Cart')}
                    >
                        <Image style={styles.icon} source={require("../../images/appIcon/cart2.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchBar}>
                    <View>
                        <TextInput
                            placeholder='What do you want to buy ?'
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCapitalize='none'
                            selectionColor='white'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            style={styles.textInputStyle}
                        />
                    </View>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: heightScreen/15,
        backgroundColor: '#720000',
        alignContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    iconContainer:{
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    icon:{
        width: 20,
        height: 20,
    },

    textStyle:{
        fontFamily: 'Syncopate-Bold',
        color: 'white',
        paddingTop: 20,
    },

    searchBar: {
        backgroundColor: '#720000',
        //backgroundColor: 'yellow',
        alignContent:'center',
        alignItems: 'center',
    },
    textInputStyle:{
        color: 'white',
        paddingHorizontal: 20,
        paddingTop: 0,
        paddingBottom: 10,
        width: widthScreen - 50,
    }
});

