//import liraries
import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet, 
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,

    } from 'react-native';

import icBack from "../Image/back_white.png";

const Img_Path= 'http://10.94.65.10/MealRecommendationApplication-Project/BACKEND/CRAWL_DATA/IMAGE/';

// create a component
export default class FoodDetail extends Component {
    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    render() {
        const { img_path, food_name, rate, address, worktime } = this.props.food;
        return (
        <View style={styles.wrapper} >
            <View style={styles.row1}>
                <TouchableOpacity  onPress={this.goBack.bind(this)}>
                  <Image source={icBack} style={styles.iconStyle}/>
                </TouchableOpacity>
                <Text style={styles.titleStyle}>{food_name}</Text>
                <View/>
            </View>
            <View style={styles.body}>
                <Image source={{uri: `${Img_Path}{img_path}`}} style={styles.foodImage}/>
            </View>
            {/* <TextInput style={styles.textInput} placeholder="What do you want to buy?" underlineColorAndroid="white"/> */}
         </View>
        );
    }
}
const {height} = Dimensions.get('window'); 
const styles = StyleSheet.create({
    wrapper:{
     
      margin:0
     

    },
    row1:{
     flexDirection:'row', 
     justifyContent:'space-between',
     height: height / 15,
     backgroundColor: '#34B089', 
     padding:10, 
     justifyContent:'space-between',

    },
    iconStyle:{
      height:30, width:30,
    },
    titleStyle:{
      color: '#FFF', fontSize:25,
    },
    body:{
        margin:0,
        flex:1,
        backgroundColor:"#AAA",
        justifyContent:'space-between',
        padding:2,
    },
    foodImage:{
        height:height/3,
        flex:1,
        alignItems:"center",
        backgroundColor:"#AAA",
    }
  })
