import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps';
export default class DemoMapView extends Component {
  constructor(props){
    super(props);
    this.state={
      region:{
        latitude: 16.074301,
        longitude: 108.153342,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    }
  }
  render() {
    return (
      <View style={{flex:1, borderColor:"black",borderWidth:5}}>
        <MapView
        style={{flex:1}}
        region={this.state.region}
        >
        </MapView>
      </View>
    )
  }
}