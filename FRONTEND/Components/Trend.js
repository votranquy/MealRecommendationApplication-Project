import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
// import styles from "./styles";
import theme from "../theme";
import getTrendFoodApi from "../api/getTrendFoodApi";
import getRandomFoodApi from "../api/getRandomFoodApi";

export default class Trend extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:0,
      mang:[],
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      isLoading:true,
      isLoadingMore: false,
      mang:[],
    }
  }

  gotoDetail(food){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food});
  }



  componentDidMount(){
    getTrendFoodApi(this.state.page)
    .then((responseJson)=>{
      if(responseJson.result==="success"){
        this.setState({
            mang : responseJson.data,
            dataSource: this.state.dataSource.cloneWithRows(this.state.mang),
          });
      }
      else{
        this.setState({
          isLoading: false,
          dataSource: this.state.dataSource.cloneWithRows([]),
        })
      }
    })
    .catch(error=>{
      console.log('GETRANDOMFOOD_ERROR',error);
      this.setState({
        isLoading: false,
        dataSource: this.state.dataSource.cloneWithRows([]),
      });
    });
  }


  
  createRow(property){
    if(property.food_name == "");
    else{
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
    }
  }
  


  _onEndReached(){
    nextpage = this.state.page +1;
    getRandomFoodApi(nextpage)
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
      console.log('GETMORERANDOMFOOD_ERROR',error);
      this.setState({
        isLoadingMore: false,
        dataSource: this.state.dataSource.cloneWithRows([]),
      });
    });
  }



  render() {
    const trendfoodJSX=(
        <ListView 
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={
            (propertya) => this.createRow(propertya)
          }
          onEndReached={this._onEndReached.bind(this)}
          onEndReachedThreshold={0.5}
        />
      );
      const loadJSX=(<ActivityIndicator size={50} color="red" />);
        return (
          <View style={styles.container}>
            {/* {this.state.isLoading       ?  loadJSX : <View/>}  */}
            {trendfoodJSX}
            {this.state.isLoadingMore ? loadJSX : <View/>}
          </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: theme.Color.White,
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
    color: theme.Color.Black,
    fontSize: theme.Size.FontSmall,
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
  txtMenu:{
    color: theme.Color.Orange,
    fontSize: theme.Size.FontSmall,
    alignItems: 'center',
  },
  ctnFood:{
    flexDirection: "row",
    alignItems: 'center',
  },
  imageFood:{
    width:width/10,
    height:width/10,
    marginRight:2,
  },
  textFood:{
    color: theme.Color.Orange,
    fontSize: theme.Size.FontSmall,
    // alignItems: 'center',
  }
});

