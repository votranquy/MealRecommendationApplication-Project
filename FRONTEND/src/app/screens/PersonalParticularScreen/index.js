// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
// Import UI
import DatePicker from 'react-native-datepicker';
import {
  View, Text, TextInput, Button, TextButton, Image, TouchableOpacity, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

const labels = ['Start date', 'Personal', 'Contact', 'Confirmation', 'Payment'];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#fe7013',
};

class PersonalParticularScreen extends Component {
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
      textFirstName: '',
      textLastName: '',
      textIric: '',
      currentPosition: 1,
      date: '2016-05-15',
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _openTapNext() {
    navigator.navigate('CSSummarySrc');
  }

  _openTapLearnMore() {

  }

  _openDateTimePicker() {

  }

  render() {
    const { style } = this.props;
    const {
      currentPosition, textFirstName, textLastName, textIric,
    } = this.state;
    const data = [{
      value: 'Cambodian',
    }, {
      value: 'Indonesian',
    }, {
      value: 'Laotian ',
    }, {
      value: 'Malaysian ',
    }, {
      value: 'Burmese ',
    }, {
      value: 'Filipino ',
    }, {
      value: 'Singaporean ',
    }, {
      value: 'Thai ',
    }, {
      value: 'Vietnamese ',
    }, {
      value: 'Australian ',
    }, {
      value: 'Fijian ',
    }, {
      value: 'New Zealand ',
    }];

    return (
      // wrap content
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.ctnPolicyHeader}>
            <Image style={styles.iconBuyPolicy} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtPolicyText1}>{i18n.t('SOPPS.PPTxtBuyPolicy')}</Text>
            <Text style={styles.txtPolicyText2}>{i18n.t('SOPPS.PPIntroPersonal')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepPolicy}>
              <StepIndicator
                customStyles={customStyles}
                currentPosition={currentPosition}
                labels={labels}
              />
            </View>
            <View style={[styles.containerForm]}>
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOPPS.PPLblFirstName')}</Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={textFirstName => this.setState({ textFirstName })}
                  value={textFirstName}
                />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOPPS.PPLblLastName')}</Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={textLastName => this.setState({ textLastName })}
                  value={textLastName}
                />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOPPS.PPLblNationality')}</Text>
                <View style={styles.viewDropDownNationality}>
                  <Dropdown
                    containerStyle={styles.containerDD}
                    inputContainerStyle={styles.InputDD}
                    data={data}
                    value="Singaporean"
                  />
                </View>
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOPPS.PPLblNRIC')}</Text>
                <TextInput
                  style={styles.edtInput}
                  onChangeText={textIric => this.setState({ textIric })}
                  value={textIric}
                />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SOPPS.PPLblDateOfBirth')}</Text>
                <DatePicker
                  style={{ width: '100%' }}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  minDate="2016-05-01"
                  maxDate="2016-06-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon={false}
                  customStyles={{
                    dateInput: {
                      marginTop: 20,
                      borderWidth: 0.5,
                      borderTopLeftRadius: 4,
                      borderTopRightRadius: 4,
                      borderBottomLeftRadius: 4,
                      height: 49,
                      borderBottomRightRadius: 4,
                      flexDirection: 'row',
                      paddingHorizontal: 10,
                      justifyContent: 'flex-start',
                    },
                    // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date) => { this.setState({ date }); }}
                />
              </View>

              <Button style={styles.buttonNext} onPress={this._openTapNext} text="Next" />
              <TextButton textStyle={styles.learnMoreButton} onPress={this._openTapLearnMore} text="Not ready to Sign Up?Learn more." />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default PersonalParticularScreen;
