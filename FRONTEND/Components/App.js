import React, { Component } from 'react';
import { StatusBar, Navigator } from 'react-native';

import Authentication from './Authentication';
import ChangeInfo from './ChangeInfo';
import Main from './Main';
import Welcome from './Welcome';
import ConfirmCode from "./ConfirmCode";
import saveLat from "../api/saveLat";
import saveLong from "../api/saveLong";
import saveLocation from "../api/saveLocation";
export default class    App extends Component {
    // componentDidMount() {
    //     //var start = Math.random( ) * (900000 - 600000) + 600000;
    //    for (var i = 500000; i < 60000; i++){
    //         const restaurantid=i;
    //         const url = 'https://gappapi.deliverynow.vn/api/delivery/get_detail?request_id='+i+'&id_type=1';
    //         fetch(url,
    //         {
    //             method: 'GET',
    //             headers: {
    //                 Accept: 'application/json, text/plain, */*',
    //                 'x-foody-api-version':1,
    //                 'x-foody-app-type':1004,
    //                 'x-foody-client-id': '' ,
    //                 'x-foody-client-type':1,
    //                 'x-foody-client-version':1
    //             },
    //         })
    //         .then(resp => resp.json())
    //         .then(
    //             function(responseJson) {
    //                 console.log("GET DATA");
    //                 if(responseJson.result == "success"){
    //                     name=responseJson.reply.delivery_detail.name;
    //                     //restaurantid=i;
    //                     address=responseJson.reply.delivery_detail.address;
    //                     category ='';
    //                     for (var j = 0; j < responseJson.reply.delivery_detail.categories.length; j++){
    //                         category=category+responseJson.reply.delivery_detail.categories[j]+', ';
    //                     }
    //                     latitude=responseJson.reply.delivery_detail.position.latitude;
    //                     longitude=responseJson.reply.delivery_detail.position.longitude;
    //                     rate=responseJson.reply.delivery_detail.rating.avg;
    //                     totalReview=responseJson.reply.delivery_detail.rating.total_review;
    //                     first_image=responseJson.reply.delivery_detail.photos[1].value;
    //                     fetch('http://192.168.43.103/MealRecommendationApplication-Project/api/saveData.php',
    //                     {   
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                             Accept: 'application/json'
    //                         },
    //                         body:  JSON.stringify({name,restaurantid,address,category,latitude,longitude,rate,first_image,totalReview})
    //                     })
    //                     .catch(err => console.log(err));
    //                     console.log("SAVE DATA");

    //                 }
    //           })
    //         .catch(err => console.log(err));

    //         //Update Menu
    //         const url_menu= 'https://gappapi.deliverynow.vn/api/dish/get_delivery_dishes?request_id='+restaurantid+'&id_type=1';
    //         fetch(url_menu,
    //         {
    //             method: 'GET',
    //             headers: {
    //                 Accept: 'application/json, text/plain, */*',
    //                 'x-foody-api-version':1,
    //                 'x-foody-app-type':1004,
    //                 'x-foody-client-id': '' ,
    //                 'x-foody-client-type':1,
    //                 'x-foody-client-version':1
    //             },
    //         })
    //         .then(resp_menu => resp_menu.json())
    //         .then(
    //             function(responsemenuJson) {
    //                 console.log("GET MENU");
    //                 if(responsemenuJson.result == "success"){
    //                     var menu="";
    //                     for (var k = 0; k < responsemenuJson.reply.menu_infos.length; k++){
    //                         for(var kk=0; kk<responsemenuJson.reply.menu_infos[k].dishes.length;kk++)
    //                         menu=menu+responsemenuJson.reply.menu_infos[k].dishes[kk].name+', ';
    //                     }
    //                     fetch('http://10.0.12.57/MealRecommendationApplication-Project/api/updateMenu.php',
    //                     {   
    //                         method: 'POST',
    //                         headers: {
    //                             'Content-Type': 'application/json',
    //                             Accept: 'application/json'
    //                         },
    //                         body:  JSON.stringify({restaurantid,menu})
    //                     })
    //                     .catch(err => console.log(err));
    //                     console.log("SAVE MENU");

    //                 }
    //             }
    //         )
    //         .catch(err => console.log(err));
    //    }
    // }

    constructor(props){
        super(props);
        this.state={
            region:{
                // latitude: 16.0533335,
                // longitude: 108.2177182,
                latitude: 0,
                longitude: 0,
                latitudeDelta:0.01,
                longitudeDelta:0.01,
            },
        }
    }

componentDidMount(){
    navigator.geolocation.getCurrentPosition(
        (position)=>{
            // console.log("GET_LOCATION_SUCCESS", position);
            this.setState({ 
                region:{
                    latitude: position.coords.latitude,
                    longitude:  position.coords.longitude,
                    latitudeDelta:0.1,
                    longitudeDelta:0.1,
                },
             });
             saveLocation(this.state.region);
        },
       (error) => {
        // console.log("GET_LOCATION_FAIL",error);
       },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    )


}


    render() {
        return (
            <Navigator 
                initialRoute={{ name: 'MAIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case "WELCOME":            return <Welcome navigator={navigator} />
                        case 'MAIN':                       return <Main navigator={navigator} />;
                        case 'CHANGE_INFO':      return <ChangeInfo navigator={navigator} user={route.user} />;
                        case 'AUTHENTICATION': return <Authentication navigator={navigator} />; 
                        case "CONFIRMATION_CODE": return <ConfirmCode navigator={navigator}  email={route.email}/>
                    }
                }}
                configureScene={route => {
                    if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
                    return Navigator.SceneConfigs.FloatFromLeft;
                }}
                style={{flex:1}}
            />
        );
    }
}
