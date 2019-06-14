
import React, { Component } from 'react';
import {
    Navigator,
  } from 'react-native';
  import SuggestionView from "../Components/SuggestionView";
  import FoodDetail from "../Components/FoodDetail";
  import RestaurantDirection from "../Components/RestaurantDirection";
  import SaveBookmark from "../Components/SaveBookmark";
  import VoteFood from "../Components/VoteFood";
  export default class Home extends Component{
    render() {
      return(
          <Navigator 
            style={{flex:1, backgroundColor:"white"}}
            initialRoute={{ name: "SUGGESTION" }}
            renderScene={(route, navigator) => {
                switch(route.name){
                  case "SUGGESTION"         :    return( <SuggestionView                                 navigator={navigator}  />);  
                  case "MAP"   :                          return( <RestaurantDirection           navigator={navigator}  food_id={route.food_id}  restaurant_id={route.restaurant_id}                                        /> );
                  case "SAVE_BOOKMARK":    return( <SaveBookmark navigator={navigator}     idfood={route.idfood}               />);                                     
                  case "VOTE":                           return( <VoteFood        navigator={navigator}     starCount={route.starCount}   comment={route.comment}        id_food={route.id_food}    />);
                  case "FOOD_DETAIL"          :    return( <FoodDetail navigator={navigator}    KEY={route.KEY}  food_id={route.food_id}  restaurant_id={route.restaurant_id}  hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator} /> );
                }
            }}
          />
      );
    }
  }
// import ListFood          from './ListFood';
// import FoodDetail     from "./FoodDetail/";
// import SaveBookmark from "./SaveBookmark";
// import RestaurantDirection from "./RestaurantDirection";
// import VoteFood from "./VoteFood";
