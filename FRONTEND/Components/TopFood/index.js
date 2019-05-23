import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ListView,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import styles from "./styles";

export default class TopFood extends Component {

  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      mang:[],
      isLoading:true,
    }
  }

  gotoDetail(food){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food});
  }

  async componentDidMount(){
    try{
      let response = await  fetch("http://10.0.12.57/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page,
      {method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });
    let responseJson = await response.json();
    // mang = responseJson;
    this.setState({
      mang : responseJson,
      dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
      isLoading:false,
    });
    }catch(err) {
        console.log("ERORORRRRRRRRRRRR");
        this.setState({
          dataSource: [],
          isLoading:false,
        });
    }
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
          <Image style={styles.image} source={{uri: property.image_path}} />
        </View>
        <View style={styles.ctnInfomation}>
          <View style={styles.cntText}>
            <Text style={styles.txtName} numberOfLines={1}>{property.food_name }</Text>
          </View>
          {/* <View style={styles.cntText}>
            <Text style={styles.txtName}>{property.restaurant_id }</Text>
          </View> */}
          <View style={styles.cntText}>
            <Text style={styles.txtRate}>{String(Math.round(property.rate*10)/10)} ★</Text>
          </View>
          <View style={styles.cntText}>
            <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
          </View>
          {/* <View style={styles.cntText}>
            <Text style={styles.txtMenu} numberOfLines={1}>{property.menu}</Text>
          </View>   */}
          <View style={styles.ctnFood} >
            <Image style={styles.imageFood} source={{uri: "http:"+property.image}}/>
            <Text style={styles.textFood} numberOfLines={1}>{property.name}</Text>
          </View>
        </View>  
      </TouchableOpacity>
      );
    }
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
        // mang = mang.concat(responseData);
        this.setState({
          isLoading:false,
          mang : this.state.mang.concat(responseData),
          dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
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
    // if(this.state.isLoading){
    //   return(
    //     <View>
    //     <ActivityIndicator
    //         animating={true}
    //         size="large"
    //       />
    //     </View>  
    //   );
    // }
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


