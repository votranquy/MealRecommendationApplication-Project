import React, { Component } from 'react';
import { Navigator } from 'react-native';

import  BookMarkView from './BookMarkView';
import FoodDetail from './FoodDetail';
import BookMarkList from './BookMarkList';
import SaveBookmark from './SaveBookmark';

export default class BookMark extends Component {
    render() {
        // const { bookmarkArray } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'BOOKMARK_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'BOOKMARK_VIEW': return <BookMarkView navigator={navigator} />;
                        case 'BOOKMARK_LIST' : return <BookMarkList  navigator={navigator} idbookmark={route.idbookmark}/>
                        case "SAVE_BOOKMARK": return(<SaveBookmark navigator={navigator}     idfood={route.idfood}               />);
                        default: return <FoodDetail navigator={navigator} food={route.food}/>;
                    }
                }}
            />
        );
    }
}


