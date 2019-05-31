import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from "./styles";
import getRandomFoodApi from "../../api/getRandomFoodApi";

export default class Random extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      mang:[],
      isEndOfData: false,
    }
  }

  gotoDetail(food){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food});
  }

  componentDidMount(){
    getRandomFoodApi(this.state.page)
    .then((responseJson)=>{
      if(responseJson.result==="success"){
        this.setState({
            mang : responseJson.data,
            dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
          });
      }
      else{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([]),
        })
      }
    })
    .catch(error=>{
      console.log('GETRANDOMFOOD_ERROR',error);
      this.setState({
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
        onPress={() => this.gotoDetail(property)} 
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
            <Text style={styles.txtRate}>{String(Math.round(property.rate*10)/10)} ★</Text>
          </View>
          <View style={styles.cntText}>
            <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
          </View>
        </View>  
      </TouchableOpacity>
      );
    }
  }

  _onEndReached(){

    nextpage = this.state.page +1;
    getRandomFoodApi(nextpage)
    .then((responseJson)=>{
      if(responseJson.result==="success"){
        this.setState({
            mang : this.state.mang.concat(responseJson.data),
            dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
            page: this.state.page+1,
          });
      }
      else{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows([]),
        })
      }
    })
    .catch(error=>{
      console.log('GETMORERANDOMFOOD_ERROR',error);
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows([]),
      });
    });
  }


  render() {
    const topfoodJSX=(
        <ListView 
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={
            (propertya) => this.createRow(propertya)
          }
          onEndReached={this._onEndReached.bind(this)}
        />
      );
        return (
          <View style={styles.container}>
            {topfoodJSX}
          </View>
        );
  }
}


