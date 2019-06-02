import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import App from './Components/App';
// import Tab from './Components/TEST';
// import theme from "./theme";
// import LocationA from "./Components/LocationA";
// import Example from "./Components/direction";
import Example from "./Components/ConfirmCode";
export default class MealRecommendationApplicationProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle="light-content"
          hidden = {false}
          translucent = {false}
          networkActivityIndicatorVisible = {true}
          backgroundColor="#da5350"/>
       <Example/>
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
