//import liraries
import React, { Component } from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const {height, width} = Dimensions.get("window");
const productHeight = height/4;
const productWidth = productHeight;
// create a component
class CPU_AMD extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.productContainer}>
                        <View>
                            <Image 
                                style={styles.productImage}
                                source={require('../../../images/products/cpu_amd_7.png')}
                            />
                        </View>
                        <Text style={styles.productName}>Core Intel i9</Text>
                        <Text style={styles.productPrice}>$1984.99</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.productContainer}>
                        <View>
                            <Image 
                                style={styles.productImage}
                                source={require('../../../images/products/cpu_amd_7.png')}
                            />
                        </View>
                        <Text style={styles.productName}>Core Intel i9</Text>
                        <Text style={styles.productPrice}>$1984.99</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.productContainer}>
                        <View>
                            <Image 
                                style={styles.productImage}
                                source={require('../../../images/products/cpu_amd_7.png')}
                            />
                        </View>
                        <Text style={styles.productName}>Core Intel i9</Text>
                        <Text style={styles.productPrice}>$1984.99</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.productContainer}>
                        <View>
                            <Image 
                                style={styles.productImage}
                                source={require('../../../images/products/cpu_amd_7.png')}
                            />
                        </View>
                        <Text style={styles.productName}>Core Intel i9</Text>
                        <Text style={styles.productPrice}>$1984.99</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#454545',
    },

    body:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 10,
    },

    productContainer:{
        width: productWidth,
        height: productHeight +100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292929',
        marginBottom: 10,
    },

    productImage:{
        width: productWidth,
        height: productHeight,
    },

    productName:{
        color: '#82B1FF',
    },

    productPrice:{
        color: '#82B1FF',
    }
});

//make this component available to the app
export default CPU_AMD;
