import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image, Alert,TextInput,ScrollView, ActivityIndicator,
} from 'react-native';
import theme from '../theme';
import searchApi from '../api/searchApi';
import Modal from "react-native-modalbox";
import CheckBox from 'react-native-check-box';
import getToken from "../api/getToken";
import getTopFoodApi from "../api/getTopFoodApi";     //Nolocation
import getTopFoodApi2 from "../api/getTopFoodApi2"; //Location
import getLocation from "../api/getLocation";
import TopFood from "../Components/TopFood";
export default class SearchView extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      key:"",
      value: "",
      checkboxA: false,
      checkboxB: false,
      checkboxC: false,
      checkboxD: false,
      isLoading:true,
      isLoadingMore: false,
      region:{},
      mang:[],
      isSearch: false,
      // token:"",
      }
    }

    
    gotoDetail(food) {
      const { navigator } = this.props;
      navigator.push({ name: 'FOOD_DETAIL' ,food});
    }

    getData(){
      this.refs.modal3.open();


       searchApi(this.state.key, this.state.page)
       .then((responseData)=>{
          if(responseData.result === "success"){
            this.refs.modal3.close();
            this.setState({
              isSearch: true,
              mang: responseData.data,
              dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
            });
            console.log("RESULT_RETURN");
          }
          else{
            this.refs.modal3.close();
            
            this.setState({ isSearch: true,dataSource: this.state.dataSource.cloneWithRows([]),});
            console.log("NOT SUCCESS");
          }
       })  
       .catch(err => {this.refs.modal3.close(); console.log("LOI TIM KIEM",err)});
    }

    loadMore(){
      this.setState({isLoadingMore: true});
      nextpage = this.state.page +1;
  
      searchApi(this.state.key, nextpage)
      .then((responseJson)=>{
        if(responseJson.result==="success"){
          this.setState({
              mang : this.state.mang.concat(responseJson.data),
              isLoadingMore: false,
              dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
              page: this.state.page+1,
            });
        }
        else{
          this.setState({
            isLoadingMore: false,
            dataSource: this.state.dataSource.cloneWithRows([]),
          })
        }
      })
      .catch(error=>{
        console.log('GETMORESEARCH_ERROR',error);
        this.setState({
          isLoadingMore: false,
          dataSource: this.state.dataSource.cloneWithRows([]),
        });
      });
    }

hanleChangeText(text){
       this.setState({key: text});
       console.log("KEYWORK", this.state.key);
}

// getTopFood(){
//   getLocation()
//   .then(region => {
//     this.setState({region});
//     if(region===""){return getTopFoodApi(this.state.page)}
//     else{  return getTopFoodApi2(this.state.page, this.state.region.latitude, this.state.region.longitude) }
//    })
//   .then((responseJson)=>{
//     // console.log("TOPFOODRESULTSEARCHPAGE",)
//     if(responseJson.result==="success"){
//       this.setState({
//           mang : responseJson.data,
//           isLoading: false,
//           dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
//       });
//       // console.log("DATASOURCE", this.state.dataSource);
//     }
//     else{
//       console.log("NOT SUCCESS");
//       this.setState({
//         isLoading: false,
//         dataSource: this.state.dataSource.cloneWithRows([]),
//       })
//     }
//   })
//   .catch(error=>{
//     console.log('GETTOPFOOD_ERROR',error);
//     this.setState({
//       isLoading: false,
//       dataSource: this.state.dataSource.cloneWithRows([]),
//     });
//   });
// }

componentDidMount(){
  // getToken()
  // .then(token=>{this.setState({token})});
  // this.getTopFood();
}
  

