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
import icMenu from '../Image/ic_menu.png';

const {height} = Dimensions.get('window'); 


export default class Header extends Component{
   render(){
     return(

      <View style={styles.wrapper}>

        <View style={styles.row1}>
            <TouchableOpacity onPress={this.props.onOpen}>
                    <Image source={icMenu} style={styles.iconStyle} />
            </TouchableOpacity>
            <Text style={styles.titleStyle}>Ăn Gì Hôm Nay?</Text>
            <View/>
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Bạn muốn ăn gì?" underlineColorAndroid="white"/>
          <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchBtnText}>Tìm</Text>
          </TouchableOpacity>  
        </View>
        
     </View>

     );
   }
 }


const styles = StyleSheet.create({
   wrapper:{
    height: height / 6, backgroundColor: '#34B089', padding:10, justifyContent:'space-around'
   },
   row1:{flexDirection: 'row', justifyContent: 'space-between' ,
    // flexDirection:'column', justifyContent:'space-around',
    flex:1,alignItems:'center', marginBottom:10
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
    flex:3,height: height/15, backgroundColor: 'white', paddingLeft:5, paddingHorizontal: 20,  borderRadius: 20, marginRight:2
   },
  searchBtn: {
    // flex: 1,
     height: height/15, backgroundColor: '#2ABB9C',  paddingHorizontal: 20,  borderRadius: 20,alignItems:'center', justifyContent: 'space-around'
  },
  searchBtnText:{
    color: '#FFF', fontSize:20, alignItems:'center', justifyContent:"space-between"
  },
  horizontalBar:{
    backgroundColor: '#2ABB9C',height:30,flex:1,flexDirection:'row', justifyContent: 'space-between'
  }
 })