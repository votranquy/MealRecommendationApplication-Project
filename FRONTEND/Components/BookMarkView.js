import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image, Alert,
} from 'react-native';
import global from './global';
import theme from '../theme';
import getToken from "../api/getToken";
import getBookmarkApi from "../api/getBookmarkApi";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import deleteItemApi from '../api/deleteItemApi';
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
      }
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

    alertSuccess(responseJson) {
      Alert.alert(
          'Notice',
          'Delete successfully' + responseJson,
          [
              { text: 'OK', onPress: this.getData.bind(this) }
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

      // this.alerttest(idBookmark,idFood );
      getToken()
      .then(token => deleteItemApi(token, idBookmark, idFood))
      .then((responseJson)=>{
        this.alertSuccess(responseJson.result);
      }
      )
      .catch(err => console.log(err))
    }


    componentDidMount(){
     this.getData();
   }     



    render() {
        // const { main, checkoutButton, checkoutTitle, wrapper,
        //     productStyle, mainRight, productController,
        //     txtName, txtPrice, productImage, numberOfProduct,
        //     txtShowDetail, showDetailContainer } = styles;
        // const { bookmarkArray } = this.props;
        //const arrTotal = cartArray.map(e => e.product.price * e.quantity);
        //const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0;


        return (
            <View style={styles.wrapper}>

            <View style={styles.row1}>
              <Text style={styles.titleStyle}>BookMark</Text>
            </View>

              <ListView
                  contentContainerStyle={styles.main}
                  enableEmptySections
                  dataSource={this.state.dataSource}
                  renderRow={e => (
                    <Collapse
                    isCollapsed={true}
                    >
                      <CollapseHeader>
                          <View style={styles.image} >
                            <Text>{e.bookmark_name}</Text>
                          </View>
                      </CollapseHeader>
                      <CollapseBody>
                            { e.food.map((food) =>
                                <TouchableOpacity 
                                activeOpacity={0.8}  
                                onPress={() => this.gotoDetail(food)} 
                                key={food.id} style={styles.ctnRestaurant}>
                                <View style={styles.ctnImage} >
                                  <Image style={styles.image} source={{uri: food.image_path}} />
                                </View>
                                <View style={styles.ctnInfomation}>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtName} numberOfLines={1}>{food.food_name }</Text>
                                  </View>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtRate}>{food.rate != "0" ? food.rate+ "★" : "Chưa có đánh giá"}</Text>
                                  </View>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtAddress} numberOfLines={1}>{food.address}</Text>
                                  </View>
                                  <View style={styles.cntText}>
                                    <Text style={styles.txtMenu} numberOfLines={1}>{food.menu}</Text>
                                  </View>
                                  <TouchableOpacity style={styles.cntText} onPress={() => this.deleteItem(e.idbookmark, food.restaurant_id)}  >
                                    <Text style={styles.txtMenu}> Xóa </Text>
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
  });
  