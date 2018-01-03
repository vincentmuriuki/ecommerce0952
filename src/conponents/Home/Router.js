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
import Icon from 'react-native-vector-icons/Ionicons';

//HomeStack
import OpeningScreen from "../../conponents/Opening/openingScreen";
import Login from "../Login/login";
import LoginForm from "../Login/loginForm";
import LoginWith from "../Login/loginWith";
import SignUp from "../Signup/signup";
import SignupForm from "../Signup/signupForm";
import Home from "./Home";
import Cart from "../Cart/Cart";
import Header from '../Home/header';

//SideBar
import SideBarDrawer from '../SideBarLeft/SideBarDrawer';
import SideBarStackNavigator from '../SideBarLeft/SideBarStackNavigator';

//MainTab
import HomeScreen from "./homeScreen";
import OrderHistory from "../OrderHistory/OrderHistory";
import Checkout from "../Checkout/Checkout";

//MenuTab
import Cpu from "../Home/CPU/cpu";
import CPU_Intel from "../Home/CPU/CpuIntel";
import CPU_AMD from "../Home/CPU/CpuAMD";
import Ram from "./ram";
import MainBoard from "./mainBoard";
import VGA from './VGA/VGA'
import SideBarContentComp from '../SideBarLeft/sideBarContentComp';
import Profile from '../Profile/Profile';

export const HomeStack = StackNavigator({
    OpeningScreen: {screen: OpeningScreen},
    Login: {screen: Login},
    LoginForm: {screen: LoginForm},
    LoginWith:{screen:LoginWith},
    SignUp: {screen: SignUp},
    SignupForm:{screen: SignupForm},
    MainScreen: {screen: SideBarDrawer},
    HomeScreen: {screen: HomeScreen},
    Header: {screen: Header},
    Cart: {screen: Cart},
},{
    headerMode: 'none' ,
});

export const SideBarLeft = DrawerNavigator({
    Profile:{screen: Profile},
    HomeScreen: {screen: HomeScreen,},
    Checkout: {screen: Checkout},
    OrderHistory: {screen: OrderHistory},
    Login: {screen: Login},
}, {
    initialRouteName: 'HomeScreen',
    drawerPosition: 'left',
    contentComponent: SideBarContentComp,
});

export const MenuTab = TabNavigator({
    Cpu: {
        screen: Cpu,
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

export const CPUTab = TabNavigator({
    CPU_Intel: {
        screen: CPU_Intel,
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



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3498db',
    },

    icon: {
        width: 25,
        height: 25,
    },
});