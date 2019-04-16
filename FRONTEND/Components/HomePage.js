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
// var URL="http://10.10.31.41/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber=";

const Img_Path= 'http://192.168.64.2/MealRecommendationApplication-Project/BACKEND/CRAWL_DATA/IMAGE/';
var URL="http://192.168.64.2/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber=";

export default class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      refreshing:false,
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      currentTab:"HOTFOOD",
    }
  }

  gotoDetail(property){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",property});
  }

  fetchData(){
    fetch("http://192.168.64.2/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page ,
      {method:"POST",body:null})
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData)
      });
    })
    .done()
  }

  componentDidMount(){
    this.fetchData();
  }

  createRow(property){
    return(
        <TouchableOpacity onPress={this.gotoDetail.bind(this)} style={styles.row}>
            <View style={styles.image}>
              <Image style={styles.image} source={{uri: `${Img_Path}${property.img_path}` }} />
            </View>
            <View style={styles.content}>

              <View style={styles.content_row}>
                <Text style={styles.content_row_name}>{property.food_name}</Text>
              </View>

              <View style={styles.content_row}>
                <Image source={require('../Image/star.png')}/>
                <Text style={styles.content_row_rate}>{property.rate}</Text>
              </View>

              <View style={styles.content_row}>
                <Image source={require('../Image/location.png')}/>
                <Text style={styles.content_row_address}>{property.address}</Text>
              </View>

              <View style={styles.content_row}>
                <Image source={require('../Image/clock.png')}/>
                <Text style={styles.content_row_worktime}>{property.worktime}</Text>
              </View>  
            </View>  
        </TouchableOpacity>
    );
  }

  loadNewData(){
    this.setState({
      refreshing:true,
    });

    fetch("http://192.168.64.2/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page,{method:"POST",body:null})
    .then((response)=>response.json())
    .then((responseData)=>{
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData),
        refreshing:false,
        page: this.state.page+1,
      });
    })
    .done()
  }



  render() {



    return (
    <View style={{flex:1, backgroundColor:'#86AAEE'}}>
    
      
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
        <ListView 
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              onRefresh={this.loadNewData.bind(this)}
            />
          }
          dataSource={this.state.dataSource}
          renderRow={
            // this.createRow
            (property) =>
              <TouchableOpacity  onPress={() => this.gotoDetail(property)} key={property.id} style={styles.row}>
                <View style={styles.image}>
                  <Image style={styles.image} source={{uri: `${Img_Path}${property.img_path}` }} />
                </View>
                <View style={styles.content}>
                  <View style={styles.content_row}>
                    <Text style={styles.content_row_name}>{property.food_name}</Text>
                  </View>
                  <View style={styles.content_row}>
                    <Image source={require('../Image/star.png')}/>
                    <Text style={styles.content_row_rate}>{property.rate}</Text>
                  </View>
                  <View style={styles.content_row}>
                    <Image source={require('../Image/location.png')}/>
                    <Text style={styles.content_row_address}>{property.address}</Text>
                  </View>
                  <View style={styles.content_row}>
                    <Image source={require('../Image/clock.png')}/>
                    <Text style={styles.content_row_worktime}>{property.worktime}</Text>
                  </View>  
                </View>  
               </TouchableOpacity>
          }
          //onEndReached={this.loadNewData.bind(this)}
              
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

