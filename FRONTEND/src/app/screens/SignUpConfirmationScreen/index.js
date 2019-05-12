/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI
import {
  View, Text, TextInput, Button, TextButton, Image,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';

class SignUpConfirmationScreen extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { style } = this.props;
    return (
      // wrap content
      <View style={styles.container}>
        <View style={styles.ctnPolicyHeader}>
          <Image style={styles.iconBuyPolicy} source={theme.Image.kpmg.buyPolicy} />
          <Text style={styles.txtPolicyText1}>{i18n.t('HDTxtBuyPolicy')}</Text>
          <Text style={styles.txtPolicyText2}>{i18n.t('SUCTxtSuccess')}</Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.containerForm]}>
            <Text style={styles.txtPolicyText3}>{i18n.t('SUCTxtTksForPayment')}</Text>
            <Text style={styles.txtPolicyText4}>{i18n.t('SUCTxtAccCreated')}</Text>
            <Text style={styles.txtPolicyText5}>{i18n.t('SUCTxtReceiveEmail')}</Text>
            <Text style={styles.txtPolicyText5}>{i18n.t('SUCTxtSeeLooking')}</Text>

            <View style={styles.groupItemsForm}>
              <Button style={styles.buttonTripEstimator} onPress={this._openTapNext} text={i18n.t('SUCBtnTripPremium')} textStyle={styles.textBtnStyle} />
              <Button style={styles.buttonFAQ} onPress={this._openTapNext} text={i18n.t('SUCBtnFAQ')} textStyle={styles.textBtnStyle} />
              <Button style={styles.buttonNext} onPress={this._openTapNext} text={i18n.t('SUCBtnBackHome')} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SignUpConfirmationScreen;
