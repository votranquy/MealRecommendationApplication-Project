// Import external libs
import React, { Component } from 'react';
// Import UI
import { Alert } from 'react-native';
import {
  View, Text, TextInput, Button,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';


class LoginScreen extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  static navigationOptions = {
    title: i18n.t('LGTitle'),
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  onPressLogin() {
    Alert.alert(
      'Login',
      'Success',
      [{ text: 'OK', onPress: () => navigator.navigate('Main') }],
    );
  }

  render() {
    const { style } = this.props;
    const { username, password } = this.state;

    return (
      <View style={[styles.container, style]}>

        <View style={{ marginTop: 200, backgroundColor: 'yellow' }}>
          <Text style={{ backgroundColor: 'blue', textAlign: 'center' }}>Login Form</Text>
          <TextInput
            style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
            onChangeText={username => this.setState({ username })}
            placeholder="Username"
            value={username}
          />

          <TextInput
            style={{ height: 40, borderColor: 'red', borderWidth: 1 }}
            onChangeText={password => this.setState({ password })}
            placeholder="Password"
            value={password}
          />

          <Button
            style={{
              alignSelf: 'center', height: 40, width: 100, backgroundColor: 'red', color: 'blue',
            }}
            onPress={this.onPressLogin}
            title="login"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;
