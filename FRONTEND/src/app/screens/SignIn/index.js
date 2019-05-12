// Import external libs
import React, { Component } from 'react';
// Import UI
import { Alert } from 'react-native';
import {
  View, Text, TextInput, Button, Image, TextButton,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';


class SignIn extends Component {
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

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
    this.openForgetPasswordScreen = this.openForgetPasswordScreen.bind(this);
  }

  onPressLogin() {
    Alert.alert(
      'Login',
      'Success',
      [{ text: 'OK', onPress: () => navigator.navigate('Main') }],
    );
  }

  openForgetPasswordScreen() {
    navigator.navigate('ForgotPass');
  }

  render() {
    const { username, password } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.ctnLoginHeader}>
          <Image style={styles.icoLock} source={theme.Image.Si.Lock} />
          <Text style={styles.txtSILogIn}>{i18n.t('SOSI.LogIn')}</Text>
          <Text style={styles.txtSIWelBack}>{i18n.t('SOSI.WelBack')}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.txtSIEmail}>{i18n.t('CM.Email')}</Text>
          <TextInput
            style={styles.tiSIEmail}
            onChangeText={username => this.setState({ username })}
            value={username}
          />
          <Text style={styles.txtSIPass}>{i18n.t('SOSI.Pass')}</Text>
          <TextInput
            secureTextEntry
            style={styles.tiSIPass}
            onChangeText={password => this.setState({ password })}
            value={password}
          />
          <Button style={styles.btnSILogin} text={i18n.t('SOSI.LogIn')} />
          <TextButton
            textStyle={styles.btnForgotPass}
            text={i18n.t('SOSI.ForgotPass')}
            onPress={this.openForgetPasswordScreen}
          />
        </View>
      </View>
    );
  }
}

export default SignIn;
