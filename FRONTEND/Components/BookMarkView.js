import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image, Alert,TextInput
} from 'react-native';
import global from './global';
import theme from '../theme';
import getToken from "../api/getToken";
import getBookmarkApi from "../api/getBookmarkApi";
import createBookmarkApi from "../api/createBookmarkApi";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import deleteItemApi from '../api/deleteItemApi';
import Modal from 'react-native-modalbox'; 
// import { Thumbnail, List, ListItem, Separator } from 'native-base';

// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
// }

// const url = 'http://10.0.12.57/MyShop/api/images/product/';

export default class BookMarkView extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      text:"",
      user: null,
      }
      global.onSignIn = this.onSignIn.bind(this);
    }
    // incrQuantity(id) {
    //     global.incrQuantity(id);
    // }
    // decrQuantity(id) {
    //     global.decrQuantity(id);
    // }
    // removeFood(id) {
    //     global.removeFood(id);
    // }

    onSignIn(user) {
      this.setState({ user });
  }

    gotoDetail(food) {
        const { navigator } = this.props;
        navigator.push({ name: 'FOOD_DETAIL' ,food});
    }

    getData(){
      getToken()
      .then(token => getBookmarkApi(token))
      .then(
        (responseData)=>{
            this.setState({
              dataSource: this.state.dataSource.cloneWithRows(responseData),
            });
          }
        )  
      .catch(err => console.log(err));
    }

    alertSuccess(idBookmark, idFood) {
      Alert.alert(
          'Notice',
          'Xác nhận xóa ',
          [
              { text: 'Hủy', onPress: ()=>Console.log("HUY_XOA") },
              { text: 'OK',  onPress: this.deleteItem(idBookmark, idFood) },
          ],
          { cancelable: false }
      );
  }

insertDone(){
  this.getData();
  this.refs.modal1.close();
}

  alertInsertSuccess(responseJson) {
    Alert.alert(
        'Notice',
        'Tạo mới thành  công ',
        [
            { text: 'OK',  onPress:    this.insertDone.bind(this) },
        ],
        { cancelable: false }
    );
}


//   alerttest(A,B) {
//     Alert.alert(
//         'Notice',
//         'Delete successfully ' + A +" "+ B,
//         [
//             { text: 'OK', onPress: ()=> console.log("") }
//         ],
//         { cancelable: false }
//     );
// }

    deleteItem(idBookmark, idFood){
      getToken()
      .then(token => deleteItemApi(token, idBookmark, idFood))
      .then((responseJson)=>{
        this.getData();
      })
      .catch(err => console.log(err))
    }

    createNewBookmark(text){
      getToken()
      .then(token => createBookmarkApi(token, text) )
      .then((responseJson)=>{
        // this.getData();
        this.alertInsertSuccess(responseJson);
      })
      .catch(err => console.log(err))
      // .then((responseJson)=>{
      //   console.log(responseJson);
      //   this.alertInsertSuccess(responseJson);
      // })
      // .catch(err => console.log(err))
    }


    componentDidMount(){
     this.getData();
   }     



    render() {
      const { user } = this.state;
        // const { main, checkoutButton, checkoutTitle, wrapper,
        //     productStyle, mainRight, productController,
        //     txtName, txtPrice, productImage, numberOfProduct,
        //     txtShowDetail, showDetailContainer } = styles;
        // const { bookmarkArray } = this.props;
        //const arrTotal = cartArray.map(e => e.product.price * e.quantity);
        //const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;
        const createBookmarkJSX=(
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
                    <View style={styles.ctnCloseButton}>
                    </View>
                    <View style={styles.ctnHeaderText}>
                      <Text style={styles.txtHeader} numberOfLines={1}>Tạo danh sách mới</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.refs.modal1.close()} style={styles.ctnHeaderIcon}>
                      <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
                    </TouchableOpacity>
                  </View>
                  
                  <View style={styles.ctnMapArea}>
                  <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                  <TouchableOpacity style={styles.btnComment} onPress={() => this.createNewBookmark(this.state.text)}>
                    <Text style={styles.txtButton}> Tạo mới</Text>
                  </TouchableOpacity>
                  </View> 
                </View>
              </Modal>
        );
          const loginJSX=(
            <View>
              <TouchableOpacity style={styles.btnComment} onPress={() => this.refs.modal1.open()}>
                <Text style={styles.txtButton}> Tạo danh sách mới</Text>
              </TouchableOpacity>
               {createBookmarkJSX}
              <ListView
                  contentContainerStyle={styles.main}
                  enableEmptySection
                  dataSource={this.state.dataSource}
                  renderRow={e => (
                    <Collapse isCollapsed={true} >
                      <CollapseHeader>
                          <View style={styles.ctnBookmarkName} >
                            <Image source={theme.Image.iCon.Folder} style={styles.iconFoler} />
                            <Text style={styles.txtBookmark}>{e.bookmark_name}</Text>
                          </View>
                      </CollapseHeader>
                      <CollapseBody>
                            { e.food.map((food) =>
                                <TouchableOpacity 
                                activeOpacity={0.8}  
                                onPress={() => this.gotoDetail(food)} 
                                key={food.food_id} style={styles.ctnRestaurant}>
                                <View style={styles.ctnImage} >
                                  <Image style={styles.image} source={{uri: "https:"+food.image}} />
                                </View>
                                <View style={styles.ctnInfomation}>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtName} numberOfLines={1}>{food.name }</Text>
                                  </View>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtRate}  numberOfLines={1}>{food.food_name}</Text>
                                  </View>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtAddress} numberOfLines={1}>{food.address}</Text>
                                  </View>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtMenu} numberOfLines={1}>{food.price}đ</Text>
                                  </View>
                                  <TouchableOpacity style={styles.cntBtnDelete} onPress={() => this.alertSuccess(e.idbookmark, food.food_id)} >
                                    <Text style={styles.txtBtnDelete}> Xóa </Text>
                                  </TouchableOpacity> 
                                </View>  
                              </TouchableOpacity>
                            )}
                      </CollapseBody>      
                    </Collapse>        
                  )}
              />
            </View>  
          );
          const logoutJSX=( <View></View>);
          const mainJSX= this.state.user ? loginJSX : logoutJSX;
        return (
          <View style={styles.wrapper}>
          <View style={styles.row1}>
            <Text style={styles.titleStyle}>Danh sách đã lưu</Text>
          </View>
          {mainJSX}
          </View>
            );
    }
}

