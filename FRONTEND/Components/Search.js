import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image, Alert,TextInput,ScrollView
} from 'react-native';
import theme from '../theme';
// import global from './global';
// import getToken from "../api/getToken";
// import getBookmarkApi from "../api/getBookmarkApi";
// import createBookmarkApi from "../api/createBookmarkApi";
// import Modal from 'react-native-modalbox'; 
import searchApi from '../api/searchApi';

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResut: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      text:"",
      }
    }

//     gotoList(idbookmark) {
//       const { navigator } = this.props;
//       navigator.push({ name: 'BOOKMARK_LIST' ,idbookmark});
//     }

    getData(){
       searchApi(this.state.text)
       .then((responseData)=>{
          if(responseData.result === "success"){
          // console.log(responseData);
            this.setState({searchResut: this.state.searchResut.cloneWithRows(responseData.data),});
            console.log("RESULT", this.state.searchResut);
          }
          else{ 
            this.setState({ searchResut: this.state.searchResut.cloneWithRows([]),});
            console.log("NOT SUCCESS");
          }
       })  
       .catch(err => console.log("ERROR"));
    }

//   insertDone(){
//     this.getData();
//     this.setState({text:""});
//     this.refs.modal1.close();
//   }

//   alertInsertSuccess(responseJson) {
//     Alert.alert(
//         'Notice',
//         'Tạo mới thành  công ',
//         [
//             { text: 'OK',  onPress:    this.insertDone.bind(this) },
//         ],
//         { cancelable: false }
//     );
//   }

// alertError() {
//   Alert.alert(
//       'Notice',
//       'Vui lòng nhập tên! ',
//       [
//           { text: 'OK',  onPress: ()=>console.log("NULL NAME") },
//       ],
//       { cancelable: false }
//   );
// }

//     createNewBookmark(text){
//       if(this.state.text ==""){this.alertError();}
//       else{
//         getToken()
//         .then(token => createBookmarkApi(token, text))
//         .then((responseJson)=>{
//           this.alertInsertSuccess(responseJson);
//         })
//         .catch(err => console.log(err))
//       }  
//     }
hanleChangeText(text){
       this.setState({text});
       console.log("KEYWORK", this.state.text);
       // if(this.state.text.length >= 2){
       // if(this.state.text.length >2){ ()=> 
              this.getData();
       // }
}


    componentDidMount(){
//      this.interval = setInterval(() => this.getData(), 1000);
       // this.getData();
   }     

//    componentWillUnmount() {
//     clearInterval(this.interval);
//   }
// createRow(property){
//        // if(property.food_name == "");
//        // else{
//        //   return(
//          <TouchableOpacity 
//            activeOpacity={0.8}  
//            onPress={() => this.gotoDetail(property)} 
//            key={property.id} style={styles.ctnRestaurant}>
//            <View style={styles.ctnImage} >
//              <Image style={styles.image} source={{uri: "http:"+property.image}} />
//            </View>
//            <View style={styles.ctnInfomation}>
//              <View style={styles.cntText}>
//                <Text style={styles.textFood} numberOfLines={1}>{property.name }</Text>
//              </View>
//              <View style={styles.cntText}>
//                <Text style={styles.txtName} numberOfLines={1}>{property.food_name }</Text>
//              </View>
//              <View style={styles.cntText}>
//                <Text style={styles.txtRate}>{String(Math.round(property.rate*10)/10)} ★</Text>
//              </View>
//              <View style={styles.cntText}>
//                <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
//              </View>
//            </View>  
//          </TouchableOpacity>
//        //   );
//        // }
//      }




    render() {

       const headerJSX=(
              <View style={styles.ctnHeader}>
                       <View style={styles.ctnInputSearch}>
                              <TextInput 
                              style={styles.inputSearch} 
                              placeholder="Bạn muốn ăn gì?" 
                              underlineColorAndroid="white"
                              onChangeText={(text)=>this.hanleChangeText(text)}
                            //   onChange={(text)=>this.hanleChangeText(text)}
                              />
                       </View>
                       <TouchableOpacity style={styles.btnSearch} onPress={()=> this.getData()}>
                              <Text style={styles.txtBtnSearch}> Tìm </Text>
                       </TouchableOpacity>
              </View>
            );

          const resultJSX=(
              <ListView 
              enableEmptySections={true}
              dataSource={this.state.searchResut}
              renderRow={
                     (property)=>
                            // {property.food_name.length === 0 ?
                                   <TouchableOpacity 
                                   activeOpacity={0.8}  
                                   onPress={() => this.gotoDetail(property)} 
                                   key={property.id} style={styles.ctnRestaurant}>
                                   <View style={styles.ctnImage} >
                                     <Image style={styles.image} source={{uri: "http:"+property.image}} />
                                   </View>
                                   <View style={styles.ctnInfomation}>
                                     <View style={styles.cntText}>
                                       <Text style={styles.textFood} numberOfLines={1}>{property.name }</Text>
                                     </View>
                                     <View style={styles.cntText}>
                                       <Text style={styles.txtName} numberOfLines={1}>{property.food_name }</Text>
                                     </View>
                                     <View style={styles.cntText}>
                                       <Text style={styles.txtRate}>{String(Math.round(property.rate*10)/10)} ★</Text>
                                     </View>
                                     <View style={styles.cntText}>
                                       <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
                                     </View>
                                   </View>  
                                 </TouchableOpacity>
                            //        :<View/>
                            // }   
              }
              // onEndReached={this._onEndReached.bind(this)}
            />
          );





        return (
          <View style={styles.wrapper}>
            {headerJSX}
            {resultJSX}
          </View>
        );

    }
}

