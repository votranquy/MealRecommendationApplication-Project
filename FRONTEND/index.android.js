import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import DemeMapview from "./Components/DemoMapView";
import App from './Components/App';
import DemoModal from "./Components/DemoModal";

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
