// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
// Import UI
import {
  View, Text, TextInput, Button, TextButton, Image, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

const labels = i18n.t('CM.LBLIndicatorPolicy', { returnObjects: true });
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
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
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#353535',
};

class ContactDetailScreen extends Component {
  static propsType = {

  }

  static defaultProps = {
    countryCode: [{
      value: '+65',
    }, {
      value: '+84',
    }, {
      value: '+69',
    }],
  }

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };


  constructor(props) {
    super(props);

    this.state = {
      mobileNumber: '',
      emailAddress: '',
      postalCode: '',
      blockNo: '',
      streetName: '',
      buildingName: '',
      unitNo: '',
      currentPositionContact: 2,
    };
  }

  onPageChange(position) {
    this.setState({ currentPositionContact: position });
  }

  _openTapNext() {
    navigator.navigate('Contact');
  }

  _openTapLearnMore() {

  }

  render() {
    const {
      mobileNumber,
      emailAddress,
      postalCode,
      blockNo,
      streetName,
      buildingName,
      unitNo,
      currentPositionContact = 2,
    } = this.state;

    const { countryCode } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnContactHeader}>
            <Image style={styles.iconBuyContact} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtContactText1}>{i18n.t('HDTxtBuyPolicy')}</Text>
            <Text style={styles.txtContactText2}>{i18n.t('CD.HDTxtQuestion')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepContact}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPositionContact}
                labels={labels}
              />
            </View>
            <View style={[styles.containerForm]}>

              {/* Input for  Mobile number */}
              <View style={[styles.groupItemsForm]}>
                <Text style={[
                  styles.txtLabel,
                ]}
                >
                  {i18n.t('CD.MobileNumber')}
                </Text>
                <View style={[
                  styles.groupInput,
                ]}
                >

                  {/* Dropdown country code for  Mobile number */}
                  <View style={[
                    styles.edtGroupDropdown,
                  ]}
                  >
                    <Dropdown
                      style={styles.edtDropdown}
                      dropdownPosition={-4}
                      inputContainerStyle={{ borderBottomColor: 'transparent' }}
                      data={countryCode}
                      containerStyle={styles.editContainerDropdown}
                    />
                  </View>

                  {/* Numeric input for  Mobile number */}
                  <TextInput
                    style={[
                      styles.edtGroupInput,
                    ]}
                    keyboardType="numeric"
                    onChangeText={mobileNumber => this.setState({ mobileNumber })}
                    value={mobileNumber}
                  />
                </View>
              </View>

              {/* Input for Email address */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('CD.EmailAddress')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={emailAddress => this.setState({ emailAddress })}
                  value={emailAddress}
                />
              </View>

              {/* Input for postal code */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('CD.PostalCode')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={postalCode => this.setState({ postalCode })}
                  value={postalCode}
                />
              </View>

              {/* Input for block no */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('CD.BlockNo')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={blockNo => this.setState({ blockNo })}
                  value={blockNo}
                />
              </View>

              {/* Input for street name */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('CD.StreetName')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={streetName => this.setState({ streetName })}
                  value={streetName}
                />
              </View>

              {/* Input for building name */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('CD.BuildingName')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={buildingName => this.setState({ buildingName })}
                  value={buildingName}
                />
              </View>

              {/* Input for unit no */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('CD.UnitNo')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={unitNo => this.setState({ unitNo })}
                  value={unitNo}
                />
              </View>

              {/* Next button to navigate Contact details screen */}
              <Button style={styles.buttonNext} onPress={this._openTapNext} text="Next" />

              {/* Next button to navigate learn more screen */}
              <TextButton textStyle={styles.learnMoreButton} onPress={this._openTapLearnMore} text="Not ready to Sign Up?Learn more." />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ContactDetailScreen;
