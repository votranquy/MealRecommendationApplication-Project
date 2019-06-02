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
import Polyline from '@mapbox/polyline';
import getNearRestaurantApi from "../api/getNearRestaurantApi";
const {height , width} = Dimensions.get('window'); 

// const LocationList=[ {latitude:14.062314,longitude: 109.217108 }, {latitude:14.06239,longitude: 109.217108}]
export default class NearMe extends Component {
    constructor(props){
        super(props);
        arrayMarkers=[
            // {
            //     latitude:16.062313,
            //     longitude: 108.217108
            // }
        ];
        this.state={
            listRestaurant:[],
            region:{
                latitude:16.062313,
                longitude: 108.217108,
                latitudeDelta:0.01,
                longitudeDelta:0.01,
            },
            markers: arrayMarkers,
            marker:{
                latitude:16.062313,
                longitude: 108.217108,
                idlocation: 0,
            },
        }
    }


    gotoDetail(food){
        const {navigator} = this.props;
        navigator.push({name: "FOOD_DETAIL",food});
    }


    componentWillMount(){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                console.log(position);
                this.setState({ 
                    region:{
                        latitude: position.coords.latitude,
                        longitude:  position.coords.longitude,
                        latitudeDelta:0.1,
                        longitudeDelta:0.1,
                    },
                    marker:{
                        latitude:  position.coords.latitude,
                        longitude: position.coords.longitude,
                        idlocation: 0,
                    }
                 });
            },
           (error) => console.log('aaaaa',error),
            {enableHighAccuracy: true, timeout: 60000, maximumAge: 3000 }
        )

        getNearRestaurantApi(this.state.marker.latitude,this.state.marker.longitude)
        .then(responseJsonNearRestaurant =>{
          if(responseJsonNearRestaurant.result === "success"){
            // this.setState({
            // //   listRestaurant:  responseJsonNearRestaurant.data,
            // listRestaurant:LocationList,
            // });
            // console.log("RESTAURANT",this.state.listRestaurant);
            mang = responseJsonNearRestaurant.data;
            console.log("RESTAURANT",mang);
            for(location of mang){
                arrayMarkers.push({
                    latitude: parseFloat(location.latitude),
                    longitude: parseFloat(location.longitude),
                    idlocation: location.id,
                    food_name: location.food_name,
                    rate:location.rate,
                    address: location.address,
                    image_path: location.image_path,
                    category: location.category,
                    restaurant_id: location.restaurant_id,
                    name: location.name,
                    image: location.image,
                })

            }
            this.setState({markers: arrayMarkers});

            // console.log("RESTAURANT",this.state.markers);

          }else{
            console.log('GETRESTAURANT_ERROR');
            this.setState({
                // listRestaurant:[],
            });
          }
        })
        .catch(error=>{
          console.log('ERROR',error);
            this.setState({
                // listRestaurant:[],
            });
        });
    }


    renderMarker(){
        markers=[];
        for(marker of this.state.markers){
            markers.push(
                <MapView.Marker 
                    coordinate={marker}
                    title={marker.name}
                    description={marker.address}
                    key={marker.idlocation}
                    image={theme.Image.iCon.RedFlag}
                    // showCallout
                    // onPress={() => this.gotoDetail(marker)}
                    onCalloutPress={()=> this.gotoDetail(marker)}
                >
                    {/* <TouchableOpacity 
                    activeOpacity={0.8}  
                    onPress={() => this.gotoDetail(marker)}
                    style={styles.click}
                    >
                        <Text>Click</Text>
                    </TouchableOpacity> */}
                        
                </MapView.Marker>

            )
        }
        return markers;
    }

    render() {
        return (
              <View style={styles.container}>  
                <MapView
                    style={{flex:1,height:height, width:width,}}
                    initialRegion={this.state.region}
                    showsUserLocation={true}
                >
                    <MapView.Marker 
                        coordinate={this.state.marker} 
                        title={"Vị trí của bạn"} 
                        image={theme.Image.iCon.RedFlag}
                        pinColor={"pink"}
                        key={this.state.marker.idlocation}
                    >
                    </MapView.Marker>

                    {/* <MapView.Marker 
                        coordinate={{        
                            latitude:16.062313,
                            longitude: 108.217108,
                        }} 
                        // title={item.restaurant_id}
                        // description={item.address}
                        // key={item.restaurant_id}
                    >
                    </MapView.Marker> */}


                {/* {this.state.listRestaurant.map(marker =>(
                    <MapView.Marker 
                        coordinate={{        
                            latitude:   parseFloat(marker.latitude),
                            longitude: parseFloat(marker.longitude)
                        }} 
                        title={marker.restaurant_id}
                        description={marker.address}
                        key={marker.restaurant_id}
                    />
                ))} */}
                {this.renderMarker()}

                {/* <FlatList
                        // keyExtractor={item => item.restaurant_id}
                        data = {this.state.listRestaurant}
                        enableEmptySection
                        showsVerticalScrollIndicator = {false}
                        renderItem = {
                            ({item}) => (
                            <Text>{item.latitude}</Text>
                               
                                // <MapView.Marker 
                                //     coordinate={{        
                                //         latitude:  item.latitude,// parseFloat(item.latitude),//
                                //         longitude:  item.longitude, //parseFloat(item.longitude),//
                                //     }} 
                                //     // title={item.restaurant_id}
                                //     // description={item.address}
                                //     // key={item.restaurant_id}
                                // >
                                // </MapView.Marker>
                            )
                        }
                /> */}


              </MapView>
            </View>

            // <View style={styles.container}>  
            //     <MapView
            //         style={{flex:1,height:height, width:width,}}
            //         initialRegion={this.state.region}
            //     >
            //         <FlatList
            //             keyExtractor={item => item.restaurant_id}
            //             data={this.state.listRestaurant}
            //             enableEmptySection
            //             showsVerticalScrollIndicator={false}
            //             renderItem={
            //                 ({item}) => (
            //                     <MapView.Marker 
            //                         coordinate={{        
            //                             // latitude:   parseFloat(item.latitude),
            //                             // longitude: parseFloat(item.longitude)
            //                             latitude:16.062313,
            //                             longitude: 108.217108,
            //                         }} 
            //                         // title={item.restaurant_id}
            //                         // description={item.address}
            //                         // key={item.restaurant_id}
            //                     >
            //                     </MapView.Marker>
            //                   )
            //             }
            //         />
            //     </MapView>
            // </View>

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
    }
});


