// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, TextInput, Button,
} from '../../../components';
import { MainFrame } from '../../components';
import theme from '../../../theme';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';

class ResetPassword extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {
      newPassword: '',
      confirmPassword: '',
    };
  }

  render() {
    const { style } = this.props;
    const { newPassword, confirmPassword } = this.state;
    return (
      <MainFrame
        style={[styles.container, style]}
        titleImage={theme.Image.Ic.Lock}
        title={i18n.t('SORP.Title')}
        message={i18n.t('SORP.Message')}
      >
        <View style={[styles.container]}>
          <View style={[styles.containerForm]}>
            <Text style={styles.txtNewPass}>{i18n.t('SORP.LblNewPassword')}</Text>
            <TextInput
              secureTextEntry
              style={styles.txtInputNewPass}
              onChangeText={newPassword => this.setState({ newPassword })}
              value={newPassword}
            />
            <Text style={styles.txtConfirmPass}>{i18n.t('SORP.LblConfirmPassword')}</Text>
            <TextInput
              secureTextEntry
              style={styles.txtInputConfirmPass}
              onChangeText={confirmPassword => this.setState({ confirmPassword })}
              value={confirmPassword}
            />
            <Button
              style={styles.btnSubmit}
              onPress=""
              text={i18n.t('SORP.BtnSubmit')}
            />
          </View>
        </View>
      </MainFrame>
    );
  }
}

export default ResetPassword;
