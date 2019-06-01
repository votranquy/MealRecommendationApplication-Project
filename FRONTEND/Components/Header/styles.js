import { StyleSheet , Dimensions} from 'react-native';
import theme from '../../theme';
const {height , width} = Dimensions.get('window'); 

export default StyleSheet.create({
       wrapper:{
              // height:width/17, 
              backgroundColor: theme.Color.NiceRed,
              padding:10,
              justifyContent:'space-between',
              flexDirection: 'row',
              alignItems:'center',
              marginBottom:2,
              // flex:1,
       },
       // ctnHeader:{
       //        flexDirection: 'row', 
       //        justifyContent: 'space-around' ,
       //        flex:1,
       //        alignItems:'center', 
       //        marginBottom:2,
       // },

       ctnHeaderIcon:{
              // flex:1,
              padding:1,
              alignItems:'center',
              justifyContent:"center",
       },

       // ctnHeaderText:{
       //        flex:8,
       //        alignItems:'center',
       //        justifyContent:"center",
       // },
       
       txtHeader:{
              color: theme.Color.White,
              fontSize: theme.Size.FontMedium,
              fontWeight: "900",
       },

       imageHeader:{
              height: width/17,
              width: width/17,
       },
});
