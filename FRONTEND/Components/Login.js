import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,

} from 'react-native';
import {firebaseApp} from "./FirebaseConfig.js";

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
    }
  }


  clickLogin(){
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      Alert.alert(
        'Success',
        'Dang nhap thanh cong'+ this.state.email,
        [
          { text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
          {text: 'OK', onPress: () => this.props.gotoWelcome()},
        ],
        {cancelable: false},
      )
      this.setState({
        email:"",
        password:"",
      })
    })
    .catch(function(error) {
      Alert.alert(
        'Fail',
        'Dang nhap that bai',
        [
          { text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
          {text: 'OK', onPress: () =>console.log('OK pressed')},
        ],
        {cancelable: false},
      )
    });
  }

  gotoWelcome(){
    const {navigator} = this.props;
    navigator.push({name:"welcome"});
  }

  render() {
    return (
      <View style={styles.wrapper}>

        <View style={styles.box}> 
          <Text> LOGIN BOX</Text>
        </View>

        <View style={styles.box}> 
          <Text style={styles.title}>Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=> this.setState({email:text})}
            value={this.state.email}
            placeholder="email"
          />
        </View>

        <View style={styles.box}> 
          <Text style={styles.title}>Password:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=> this.setState({password:text})}
            value={this.state.password}
            placeholder="password"
          />
        </View>

        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={()=>this.clickLogin()}
            >
            <Text style={styles.submit_button}>LOGIN</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.box}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={()=>{this.props.gotoRegister()}}
          >
            <Text style={styles.submit_button}>GotoRegister</Text>
          </TouchableOpacity> 
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
    // color:"green",
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

