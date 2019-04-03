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
import App from "./Components/Login.js/index.js";
import NhapMonHoc from "./Components/NhapMonHoc.js";
import DangKy from "./Components/Register.js/index.js";
import Buoi4 from "./Components/Buoi4.js";
import Layout from "./Components/Layout.js";
import TabBar from "./Components/TabBar.js";
import UserMenu from "./Components/UserMenu.js";


export default class MealRecommendationApplicationProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabBar/>
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
