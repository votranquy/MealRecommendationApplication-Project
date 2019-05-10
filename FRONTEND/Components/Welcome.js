import React, { Component } from 'react'
import { Text, 
  View,
   Image,
   StyleSheet,
   ActivityIndicator,
   } from 'react-native'

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state={};
    setTimeout(() => {
      const { navigator } = this.props;
      navigator.push({ name: 'MAIN' });
    }, 100);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.imgLogo} source={require('../Image/welcome.png')} />
        <ActivityIndicator size="large" color="#0000ff"/>
        <Text style={styles.txtWelcome}>Ăn gì hôm nay?</Text>
      </View>
    )
  }
}
const styles= StyleSheet.create({
  wrapper:{
    backgroundColor:"#34B089",
    flex:1,
    justifyContent:"space-around",
    alignItems:'center',
  },
  imgLogo:{
    width:200,
    height:200,
  },
  txtWelcome:{
    fontSize:30,
    color:"#FFF",
    fontWeight:"bold",
  }
})