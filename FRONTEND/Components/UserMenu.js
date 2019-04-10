import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
export default class UserMenu extends Component {

  render() {
    return (
      <ScrollView style={styles.wrapper}>
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


          </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input:{backgroundColor:'#EEEEEE',height:60,borderWidth:1,margin:5,fontSize: 20,},
  wrapper: {flex:1, backgroundColor: "white", padding:10},
  touchable:{margin:5,backgroundColor:"#EEEEEE",padding:10,flexDirection:"row"},
  plus: {color:"black",fontSize: 20, },
});

