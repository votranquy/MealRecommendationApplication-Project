// Import external libs
import React, { Component } from 'react';
// Import UI
import StepIndicator from 'react-native-step-indicator';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TextButton,
  ScrollView,
  CheckBox,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
import theme from '../../../theme';
import i18n from '../../../i18n';
// Import internal logics

const labels = ['Start date', 'Personal', 'Contact', 'Confirmation', 'Payment'];

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: theme.Color.Green,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: theme.Color.Green,
  stepStrokeUnFinishedColor: theme.Color.Green,
  separatorFinishedColor: theme.Color.LightGray,
  separatorUnFinishedColor: theme.Color.Gray,
  stepIndicatorFinishedColor: theme.Color.White,
  stepIndicatorUnFinishedColor: theme.Color.White,
  stepIndicatorCurrentColor: theme.Color.White,
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: theme.Color.White,
  stepIndicatorLabelFinishedColor: theme.Color.White,
  stepIndicatorLabelUnFinishedColor: theme.Color.White,
  labelColor: theme.Color.DarkGray,
  labelSize: 11,
  currentStepLabelColor: theme.Color.DarkestGray,
};

class PaymentDetailsScreen extends Component {
  static propsType = {};

  static defaultProps = {};

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 4,
      checked: false,
    };
  }

  render() {
    const { currentPosition, checked } = this.state;
    return (
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.ctnPolicyHeader}>
            <Image style={styles.iconBuyPolicy} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtPolicyText1}>{i18n.t('SOPD.BuyPolicy')}</Text>
            <Text style={styles.txtPolicyText2}>{i18n.t('SOPD.BuyPolicyDes')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepPolicy}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
              />
            </View>
            <View style={styles.containerForm}>
              <View style={styles.titleContainer}>
                <Text style={styles.titleDetails}>{i18n.t('SOPD.PremiumDetails')}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text style={styles.titlePrice}>{i18n.t('SOPD.AnnualBasePremiumDue')}</Text>
                <Text style={styles.valuePrice}>S$30</Text>
              </View>

              <View style={styles.noteContainer}>
                <Text style={styles.noteContent}>{i18n.t('SOPD.DescriptionInfo')}</Text>
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.titleDetails}>{i18n.t('SOPD.PremiumDetails')}</Text>
              </View>

              <View style={styles.creditNumberContainer}>
                <Text style={styles.creditNumberTitle}>{i18n.t('SOPD.CreditOrDebit')}</Text>
                <TextInput style={styles.creditNumberInput} />
              </View>

              <View style={styles.creditNumberContainer}>
                <Text style={styles.creditNumberTitle}>{i18n.t('SOPD.NameOnCard')}</Text>
                <TextInput style={styles.creditNumberInput} />
              </View>

              <View style={styles.creditNumberContainer}>
                <Text style={styles.creditNumberTitle}>{i18n.t('SOPD.CardExpiryDate')}</Text>
                <View style={styles.expiryDateContainer}>
                  <TextInput
                    style={styles.expiryMContainer}
                    placeholder="MM"
                    keyboardType="numeric"
                    maxLength={2}
                  />
                  <TextInput
                    style={styles.expiryYearContainer}
                    placeholder="YYYY"
                    keyboardType="numeric"
                    maxLength={4}
                  />
                </View>
              </View>

              <View style={styles.creditNumberContainer}>
                <Text style={styles.creditNumberTitle}>CVV</Text>
                <TextInput style={styles.creditNumberInput} keyboardType="numeric" />
              </View>

              <View style={styles.confirmItem}>
                <CheckBox
                  containerStyle={styles.confirmCheckboxContainer}
                  style={styles.confirmCheckbox}
                  checked={checked}
                  value={checked}
                  checkedColor={theme.Color.Green}
                  onPress={() => this.setState(pre => ({ checked: !pre.checked }))}
                />
                <Text style={styles.confirmTitle}>{i18n.t('SOPD.CheckBoxDescription')}</Text>
              </View>

              <View style={styles.buttonNextContainer}>
                <Button style={styles.buttonNext} onPress={this._openTapNext} text={i18n.t('SOPD.ButtonTitle')} />
                <TextButton
                  textStyle={styles.learnMoreButton}
                  onPress={this._openTapLearnMore}
                  text={i18n.t('SOPD.TextButton')}
                />
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default PaymentDetailsScreen;
