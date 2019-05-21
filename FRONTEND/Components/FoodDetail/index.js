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
    FlatList,
    ActivityIndicator,
} from 'react-native';
import call from 'react-native-phone-call';
import MapView from 'react-native-maps';
import Modal from 'react-native-modalbox';  
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

import global from "../global";
import theme from "../../theme";
import styles from "./styles";
import getRestaurantImage from '../../api/getRestaurantImage';
const {height , width} = Dimensions.get('window'); 


export default class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
	    isLoading: true,
      restaurantImages: [],
      swipeToClose: false,
      comment : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      }
  }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

  async getImage(restaurant_id) {  
      try{
        let response = await   fetch("https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557065498601&Count=7&RestaurantId="+restaurant_id,
        {
            method:"GET",
            headers: {
                Accept: 'application/json, text/plain, */*',
                'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
                'x-requested-with' : 'XMLHttpRequest'
            }
        });
        let responseJson = await response.json();
        resImage = responseJson.ListPicture;
        this.setState({
          restaurantImages: resImage,
        });
      }catch(err) {
          console.log("ERORORRRRRRRRRRRR");
          this.setState({
            restaurantImages: [],
          });
      }
  }

getComment(){
	const { restaurant_id} = this.props.food;
	console.log("GET_RESTAURANT_ID"+ restaurant_id);
	const URLs = "https://www.foody.vn/__get/Review/ResLoadMore?t=1556358596613&ResId="+restaurant_id+"&LastId=0&Count=10&Type=1&isLatest=true&HasPicture=true";
	fetch(URLs,
			{method:"GET",
			headers: {
				Accept: 'application/json, text/plain, */*',
				'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
				'cache-control' : 'no-cache',
				'pragma' :  'no-cache',
				'x-requested-with' : 'XMLHttpRequest'
			}
	})
	.then(responses => responses.json())
	.then(responseJsons=>{
		if(responseJsons.Total !== 0){
			console.log('COMMENT_WORK');
			this.setState({
				comment: this.state.comment.cloneWithRows(responseJsons.Items),
				isLoading: false,
			});
			console.log("COMMENT",this.state.comment);
		}else{
			console.log('COMMENT_NULL');
			this.setState({
				comment: this.state.comment.cloneWithRows([]),
				isLoading: false,
			});
		}
	})	
	.catch(error=>{
		console.log('COMMENT_ERROR',error);
		this.setState({
			comment:  this.state.comment.cloneWithRows([]),
			isLoading: false, 
		});
	});
  }
  
getMenu(){
	const { restaurant_id} = this.props.food;
	console.log("GET_RESTAURANT_ID"+ restaurant_id);
	const URL = "https://www.foody.vn/__get/Delivery/GetDeliveryDishes?t=1557065498605&RequestCount=5&RestaurantId="+restaurant_id+"&SortType=2&NextItemId=0";
	fetch(URL,
		{method:"GET",
		headers: {
			accept: 'application/json, text/plain, */*',
			'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
			'x-requested-with' : 'XMLHttpRequest'
		}
	})
	.then(response => response.json())
	.then(responseJson=>{
		//console.log(responseJson);
		if(responseJson.Dishes !== null){
			console.log('MENU_WORK');
			this.setState({
				menu: responseJson.Dishes.Items,
				isLoading: false,
			});
			console.log("ME_NU",this.state.menu);
		}else{
			console.log('MENU_ERROR');
			this.setState({
				menu:[],
				isLoading: false,
			});
		}
	})	
	.catch(error=>{
		console.log('_LOGIN_',error);
		console.log('CCCCCCCCCCCCCC');
		this.setState({
			menu: [],
			isLoading: false, 
		});
	});
}

