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
    TextInput
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
import getAnotherMenuApi from '../../api/getAnotherMenuApi';
import getFoodInformationAPI from '../../api/getFoodInformationAPI';
import getPersonalVoteAPI from '../../api/getPersonalVoteAPI';
import increaseViewAPI from "../../api/increaseViewAPI";
import StarRating from 'react-native-star-rating';
import TimeAgo from 'react-native-timeago';
import getCommentAPI from '../../api/getCommentAPI';
const {height , width} = Dimensions.get('window'); 
const GOOGLE_MAPS_APIKEY="AIzaSyAG2BnUcY2mW5_VY8Q6cVEabhl9l_Rokkk";

export default class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
	    isLoading: true,
      swipeToClose: false,
      // comment : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      allComment : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      picture: [],
      isLoaded: false,
      menu:[],
      phonenumber : `${"09"}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`,
      foodImage: "",
      foodName: "",
      foodPrice:"",
      storeAddress:"",
      storeCategory:"",
      starCount: 0,
      comment:"",
      commentList:[],
      avarageScore:0,
      totalVote:0,
      totalView:0,
      restaurant_id:0,
      }
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  gotoHome(){
    this.props.showTabNavigator();
    const { navigator } = this.props;
    navigator.push({name: "HOME_VIEW"});
}

  gotoVote(starCount, comment, id_food) {
    const { navigator } = this.props;
    navigator.push({name: "VOTE", starCount ,comment ,id_food });
  }

  gotoMap(food_id, restaurant_id){
    const {navigator} = this.props;
    navigator.push({name: "MAP",food_id, restaurant_id});
  }

  gotoAnotherFood(food_id,restaurant_id) {
    const { navigator } = this.props;
    navigator.push({name:  "FOOD_DETAIL", food_id,restaurant_id});
  }

  gotoSaveBookmark(idfood){
    const {navigator} = this.props;
    navigator.push({name: "SAVE_BOOKMARK",idfood});
  }


//done
  getFoodInformation(){
    getFoodInformationAPI(this.props.food_id)
    .then((responseJson)=>{
      if(responseJson.result === "success"){
       this.setState({
         foodImage: responseJson.data[0].image,
         foodName: responseJson.data[0].name,
         foodPrice: responseJson.data[0].price,
         storeAddress: responseJson.data[0].address,
         storeCategory: responseJson.data[0].category,
         avarageScore:responseJson.data[0].average_score,
         totalVote:responseJson.data[0].total_vote,
         totalView:responseJson.data[0].total_view,
         restaurant_id: responseJson.data[0].restaurant_id,
        })
      }
    })
    .catch(error=>{
      console.log('GET_IMAGE_ERROR',error);
    });
  }
//done
  getPersonalVote(){
    getToken()
    .then(token =>{ return getPersonalVoteAPI(token, this.props.food_id)})
    .then((responseJson)=>{
      if(responseJson.result === "success"){
        this.setState({
          starCount: parseInt(responseJson.data[0].rate),
          comment:  responseJson.data[0].comment,
        })
      }
    })
    .catch(error=>{
      console.log('GET_PERSONAL_VOTE_ERROR',error);
    });
  }
//done
  increaseView(){
    increaseViewAPI(this.props.food_id)
    .then((responseJson)=>{
      // console.log("INCEASEVIEW",responseJson);
      if(responseJson.result === "success"){
        console.log("INCREASE_VIEW_SUCCESS");
      }else{
        console.log("INCREASE_VIEW_FAIL");
      }
    })
    .catch(error=>{
      console.log('INCREASE_VIEW_ERROR',error);
    });
  }
//done
  getComment(){
    getCommentAPI(this.props.food_id)
    .then((responseJson)=>{
      // console.log("COMMENT",responseJson);
      if(responseJson.result === "success"){
       this.setState({
        commentList: responseJson.data,
        })
      }
    })
    .catch(error=>{
      console.log('GET_COMMENT_ERROR',error);
    });
  }

  getPicture() {  
    //FlatList
    // const {restaurant_id} = this.props;
    // console.log("GET_RESTAURANT_ID"+ restaurant_id);
    const URLi = "https://www.foody.vn/__get/Restaurant/Mobile_Get_HomePictures?t=1557065498601&Count=7&RestaurantId="+this.props.restaurant_id;
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
          // isLoading: false,
        });
        // console.log("IMAGE",this.state.picture);
      }else{
        console.log('IMAGE_NULL');
        this.setState({
          picture:[],
          // isLoading: false,
        });
      }
    })	
    .catch(error=>{
      console.log('IMAGE_ERROR',error);
      this.setState({
        picture: [],
        // isLoading: false, 
      });
    });
  }

  getMenu(){
    getAnotherMenuApi(this.props.restaurant_id, this.props.food_id)
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
    this.props.hiddenTabNavigator();
    // this.checkLogin();
    // 
    // this.getComment();
    this.increaseView();
    this.getFoodInformation();
    this.getPersonalVote();
    this.getComment();
    this.getMenu();
  	
  }

  callTheRestaurant(phonenumber){
    const args = {
      number: this.state.phonenumber,
      prompt: false,
    }
    Alert.alert(
      'Liên lạc',
      'Xác nhận gọi đến của hàng này',
      [
        {
          text: 'Hủy bỏ', onPress: () => console.log('Cancel Pressed'), style: 'cancel',
        },
        {text: 'Xác nhận', onPress: () => call(args).catch(console.error)},
      ],
      {cancelable: false},
    );
  }

  // getNumber(){
  //    `${"09"}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`
  // }
