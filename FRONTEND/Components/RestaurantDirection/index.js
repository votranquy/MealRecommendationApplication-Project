import React, { Component } from 'react';
import { 
    View,
    Text, 
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';
import theme from '../../theme';
import MapViewDirections from 'react-native-maps-directions';
import styles from "./styles";
const GOOGLE_MAPS_APIKEY="AIzaSyAG2BnUcY2mW5_VY8Q6cVEabhl9l_Rokkk";
const {height , width} = Dimensions.get('window'); 

export default class RestaurantDirection extends Component {
  constructor(props){
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'true',
      cordLatitude:-6.23,
      cordLongitude:106.75,
      }
      // this.mergeLot = this.mergeLot.bind(this);
  }

  goBack() {
      const { navigator } = this.props;
      navigator.pop();
  }


getLocation(){
  navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
      // this.mergeLot();
    },
    (error) => this.setState({ error: error.message }),
    { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
  );
}

  componentDidMount(){
    this.getLocation();
  }

  // mergeLot(){
  //   if (this.state.latitude != null && this.state.longitude!=null)
  //    {
  //      let concatLot = this.state.latitude +","+this.state.longitude
  //      this.setState({
  //        concat: concatLot
  //      }, () => {
  //        this.getDirections(concatLot, "-6.270565,106.759550");
  //      });
  //    }
  //  }


//    async getDirections(startLoc, destinationLoc) {
//     try {
//         let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${ startLoc }&destination=${ destinationLoc }`)
//         let respJson = await resp.json();
//         let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
//         let coords = points.map((point, index) => {
//             return  {
//                 latitude : point[0],
//                 longitude : point[1]
//             }
//         })
//         this.setState({coords: coords})
//         this.setState({x: "true"})
//         return coords
//     } catch(error) {
//       console.log('masuk fungsi')
//         this.setState({x: "error"})
//         return error
//     }
// }


  render() {

    const {food_name,  address, latitude, longitude} = this.props.location;
    const mapJSX=(
            <View style={styles.ctnMapView}>
              <View/>
              <View style={styles.ctnHeaderMap}>
                <View style={styles.ctnCloseButton}></View>
                <View style={styles.ctnHeaderText}>
                  <Text style={styles.txtHeader} numberOfLines={1}>Map</Text>
                </View>
                <TouchableOpacity onPress={() => this.goBack()} style={styles.ctnHeaderIcon}>
                  <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
                </TouchableOpacity>
              </View>
              <View style={styles.ctnBodyMap}>
              {
                parseFloat(latitude) > 0 
                ? 
                
                <MapView
                showsUserLocation={true}
                style={{flex:1,height:height, width:width,}}
                initialRegion={{        
                  latitude: parseFloat(latitude),
                  longitude: parseFloat(longitude),
                  latitudeDelta: 0.5,
                  longitudeDelta: 0.5,}}>
                
                {/* Destination */}
                <MapView.Marker 
                  coordinate={{        
                    latitude: parseFloat(latitude),
                    longitude: parseFloat(longitude),
                  }} 
                  title={food_name} 
                  description={address}
                  pinColor={"pink"}
                  >
                  </MapView.Marker>

                  {/* Your location */}
                  {/* {!!this.state.latitude && !!this.state.longitude && 
                  <MapView.Marker
                    coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
                    title={"Your Location"}
                  />} */}

                  {/* {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapView.Polyline
                              coordinates={this.state.coords}
                              strokeWidth={2}
                              strokeColor="red"/>
                  } */}

                  {/* {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapView.Polyline
                            coordinates={[
                                {latitude: this.state.latitude, longitude: this.state.longitude},
                                {latitude: this.state.cordLatitude, longitude: this.state.cordLongitude},
                            ]}
                            strokeWidth={2}
                            strokeColor="red"/>
                  } */}

                  {/* //Direction */}
                  {!!this.state.latitude && !!this.state.longitude  && //&& this.state.x == 'error'
                  <MapViewDirections
                    origin={{
                      latitude:this.state.latitude,
                      longitude:this.state.longitude
                    }}
                    destination={{        
                      latitude: parseFloat(latitude),
                      longitude: parseFloat(longitude),
                    }} 
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={10}
                    strokeColor="red"
                  />
                  }

              </MapView>
              :<Text>Bản đồ hiện không khả dụng</Text>
              } 
              </View> 
            </View>
          // </Modal>
  );


  






  return (
      <View style={styles.wrapper}>
            {mapJSX}
        </View>
    );
  }
}
