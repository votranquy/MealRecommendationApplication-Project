import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image, Alert,TextInput,ScrollView, ActivityIndicator, FlatList,
} from 'react-native';
import theme from '../theme';
import searchApi from '../api/searchApi';
import Modal from "react-native-modalbox";
import CheckBox from 'react-native-check-box';
import getLocation from "../api/getLocation";
import getToken from "../api/getToken";
import postNavigator from "../api/postNavigator";
import getRecommendedFoodApi from "../api/getRecommendedFoodApi";
import getRecommendedFoodApi2 from "../api/getRecommendedFoodApi2";



export default class SuggestionView extends Component {
    constructor(props){
      super(props);
      this.state = {
        page:0,
        dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
        isLoading:true,
        isLoadingMore: false,
        mang:[],
        region:{},
        token:"",
        food:[],
      }
    }

    gotoDetail(food_id,restaurant_id){
      KEY = "HOME";
      // navigator = "HOME";
      postNavigator("HOME_VIEW");
      const {navigator} = this.props;
      navigator.push({name: "FOOD_DETAIL",food_id,restaurant_id, KEY});
    }
  
  reLoad(){

    this.setState({
      isLoading: true,
    });

      getToken()
      .then(token=>{
          if(token!=""){this.setState({token: token})};
      })
  
      getLocation()
      .then(region => {
        console.log("LOCATION",region);
        this.setState({region});
        if(region == ""){ return getRecommendedFoodApi(this.state.token) }
        else{  return getRecommendedFoodApi2(this.state.token,  this.state.region.latitude, this.state.region.longitude) }
        })
      .then((responseJson)=>{
        if(responseJson.result=="success"){
          this.setState({
              mang : responseJson.data,
              isLoading: false,
              dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
              food: responseJson.data,
          });
          console.log("DATA GOI Y",this.state.food,);
        }
        else{
          console.log("NOT SUCCESS");
          this.setState({
            isLoading: false,
            dataSource: this.state.dataSource.cloneWithRows([]),
            food: [],
          })
        }
      })
      .catch(error=>{
        console.log('GETTOPFOOD_ERROR',error);
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows([]),
          food:[],
        });
      });
      }


    componentDidMount(){
    getToken()
    .then(token=>{
        if(token!=""){this.setState({token: token})};
    })

    getLocation()
    .then(region => {
      console.log("LOCATION",region);
      this.setState({region});
      if(region == ""){ return getRecommendedFoodApi(this.state.token) }
      else{  return getRecommendedFoodApi2(this.state.token,  this.state.region.latitude, this.state.region.longitude) }
      })
    .then((responseJson)=>{
      if(responseJson.result=="success"){
        this.setState({
            mang : responseJson.data,
            isLoading: false,
            dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
            food: responseJson.data,
        });
        console.log("DATA GOI Y",this.state.food,);
      }
      else{
        console.log("NOT SUCCESS");
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows([]),
          food: [],
        })
      }
    })
    .catch(error=>{
      console.log('GETTOPFOOD_ERROR',error);
      this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.cloneWithRows([]),
        food:[],
      });
    });
    }
  
  
    createRow(property){
      // if(property.food_name == "") return(<View/>);
      // else{
        return(
        <TouchableOpacity 
          activeOpacity={0.8}  
          onPress={() => this.gotoDetail(property.id,property.restaurant_id)} 
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
              <Text style={styles.txtRate}>{String(Math.round(property.average_score*10)/10)} ★</Text>
            </View>
            <View style={styles.cntText}>
              <Text style={styles.txtAddress} numberOfLines={1}>{property.address}</Text>
            </View>
          </View>  
        </TouchableOpacity>
        );
      // }
    }
  
    // loadMore(){
    //   this.setState({isLoadingMore: true, page: this.state.page +1});
    //   getLocation()
    //   .then(region => {
    //     this.setState({region});
    //     if(region===""){return getTopFoodApi(this.state.page)}
    //     else{  return getTopFoodApi2(this.state.page, this.state.region.latitude, this.state.region.longitude) }
    //    })
    //   .then((responseJson)=>{
    //     if(responseJson.result==="success"){
    //       this.setState({
    //           mang : this.state.mang.concat(responseJson.data),
    //           isLoadingMore: false,
    //           dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
    //           // page: this.state.page+1,
    //         });
    //     }
    //     else{
    //       this.setState({
    //         isLoadingMore: false,
    //         dataSource: this.state.dataSource.cloneWithRows([]),
    //       })
    //     }
    //   })
    //   .catch(error=>{
    //     console.log('GETMORETOPFOOD_ERROR',error);
    //     this.setState({
    //       isLoadingMore: false,
    //       dataSource: this.state.dataSource.cloneWithRows([]),
    //     });
    //   });
    // }
  
  
    render() {

     

      const ABCFoodJSX=(
      <View style={{flex:1, borderColor: "green"}}>
        <FlatList
        enableEmptySection
        data={this.state.food}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({item}) => (
            <TouchableOpacity 
            activeOpacity={0.8}  
            onPress={() => this.gotoDetail(item.id,item.restaurant_id)} 
            key={item.id} style={styles.ctnRestaurant}>
            <View style={styles.ctnImage} >
              <Image style={styles.image} source={{uri: "http:"+item.image}} />
            </View>
            <View style={styles.ctnInfomation}>
              <View style={styles.cntText}>
                <Text style={styles.textFood} numberOfLines={1}>{item.name }</Text>
              </View>
              <View style={styles.cntText}>
                <Text style={styles.txtName} numberOfLines={1}>{item.food_name }</Text>
              </View>
              <View style={styles.cntText}>
                <Text style={styles.txtRate}>{String(Math.round(item.average_score*10)/10)} ★</Text>
              </View>
              <View style={styles.cntText}>
                <Text style={styles.txtAddress} numberOfLines={1}>{item.address}</Text>
              </View>
            </View>  
          </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
      />
      </View>
      );
      
        const loadJSX=(
        <View style={styles.ctnLoadingRow}>
          <ActivityIndicator size="large" size={50} color="#FF0000" />
        </View>
          );
  
      return (
        <View style={styles.container}>
          
          <View style={styles.ctnHeader}>
            
            <View style={styles.ctnHeaderIcon}/>

            <View style={styles.ctnHeaderText}>
              <Text style={styles.txtHeader} numberOfLines={1}>Gợi ý cho bạn</Text>
            </View>

            <TouchableOpacity  
            onPress={this.reLoad.bind(this)} 
            style={styles.ctnHeaderIcon}>
              <Image source={theme.Image.iCon.ReLoad} style={styles.iconHeader}/>
            </TouchableOpacity>
      </View>
            {this.state.isLoading       ?  loadJSX : <View/>} 
            {/* <Text> AAAAAAAAAAAAAAAA</Text> */}
            {/* {RecommendedFoodJSX} */}
            <ScrollView>
              {ABCFoodJSX}
            </ScrollView>
            {/* {this.state.isLoadingMore ? loadJSX : <View/>} */}
        </View>
      );
    }
  }


