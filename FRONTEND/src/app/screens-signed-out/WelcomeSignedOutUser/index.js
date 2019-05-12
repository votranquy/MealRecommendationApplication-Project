// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Button, TextButton,
} from '../../../components';
import TopBarActions from '../../components/TopBarActions';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

class WelcomeSignedOutUser extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  static navigationOptions = {
    header: null,
    drawerLabel: () => null,
  };

  constructor(props) {
    super(props);

    this.state = {

    };

    this._openLoginScreen = this._openLoginScreen.bind(this);
  }

  _openLoginScreen() {
    navigator.navigate('SignIn');
  }

  _openBuyPolicyScreen() {
    navigator.navigate('Policy');
  }

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
        <TopBarActions style={styles.topBarActions} iconColor={theme.Color.Blue} />

        <View style={styles.contentContainer}>

          <Text style={styles.welcomeText}>{i18n.t('SOWSOU.Welcome')}</Text>

          <Button style={styles.startedButton} onPress={this._openBuyPolicyScreen} text={i18n.t('SOWSOU.LetsGetStarted')} />

          <TextButton textStyle={styles.signInButtonText} onPress={this._openLoginScreen} text={i18n.t('SOWSOU.SignIn')} />
        </View>
      </View>
    );
  }
}

export default WelcomeSignedOutUser;
