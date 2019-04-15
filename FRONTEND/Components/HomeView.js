import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Header from "./Header";
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';
import ListFood from "./ListFood";
import HomePage from "./HomePage";

//define menu
let menus = [
  {
     text:'Món Hót',
     textColor:'#FFFFFF',
     backgroundColor:'#FF002C',
     borderColor:'#FF002C',
  },
  {
     text:'Danh Mục',
     textColor:'#FFFFFF',
     backgroundColor:'#AC00B1',
     borderColor:'#AC00B1',
  },
  {
     text:'Random',
     textColor:'#FFFFFF',
     backgroundColor:'#5428B7',
     borderColor:'#5428B7',
  },
  {
     text:'Gần Tôi',
     textColor:'#FFFFFF',
     backgroundColor:'#009C87',
     borderColor:'#009C87',
  },
  {
     text:'Phổ Biến',
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

export default class HomeView extends Component {
  constructor(props){
    super(props);
    this.state={
      tabView:"Món Hót",
    }
  }
  onPressButtonMenu(menu) {
    //console.log(menu.text);
    this.setState({
      tabView: menu.text,
    })
  }
  render() {
    const mainJSX = <HomePage />;
    return (
      <View style={{flex:1, backgroundColor:'#86AAEE'}}>
        <Header/>
        <ScrollingButtonMenu 
          items={menus}
          style={{padding:5, backgroundColor:'#FFF'}}
          onPress={this.onPressButtonMenu.bind(this)}
          selectedOpacity={0.1}
        />
        {mainJSX}
      </View>
    )
  }
}
