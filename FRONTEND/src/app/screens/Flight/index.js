// Import external libs
import React, { Component } from 'react';
// Import UI
import StepIndicator from 'react-native-step-indicator';
import {
  View,
  Text,
  Button,
  Image,
  Alert,
  ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

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
  stepIndicatorFinishedColor: theme.Color.Black,
  stepIndicatorUnFinishedColor: theme.Color.White,
  stepIndicatorCurrentColor: theme.Color.White,
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: theme.Color.Black,
  stepIndicatorLabelFinishedColor: theme.Color.White,
  stepIndicatorLabelUnFinishedColor: theme.Color.MediumGray,
  labelColor: theme.Color.MediumGray,
  labelSize: 20,
  currentStepLabelColor: theme.Color.Black,
};

class LightScreen extends Component {
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

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      reason: 0,
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _changeEvent() {
    Alert.alert(
      'Change Event',
      'change status',
      [{ text: 'OK' }],
    );
  }

  _changeScreen(reason) {
    console.log(`FlightDelayCancelScreen ${reason}`);
    if (reason === 1) {
      navigator.navigate('FlightDelayCancelScreen');
    } else if (reason === 2) {
      navigator.navigate('FlightDiversionOverbookingScreen');
    } else if (reason === 3) {
      navigator.navigate('MissedConnectingFlightScreen');
    }
  }

  render() {
    const { currentPosition, reason } = this.state;

    return (
      <View>
        <View style={styles.ctnMyClaimHeader}>
          <Image
            style={styles.iconBuyMyClaim}
            source={theme.Image.kpmg.buyPolicy}
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
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.titleQuestion}>{i18n.t('SCF.WhatWentWrong')}</Text>
            <Text style={styles.titleFlight}>
              {i18n.t('SCF.Light')} <Image source={theme.Image.Si.iconCheckFlight} />
            </Text>
            <Text style={styles.textChange} onPress={() => { this._changeEvent(); }}>{i18n.t('SCF.Change')}</Text>
            <Text style={styles.titleQsHappen}>
              {i18n.t('SCF.WhatHappenedToYourFlight')}
            </Text>
            <Text
              style={[
                styles.itemReason,
                reason === 1 ? styles.selected : styles.unselected,
              ]}
              onPress={() => {
                this.setState({ reason: 1 });
              }}
            >
              {i18n.t('SCF.FlightDelayCancellation')}
              {reason === 1 ? <Image source={theme.Image.Si.iconCheckFlight} /> : null}
            </Text>
            <Text
              style={[
                styles.itemReason,
                reason === 2 ? styles.selected : styles.unselected,
              ]}
              onPress={() => {
                this.setState({ reason: 2 });
              }}
            >
              {i18n.t('SCF.FlightDiversionAndOverbookedFlights')}
              {reason === 2 ? <Image source={theme.Image.Si.iconCheckFlight} /> : null}
            </Text>
            <Text
              style={[
                styles.itemReason,
                reason === 3 ? styles.selected : styles.unselected,
              ]}
              onPress={() => {
                this.setState({ reason: 3 });
              }}
            >
              {i18n.t('SCF.MissedConnectingFlight')}
              {reason === 3 ? <Image source={theme.Image.Si.iconCheckFlight} /> : null}
            </Text>
          </View>
          <View style={[styles.btnContainer, [1, 2, 3].includes(reason) ? null : styles.iconItemReason]}>
            <Button style={[styles.buttonNext]} text={i18n.t('CM.Next')} onPress={() => { this._changeScreen(reason); }} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default LightScreen;
