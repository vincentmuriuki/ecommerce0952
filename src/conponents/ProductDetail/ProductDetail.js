import React, { Component } from 'react';
import {Dimensions, InputText, TouchableOpacity, 
    StyleSheet, Text, View, ScrollView, 
    Button, ListView, FlatList,
    Image} from 'react-native';
import Header from '../Home/header';

const { width, height } = Dimensions.get('window');
const imgWidth = width;
const imgHeight = imgWidth /2;
const productHeight = height/5;
const productWidth = productHeight;

export default class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        this.state ={
            listProductsViewed:[
                {
                    key: '1',
                    image: require('../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },

                {
                    key: '2',
                    image: require('../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },

                {
                    key: '3',
                    image: require('../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },
                {
                    key: '4',
                    image: require('../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },
                {
                    key: '5',
                    image: require('../../images/products/cpu_intel_i9.png'),
                    name: 'Core Intel i9',
                    price: '$1984.99',
                },
            ],
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Header navigation = {this.props.navigation} />
                <ScrollView>
                    <View style={styles.blockContainer}>
                        <Image style={styles.image}
                            source={require('../../images/products/cpu_intel_i9.png')}
                        />
                        <View style={styles.title}>
                            <Text style={styles.titleText}>Intel® Core™ i9-7900X X-series Processor</Text>
                        </View>

                        <View style={styles.statePriceContainer}>
                            <Text style={styles.state}>Còn hàng </Text>
                            <Text style={styles.price}>$1.699 </Text>
                        </View>
                    </View>

                    <View style={styles.blockContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>SPECIFICATIONS</Text>
                        </View>

                        <ListView
                            dataSource={
                                this.ds.cloneWithRows([
                                {col1: 'Product Collection', col2: ' Intel® Core™ X-series Processors '},
                                {col1: 'Code Name', col2: 'Products formerly Skylake'},
                                {col1: 'Vertical Segment', col2: 'Desktop'},
                                {col1: 'Processor Number', col2: ' i9-7900X'},
                                {col1: 'Lithography', col2: ' 14 nm '},
                            ])}

                            renderRow={(rawData)=>{
                                return(
                                    <View style={styles.row}>
                                        <View style={styles.col1}>
                                            <Text>{rawData.col1}</Text>
                                        </View>
                                        
                                        <View style={styles.col2}>
                                            <Text>{rawData.col2}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>

                    <View style={styles.blockContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>DESCRIPTION</Text>
                        </View>
                        <Image style={styles.image}
                            source={require('../../images/products/cpu_intel_i9.png')}
                        />
                        <Text style={styles.descriptionTextContainer}>
                            Intel. Strikes. Back. The massive 18-core Core i9-7980X and 16-core Core i8-7960X are the chipmaker’s response to AMD’s Ryzen Threadripper, which has been eating Intel’s lunch for many months.
                        </Text>
                    </View>

                    <View style={styles.blockContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>VIEWED PRODUCTES</Text>
                        </View>
                        <FlatList
                            data={this.state.listProductsViewed}
                            horizontal
                            renderItem={({item}) => 
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
                            }
                        />  
                    </View>

                    <View style={styles.blockContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>SIMILAR PRODUCTES</Text>
                        </View>
                        <FlatList
                            data={this.state.listProductsViewed}
                            horizontal
                            renderItem={({item}) => 
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
                            }
                        />  
                    </View>

                </ScrollView>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <View>
                            <Text style={styles.textStyle}>ADD TO CART</Text>
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


    row:{
        flexDirection: 'row',
        marginTop: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    col1: {
        paddingHorizontal: 10,
        backgroundColor: 'white',
        flex: 1,
    },

    col2: {
        paddingHorizontal: 10,
        backgroundColor: 'white',
        flex: 2,
    },


    title:{
        backgroundColor: '#3b3b40',
        padding: 10,
        alignItems: 'center',
    },

    titleText:{
        color: 'white',
        fontSize: 20,
        alignItems: 'center'
    },

    blockContainer:{
        margin: 5,
        backgroundColor: '#454545'
    },

    image:{
        marginVertical: 5,
    },

    statePriceContainer:{
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    state:{
        color: 'green',
        fontSize: 20,
        paddingLeft: 40,
    },

    price:{
        color: 'red',
        fontSize: 20,
        paddingRight: 40,
    },

    descriptionTextContainer:{
        backgroundColor: 'white',
        padding: 10,
    },

    imageBanner: {
        height: imgHeight,
        width: imgWidth,
    },

    productContainer:{
        width: productWidth,
        height: productHeight +70,
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
    },

    qty:{
        flexDirection: 'row',
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
