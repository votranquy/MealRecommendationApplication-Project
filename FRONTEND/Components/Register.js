

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



export default class Register extends Component {

  constructor(props){
    super(props);
    this.state={
      email: "",
      password:"",
    }
  }


  clickRegister(){
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(()=>{
      Alert.alert(
          'Success',
          'Dang ky thanh cong'+ this.state.email,
          [
            { text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
            {text: 'OK', onPress: () => this.props.gotoLogin()},
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
        'Dang ky that bai',
        [
          {text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      )
    });
  }

  gotoLogin(){
    const {navigator} = this.props;
    navigator.push({name:"login"});

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          onChangeText={(text)=> this.setState({email:text})}
          value={this.state.email}
          placeholder="email"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=> this.setState({password:text})}
          value={this.state.password}
          placeholder="password"
        />

        <TouchableOpacity 
          style={styles.touchable}
          onPress={()=>{this.clickRegister()}}
        >
          <Text style={styles.plus}> REGISTER </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.touchable}
          onPress={() => this.props.gotoLogin()}
        >
          <Text style={styles.plus}> GotoLogin </Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  input:{backgroundColor:'#EEEEEE',height:60,borderWidth:1,margin:5,fontSize: 20,},
  wrapper: {flex:1, backgroundColor: "white", padding:10},
  touchable:{alignItems: 'center',margin:5},
  plus: {backgroundColor:"black",color:"white",padding:10,fontSize: 30, },
  result:{},
});

