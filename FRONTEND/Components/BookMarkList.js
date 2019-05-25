import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image, Alert,TextInput,ScrollView
} from 'react-native';
import global from './global';
import theme from '../theme';
import getToken from "../api/getToken";
import getBookmarkApi from "../api/getBookmarkApi";
import getOneBookmarkApi from "../api/getOneBookmarkApi";
import createBookmarkApi from "../api/createBookmarkApi";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import deleteItemApi from '../api/deleteItemApi';
import Modal from 'react-native-modalbox'; 


export default class BookMarkList extends Component {
  constructor(props){
    super(props);
    this.state = {
      listFood: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      BookmarkName:"",
      }
    }

  gotoDetail(food) {
        const { navigator } = this.props;
        navigator.push({ name: 'FOOD_DETAIL' ,food});
  }

  goBack() {
      const { navigator } = this.props;
      navigator.pop();
  }

  getData(){
    getToken()
    .then(token =>{ return(getOneBookmarkApi(token, this.props.idbookmark));})
    .then((responseData)=>{
      if(responseData.result === "success"){
        this.setState({
          listFood: this.state.listFood.cloneWithRows(responseData.data), 
          BookmarkName: responseData.bookmarkname,
        });
      }
      else{ 
        this.setState({ 
          listFood: this.state.listFood.cloneWithRows([]), 
          BookmarkName:"Error",
        });
      }
    })  
    .catch(err => console.log(err));
   }

  // alertSuccess(idBookmark, idFood) {
  //     Alert.alert(
  //         'Notice',
  //         'Xác nhận xóa ',
  //         [
  //             { text: 'Hủy', onPress: ()=>Console.log("HUY_XOA") },
  //             { text: 'OK',  onPress: this.deleteItem(idBookmark, idFood) },
  //         ],
  //         { cancelable: false }
  //     );
  // }

  // deleteItem(idBookmark, idFood){
  //     getToken()
  //     .then(token => deleteItemApi(token, idBookmark, idFood))
  //     .then((responseJson)=>{
  //       // this.setState({ shouldLoaded: true});
  //       // this.getData();
  //     })
  //     .catch(err => console.log(err))
  //   }

//     createNewBookmark(text){
//       getToken()
//       .then(token => createBookmarkApi(token, text) )
//       .then((responseJson)=>{
//         this.alertInsertSuccess(responseJson);
//       })
//       .catch(err => console.log(err))
//     }



      componentDidMount(){
      this.interval = setInterval(() => this.getData(), 1000);
    }     

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      const listFoodJSX=(
        <ListView
            contentContainerStyle={styles.main}
            enableEmptySections
            dataSource={this.state.listFood}
            renderRow={e => (
              <TouchableOpacity 
                activeOpacity={0.8}  
                onPress={() => this.gotoDetail(e)} 
                style={styles.ctnRestaurant}>
                <View style={styles.ctnImage} >
                  <Image style={styles.image} source={{uri: "http:"+e.image}} />
                </View>
                <View style={styles.ctnInfomation}>
                  <View style={styles.cntText}>
                    <Text style={styles.textFood} numberOfLines={1}>{e.name }</Text>
                  </View>
                  <View style={styles.cntText}>
                    <Text style={styles.txtName} numberOfLines={1}>{e.food_name }</Text>
                  </View>
                  <View style={styles.cntText}>
                    <Text style={styles.txtRate}>{String(Math.round(e.rate*10)/10)} ★</Text>
                  </View>
                  <View style={styles.cntText}>
                    <Text style={styles.txtAddress} numberOfLines={1}>{e.address}</Text>
                  </View>
                </View>  
              </TouchableOpacity>
              )}
          />
      );

       return (
        <View style={styles.wrapper}>
          <View style={styles.row1}>
            <View style={styles.ctnHeader}>
              <TouchableOpacity  onPress={this.goBack.bind(this)} style={styles.ctnHeaderIcon}>
                <Image source={theme.Image.iCon.Whiteback} style={styles.iconHeader}/>
              </TouchableOpacity>
              <View style={styles.ctnHeaderText}>
                <Text style={styles.txtHeader} numberOfLines={1}>{this.state.BookmarkName}</Text>
              </View>
          <View/>
                {/* <TouchableOpacity  onPress={() => this.refs.modal2.open()} style={styles.ctnHeaderIcon}>
                  <Image source={theme.Image.iCon.Save} style={styles.iconHeader}/>
                </TouchableOpacity> */}
          </View>
        </View>
        {listFoodJSX}
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
  