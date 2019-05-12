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

class TemplateComponent extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  render() {
    const { style } = this.props;
    const { email } = this.state;
    return (
      <MainFrame
        style={[styles.container, style]}
        titleImage={theme.Image.Ic.Lock}
        title={i18n.t('SOFP.Title')}
        message={i18n.t('SOFP.Message')}
      >
        <View style={[styles.container]}>
          <View style={[styles.containerForm]}>
            <Text style={styles.txtEmail}>{i18n.t('SOFP.LblEmail')}</Text>
            <TextInput
              style={styles.txtInputEmail}
              onChangeText={email => this.setState({ email })}
              value={email}
            />
            <Button
              style={styles.btnSubmit}
              onPress=""
              text={i18n.t('SOFP.Submit')}
            />
          </View>
        </View>
      </MainFrame>
    );
  }
}

export default TemplateComponent;
