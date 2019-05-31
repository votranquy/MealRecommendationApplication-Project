import { StyleSheet , Dimensions} from 'react-native';
import theme from '../../theme';
const {height , width} = Dimensions.get('window'); 

export default StyleSheet.create({
       wrapper:{
              height: height / 17, 
              backgroundColor: theme.Color.NiceRed,
              padding:10,
              justifyContent:'space-around',
       },
       ctnHeader:{
              flexDirection: 'row', 
              justifyContent: 'space-around' ,
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
              flex:0.8,
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
});
