import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, ListView,
    Dimensions, StyleSheet, Image, Alert,TextInput,ScrollView
} from 'react-native';
import global from './global';
import theme from '../theme';
import getToken from "../api/getToken";
import getBookmarkApi from "../api/getBookmarkApi";
import createBookmarkApi from "../api/createBookmarkApi";
import Modal from 'react-native-modalbox'; 


export default class BookMarkView extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource( {rowHasChanged:(r1,r2)=>r1!==r2} ),
      text:"",
      }
    }

    gotoList(idbookmark) {
      const { navigator } = this.props;
      navigator.push({ name: 'BOOKMARK_LIST' ,idbookmark});
    }

    getData(){
        getToken()
        .then(token =>{return(getBookmarkApi(token));})
        .then((responseData)=>{
          if(responseData.result === "success"){
            this.setState({dataSource: this.state.dataSource.cloneWithRows(responseData.data),});
          }
          else{ 
            this.setState({ dataSource: this.state.dataSource.cloneWithRows([]), });
          }
        })  
        .catch(err => console.log(err));
    }

  insertDone(){
    this.getData();
    this.setState({text:""});
    this.refs.modal1.close();
  }

  alertInsertSuccess(responseJson) {
    Alert.alert(
        'Notice',
        'Tạo mới thành  công ',
        [
            { text: 'OK',  onPress:    this.insertDone.bind(this) },
        ],
        { cancelable: false }
    );
  }

alertError() {
  Alert.alert(
      'Notice',
      'Vui lòng nhập tên! ',
      [
          { text: 'OK',  onPress: ()=>console.log("NULL NAME") },
      ],
      { cancelable: false }
  );
}

    createNewBookmark(text){
      if(this.state.text ==""){this.alertError();}
      else{
        getToken()
        .then(token => createBookmarkApi(token, text))
        .then((responseJson)=>{
          this.alertInsertSuccess(responseJson);
        })
        .catch(err => console.log(err))
      }  
    }

    componentDidMount(){
     this.interval = setInterval(() => this.getData(), 1000);
   }     

   componentWillUnmount() {
    clearInterval(this.interval);
  }

    render() {
      const createBookmarkJSX=(
        <Modal
          style={[styles.modal, styles.modal1]}
          backdrop={true}
          coverScreen={true}
          ref={"modal1"}
          backdropPressToClose={false}
          swipeToClose={false}
          keyboardTopOffset={0}
          position={"top"}
         >
            <View style={styles.ctnMapView}>
              <View style={styles.ctnHeaderMap}>
                <View style={styles.ctnCloseButton}>
                </View>
                <View style={styles.ctnHeaderText}>
                  <Text style={styles.txtHeader} numberOfLines={1}>Tạo danh sách mới</Text>
                </View>
                <TouchableOpacity onPress={() => this.refs.modal1.close()} style={styles.ctnHeaderIcon}>
                  <Image source={theme.Image.iCon.Close} style={styles.iconHeader}/>  
                </TouchableOpacity>
              </View>
              
              <View style={styles.ctnMapArea}>
                <Text style={styles.txtInput}>Nhập tên danh sách:</Text>
                <TextInput
                      underlineColorAndroid={theme.Color.White}
                      style={{height: 40, borderColor: 'gray', borderWidth: 1, margin:5}}
                      onChangeText={(text) => this.setState({text})}
                      value={this.state.text}
                  />
                <TouchableOpacity style={styles.btnComment} onPress={() => this.createNewBookmark(this.state.text)}>
                  <Text style={styles.txtButton}> Tạo mới</Text>
                </TouchableOpacity>
              </View> 
            </View>

            </Modal>
      );

          const bookmarkJSX=(
              <ListView
                  contentContainerStyle={styles.main}
                  enableEmptySections
                  dataSource={this.state.dataSource}
                  renderRow={e => (
                    <View style={styles.ctnBookmarkRow}>
                      <Image source={theme.Image.iCon.Folder} style={styles.iconFoler} />
                      <TouchableOpacity onPress={()=>this.gotoList(e.idbookmark) }>
                        <Text style={styles.txtBookmark}>{e.bookmark_name}</Text>
                      </TouchableOpacity>
                    </View>  
                  )}
              />
          );
          const headerJSX=(
            <View style={styles.row1}>
            <View style={styles.ctnHeaderIcon} />
            <View style={styles.ctnHeaderText}>
              <Text style={styles.txtHeader}>Danh sách đã lưu</Text>
            </View>
              <TouchableOpacity style={styles.ctnHeaderIcon} onPress={() => this.refs.modal1.open()}>
               <Image source={theme.Image.iCon.WhitePlus} style={styles.iconHeader} />
              </TouchableOpacity>
            </View>
          );

        return (
          <View style={styles.wrapper}>
            {headerJSX}
            {bookmarkJSX}
            {createBookmarkJSX}
          </View>
        );

    }
}

