//Scroll down to move to the next page

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ListView,
  Image,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Header from "./Header";
import ScrollMenu from "./ScrollMenu";



export default class Category extends Component {

  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
    }
  }

  gotoDetail(property){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",property});
  }

  // fetchData(){
  //   fetch("http://10.0.13.130/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page ,
  //     {method:"POST",body:null})
  //   .then((response)=>response.json())
  //   .then((responseData)=>{
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(responseData)
  //     });
  //   })
  //   .done()
  // }

  componentDidMount(){
    fetch("http://10.0.13.130/MealRecommendationApplication-Project/BACKEND/category.php",
      {method:"GET",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then((response)=>response.json())
    .then((responseData)=>{
      mang = responseData;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(mang),
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  createRow(property){
            return(
              <TouchableOpacity  onPress={() => this.gotoDetail(property)} key={property.id} style={styles.row}>
              <View style={styles.content}>
                <View style={styles.content_row}>
                  <Image source={require('../Image/location.png')}/>
                  <Text style={styles.content_row_address}>{property.category_name}</Text>
                </View>
              </View>  
             </TouchableOpacity>
            );
  }

  // loadNewData(){
  //   this.setState({
  //     refreshing:true,
  //   });

  //   fetch("http://10.0.13.130/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page,{method:"POST",body:null})
  //   .then((response)=>response.json())
  //   .then((responseData)=>{
  //     this.setState({
  //       dataSource: this.state.dataSource.cloneWithRows(responseData),
  //       refreshing:false,
  //       page: this.state.page+1,
  //     });
  //   })
  //   .done()
  // }


//   _onEndReached(){
//     fetch("http://10.0.13.130/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+(this.state.page+1),
//       {
//         method:"POST",
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json'
//         },
//       })
//     .then((response)=>response.json())
//     .then((responseData)=>{
//       if(responseData.length != 0){
//         mang = mang.concat(responseData);
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(mang),
//           page: this.state.page+1
//         });
//       }
//       else{
//           Alert.alert(
//             'Alert Title',
//             'End of Page',
//             [
//               {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
//               {
//                 text: 'Cancel',
//                 onPress: () => console.log('Cancel Pressed'),
//                 style: 'cancel',
//               },
//               {text: 'OK', onPress: () => console.log('OK Pressed')},
//             ],
//             {cancelable: false},
//           );
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   }



  render() {
    return (
    <View style={{flex:1, backgroundColor:'#86AAEE'}}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
        <ListView 
          // refreshControl={
          //   <RefreshControl 
          //     refreshing={this.state.refreshing}
          //     onRefresh={this.loadNewData.bind(this)}
          //   />
          // }
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={
            (category) => this.createRow(category)
            //   <TouchableOpacity  onPress={() => this.gotoDetail(property)} key={property.id} style={styles.row}>
            //   <View style={styles.image}>
            //     <Image style={styles.image} />
            //   </View>
            //   <View style={styles.content}>
            //     <View style={styles.content_row}>
            //       <Text style={styles.content_row_name}>{property.food_name}</Text>
            //     </View>
            //     <View style={styles.content_row}>
            //       <Image source={require('../Image/star.png')}/>
            //       <Text style={styles.content_row_rate}>{property.rate}</Text>
            //     </View>
            //     <View style={styles.content_row}>
            //       <Image source={require('../Image/location.png')}/>
            //       <Text style={styles.content_row_address}>{property.address}</Text>
            //     </View>
            //     <View style={styles.content_row}>
            //       <Image source={require('../Image/clock.png')}/>
            //       <Text style={styles.content_row_worktime}>AA</Text>
            //     </View>  
            //   </View>  
            // </TouchableOpacity>
          }
        //   onEndReached={this._onEndReached.bind(this)}
        //   onEndReachedThreshold={5}
              
        />
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, backgroundColor: "white",
  },
  row: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:"#EEEEEE",
    padding:3,
    margin:3,
    
  },
  image:{
    flex:0.4,
    margin:5,
    borderWidth:1,
    borderColor:"black",
  },
  content:{
    flex:0.6,
    padding:3,
  },
  content_row:{
    flex:1,
    flexDirection:"row",
    alignItems: 'center',
  },
  content_row_name:{
    color:"green",
    fontSize: 15,
    alignItems: 'center',
  },
  content_row_rate:{
    color:"green",
    fontSize: 20,
    alignItems: 'center',
  },
  content_row_address:{
    color:"gray",
    fontSize: 15,
    alignItems: 'center',
  },
  content_row_worktime:{
    color:"gray",
    fontSize: 15,
    alignItems: 'center',
  },
});

