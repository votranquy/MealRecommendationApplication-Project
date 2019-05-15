import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet, 
    Dimensions,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    Alert,
} from 'react-native';
import call from 'react-native-phone-call';
import MapView from 'react-native-maps';
import Modal from 'react-native-modalbox';  
import global from "../global";
import theme from "../../theme";
import Swiper from 'react-native-swiper';
import styles from "./styles";
const {height , width} = Dimensions.get('window'); 


export default class FoodDetail extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      foodItems: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      restaurantImages: [],
      swipeToClose: false,
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
      const { restaurantid} = this.props.food;

      //Get Restaurant Image
      fetch("https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557886982580&Count=6&RestaurantId="+restaurantid,{
        method:"GET",
        headers: {
          Accept: 'application/json, text/plain, */*',
          'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
          'x-requested-with' : 'XMLHttpRequest'
        }
      })
      .then((response)=>response.json())
      .then(
        (responseData)=>{
          if(responseData.ListPicture != null){
            resImage = responseData.ListPicture;
            this.setState({
              restaurantImages: resImage,
            });
          }
        }
      )
      .catch()

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
      const {category, food_name,  address, Latitude, Longitude} = this.props.food;
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

      const imageJSX=(
        <View style={styles.ctnImageFood}>
          <Swiper 
            showsButtons={true} 
            width={width} 
            height={height/5}
            loop={true}
            autoplay={false} 
            showsPagination={true}
          >
              { this.state.restaurantImages.map(e => (
                <Image source={{ uri: e.FullSizeImageUrl }} style={styles.imageFood} key={e.Id} />
              )) }
          </Swiper>
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
              <View style={styles.ctnItem}>
              <View style={styles.ctnImageItem}>
              {e.ImageUrl == "/style/images/deli-dish-no-image.png"  
              ? <Image source={{uri: "https:"+e.ImageUrl }} style={styles.imgeItem}/>
              : <Image source={theme.Image.iCon.DefaultImage} style={styles.imgeItem}/>
              }
                
              </View>
              <View key={e.Id}  style={styles.ctnInfomationItem}>
                <Text style={styles.contentrowFoodInfo} numberOfLines={1}>{e.Name}</Text>
                <Text style={styles.contentrowFoodInfo}>{e.Price}đ</Text>
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
            {imageJSX}
            {/* <Image source={{uri: image_path}} style={styles.imageFood}/> */}
            {infomationJSX}
            <Modal
              style={[styles.modal, styles.modal1]}
              backdrop={true}
              coverScreen={true}
              ref={"modal1"}
            >
              <View style={styles.ctnMapView}>
                <View/>
                <View style={styles.ctnHeaderMap}>
                  <View style={styles.ctnCloseButton}></View>
                  <View style={styles.ctnHeaderText}>
                    <Text style={styles.txtHeader} numberOfLines={1}>{food_name}</Text>
                  </View>
                  <TouchableOpacity onPress={() => this.refs.modal1.close()} style={styles.ctnHeaderIcon}>
                    <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
                  </TouchableOpacity>
                </View>
               <View style={styles.ctnMapArea}>    
                <MapView
                  style={{flex:1,height:height, width:width,}}
                  // region={{        
                  //   latitude: parseFloat(Latitude),
                  //   longitude: parseFloat(Longitude),
                  //   latitudeDelta: 0.005,
                  //   longitudeDelta: 0.005,}}
                  initialRegion={{        
                    latitude: parseFloat(Latitude),
                    longitude: parseFloat(Longitude),
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,}}>
                  <MapView.Marker 
                    coordinate={{        
                      latitude: parseFloat(Latitude),
                      longitude: parseFloat(Longitude),
                      // latitudeDelta: 0.005,
                      // longitudeDelta: 0.005
                    }} 
                    title={food_name} 
                    description={address}
                    pinColor={"pink"}
                    >
                       {/* <View style={{backgroundColor: "red", padding: 10}}>
                        <Text>SF</Text>
                      </View> */}
                    </MapView.Marker>
                </MapView>
               </View> 
              </View>
            </Modal>
            <View style={styles.ctnMenu}>
                <View style={styles.lbMenu}>
                  <Text style={styles.txtMenu}>Thực Đơn</Text>
                </View>
                { itemsJSX}
            </View>
            <View style={styles.ctnMenu}>
            <View style={styles.lbMenu}>
                  <Text style={styles.txtMenu}>Bình Luận</Text>
            </View>
            {this.state.dataSource.length  != 0  ? commentJSX:<Text style={styles.contentrowFoodInfo}> Không có bình luận nào</Text> }
           </View>
         </ScrollView>
         </View>
        );
    }
}
