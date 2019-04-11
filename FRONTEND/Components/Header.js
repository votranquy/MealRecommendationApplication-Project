import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions ,
  Image,
  TextInput,
  StyleSheet
} from 'react-native';
const {height} = Dimensions.get('window'); 


export default class Header extends Component{
   render(){
     return(

      <View style={styles.wrapper}>

        <View style={styles.row1}>
            <Text style={styles.titleStyle}>Ăn Gì Hôm Nay?</Text>
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="What do you want to eat?" underlineColorAndroid="white"/>
          <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchBtnText}>Search</Text>
          </TouchableOpacity>  
        </View>
        {/* <View style={styles.horizontalBar}>
          <ScrollMenu/>
        </View> */}

     </View>

     );
   }
 }


const styles = StyleSheet.create({
   wrapper:{
    height: height / 6, backgroundColor: '#34B089', padding:10, justifyContent:'space-around'
   },
   row1:{
    flexDirection:'column', justifyContent:'space-around',flex:1,alignItems:'center', marginBottom:10
   },
   titleStyle:{
    color: '#FFF', fontSize:20, alignItems:'center', justifyContent:"space-between"
   }, 
   iconStyle:{
     height:30, width:30,
   },
   searchContainer: {
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    // flex: 1,
  },
  searchInput:{
    flex:3,height: height/15, backgroundColor: 'white', paddingLeft:5, paddingHorizontal: 20,  borderRadius: 20,
   },
  searchBtn: {
    flex: 1,
     height: height/15, backgroundColor: '#2ABB9C',  paddingHorizontal: 20,  borderRadius: 20,
  },
  searchBtnText:{
    color: '#FFF', fontSize:20, alignItems:'center', justifyContent:"space-between"
  },
  horizontalBar:{
    backgroundColor: '#2ABB9C',height:30,flex:1,flexDirection:'row', justifyContent: 'space-between'
  }
 })