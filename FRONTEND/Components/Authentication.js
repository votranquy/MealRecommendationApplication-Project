import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet,ScrollView
} from 'react-native';
import theme from '../theme';
import icBack from '../Image/back_white.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = { isSignIn: true };
    }

    gotoSignIn() {
        this.setState({ isSignIn: true });
    }

    signIn() {
        this.setState({ isSignIn: true });
    }

    signUp() {
        this.setState({ isSignIn: false });
    }

    goBackToMain() {
        const { navigator } = this.props;
        navigator.pop();
    }
    render() {

        const{
            row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle, signUpStyle,
            activeStyle, inactiveStyle
        }=styles;

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? <SignIn goBackToMain={this.goBackToMain.bind(this)} /> : <SignUp gotoSignIn={this.gotoSignIn.bind(this)} />;
        return (
            <View style={container}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>{isSignIn ? "Đăng nhập " : "Đăng kí"}</Text>
                    <View/>
                    {/* <Image source={icLogo} style={iconStyle} /> */}
                </View>
                <ScrollView>
                        <View style={controlStyle}>
                            <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
                                <Text style={!isSignIn ? activeStyle : inactiveStyle}>Đăng nhập</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={signUpStyle} onPress={this.signUp.bind(this)}>
                                <Text style={isSignIn ? activeStyle : inactiveStyle}>Đăng kí</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.ctnInput}>
                            {mainJSX}
                        </View> 
                </ScrollView>      
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.Color.NiceRed,
        padding: 20,
        paddingBottom:0,
        justifyContent: 'space-between',
    },
    ctnmain:{
        justifyContent: "space-between",
    },
    row1: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingBottom:20,
    },
    titleStyle: { 
        color: '#FFF', 
        fontFamily: 'Avenir', 
        fontSize: theme.Size.FontMedium,
        fontWeight:"900",
    },
    iconStyle: {
         width: 30, 
         height: 30 
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        flex:8,
        paddingBottom:20,
    },
    ctnInput:{
        flex:2,
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    activeStyle: {
        color: '#3EBA77'
    },
    signInStyle: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
});

