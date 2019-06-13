import React, { Component } from 'react';
import { 
    View,
    Text, 
    Dimensions,
    TouchableOpacity,
    Image,
} from 'react-native';
import MapView, { Polyline }  from 'react-native-maps';
import theme from '../../theme';
import MapViewDirections from 'react-native-maps-directions';
import getFoodInformationAPI from '../../api/getFoodInformationAPI';
import styles from "./styles";
import Toast, {DURATION} from 'react-native-easy-toast';
const GOOGLE_MAPS_APIKEY="AIzaSyAG2BnUcY2mW5_VY8Q6cVEabhl9l_Rokkk";
const {height , width} = Dimensions.get('window'); 

export default class RestaurantDirection extends Component {
  _isMounted = false;
  constructor(props){
    super(props);
    this.state = {
      //Current Location
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords:[],
      x: 'true',
      cordLatitude:-6.23,
      cordLongitude:106.75,
      //Restaurant Inf
      RestaurantLatitude: 0,
      RestaurantLongitude:0,
      RestaurantAddress:"",
      RestaurantName:"",
      FoodName:"",
      }
  }

  goBack() {
      const { navigator } = this.props;
      navigator.pop();
  }


getLocation(){
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // if(this._isMounted){
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
    // }
      // this.mergeLot();
      this.refs.toast.show('Xác định vị trí của bạn thành công!');
    },
    (error) => {}, //this.setState({ error: error.message })
    { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 },
  );
}

getRestaurantLocation(){
  getFoodInformationAPI(this.props.food_id)
    .then((responseJson)=>{
      if(responseJson.result === "success"){
       this.setState({
        RestaurantLatitude: responseJson.data[0].latitude,
        RestaurantLongitude: responseJson.data[0].longitude,
        RestaurantAddress:responseJson.data[0].address,
        RestaurantName: responseJson.data[0].name,
        FoodName: responseJson.data[0].name,
        })
      }
    })
    .catch(error=>{
      console.log('GET_LOCATION_ERROR',error);
    });
}

  componentDidMount(){
    this._isMounted = true;
    this.getRestaurantLocation();
    this.getLocation();
    this.refs.toast.show('Đang xác định vị trí của bạn');
  }


  render() {

    // const {food_name,  address, latitude, longitude} = this.props.location;
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
                (parseFloat(this.state.RestaurantLongitude) > 0 && parseFloat(this.state.latitude) >0)  
                ? 
                <MapView
                  showsUserLocation={true}
                  style={{flex:1,height:height, width:width,}}
                  initialRegion={{        
                  latitude: parseFloat(this.state.RestaurantLatitude),
                  longitude: parseFloat(this.state.RestaurantLongitude),
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01}}>
                
                    {/* //Your location */}
                <MapView.Marker
                  key={0} 
                  coordinate={{        
                    latitude: parseFloat(this.state.latitude),
                    longitude: parseFloat(this.state.longitude),
                  }} 
                  title={"Vị trí hiện tại của bạn"} 
                  pinColor={"pink"}
                  image={theme.Image.iCon.You}
                  >
                </MapView.Marker>
                  

                {/* Restaurant  Marker*/}
                <MapView.Marker
                  key={1} 
                  coordinate={{        
                    latitude: parseFloat(this.state.RestaurantLatitude),
                    longitude: parseFloat(this.state.RestaurantLongitude),
                  }} 
                  title={this.state.FoodName} 
                  description={this.state.RestaurantAddress}
                  pinColor={"pink"}
                  image={theme.Image.iCon.Restaurant}
                  >
                </MapView.Marker>

                  {/* //Direction */}
                  <MapViewDirections
                    origin={{
                      latitude:this.state.latitude,
                      longitude:this.state.longitude,
                    }}
                    destination={{        
                      latitude: parseFloat(this.state.RestaurantLatitude),
                      longitude: parseFloat(this.state.RestaurantLongitude),
                    }} 
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor="blue"
                  />
              </MapView>
              :
              <MapView
              showsUserLocation={true}
              style={{flex:1,height:height, width:width,}}
              initialRegion={{        
              latitude: 16.0551443,
              longitude: 108.1867645,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,}}>
                </MapView>
              } 
              </View> 
              <Toast ref="toast"/>
            </View>
  );


  






  return (
      <View style={styles.wrapper}>
            {mapJSX}
        </View>
    );
  }
}
