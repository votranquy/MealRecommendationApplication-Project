import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import styles from "./styles";
import getTopFoodApi from "../../api/getTopFoodApi";     //Nolocation
import getTopFoodApi2 from "../../api/getTopFoodApi2"; //Location
import getLocation from "../../api/getLocation";

export default class TopFood extends Component {

  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      isLoading:true,
      isLoadingMore: false,
      mang:[],
      region:{},
    }
  }

  gotoDetail(food_id,restaurant_id){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food_id,restaurant_id});
  }

  componentDidMount(){
    getLocation()
    .then(region => {
      this.setState({region});
      if(region===""){return getTopFoodApi(this.state.page)}
      else{  return getTopFoodApi2(this.state.page, this.state.region.latitude, this.state.region.longitude) }
     })
    .then((responseJson)=>{
      if(responseJson.result==="success"){
        this.setState({
            mang : responseJson.data,
            isLoading: false,
            dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
        });
      }
      else{
        console.log("NOT SUCCESS");
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows([]),
        })
      }
    })
    .catch(error=>{
      console.log('GETTOPFOOD_ERROR',error);
      this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.cloneWithRows([]),
      });
    });
  }


  createRow(property){
    if(property.food_name == "");
    else{
      return(
      <TouchableOpacity 
        activeOpacity={0.8}  
        onPress={() => this.gotoDetail(property.id,property.restaurant_id)} 
        key={property.id} style={styles.ctnRestaurant}>
        <View style={styles.ctnImage} >
          <Image style={styles.image} source={{uri: "http:"+property.image}} />
        </View>
        <View style={styles.ctnInfomation}>
          <View style={styles.cntText}>
            <Text style={styles.textFood} numberOfLines={1}>{property.name }</Text>
          </View>
          <View style={styles.cntText}>
            <Text style={styles.txtName} numberOfLines={1}>{property.food_name }</Text>
          </View>
          <View style={styles.cntText}>
            <Text style={styles.txtRate}>{String(Math.round(property.average_score*10)/10)} ★</Text>
          </View>
          <View style={styles.cntText}>
            <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
          </View>
        </View>  
      </TouchableOpacity>
      );
    }
  }

  loadMore(){
    this.setState({isLoadingMore: true, page: this.state.page +1});
    getLocation()
    .then(region => {
      this.setState({region});
      if(region===""){return getTopFoodApi(this.state.page)}
      else{  return getTopFoodApi2(this.state.page, this.state.region.latitude, this.state.region.longitude) }
     })
    .then((responseJson)=>{
      if(responseJson.result==="success"){
        this.setState({
            mang : this.state.mang.concat(responseJson.data),
            isLoadingMore: false,
            dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
            // page: this.state.page+1,
          });
      }
      else{
        this.setState({
          isLoadingMore: false,
          dataSource: this.state.dataSource.cloneWithRows([]),
        })
      }
    })
    .catch(error=>{
      console.log('GETMORETOPFOOD_ERROR',error);
      this.setState({
        isLoadingMore: false,
        dataSource: this.state.dataSource.cloneWithRows([]),
      });
    });
  }


  render() {
    const topfoodJSX=(//RESULT
      <ListView 
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={(propertya) => this.createRow(propertya)}
        onEndReached={this.loadMore.bind(this)}
        onEndReachedThreshold={0.5}
      />
    );
    
      const loadJSX=(
      <View style={styles.ctnLoadingRow}>
        <ActivityIndicator size="large" size={50} color="#FF0000" />
      </View>
        );

    return (
      <View style={styles.container}>
          {this.state.isLoading       ?  loadJSX : <View/>} 
          {topfoodJSX}
          {this.state.isLoadingMore ? loadJSX : <View/>}
      </View>
    );
  }
}