const { width, height} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    main: {
        width, 
        backgroundColor: theme.Color.White,
    },
    wrapper:{
        height:height,
        width:width,
        flex:1,
    },
    btnSearch: {
       // height: height/17,
       backgroundColor: theme.Color.Red,  
       paddingHorizontal: 20,  
       borderRadius: 20,
       alignItems:'center', 
       // justifyContent: 'space-around',
       flex:2,
       padding:5,
       alignItems:'center',
       justifyContent: 'space-between',
    },
    txtBtnSearch:{
       color: '#FFF', 
       fontSize:20, 
       alignItems:'center', 
       justifyContent:"space-between",
     },
    container: {
      flex:1, backgroundColor: theme.Color.White,
    },
    row: {
      flex: 1,
      flexDirection:'row',
      backgroundColor:"#FFF",
      padding:3,
      margin:3,
      borderRadius: 20,
    },
    ctnInputSearch: {
       alignItems:'center',
       justifyContent: 'space-between',
       flexDirection:"row",
       flex:8
     },
     inputSearch:{
       flex:3,
       height: height/20, 
       backgroundColor: theme.Color.White, 
       padding:0,
       paddingLeft:15, 
       paddingHorizontal: 5,  
       borderRadius: 15, 
       alignItems:"center",
      },
    ctnBookmarkRow:{
      flex:0.3,
      margin:5,
      backgroundColor: theme.Color.White,
      // borderRadius: 100,
      flexDirection:"row",
      alignItems:"center",
      padding:5,
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
    ctnHeaderIcon:{
      flex:0.2,
      padding:1,
      alignItems:'center',
    },
    iconHeader:{
      // flex:1,
      width:  width/19,
      height: width/19,
    },
    ctnHeaderText:{
      flex:0.7,
      alignItems:'center',
    },
    txtHeader:{
      color: '#FFF',
       fontSize: theme.Size.FontBig,
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
    ctnHeader:{
      flexDirection: 'row',
      alignItems:'center', 
      // marginBottom:10,
      height: height / 17, 
      backgroundColor: theme.Color.NiceRed,
      padding:5, 
      justifyContent:'space-around'
   },

  btnCreateBookmark:{
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
    padding:0,
    alignItems:'center',
    justifyContent:"center",
  },
  txtInput:{
    fontSize: theme.Size.FontSmall,
    padding:2,
  },  
  iconHeader:{
    flex:1,
    width:  width/14,
    height: width/17,
  },
  ctnMapArea:{
    flex:14,
    backgroundColor: theme.Color.White,
    padding:2,
  },
  txtBookmark:{
    fontSize: theme.Size.FontMedium,
    fontWeight:"500",
    color: theme.Color.NiceRed, 
  },
  ctnRestaurant: {
       flex: 1,
       flexDirection:'row',
       backgroundColor: theme.Color.White,
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
       width: width/4,
       height: height/10,
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
     textFood:{
       color: theme.Color.Orange,
       fontSize: theme.Size.FontMedium,
       // alignItems: 'center',
     },
     txtName:{
       color: theme.Color.Black,
       fontSize: theme.Size.FontSmall,
       alignItems: 'center',
       fontWeight:"100",
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
  