const { width, height} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    main: {
        width, backgroundColor: '#EEE'
    },
    wrapper:{
        flex:1
    },
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
    ctnBookmarkName:{
      flex:0.3,
      margin:5,
      // borderWidth:1,
      // borderColor:"black",
      borderRadius: 100,
      flexDirection:"row",
      alignItems:"center",
    },
    iconFoler:{
      width:width/17,
      height:width/17,
      marginRight:5,
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
    row1:{
      flexDirection: 'row',
      alignItems:'center', 
      // marginBottom:10,
      height: height / 17, 
      backgroundColor: theme.Color.NiceRed,
      padding:5, 
      justifyContent:'space-around'
   },
   titleStyle:{
    color: '#FFF', 
    fontSize: theme.Size.FontMedium, 
    alignItems:'center',
     justifyContent:"space-between",
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
    // borderRadius: 100
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
  cntBtnDelete:{
    // flex:1,
    width:width/8,
    height:width/10,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
    padding:3,
    backgroundColor: theme.Color.NiceRed,
  },
  txtBtnDelete:{
    color: theme.Color.White,
    fontWeight:"900",
  },
  txtName:{
    color:"green",
    fontSize: theme.Size.FontBig,
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
  btnComment:{
    backgroundColor: theme.Color.NiceRed,
    alignItems:"center",
    padding:10,
    margin:2,
  },
  txtButton:{
    color: theme.Color.White,
    fontWeight:"bold",
  },
  ctnMapView: {
    height:height,
    width:width,
    flex:1,
   },
   ctnHeaderMap:{
    flex:1,
    flexDirection:"row",
    backgroundColor: theme.Color.NiceRed,
    alignItems:"center",
  },
  ctnCloseButton:{
    flex: 0.1,
    alignItems:"center",
  },
  ctnHeaderText:{
    flex:0.8,
    alignItems:'center',
  },
  txtHeader:{
    color: '#FFF',
     fontSize: theme.Size.FontBig,
  },
  ctnHeaderIcon:{
    flex:0.1,
    padding:1,
    alignItems:'center',
  },
  iconHeader:{
    flex:1,
    width:  width/17,
    height: width/17,
  },
  ctnMapArea:{
    flex:14,
    backgroundColor: theme.Color.White,
  },
  txtBookmark:{
    fontSize:20,
    fontWeight:"900",
    color: theme.Color.NiceRed, 
  },
  });
  