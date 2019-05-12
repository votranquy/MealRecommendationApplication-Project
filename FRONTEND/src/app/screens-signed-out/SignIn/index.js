// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, TextInput, Button, TextButton,
} from '../../../components';
import { MainFrame } from '../../components';
import theme from '../../../theme';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';

class SignIn extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { style } = this.props;
    const { email, password } = this.state;
    return (
      <MainFrame
        style={[styles.container, style]}
        titleImage={theme.Image.Ic.Lock}
        title={i18n.t('SOSI.Title')}
        message={i18n.t('SOSI.WelcomeBack')}
      >
        <View style={[styles.container]}>
          <View style={[styles.containerForm]}>
            <Text style={styles.txtEmail}>{i18n.t('SOSI.LblEmail')}</Text>
            <TextInput
              style={styles.txtInputEmail}
              onChangeText={email => this.setState({ email })}
              value={email}
            />
            <Text style={styles.txtPassWord}>{i18n.t('SOSI.LblPassword')}</Text>
            <TextInput
              secureTextEntry
              style={styles.txtInputPassWord}
              onChangeText={password => this.setState({ password })}
              value={password}
            />
            <Button
              style={styles.btnLogin}
              onPress=""
              text={i18n.t('SOSI.BtnLogin')}
            />
            <TextButton
              style={styles.btnForgotPassword}
              onPress=""
              text={i18n.t('SOSI.ForgotPassWord')}
            />
          </View>
        </View>
      </MainFrame>
    );
  }
}

export default SignIn;
