import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet, 
    Dimensions,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import theme from "../theme";
import getToken from '../api/getToken';
import getBookmarkOfOneFood from '../api/getBookmarkOfOneFood';
import updateBookmarkOfOneFoodApi from '../api/updateBookmarkOfOneFoodApi';


export default class FoodDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookmark:[],
      isLoading: true,
    }
  }

  goBack() {
      const { navigator } = this.props;
      navigator.pop();
  }

  getBookmark(){
    const {idfood} = this.props;
    getToken()
    .then(token =>{return getBookmarkOfOneFood(token, idfood)})
    .then(responseJson =>{
      console.log(responseJson);
      if(responseJson.result === "success"){
        console.log('BOOKMARK_WORK');
        console.log(responseJson.data);
        this.setState({
          bookmark:  responseJson.data,
        });
        console.log("BOOKMARK",this.state.bookmark);
      }else{
        console.log('GETBOOKMARK_ERROR');
        this.setState({
          bookmark:[],
          isLoading: false,
        });
      }
    })
    .catch(error=>{
      console.log('ERROR',error);
      this.setState({
        bookmark:[],
        isLoading: false,
      });
    });
  }


  componentDidMount(){
    this.getBookmark();	
  }

updateBookmarkOfOneFood(idbookmark,idfood){
    // const {idfood} = this.props;
    getToken()
    .then(token =>{return updateBookmarkOfOneFoodApi(token,idbookmark, idfood)})
    .then(responseJson =>{
      console.log(responseJson.result);
    })
    .catch(error=>{
      console.log('ERROR',error);
    });
}


  changeStateOfCheckbox(idbookmark) {
        const {idfood} = this.props;
       const newBookmark = this.state.bookmark.map(e => {
              if (e.idbookmark !== idbookmark) return e;
              return { idbookmark : e.idbookmark, bookmark_name: e.bookmark_name, isInThis : 1 - Number(e.isInThis)};
       });
       this.setState({ bookmark: newBookmark });
       this.updateBookmarkOfOneFood(idbookmark,idfood);
    }   


  render() {    
    const headerJSX=(
      <View style={styles.ctnHeader}>
        <TouchableOpacity  onPress={this.goBack.bind(this)} style={styles.ctnHeaderIcon}>
          <Image source={theme.Image.iCon.Whiteback} style={styles.iconHeader}/>
        </TouchableOpacity>
        <View style={styles.ctnHeaderText}>
          <Text style={styles.txtHeader} numberOfLines={1}>Lưu vào bookmark</Text>
        </View>
      </View>
    );



    const bookmarkJSX=(
         <FlatList
            enableEmptySections={true}
            data={this.state.bookmark}
            renderItem={
               ({item}) => 
              // <Text> {item.bookmark_name} </Text>
                <View style={styles.ctnBookmarkRow}>
                  <CheckBox
                        checkBoxColor={"red"}
                        style={{marginRight:10}}
                        isChecked={item.isInThis === "1"}
                        onClick={() => this.changeStateOfCheckbox(item.idbookmark)}
                  />
                  <Text style={styles.txtBookmarkName}>{item.bookmark_name}</Text>
                  {/* <Text>{item.isInThis}</Text> */}
                </View> 
             }
             keyExtractor={item => item.idbookmark}
         />
     );


  return (
      <View style={styles.wrapper}>
        {headerJSX }
        {this.state.bookmark.length === 0 ? <Text>Loading</Text> : bookmarkJSX}
        {/* {bookmarkJSX} */}
        </View>
    );
  }
}



const {height , width} = Dimensions.get('window'); 
const styles= StyleSheet.create({
  wrapper:{
    flex:1, 
    backgroundColor: theme.Color.White,
  },
  body:{
    flex: 1,
    margin:0,
    backgroundColor: theme.Color.NiceGray,
  },
  ctnHeader:{
    flexDirection:'row', 
    justifyContent:'space-between',
    height: height/17,
    width:width,
    backgroundColor: theme.Color.NiceRed, 
    alignItems:'center',
  },
  txtBookmarkName:{
    fontSize: theme.Size.FontSmall,
    color: theme.Color.Orange,
    alignItems: 'center',
  },
  ctnBookmarkRow:{
    flexDirection:"row",
    padding:5,
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
    justifyContent: 'flex-end', 
    width:width,
    backgroundColor: theme.Color.White,
    marginBottom: 5,
  },
  imageFood:{
      height:height/3,
      width:width,
      alignItems:"center",
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
