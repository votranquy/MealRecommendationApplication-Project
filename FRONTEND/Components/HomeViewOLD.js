import React, { Component } from 'react'
import { Text, View } from 'react-native'
import ScrollingButtonMenu from 'react-native-scrolling-button-menu';
// import ListFood from "./ListFood";
import HomePage from "./HomePage";
import Category from "./Category";
import NearMe from "./NearMe";
import Random from "./Random";
import Trend from "./Trend";
import Header from "./Header";
import Login from './Login';

//define menu
let menus = [
  {
     text:'Tốp',
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
      tabView:"Tốp",
    }
  }
  onPressButtonMenu(menu) {
    //console.log(menu.text);
    this.setState({
      tabView: menu.text,
    })
  }
  render() {
    
    const mainJSX = this.state.tabView =="Tốp" ? <HomePage navigator={this.props.navigator}/>
    : (this.state.tabView=="Danh Mục" ? <Category navigator={this.props.navigator}/> 
    : (this.state.tabView=="Random" ? <Random navigator={this.props.navigator}/> 
    : (this.state.tabView=="Gần Tôi" ? <NearMe navigator={this.props.navigator}/>
    :<Trend navigator={this.props.navigator}/>))) ;

    return (
      <View style={{flex:1}}>
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