// formatMoney(money){
//   var num = money.length();
//   return `${money.substring(0,num-3)}${","}${money.substring(num-3,num)}`;
// }




  render() {
    // const {category, food_name,  address, latitude, longitude, restaurant_id} = this.props.food;
    const {starCount, comment} = this.state;
    const headerJSX=(
      <View style={styles.ctnHeader}>
        <TouchableOpacity  onPress={this.gotoHome.bind(this)} style={styles.ctnHeaderIcon}>
          <Image source={theme.Image.iCon.WhiteBack} style={styles.iconHeader}/>
        </TouchableOpacity>
        <View style={styles.ctnHeaderText}>
          <Text style={styles.txtHeader} numberOfLines={1}>{this.state.foodName}</Text>
        </View>
        <View style={styles.ctnHeaderIcon}/>
      </View>
    );

    const InfomationJSX = (
      <View style={styles.ctnFoodInfomation}>
        <View style={styles.lableMenu}>
              <Text style={styles.txtMenu}>Thông Tin</Text>
        </View>
        {/* <View style={styles.ctnInfomationRow} >
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteDisk}/>
          <Text style={styles.txtCategory}>  { this.state.foodName }</Text>
        </View> */}
        <View style={styles.ctnInfomationRow} >
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteMoney}/>
          <Text style={styles.txtCategory}>  { this.state.foodPrice } đ {this.props.food_id} {this.props.restaurant_id}</Text>
        </View>
        <TouchableOpacity style={styles.ctnInfomationRow} 
        onPress={() => this.gotoMap(this.props.food_id, this.state.restaurant_id)}
        >
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteAdress}/>
          <Text style={styles.txtAddress}>  {this.state.storeAddress}</Text>
        </TouchableOpacity>
        <View style={styles.ctnInfomationRow} >
          <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteHouse}/>
          <Text style={styles.txtCategory}>  { this.state.storeCategory.substring(0,this.state.storeCategory.length-2) }</Text>
        </View>
        <TouchableOpacity style={styles.ctnInfomationRow}  onPress={()=>this.callTheRestaurant(this.state.phonenumber)}>
         <Image style={styles.iconInfomation} source={theme.Image.iCon.WhiteSmartPhone}/>
          <Text style={styles.txtPhoneNumber}>  {this.state.phonenumber}  </Text>
        </TouchableOpacity>
      </View>
    );


    // const saveJSX=(
    //   <Modal
    //         style={[styles.modal, styles.modal1]}
    //         backdrop={true}
    //         coverScreen={true}
    //         ref={"modal1"}
    //         backdropPressToClose={false}
    //         swipeToClose={false}
    //     >
    //         <View style={styles.ctnMapView}>
    //           <View/>
    //           <View style={styles.ctnHeaderMap}>
    //             <View style={styles.ctnCloseButton}></View>
    //             <View style={styles.ctnHeaderText}>
    //               <Text style={styles.txtHeader} numberOfLines={1}>{food_name}</Text>
    //             </View>
    //             <TouchableOpacity onPress={() => this.refs.modal1.close()} style={styles.ctnHeaderIcon}>
    //               <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
    //             </TouchableOpacity>
    //           </View>
    //           <View style={styles.ctnBodyMap}>
    //           </View> 
    //         </View>
    //       </Modal>
    // );

    const RestaurantPictureJSX=(
      
      <View style={styles.ctnFoodInfomation}>
      <View style={styles.lableMenu}>
            <Text style={styles.txtMenu}>Một Số Hình Ảnh Về Cửa Hàng</Text>
      </View>
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
    </View>
    );

    const commentJSX=(
      <View style={styles.ctnMenu}>
        <View style={styles.lableMenu}>
              <Text style={styles.txtMenu}>Đánh Giá Từ Mọi Người</Text>
        </View>
        <FlatList
            enableEmptySection
           data={this.state.commentList}
           showsVerticalScrollIndicator={false}
           renderItem={
            ({item}) => (
                <View style={styles.ctnComment}>
                  <View style={styles.ctnUsername}>
                    <View style={styles.ctnUsernameArea}>
                      <View style={styles.logoUsername}>
                        <Image source={theme.Image.iCon.QuestionMark} style={styles.imageAvatar}                  />
                      </View>
                      <Text style={styles.txtUsername}>{item.name}</Text>
                    </View>
                    <View style={styles.ctnScore}>
                      <Text style={styles.txtScore}>đã đánh giá {item.rate} sao</Text>
                    </View>
                  </View>
                  <Text style={styles.comment}>{item.comment}</Text>
                  {/* <Text>Thời gian: {item.updated_time}</Text> */}
                  <TimeAgo time={item.updated_time} />
                </View>
            )}
            keyExtractor={item => item.id}
        />
        { this.state.commentList.length == 0 && (<Text>Không có đánh giá nào!</Text>)}
        { this.state.commentList.length >= 10 && (
          <TouchableOpacity style={styles.btnComment} 
          // onPress={() => this.refs.modal3.open()}
          >
            <Text style={styles.txtButton}>Xem tất cả đánh giá</Text>
          </TouchableOpacity>
        )}
      </View>
    );


    
  //   const allCommentJSX=(
  //     <Modal
  //           style={[styles.modal, styles.modal3]}
  //           backdrop={true}
  //           coverScreen={true}
  //           ref={"modal3"}
  //           swipeToClose={false}
  //         >
  //           <View style={styles.ctnMapView}>
  //             <View style={styles.ctnHeaderMap}>
  //               <View style={styles.ctnCloseButton}></View>
  //               <View style={styles.ctnHeaderText}>
  //                 <Text style={styles.txtHeader} numberOfLines={1}>Bình luận</Text>
  //               </View>
  //               <TouchableOpacity onPress={() => this.refs.modal3.close()} style={styles.ctnHeaderIcon}>
  //                 <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
  //               </TouchableOpacity>
  //             </View>
  //             <View style={styles.ctnCommentArea}>
  //               <ListView 
  //                   enableEmptySections={true}
  //                   dataSource={this.state.comment}
  //                   renderRow={
  //                     (data) => 
  //                       <View style={styles.ctnComment}>
  //                         <View style={styles.ctnUsername}>
  //                           <View style={styles.logoUsername}>
  //                             <Image source={{uri: data.Owner.Avatar}} style={styles.imageAvatar}                  />
  //                           </View>
  //                           <Text style={styles.txtUsername}>{data.Owner.DisplayName}</Text>
  //                           <Text style={styles.comment}> {data.AvgRating}</Text>

  //                         </View>
  //                           <Text style={styles.comment}>{data.Description}</Text>
  //                           <Image source={{uri: data.Pictures[0].Url}} style={styles.imageComment} />
  //                       </View>
  //                     }
  //              />
  //             </View> 

  //           </View>
  //         </Modal>
  //   );

  const MenuJSX = (
    <View style={styles.ctnMenu}>
      <View style={styles.lableMenu}>
        <Text style={styles.txtMenu}>Món Ăn Khác Ở Cùng Cửa Hàng</Text>
      </View>
      <FlatList
        enableEmptySection
        data={this.state.menu}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => (

          <TouchableOpacity style={styles.ctnItem} onPress={()=> this.gotoAnotherFood(item.id, item.restaurant_id)}>
            <View style={styles.ctnImageItem}>
              { 
              item.image !== "/style/images/deli-dish-no-image.png"  ?
              <Image source={{uri: "https:"+item.image }}  style={styles.imgeItem}/> :
              <Image source={theme.Image.iCon.NoImage} style={styles.imgeItem}/> //style={{width: width/4 , height: height/13,flex:1}}
              }
            </View>
              {/* { this.state.isLogin ?
              <View style={styles.ctnRestImage}>
                <View  style={styles.ctnInfomationItem}>
                  <Text style={styles.txtItem} numberOfLines={1}>{item.name}</Text>
                  <Text style={styles.txtPrice}>{String(item.price)} đ </Text>
              </View>
                <View style={styles.ctnHeartIcon}>
                  <View/>
                  <TouchableOpacity onPress={()=> this.gotoSaveBookmark(item.food_id )}>
                    <Image source={theme.Image.iCon.saveBookmark} style={styles.imageHeart}/>
                  </TouchableOpacity>
                  <View/>
                </View>
                </View>
                 : */}
            <View  style={styles.ctnInfomationItem2}>
                 <Text style={styles.txtItem} numberOfLines={1}>{item.name}</Text>
                 <Text style={styles.txtPrice}>{String(item.price)} đ </Text>
             </View>
              {/* } */}
          </TouchableOpacity>



        )}
        keyExtractor={item => item.id}
      />
    </View>
  );

  // const bookmarkJSX=(
  //   <Modal
  //   style={[styles.modal, styles.modal2]}
  //   backdrop={true}
  //   coverScreen={true}
  //   ref={"modal2"}
  // >
  // <View style={styles.ctnMapView}>
  //     <View style={styles.ctnHeaderMap}>
  //       <View style={styles.ctnCloseButton}></View>
  //       <View style={styles.ctnHeaderText}>
  //         <Text style={styles.txtHeader} numberOfLines={1}>BOOKMARK</Text>
  //       </View>
  //       <TouchableOpacity onPress={() => this.refs.modal2.close()} style={styles.ctnHeaderIcon}>
  //         <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
  //       </TouchableOpacity>
  //     </View>
  //     <View style={styles.ctnMapArea}>
  //     </View>
  //   </View>
  // </Modal>
  // );

  // const actionButtonJSX=(
  //   <ActionButton buttonColor={theme.Color.LightRed}>
  //       <ActionButton.Item 
  //         buttonColor={theme.Color.NicePurple}
  //         title="Bản đồ" 
  //         textStyle={{fontSize: theme.Size.FontSmall}} 
  //         spaceBetween={5}
  //         textContainerStyle={{height:25}}       
  //         onPress={() => this.gotoMap(this.props.food)}>
  //         <Image source={theme.Image.iCon.Earths} style={styles.iconActionButton}/>
  //       </ActionButton.Item>

  //       <ActionButton.Item 
  //       buttonColor={theme.Color.NiceBlue} 
  //       title="Gọi điện" 
  //       textStyle={{fontSize: theme.Size.FontSmall}} 
  //       spaceBetween={5}
  //       textContainerStyle={{height:25}}       
  //       onPress={this.callTheRestaurant}>
  //         <Image source={theme.Image.iCon.WhitePhone} style={styles.iconActionButton}/>
  //       </ActionButton.Item>

  //       {/* <ActionButton.Item 
  //         buttonColor={theme.Color.NiceGreen} 
  //         title="Lưu lại" 
  //         textStyle={{fontSize: theme.Size.FontSmall}} 
  //         spaceBetween={5}
  //         textContainerStyle={{height:25}}       
  //         onPress={() => this.refs.modal2.open()}>
  //           <Image source={theme.Image.iCon.WhiteHeart} style={styles.iconActionButton}/>
  //       </ActionButton.Item> */}

  //   </ActionButton>
  // );


  //done
  const VoteJSX=(
    <TouchableOpacity 
    style={styles.ctnFoodInfomation}
    onPress={()=>this.gotoVote(starCount, comment, this.props.food_id)}
    > 
      <View style={styles.lableMenu}>
            <Text style={styles.txtMenu}>Đánh Giá Từ Bạn</Text>
      </View>
      <StarRating 
        disabled={true}
        maxStars={5}
        starColor={"red"}
        starSize={30}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
      <Text>{this.state.comment !="" ? this.state.comment : "Mời bạn đánh giá!"}</Text>
  </TouchableOpacity>
  );