const { width, height} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const styles = StyleSheet.create({
    main: {
        width, 
        backgroundColor: theme.Color.White,
    },
    wrapper:{
        flex:1
    },
    container: {
      flex:1, backgroundColor: theme.Color.White,
    },
    row: {
      flex: 1,
      flexDirection:'row',
      backgroundColor:"#FFF",
      padding:3,
      margin:3,
      borderRadius: 20,
    },
    ctnBookmarkRow:{
      flex:0.3,
      margin:5,
      backgroundColor: theme.Color.White,
      // borderRadius: 100,
      flexDirection:"row",
      alignItems:"center",
      padding:5,
    },
    iconFoler:{
      width:width/17,
      height:width/17,
      marginRight:5,
    },
    content:{
      flex:0.7,
      padding:3,
    },
    content_row:{
      flex:1,
      flexDirection:"row",
      alignItems: 'center',
    },
    ctnHeaderIcon:{
      flex:0.2,
      padding:1,
      alignItems:'center',
    },
    iconHeader:{
      // flex:1,
      width:  width/19,
      height: width/19,
    },
    ctnHeaderText:{
      flex:0.7,
      alignItems:'center',
    },
    txtHeader:{
      color: '#FFF',
       fontSize: theme.Size.FontBig,
    },
    content_row_name:{
      color:"green",
      fontSize: 20,
      alignItems: 'center',
    },
    content_row_rate:{
      color:"green",
      fontSize: 20,
      alignItems: 'center',
    },
    content_row_address:{
      color:"gray",
      fontSize: 17,
      alignItems: 'center',
    },
    content_row_menu:{
      color:"gray",
      fontSize: 17,
      alignItems: 'center',
    },
    row1:{
      flexDirection: 'row',
      alignItems:'center', 
      // marginBottom:10,
      height: height / 17, 
      backgroundColor: theme.Color.NiceRed,
      padding:5, 
      justifyContent:'space-around'
   },
   titleStyle:{
    color: '#FFF', 
    fontSize: theme.Size.FontMedium, 
    alignItems:'center',
     justifyContent:"space-between",
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
  cntBtnDelete:{
    // flex:1,
    width:width/8,
    height:width/10,
    flexDirection:"row",
    alignItems: 'center',
    justifyContent:"center",
    padding:3,
    backgroundColor: theme.Color.NiceRed,
  },
  txtBtnDelete:{
    color: theme.Color.White,
    fontWeight:"900",
  },
  txtName:{
    color:"green",
    fontSize: theme.Size.FontBig,
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
  btnComment:{
    backgroundColor: theme.Color.NiceRed,
    alignItems:"center",
    padding:10,
    margin:2,
  },
  txtButton:{
    color: theme.Color.White,
    fontWeight:"bold",
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
  ctnCloseButton:{
    flex: 0.1,
    alignItems:"center",
  },
  ctnHeaderText:{
    flex:0.8,
    alignItems:'center',
  },
  txtHeader:{
    color: '#FFF',
     fontSize: theme.Size.FontBig,
  },
  ctnHeaderIcon:{
    flex:0.1,
    padding:0,
    alignItems:'center',
    justifyContent:"center",
  },
  txtInput:{
    fontSize: theme.Size.FontSmall,
    padding:2,
  },  
  iconHeader:{
    flex:1,
    width:  width/14,
    height: width/17,
  },
  ctnMapArea:{
    flex:14,
    backgroundColor: theme.Color.White,
    padding:2,
  },
  txtBookmark:{
    fontSize: theme.Size.FontMedium,
    fontWeight:"500",
    color: theme.Color.NiceRed, 
  },
  });
  