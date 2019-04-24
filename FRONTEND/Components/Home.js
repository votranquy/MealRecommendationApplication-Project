import React, { Component } from 'react'
import {
  View, 
  Navigator 
} from 'react-native';

import HomeView from './HomeView';
import ListFood from './ListFood';
import Header from "./Header";
import FoodDetail from "./FoodDetail";


export default class Home extends Component{
  render() {
    return(
        <Navigator 
          style={{flex:1, backgroundColor:"red"}}
          initialRoute={{ name: "HOME_VIEW" }}
          renderScene={(route, navigator) => {
            switch(route.name){
              case "HOME_VIEW": return( <HomeView navigator={navigator}/> );
              case "LIST_FOOD": return( <ListFood navigator={navigator} /> );
              default         : return( <FoodDetail navigator={navigator} food={route.property}/> );
            }
          }}
        />
    )
  }
}