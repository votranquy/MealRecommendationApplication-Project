// Import external libs
import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown';
// Import UI
import StepIndicator from 'react-native-step-indicator';
import DatePicker from 'react-native-datepicker';
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';
import data from './data';

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 4,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: theme.Color.Green,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: theme.Color.Green,
  stepStrokeUnFinishedColor: theme.Color.MediumGray,
  separatorFinishedColor: theme.Color.Green,
  separatorUnFinishedColor: theme.Color.MediumGray,
  stepIndicatorFinishedColor: theme.Color.Green,
  stepIndicatorUnFinishedColor: theme.Color.White,
  stepIndicatorCurrentColor: theme.Color.White,
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: theme.Color.Green,
  stepIndicatorLabelFinishedColor: theme.Color.White,
  stepIndicatorLabelUnFinishedColor: theme.Color.MediumGray,
  labelColor: theme.Color.MediumGray,
  labelSize: 24,
  currentStepLabelColor: theme.Color.Green,
};

class FlightDelayCancelScreen extends Component {
  static propsType = {};

  static defaultProps = {};

  static navigationOptions = {
    title: i18n.t('SITxtTitle'),
    headerTitleStyle: styles.headerTitleStyle,
    headerBackground: (
      <Image style={styles.iconMSIG} source={theme.Image.Si.iconMSIG} />
    ),
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);
    this.state = {
      defaultValue1: 'DEC TRIP 1',
      defaultValue2: 'SAN FRANCISCO, USA 1',
      currentPosition: 0,
      dateDefault: '05/01/2016',
    };
  }

  render() {
    const {
      defaultValue1, defaultValue2, currentPosition, dateDefault,
    } = this.state;

    return (
      <View>
        <ScrollView>
          <View style={styles.ctnMyClaimHeader}>
            <Image
              style={styles.iconBuyMyClaim}
              source={theme.Image.HeaderImage.SubmitClaim}
            />
            <Text style={styles.txtMyClaimText1}>{i18n.t('SCF.SubmitClaim')}</Text>
          </View>
          <View style={styles.stepIndicatorMain}>
            <StepIndicator
              customStyles={customStyles}
              stepCount={4}
              currentPosition={currentPosition}
            />
          </View>

          <View style={styles.contentContainer}>
            <Text style={styles.titleScreen}>{i18n.t('SCFDC.FlightDelayCancellation')}</Text>
            <Text style={styles.desText}>
              {i18n.t('SCFDC.FlightDelayCancelScreenDes')}
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <Text style={styles.buttonQuestion}>{i18n.t('SCF.QuestionClaim')}</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.titleSelect}>{i18n.t('SCF.SelectTrip')}</Text>
            <View style={styles.selectBorder}>
              <Dropdown
                dropdownOffset={{ top: 15, left: 0 }}
                value={defaultValue1}
                animationDuration={100}
                itemTextStyle={{ paddingLeft: 20 }}
                containerStyle={styles.containerStyleDropdown}
                inputContainerStyle={styles.inputContainerStyle}
                data={data.data1}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.titleSelect}>{i18n.t('SCF.PlaceOfIncident')}</Text>
            <View style={styles.selectBorder}>
              <Dropdown
                dropdownOffset={{ top: 15, left: 0 }}
                value={defaultValue2}
                animationDuration={100}
                itemTextStyle={{ paddingLeft: 20 }}
                containerStyle={styles.containerStyleDropdown}
                inputContainerStyle={styles.inputContainerStyle}
                data={data.data2}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.titleSelect}>{i18n.t('SCF.DateOfIncident')}</Text>
            <DatePicker
              style={{ width: '100%', paddingTop: 8 }}
              date={dateDefault}
              mode="date"
              placeholder="select date"
              format="DD/MM/YYYY"
              minDate="05/01/2019"
              maxDate="06/02/2026"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: styles.dateIcon,
                dateInput: styles.dateInput,
                dateText: styles.dateText,
              }}
              onDateChange={(date) => { this.setState({ dateDefault: !dateDefault }); }}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.titleSelect}>{i18n.t('SCF.FlightNumber')}</Text>
            <TextInput style={styles.textInput} placeholder={i18n.t('SCF.FlightNo')} />
          </View>

          <View style={[styles.inputContainer, styles.imageUploadContainer]}>
            <View style={styles.inputImageUploadContainer}>
              <Image style={styles.inputImageUpload} source={theme.Image.Si.iconImagePlus} />
            </View>
            <Text style={styles.titleImageUpload}>{i18n.t('SCF.ImageOfBoardingPass')}</Text>
          </View>

          <View style={styles.btnContainer}>
            <Button textStyle={{ color: theme.Color.White }} style={styles.buttonNextStep} text={i18n.t('CM.Next')} />
          </View>
        </ScrollView>
      </View>

    );
  }
}

export default FlightDelayCancelScreen;
