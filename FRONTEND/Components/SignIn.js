import React, { Component } from 'react';
import { 
    View, 
    TextInput, 
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Alert,
} from 'react-native';
import theme from '../theme';
import signIn    from '../api/signIn';
import global    from './global';
import saveToken from '../api/saveToken';

export default class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            emailValidate: true,
            passwordValidate: true,
        };
    }



    removeEmail(){
        this.setState({
            email: '',
            password: '',
        })
    }
   
    onSignIn(){
        this.props.openLoad(); 
        const { email, password } = this.state;
        signIn(email, password)
        .then(responseJson=>{

            if(responseJson.result=="success"){
                this.props.closeLoad();
                global.onSignIn(responseJson.user);
                saveToken(responseJson.token); 
                this.props.goBackToMain();
            }
            if(responseJson.result=="fail"){
                Alert.alert(
                    'Lỗi',
                    'Thông tin đăng nhập không chính xác',
                    [
                        { text: 'OK', onPress: () =>{this.props.closeLoad();this.setState({ email: '', password: '' });}  }
                    ],
                    { cancelable: false }
                );
            }
            if(responseJson.result=="notactive"){
                Alert.alert(
                    'Thông báo',
                    'Bạn chưa xác thực tài khoản. Vui lòng nhập mã xác thực gửi đến email!',
                    [
                        { text: 'OK', onPress: () =>{  this.props.closeLoad(); this.props.gotoConfirmCode(this.state.email);} }
                    ],
                    { cancelable: false }
                );
            }
            this.props.closeLoad();
        })
        .catch(err => {console.log(err);  this.props.closeLoad();});
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
        if(type == 'password'){
            if(text.length>=6){
                // console.log("Dung PASSWORD");
                this.setState({passwordValidate: true, password: text});
            }
            else{
                // console.log("Sai Password");
                this.setState({passwordValidate: false, password: text});
            }
        }
    }

    clickSignIn(){
        if(this.state.email == "" || this.state.password == "" || !this.state.emailValidate || !this.state.passwordValidate){
            if(this.state.email == ""){ this.setState({emailValidate: false})};
            if(this.state.password == ""){ this.setState({passwordValidate: false})};
            Alert.alert(
                'Lỗi',
                'Bạn phải nhập đầy đủ và chính xác các thông tin!',
                [
                  {text: 'OK'},
                ],
                {cancelable: false},
            );
        }
        else{ this.onSignIn();}
    }

    render() {
        const { inputStyle, btnLogIn, txtButton } = styles;
        return (
            <View style={styles.main}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={inputStyle}
                    underlineColorAndroid="white"
                    placeholder="Nhập email"
                    onChangeText={(text)=>{this.validate(text,'email')}}
                />
                { !this.state.emailValidate &&( <Text style={styles.labelError}>Email không đúng định dạng</Text>) }
                <Text style={styles.label}>Mật khẩu</Text>
                <TextInput
                    style={inputStyle}
                    underlineColorAndroid="white"
                    placeholder="Nhập mật khẩu"
                    onChangeText={(text)=>this.validate(text,'password')}
                    secureTextEntry
                />
                 { !this.state.passwordValidate &&(<Text style={styles.labelError}>Password phải có độ dài tối thiểu là 6</Text>) }
                <TouchableOpacity    style={btnLogIn}   onPress={() => this.clickSignIn()}>
                    <Text style={txtButton}>Đăng nhập ngay</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ctnFofGot}
                    onPress={()=>this.props.gotoForgetPassword()}
                >
                            <Text style={styles.txtForGot}> Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
