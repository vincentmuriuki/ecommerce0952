import React from 'react';
import { StyleSheet, Text, View,Button, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/conponents/login/login';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Sale0952',
    };
    render() {
        return(
            <Login/>

        );
    }
}

class ChatScreen extends React.Component{
  static navigationOptions = {
    title: 'Chatacsdscd',
  };
  render(){
    return(
      <View>
        <Text>This is chat screen.</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

