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
import Polyline from '@mapbox/polyline';
import Modal from 'react-native-modalbox';  
import ActionButton from 'react-native-action-button';
import Swiper from 'react-native-swiper';
import theme from '../../theme';
import MapViewDirections from 'react-native-maps-directions';
import styles from "./styles";
import getToken from '../../api/getToken';
import getMenuApi from '../../api/getMenuApi';
const {height , width} = Dimensions.get('window'); 

const GOOGLE_MAPS_APIKEY="AIzaSyAG2BnUcY2mW5_VY8Q6cVEabhl9l_Rokkk";
export default class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
	    isLoading: true,
      swipeToClose: false,
      comment : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      allComment : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      // picture : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      picture: [],
      isLoaded: false,
      menu:[],

      }
  }

  goBack() {
      const { navigator } = this.props;
      navigator.pop();
  }

  gotoSaveBookmark(idfood){
    const {navigator} = this.props;
    navigator.push({name: "SAVE_BOOKMARK",idfood});
  }


  gotoMap(location){
    const {navigator} = this.props;
    navigator.push({name: "MAP",location});
  }

  getPicture() {  
    //FlatList
    const {restaurant_id} = this.props.food;
    console.log("GET_RESTAURANT_ID"+ restaurant_id);
    const URLi = "https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557065498601&Count=7&RestaurantId="+restaurant_id;
    fetch(URLi,{
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
          picture: responseJsoni.ListPicture,
          isLoading: false,
        });
        console.log("IMAGE",this.state.picture);
      }else{
        console.log('IMAGE_NULL');
        this.setState({
          picture:[],
          isLoading: false,
        });
      }
    })	
    .catch(error=>{
      console.log('IMAGE_ERROR',error);
      this.setState({
        picture: [],
        isLoading: false, 
      });
    });
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
        });
      }else{
        console.log('COMMENT_NULL');
        this.setState({
          comment: this.state.comment.cloneWithRows([]),
        });
      }
    })	
    .catch(error=>{
      console.log('COMMENT_ERROR',error);
      this.setState({
        comment:  this.state.comment.cloneWithRows([]),
      });
    });
  }

  getMenu(){
    getToken()
    .then(token => getMenuApi(token, this.props.food.restaurant_id))
    .then(responseJsonMenu =>{
      if(responseJsonMenu.result === "success"){
        console.log('MENU_WORK');
        this.setState({
          menu: responseJsonMenu.data,
        });
      }else{
        console.log('MENU_ERROR');
        this.setState({
          menu:[],
        });
      }
    })
    .catch(error=>{
      console.log('_LOGIN_',error);
      this.setState({
        menu: [],
      });
    });
  }

  checkLogin(){
    getToken()
    .then(token => {
      if(token!==""){
        this.setState({ isLogin: true})
      }
    })
  }


  componentDidMount(){
    this.checkLogin();
    this.getPicture();	
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
        <View style={styles.ctnHeaderIcon}/>
      </View>
    );

    const infomationJSX=(
      <View style={styles.ctnFoodInfomation}>
        <View style={styles.lableMenu}>
              <Text style={styles.txtMenu}>Thông Tin Cửa Hàng</Text>
        </View>
        <TouchableOpacity style={styles.ctnInfomationRow} onPress={() => this.gotoMap(this.props.food)}>
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteAdress}/>
          <Text style={styles.txtAddress} numberOfLines={1}>  {address}</Text>
        </TouchableOpacity>
        <View style={styles.ctnInfomationRow} >
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteHouse}/>
          <Text style={styles.txtCategory}>  { category.substring(0,category.length-2) }</Text>
        </View>
        <TouchableOpacity style={styles.ctnInfomationRow}  onPress={this.callTheRestaurant}>
        <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteSmartPhone}/>
          <Text style={styles.txtPhoneNumber}>  0369380628  {restaurant_id}</Text>
        </TouchableOpacity>
      </View>
    );


    const saveJSX=(
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
              <View style={styles.ctnBodyMap}>
              </View> 
            </View>
          </Modal>
    );

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
       
                  {this.state.picture.map(pic => (
                      <Image key={pic.Id} 
                      source={{ uri: pic.FullSizeImageUrl }} 
                      style={styles.imageFood}/>

                    ))}
        </Swiper>
      </View>
    );

    const commentJSX=(
      <View style={styles.ctnMenu}>
        <View style={styles.lableMenu}>
              <Text style={styles.txtMenu}>Bình Luận</Text>
        </View>
        <ListView
            enableEmptySections={true}
           dataSource={this.state.comment}
            renderRow={
              (data) => 
                <View style={styles.ctnComment}>

                  <View style={styles.ctnUsername}>

                    <View style={styles.ctnUsernameArea}>
                      <View style={styles.logoUsername}>
                        <Image source={{uri: data.Owner.Avatar}} style={styles.imageAvatar}                  />
                      </View>
                      <Text style={styles.txtUsername}>{data.Owner.DisplayName}</Text>
                    </View>

                    <View style={styles.ctnScore}>
                      <Text style={styles.txtScore}>đã chấm {String(data.AvgRating/2)} đ</Text>
                    </View>

                  </View>
                    <Text style={styles.comment}>{data.Description}</Text>
                    <Image source={{uri: data.Pictures[0].Url}} style={styles.imageComment} />
                </View>
            }
        />
        { this.state.comment.getRowCount() == 0 && (<Text>Không có bình luận nào!</Text>)}
        { this.state.comment.getRowCount() >= 10 && (
          <TouchableOpacity style={styles.btnComment} onPress={() => this.refs.modal3.open()}>
            <Text style={styles.txtButton}>Xem tất cả bình luận</Text>
          </TouchableOpacity>
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
                    enableEmptySections={true}
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
      <View style={styles.lableMenu}>
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
              item.image !== "/style/images/deli-dish-no-image.png"  ?
              <Image source={{uri: "https:"+item.image }}  style={styles.imgeItem}/> :
              <Image source={theme.Image.iCon.NoImage} style={styles.imgeItem}/> //style={{width: width/4 , height: height/13,flex:1}}
              }
            </View>

            <View  style={styles.ctnInfomationItem}>
              <Text style={styles.txtItem} numberOfLines={1}>{item.name}</Text>
              <Text style={styles.txtPrice}>{String(item.price)} đ {item.food_id}</Text>
            </View>
              { this.state.isLogin ?
                <View style={styles.ctnHeartIcon}>
                  <View/>
                  <TouchableOpacity onPress={()=> this.gotoSaveBookmark(item.food_id )}>
                    <Image source={theme.Image.iCon.saveBookmark} style={styles.imageHeart}/>
                  </TouchableOpacity>
                  <View/>
                </View> :
                <View/>
              }


          </View>
        )}
        keyExtractor={item => item.id}
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
    <ActionButton buttonColor={theme.Color.LightRed}>
        <ActionButton.Item 
          buttonColor={theme.Color.NicePurple}
          title="Bản đồ" 
          textStyle={{fontSize: theme.Size.FontSmall}} 
          spaceBetween={5}
          textContainerStyle={{height:25}}       
          onPress={() => this.gotoMap(this.props.food)}>
          <Image source={theme.Image.iCon.Earths} style={styles.iconActionButton}/>
        </ActionButton.Item>

        <ActionButton.Item 
        buttonColor={theme.Color.NiceBlue} 
        title="Gọi điện" 
        textStyle={{fontSize: theme.Size.FontSmall}} 
        spaceBetween={5}
        textContainerStyle={{height:25}}       
        onPress={this.callTheRestaurant}>
          <Image source={theme.Image.iCon.WhitePhone} style={styles.iconActionButton}/>
        </ActionButton.Item>

        {/* <ActionButton.Item 
          buttonColor={theme.Color.NiceGreen} 
          title="Lưu lại" 
          textStyle={{fontSize: theme.Size.FontSmall}} 
          spaceBetween={5}
          textContainerStyle={{height:25}}       
          onPress={() => this.refs.modal2.open()}>
            <Image source={theme.Image.iCon.WhiteHeart} style={styles.iconActionButton}/>
        </ActionButton.Item> */}

    </ActionButton>
  );

  return (
      <View style={styles.wrapper}>
        {headerJSX }
        <ScrollView style={styles.body} >
            {pictureJSX }
            {infomationJSX}
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
