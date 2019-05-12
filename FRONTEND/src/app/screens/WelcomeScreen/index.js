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

class WelcomeScreen extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {

    };

    this._openLoginScreen = this._openLoginScreen.bind(this);
  }

  _openLoginScreen() {
    navigator.navigate('Login');
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

          <Text style={styles.welcomeText}>{i18n.t('WCWelcome')}</Text>

          <Button style={styles.startedButton} onPress={this._openBuyPolicyScreen} text={i18n.t('WCStartedButton')} />

          <TextButton textStyle={styles.signInButtonText} onPress={this._openLoginScreen} text={i18n.t('WCLogin')} />
        </View>
      </View>
    );
  }
}

export default WelcomeScreen;
