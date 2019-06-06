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
import getToken from "../api/getToken";

import Random from "../Components/Random";
import theme from '../theme';
export default class UserMenu extends Component {
  constructor(props){
    super(props);
      this.state={isShow: false,}   ;   
    }
  


    checkLogin(){
      getToken()
      .then(token => {
        if(token!==""){
          this.setState({ isShow: true})
        }
      })
    }

    componentDidMount(){
      this._isMounted = true;
      this.interval = setInterval(() => this.checkLogin(), 2000);
    }     

    componentWillUnmount() {
      this._isMounted = false;
      clearInterval(this.interval);
    }



  render() {
    return (
      <View style={styles.wrapper}>

      <View style={styles.row1}>
        <Text style={styles.titleStyle}>Gợi Ý Cho Bạn</Text>
      </View>

{ this.state.isShow ?
  <View style={{flex:1}}>
      {/* <TouchableOpacity style={styles.btnComment}  onPress={()=> this.reGetNearRestaurant()}>
        <Text style={styles.txtButton}>Làm mới</Text>
    </TouchableOpacity> */}
      <Random/>
   </View>   
  :<Text> Chỉ dành riêng cho thành viên đã đăng nhập</Text>}

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
  alignItems:'center', 
  height: height / 17, 
  backgroundColor: theme.Color.NiceRed,
   justifyContent:'space-around'
 },
 titleStyle:{
  color: '#FFF', 
  fontSize:theme.Size.FontBig, 
  alignItems:'center',
   justifyContent:"space-between",
 }, 
 btnComment:{
  backgroundColor: theme.Color.NiceRed,
  alignItems:"center",
  padding:10,
  width: "100%"
},
txtButton:{
  color: theme.Color.White,
  fontWeight:"bold",
},
});

