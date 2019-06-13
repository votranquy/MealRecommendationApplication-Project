import React, { Component } from 'react'
import {
  Navigator,
} from 'react-native';
import NearMe from "../Components/NearMe";
import FoodDetail from "../Components/FoodDetail";
import RestaurantDirection from "../Components/RestaurantDirection";
import SaveBookmark from "../Components/SaveBookmark";

export default class Home extends Component{
  render() {
    return(
        <Navigator 
          style={{flex:1, backgroundColor:"white"}}
          initialRoute={{ name: "NEAR_ME" }}
          renderScene={(route, navigator) => {
              switch(route.name){
                case "NEAR_ME"                :    return( <NearMe                                  navigator={navigator}  />);  
                case "CATEGORYFOOD"   :    return( <CategoryFood                      navigator={navigator} />);
                case "MAP"                          :   return( <RestaurantDirection           navigator={navigator}  location={route.location}  /> );
                case "SAVE_BOOKMARK" :    return(<SaveBookmark                    navigator={navigator}     idfood={route.idfood}               />);                                            
                case "FOOD_DETAIL"          :    return( <FoodDetail                         navigator={navigator}     food_id={route.food_id}  restaurant_id={route.restaurant_id}  hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator} /> );
              }
          }}
        />
    )
  }
}