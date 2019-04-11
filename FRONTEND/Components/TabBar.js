import React,{Component} from "react";
import {
  AppRegistry, View,TouchableOpacity,Text, StyleSheet,
  AsyncStorage, Image
} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import UserMenu from "./UserMenu";
import HomePage from "./HomePage";
import Header from "./Header";
import ScrollMenu from "./ScrollMenu";
export default class SideMenu extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab: "home"
    }
  }

  render(){
    return(
      <View style={{flex:1, backgroundColor:'#86AAEE'}}>
      <Header />
      <ScrollMenu/>
      <TabNavigator >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => <Image source={require("../Image/home_white.png")} />}
          renderSelectedIcon={() => <Image source={require("../Image/home_black.png")} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <HomePage />
          {/* <View style={{flex:1,backgroundColor:"white"}}></View> */}
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'save'}
          title="Save"
          renderIcon={() => <Image source={require("../Image/save_white.png")} />}
          renderSelectedIcon={() => <Image source={require("../Image/save_black.png")} />}
          onPress={() => this.setState({ selectedTab: 'save' })}>
          <View style={{flex:1,backgroundColor:"white"}}></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'bell'}
          title="Notification"
          renderIcon={() => <Image source={require("../Image/bell_white.png")} />}
          renderSelectedIcon={() => <Image source={require("../Image/bell_black.png")} />}
          onPress={() => this.setState({ selectedTab: 'bell' })}>
          <View style={{flex:1,backgroundColor:"white"}}></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'user'}
          title="User"
          renderIcon={() => <Image source={require("../Image/user_white.png")} />}
          renderSelectedIcon={() => <Image source={require("../Image/user_black.png")} />}
          onPress={() => this.setState({ selectedTab: 'user' })}>
            <UserMenu/>
           {/* <View style={styles.wrapper}>
            <TouchableOpacity 
              style={styles.touchable}
            >
              <Image
                  source={require('../Image/password.png')}
                />
              <Text style={styles.plus}>  Đổi mật khẩu</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.touchable}
            >
              <Image
                source={require('../Image/setting.png')}
              />
              <Text style={styles.plus}>  Cài đặt thông báo</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.touchable}
            >
              <Image
                source={require('../Image/introduce.png')}
              />
              <Text style={styles.plus}>  Giới thiệu ứng dụng</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.touchable}
            >
              <Image
                source={require('../Image/star.png')}
              />
              <Text style={styles.plus}>  Xếp hạng ứng dụng</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.touchable}
            >
              <Image
                source={require('../Image/share.png')}
              />
              <Text style={styles.plus}>  Chia sẻ  ứng dụng</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.touchable}
            >
              <Image
                source={require('../Image/logout.png')}
              />
              <Text style={styles.plus}>  Đăng xuất</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.touchable}
            >
              <Image
                source={require('../Image/logout.png')}
              />
              <Text style={styles.plus}>  Đăng xuất</Text>
            </TouchableOpacity>

          </View> */}

        </TabNavigator.Item>
      </TabNavigator>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  input:{backgroundColor:'#EEEEEE',height:60,borderWidth:1,margin:5,fontSize: 20,},
  wrapper: {flex:1, backgroundColor: "white", padding:10},
  touchable:{margin:5,backgroundColor:"#EEEEEE",padding:10,flexDirection:"row"},
  plus: {color:"black",fontSize: 20, },
});