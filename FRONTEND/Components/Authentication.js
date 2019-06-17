import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, StyleSheet,ScrollView, Button, ActivityIndicator, 
} from 'react-native';
import theme from '../theme';
import icBack from '../Image/back_white.png';
import SignIn from './SignIn';
import SignUp from './SignUp';
// import LottieView from 'lottie-react-native';
import Modal from "react-native-modalbox";

export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isSignIn: true,
        };
    }


    toggleModal() {
        this.refs.modal2.open();
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

    gotoConfirmCode(email) {
        const { navigator } = this.props;
        navigator.push({ name: 'CONFIRMATION_CODE',email });
    } 

    openLoading(){
        this.refs.modal2.open();
    }
    closeLoading(){
        this.refs.modal2.close();
    }

    render() {
        const{
            row1, iconStyle, titleStyle,
            container, controlStyle,
            signInStyle, signUpStyle,
            activeStyle, inactiveStyle
        }=styles;

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
                    {/* <ActivityIndicator size="large" size={50} color="#3C00A7" />
                    <ActivityIndicator size="large" size={50} color="#00BE00" />
                    <ActivityIndicator size="large" size={50} color="#FDCE00" /> */}
                </View>
                {/* <View style={styles.ctnLoadingRow}>
                    <ActivityIndicator size="large" size={50} color="#FF0000" />
                    <ActivityIndicator size="large" size={50} color="#3C00A7" />
                    <ActivityIndicator size="large" size={50} color="#00BE00" />
                    <ActivityIndicator size="large" size={50} color="#FDCE00" />
                </View> */}
                {/* <View style={styles.ctnLoadingRow}>
                    <ActivityIndicator size="large" size={50} color="#FF0000" />
                    <ActivityIndicator size="large" size={50} color="#3C00A7" />
                    <ActivityIndicator size="large" size={50} color="#00BE00" />
                    <ActivityIndicator size="large" size={50} color="#FDCE00" />
                </View> */}

            </View>
          </Modal>
          );

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? 
        <SignIn goBackToMain={this.goBackToMain.bind(this)}  gotoConfirmCode={this.gotoConfirmCode.bind(this)} 
        openLoad={this.openLoading.bind(this)} closeLoad={this.closeLoading.bind(this)}
        /> : 
        <SignUp gotoSignIn={this.gotoSignIn.bind(this)}         gotoConfirmCode={this.gotoConfirmCode.bind(this)}    
         openLoad={this.openLoading.bind(this)} closeLoad={this.closeLoading.bind(this)}
         />;
        return (
            <View style={container}>

                <View style={row1}>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={theme.Image.iCon.WhiteBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>{isSignIn ? "Đăng nhập " : "Đăng kí"}</Text>
                    <Text></Text>
                </View>

                {LoadJSX}

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
    ctnLoading: {
        flex: 1,
        justifyContent: 'center'
      },
      ctnLoadingRow:{
        flexDirection:"row",
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 10
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
        fontSize: theme.Size.FontBig,
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
        color: '#D7D7D7',
        fontSize: theme.Size.FontMedium
    },
    activeStyle: {
        color: '#3EBA77',
        fontSize: theme.Size.FontMedium,
    },
    signInStyle: {
        backgroundColor:  theme.Color.White,
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginRight: 1
    },
    signUpStyle: {
        backgroundColor:  theme.Color.White,
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1,
        marginLeft: 1,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20
    },
});

