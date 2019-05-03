import React,{Component} from "react";
import {
  View, 
  StyleSheet, 
  Image,
  Text,

} from "react-native";
import TabNavigator from 'react-native-tab-navigator';

import UserMenu from "./UserMenu";
import Home from "./Home";
import App1 from "./App1";

export default class Shop extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: "home"
    }
  }

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#86AAEE'}}>
        <TabNavigator >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={require("../Image/whitehome.png")} />}
            renderSelectedIcon={() => <Image source={require("../Image/greenhome.png")} />}
            onPress={() => this.setState({ selectedTab: 'home' })}
            selectedTitleStyle={{ color: '#2ECC97', fontFamily: 'Avenir' }}
            >
            <Home open={this.props.open}/>
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'save'}
            title="Save"
            renderIcon={() => <Image source={require("../Image/whitebookmark.png")} />}
            renderSelectedIcon={() => <Image source={require("../Image/greenbookmark.png")} />}
            onPress={() => this.setState({ selectedTab: 'save' })}
            selectedTitleStyle={{ color: '#2ECC97', fontFamily: 'Avenir' }}
            >
            <View style={{flex:1,backgroundColor:"white"}}></View>
          </TabNavigator.Item>
          {/* <TabNavigator.Item
            selected={this.state.selectedTab === 'bell'}
            title="Notification"
            renderIcon={() => <Image source={require("../Image/bell_white.png")} />}
            renderSelectedIcon={() => <Image source={require("../Image/bell_black.png")} />}
            onPress={() => this.setState({ selectedTab: 'bell' })}>
            <View style={{flex:1,backgroundColor:"white"}}></View>
           
          </TabNavigator.Item> */}
          <TabNavigator.Item
            selected={this.state.selectedTab === 'user'}
            title="User"
            renderIcon={() => <Image source={require("../Image/whiteuser.png")} />}
            renderSelectedIcon={() => <Image source={require("../Image/greenuser.png")} />}
            onPress={() => this.setState({ selectedTab: 'user' })}
            selectedTitleStyle={{ color: '#2ECC97', fontFamily: 'Avenir' }}
            >
            <UserMenu/>
          </TabNavigator.Item>

        </TabNavigator>
      </View>
   
   );
  }
}

var styles = StyleSheet.create({
  input:{
    backgroundColor:'#EEEEEE',
    height:60,
    borderWidth:1,
    margin:5,
    fontSize: 20,
  },
  wrapper: {
    flex:1,
    backgroundColor: "white", 
    padding:10
  },
  touchable:{
    margin:5,
    backgroundColor:"#EEEEEE",
    padding:10,
    flexDirection:"row"
  },
  plus: {
    color:"black",
    fontSize: 20, 
  },
});