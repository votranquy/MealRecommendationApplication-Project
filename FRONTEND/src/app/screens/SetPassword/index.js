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


export default class SetPassword extends Component {
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
      txtBtn: i18n.t('SOSP.LogIn'),
      txtNoti: i18n.t('SOSP.ConfirmSetPass'),
    });
  }

  render() {
    const { password, passwordConfirm } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.ctnLoginHeader}>
          <Image style={styles.iconLock} source={theme.Image.Si.Lock} />
          <Text style={styles.txtSetPass}>{i18n.t('SOSP.SetPass')}</Text>
          <Text style={styles.txtEnter}>{i18n.t('SOSP.Enter')}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.txtNewPass}>{i18n.t('SOSP.NewPass')}</Text>
          <TextInput
            secureTextEntry
            style={styles.tiPass}
            onChangeText={password => this.setState({ password })}
            value={password}
          />
          <Text style={styles.txtPassConfirm}>{i18n.t('SOSP.ConfirmPass')}</Text>
          <TextInput
            secureTextEntry
            style={styles.tiPass}
            onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
            value={passwordConfirm}
          />
          <Button
            style={styles.btnLogin}
            onPress={this.openConfirmScreen}
            text={i18n.t('SOSP.Submit')}
          />
        </View>
      </View>
    );
  }
}
