import React, { Component } from 'react';
import { Navigator } from 'react-native';

import  BookMarkView from './BookMarkView';
import FoodDetail from './FoodDetail';

export default class BookMark extends Component {
    render() {
        const { bookmarkArray } = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'BOOKMARK_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'BOOKMARK_VIEW': return <BookMarkView navigator={navigator} bookmarkArray={bookmarkArray} />;
                        default: return <FoodDetail navigator={navigator} food={route.food}/>;
                    }
                }}
            />
        );
    }
}


