import { InputAutoSuggest } from 'react-native-autocomplete-search';
import React, { Component } from 'react';
import {
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  StyleSheet,
  FlatList
} from 'react-native';
// import styles from "./styles";
// import getRandomFoodApi from "../../api/getRandomFoodApi";
// import getRandomFoodApi2 from "../../api/getRandomFoodApi2";
// import getLocation from "../../api/getLocation";
import getSuggestionApi from "./getSuggestionApi";

export default class SearchView extends Component {
  constructor(props){
    super(props);
    this.state = {
      key:"",
      isShowSuggestion: false,
      list:[],
    }
  }

  hanleChangeText(text){
    this.setState({key: text});

    getSuggestionApi(text)
    .then( (responseData)=>{
      this.setState({ 
        list: responseData,
        isShowSuggestion: true,
      });
      console.log("RETURN",this.state.list )
    })

  }

  

  render() {
    return (
      <View style={{flex:1}}>
        <TextInput 
          style={styles.inputSearch} 
          placeholder="Bạn muốn ăn gì?" 
          underlineColorAndroid="white"
          onChangeText={(text)=>this.hanleChangeText(text)}
        />
          {/* { true ?  */}
          <View style={{borderColor: "red", borderWidth:4, flex: 5}}>
            <FlatList
            data={this.props.list}
            // extraData={this.state}
            // keyExtractor={this._keyExtractor}
            renderItem={ ({item}) => (
              <Text style={{color: "red", borderColor: "green"}}>{item.name}</Text>
            )}
            /> 
            </View>
            {/* :<View/>} */}
        <View/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputSearch:{
    // flex:1,
    height: 50, 
    backgroundColor: "gray", 
    padding:0,
    paddingLeft:15, 
    // alignItems:"center",
    // fontSize: theme.Size.FontMedium,
   },
})
