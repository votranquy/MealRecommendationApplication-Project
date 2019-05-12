// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, TextInput, Button, Image, TextButton,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';


export default class ForgotPass extends Component {
  static navigationOptions = {
    title: i18n.t('CM.MSIG'),
    headerBackground: (
      <Image
        style={styles.icoMSIG}
        source={theme.Image.Si.iconMSIG}
      />
    ),
    headerRight: <TopBarActions />,
  };

  openConfirmScreen() {
    navigator.navigate('PopupConfirm', {
      txtBtn: i18n.t('SOFP.BackHome'),
      txtNoti: i18n.t('SOFP.Confirm'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ctnLoginHeader}>
          <Image style={styles.icoLock} source={theme.Image.Si.Lock} />
          <Text style={styles.txtLogIn}>{i18n.t('SOFP.Question')}</Text>
          <Text style={styles.txtEnterDetail}>{i18n.t('SOFP.Enter')}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.txtEmail}>{i18n.t('CM.Email')}</Text>
          <TextInput style={styles.tiEmail} />
          <Button
            onPress={this.openConfirmScreen}
            style={styles.btnLogin}
            text={i18n.t('SOFP.Submit')}
          />
        </View>
      </View>
    );
  }
}
