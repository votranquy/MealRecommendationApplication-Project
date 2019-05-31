import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import register from "../api/register";
import {AuthService} from '../Components/services';
import theme from '../theme';


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
        // this._handleSuccess = this._handleSuccess.bind(this);
        // this._handleError = this._handleError.bind(this);
        // this._handleErrorCode = this._handleErrorCode.bind(this);
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Lỗi',
            'Email đã được sử dụng',
            [
                { text: 'OK', onPress: () => this.removeEmail.bind(this) }
            ],
            { cancelable: false }
        );
    }

    removeEmail() {
        this.setState({ email: '' });
    }

    // _handleSuccess(res){
    //     console.log('_LOGIN', '_handleSuccess');
    //     console.log('_LOGIN',res);
    //     if(res.result);
    //     // global.onSignIn(res.user);
    //     // this.props.goBackToMain();
    //     // saveToken(res.token);
    // }
    // _handleError(){
    //     console.log('_LOGIN', '_handleError');
    // }
    // _handleErrorCode(){ 
    //     console.log('_LOGIN', '_handleErrorCode');
    // }


    registerUser() {
        const { email, name, password } = this.state;
        // AuthService.signUp(email, password,name,this. _handleSuccess, this._handleErrorCode, this._handleError);


        register(email, name, password)
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.result === 'THANH_CONG') return this.onSuccess();
          else return this.onFail();
        });
    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập tên" 
                    value={this.state.name}
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập email" 
                    value={this.state.email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập mật khẩu" 
                    value={this.state.password}
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                />
                <TextInput 
                    style={inputStyle} 
                    placeholder="Nhập lại mật khẩu" 
                    value={this.state.rePassword}
                    secureTextEntry
                    onChangeText={text => this.setState({ rePassword: text })}
                />
                <TouchableOpacity style={bigButton} 
                onPress={this.registerUser.bind(this)}
                >
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
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
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
    }
});
