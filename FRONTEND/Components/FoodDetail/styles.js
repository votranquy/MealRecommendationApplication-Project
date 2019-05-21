import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme';

const {height , width} = Dimensions.get('window'); 
export default StyleSheet.create({
    wrapper:{
        flex: 1,
        margin:0,
        backgroundColor:"#EEE",
      },
      ctnHeader:{
       flexDirection:'row', 
       justifyContent:'space-between',
       height: height/15,
       width:width,
       backgroundColor: theme.Color.HeaderBackground, 
       alignItems:'center',
      },
      ctnHeaderIcon:{
        flex:0.1,
        padding:1,
        alignItems:'center',
      },
      ctnHeaderText:{
        flex:0.8,
        alignItems:'center',
      },
      iconHeader:{
        flex:1,
        width: width*0.1,
        height:height/15,
      },
      txtHeader:{
        color: '#FFF',
         fontSize:20,
      },
      content:{
          flexDirection:"row",
          flex:1,
          backgroundColor:"#CCC",
          width:width,
      },
      ctnImageFood:{
        justifyContent: 'flex-end', 
        // height:height/3,
        width:width,
      },
      imageFood:{
          height:height/3,
          width:width,
          alignItems:"center",
          padding:0,
      },
      ctnFoodInfomation:{
        alignItems:"center",
        padding:3,
        marginBottom: 5,
      },
      ctnText:{
        width:width,
        backgroundColor:theme.Color.White,
        padding:3,
      },
      ctnMapView: {
        height:height,
        width:width,
        flex:1,
       },
       ctnHeaderMap:{
         flex:1/15,
         flexDirection:"row",
         backgroundColor: theme.Color.HeaderBackground,
         alignItems:"center",
  
       },
       ctnMapArea:{
        flex:14/15,
        backgroundColor: theme.Color.HeaderBackground,
      },
      ctnCloseButton:{
        flex: 0.1,
        alignItems:"center",
      },
      btnClose:{
        fontSize: theme.Size.FontBigger,
        color: theme.Color.White,
      },
  
      smallImage:{
        width:20,
        height:20,
        padding:1,
  
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
      lbMenu:{
        justifyContent:"center",
        borderBottomWidth:1,
        borderColor:  theme.Color.LightGray,
      },
      txtMenu:{
        fontSize:20,
        fontWeight:"900",
        color: theme.Color.NiceBlack, 
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
      ctnImageItem:{
        flex:3,
        padding:1,
      },
      imgeItem:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      },
      ctnInfomationItem:{
        flex:7,
        padding:3,
      },
      contact:{
        flexDirection: "row",
        justifyContent:"center",
        borderWidth:0,
        borderColor: '#FFF',
        marginBottom:2,
        marginTop:2,
        borderRadius: 20,
        
      },
      ContactCell:{
        flex:1,
        borderColor: '#2ABB9C',
        borderWidth:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius: 20,
      },
      ContactTitle:{
        fontSize:20,
        color:"green",
      },
      ctnComment:{
        // flexDirection:"row",
        padding:5,
        // justifyContent:"center",
        borderBottomWidth:1,
        borderColor:  theme.Color.LightGray,
      },

      ctnUsername:{
        flexDirection: "row",
        margin:2,
      },
      logoUsername:{
        backgroundColor: theme.Color.DarkGray,
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
      txtUsername:{
        color: theme.Color.Green,
        fontWeight: "900",
      },
      txtComment:{
        // backgroundColor:"white",
        fontSize: theme.Size.FontSmall,
        color: theme.Color.Black,
        fontFamily: theme.Font.Light,
      },
});
