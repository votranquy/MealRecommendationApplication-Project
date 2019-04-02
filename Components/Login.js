import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';


export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      USERNAME:"",
      PASSWORD:"",
      login_result:"NOT LOGIN YET",
      token:"No have a token",
    }
  }

  LOGIN(){
    fetch("http://192.168.64.2/MealRecommendationApplicationBackEnd/createToken.php",
      {
        method:"POST",
        // headers:{
        //   "Accept":"application/json",
        //   "Content-Type":"application/json"
        // },
        body: JSON.stringify({
          USERNAME:this.state.USERNAME,
          PASSWORD:this.state.PASSWORD,
        })
      })
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        login_result:"Logined",
        token: responseJson.token,
      });
    })
    .catch((error)=>{console.log(error)});
  }


  render() {
    return (
      <View style={styles.wrapper}>

       <View style={styles.box}> 
        <Text> LOGIN BOX</Text>
        </View>

        <View style={styles.box}> 
          <Text style={styles.title}>Username:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=> this.setState({USERNAME:text})}
            value={this.state.USERNAME}
            placeholder="Username"
          />
        </View>

        <View style={styles.box}> 
          <Text style={styles.title}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=> this.setState({PASSWORD:text})}
            value={this.state.PASSWORD}
            placeholder="Password"
          />
        </View>

        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={()=>{this.LOGIN()}}
          >
            <Text style={styles.submit_button}>LOGIN</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.box2}>
          <Text style={styles.warning_title}>{this.state.login_result}</Text>
          <Text  style={styles.warning_title}>{this.state.token}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1, 
    backgroundColor:"#EEEEEE",
    padding:10
  },
  box: {
  },
  box2: {
     borderWidth:1,
  },
  title:{
    color:'green', 
    fontSize:30,
    margin:5,
    padding:5,
  },
  warning_title:{
    fontSize:30,
    color:"red",
  },
  input:{
    backgroundColor:'#EEEEEE',
    height:60,
    borderWidth:1,
    margin:5,
    fontSize: 20,
    padding:5,
  },
  touchable:{
    alignItems: 'center',
    margin:5,
  },
  submit_button:{
    backgroundColor:"black",
    color:"white",
    padding:10,
    fontSize: 30, 
  },
});

