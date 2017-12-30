//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, ListView} from 'react-native';

// create a component
class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        }
    }
    
    render() {
        return (
            <View>
                <ListView 
                dataSource={this.state.dataSource}
                renderRow={(row)=>
                    //JSX
                    <Text style = {styles.lst}>This is row {row}</Text>
                }
                /> 
            </View> 
        );
    }

   

    //load data vào listview
    componentDidMount() {
        var mang = ['1','2','3']
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(mang)
        })
    }
};

// define your styles
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        alignItems: 'center',
        height: 100,
        //justifyContent: 'center'
    },

    lst: {
        padding: 20,
        backgroundColor: "yellow",
    }
});

//make this component available to the app
export default HomeScreen;
