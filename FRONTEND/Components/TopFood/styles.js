import { StyleSheet , Dimensions} from 'react-native';
import theme from '../../theme';
const {height , width} = Dimensions.get('window'); 

export default StyleSheet.create({
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
