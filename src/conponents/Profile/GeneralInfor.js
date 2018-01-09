//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// create a component
export default class GeneralInfor extends Component {
    render() {
        return (
            <View>
                <View style={styles.generalInfor}>
                    <View style={styles.avatarContainer}>
                        <Image 
                            style={styles.avatar} 
                            source={require('../../images/avatar.jpg')}
                        />
                    </View>
                    
                    <View style={{flex: 3}}> 
                        <Text style={styles.title} >Customer's Name</Text>
                        <Text style={styles.generalTextStyle} >Score: 100</Text>
                        <Text style={styles.generalTextStyle} >Customer's Email</Text>
                    </View>
                    <View style={styles.notiContainer}>
                        <TouchableOpacity>
                            <Image 
                                style={styles.noti} 
                                source={require('../../images/appIcon/notification.png')}
                            />
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={styles.generalInfor2}>
                    <TouchableOpacity style={{flex:1}}>
                        <View style={styles.itemGeneralInfor2}>
                            <Text>1</Text>
                            <Text>Bills</Text>
                        </View>
                    </TouchableOpacity >

                    <TouchableOpacity style={{flex:1}}>
                        <View style={styles.itemGeneralInfor2}>
                            <Text>1</Text>
                            <Text>Products</Text>
                        </View>
                    </TouchableOpacity>
                       
                    <TouchableOpacity style={{flex:1}}>
                       <View  style={styles.itemGeneralInfor2}>
                            <Text>499.000đ</Text>
                            <Text>Total</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    generalInfor:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#454545',
        flexDirection: 'row',   
    },

    generalInfor2:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    itemGeneralInfor2:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical:2,
        marginHorizontal:1,
        backgroundColor: '#bcbcbc',    
    },

    avatarContainer:{
        padding: 20, 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatar:{
        borderRadius: 90,
        borderColor: 'white',
        borderWidth: 2,
        width: 70,
        height: 70,
    },

    notiContainer:{
        padding: 20, 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    noti:{
        width: 20,
        height: 20,
        tintColor: 'white',
    },

    title:{
        color: '#82B1FF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    generalTextStyle:{
        color: '#82B1FF',
        fontSize: 15,
    },
});

