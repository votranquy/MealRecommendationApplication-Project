import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ListView,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';
import styles from "./styles";

export default class TopFood extends Component {

  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
    }
  }

  gotoDetail(food){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food});
  }

  componentDidMount(){
    fetch("http://10.0.12.57/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page,
      {method:"POST",
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
    if(property.food_name == "") return;
    return(
    <TouchableOpacity 
      activeOpacity={0.8}  
      onPress={() => this.gotoDetail(property)} 
      key={property.id} style={styles.ctnRestaurant}>
      <View style={styles.ctnImage} >
        <Image style={styles.image} source={{uri: property.image_path}} />
      </View>
      <View style={styles.ctnInfomation}>
        <View style={styles.cntText}>
          <Text style={styles.txtName} numberOfLines={1}>{property.food_name }</Text>
        </View>
        <View style={styles.cntText}>
          <Text style={styles.txtRate}>{property.rate != "0" ? property.rate+ "★" : "Chưa có đánh giá"}</Text>
        </View>
        <View style={styles.cntText}>
          <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
        </View>
        <View style={styles.cntText}>
          <Text style={styles.txtMenu} numberOfLines={1}>{property.menu}</Text>
        </View>  
      </View>  
    </TouchableOpacity>
    );
  }

  _onEndReached(){
    this.setState({isLoading:true,})
    fetch("http://10.0.12.57/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+(this.state.page+1),
      {
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
      })
    .then((response)=>response.json())
    .then((responseData)=>{
      if(responseData.length != 0){
        mang = mang.concat(responseData);
        this.setState({
          isLoading:false,
          dataSource: this.state.dataSource.cloneWithRows(mang),
          page: this.state.page+1,
        });
      }
      else{
          Alert.alert(
            'Hết dữ liệu',
            'Đây là cuối trang',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <ListView 
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={
              (propertya) => this.createRow(propertya)
            }
            onEndReached={this._onEndReached.bind(this)}
          />
        </View>
      </View>
    );
  }
}


