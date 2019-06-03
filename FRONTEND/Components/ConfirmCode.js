import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
  Button
} from 'react-native';
import resendEmailApi from "../api/resendEmailApi";
import checkCodeApi from "../api/checkCodeApi";
import theme from "../theme";
import CodeInput from 'react-native-confirmation-code-input';
// import LottieView from 'lottie-react-native';
import Modal from "react-native-modalbox";

export default class ConfirmCode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
    navigator.pop();
}


  reSendEmail(email){
    resendEmailApi(email)
    .then((responseJson)=>{
      if(responseJson.result=="success"){
        Alert.alert(
          'Thành công',
          'Đã gửi mã xác nhận mới qua email!',
          [{text: 'OK'}],
          { cancelable: false }
        );
      }
      else{
        Alert.alert(
          'Thất bại',
          'Gửi mã xác nhận qua email thất bại!',
          [{text: 'OK'}],
          { cancelable: false }
        );
      }
    })
    .catch(err => console.log(err));
  }
  
  _onFulfill(code){
    this.toggleModal();
    console.log("CODE",code);
    checkCodeApi(this.props.email, code)
    .then((responseJson)=>{
      this.toggleModal();
      console.log("JSONRESPONSE",responseJson);
      if(responseJson.result==="success"){
        Alert.alert(
          'Thành công',
          'Xác thực tài khoản thành công!',
          [{text: 'OK'}],
          { cancelable: false }
        );
      }
      else{
        Alert.alert(
          'Thất bại',
          'Mã xác thực không chính xác!',
          [{text: 'OK'}],
          { cancelable: false }
        );
      }
    })
    .catch(err => console.log(err));
  
  }

  componentDidMount(){
    console.log("THIS.PROPS>EMAIL", this.props.email);
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  
  render() {
    const {email} = this.props;

   const loadingJSX =(
    <Modal isVisible={this.state.isModalVisible}>
    <View style={{ flex: 1 }}>
        {/* <LottieView source={theme.Image.Animotion.Search} autoPlay loop /> */}
      <Button title="Hide modal" onPress={this.toggleModal} />
    </View>
  </Modal>
   );

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text style={styles.txtHeader}>Nhập mã xác thực</Text>
        </View>
        <View style={styles.ctnBody}>
          <View/>
          <View style={styles.inputWrapper2}>
            <Text style={styles.inputLabel2}>Ô nhập mã</Text>
            <CodeInput
              ref="codeInputRef2"
              keyboardType="numeric"
              secureTextEntry
              activeColor='rgba(49, 180, 4, 1)'
              inactiveColor='rgba(49, 180, 4, 1.3)'
              autoFocus={true}
              ignoreCase={true}
              inputPosition='center'
              size={50}
              onFulfill={(code) => this._onFulfill(code)}
              containerStyle={{ marginTop: 30 }}
              codeInputStyle={{ borderWidth: 1.5 }}
            />
          </View>
          <TouchableOpacity style={styles.btnReSend} onPress={() => this.reSendEmail(this.props.email)}>
            <Text style={styles.txtButton}>Gửi lại mã xác nhận</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnReSend} onPress={() => this.goBackToMain()}>
            <Text style={styles.txtButton}>Hủy bỏ</Text>
          </TouchableOpacity>
          </View> 
          {loadingJSX}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#E0F8F1'
  },
  ctnBody:{
    justifyContent:"space-between",
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    color: 'red',
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 30
  },
  wrapper:{
    backgroundColor: theme.Color.NiceRed,
    padding:10,
    justifyContent:'center',
    flexDirection: 'row',
    alignItems:'center',
    marginBottom:2,
},
txtHeader:{
  color: theme.Color.White,
  fontSize: theme.Size.FontMedium,
  fontWeight: "900",
},
  inputWrapper2: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: '#E0F8F1'
  },
  btnReSend:{
    marginTop: 100,
    backgroundColor: theme.Color.NiceRed,
    alignItems:"center",
    padding:10,
    paddingHorizontal: 100,
  },
  txtButton:{
    color: theme.Color.White,
    fontWeight:"bold",
  },
  inputLabel2: {
    color: '#31B404',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center'
  },

});