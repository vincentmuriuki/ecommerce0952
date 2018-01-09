//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
export default class OrdersManagement extends Component {
    render() {
        return (
            <View>
                <View style={styles.ordersManagementContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>ORDERS MANAGEMENT</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={styles.ordersManagementItemContainer}>
                            <Text>Received Orders</Text>
                            <Text>></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.ordersManagementItemContainer}>
                            <Text>Pending Orders</Text>
                            <Text>></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.ordersManagementItemContainer}>
                            <Text>Shipping Orders</Text>
                            <Text>></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.ordersManagementItemContainer}>
                            <Text>Completed Orders</Text>
                            <Text>></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.ordersManagementItemContainer}>
                            <Text>Canceled Orders</Text>
                            <Text>></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    title:{
        color: '#82B1FF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    textContainer: {
        paddingVertical: 10,
        paddingHorizontal: 30
    },

    textStyle:{
        color: '#82B1FF',
        fontSize: 20,
    },

    ordersManagementContainer:{
        backgroundColor: '#454545',
    },

    titleContainer:{
        paddingHorizontal: 20,
        paddingVertical: 10,
    },

    ordersManagementItemContainer:{
        backgroundColor: '#bcbcbc',
        padding: 10,
        marginHorizontal: 2,
        marginVertical: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});

