// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI
import {
  View, Text, TextButton, Image, ScrollView, FlatList,
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

class SCWhatWentWrongScreen extends Component {
  static propsType = {

  }

  static defaultProps = {
    claimType: [
      {
        key: i18n.t('SCWWW.MedicalIssue'),
        nameNavigate: i18n.t('SCWWW.SCMedicalIssue'),
      },
      {
        key: i18n.t('SCWWW.PersonalBelong'),
        nameNavigate: i18n.t('SCWWW.SCPersonalBelong'),
      },
      {
        key: i18n.t('SCWWW.Flight'),
        nameNavigate: i18n.t('SCWWW.SCFlight'),
      },
      {
        key: i18n.t('SCWWW.ShortOrDisruptTrip'),
        nameNavigate: i18n.t('SCWWW.SCShortOrDisruptTrip'),
      },
      {
        key: i18n.t('SCWWW.ThirdLiability'),
        nameNavigate: i18n.t('SCWWW.SC3rdLiability'),
      },
    ],
  }

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };


  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 0,
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _openTapNext() {
    navigator.navigate('MyClaim');
  }

  _openTapLearnMore(nameNavigate) {
    navigator.navigate(nameNavigate);
  }


  render() {
    const { currentPosition } = this.state;
    const { claimType } = this.props;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnSubmitClaimHeader}>
            <Image style={styles.iconBuySubmitClaim} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtSubmitClaimText1}>{i18n.t('SCWWW.Title')}</Text>
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
              <Text style={styles.textTitle}>{i18n.t('SCWWW.WhatWentWrong')}</Text>
              <FlatList
                data={claimType}
                contentContainerStyle={{alignItems: 'flex-start'}}
                renderItem={({ item }) => (
                  <TextButton
                    onPress={() => this._openTapLearnMore(item.nameNavigate)}
                    text={item.key}
                  />
                )}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SCWhatWentWrongScreen;
