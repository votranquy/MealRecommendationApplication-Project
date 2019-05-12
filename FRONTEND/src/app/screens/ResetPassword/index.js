// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, TextInput, Button, Image,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';


export default class ResetPassword extends Component {
  static navigationOptions = {
    title: i18n.t('CM.MSIG'),
    headerBackground: (
      <Image
        style={styles.iconMSIG}
        source={theme.Image.Si.iconMSIG}
      />
    ),
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.state = {
      passwordConfirm: '',
      password: '',
    };
  }

  openConfirmScreen() {
    navigator.navigate('PopupConfirm', {
      txtBtn: i18n.t('SORP.LogIn'),
      txtNoti: i18n.t('SORP.Reset'),
    });
  }

  render() {
    const { style } = this.props;
    const { password, passwordConfirm } = this.state;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.ctnHeader}>
          <Image style={styles.icoLock} source={theme.Image.Si.Lock} />
          <Text style={styles.txtResetPass}>{i18n.t('SORP.ResetPass')}</Text>
          <Text style={styles.txtEnter}>{i18n.t('SORP.Enter')}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.txtNewPass}>{i18n.t('SORP.NewPass')}</Text>
          <TextInput
            secureTextEntry
            style={styles.tiPass}
            onChangeText={password => this.setState({ password })}
            value={password}
          />
          <Text style={styles.txtPassConfirm}>{i18n.t('SORP.ConfirmPass')}</Text>
          <TextInput
            secureTextEntry
            style={styles.tiPass}
            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
            value={passwordConfirm}
          />
          <Button
            style={styles.btnSILogin}
            onPress={this.openConfirmScreen}
            text={i18n.t('SORP.Submit')}
          />
        </View>
      </View>
    );
  }
}
