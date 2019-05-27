import React, { Component } from 'react'
import {
  Navigator,
} from 'react-native';

import HomeView     from './HomeView';
import ListFood          from './ListFood';
import FoodDetail     from "./FoodDetail/";
import SaveBookmark from "./SaveBookmark";
export default class Home extends Component{
  render() {
    return(
        <Navigator 
          style={{flex:1, backgroundColor:"#EEE"}}
          initialRoute={{ name: "HOME_VIEW" }}
          renderScene={(route, navigator) => {
              switch(route.name){
                case "HOME_VIEW" :          return( <HomeView        navigator={navigator}    open={this.props.open}           /> );
                case "LIST_FOOD"   :          return( <ListFood           navigator={navigator}                                                     /> );
                case "SAVE_BOOKMARK": return(<SaveBookmark navigator={navigator}     idfood={route.idfood}               />);
                default                        :          return( <FoodDetail       navigator={navigator}     food={route.food}                    /> );
              }
          }}
        />
    )
  }
}