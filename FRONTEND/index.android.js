
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// import Login from "./Components/Login.js";
// import RefreshListView from "./Components/RefreshListView.js";
// import Register from "./Components/Register.js";
// import SideMenu from "./Components/SideMenu.js";
// import Layout from "./Components/Layout.js";
import App from "./Components/App";
// import UserMenu from "./Components/UserMenu.js";
// import HomePage from "./Components/HomePage.js";
// import ScrollMenu from "./Components/ScrollMenu";
import App1 from "./Components/App1";

export default class MealRecommendationApplicationProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App1/>
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
