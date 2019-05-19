import React, { Component } from 'react';
import {
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet, 
    Image,
    StatusBar, 
    ScrollView,
    Dimensions,
} from 'react-native';
import global from './global';
import profileIcon from '../Image/profile.png';
import saveToken from '../api/saveToken';
import settingMenu from '../Components/settingMenu';
const {height , width} = Dimensions.get('window'); 

export default class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { user: null };
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({ user });
    }

    onSignOut() {
        this.setState({ user: null });
        saveToken('');
    }

    gotoAuthentication() {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    } 

    gotoChangeInfo() {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO',user: this.state.user }); //user: this.state.user
    }


    render() {
        const { 
            container, profile, btnStyle, btnText, 
            btnSignInStyle, btnTextSignIn, loginContainer,
            username
        } = styles;

        const { user } = this.state;

        const logoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={btnStyle} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
        //     <View style={styles.wrapper}>
        //     <TouchableOpacity 
        //       style={styles.touchable}
        //     >
        //       <Image
        //           source={require('../Image/password.png')}
        //         />
        //       <Text style={styles.plus}>  Đổi mật khẩu</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity 
        //       style={styles.touchable}
        //     >
        //       <Image
        //         source={require('../Image/setting.png')}
        //       />
        //       <Text style={styles.plus}>  Cài đặt thông báo</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity 
        //       style={styles.touchable}
        //     >
        //       <Image
        //         source={require('../Image/introduce.png')}
        //       />
        //       <Text style={styles.plus}>  Giới thiệu ứng dụng</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity 
        //       style={styles.touchable}
        //     >
        //       <Image
        //         source={require('../Image/star.png')}
        //       />
        //       <Text style={styles.plus}>  Xếp hạng ứng dụng</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity 
        //       style={styles.touchable}
        //     >
        //       <Image
        //         source={require('../Image/share.png')}
        //       />
        //       <Text style={styles.plus}>  Chia sẻ  ứng dụng</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity 
        //       style={styles.touchable}
        //     >
        //       <Image
        //         source={require('../Image/logout.png')}
        //       />
        //       <Text style={styles.plus}>  Đăng xuất</Text>
        //     </TouchableOpacity>

        //     <TouchableOpacity 
        //       style={styles.touchable}
        //     >
        //       <Image
        //         source={require('../Image/logout.png')}
        //       />
        //       <Text style={styles.plus}>  Đăng xuất</Text>
        //     </TouchableOpacity>

        //   </View>

            <View style={loginContainer}>
                <Text style={username}>{user ? user.name : ''}</Text>
                <View>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Image  source={require('../Image/user.png')} style={styles.imageStyle}/>
                        <Text style={btnTextSignIn}>Đổi thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Image  source={require('../Image/key.png')} style={styles.imageStyle}/>
                        <Text style={btnTextSignIn}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Image source={require('../Image/settingorange.png')} style={styles.imageStyle}/>
                        <Text style={btnTextSignIn}>Cài đặt thông báo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Image source={require('../Image/infomation.png')}  style={styles.imageStyle}/>
                        <Text style={btnTextSignIn}>Giới thiệu ứng dụng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                        <Image source={require('../Image/google.png')} style={styles.imageStyle}/>
                        <Text style={btnTextSignIn}>Xếp hạng ứng dụng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.gotoChangeInfo.bind(this)}>
                      <Image  source={require('../Image/bluetooth.png')}    style={styles.imageStyle}     />
                       <Text style={btnTextSignIn}>Chia sẻ ứng dụng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle} onPress={this.onSignOut.bind(this)}>
                       <Image    source={require('../Image/logout.png')}         style={styles.imageStyle}  />
                        <Text style={btnTextSignIn}>Đăng xuất            </Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                <View style={styles.ctnAvatart}>                
                    <Image source={profileIcon} style={profile} />
                </View>
                <ScrollView style={styles.ctnSetting}>
                    { mainJSX }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        borderRightWidth: 3,
        borderColor: '#fff',
        // alignItems: 'center'
    },
    ctnAvatart:{
        alignItems: 'center',
        backgroundColor: '#34B089',

    },
    ctnSetting:{

    },
    imageStyle:{
        width: width/13,
        height: width/13,
        marginRight:10,
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        // justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 70
    },
    btnText: {
        color: '#34B089',
        fontFamily: 'Avenir', 
        fontSize: 20
    },
    btnSignInStyle: {
        margin:5,
        backgroundColor:"#EEEEEE",
        padding:10,
        flexDirection:"row",
        height: 50,
        // backgroundColor: '#fff',
        // borderRadius: 20,
        // width: 200,
        marginBottom: 10,
        // justifyContent: 'center',
        paddingLeft: 10,
        alignItems: 'center',
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15
    },
    loginContainer: {
        flex: 1, 
        justifyContent: 'space-between', 
        // alignItems: 'center'
    },
    username: {
        color: '#fff', 
        fontFamily: 'Avenir', 
        fontSize: 15
    }
});


