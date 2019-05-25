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
import theme from '../theme';

export default class Header extends Component{
   render(){
     return(
      <View style={styles.wrapper}>
        <View style={styles.ctnHeader}>
            <TouchableOpacity onPress={this.props.onOpen} style={styles.ctnHeaderIcon}>
                <Image source={theme.Image.iCon.Menu} style={styles.imageHeader} />
            </TouchableOpacity>
            <View style={styles.ctnHeaderText}>
              <Text style={styles.txtHeader}>Ăn Gì Hôm Nay?</Text>
            </View>
            <View/>
        </View>
        {/* <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Bạn muốn ăn gì?" underlineColorAndroid="white"/>
        </View> */}
     </View>
     );
   }
 }

const {height , width} = Dimensions.get('window'); 
const styles = StyleSheet.create({
   wrapper:{
    height: height / 17, 
    backgroundColor: theme.Color.NiceRed,
     padding:10,
    justifyContent:'space-around',
   },
   ctnHeader:{
     flexDirection: 'row', 
     justifyContent: 'space-between' ,
      flex:1,
      alignItems:'center', 
      marginBottom:2,
   },
   ctnHeaderIcon:{
    flex:0.1,
    padding:1,
    alignItems:'center',
    justifyContent:"center",
  },
  ctnHeaderText:{
    flex:0.7,
    alignItems:'center',
  },

   txtHeader:{
    color: theme.Color.White,
      fontSize: theme.Size.FontMedium,
  },
   imageHeader:{
     height: width/15,
      width:width/15,
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