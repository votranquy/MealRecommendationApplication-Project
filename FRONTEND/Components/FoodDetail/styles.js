import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const {height , width} = Dimensions.get('window'); 
export default StyleSheet.create({
  wrapper:{
    flex:1, 
    backgroundColor: theme.Color.White,
  },
  body:{
    flex: 1,
    margin:0,
    backgroundColor: theme.Color.NiceGray,
  },
  InputVote:{
    borderColor: theme.Color.NiceGray,
    borderWidth:1,
  },
  ctnHeader:{
    flexDirection:'row', 
    justifyContent:'space-between',
    height: height/17,
    width:width,
    backgroundColor: theme.Color.NiceRed, 
    alignItems:'center',
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
  iconHeader:{
    width:  width/15,
    height: width/15,
  },
  txtHeader:{
    color: theme.Color.White,
      fontSize: theme.Size.FontMedium,
  },
  ctnImageFood:{
    justifyContent:"center", 
    alignItems:"center",
    // width:width,
    // height: height/2,
    backgroundColor: theme.Color.White,
    // marginBottom: 5,
  },
  imageFood:{
      height:height/2,
      width: '100%',
      alignItems:"center",
      justifyContent:"center",
  },
  ctnFoodInfomation:{
    padding:3,
    marginBottom: 5,
    backgroundColor: theme.Color.White,
  },
  iconInfomation:{
    width:width/17,
    height:width/17,
  },
  ctnInfomationRow:{
    width:width,
    backgroundColor:theme.Color.White,
    padding:3,
    flexDirection:"row",
  },
  ctnMapView: {
    height:height,
    width:width,
    flex:1,
    },
    ctnHeaderMap:{
      flex:1,
      flexDirection:"row",
      backgroundColor: theme.Color.NiceRed,
      alignItems:"center",
    },
  ctnBodyMap:{
    flex:14,
    backgroundColor: theme.Color.HeaderBackground,
  },
  ctnCommentArea:{
    flex:14,
    backgroundColor: theme.Color.Red,
  },
  ctnCloseButton:{
    flex: 0.1,
    alignItems:"center",
  },
  txtAddress:{
    fontSize: theme.Size.FontSmall,
    color: theme.Color.Orange,
    alignItems: 'center',
  },
  txtCategory:{
    fontSize: theme.Size.FontSmall,
    color: theme.Color.Orange,
    alignItems: 'center',
  },
  txtPhoneNumber:{
    fontSize: theme.Size.FontSmall,
    color: theme.Color.Orange,
    alignItems: 'center',
  },
  txtItem: {
    color: theme.Color.Orange,
    fontSize: theme.Size.FontSmall, 
    padding:3,
  },
  txtPrice: {
    color: theme.Color.DarkGray,
    fontSize: theme.Size.FontSmall, 
    padding:3,
  },
  ctnMenu:{
    borderBottomWidth:1,
    borderColor: theme.Color.LightGray,
    marginTop:2,
    marginBottom: 5,
    padding:3,
    backgroundColor: theme.Color.White,
  },
  lableMenu:{
    justifyContent:"center",
    borderBottomWidth:1,
    borderColor:  theme.Color.LightGray,
  },
  txtMenu:{
    fontSize: theme.Size.FontMedium,
    fontWeight:"900",
    color: theme.Color.NiceRed, 
  },
  ctnItem:{
    flex: 1,
    flexDirection:'row',
    backgroundColor:"#FFF",
    padding:3,
    margin:3,
    borderBottomWidth:1,
    borderColor: theme.Color.LightGray,
    paddingBottom:10,
  },
  ctnRestImage:{
    flexDirection:"row",
    flex:6,
  },
  ctnImageItem:{
    flex:3,
    padding:1,
    alignItems:"center",
    justifyContent:"center",
  },
  ctnInfomationItem:{
    flex:5,
    padding:3,
  },
  ctnInfomationItem2:{
    flex:7,
    padding:3,
  },
  ctnHeartIcon:{
    flex:2,
    padding:0,
    alignItems:"center",
    justifyContent:"center",
  },
  imageHeart:{
    alignItems:"center",
    justifyContent:"center",
    width: width/11,
    height: width/11,
  },
  imgeItem:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    height: width/12,
    width: width/4,
  },

  ctnComment:{
    padding:5,
    borderBottomWidth:1,
    borderColor:  theme.Color.LightGray,
    backgroundColor: theme.Color.White,
  },

  ctnUsername:{
    flexDirection: "row",
    margin:2,
    justifyContent:"space-between",
  },
  ctnUsernameArea:{
    flexDirection: "row",
  },
  logoUsername:{
    borderRadius: 60,
    width: width/16,
    height: width/16,
    justifyContent:"center",
    alignItems:"center",
    marginRight:5,
  },
  txtLogo:{
    color: theme.Color.White,
    fontWeight:"900",
  },
  imageAvatar:{
    flex:1,
    width:width/16,
    height:width/16,
  },
  txtUsername:{
    color: theme.Color.Purple,
    fontWeight: "900",
  },
  ctnScore:{
    justifyContent:"space-between",
  },
  txtScore:{
    color: theme.Color.NiceRed,
  },

  imageComment:{
    width:width,
    height:height/3,
  },
  btnComment:{
    backgroundColor: theme.Color.NiceRed,
    alignItems:"center",
    padding:5,
  },
  txtButton:{
    color: theme.Color.White,
    fontWeight:"bold",
  },

  iconActionButton:{
    width: width/14,
    height:width/14,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  // txtComment:{
  //   // backgroundColor:"white",
  //   fontSize: theme.Size.FontSmall,
  //   color: theme.Color.Black,
  //   fontFamily: theme.Font.Light,
  // },
  // indicator: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 80,
  // },
  // contact:{
  //   flexDirection: "row",
  //   justifyContent:"center",
  //   borderWidth:0,
  //   borderColor: '#FFF',
  //   marginBottom:2,
  //   marginTop:2,
  //   borderRadius: 20,
    
  // },
  // ContactCell:{
  //   flex:1,
  //   borderColor: '#2ABB9C',
  //   borderWidth:1,
  //   flexDirection:"column",
  //   justifyContent:"center",
  //   alignItems:"center",
  //   backgroundColor:"white",
  //   borderRadius: 20,
  // },
  // ContactTitle:{
  //   fontSize:20,
  //   color:"green",
  // },
});
