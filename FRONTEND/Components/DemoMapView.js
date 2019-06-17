import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MapView from 'react-native-maps';
export default class DemoMapView extends Component {
  constructor(props){
    super(props);
    arrayMarker=[
      {
        latitude: 21.024,
        longitude:105.68393,
      }
    ];
    this.state={
      region:{
        latitude: 16.074301,
        longitude: 108.153342,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      },
      markers:arrayMarker,
    }
  }
  onPress(data){
    let latitude = data.nativeEvent.coordinate.latitude;
    let longitude = data.nativeEvent.coordinate.longitude;
    arrayMarker.push({
      latitude:latitude,
      longitude:longitude,
    });
    this.setState({
      markers:arrayMarker,
    });
  }

  renderMarker(){
    markers=[];
    for(marker of this.state.makers){
      marker.push(
        <MapView.Marker title={makers.latitude} 
          description={"HERE"}
          coordinate={marker}
        />
      )
    }
  }
  render() {
    return (
      <View style={{flex:1, borderColor:"black",borderWidth:5}}>
        <MapView
          style={{flex:1}}
          region={this.state.region}
          initialRegion={this.state.region}
          onPress={this.onPress.bind(this)}
        >
          <MapView.Marker coordinate={this.state.region} title={"Here"} description={"No"} />
          {this.renderMarker()}
        </MapView>
      </View>
    )
  }
}