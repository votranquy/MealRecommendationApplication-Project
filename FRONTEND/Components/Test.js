//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
            }
    }

    componentDidMount(){
        fetch("https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557065498601&Count=7&RestaurantId="+restaurant_id,
        {
            method:"GET",
            headers: {
              Accept: 'application/json, text/plain, */*',
              'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
              'x-requested-with' : 'XMLHttpRequest'
            }
          })
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData),
              });
        })
        .catch(
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows([]),
            })
        )

        //...............................
    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Test;
