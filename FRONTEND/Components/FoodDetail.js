//import liraries
import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet, 
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
    ListView
    } from 'react-native';
import Swiper from 'react-native-swiper';

import icBack from "../Image/back_white.png";

//const Img_Path= 'http://192.168.1.85/MealRecommendationApplication-Project/BACKEND/CRAWL_DATA/IMAGE/';

// create a component
export default class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      foodItems: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} )
    }
  }


    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    componentDidMount(){
      const { image_path, category, food_name,  address , restaurantid} = this.props.food;

      //GET COMMENTS
      fetch("https://www.foody.vn/__get/Review/ResLoadMore?t=1556358596613&ResId="+restaurantid+"&LastId=0&Count=10&Type=1&isLatest=true&HasPicture=true",
      {method:"GET",
      headers: {
        Accept: 'application/json, text/plain, */*',
        'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
        'cache-control' : 'no-cache',
        'pragma' :  'no-cache',
        'x-requested-with' : 'XMLHttpRequest'
      }
    })
    .then((response)=>response.json())
    .then((responseData)=>{
      mang = responseData.Items;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(mang),
      });
    })
    .catch((error) => {
      console.error(error);
    });

    //Get Item List
    fetch("https://www.foody.vn/__get/Delivery/GetDeliveryDishes?t=1557065498605&RequestCount=5&RestaurantId="+restaurantid+"&SortType=2&NextItemId=0",
    {method:"GET",
    headers: {
      Accept: 'application/json, text/plain, */*',
      'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
      'x-requested-with' : 'XMLHttpRequest'
    }
  })
  .then((response)=>response.json())
  .then(
    (responseData)=>{
      if(responseData.Dishes != null){
        listItems = responseData.Dishes.Items;
        this.setState({
          foodItems: this.state.foodItems.cloneWithRows(listItems),
        });
      }
    }
  )
  .catch((error) => {
    console.error(error);
  });

    }




    render() {
      const { foodItems } = this.state;
      const { image_path, category, food_name,  address , restaurantid} = this.props.food;
      
      const headerJSX=(
        <View style={styles.row1}>
          <TouchableOpacity  onPress={this.goBack.bind(this)}>
            <Image source={icBack} style={styles.iconStyle}/>
          </TouchableOpacity>
          <Text style={styles.titleStyle}>{food_name.length >30 ? food_name.substring(0,28)+"..." :food_name }</Text>
          <View/>
      </View>
      );

      const infomationJSX=(
        <View >
        <Image source={{uri: image_path}} style={styles.foodImage}/>
        <View style={styles.foodInfo}>
          <View style={styles.rowFoodInfo} >
            <Image style={styles.smallImage} source={require('../Image/location.png')} />
            <Text style={styles.contentrowFoodInfo}>  {address.length >38 ? address.substring(0,36)+"..." :address }</Text>
          </View>
          <View style={styles.rowFoodInfo} >
            <Image style={styles.smallImage} source={require('../Image/global.png')} />
            <Text style={styles.contentrowFoodInfo}>  Khoảng cách </Text>
          </View>
          <View style={styles.rowFoodInfo} >
            <Image style={styles.smallImage} source={require('../Image/spoon.png')} />
            <Text style={styles.contentrowFoodInfo}>  {category}</Text>
          </View>
          <View style={styles.rowFoodInfo} >
            <Image style={styles.smallImage} source={require('../Image/cash.png')} />
            <Text style={styles.contentrowFoodInfo}>  20K- 50K</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <View style={styles.ContactCell}>
            <Image source={require('../Image/map.png')}/>
            <Text style={styles.ContactTitle}>Chỉ đường</Text>
          </View>
          <View style={styles.ContactCell}>
            <Image source={require('../Image/phone.png')}/>
            <Text style={styles.ContactTitle}>Gọi ngay</Text>
          </View>
          <View style={styles.ContactCell}>
            <Image source={require('../Image/bookmark.png')}/>
            <Text style={styles.ContactTitle}>Lưu lại</Text>
          </View>
        </View>
      </View>
      );

      const itemsJSX = (
        <ListView 
        enableEmptySections
        dataSource={this.state.foodItems}
        renderRow={
          (e) => 
          <View style={{flexDirection:"row"}}>
            <Image style={styles.smallImage} source={require('../Image/fooditem.png')} />
            <View key={e.Id}  style={styles.lbMenu}>
              <Text style={styles.contentrowFoodInfo}>{e.Name}</Text>
              <Text>{e.Price}</Text>
            </View>
            </View>
          }
    />
    );

    const commentJSX=(
        <ListView 
        enableEmptySections
        dataSource={this.state.dataSource}
        renderRow={
          (data) => 
              <View style={styles.comment}>
                  <Text style={styles.username}>  {data.Owner.DisplayName} </Text>
                <View style={styles.content}>
                    <Text style={styles.content_row_name}>{data.Description}</Text>
              </View>
            </View> 
          }
    />
    );

      return (
        <ScrollView style={styles.wrapper} >
            {headerJSX }
            {infomationJSX}
            <View style={styles.menuRestaurant}>
                <View style={styles.lbMenu}>
                  <Text style={styles.txtMenu}>Thực Đơn</Text>
                </View>
                
                {itemsJSX}
            </View>
            
            {commentJSX}
         </ScrollView>
        );
    }
}
const {height , width} = Dimensions.get('window'); 
const styles = StyleSheet.create({
    wrapper:{
      flex: 1,
      margin:0,
      flex:1,
      backgroundColor:"#EEE",
      //justifyContent:'space-between',      
     //alignItems:'center',
      flexDirection:"column",

    },
    row1:{
     flexDirection:'row', 
     justifyContent:'space-between',
     height: height / 15,
     width:width,
     backgroundColor: '#34B089', 
     padding:10, 
     alignItems:'center',

    },
    iconStyle:{
      height:30, width:30,
    },
    titleStyle:{
      color: '#FFF', fontSize:20,
    },
    content:{
        flexDirection:"row",
        // margin:0,
        flex:1,
        backgroundColor:"#CCC",
        // justifyContent:'center',
        // padding:0,
        // alignItems: "center",
        width:width,

    },
    foodImage:{
        height:height/3,
        // flex:1,
        width:width,
        alignItems:"center",
        backgroundColor:"#BBB",
        alignItems:"center",
        padding:0,
    },
    foodInfo:{
      // height:height/3,
      alignItems:"center",
      backgroundColor:"#EEE",
      justifyContent:"space-around",
      //borderWidth:1,
      //borderColor:"black",
      padding:5,
      marginBottom: 2,
      marginTop:2,
    },
    rowFoodInfo:{
      width:width,
      height:30,
      marginBottom:2,
      backgroundColor:"#FFF",
      padding:5,
      flexDirection:"row",
      justifyContent: 'flex-start',
      alignItems: 'center',
      // borderBottomWidth:1,
      // borderColor:"#FFF",
      borderRadius: 20
    },
    smallImage:{
      width:20,
      height:20,
      padding:1,

    },
    contentrowFoodInfo: {
      color:"black",
      fontSize: 20, 
      // height:15,
      padding:3,
    },
    menuRestaurant:{
      flexDirection: "column",
      justifyContent:"center",
      borderWidth:0,
      borderColor: '#FFF',
      // height:height/6,
      marginBottom:2,
      marginTop:2,
      //borderRadius: 20,
    },
    lbMenu:{
      justifyContent:"center",
      borderBottomWidth:1,
      borderColor:"#FFF",
    },
    txtMenu:{
      fontSize:20,
      fontWeight:"900",
      color:"green",
    },
    contact:{
      flexDirection: "row",
      justifyContent:"center",
      borderWidth:0,
      borderColor: '#FFF',
      // height:height/6,
      marginBottom:2,
      marginTop:2,
      borderRadius: 20,
      
    },
    ContactCell:{
      flex:1,
      borderColor: '#2ABB9C',
      borderWidth:1,
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"white",
      borderRadius: 20,
    },
    ContactTitle:{
      fontSize:20,
      color:"green",
    },
    comment:{
      backgroundColor:"white",
    },
    username:{
      color:"green",
      fontWeight:"bold",
    }

  })
