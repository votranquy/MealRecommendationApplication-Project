/* eslint-disable max-len */
// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import AppIntroSlider from 'react-native-app-intro-slider';
// Import UI

import {
  View, Text, Image, Button, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';
import List3rdComponent from './List3rdComponent';
import ThirdLiabilityComponent from './ThirdLiabilityComponent';

const slides = [
  { index: 0 },
  { index: 1 },
  { index: 2 },
  { index: 3 },
];

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
export default class SC3rdLiability extends Component {
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

  _renderItem = (item) => {
    switch (item.index) {
      case 0: return <List3rdComponent />;
      case 1: return <ThirdLiabilityComponent />;
      case 2: return <Text>3</Text>;
      default: return <Text>4</Text>;
    }
  }

  _renderNextItem = () => {
    console.log('AAAAAAAAAAAAAAAA');
    const { currentPosition } = this.state;
    this.setState({
      currentPosition: currentPosition + 1,
    });
  }

  render() {
    const { currentPosition } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.ctnClaimHeader}>
          <Image style={styles.iconLock} source={theme.Image.claim.iconClaim} />
          <Text style={styles.txt3rdLogIn}>{i18n.t('TPL.Submit')}</Text>
          <View style={styles.inStepCommon}>
            <StepIndicator
              stepCount={4}
              customStyles={customStyles}
              currentPosition={currentPosition}
            />
          </View>
        </View>
        <ScrollView style={styles.ctnScrollView}>
          <AppIntroSlider
            renderItem={this._renderItem}
            dotStyle={styles.styDpNone}
            activeDotStyle={styles.styDpNone}
            onSlideChange={(currentPosition) => { this.setState({ currentPosition }); }}
            slides={slides}
            bottomButton
          />
        </ScrollView>
      </View>
    );
  }
}
