import React, {
    Component
} from 'react';
import {
    StyleSheet, Button, View, TouchableOpacity, Text, Image
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
    DrawerNavigator,
    TabBarTop
} from "react-navigation";

//MainStack
import OpeningScreen from "../Opening/openingScreen";
import Login from "../Login/login";
import LoginForm from "../Login/loginForm";
import LoginWith from "../Login/loginWith";
import SignUp from "../Signup/signup";
import SignupForm from "../Signup/signupForm";
import HomeScreen from "../Home/homeScreen";

//HomeStack
import ProductDetail from '../ProductDetail/ProductDetail';
import Cart from "../Cart/Cart";

//SideBar
import Checkout from "../Checkout/Checkout";
import SideBarContentComp from '../SideBarLeft/sideBarContentComp';
import Profile from '../Profile/Profile';

//MenuTab
import CPU_Intel from "../Home/CPU/CpuIntel";
import CPU_AMD from "../Home/CPU/CpuAMD";
import Ram from "../Home/ram";
import MainBoard from "../Home/mainBoard";
import VGA from '../Home/VGA/VGA'



export const HomeStack = StackNavigator({
    HomeScreen: {screen: HomeScreen},
},{
    initialRouteName: 'HomeScreen',
    headerMode: 'none' ,
});

export const SideBarLeft = DrawerNavigator({
    HomeScreen: {screen: HomeStack},
    Profile:{screen: Profile},
    Checkout: {screen: Checkout},
    Login: {screen: Login},
    Cart: {screen: Cart},
}, {
    initialRouteName: 'HomeScreen',
    drawerPosition: 'left',
    contentComponent: SideBarContentComp,
});

export const SideBarStack = StackNavigator({
    HomeScreen: {screen: HomeStack},
    Profile:{screen: Profile},
    Checkout: {screen: Checkout},
    Login: {screen: Login},
}, {
    initialRouteName: 'HomeScreen',
});

export const MainStack = StackNavigator({
    OpeningScreen: {screen: OpeningScreen},
    Login: {screen: Login},
    LoginForm: {screen: LoginForm},
    LoginWith:{screen:LoginWith},
    SignUp: {screen: SignUp},
    SignupForm:{screen: SignupForm},
    SideBarLeft: {screen: SideBarLeft}
},{
    initialRouteName: 'OpeningScreen',
    headerMode: 'none' ,
});

export const Detail_Stack = StackNavigator({
    CPU_Intel: {screen: CPU_Intel,},
    ProductDetail: {screen: ProductDetail},
},{
    headerMode: 'none' ,
});

export const CPUTab = TabNavigator({
    CPU_Intel: {
        screen: Detail_Stack,
        navigationOptions:{
            tabBarLabel: 'CPU INTEL',
        }
    },
    CPU_AMD: {screen: CPU_AMD},
}, {
    tabBarPosition: 'top',
    tabBarComponent: TabBarTop,
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#82B1FF',
        pressColor: 'red', 
        indicatorStyle: {
            backgroundColor: '#841111',
            height: 3
        },
        style: {
            backgroundColor: '#292929',
            height: 50,
            justifyContent: 'center',
        }
    },
});


export const MenuTab = TabNavigator({
    Cpu: {
        screen: CPUTab,
        navigationOptions:{
            tabBarLabel: 'Processor',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../images/appIcon/CPU.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    MainBoard: {
        screen: MainBoard,
        navigationOptions:{
            tabBarLabel: 'Mainboard',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../images/appIcon/MainBoard.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Ram: {
        screen: Ram,
        navigationOptions:{
            tabBarLabel: 'RAM',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../images/appIcon/RAM.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
    Vga: {
        screen: VGA,
        navigationOptions:{
            tabBarLabel: 'VGA',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../images/appIcon/VGA.png')}
                    style={[styles.icon, {tintColor: tintColor}]}
                />
            ),
        }
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#82B1FF',
        pressColor: 'red', 
        indicatorStyle: {
            backgroundColor: '#841111',
        },
        style: {
            backgroundColor: '#292929',
            height: 100,
            justifyContent: 'center',
            
        }
    },
});





const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3498db',
    },

    icon: {
        width: 25,
        height: 25,
    },
});