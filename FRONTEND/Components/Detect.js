import React, { Component } from 'react'
import {
  Navigator,
} from 'react-native';
import NearMe from "../Components/NearMe";
import FoodDetail from "../Components/FoodDetail";
import RestaurantDirection from "../Components/RestaurantDirection";
import SaveBookmark from "../Components/SaveBookmark";
import VoteFood from "../Components/VoteFood";
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
                case "MAP"   :                          return( <RestaurantDirection           navigator={navigator}  food_id={route.food_id}  restaurant_id={route.restaurant_id}                                        /> );
                case "SAVE_BOOKMARK":    return( <SaveBookmark navigator={navigator}     idfood={route.idfood}               />);                                     
                case "VOTE":                           return( <VoteFood        navigator={navigator}     starCount={route.starCount}   comment={route.comment}        id_food={route.id_food}    />);
                case "FOOD_DETAIL"          :    return( <FoodDetail                         navigator={navigator}     food_id={route.food_id}  restaurant_id={route.restaurant_id}  hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator} /> );
              }
          }}
        />
    )
  }
}