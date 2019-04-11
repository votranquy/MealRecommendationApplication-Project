import React, { Component } from 'react';
import {
  View
} from 'react-native';

//import this
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';

//define menu
let menus = [
    {
       text:'England',
       textColor:'#FFFFFF',
       backgroundColor:'#FF002C',
       borderColor:'#FF002C',
    },
    {
       text:'Australia',
       textColor:'#FFFFFF',
       backgroundColor:'#AC00B1',
       borderColor:'#AC00B1',
    },
    {
       text:'Indonesian',
       textColor:'#FFFFFF',
       backgroundColor:'#5428B7',
       borderColor:'#5428B7',
    },
    {
       text:'USA',
       textColor:'#FFFFFF',
       backgroundColor:'#009C87',
       borderColor:'#009C87',
    },
    {
       text:'Canada',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    },
    {
       text:'Spain',
       textColor:'#FFFFFF',
       backgroundColor:'#388E3C',
       borderColor:'#388E3C',
    }

];

export default class ScrollMenu extends Component {

  onPressButtonMenu(menu) {
    console.log(menu.text);
  }

  render() {
    return (
      //render this
      <ScrollingButtonMenu 
        items={menus}
        style={{padding:5, backgroundColor:'#FFF'}}
        onPress={this.onPressButtonMenu.bind(this)}
      />
    );
  }
}