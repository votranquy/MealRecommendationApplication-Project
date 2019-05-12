import React, { Component } from 'react';
import {
  View, Text, Button, TextButton, ImageBackground,
} from '../../../components';
import TopBarActions from '../../components/TopBarActions';
import styles from './styles';
import navigator from '../../../navigator';
import i18n from '../../../i18n';
import theme from '../../../theme';


class WelcomeSignedOutUser extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {

    };

    this._openSignInScreen = this._openSignInScreen.bind(this);
  }

  _openSignInScreen() {
    navigator.navigate('ForgotPass');
  }

  _openBuyPolicyScreen() {
    navigator.navigate('FlightDelayCancelScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={theme.Image.Bg.WelcomeSignOut} style={styles.imageBackground} />
        <TopBarActions style={styles.topBarActions} iconColor={theme.Color.Blue} />
        <View style={styles.txtContainer}>
          <Text style={styles.txtName}>{i18n.t('SOWSOU.NameApp')}</Text>
          <Text style={styles.txtSlogan}>{i18n.t('SOWSOU.Slogan')}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.txtWelcome}>{i18n.t('SOWSOU.Welcome')}</Text>
          <Button style={styles.btnStarted} onPress={this._openBuyPolicyScreen} text={i18n.t('SOWSOU.LetsGetStarted')} />
          <TextButton textStyle={styles.txtbtnSignIn} onPress={this._openSignInScreen} text={i18n.t('SOWSOU.SignIn')} />
        </View>
      </View>
    );
  }
}

export default WelcomeSignedOutUser;
