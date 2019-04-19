import React, { Component } from 'react'
import { 
  Navigator,
} from 'react-native';

import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";
export default class App1 extends Component {
  
  renderScene(route,navigator){
    switch(route.name){
      case "login":return(
        <Login 
          gotoRegister = {() =>{ 
            navigator.push({name:"register"})
          }}
          gotoWelcome = {()=>{
            navigator.push({name:"welcome"})
          }}
        />);
      case "register":return(
        <Register
          gotoLogin = {()=>
            navigator.push({name:"login"})
          }
        />);
      case "welcome":return(
        <Welcome
          
        />
      )
    }
  }

  render(){
    return (
      <Navigator
        initialRoute={{name:"login"}}
        renderScene={this.renderScene}
      />
    )
  }
}