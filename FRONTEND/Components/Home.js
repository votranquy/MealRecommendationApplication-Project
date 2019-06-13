import React, { Component } from 'react'
import {
  Navigator,
} from 'react-native';

import HomeView     from './HomeView';
import ListFood          from './ListFood';
import FoodDetail     from "./FoodDetail/";
import SaveBookmark from "./SaveBookmark";
import RestaurantDirection from "./RestaurantDirection";
import VoteFood from "./VoteFood";
export default class Home extends Component{
  render() {
    return(
        <Navigator 
          style={{flex:1, backgroundColor:"#EEE"}}
          initialRoute={{ name: "HOME_VIEW" }}
          renderScene={(route, navigator) => {
              switch(route.name){
                case "HOME_VIEW" :             return(  <HomeView        navigator={navigator}    open={this.props.open}           /> );
                case "LIST_FOOD"   :             return(  <ListFood           navigator={navigator}  />);  
                case "MAP"   :                          return( <RestaurantDirection           navigator={navigator}  food_id={route.food_id}  restaurant_id={route.restaurant_id}                                        /> );
                case "SAVE_BOOKMARK":    return( <SaveBookmark navigator={navigator}     idfood={route.idfood}               />);
                case "VOTE":                           return( <VoteFood        navigator={navigator}     starCount={route.starCount}   comment={route.comment}        id_food={route.id_food}    />);
                case "FOOD_DETAIL"     :       return( <FoodDetail       navigator={navigator}     food_id={route.food_id}  restaurant_id={route.restaurant_id}  hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator} /> );
              }
          }}
          configureScene={route => {
              if (route.name === 'FOOD_DETAIL') return Navigator.SceneConfigs.FloatFromRight;
              return Navigator.SceneConfigs.FloatFromLeft;
          }}
        />
    )
  }
}