// fix map and call
  const FoodImageJSX=(
      <View style={styles.ctnImageFood}>
        <Image 
          source={{uri: "https:"+this.state.foodImage }}
          style={styles.imageFood}
        />
      </View>               
  );
  const ReviewJSX=(
    <View style={{alignItems:"center"}}>
    <View style={styles.ctnReview}>

      <View style={styles.ctnCellReview}>
          <Text style={styles.txtBigScore}>{String(Math.round(this.state.avarageScore * 10) / 10)}</Text>
          <Text>Điểm trung bình</Text>
      </View>

      <View style={styles.ctnCellReview}>
          <Text style={styles.txtBigScore}>{String(this.state.totalVote)}</Text>
          <Text>Tổng đánh giá</Text>
      </View>

      <View style={styles.ctnCellReview}>
          <Text style={styles.txtBigScore}>{String(this.state.totalView)}</Text>
          <Text>Tổng lượt xem</Text>
      </View>

    </View>
    <Text style={styles.txtSuperBigScore}>{ this.state.foodName }</Text>
    {/* <Text style={styles.txtBigScore}>{ this.state.foodPrice } đ</Text> */}
    </View>
  );



  return (
        <View style={styles.wrapper}>
          {headerJSX }
          <ScrollView style={styles.body} >
              {this.state.foodImage != "/style/images/deli-dish-no-image.png" ? FoodImageJSX : <View/>}
              {ReviewJSX}
              {InfomationJSX}
              {VoteJSX}
              {commentJSX}
              {this.state.picture.length > 0 ? RestaurantPictureJSX : <View/>}
              {MenuJSX}
              {/* 
              {RestaurantPictureJSX}
              
              {commentJSX}
               {bookmarkJSX} */}
            </ScrollView>
            {/* {actionButtonJSX} */}
            {/* {allCommentJSX} */}
          </View>
    );
  }
}
