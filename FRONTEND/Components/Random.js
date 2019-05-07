//Scroll down to move to the next page
// Home:  10.10.31.41
// Company: 10.10.31.214
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
} from 'react-native';
import Header from "./Header";
import ScrollMenu from "./ScrollMenu";
// var URL="http://10.10.31.41/MealRecommendationApplication-Project/BACKEND/RanDom.php?pagenumber=";

// const Img_Path= 'http://192.168.1.85/MealRecommendationApplication-Project/BACKEND/CRAWL_DATA/IMAGE/';
// var URL="http://192.168.1.85/MealRecommendationApplication-Project/BACKEND/RanDom.php?pagenumber=";

export default class Random extends Component {

 
  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      //currentTab:"HOTFOOD",
      //refreshing:false,

    }
  }

  gotoDetail(food){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food});
  }



  componentDidMount(){
    fetch("http://192.168.1.85/MealRecommendationApplication-Project/BACKEND/RanDom.php?pagenumber="+this.state.page,
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

creatStar1(score){
  //1
  if(score <  0.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
  else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
}
creatStar2(score){
  //2
  if(score <  1.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
  else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
}
creatStar3(score){
  //3
  if(score <  2.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
  else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
}
creatStar4(score){
  //4
  if(score <  3.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
  else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
}
creatStar5(score){
  //5
  if(score <  4.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
  else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
}

  createRow(property){
            return(
              <TouchableOpacity  onPress={() => this.gotoDetail(property)} key={property.id} style={styles.row}>
              <View style={styles.image} >
                <Image style={styles.image} source={{uri: property.image_path}} />
              </View>
              <View style={styles.content}>
                <View style={styles.content_row}>
                  <Text style={styles.content_row_name}>{property.food_name.length >25 ? property.food_name.substring(0,23)+"..." :property.food_name }</Text>
                </View>
                <View style={styles.content_row}>
                  {this.creatStar1(property.rate)}
                  {this.creatStar2(property.rate)}
                  {this.creatStar3(property.rate)}
                  {this.creatStar4(property.rate)}
                  {this.creatStar5(property.rate)}
                  <Text style={styles.content_row_rate}>{property.rate}</Text>
                </View>
                <View style={styles.content_row}>
                  <Image source={require('../Image/location.png')}/>
                  <Text style={styles.content_row_address}>{property.address.length >30 ? property.address.substring(0,28)+"..." :property.address }</Text>
                </View>
                <View style={styles.content_row}>
                  <Image source={require('../Image/spoon.png')}/>
                  <Text style={styles.content_row_menu}>{property.menu.length >30 ? property.menu.substring(0,28)+"..." :property.menu }</Text>
                </View>  
              </View>  
             </TouchableOpacity>
            );
  }

  // loadNewData(){
  //   this.setState({
  //     refreshing:true,
  //   });

  //   fetch("http://192.168.1.85/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page,{method:"POST",body:null})
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


  _onEndReached(){
    fetch("http://192.168.1.85/MealRecommendationApplication-Project/BACKEND/RanDom.php?pagenumber="+(this.state.page+1),
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
          dataSource={this.state.dataSource}
          renderRow={
            (propertya) => this.createRow(propertya)
          }
          onEndReached={this._onEndReached.bind(this)}
          onEndReachedThreshold={5}
        />
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, backgroundColor: "#AAA",
  },
  row: {
    flex: 1,
    flexDirection:'row',
    backgroundColor:"#FFF",
    padding:3,
    margin:3,
    borderRadius: 20,
  },
  image:{
    flex:0.3,
    margin:5,
    // borderWidth:1,
    // borderColor:"black",
    borderRadius: 100
  },
  content:{
    flex:0.7,
    padding:3,
  },
  content_row:{
    flex:1,
    flexDirection:"row",
    alignItems: 'center',
  },
  content_row_name:{
    color:"green",
    fontSize: 20,
    alignItems: 'center',
  },
  content_row_rate:{
    color:"green",
    fontSize: 20,
    alignItems: 'center',
  },
  content_row_address:{
    color:"gray",
    fontSize: 17,
    alignItems: 'center',
  },
  content_row_menu:{
    color:"gray",
    fontSize: 17,
    alignItems: 'center',
  },
});
