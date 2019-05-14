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
    ListView,
    Alert,
    Button,
    } from 'react-native';
import Swiper from 'react-native-swiper';
import call from 'react-native-phone-call';
import MapView from 'react-native-maps';
import Modal from 'react-native-modalbox';
import global from "../global";
import theme from "../../theme";


export default class FoodDetail extends Component {
  constructor(props){
    super(props);
    const {latitude,longitude} = this.props.food;
    this.state = {
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      foodItems: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      swipeToClose: false,
      region:{
        latitude:16.053364,
        longitude: 108.217740,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }
    }
  }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

    addThisFoodToBookMark() {
      const { food } = this.props;
      global.addFoodToBookMark(food);
  }

    componentDidMount(){
      const { restaurantid, latitude,longitude} = this.props.food;
      this.setState({
        region:{
          latitude:parseFloat(latitude) ,
          longitude:parseFloat(longitude),
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }
      })

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

    callTheRestaurant(){
      const args = {
        number: '0369380628',
        prompt: false,
      }
      Alert.alert(
        'Liên lạc',
        'Gọi đến số điện thoại này?',
        [
          {
            text: 'Hủy bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
          },
          {text: 'Xác nhận', onPress: () => call(args).catch(console.error)},
        ],
        {cancelable: false},
      );
    }



    render() {
      const { foodItems } = this.state;
      const { image_path, category, food_name,  address , restaurantid} = this.props.food;
      
      const headerJSX=(
        <View style={styles.ctnHeader}>
          <TouchableOpacity  onPress={this.goBack.bind(this)} style={styles.ctnHeaderIcon}>
            <Image source={theme.Image.iCon.Whiteback} style={styles.iconHeader}/>
          </TouchableOpacity>
          <View style={styles.ctnHeaderText}>
          <Text style={styles.txtHeader} numberOfLines={1}>{food_name}</Text>
          </View>
          <TouchableOpacity  onPress={this.addThisFoodToBookMark.bind(this)} style={styles.ctnHeaderIcon}>
            <Image source={theme.Image.iCon.Save} style={styles.iconHeader}/>
          </TouchableOpacity>
      </View>

      );

      const infomationJSX=(
        <View style={styles.ctnFoodInfomation}>
          <TouchableOpacity style={styles.ctnText} onPress={() => this.refs.modal1.open()}>
            <Text style={styles.txtAddress} numberOfLines={1}>  {address}</Text>
          </TouchableOpacity>
          <View style={styles.ctnText} >
            <Text style={styles.txtCategory}>  { category.substring(0,category.length-2) }</Text>
          </View>
          <TouchableOpacity style={styles.ctnText}  onPress={this.callTheRestaurant}>
            <Text style={styles.txtPhoneNumber}>  0369380628 </Text>
          </TouchableOpacity>
        </View>
      );

      const itemsJSX = (
        <ListView 
        enableEmptySections
        dataSource={this.state.foodItems}
        renderRow={
          (e) => 
            <View style={{flexDirection:"row"}}>
            <View style={styles.ctnImageItem}>
            <Image source={{uri: "https:"+e.ImageUrl }} style={styles.ctnImageItem}/>
            </View>
            <View key={e.Id}  style={styles.ctnInfomationItem}>
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
            <View style={{flexDirection:"row"}}>
              <View  style={styles.lbMenu}>
                <Text style={styles.contentrowFoodInfo}>{data.Owner.DisplayName}</Text>
                <Text style={styles.comment}>{data.Description}</Text>
              </View>
            </View>
          }
    />
    );

      return (
        <View style={{flex:1}}>
          {headerJSX }
        <ScrollView style={styles.wrapper} >
            <Image source={{uri: image_path}} style={styles.imageFood}/>
            {infomationJSX}
            <Modal
              style={[styles.modal, styles.modal1]}
              backdrop={true}
              coverScreen={true}
              ref={"modal1"}
            >
              <View style={{height:height,width:width,flex:1, borderWidth:4, borderColor:"black"}}>
                <MapView
                  style={{flex:1}}
                  region={this.state.region}
                  initialRegion={this.state.region}>
                  <MapView.Marker coordinate={this.state.region} title={"Here"} description={"No"} />
                </MapView>
              </View>
            </Modal>
            <View style={styles.ctnMenu}>
                <View style={styles.lbMenu}>
                  <Text style={styles.txtMenu}>Thực Đơn</Text>
                </View>
                { itemsJSX}
            </View>
            <View style={styles.lbMenu}>
                  <Text style={styles.txtMenu}>Bình Luận</Text>
            </View>
            {this.state.dataSource.length  != 0  ? commentJSX:<Text style={styles.contentrowFoodInfo}> Không có bình luận nào</Text> }
         </ScrollView>
         </View>
        );
    }
}
const {height , width} = Dimensions.get('window'); 
const styles = StyleSheet.create({
    wrapper:{
      flex: 1,
      margin:0,
      backgroundColor:"#EEE",
    },
    ctnHeader:{
     flexDirection:'row', 
     justifyContent:'space-between',
     height: height/15,
     width:width,
     backgroundColor: theme.Color.HeaderBackground, 
     alignItems:'center',
    },
    ctnHeaderIcon:{
      flex:0.1,
      padding:1,
      alignItems:'center',
    },
    ctnHeaderText:{
      flex:0.8,
      alignItems:'center',
    },
    iconHeader:{
      flex:1,
      width: width*0.1,
      height:height/15,
    },
    txtHeader:{
      color: '#FFF',
       fontSize:20,
    },
    content:{
        flexDirection:"row",
        flex:1,
        backgroundColor:"#CCC",
        width:width,
    },
    imageFood:{
        height:height/3,
        width:width,
        alignItems:"center",
        padding:0,
    },
    ctnFoodInfomation:{
      alignItems:"center",
      // backgroundColor:"#EEE",
      // justifyContent:"space-around",
      padding:3,
      marginBottom: 5,
      // marginTop:2,
    },
    ctnText:{
      width:width,
      // height: theme.Size.FontSmall,
      backgroundColor:theme.Color.White,
      // flexDirection:"row",
      // justifyContent: 'flex-start',
      // alignItems: 'left',
      padding:3,
    },
    smallImage:{
      width:20,
      height:20,
      padding:1,

    },
    txtAddress:{
      fontSize: theme.Size.FontSmall,
      color: theme.Color.Orange,
      alignItems: 'center',
    },
    txtCategory:{
      fontSize: theme.Size.FontSmall,
      color: theme.Color.Orange,
      alignItems: 'center',
    },
    txtPhoneNumber:{
      fontSize: theme.Size.FontSmall,
      color: theme.Color.Orange,
      alignItems: 'center',
    },
    contentrowFoodInfo: {
      color:"black",
      fontSize: theme.Size.FontSmall, 
      padding:3,
    },
    ctnMenu:{
      // justifyContent:"center",
      borderBottomWidth:1,
      borderColor: theme.Color.LightGray,
      marginTop:2,
      padding:3,
      backgroundColor: theme.Color.White,
    },
    lbMenu:{
      justifyContent:"center",
      borderBottomWidth:1,
      borderColor:  theme.Color.LightGray,
    },
    txtMenu:{
      fontSize:20,
      fontWeight:"900",
      color: theme.Color.LightGray,
    },
    ctnItem:{
      flex: 1,
      flexDirection:'row',
      backgroundColor:"#FFF",
      padding:3,
      margin:3,
      borderBottomWidth:1,
      borderColor: theme.Color.LightGray,
      paddingBottom:10,
    },
    ctnImageItem:{
      flex:0.3,
      padding:1,
    },
    imgeItem:{
      flex:1,
    },
    ctnInfomationItem:{
      flex:0.7,
      padding:3,
    },
    contact:{
      flexDirection: "row",
      justifyContent:"center",
      borderWidth:0,
      borderColor: '#FFF',
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
      fontSize:15,
    },
    username:{
      color:"green",
      fontWeight:"bold",
    }

  })
