import React, { Component } from 'react';
import {Dimensions, InputText, TouchableOpacity, 
    StyleSheet, Text, View, ScrollView, Button, 
    ListView} from 'react-native';
import Header from '../Home/header';

const {width, height} = Dimensions.get("window");

export default class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header navigation = {this.props.navigation}/>
                <ScrollView style={styles.listContainer}>
                    <View style={styles.productContainer}>
                        <View style={styles.image}>

                        </View>
                        <View style={{padding: 10, justifyContent:'space-between'}}>
                            <Text style={styles.totalValue}>Product's Name</Text>
                            <Text style={styles.textStyle}>10.000.000 VND</Text>
                            <View style={styles.qty}>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productContainer}>
                        <View style={styles.image}>

                        </View>
                        <View style={{padding: 10, justifyContent:'space-between'}}>
                            <Text style={styles.totalValue}>Product's Name</Text>
                            <Text style={styles.textStyle}>10.000.000 VND</Text>
                            <View style={styles.qty}>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productContainer}>
                        <View style={styles.image}>

                        </View>
                        <View style={{padding: 10, justifyContent:'space-between'}}>
                            <Text style={styles.totalValue}>Product's Name</Text>
                            <Text style={styles.textStyle}>10.000.000 VND</Text>
                            <View style={styles.qty}>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.productContainer}>
                        <View style={styles.image}>

                        </View>
                        <View style={{padding: 10, justifyContent:'space-between'}}>
                            <Text style={styles.totalValue}>Product's Name</Text>
                            <Text style={styles.textStyle}>10.000.000 VND</Text>
                            <View style={styles.qty}>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.increase}>
                                    <Text style={styles.totalValue}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View>
                    <View style={styles.totalContainer}>
                        <View style={styles.total}>
                            <Text style={styles.totalText}> Total:</Text>
                        </View>
                        <View style={styles.total}>
                            <Text  style={styles.totalValue}> 100.000.000 VND</Text>
                        </View>
                    </View>
                    
                    <TouchableOpacity style={styles.button}>
                        <View>
                            <Text style={styles.textStyle}>GO TO CHECK OUT</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },
    listContainer:{
        marginHorizontal: 10,
    },

    productContainer:{
        height: width/3 + 10,
        backgroundColor: '#454545',
        padding: 5,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    image:{
        width: width/3,
        height: width/3,
        backgroundColor: 'yellow',
        padding: 5,
    },

    qty:{
        flexDirection: 'row',
    },

    increase:{
        backgroundColor: '#82B1FF',
        width: 30,
        height: 30,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },

    totalContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#454545',
        paddingVertical: 20,
    },

    total:{
        paddingHorizontal: 30,
    },

    totalText:{
        color: '#82B1FF',
        fontSize: 25,
    },

    totalValue:{
        color: 'white',
        fontSize: 20,
    },

    button:{
        backgroundColor: '#720000',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textStyle:{
        color: 'yellow',
        fontSize: 20,
    }
});
