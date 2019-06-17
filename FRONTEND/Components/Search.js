import React, { Component } from 'react';
import { Navigator } from 'react-native';

import  SearchView from './SearchView';
import FoodDetail from './FoodDetail';
// import BookMarkList from './BookMarkList';
// import SaveBookmark from './SaveBookmark';
import RestaurantDirection from "./RestaurantDirection";
export default class BookMark extends Component {
    render() {
        // const { bookmarkArray } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'SEARCHVIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'SEARCHVIEW': return <SearchView navigator={navigator} />;
                     //    case 'BOOKMARK_LIST' : return <BookMarkList  navigator={navigator} idbookmark={route.idbookmark}/>
                        case "MAP"   :                  return( <RestaurantDirection           navigator={navigator}  food_id={route.food_id}  restaurant_id={route.restaurant_id}                                                                           /> );
                        case "SAVE_BOOKMARK": return(<SaveBookmark navigator={navigator}     idfood={route.idfood}               />);
                        case "FOOD_DETAIL"   : return(<FoodDetail navigator={navigator}  KEY={route.KEY}   food_id={route.food_id}  restaurant_id={route.restaurant_id}  hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator} />);
                    }
                }}
            />
        );
    }
}


