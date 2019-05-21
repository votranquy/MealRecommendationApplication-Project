import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import App from './Components/App';
import AppB from "./Components/Introduction";

export default class MealRecommendationApplicationProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  },
});
AppRegistry.registerComponent('MealRecommendationApplicationProject', () => MealRecommendationApplicationProject);
