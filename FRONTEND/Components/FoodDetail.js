//import liraries
import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet, 
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,

    } from 'react-native';

import icBack from "../Image/back_white.png";

const Img_Path= 'http://192.168.64.2/MealRecommendationApplication-Project/BACKEND/CRAWL_DATA/IMAGE/';

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
            <ScrollView style={styles.content}>
                <Image source={{uri: `${Img_Path}${img_path}`}} style={styles.foodImage}/>
                {/* <Text>Anh mon an o day</Text> */}
                <View style={styles.foodInfo}>
                  <View style={styles.rowFoodInfo} >
                    <Image style={styles.smallImage} source={require('../Image/location.png')} />
                    <Text style={styles.contentrowFoodInfo}>  {address}</Text>
                  </View>
                  <View style={styles.rowFoodInfo} >
                    <Image style={styles.smallImage} source={require('../Image/global.png')} />
                    <Text style={styles.contentrowFoodInfo}>  Khoảng cách</Text>
                  </View>
                  <View style={styles.rowFoodInfo} >
                    <Image style={styles.smallImage} source={require('../Image/spoon.png')} />
                    <Text style={styles.contentrowFoodInfo}>  Món Việt</Text>
                  </View>
                  <View style={styles.rowFoodInfo} >
                    <Image style={styles.smallImage} source={require('../Image/cash.png')} />
                    <Text style={styles.contentrowFoodInfo}>  20K- 50K</Text>
                  </View>
                </View>
                <View style={styles.contact}>
                  <View style={styles.ContactCell}>
                    <Image source={require('../Image/map.png')}/>
                    <Text style={styles.ContactTitle}>Chỉ đường</Text>
                  </View>
                  <View style={styles.ContactCell}>
                    <Image source={require('../Image/phone.png')}/>
                    <Text style={styles.ContactTitle}>Gọi ngay</Text>
                  </View>
                  <View style={styles.ContactCell}>
                    <Image source={require('../Image/bookmark.png')}/>
                    <Text style={styles.ContactTitle}>Lưu lại</Text>
                  </View>

                </View>
            </ScrollView>
         </View>
        );
    }
}
const {height , width} = Dimensions.get('window'); 
const styles = StyleSheet.create({
    wrapper:{
      flex: 1,
      margin:0,
      flex:1,
      justifyContent:'space-between',      
      alignItems:'center',
      flexDirection:"column",

    },
    row1:{
     flexDirection:'row', 
     justifyContent:'space-between',
     height: height / 15,
     width:width,
     backgroundColor: '#34B089', 
     padding:10, 
     alignItems:'center',

    },
    iconStyle:{
      height:30, width:30,
    },
    titleStyle:{
      color: '#FFF', fontSize:20,
    },
    content:{
        flexDirection:"row",
        // margin:0,
        flex:1,
        backgroundColor:"#CCC",
        // justifyContent:'center',
        // padding:0,
        // alignItems: "center",
        width:width,

    },
    foodImage:{
        height:height/3,
        // flex:1,
        width:width,
        alignItems:"center",
        backgroundColor:"#BBB",
        alignItems:"center",
        padding:0,
    },
    foodInfo:{
      // height:height/3,
      alignItems:"center",
      backgroundColor:"#AAA",
      justifyContent:"space-around",
      borderWidth:1,
      borderColor:"black",
      padding:0,
    },
    rowFoodInfo:{
      width:width,
      height:20,
      margin:0,
      backgroundColor:"#EEEEEE",
      padding:5,
      flexDirection:"row",
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottomWidth:1,
      borderColor:"#FFF",
    },
    smallImage:{
      width:20,
      height:20,
      padding:1,

    },
    contentrowFoodInfo: {
      color:"black",
      // fontSize: 15, 
      // height:15,
      padding:3,
    },
    contact:{
      flexDirection: "row",
      justifyContent:"center",
      borderWidth:1,
      borderColor:"black",
      // height:height/6,

    },
    ContactCell:{
      flex:1,
      borderColor:"black",
      borderWidth:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
    },
    ContactTitle:{
      // fontSize:15,
      color:"green",
    }

  })