componentDidMount(){
	this.getMenu();
	this.getComment();	      	
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

      const {category, food_name,  address, latitude, longitude, restaurant_id} = this.props.food;

      const headerJSX=(
        <View style={styles.ctnHeader}>
          <TouchableOpacity  onPress={this.goBack.bind(this)} style={styles.ctnHeaderIcon}>
            <Image source={theme.Image.iCon.Whiteback} style={styles.iconHeader}/>
          </TouchableOpacity>
          <View style={styles.ctnHeaderText}>
          <Text style={styles.txtHeader} numberOfLines={1}>{food_name}</Text>
          </View>
          <TouchableOpacity  onPress={() => this.refs.modal2.open()} style={styles.ctnHeaderIcon}>
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

	   <TouchableOpacity style={styles.ctnText}  onPress={this.callTheRestaurant}>
            <Text style={styles.txtPhoneNumber}>  {restaurant_id} </Text>
          </TouchableOpacity>

        </View>
      );

      const mapJSX=(
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
                <Text>{parseFloat(latitude)} {parseFloat(longitude)}</Text>
               <View style={styles.ctnMapArea}>
               {
                 parseFloat(latitude) > 0 
                 ? <MapView
                 style={{flex:1,height:height, width:width,}}
                 initialRegion={{        
                   latitude: parseFloat(latitude),
                   longitude: parseFloat(longitude),
                   latitudeDelta: 0.005,
                   longitudeDelta: 0.005,}}>
                 <MapView.Marker 
                   coordinate={{        
                     latitude: parseFloat(latitude),
                     longitude: parseFloat(longitude),
                   }} 
                   title={food_name} 
                   description={address}
                   pinColor={"pink"}
                   >
                   </MapView.Marker>
               </MapView>
               :<Text>Bản đồ hiện không khả dụng</Text>
               } 
               </View> 
              </View>
            </Modal>
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
            
            {/* { this.state.restaurantImages.map(e => (
                <Image source={{ uri: e.FullSizeImageUrl }} style={styles.imageFood} key={e.Id} />
              )) 
            } */}
        <FlatList
                  data={this.state.restaurantImages}
                  showsVerticalScrollIndicator={false}
                  renderItem={({e}) =>
                    <Image source={{ uri: e.FullSizeImageUrl }} style={styles.imageFood} key={e.Id} />
                  }
                  keyExtractor={e => e.Id}
          />
          </Swiper>
        </View>
     );

     const commentJSX=(

<ListView 
        enableEmptySections
        dataSource={this.state.comment}
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

const menuJSX = (
	<FlatList
		data={this.state.menu}
		showsVerticalScrollIndicator={false}
		renderItem={ ({item}) => (
			<View style={styles.ctnItem}>
				<View style={styles.ctnImageItem}>
				{ 
				item.ImageUrl !== "/style/images/deli-dish-no-image.png"  ?
				<Image source={{uri: "https:"+item.ImageUrl }}  style={styles.imgeItem}/> :
				<Image source={theme.Image.iCon.DefaultImage} style={{width: width/4 , height: height/13,flex:1}}/>
				 }
				</View>
				<View  style={styles.ctnInfomationItem}>
					<Text style={styles.txtItem} numberOfLines={1}>{item.Name}</Text>
					<Text style={styles.txtPrice}>{item.Price}đ</Text>
				</View>
			</View>
		)}
		keyExtractor={item => item.Id}
	/>
 );

    const bookmarkJSX=(
      <Modal
      style={[styles.modal, styles.modal2]}
      backdrop={true}
      coverScreen={true}
      ref={"modal2"}
    >
    <View style={styles.ctnMapView}>
        <View style={styles.ctnHeaderMap}>
          <View style={styles.ctnCloseButton}></View>
          <View style={styles.ctnHeaderText}>
            <Text style={styles.txtHeader} numberOfLines={1}>BOOKMARK</Text>
          </View>
          <TouchableOpacity onPress={() => this.refs.modal2.close()} style={styles.ctnHeaderIcon}>
            <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
          </TouchableOpacity>
        </View>
        <View style={styles.ctnMapArea}>
        </View>
      </View>
    </Modal>
    );



    const actionButtonJSX=(
      <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Bản đồ" onPress={() => this.refs.modal1.open()}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Gọi điện" onPress={this.callTheRestaurant}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Lưu lại" onPress={() => this.refs.modal2.open()}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
    );

//     if(this.state.isLoading){
// 	return(
// 	  <View style={{flex: 1, padding: 20}}>
// 	    <ActivityIndicator/>
// 	  </View>
// 	)
//      }

      return (
        <View style={{flex:1}}>
          {headerJSX }
        <ScrollView style={styles.wrapper} >
            {/* {imageJSX } */}
            {infomationJSX}
            {mapJSX}
            {bookmarkJSX}
            <View style={styles.ctnMenu}>
                <View style={styles.lbMenu}>
                  <Text style={styles.txtMenu}>Thực Đơn</Text>
                </View>
		  {/* {this.state.foodItems.length  ==  0  ?   <View style={styles.ctnItem}><Text> Không có món ăn nào</Text> </View> :  itemsJSX } */}
		  {/* {this.state.menu.length != 0 ?   menuJSX  : <Text>KHONG CO GI</Text>} */}
		  {menuJSX}
            </View>
            <View style={styles.ctnMenu}>
            <View style={styles.lbMenu}>
                  <Text style={styles.txtMenu}>Bình Luận</Text>
            </View>
	        	{commentJSX}
           </View>
         </ScrollView>
         {actionButtonJSX}
         </View>
        );
    }
}
