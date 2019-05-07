import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,

} from 'react-native';
export default class UserMenu extends Component {

  render() {
    return (
      <View style={styles.wrapper}>

      <View style={styles.row1}>
        <Text style={styles.titleStyle}>Gợi Ý Cho Bạn</Text>
      </View>
      </View>

    );
  }
}
const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  input:{backgroundColor:'#EEEEEE',height:60,borderWidth:1,margin:5,fontSize: 20,},
  wrapper: {flex:1, backgroundColor: "white"},
  touchable:{margin:5,backgroundColor:"#EEEEEE",padding:10,flexDirection:"row"},
  plus: {color:"black",fontSize: 20, },
  row1:{
    flexDirection: 'row',
    //  justifyContent: 'space-between' ,
  alignItems:'center', 
  marginBottom:10,
  height: height / 12, 
  backgroundColor: '#34B089',
   padding:10, 
   justifyContent:'space-around'
 },
 titleStyle:{
  color: '#FFF', 
  fontSize:20, 
  alignItems:'center',
   justifyContent:"space-between",
 }, 
});

