//import liraries
import React, { Component } from 'react';
import {View, ScrollView, 
    Text, StyleSheet, Image, 
    Dimensions, TouchableOpacity,
    ListView, FlatList,} from 'react-native';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get("window");
const productHeight = height/4;
const productWidth = productHeight;
// create a component
class CPUIntel extends Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        this.state ={
            listProductsViewed:[
                {
                    key: '1',
                    image: require('../../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },

                {
                    key: '2',
                    image: require('../../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },

                {
                    key: '3',
                    image: require('../../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },
                {
                    key: '4',
                    image: require('../../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },
                {
                    key: '5',
                    image: require('../../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },
            ],
        }
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.body}>
                    <FlatList
                        data={this.state.listProductsViewed}
                        renderItem={({item}) => 
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity 
                                style={styles.productContainer}
                                onPress={()=>this.props.navigation.navigate('ProductDetail')}
                            >
                                <View>
                                    <Image 
                                        style={styles.productImage}
                                        source={item.image}
                                    />
                                </View>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productPrice}>{item.price}</Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={styles.productContainer}
                                onPress={()=>this.props.navigation.navigate('ProductDetail')}
                            >
                                <View>
                                    <Image 
                                        style={styles.productImage}
                                        source={item.image}
                                    />
                                </View>
                                <Text style={styles.productName}>{item.name}</Text>
                                <Text style={styles.productPrice}>{item.price}</Text>
                            </TouchableOpacity>
                        </View>
                        }
                    />
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
        height: productHeight +70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#292929',
        margin: 5,
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
export default CPUIntel;
