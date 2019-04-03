/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from "./Components/Login.js";
import RefreshListView from "./Components/RefreshListView.js";
import Register from "./Components/Register.js";
import SideMenu from "./Components/SideMenu.js";
import Layout from "./Components/Layout.js";
import TabBar from "./Components/TabBar.js";
import UserMenu from "./Components/UserMenu.js";


export default class MealRecommendationApplicationProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Register/> */}
        <Login/>
        {/* <RefreshListView /> */}
        {/* <SideMenu/> */}
        {/* <TabBar/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


AppRegistry.registerComponent('MealRecommendationApplicationProject', () => MealRecommendationApplicationProject);
