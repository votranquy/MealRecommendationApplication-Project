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
  Dimensions
} from 'react-native';
import Header from "./Header";
import ScrollMenu from "./ScrollMenu";
import theme from '../theme';
const {height , width} = Dimensions.get('window'); 


export default class Restaurant extends Component {

  constructor(props){
    super(props);
    this.state = {
      page:0,
      mang:[],
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
    }
  }

  gotoDetail(food){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food});
  }



  componentDidMount(){
    fetch("http://10.0.12.57/MealRecommendationApplication-Project/BACKEND/Restaurant.php?pagenumber="+this.state.page,
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
          <View style={styles.cntText}>
            <Text style={styles.txtRate}>{String(Math.round(property.rate*10)/10)} ★</Text>
          </View>
          <View style={styles.cntText}>
            <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
          </View>
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
    fetch("http://10.0.12.57/MealRecommendationApplication-Project/BACKEND/Restaurant.php?pagenumber="+(this.state.page+1),
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
          dataSource: this.state.dataSource.cloneWithRows(mang),
          page: this.state.page+1
        });
      }
      else{
          Alert.alert(
            'Alert Title',
            'End of Page',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
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

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: theme.Color.White,
  },
  ctnRestaurant: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:"#FFF",
    padding:3,
    margin:3,
    borderBottomWidth:1,
    borderColor: theme.Color.LightGray,
    paddingBottom:10,
  },
  ctnImage:{
    flex:0.3,
    padding:1,
  },
  image:{
    flex:1,
  },
  ctnInfomation:{
    flex:0.7,
    padding:3,
  },
  cntText:{
    flex:1,
    flexDirection:"row",
    alignItems: 'center',
    padding:3,
  },
  txtName:{
    color: theme.Color.Black,
    fontSize: theme.Size.FontSmall,
    alignItems: 'center',
    fontWeight:"900",
    // margin: theme.Size.TextMargin,
  },
  txtRate:{
    color: theme.Color.NiceRed,
    fontSize:  theme.Size.FontSmall,
    alignItems: 'center',
  },
  txtAddress:{
    color: theme.Color.MediumGray,
    fontSize: theme.Size.FontSmall,
    alignItems: 'center',
  },
  txtMenu:{
    color: theme.Color.Orange,
    fontSize: theme.Size.FontSmall,
    alignItems: 'center',
  },
  ctnFood:{
    flexDirection: "row",
    alignItems: 'center',
  },
  imageFood:{
    width:width/10,
    height:width/10,
    marginRight:2,
  },
  textFood:{
    color: theme.Color.Orange,
    fontSize: theme.Size.FontSmall,
    // alignItems: 'center',
  }
});

