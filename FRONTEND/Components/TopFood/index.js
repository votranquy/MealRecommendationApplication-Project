import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from "./styles";
import getTopFoodApi from "../../api/getTopFoodApi";

export default class TopFood extends Component {
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
    // try{
    //   let response = await  fetch("http://192.168.64.2/MealRecommendationApplication-Project/api/topfood.php?pagenumber="+this.state.page,
    //   {method:"POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json'
    //   }
    // });
    // let responseJson = await response.json();
    // this.setState({
    //   mang : responseJson.data,
    //   dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
    // });
    // }catch(err) {
    //     console.log("ERORORRRRRRRRRRRR");
    //     this.setState({
    //       dataSource: [],
    //     });
    // }
    getTopFoodApi(this.state.page)
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
      console.log('GETTOPFOOD_ERROR',error);
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
    // this.setState({isLoading:true,})
    // fetch("http://192.168.64.2/MealRecommendationApplication-Project/api/topfood.php?pagenumber="+(this.state.page+1),
    //   {
    //     method:"POST",
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json'
    //     },
    //   })
    // .then((response)=>response.json())
    // .then((responseData)=>{
    //   if(responseData.result === "success"){
    //     this.setState({
    //       // isLoading:false,
    //       mang : this.state.mang.concat(responseData.data),
    //       dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
    //       page: this.state.page+1,
    //     });
    //   }
    //   else{
    //     this.setState({ isEndOfData: true});
    //   }
    // })
    // .catch((error) => {
    //   console.error(error);
    //   this.setState({
    //     // isLoading:false,
    //     dataSource: this.state.dataSource.cloneWithRows([]),
    //   });
    // });

    nextpage = this.state.page +1;
    getTopFoodApi(nextpage)
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
      console.log('GETMORETOPFOOD_ERROR',error);
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


