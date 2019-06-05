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
import Toast, {DURATION} from 'react-native-easy-toast';
const {height , width} = Dimensions.get('window'); 

export default class NearMe extends Component {
    constructor(props){
        super(props);
        arrayMarkers=[
        ];
        this.state={
            isGetLocationSuccess: false,
            listRestaurant:[],
            region:{
                latitude:16.0720687,
                longitude: 108.1541584,
                latitudeDelta:0.01,
                longitudeDelta:0.01,
            },
            markers: arrayMarkers,
            marker:{
                latitude:16.0720757,
                longitude: 108.15416,
                idlocation: 0,
            },
        }
    }


    gotoDetail(food){
        const {navigator} = this.props;
        navigator.push({name: "FOOD_DETAIL",food});
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
                        idlocation: 0,
                    }
                 });
                 this.refs.toast.show('Lấy thông tin vị trí thành công');
                 
                // Alert.alert(
                //     'Thông báo',
                //     'Đã tìm thấy vị trí của bạn' ,
                //     [
                //         { text: 'OK' },
                //     ],
                //     { cancelable: false }
                // );

            },
           (error) => {
               console.log('aaaaa',error); 
               this.refs.toast.show('Lấy thông tin vị trí thất bại');
            //    Alert.alert(
            //     'Thông báo',
            //     'Không tìm thấy vị trí của bạn' ,
            //     [
            //         { text: 'OK' },
            //     ],
            //     { cancelable: false }
            // );
        },
            {enableHighAccuracy: true, timeout: 60000, maximumAge: 3000 }
        )

        // getNearRestaurantApi(this.state.marker.latitude,this.state.marker.longitude)
        // .then(responseJsonNearRestaurant =>{
        //   if(responseJsonNearRestaurant.result === "success"){
        //     mang = responseJsonNearRestaurant.data;
        //     console.log("RESTAURANT",mang);
        //     for(location of mang){
        //         arrayMarkers.push({
        //             latitude: parseFloat(location.latitude),
        //             longitude: parseFloat(location.longitude),
        //             idlocation: location.id,
        //             food_name: location.food_name,
        //             rate:location.rate,
        //             address: location.address,
        //             image_path: location.image_path,
        //             category: location.category,
        //             restaurant_id: location.restaurant_id,
        //             name: location.name,
        //             image: location.image,
        //         })

        //     }
        //     this.setState({markers: arrayMarkers});
        //   }else{
        //     console.log('GETRESTAURANT_ERROR');
        //     this.setState({
        //     });
        //   }
        // })
        // .catch(error=>{
        //   console.log('ERROR',error);
        //     this.setState({
        //     });
        // });
    }

    reGetNearRestaurant(){
        getNearRestaurantApi(this.state.marker.latitude,this.state.marker.longitude)
        .then(responseJsonNearRestaurant =>{
          if(responseJsonNearRestaurant.result === "success"){
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
          }else{
            console.log('GETRESTAURANT_ERROR');
            this.setState({
            });
          }
        })
        .catch(error=>{
          console.log('ERROR',error);
            this.setState({
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
                {this.state.isGetLocationSuccess && this.renderMarker() }
              </MapView>
              <TouchableOpacity style={styles.btnComment}  onPress={()=> this.reGetNearRestaurant()}>
                  <Text style={styles.txtButton}>Tìm quán ăn gần bạn</Text>
              </TouchableOpacity>
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


