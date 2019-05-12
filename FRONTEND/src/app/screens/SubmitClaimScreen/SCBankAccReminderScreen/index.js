// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI
import {
  View, Text, Image, ScrollView, Button,
} from '../../../../components';
import styles from './styles';
import TopBarActions from '../../../components/TopBarActions';
// Import internal logics
import i18n from '../../../../i18n';
import navigator from '../../../../navigator';
import theme from '../../../../theme';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#8bc35c',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#8bc35c',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#aaaaaa',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#ffffff',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: '#353535',
  stepIndicatorLabelFinishedColor: '#353535',
  stepIndicatorLabelUnFinishedColor: '#999999',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#353535',
};

class SCBankAccReminderScreen extends Component {
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
      currentPosition: 3,
      accountNumber: 'xxx-xxxxx-7890',
      bankName: 'Bank of Singapore',
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }


  _openTapNext() {
  }

  _openTapLearnMore(nameNavigate) {
    navigator.navigate(nameNavigate);
  }

  render() {
    const {
      currentPosition,
      accountNumber,
      bankName,
    } = this.state;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnBankAccReminderHeader}>
            <Image style={styles.iconBuyBankAccReminder} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtBankAccReminderText1}>{i18n.t('CSBAR.Title')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepBankAccReminder}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>
              <Text style={styles.textDescription}>{i18n.t('CSBAR.DescriptionTitle')}</Text>
              <View style={styles.ctnItemForm}>
                <Text style={styles.textDescription}>{i18n.t('CSBAR.AccountNumber')}</Text>
                <Text style={styles.textDescription}>{accountNumber}</Text>
              </View>
              <View style={styles.ctnItemForm}>
                <Text style={styles.textDescription}>{i18n.t('CSBAR.BankName')}</Text>
                <Text style={styles.textDescription}>{bankName}</Text>
              </View>
              <View style={styles.ctnItemForm}>
                <Button style={styles.buttonSubmit} onPress={this._openTapNext} text={i18n.t('CM.Submit')} />
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SCBankAccReminderScreen;
