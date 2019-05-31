import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import theme from '../theme';
import signIn    from '../api/signIn';
import global    from './global';
import saveToken from '../api/saveToken';

import {AuthService} from '../Components/services';

export default class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        // this._handleSuccess = this._handleSuccess.bind(this);
        // this._handleError = this._handleError.bind(this);
        // this._handleErrorCode = this._handleErrorCode.bind(this);
    }

    // _handleSuccess(res){
    //     console.log('_LOGIN', '_handleSuccess');
    //     console.log('_LOGIN',res);
    //     global.onSignIn(res.user);
    //     this.props.goBackToMain();
    //     saveToken(res.token);
    // }

    // _handleError(){
    //     console.log('_LOGIN', '_handleError');
    // }

    // _handleErrorCode(){
    //     console.log('_LOGIN', '_handleErrorCode');
    // }

    async onSignIn() {
        // const { email, password} = this.state;
        // AuthService.signIn(email, password,this. _handleSuccess, this._handleErrorCode, this._handleError);

        const { email, password } = this.state;
        // try{
            signIn(email, password)
            .then(responseJson=>{
                global.onSignIn(responseJson.user);
                saveToken(responseJson.token); 
                this.props.goBackToMain();
            })
            .catch(err => console.log(err));

    }

    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        const { email, password } = this.state;
        return (
            <View>
                <TextInput
                    style={inputStyle}
                    placeholder="Nhập email"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={inputStyle}
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                />
                <TouchableOpacity
                    style={bigButton}
                    onPress={() => this.onSignIn()}
                    >
                    <Text style={buttonText}>Đăng nhập ngay</Text>
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
