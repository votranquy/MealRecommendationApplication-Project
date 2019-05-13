import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar,
  ListView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from "./styles";
import theme from "../../theme";


export default class TopFood extends Component {

  constructor(props){
    super(props);
    this.state = {
      page:0,
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
    }
  }

  gotoDetail(food){
    const {navigator} = this.props;
    navigator.push({name: "FOOD_DETAIL",food});
  }

  componentDidMount(){
    fetch("http://192.168.64.2/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+this.state.page,
      {method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    .then((response)=>response.json())
    .then((responseData)=>{
      mang = responseData;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(mang),
      });
    })
    .catch((error) => {
      console.error(error);
    });
  }

  createStar1(score){
    //1
    if(score <  0.5){ return(<Image source={theme.Image.iCon.Star}/>) }
    else{ return (<Image source={theme.Image.iCon.YellowStar}/>) };
  }
  createStar2(score){
    //2
    if(score <  1.5){ return(<Image source={theme.Image.iCon.Star}/>) }
    else{ return (<Image source={theme.Image.iCon.YellowStar}/>) };
  }
  createStar3(score){
    //3
    if(score <  2.5){ return(<Image source={theme.Image.iCon.Star}/>) }
    else{ return (<Image source={theme.Image.iCon.YellowStar}/>) };
  }
  createStar4(score){
    //4
    if(score <  3.5){ return(<Image source={theme.Image.iCon.Star}/>) }
    else{ return (<Image source={theme.Image.iCon.YellowStar}/>) };
  }
  createStar5(score){
    //5
    if(score <  4.5){ return(<Image source={theme.Image.iCon.Star}/>) }
    else{ return (<Image source={theme.Image.iCon.YellowStar}/>) };
  }

  createRow(property){
    return(
      <TouchableOpacity activeOpacity={0.8}  onPress={() => this.gotoDetail(property)} key={property.id} style={styles.row}>
      <View style={styles.image} >
        <Image style={styles.image} source={{uri: property.image_path}} />
      </View>
      <View style={styles.content}>
        <View style={styles.content_row}>
          <Text style={styles.content_row_name}>{property.food_name.length >25 ? property.food_name.substring(0,23)+"..." :property.food_name }</Text>
        </View>
        <View style={styles.content_row}>
          {this.createStar1(property.rate)}
          {this.createStar2(property.rate)}
          {this.createStar3(property.rate)}
          {this.createStar4(property.rate)}
          {this.createStar5(property.rate)}
          <Text style={styles.content_row_rate}>{property.rate}</Text>
        </View>
        <View style={styles.content_row}>
          <Image source={theme.Image.iCon.Location}/>
          <Text style={styles.content_row_address}>{property.address.length >30 ? property.address.substring(0,28)+"..." :property.address }</Text>
        </View>
        <View style={styles.content_row}>
          <Image source={theme.Image.iCon.Spoon}/>
          <Text style={styles.content_row_menu}>{property.menu.length >30 ? property.menu.substring(0,28)+"..." :property.menu }</Text>
        </View>  
      </View>  
      </TouchableOpacity>
    );
  }

  _onEndReached(){
    fetch("http://192.168.64.2/MealRecommendationApplication-Project/BACKEND/HomePage.php?pagenumber="+(this.state.page+1),
      {
        method:"POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
      })
    .then((response)=>response.json())
    .then((responseData)=>{
      if(responseData.length != 0){
        mang = mang.concat(responseData);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(mang),
          page: this.state.page+1
        });
      }
      else{
          Alert.alert(
            'Alert Title',
            'End of Page',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }



  render() {
    return (
    <View style={{flex:1, backgroundColor:'#86AAEE'}}>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View>
        <ListView 
          enableEmptySections
          dataSource={this.state.dataSource}
          renderRow={
            (propertya) => this.createRow(propertya)
          }
          onEndReached={this._onEndReached.bind(this)}
          onEndReachedThreshold={5}
        />
        </View>
      </View>
    </View>
    );
  }
}


