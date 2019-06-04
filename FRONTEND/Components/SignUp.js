import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert ,Button} from 'react-native';
import register from "../api/register";
import theme from '../theme';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            password:'',
            repassword:'',
            emailValidate: true,
            passwordValidate: true,
            nameValidate: true,
            repasswordValidate: true,
        };
    }


    onSuccess() {
        Alert.alert(
            'Thành công',
            'Đăng kí thành công! Xin mời kiểm tra email để nhận mã xác thực',
            [
                { text: 'OK', onPress: this.props.gotoConfirmCode(this.state.email) }
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Lỗi',
            'Email đã được sử dụng. Vui lòng sử dụng email khác',
            [
                { text: 'OK', onPress: () => this.setState({email:""})}
            ],
            { cancelable: false }
        );
    }

    removeEmail() {
        this.setState({ email: '' });
    }

    registerUser() {
        this.props.openLoad();
        const { email, name, password } = this.state;
        register(email, name, password)
        .then((response) => response.json())
        .then((responseJson) => {
            this.props.closeLoad();
            if (responseJson.result === 'success') return this.onSuccess();
            else return this.onFail();
        })
        .catch(err =>{ console.log(err);  this.props.closeLoad();});
    }

    validate(text,type){
        alph=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(type == 'name'){
            if(text.length >= 3){
                this.setState({nameValidate: true,  name: text});
            }
            else{
                this.setState({nameValidate: false, name: text});
            }
        }

        if(type == 'email'){
            if(alph.test(text)){
                this.setState({emailValidate: true, email: text});
            }
            else{
                this.setState({emailValidate: false, email: text});
            }
        }

        if(type == 'password'){
            if(text.length>=6){
                console.log("Dung PASSWORD");
                this.setState({passwordValidate: true, password: text});
            }
            else{
                console.log("Sai Password");
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


    clickSignUp(){
        if(this.state.email == "" || this.state.password == "" ||  this.state.name == ""
        ||this.state.repassword=="" || !this.state.emailValidate || !this.state.passwordValidate
        || !this.state.nameValidate || !this.state.repasswordValidate){
            if(this.state.email == "") this.setState({emailValidate: false});
            if(this.state.password == "") this.setState({passwordValidate: false});
            if(this.state.name == "") this.setState({nameValidate: false});
            if(this.state.repassword == "") this.setState({repasswordValidate: false});
            Alert.alert(
                'Lỗi',
                'Bạn phải nhập đầy đủ và chính xác các thông tin!',
                [
                  {text: 'OK'},
                ],
                {cancelable: false},
            );
        }
        else{ this.registerUser();}
    }


    render() {
        const { inputStyle, bigButton, buttonText } = styles;



        return (
            <View style={styles.main}>
                <Text style={styles.label}>Tên</Text>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập tên" 
                    value={this.state.name}
                    onChangeText={(text)=>{this.validate(text,'name')}}
                />
                { !this.state.nameValidate &&( <Text style={styles.labelError}>Họ tên phải có độ dài tối thiểu 3 kí tự</Text>) }

                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập email" 
                    value={this.state.email}
                    onChangeText={(text)=>{this.validate(text,'email')}}
                />
                { !this.state.emailValidate &&( <Text style={styles.labelError}>Email không đúng định dạng</Text>) }

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


                <TouchableOpacity style={bigButton} onPress={() => this.clickSignUp()} >
                    <Text style={buttonText}>Đăng kí ngay</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingLeft: 10,
    },
    bigButton: {
        marginTop:20,
        height: 50,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: '400',
        fontSize: theme.Size.FontSmall,
    },
    main:{
        paddingBottom:20,
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
