//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Dimensions, Alert} from 'react-native';
import MapView from 'react-native-maps';
import theme from "../theme";
import getNearRestaurantApi from "../api/getNearRestaurantApi";
const {height , width} = Dimensions.get('window'); 

export default class NearMe extends Component {
    constructor(props){
        super(props);
        this.state={
            listRestaurant:[],
            region:{
                latitude:16.062313,
                longitude: 108.217108,
                latitudeDelta:0.01,
                longitudeDelta:0.01,
            },
            marker:{
                latitude: 16.062313,
                longitude: 108.217108,
            }
        }
    }

    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                // const location = JSON.stringify(position);
                this.setState({ 
                    region:{
                        latitude: position.coords.latitude,
                        longitude:  position.coords.longitude,
                        latitudeDelta:0.01,
                        longitudeDelta:0.01,
                    },
                    marker:{
                        latitude:  position.coords.latitude,
                        longitude: position.coords.longitude,
                    }
                 });
            },
           (error) => alert(error.message),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        )

        getNearRestaurantApi(this.state.marker.latitude,this.state.marker.longitude)
        .then(responseJsonNearRestaurant =>{
          if(responseJsonNearRestaurant.result === "success"){
            this.setState({
              listRestaurant:  responseJsonNearRestaurant.data,
            });
            console.log("RESTAURANT",this.state.listRestaurant);
          }else{
            console.log('GETRESTAURANT_ERROR');
            this.setState({
                listRestaurant:[],
            });
          }
        })
        .catch(error=>{
          console.log('ERROR',error);
          this.setState({
            listRestaurant:[],
          });
        });
    }

    render() {
        return (
            <View style={styles.container}>  
                <MapView
                    style={{flex:1,height:height, width:width,}}
                    initialRegion={this.state.region}
                >
                <MapView.Marker 
                  coordinate={this.state.marker} 
                  title={"Vị trí của bạn"} 
                    // description={this.state.marker}
                    image={theme.Image.iCon.RedFlag}
                     pinColor={"pink"}
                  >

                {this.state.listRestaurant.map(marker => (
                        <MapView.Marker 
                            coordinate={{        
                                latitude: parseFloat(marker.latitude),
                                longitude: parseFloat(marker.longitude),
                            }} 
                            title={marker.restaurant_id}
                            description={marker.address}
                            key={marker.restaurant_id}
                        />
                    ))}

                  </MapView.Marker>
              </MapView>



            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderColor:"red",
        borderWidth:1,
    },
});


