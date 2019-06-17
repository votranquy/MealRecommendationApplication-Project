import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Alert,
    Image,
    ActivityIndicator,
} from 'react-native';
import theme from '../theme';
import Modal from "react-native-modalbox";
import resetPasswordApi from "../api/resetPasswordApi";


export default class ResetPassword extends Component {

    constructor(props){
        super(props);
        this.state = {
          password:'',
          repassword:'',
          passwordValidate: true,
          repasswordValidate: true,
        };
    }

    // removeEmail(){
    //     this.setState({
    //         email: '',
    //     })
    // }

    goBack(){
      const { navigator } = this.props;
      navigator.pop();   
    }

    gotoLogIn() {
        const {navigator} = this.props;
        navigator.push({ name: 'AUTHENTICATION'});
    } 
   
    validate(text,type){
      alph=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


      if(type == 'password'){
          if(text.length>=6){
            //   console.log("Dung PASSWORD");
              this.setState({passwordValidate: true, password: text});
          }
          else{
            //   console.log("Sai Password");
              this.setState({passwordValidate: false, password: text});
          }
      }

      if(type == 'repassword'){
          if(text.length>=6 && text == this.state.password){
              this.setState({repasswordValidate: true, repassword: text});
          }
          else{
              this.setState({repasswordValidate: false, repassword: text});
          }
      }
  }


    sendResetPassword(){
      this.refs.modal2.open();
      const {email} = this.state;
      resetPasswordApi(this.props.email, this.state.password)
      .then(responseJson=>{
          console.log("RESPONSE",responseJson);
        this.refs.modal2.close();

        if(responseJson.result=="success"){
            this.refs.modal2.close();
            Alert.alert(
                'Thành công',
                'Đổi mật khẩu thành công!',
                [
                    { text: 'OK', onPress:()=>{
                        this.refs.modal2.close();
                        this.gotoLogIn();
                    }}
                ],
                { cancelable: false }
            );
        }

        if(responseJson.result=="fail"){
            this.refs.modal2.close();
            Alert.alert(
                'Lỗi',
                'Đã xảy ra lỗi. Vui lòng thử lại sau!',
                [
                    { text: 'OK', onPress:()=>{
                        this.refs.modal2.close();
                    }}
                ],
                { cancelable: false }
            );
        }

        this.refs.modal2.close();
        })

      .catch(err => {console.log(err);  this.refs.modal2.close();});
    }


    clickResetPassword(){
        if(
            this.state.password == "" || this.state.repassword=="" 
            || !this.state.passwordValidate || !this.state.repasswordValidate 
            || this.state.password != this.state.repassword
        ){
            if(this.state.password == "") this.setState({passwordValidate: false});
            if(this.state.repassword == "") this.setState({repasswordValidate: false});
            if(this.state.password != this.state.repassword) this.setState({repasswordValidate: false});
            Alert.alert(
                'Lỗi',
                'Bạn phải nhập đầy đủ và chính xác các thông tin!',
                [
                  {text: 'OK'},
                ],
                {cancelable: false},
            );
        }
        else{ this.sendResetPassword();}
    }


    render() {
        const { inputStyle, btnLogIn, txtButton } = styles;

        const LoadJSX=(
          <Modal
              style={[styles.modal, styles.modal2]}
              backdrop={true}
              coverScreen={false}
              entry={"top"}
              ref={"modal2"}
              backdropOpacity={0.5}
          >
          <View style={[styles.ctnLoading, styles.horizontal]}>
               <View style={styles.ctnLoadingRow}>
                  <ActivityIndicator size="large" size={50} color="#FF0000" />
              </View>
          </View>
        </Modal>
        );

        return (
          <View style={styles.container}>
            <View style={styles.row1}>
                <Text></Text>
              <Text style={styles.titleStyle}>Đặt lại mật khẩu</Text>
              <Text></Text>
            </View>
            <View style={styles.main}>
            <Text style={styles.label}>Mật khẩu</Text>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập mật khẩu" 
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={(text)=>{this.validate(text,'password')}}
                />
                { !this.state.passwordValidate &&( <Text style={styles.labelError}>Mật khẩu có độ dài tối thiểu 6 kí tự</Text>) }


                <Text style={styles.label}>Nhập lại mật khẩu</Text>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập lại mật khẩu" 
                    value={this.state.repassword}
                    secureTextEntry
                    onChangeText={(text)=>{this.validate(text,'repassword')}}
                />
                { !this.state.repasswordValidate &&( <Text style={styles.labelError}>Nhập lại mật khẩu không khớp</Text>) }


                <TouchableOpacity    style={btnLogIn}   onPress={() => this.clickResetPassword()}>
                    <Text style={txtButton}>Đặt lại mật khẩu</Text>
                </TouchableOpacity>

            </View>
            {LoadJSX}
          </View>
        );
    }
}

const styles = StyleSheet.create({
  ctnLoadingRow:{
    flexDirection:"row",
    justifyContent: 'center',
  },
  titleStyle: { 
    color: '#FFF', 
    fontFamily: 'Avenir', 
    fontSize: theme.Size.FontBig,
    fontWeight:"900",
  },
  iconStyle: {
    width: 30, 
    height: 30 
  },
  row1: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingBottom:20,
  },
    container: {
      flex: 1,
      backgroundColor: theme.Color.NiceRed,
      padding: 20,
      paddingBottom:0,
      // justifyContent: 'space-between',
    },
    ctnFofGot:{
        marginTop: 20,
        alignItems:"center",
        justifyContent:"center",
    },
    txtForGot:{
        fontSize: theme.Size.FontBig,
        fontWeight:"900",
        color: theme.Color.White,
    },
    main:{
        paddingBottom:20,
    },
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 0,
        marginTop:10,
        // borderRadius: 20,
        paddingLeft: 10
    },
    btnLogIn: {
        marginTop:20,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtButton: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400',
        fontSize: theme.Size.FontBig,
    },
    label:{
        color: theme.Color.White,
        fontWeight: "900",
        fontSize: theme.Size.FontMedium,
        marginTop: 5,
    },
    labelError:{
        color: theme.Color.Green,
        fontSize: theme.Size.FontSmall,
    }
});
