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
import theme from '../theme';

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
          {/* <TouchableOpacity style={styles.btnSearch}>
            <Text style={styles.searchBtnText}>Tìm</Text>
          </TouchableOpacity>   */}
        </View>
        
     </View>

     );
   }
 }

const {height , width} = Dimensions.get('window'); 
const styles = StyleSheet.create({
   wrapper:{
    height: height / 8, 
    backgroundColor: theme.Color.NiceRed,
     padding:10,
      justifyContent:'space-around',
   },
   row1:{
     flexDirection: 'row', 
     justifyContent: 'space-between' ,
    flex:1,
    alignItems:'center', 
    marginBottom:2,
   },
   titleStyle:{
    color: theme.Color.White,
     fontSize: theme.Size.FontMedium, 
     alignItems:'center', justifyContent:"space-between"
   }, 
   iconStyle:{
     height: width/16,
      width:width/16,
   },
   searchContainer: {
    alignItems:'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    // flex: 1,
  },
  searchInput:{
    flex:3,
    height: height/20, 
    backgroundColor: theme.Color.White, 
    padding:0,
    paddingLeft:15, 
    paddingHorizontal: 5,  
    borderRadius: 15, 
    alignItems:"center",
   },
  btnSearch: {
     height: height/17,
     backgroundColor: '#2ABB9C',  
     paddingHorizontal: 20,  
     borderRadius: 20,
     alignItems:'center', 
     justifyContent: 'space-around'
  },
  searchBtnText:{
    color: '#FFF', 
    fontSize:20, 
    alignItems:'center', 
    justifyContent:"space-between",
  },
  horizontalBar:{
    backgroundColor: '#2ABB9C',
    height:30,
    flex:1,
    flexDirection:'row', 
    justifyContent: 'space-between',
  }
 })