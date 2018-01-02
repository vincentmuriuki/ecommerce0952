import React, {
    Component
} from 'react';
import {
    StyleSheet, Button, View, TouchableOpacity, Text, Image
} from 'react-native';
import {
    TabNavigator,
    StackNavigator,
    DrawerNavigator
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
import SideBar from "../SideBarLeft/SideBar";
import SideBarDrawer from '../SideBarLeft/SideBarDrawer';

//MainTab
import HomeScreen from "./homeScreen";
import OrderHistory from "../OrderHistory/OrderHistory";
import Checkout from "../Checkout/Checkout";

//MenuTab
import Cpu from "./cpu";
import Ram from "./ram";
import MainBoard from "./mainBoard";

export const HomeStack = StackNavigator({
    OpeningScreen: {screen: OpeningScreen},
    Login: {screen: Login},
    LoginForm: {screen: LoginForm},
    LoginWith:{screen:LoginWith},
    SignUp: {screen: SignUp},
    SignupForm:{screen: SignupForm},
    MainScreen: {screen: SideBarDrawer},
    Home:{screen: Home},
    Header: {screen: Header},
    Cart: {screen: Cart},
},{
    headerMode: 'none' ,
});

export const MainTab = TabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="rocket" size={30} color="#900" />
            ),
            tabBarOptions:{
                showIcon : true,
                showLabel: true,
            }
        }
    },
    OrderHistory: {screen: OrderHistory},
    Checkout: {screen: Checkout}
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#D50000',
    },
});

export const SideBarLeft = DrawerNavigator({
    Home: {
        path: "/",
        screen: Home,
    },
    SideBar: {
        path: "/sent",
        screen: SideBar,
    }
}, {
    initialRouteName: 'Home',
    drawerPosition: 'left'
});

export const MenuTab = TabNavigator({
    Cpu: {screen: Cpu},
    MainBoard: {screen: MainBoard},
    Ram: {screen: Ram},
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#82B1FF',
    },
});



const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3498db',
    },

    icon: {
        width: 26,
        height: 26,
    },
});