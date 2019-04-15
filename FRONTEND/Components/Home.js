import React, { Component } from 'react'
import { ScrollView, Text, Navigator } from 'react-native';

import HomeView from './HomeView';
import ListFood from './ListFood';
import FoodDetail from './FoodDetail';

export default class Home extends Component{
  render() {
    const { types, topProducts } = this.props;
    return(
      <Navigator
        initialRoute={{ name: 'HOME_VIEW' }}
        renderScene={(route, navigator) => {
          switch(route.name){
            case 'HOME_VIEW': return <HomeView 
              navigator={navigator}
              // types={types} topProducts={topProducts}
              />;
            case 'LIST_FOOD': return <ListFood 
              navigator={navigator}
            />;
            default: return <FoodDetail 
              navigator={navigator} 
              food={route.property}
            />;
          }
        }}
      />
    )
  }
}