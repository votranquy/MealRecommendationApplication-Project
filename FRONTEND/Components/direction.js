import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 38.3318450, longitude: -122.0296000};
const GOOGLE_MAPS_APIKEY="AIzaSyAG2BnUcY2mW5_VY8Q6cVEabhl9l_Rokkk";

class Example extends Component {

  constructor(props) {
    super(props);
  }

 
  render() {
    return (
      <MapView
        initialRegion={{
          latitude: 37.3318456,
          longitude: -122.0296002,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={StyleSheet.absoluteFill}
        // ref={c => this.mapView = c}
        // onPress={this.onMapPress}
      >
        <MapView.Marker coordinate={origin} />
        <MapView.Marker coordinate={destination} />
        <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="red"
        />
      </MapView>
    );
  }
}

export default Example;