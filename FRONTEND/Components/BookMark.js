import React, { Component } from 'react';
import { Navigator } from 'react-native';

import  BookMarkView from './BookMarkView';
import FoodDetail from './FoodDetail';
import BookMarkList from './BookMarkList';
import SaveBookmark from './SaveBookmark';
import RestaurantDirection from "./RestaurantDirection";
export default class BookMark extends Component {
    render() {
        // const { bookmarkArray } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'BOOKMARK_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'BOOKMARK_VIEW': return <BookMarkView navigator={navigator} />;
                        case 'BOOKMARK_LIST' : return <BookMarkList  navigator={navigator} idbookmark={route.idbookmark} hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator} />
                        case "MAP"   :                  return( <RestaurantDirection           navigator={navigator}  food_id={route.food_id}  restaurant_id={route.restaurant_id}                                               /> );
                        case "SAVE_BOOKMARK": return(<SaveBookmark navigator={navigator}     idfood={route.idfood}          hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator}      />);
                        default: return <FoodDetail navigator={navigator}  food_id={route.food_id}  restaurant_id={route.restaurant_id} hiddenTabNavigator={this.props.hiddenTabNavigator}  showTabNavigator={this.props.showTabNavigator}  KEY={route.KEY}/>;
                    }
                }}
            />
        );
    }
}


