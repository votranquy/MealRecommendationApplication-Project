import React, { Component } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Dimensions ,
  Image,
  StyleSheet
} from 'react-native';
import theme from '../../theme';
import styles from "./styles";


export default class Header extends Component{
   render(){
     return(
      <View style={styles.wrapper}>
        {/* <View style={styles.ctnHeader}> */}
            <TouchableOpacity onPress={this.props.onOpen} style={styles.ctnHeaderIcon}>
                <Image source={theme.Image.iCon.Menu} style={styles.imageHeader} />
            </TouchableOpacity>
            {/* <View style={styles.ctnHeaderText}> */}
            <Text style={styles.txtHeader}>Ăn Gì Hôm Nay?</Text>
            {/* </View> */}
            <View style={styles.ctnHeaderIcon}/> 
        {/* </View> */}
     </View>
     );
   }
 }