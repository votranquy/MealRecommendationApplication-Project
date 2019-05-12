// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
// Import UI
import {
  View, Text, TextButton, Image, ScrollView, Button, FlatList, TouchableOpacity,
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

  }

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };


  constructor(props) {
    super(props);

    this.state = {
      currentPosition: 0,
      status: false,
      indexData: 0,
      data: [{
        key: i18n.t('SCMI.MedicalExpense'),
        nameNavigate: i18n.t('SCMI.SCMedicalExpense'),
        isChecked: false,
      }, {
        key: i18n.t('SCMI.HospitalDailyBenefit'),
        nameNavigate: i18n.t('SCMI.SCHospitalDailyBenefit'),
        isChecked: false,
      }, {
        key: i18n.t('SCMI.PermanentDisability'),
        nameNavigate: i18n.t('SCMI.SCPermanentDisability'),
        isChecked: false,
      }, {
        key: i18n.t('SCMI.EmgEvacuaAndRepatria'),
        nameNavigate: i18n.t('SCMI.SCEmgEvacuaAndRepatria'),
        isChecked: false,
      }],
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _openTapNext() {
    const { data, indexData } = this.state;
    const { nameNavigate } = data[indexData];
    navigator.navigate(nameNavigate);
  }

  _openTapLearnMore(nameNavigate) {
    navigator.navigate(nameNavigate);
  }

  _changeColor(index) {
    const { data } = this.state;
    const markers = [...data];
    for (let i = 0; i < data.length; i++) {
      markers[i] = { ...markers[i], isChecked: false };
    }
    markers[index] = { ...markers[index], isChecked: true };
    this.setState({ data: markers });
    this.setState({ status: true });
  }


  render() {
    const {
      currentPosition, status, data, indexData,
    } = this.state;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnMedicalIssueHeader}>
            <Image style={styles.iconBuyMedicalIssue} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtMedicalIssueText1}>{i18n.t('SCMI.Title')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepMedicalIssue}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>
              <Text style={styles.textTitle}>{i18n.t('SCMI.WhatWentWrong')}</Text>
              <View style={styles.containerTitle}>
                <Text style={styles.textSubTitle}>{i18n.t('SCMI.MedicalIssue')}
                  <Image
                    style={[styles.imageIconTitle]}
                    source={theme.Image.Ic.Check}
                  />
                </Text>
              </View>
              <TextButton
                textStyle={styles.changeButton}
                onPress={() => this._openTapLearnMore(i18n.t('SCMI.SCWhatWentWrong'))}
                text={i18n.t('SCMI.Change')}
              />
              <Text style={styles.textType}>{i18n.t('SCMI.SelectType')}</Text>
              <View style={styles.containerType}>
                <FlatList
                  data={data}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={
                      () => { this._changeColor(index); this.setState({ indexData: index }); }
                    }
                    >
                      <View style={styles.containerTitle}>
                        <Text style={item.isChecked ? styles.textSubTitle : styles.textSubType}>
                          {item.key}
                          {item.isChecked
                          && (
                            <Image
                              style={[styles.imageIconType]}
                              source={theme.Image.Ic.Check}
                            />
                          )}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
            {status
              && (
                <View style={styles.containerButtonNext}>
                  <Button style={styles.buttonNext} onPress={() => this._openTapNext()} text={i18n.t('CM.Next')} />
                </View>
              )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SCWhatWentWrongScreen;
