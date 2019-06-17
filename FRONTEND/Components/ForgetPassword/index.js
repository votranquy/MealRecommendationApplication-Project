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
import theme from '../../theme';
import Modal from "react-native-modalbox";
import sendEmailToGetPasswordApi from "../../api/sendEmailToGetPasswordApi";

export default class ForgetPassword extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            emailValidate: true,
        };
    }

    removeEmail(){
        this.setState({
            email: '',
        })
    }

    goBack(){
      const { navigator } = this.props;
      navigator.pop();   
    }

    gotoConfirmCode(email) {
        const {navigator} = this.props;
        navigator.push({ name: 'FORGETPASSWORD_CODE',email});
    } 
   
    validate(text,type){
      alph=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(type == 'email'){
          if(alph.test(text)){
              // console.log("Dung EMAIL");
              this.setState({emailValidate: true, email: text});
          }
          else{
              // console.log("SAI EMAIL");
              this.setState({emailValidate: false, email: text});
          }
      }
    }

    onSend(){
      this.refs.modal2.open();
      const { email } = this.state;
      sendEmailToGetPasswordApi(email)
      .then(responseJson=>{
        this.refs.modal2.close();

        if(responseJson.result=="success"){
            this.refs.modal2.close();
            Alert.alert(
                'Thành công',
                'Đã gửi mail thành công! Xin mời kiểm tra email để nhận mã xác thực',
                [
                    { text: 'OK', onPress:()=>{
                        this.refs.modal2.close();
                        this.gotoConfirmCode(this.state.email);
                    }}
                ],
                { cancelable: false }
            );
        }

        if(responseJson.result=="fail"){
            this.refs.modal2.close();
            Alert.alert(
                'Lỗi',
                'Email bạn nhập không tồn tại trong hệ thống!',
                [
                    { text: 'OK', onPress: () =>{
                        this.setState({ email: ''});
                        this.refs.modal2.close();
                    }}
                ],
                { cancelable: false }
            );
        }

        if(responseJson.result=="error"){
            this.refs.modal2.close();
          Alert.alert(
              'Lỗi',
              'Có lỗi xảy ra. Vui lòng thử lại sau!',
              [
                  { text: 'OK', onPress: () =>{
                      this.setState({ email: ''});
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


    clickSend(){
        if(this.state.email == "" || !this.state.emailValidate){
            if(this.state.email == ""){ this.setState({emailValidate: false})};
            Alert.alert(
                'Lỗi',
                'Bạn phải nhập đầy đủ và chính xác các thông tin!',
                [
                  {text: 'OK'},
                ],
                {cancelable: false},
            );
        }
        else{ this.onSend();}
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
              <TouchableOpacity onPress={this.goBack.bind(this)}>
                  <Image source={theme.Image.iCon.WhiteBack} style={styles.iconStyle} />
              </TouchableOpacity>
              <Text style={styles.titleStyle}>Quên mật khẩu</Text>
              <Text></Text>
            </View>
            <View style={styles.main}>
                <Text style={styles.label}>Nhập email để lấy lại mật khẩu</Text>
                <TextInput
                    style={inputStyle}
                    underlineColorAndroid="white"
                    placeholder="Nhập email"
                    onChangeText={(text)=>{this.validate(text,'email')}}
                />
                { !this.state.emailValidate &&( <Text style={styles.labelError}>Email không đúng định dạng</Text>) }


                <TouchableOpacity    style={btnLogIn}   onPress={() => this.clickSend()}>
                    <Text style={txtButton}>Gửi</Text>
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
