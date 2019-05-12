/* eslint-disable max-len */
// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI

import {
  View, Text, Image, TextButton, Button, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#9ECD78',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#9ECD78',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#9ECD78',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#9ECD78',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
};
export default class SCShortOrDisruptTrip extends Component {
  static navigationOptions = {
    title: i18n.t('CM.MSIG'),
    headerBackground: (
      <Image
        style={styles.iconMSIG}
        source={theme.Image.Si.iconMSIG}
      />
    ),
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 0,
    };
  }

  openSoDDetailScreen() {
    navigator.navigate('SoDDetail');
  }

  render() {
    const objState = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnClaimHeader}>
            <Image style={styles.iconLock} source={theme.Image.claim.iconClaim} />
            <Text style={styles.txtSodLogIn}>{i18n.t('SCSODT.Submit')}</Text>
            <View style={styles.ctnStepIndicator}>
              <StepIndicator
                stepCount={4}
                customStyles={customStyles}
                currentPosition={objState.currentPosition}
              />
            </View>
          </View>
          <View>
            <View style={styles.contentSod}>
              <Text style={styles.txtSodQuestion}>{i18n.t('SCSODT.Question')}</Text>
              <View style={styles.contentProblem}>
                <Text
                  style={styles.txtProblem}
                >{i18n.t('SCSODT.Problem')}
                  <Image source={theme.Image.claim.iconCheck} />
                </Text>
              </View>
            </View>
            <TextButton
              textStyle={styles.txbtnChange}
              text={i18n.t('SCSODT.Change')}
            />
          </View>
        </ScrollView>
        <Button
          onPress={this.openSoDDetailScreen}
          style={styles.btnNext}
          text={i18n.t('SCSODT.Next')}
        />
      </View>
    );
  }
}
