import React,{Component} from "react";
import {
  AppRegistry, View,TouchableOpacity,Text, StyleSheet,AsyncStorage
} from "react-native";

export default class SideMenu extends Component{

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.ovuong}></View>
        <View style={styles.ovuong}>
          <View style={styles.o1}></View>
          <View style={styles.o2}></View>
          <View style={styles.o3}></View>
        </View>
        <View style={styles.ovuong}></View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper:{flex:1, backgroundColor:"green",flexDirection:"row"},
  ovuong:{flex:1,backgroundColor:"red",borderWidth:1},
  o1:{flex:1,backgroundColor:"yellow"},
  o2:{flex:1,backgroundColor:"green"},
  o3:{flex:1,backgroundColor:"pink"},
});