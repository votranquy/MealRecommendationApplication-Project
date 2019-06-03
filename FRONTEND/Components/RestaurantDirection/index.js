import React, { Component } from 'react';
import { 
    View,
    Text, 
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import MapView from 'react-native-maps';
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
    { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
  );
}

  componentDidMount(){
    this.getLocation();
  }


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
