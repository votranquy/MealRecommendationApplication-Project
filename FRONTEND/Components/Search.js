import React, { Component } from 'react';
import { Navigator } from 'react-native';

import  SearchView from './SearchView';
import FoodDetail from './FoodDetail';
// import BookMarkList from './BookMarkList';
// import SaveBookmark from './SaveBookmark';
// import RestaurantDirection from "./RestaurantDirection";
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
                        case "MAP"   :                  return( <RestaurantDirection           navigator={navigator}  location={route.location}                                                /> );
                        case "SAVE_BOOKMARK": return(<SaveBookmark navigator={navigator}     idfood={route.idfood}               />);
                        default: return <FoodDetail navigator={navigator} food={route.food}/>;
                    }
                }}
            />
        );
    }
}


