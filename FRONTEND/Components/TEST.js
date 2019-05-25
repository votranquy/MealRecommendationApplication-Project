import React from 'react';
import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation';

// import FirstPage from './pages/FirstPage';
// import SecondPage from './pages/SecondPage';
import Home from "./Home";
import BookMark from "./BookMark";
const TabScreen = createMaterialTopTabNavigator(
  {
    Home: { screen: Home },
    BookMark: { screen: BookMark },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#633689',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);

const Tab = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#633689',
      },
      headerTintColor: '#FFFFFF',
      title: 'TabExample',
    },
  },
});

export default Tab;