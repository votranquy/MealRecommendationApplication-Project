//REVIEW: OK
// User can enter Username, Password, Phone Number
// Should add more: repeat password, check box agree with policy...., hidden password


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

var URL= "http://192.168.64.2/MealRecommendationApplicationBackEnd/register.php";
export default class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      USERNAME: "",
      PASSWORD:"",
      PHONE_NUMBER:"",
      result:"",
      checked:false,
    }
  }

  clickPlus(){
    fetch(URL, {
      method:"POST",
      // headers:{
      //   "Accept":"application/json",
      //   "Content-Type":"application/json"
      // },
      body:JSON.stringify({
        USERNAME:this.state.USERNAME,
        PASSWORD:this.state.PASSWORD,
        PHONE_NUMBER:this.state.PHONE_NUMBER,
      })
    })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        result: "Đăng ký thành công"
      });
    })
    .catch((error)=>{console.log(error)});
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(text)=> this.setState({USERNAME:text})}
          value={this.state.HOTEN}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=> this.setState({PASSWORD:text})}
          value={this.state.PASSWORD}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=> this.setState({PHONE_NUMBER:text})}
          value={this.state.PHONE_NUMBER}
          placeholder="Phone Number"
          
        />


        <TouchableOpacity 
          style={styles.touchable}
          onPress={()=>{this.clickPlus()}}
        >
          <Text style={styles.plus}>REGISTER</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.result}> {this.state.result}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{backgroundColor:'#EEEEEE',height:60,borderWidth:1,margin:5,fontSize: 20,},
  wrapper: {flex:1, backgroundColor: "white", padding:10},
  touchable:{alignItems: 'center',margin:5},
  plus: {backgroundColor:"black",color:"white",padding:10,fontSize: 30, },
  result:{}
});

