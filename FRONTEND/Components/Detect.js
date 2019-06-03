import React, { Component } from 'react'
import {
  Navigator,
} from 'react-native';
import NearMe from "../Components/NearMe";
export default class Home extends Component{
  render() {
    return(
        <Navigator 
          style={{flex:1, backgroundColor:"#EEE"}}
          initialRoute={{ name: "HOME_VIEW" }}
          renderScene={(route, navigator) => {
              switch(route.name){
                case "NEAR_ME"                :    return( <NearMe           navigator={navigator}  />);  
                case "CATEGORYFOOD"   :    return( <CategoryFood           navigator={navigator} />);
                case "MAP"                          :   return( <RestaurantDirection           navigator={navigator}  location={route.location}  /> );
                case "SAVE_BOOKMARK" :    return(<SaveBookmark navigator={navigator}     idfood={route.idfood}               />);                                            
                default                                 :    return( <FoodDetail       navigator={navigator}     food={route.food}                    /> );
              }
          }}
        />
    )
  }
}