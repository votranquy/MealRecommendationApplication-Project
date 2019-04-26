import React, { Component } from 'react'
import { 
  Navigator,
} from 'react-native';


import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

export default class App1 extends Component {


  render(){
    return (
      <Navigator
        initialRoute={{name:"login"}}
        renderScene={(route,navigator) =>{
          switch(route.name){
            case "login":return(
              <Login 
                navigator={navigator}
                // gotoRegister = {() =>{ 
                //   navigator.push({name:"register"})
                // }}
                // gotoWelcome = {()=>{
                //   navigator.push({name:"welcome"})
                // }}

              />);
            case "register":return(
              <Register navigator={navigator}
                // gotoLogin = {()=>
                //   navigator.push({name:"login"})
                // }
              />);
            case "welcome":return(
              <Home navigator={navigator}
                
              />
            )
          }
        }}
      />
    )
  }
}