createRow(property){
  if(property.image == '');
  // else{
    return(
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
    );
  // }
}

    render() {

      const LoadJSX=(//WAITING SEARCH
        <Modal
            style={[styles.modal, styles.modal2]}
            backdrop={true}
            coverScreen={false}
            entry={"top"}
            ref={"modal3"}
            backdropOpacity={0.5}
        >
        <View style={[styles.ctnLoading, styles.horizontal]}>
             <View style={styles.ctnLoadingRow}>
                <ActivityIndicator size="large" size={50} color="#FF0000" />
                {/* <ActivityIndicator size="large" size={50} color="#3C00A7" />
                <ActivityIndicator size="large" size={50} color="#00BE00" />
                <ActivityIndicator size="large" size={50} color="#FDCE00" /> */}
            </View>
            {/* <View style={styles.ctnLoadingRow}>
                <ActivityIndicator size="large" size={50} color="#FF0000" />
                <ActivityIndicator size="large" size={50} color="#3C00A7" />
                <ActivityIndicator size="large" size={50} color="#00BE00" />
                <ActivityIndicator size="large" size={50} color="#FDCE00" />
            </View> */}
            {/* <View style={styles.ctnLoadingRow}>
                <ActivityIndicator size="large" size={50} color="#FF0000" />
                <ActivityIndicator size="large" size={50} color="#3C00A7" />
                <ActivityIndicator size="large" size={50} color="#00BE00" />
                <ActivityIndicator size="large" size={50} color="#FDCE00" />
            </View> */}
        </View>
      </Modal>
      );

      const settingJSX=(
        <Modal
        style={[styles.modal, styles.modal2]}
        backdrop={true}
        coverScreen={true}
        position={"bottom"}
        ref={"modal2"}
      >
        <View style={styles.ctnMapView}>
        <Text style={styles.labelTitle}>Thể loại</Text>

        <View style={styles.ctnCheckboxRow}>
          <CheckBox
                          checkBoxColor={"red"}
                          style={{marginRight:10}}
                          isChecked={this.state.checkboxA}
                          onClick={() => this.setState({ checkboxA: !this.state.checkboxA,value: this.state.checkboxA ? "Quán ăn": ""})}
            /><Text>Quán ăn</Text>
          </View>

          <View style={styles.ctnCheckboxRow}>
          <CheckBox
                          checkBoxColor={"red"}
                          style={{marginRight:10}}
                          isChecked={this.state.checkboxB}
                          onClick={() => this.setState({ checkboxB: !this.state.checkboxB,value: this.state.checkboxB ? "Ăn vặt/vỉa hè": ""})}
            /><Text>Ăn vặt/vỉa hè</Text>
            </View>

            <View style={styles.ctnCheckboxRow}>
            <CheckBox
                          checkBoxColor={"red"}
                          style={{marginRight:10}}
                          isChecked={this.state.checkboxC}
                          onClick={() => this.setState({ checkboxC: !this.state.checkboxC,value: this.state.checkboxC ? "Café/Dessert": ""})}
            /><Text>Café/Dessert</Text>
            </View>

            <View style={styles.ctnCheckboxRow}>
                        <CheckBox
                          checkBoxColor={"red"}
                          style={{marginRight:10}}
                          isChecked={this.state.checkboxD}
                          onClick={() => this.setState({ checkboxD: !this.state.checkboxD,value: this.state.checkboxD ? "Nhà hàng": ""})}
            /><Text>Nhà hàng</Text>
            </View>

        </View>
      </Modal>
      );

       const headerJSX=(
              <View style={styles.ctnHeader}>
                  <View style={styles.ctnSearch}>
                    <View style={styles.ctnHeaderIcon}>
                        <Image source={theme.Image.iCon.WhiteSearch}  style={styles.imageHeader}/>
                      </View>    
                       <View style={styles.ctnInputSearch}>
                              <TextInput 
                              style={styles.inputSearch} 
                              placeholder="Bạn muốn ăn gì?" 
                              underlineColorAndroid="white"
                              onChangeText={(text)=>this.hanleChangeText(text)}
                              />
                       </View>
                        <TouchableOpacity style={styles.ctnHeaderIcon}  onPress={()=>  this.refs.modal2.open()}>
                          <Image source={theme.Image.iCon.WhiteSetting}  style={styles.imageHeader}/>
                        </TouchableOpacity>  
                      </View>

                       <TouchableOpacity style={styles.btnSearch} onPress={()=>  this.getData()}>
                              <Text style={styles.txtBtnSearch}> Tìm </Text>
                       </TouchableOpacity>
                       {settingJSX}
              </View>
            );

          const resultJSX=(
            <View style={{flex:1}}>
              <ListView 
              enableEmptySections
              dataSource={this.state.dataSource}
              renderRow={(propertya) =>  this.createRow(propertya)}
              onEndReached={this.loadMore.bind(this)}
              onEndReachedThreshold={0.5}
            />
          </View>
          );
          const loadJSX=(
            <View style={styles.ctnLoadingRow}>
              <ActivityIndicator size="large" size={50} color="#FF0000" />
              {/* <ActivityIndicator size="large" size={50} color="#3C00A7" />
              <ActivityIndicator size="large" size={50} color="#00BE00" />
              <ActivityIndicator size="large" size={50} color="#FDCE00" /> */}
            </View>
              );

        return (
          <View style={styles.wrapper}>
            {LoadJSX}
            {headerJSX}
            {/* {this.state.isLoading       ?  loadJSX : <View/>}  */}
            {!this.state.isSearch ?<TopFood/> :resultJSX}
            {this.state.isLoadingMore ? loadJSX : <View/>}
          </View>
        );

    }
}

