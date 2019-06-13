import React,{Component} from "react";
import {
  View, 
  StyleSheet, 
  Image,
  Text,
  Dimensions

} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import global from "./global";
import UserMenu from "./UserMenu";
import Home from "./Home";
import BookMark from "./BookMark";
import Search from "./Search";
import NearMe from "./NearMe";
import initData from "../api/initData";
import getBookMark from "../api/getBookMark";
import saveBookMark from "../api/saveBookMark";
import theme from "../theme";
import getToken from "../api/getToken";
import Detect from "../Components/Detect";

export default class Shop extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: "home",
      bookmarkArray: [],
      isLogIn:null,
      tabBarHeight: 50,
    };
  }



hiddenTabNavigator(){
  this.setState({tabBarHeight: 0});
}

showTabNavigator(){
  this.setState({tabBarHeight: 50});
}


  componentDidMount(){
  }


  render(){
    return(
      <View style={{flex:1, backgroundColor:theme.Color.White,padding:0,}}>
        <TabNavigator 
        tabBarStyle={{ height: this.state.tabBarHeight, overflow: 'hidden' }}
        sceneStyle={{ paddingBottom:  this.state.tabBarHeight }}
        >

          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Trang chủ"
            renderIcon={() => <Image source={require("../Image/whitehome.png")} style={styles.imageStyle}/>}
            renderSelectedIcon={() => <Image source={require("../Image/redhome.png")} style={styles.imageStyle} />}
            onPress={() => this.setState({ selectedTab: 'home' })}
            selectedTitleStyle={{ color: theme.Color.Red, fontFamily: 'Avenir', }}
            >
            <Home 
              open={this.props.open} 
              hiddenTabNavigator={this.hiddenTabNavigator.bind(this)} 
              showTabNavigator={this.showTabNavigator.bind(this)}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'category'}
            title="Khám phá"
            renderIcon={() => <Image source={require("../Image/whitecategory.png")} style={styles.imageStyle}/>}
            renderSelectedIcon={() => <Image source={require("../Image/redcategory.png")} style={styles.imageStyle} />}
            onPress={() => this.setState({ selectedTab: 'category' })}
            selectedTitleStyle={{ color: theme.Color.Red, fontFamily: 'Avenir', }}
            >
            <Detect
              hiddenTabNavigator={this.hiddenTabNavigator.bind(this)} 
              showTabNavigator={this.showTabNavigator.bind(this)}
            />
          </TabNavigator.Item>


          <TabNavigator.Item
            selected={this.state.selectedTab === 'search'}
            title="Tìm kiếm"
            renderIcon={() => <Image source={require("../Image/whitesearch.png")} style={styles.imageStyle}/>}
            renderSelectedIcon={() => <Image source={require("../Image/redsearch.png")} style={styles.imageStyle}/>}
            onPress={() => this.setState({ selectedTab: 'search' })}
            selectedTitleStyle={{ color:theme.Color.Red, fontFamily: 'Avenir' }}
            >
            <Search
                          hiddenTabNavigator={this.hiddenTabNavigator.bind(this)} 
                          showTabNavigator={this.showTabNavigator.bind(this)}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'suggestion'}
            title="Gợi ý"
            renderIcon={() => <Image source={require("../Image/whiteidea.png")} style={styles.imageStyle}/>}
            renderSelectedIcon={() => <Image source={require("../Image/redidea.png")} style={styles.imageStyle}/>}
            onPress={() => this.setState({ selectedTab: 'suggestion' })}
            selectedTitleStyle={{ color:theme.Color.Red, fontFamily: 'Avenir' }}
            >
            <UserMenu
                          hiddenTabNavigator={this.hiddenTabNavigator.bind(this)} 
                          showTabNavigator={this.showTabNavigator.bind(this)}
            />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'save'}
            title="Đã lưu"
            renderIcon={() => <Image source={require("../Image/whitestar.png")} style={styles.imageStyle}/>}
            renderSelectedIcon={() => <Image source={require("../Image/redstar.png")} style={styles.imageStyle}/>}
            onPress={() => this.setState({ selectedTab: 'save' })}
            // badgeText={bookmarkArray.length}
            selectedTitleStyle={{ color:theme.Color.Red, fontFamily: 'Avenir' }}
          >
            <BookMark 
                          hiddenTabNavigator={this.hiddenTabNavigator.bind(this)} 
                          showTabNavigator={this.showTabNavigator.bind(this)}
            // bookmarkArray={bookmarkArray}
             />
          </TabNavigator.Item>
          
        </TabNavigator>
      </View>
   );
  }
}
const {height , width} = Dimensions.get('window'); 
const styles = StyleSheet.create({
  input:{
    backgroundColor:'#EEEEEE',
    height:60,
    borderWidth:1,
    margin:5,
    fontSize: 20,
  },
  wrapper: {
    flex:1,
    backgroundColor: "white", 
    padding:10
  },
  touchable:{
    margin:5,
    backgroundColor:"#EEEEEE",
    padding:10,
    flexDirection:"row"
  },
  imageStyle:{
    width: width/14,
    height: width/14,
    marginRight:0,
 },
  plus: {
    color:"black",
    fontSize: 20, 
  },
});