const { width, height} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
  row1:{
    flexDirection: 'row',
  alignItems:'center', 
  height: height / 17, 
  backgroundColor: theme.Color.NiceRed,
   justifyContent:'space-around'
 },
 titleStyle:{
  color: '#FFF', 
  fontSize:theme.Size.FontBig, 
  alignItems:'center',
   justifyContent:"space-between",
 }, 
  ctnSuggestion:{
    padding:5,
    borderBottomWidth: 1,
    borderColor: theme.Color.Gray,
    paddingLeft:10,
  },
  txtSuggestion:{
    fontSize: theme.Size.FontSmall,
    color: theme.Color.DarkGray,
  },
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
      flex:1, 
      backgroundColor: theme.Color.White,
      height:height,
      width:width,
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
      flex:0.1,
      padding:2,
      alignItems:'center',
      // backgroundColor: theme.Color.White,
    },
    // iconHeader:{
    //   width:  width/19,
    //   height: width/19,
    // },
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
      width:width,
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
  // ctnHeaderText:{
  //   flex:0.8,
  //   alignItems:'center',
  // },
  // txtHeader:{
  //   color: '#FFF',
  //    fontSize: theme.Size.FontBig,
  // },
  txtInput:{
    fontSize: theme.Size.FontSmall,
    padding:2,
  },  
  iconHeader:{
    // flex:1,
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
      //  flex: 1,
      // height:50,
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