const { width, height} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
  ctnLoading: {
    flex: 1,
    justifyContent: 'center'
  },
  ctnLoadingRow:{
    flexDirection:"row",
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 10
  },
  labelTitle:{
    fontSize: theme.Size.FontSmall,
    color: theme.Color.Red,
    fontWeight: "900",
  },
  ctnCheckboxRow:{
    flexDirection: "row",
    padding: 10,

  },
    main: {
        width, 
        backgroundColor: theme.Color.White,
    },
    wrapper:{
        height:height,
        width:width,
        flex:1,
        // alignItems:"center",
        // justifyContent:"center",
    },
    imageHeader:{
      height: width/17,
      width: width/17,
},
ctnSearch:{
  backgroundColor: theme.Color.White,  
  flex:8,
  flexDirection:"row",
  alignItems: "center",
  
},
    btnSearch: {
       backgroundColor: theme.Color.Red,  
      //  paddingHorizontal: 20,  
      //  borderRadius: 20,
       alignItems:'center', 
       flex:2,
       padding:2,
       alignItems:'center',
       marginLeft: 2,
       justifyContent: 'space-between',
    },
    txtBtnSearch:{
       color: theme.Color.White,  
       fontSize: theme.Size.FontBig, 
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
       flex:8,
       backgroundColor: theme.Color.White,
     },
     inputSearch:{
       flex:3,
       height: height/19, 
       backgroundColor: theme.Color.White, 
       padding:0,
       paddingLeft:15, 
      //  paddingHorizontal: 5,  
      //  borderRadius: 15, 
       alignItems:"center",
       fontSize: theme.Size.FontMedium,
      },
    ctnBookmarkRow:{
      flex:0.3,
      margin:5,
      backgroundColor: theme.Color.White,
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
      flex:1,
      padding:2,
      alignItems:'center',
      backgroundColor: theme.Color.White,
    },
    iconHeader:{
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
      height: height / 15, 
      backgroundColor: theme.Color.NiceRed,
      padding:5, 
      justifyContent:'space-between'
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
    padding:10,
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
  // ctnHeaderIcon:{
  //   flex:0.1,
  //   padding:0,
  //   alignItems:'center',
  //   justifyContent:"center",
  // },
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
     },
     txtName:{
       color: theme.Color.Black,
       fontSize: theme.Size.FontSmall,
       alignItems: 'center',
       fontWeight:"100",
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
  