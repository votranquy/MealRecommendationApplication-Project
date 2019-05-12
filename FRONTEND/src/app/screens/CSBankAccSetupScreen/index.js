// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI
import { Dropdown } from 'react-native-material-dropdown';
import {
  View, Text, TextInput, Button, Image, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';

const labels = [];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#8bc35c',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#8bc35c',
  stepStrokeUnFinishedColor: theme.Color.Gray,
  separatorFinishedColor: '#8bc35c',
  separatorUnFinishedColor: theme.Color.Gray,
  stepIndicatorFinishedColor: theme.Color.White,
  stepIndicatorUnFinishedColor: theme.Color.White,
  stepIndicatorCurrentColor: theme.Color.White,
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: theme.Color.Black,
  stepIndicatorLabelFinishedColor: theme.Color.Black,
  stepIndicatorLabelUnFinishedColor: theme.Color.MediumGray,
  labelColor: theme.Color.MediumGray,
  labelSize: 11,
  currentStepLabelColor: theme.Color.DarkestGray,
};


class CSBankAccSetupScreen extends Component {
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
      numberBank: '',
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _openTapSubmit() {
  }

  render() {
    const {
      currentPosition,
      numberBank,
    } = this.state;

    const data = [{
      value: 'Bank Name 1',
    }, {
      value: 'Bank Name 2',
    }, {
      value: 'Bank Name 3',
    }, {
      value: 'Bank Name 4',
    }, {
      value: 'Bank Name 5',
    }];

    return (
      // wrap content
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.ctnSubmitClaimHeader}>
            <Image style={styles.iconBuySubmitClaim} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtSubmitClaimText}>{i18n.t('CSBAS.CPTxtClaimsPayouts')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepSubmitClaim}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabelContent}>{i18n.t('CSBAS.LBLProvideYourBank')}</Text>
              </View>
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('CSBAS.LBLAccNumber')} </Text>
                <TextInput
                  style={styles.edtInput}
                  keyboardType="numeric"
                  onChangeText={numberBank => this.setState({ numberBank })}
                  value={numberBank}
                />
              </View>
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('CSBAS.LBLBankName')} </Text>
                <View style={styles.viewDropDownBank}>
                  <Dropdown
                    containerStyle={styles.containerDD}
                    inputContainerStyle={styles.InputDD}
                    data={data}
                    value="Singaporean"
                  />
                </View>
              </View>
              <Button style={styles.buttonConfirm} onPress={this._openTapSubmit} text={i18n.t('CSBAS.BtnSubmit')} />
              <View style={styles.groupItemsForm} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default CSBankAccSetupScreen;
