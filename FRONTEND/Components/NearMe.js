import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    StatusBar, 
    Dimensions, 
    Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import theme from "../theme";
// import Polyline from '@mapbox/polyline';
import getNearRestaurantApi from "../api/getNearRestaurantApi";
import Toast, {DURATION} from 'react-native-easy-toast';
const {height , width} = Dimensions.get('window'); 

export default class NearMe extends Component {
    constructor(props){
        super(props);
        this.state={

            isShowButton: true,
            isGetLocationSuccess: false,
            isShowMarker: false,
            listRestaurant:[],

            region:{
                latitude:16.0720687,
                longitude: 108.1541584,
                latitudeDelta:0.01,
                longitudeDelta:0.01,
            },

            markers: [],

            marker:{
                latitude:16.0720757,
                longitude: 108.15416,
                id: 0,
            },
        }
    }


    // gotoDetail(food_id, restaurant_id){
    //     const {navigator} = this.props;
    //     console.log(food_id);
    //     console.log(restaurant_id);
    //     navigator.push({name: "FOOD_DETAIL",food_id, restaurant_id});
    // }

    gotoDetail(food_id,restaurant_id){
        const {navigator} = this.props;
        console.log(food_id);
        console.log(restaurant_id);
        navigator.push({name: "FOOD_DETAIL",food_id, restaurant_id});
    }


    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position);
                this.setState({ 
                    isGetLocationSuccess: true,
                    region:{
                        latitude: position.coords.latitude,
                        longitude:  position.coords.longitude,
                        latitudeDelta:0.1,
                        longitudeDelta:0.1,
                    },
                    marker:{
                        latitude:  position.coords.latitude,
                        longitude: position.coords.longitude,
                        id: 1,
                    }
                 });
                 this.refs.toast.show('Lấy thông tin vị trí thành công');
            },
           (error) => {
               console.log('aaaaa',error); 
               this.refs.toast.show('Lấy thông tin vị trí thất bại');

        },
            {enableHighAccuracy: true, timeout: 60000, maximumAge: 3000 }
        )
    }

    reGetNearRestaurant(){

        getNearRestaurantApi(this.state.marker.latitude,this.state.marker.longitude)
        .then(responseJsonNearRestaurant =>{
          if(responseJsonNearRestaurant.result == "success"){
            mang = responseJsonNearRestaurant.data;
            // console.log("RESTAURANT",mang);
            // for(location of mang){
            //     arrayMarkers.push({
            //         latitude: parseFloat(location.latitude),
            //         longitude: parseFloat(location.longitude),
            //         restaurant_name: location.food_name,
            //         restaurant_id:   parseFloat(location.restaurant_id),
            //         food_name: location.name,
            //         food_id: parseFloat(location.id),
            //         rate:location.rate,
            //         address: location.address,
            //         image: location.image,
            //         category: location.category,
            //     })
            // }
            this.setState({
                // markers: arrayMarkers,
                listRestaurant:mang,
                isShowMarker: true,
            });
          }else{
            console.log('GETRESTAURANT_ERROR');
          }
        })
        .catch(error=>{
          console.log('ERROR',error);
        });
    }




    renderMarker(){
        markerArr=[];

        for(markerX of this.state.markers){
            console.log(markerX);
            markerArr.push(
                <MapView.Marker 
                    coordinate={{
                            latitude: parseFloat(markerX.latitude),
                            longitude: parseFloat(markerX.longitude),
                    }}
                    title={markerX.food_name}
                    // onCalloutPress={()=> this.gotoDetail(markerX.id,markerX.restaurant_id)}
                    onCalloutPress={ ()=> alert(markerX.id +' '+markerX.restaurant_id) }
                    description={markerX.id+' '+ markerX.restaurant_id +" "+markerX.address} //marker.address
                    key={markerX.id}
                    image={theme.Image.iCon.Restaurant}
                >  
                </MapView.Marker>
            )
        }
        // for(i=0; i<this.state.markers.length;i++){
        //     markers[i] =
        //         <MapView.Marker 
        //         coordinate={this.state.markers[i]}
        //         title={this.state.markers[i].food_name}
        //         // onCalloutPress={()=> this.gotoDetail(markerX.food_id,markerX.restaurant_id)}
        //         onCalloutPress={ ()=> alert(this.state.markers[i].food_id +' '+this.state.markers[i].restaurant_id) }
        //         description={this.state.markers[i].food_id+' '+ this.state.markers[i].restaurant_id +" "+this.state.markers[i].address} //marker.address
        //         key={this.state.markers[i].restaurant_id}
        //         image={theme.Image.iCon.Restaurant}
        //     >  
        //     </MapView.Marker>
        // }

        return markerArr;
    }



    
    render() {
        return (
              <View style={styles.container}>  
                <MapView
                    style={{flex:1,height:height, width:width,}}
                    initialRegion={this.state.region}
                    showsUserLocation={true}
                >

                {this.state.listRestaurant.map(restaurant => (
                                <MapView.Marker 
                                    coordinate={{
                                            latitude: parseFloat(restaurant.latitude),
                                            longitude: parseFloat(restaurant.longitude),
                                    }}
                                    title={restaurant.name}
                                    onCalloutPress={()=> this.gotoDetail(restaurant.id,restaurant.restaurant_id)}
                                    // onCalloutPress={ ()=> alert(restaurant.id +' '+restaurant.restaurant_id) }
                                    description={restaurant.address} //marker.address
                                    key={restaurant.id}
                                    image={theme.Image.iCon.Restaurant}
                                >  
                                </MapView.Marker>

                ))}
                {/* { (this.state.isGetLocationSuccess && this.state.isShowMarker) ? this.renderMarker() :<View/> } */}
              </MapView>

              {this.state.isShowButton ?
              <TouchableOpacity style={styles.btnComment}  onPress={()=> {this.setState({isShowButton: false});this.reGetNearRestaurant();}}>
                  <Text style={styles.txtButton}>Tìm quán ăn gần bạn</Text>
              </TouchableOpacity>
              : <View/>}
              <Toast ref="toast"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderColor:"red",
        borderWidth:1,
    },
    click:{
        backgroundColor:"green",
    },
    btnComment:{
        backgroundColor: theme.Color.NiceRed,
        alignItems:"center",
        padding:10,
        width: "100%"
      },
      txtButton:{
        color: theme.Color.White,
        fontWeight:"bold",
      },
});


