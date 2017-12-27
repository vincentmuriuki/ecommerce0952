import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from "react-navigation";

//HomeStack
import OpeningScreen from "../../conponents/Opening/openingScreen";
import Login from "../Login/login";
import LoginForm from "../Login/loginForm";
import SignUp from "../Signup/signup";
import Home from "./Home";

//SideBar
import SideBar from "./SideBar";

//MainTab
import HomeScreen from "./homeScreen";
import OrderHistory from "../OrderHistory/OrderHistory"
import Card from "../Card/Card"
import Checkout from "../Checkout/Checkout"

//MenuTab
import Cpu from "./cpu";
import Ram from "./ram";
import MainBoard from "./mainBoard";

export const HomeStack = StackNavigator({
    OpeningScreen: {
        screen: OpeningScreen,
        navigationOptions: {
            header: null,
        }
    },
    Login: {
        screen: Login,
    },

    LoginForm: {
        screen: LoginForm,
    },
    
    SignUp : {
        screen: SignUp,
    },

    Home:{
        screen: Home,
    }
});

export const MainTab = TabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
        },
        OrderHistory: {
            screen: OrderHistory,
        },
        Card: {
            screen: Card,
        },
        Checkout:{
            screen: Checkout,
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#82B1FF',
        },
    }
);

export const SideBarLeft = DrawerNavigator(
    {
        Home: {
            screen: Home,
        },
        SideBar: {
            screen: SideBar,
        }
    },{

    }
);

export const MenuTab = TabNavigator(
    {
        Cpu: {
            screen: Cpu,
        },
        MainBoard: {
            screen: MainBoard,
        },
        Ram: {
            screen: Ram,
        },
    },
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#82B1FF',
        },
    }
);



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3498db',
    },
});

