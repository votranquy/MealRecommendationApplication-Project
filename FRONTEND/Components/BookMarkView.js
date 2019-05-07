import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image
} from 'react-native';
import global from './global';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

// const url = 'http://192.168.64.2/MyShop/api/images/product/';

export default class BookMarkView extends Component {
    // incrQuantity(id) {
    //     global.incrQuantity(id);
    // }
    // decrQuantity(id) {
    //     global.decrQuantity(id);
    // }
    removeFood(id) {
        global.removeFood(id);
    }

    gotoDetail(food) {
        const { navigator } = this.props;
        navigator.push({ name: 'FOOD_DETAIL' ,food});
    }


creatStar1(score){
    //1
    if(score <  0.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
    else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
  }
  creatStar2(score){
    //2
    if(score <  1.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
    else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
  }
  creatStar3(score){
    //3
    if(score <  2.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
    else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
  }
  creatStar4(score){
    //4
    if(score <  3.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
    else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
  }
  creatStar5(score){
    //5
    if(score <  4.5){ return(<Image source={require('../Image/whitestar.png')}/>) }
    else{ return (<Image source={require('../Image/yellowstar.png')}/>) };
  }

    render() {
        // const { main, checkoutButton, checkoutTitle, wrapper,
        //     productStyle, mainRight, productController,
        //     txtName, txtPrice, productImage, numberOfProduct,
        //     txtShowDetail, showDetailContainer } = styles;
        const { bookmarkArray } = this.props;
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
                    dataSource={new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }).cloneWithRows(bookmarkArray)}
                    renderRow={property => (
                        <TouchableOpacity  onPress={()=>this.gotoDetail(property.food)} key={property.food.id} style={styles.row}>
                        <View style={styles.image} >
                          <Image style={styles.image} source={{uri: property.food.image_path}} />
                        </View>
                        <View style={styles.content}>
                          <View style={styles.content_row}>
                            <Text style={styles.content_row_name}>
                            {property.food.food_name >25 ? property.food.food_name.substring(0,23)+"..." :property.food.food_name }
                            </Text>
                          </View>
                          <View style={styles.content_row}>
                            {this.creatStar1(property.food.rate)}
                            {this.creatStar2(property.food.rate)}
                            {this.creatStar3(property.food.rate)}
                            {this.creatStar4(property.food.rate)}
                            {this.creatStar5(property.food.rate)}
                            <Text style={styles.content_row_rate}>{property.food.rate}</Text>
                          </View>
                          <View style={styles.content_row}>
                            <Image source={require('../Image/location.png')}/>
                            <Text style={styles.content_row_address}>{property.food.address.length >30 ? property.food.address.substring(0,28)+"..." :property.food.address }</Text>
                          </View>
                          <View style={styles.content_row}>
                            <Image source={require('../Image/spoon.png')}/>
                            <Text style={styles.content_row_menu}>{property.food.menu.length >30 ? property.food.menu.substring(0,28)+"..." :property.food.menu }</Text>
                          </View>  
                        </View>  
                       </TouchableOpacity>
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
      //  justifyContent: 'space-between' ,
    alignItems:'center', 
    marginBottom:10,
    height: height / 12, 
    backgroundColor: '#34B089',
     padding:10, 
     justifyContent:'space-around'
   },
   titleStyle:{
    color: '#FFF', 
    fontSize:20, 
    alignItems:'center',
     justifyContent:"space-between",
   }, 
  });
  


