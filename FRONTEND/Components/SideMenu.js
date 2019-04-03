import React,{Component} from "react";
import {
  AppRegistry, View,TouchableOpacity,Text
} from "react-native";
import Drawer from 'react-native-drawer'; //Library

export default class SideMenu extends Component{

  closeControlPanel = () => {
    this._drawer.close()
  };

  openControlPanel = () => {
    this._drawer.open()
  };
  
  render(){
    return(
      <Drawer
        ref={(ref) => this._drawer = ref}
        openDrawerOffset={0.5}
        tapToClose={true}
        content={
          <View style={{flex:1,backgroundColor:'yellow'}}>
            <TouchableOpacity 
              onPress={()=>{this.closeControlPanel()}}
            >
            <Text>CLOSE</Text>
          </TouchableOpacity>
          </View>
        }
      >
        <View style={{flex:1,backgroundColor:'red',padding:50}}>
          <TouchableOpacity 
          onPress={()=>{this.openControlPanel()}}
          >
            <Text>OPEN</Text>
          </TouchableOpacity>
        </View>
      </Drawer>
    );
  }
}