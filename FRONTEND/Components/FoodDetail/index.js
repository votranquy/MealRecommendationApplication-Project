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
import theme from '../../theme';
import global from "../global";
import styles from "./styles";
import getRestaurantImage from '../../api/getRestaurantImage';
const {height , width} = Dimensions.get('window'); 


export default class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
	    isLoading: true,
      //restaurantImages: [],
      swipeToClose: false,
      comment : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      allComment : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      //picture : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      picture: null,
      }
  }

    goBack() {
        const { navigator } = this.props;
        navigator.pop();
    }

  getPicture() {  
    //FlatList
    // const {restaurant_id} = this.props.food;
    // console.log("GET_RESTAURANT_ID"+ restaurant_id);
    // const URLi = "https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557065498601&Count=7&RestaurantId="+restaurant_id;
    // fetch(URLi,{
    //   method:"GET",
    //   headers: {
    //           Accept: 'application/json, text/plain, */*',
    //           'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
    //           'x-requested-with' : 'XMLHttpRequest'
    //   }
    // })
    // .then(responsei => responsei.json())
    // .then(responseJsoni=>{
    //   if(responseJsoni.ListPicture.length !== 0){
    //     console.log('IMAGE_WORK');
    //     this.setState({
    //       picture: responseJsoni.ListPicture,
    //       isLoading: false,
    //     });
    //     console.log("IMAGE",this.state.picture);
    //   }else{
    //     console.log('IMAGE_NULL');
    //     this.setState({
    //       picture:[],
    //       isLoading: false,
    //     });
    //   }
    // })	
    // .catch(error=>{
    //   console.log('IMAGE_ERROR',error);
    //   this.setState({
    //     picture: [],
    //     isLoading: false, 
    //   });
    // });

  //ListView
  const { restaurant_id} = this.props.food;
  console.log("GET_RESTAURANT_ID"+ restaurant_id);
  const URLi = "https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557065498601&Count=7&RestaurantId="+restaurant_id;
  fetch(URLi,
    {
      method:"GET",
      headers: {
              Accept: 'application/json, text/plain, */*',
              'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
              'x-requested-with' : 'XMLHttpRequest'
      }
  })
  .then(responsei => responsei.json())
  .then(responseJsoni=>{
    if(responseJsoni.ListPicture.length !== 0){
      console.log('IMAGE_WORK');
      this.setState({
        //picture: this.state.picture.cloneWithRows(responseJsoni.ListPicture),
        picture: responseJsoni.ListPicture,
        isLoading: false,
      });
      // console.log("IMAGE",this.state.picture);
    }else{
      console.log('IMAGE_NULL');
      this.setState({
        // picture: this.state.picture.cloneWithRows([]),
        picture: [],
        isLoading: false,
      });
    }
  })	
  .catch(error=>{
    console.log('IMAGE_ERROR',error);
    this.setState({
      // picture: this.state.picture.cloneWithRows([]),
      picture:[],
      isLoading: false, 
    });
  });
  // this.setState({ isLoading: false, })
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
          // isLoading: false,
        });
        // console.log("COMMENT",this.state.comment);
      }else{
        console.log('COMMENT_NULL');
        this.setState({
          comment: this.state.comment.cloneWithRows([]),
          // isLoading: false,
        });
      }
    })	
    .catch(error=>{
      console.log('COMMENT_ERROR',error);
      this.setState({
        comment:  this.state.comment.cloneWithRows([]),
        // isLoading: false, 
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
          // isLoading: false,
        });
        // console.log("ME_NU",this.state.menu);
      }else{
        console.log('MENU_ERROR');
        this.setState({
          menu:[],
          // isLoading: false,
        });
      }
    })	
    .catch(error=>{
      console.log('_LOGIN_',error);
      console.log('CCCCCCCCCCCCCC');
      this.setState({
        menu: [],
        // isLoading: false, 
      });
    });
  }

  // getAllComment(){
  //   const { restaurant_id} = this.props.food;
  //   console.log("GET_RESTAURANT_ID"+ restaurant_id);
  //   const URLs = "https://www.foody.vn/__get/Review/ResLoadMore?t=1556358596613&ResId="+restaurant_id+"&LastId=0&Count=100&Type=1&isLatest=true&HasPicture=true";
  //   fetch(URLs,
  //       {method:"GET",
  //       headers: {
  //         Accept: 'application/json, text/plain, */*',
  //         'accept-language': 'vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5',
  //         'cache-control' : 'no-cache',
  //         'pragma' :  'no-cache',
  //         'x-requested-with' : 'XMLHttpRequest'
  //       }
  //   })
  //   .then(responses => responses.json())
  //   .then(responseJsons=>{
  //     if(responseJsons.Total !== 0){
  //       console.log('ALLCOMMENT_WORK');
  //       this.setState({
  //         allComment: this.state.allComment.cloneWithRows(responseJsons.Items),
  //         isLoading: false,
  //       });
  //       console.log("ALLCOMMENT",this.state.allComment);
  //     }else{
  //       console.log('ALLCOMMENT_NULL');
  //       this.setState({
  //         allComment: this.state.allComment.cloneWithRows([]),
  //         isLoading: false,
  //       });
  //     }
  //   })	
  //   .catch(error=>{
  //     console.log('ALLCOMMENT_ERROR',error);
  //     this.setState({
  //       allComment:  this.state.allComment.cloneWithRows([]),
  //       isLoading: false, 
  //     });
  //   });

  //   // this.refs.modal3.open();

  // }


componentDidMount(){
  this.getPicture();	
	this.getMenu();
  this.getComment();
  // this.getAllComment();    	
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

  // ListEmpty() {
  //   return (
  //     <View style={{backgroundColor:"red"}}>
  //      <Text> Không có bình luận nào! </Text>
  //      </View> 
  //   );
  // };


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
        <View/>
        {/* <TouchableOpacity  onPress={() => this.refs.modal2.open()} style={styles.ctnHeaderIcon}>
          <Image source={theme.Image.iCon.Save} style={styles.iconHeader}/>
        </TouchableOpacity> */}
    </View>
    );
    const infomationJSX=(
      <View style={styles.ctnFoodInfomation}>
        <TouchableOpacity style={styles.ctnText} onPress={() => this.refs.modal1.open()}>
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteAdress}/>
          <Text style={styles.txtAddress} numberOfLines={1}>  {address}</Text>
        </TouchableOpacity>
        <View style={styles.ctnText} >
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteHouse}/>
          <Text style={styles.txtCategory}>  { category.substring(0,category.length-2) }</Text>
        </View>
        <TouchableOpacity style={styles.ctnText}  onPress={this.callTheRestaurant}>
        <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteSmartPhone}/>
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
            backdropPressToClose={false}
            swipeToClose={false}
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
    // const dataPicture=(
    //   // <View>
    //   //   {this.state.picture.map((pic)=>{
    //   //     <Image source={{ uri: pic.FullSizeImageUrl }} style={styles.imageFood}/>
    //   //   })}
    //   // </View>
    //   <FlatList
    //       data={this.state.picture}
    //       showsVerticalScrollIndicator={false}
    //       renderItem={({pic}) =>
    //         <Image source={{ uri: pic.FullSizeImageUrl }} style={styles.imageFood}/>
    //       }
    //       keyExtractor={pic => pic.Id}
    //   />
    // );
    const pictureJSX=(
      <View style={styles.ctnImageFood}>
        <Swiper
          showsButtons={true} 
          width={width} 
          height={height/5}
          loop={true}
          autoplay={true} 
          showsPagination={true}
        >
                <FlatList
                    enableEmptySection
                    data={this.state.picture}
                    showsVerticalScrollIndicator={false}
                    renderItem={({pic}) =>
                      <Image source={{ uri: pic.FullSizeImageUrl }} style={styles.imageFood}/>
                    }
                    keyExtractor={pic => pic.Id}
                />
      {/* <FlatList
          data={this.state.picture}
          showsVerticalScrollIndicator={false}
          renderItem={({pic}) =>
            <Image source={{ uri: pic.FullSizeImageUrl }} style={styles.imageFood}/>
          }
          keyExtractor={pic => pic.Id}
      /> */}
        {/* <ListView 
          enableEmptySections
          dataSource={this.state.picture}
          renderRow={
            (pic) => 
            <Image source={{ uri: pic.FullSizeImageUrl }} style={styles.imageFood}/>
            }
        /> */}
        </Swiper>
      </View>
    );

    const commentJSX=(
      <View style={styles.ctnMenu}>
        <View style={styles.lbMenu}>
              <Text style={styles.txtMenu}>Bình Luận</Text>
        </View>
        <ListView
            enableEmptySection
            dataSource={this.state.comment}
            renderRow={
              (data) => 
                <View style={styles.ctnComment}>
                  <View style={styles.ctnUsername}>
                    <View style={styles.logoUsername}>
                      <Image source={{uri: data.Owner.Avatar}} style={styles.imageAvatar}                  />
                    </View>
                    <Text style={styles.txtUsername}>{data.Owner.DisplayName}</Text>
                    <Text style={styles.comment}> {String(data.AvgRating)}</Text>

                  </View>
                    <Text style={styles.comment}>{data.Description}</Text>
                    <Image source={{uri: data.Pictures[0].Url}} style={styles.imageComment} />
                </View>
            }
        />
        { this.state.comment.getRowCount() == 0 && (<Text>Không có bình luận nào!</Text>)}
        { this.state.comment.getRowCount() != 0 && (
          <View style={styles.btnComment}>
            <Text style={styles.txtButton}>Xem tất cả bình luận</Text>
          </View>
        )}
      </View>
    );
    const allCommentJSX=(
      <Modal
            style={[styles.modal, styles.modal3]}
            backdrop={true}
            coverScreen={true}
            ref={"modal3"}
            swipeToClose={false}
          >
            <View style={styles.ctnMapView}>

              <View style={styles.ctnHeaderMap}>
                <View style={styles.ctnCloseButton}></View>
                <View style={styles.ctnHeaderText}>
                  <Text style={styles.txtHeader} numberOfLines={1}>Bình luận</Text>
                </View>
                <TouchableOpacity onPress={() => this.refs.modal3.close()} style={styles.ctnHeaderIcon}>
                  <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
                </TouchableOpacity>
              </View>

              <View style={styles.ctnCommentArea}>
                <ListView 
                    enableEmptySections
                    dataSource={this.state.comment}
                    renderRow={
                      (data) => 
                        <View style={styles.ctnComment}>
                          <View style={styles.ctnUsername}>
                            <View style={styles.logoUsername}>
                              <Image source={{uri: data.Owner.Avatar}} style={styles.imageAvatar}                  />
                            </View>
                            <Text style={styles.txtUsername}>{data.Owner.DisplayName}</Text>
                            <Text style={styles.comment}> {data.AvgRating}</Text>

                          </View>
                            <Text style={styles.comment}>{data.Description}</Text>
                            <Image source={{uri: data.Pictures[0].Url}} style={styles.imageComment} />
                        </View>
                      }
               />
              </View> 

            </View>
          </Modal>
    );

  const menuJSX = (
    <View style={styles.ctnMenu}>
      <View style={styles.lbMenu}>
        <Text style={styles.txtMenu}>Thực Đơn</Text>
      </View>
      <FlatList
        enableEmptySection
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
              <Text style={styles.txtPrice}>{String(item.Price)}đ</Text>

            </View>
          </View>
        )}
        keyExtractor={item => item.Id}
      />
    </View>
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
          <Image source={theme.Image.iCon.Earth} />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#3498db' title="Gọi điện" onPress={this.callTheRestaurant}>
          <Image source={theme.Image.iCon.WhitePhone}/>
        </ActionButton.Item>

        <ActionButton.Item buttonColor='#1abc9c' title="Lưu lại" onPress={() => this.refs.modal2.open()}>
            <Image source={theme.Image.iCon.WhiteHeart}/>
        </ActionButton.Item>

    </ActionButton>
  );
  // if(!this.state.picture){
  //   return(
  //     <ActivityIndicator
  //         animating={true}
  //         style={styles.indicator}
  //         size="large"
  //       />
  //   );
  // } 
  return (
      <View style={{flex:1, backgroundColor: "white"}}>
        {headerJSX }
        <ScrollView style={styles.wrapper} >
            {pictureJSX }
            {infomationJSX}
            {mapJSX}
            {bookmarkJSX}

             {menuJSX}
            {commentJSX}

          </ScrollView>
        {actionButtonJSX}
        {allCommentJSX}
        </View>
      );
  }
}
