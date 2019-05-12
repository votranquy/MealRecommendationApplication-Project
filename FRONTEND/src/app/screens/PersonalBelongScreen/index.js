// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';

// Import UI
import {
  View, Text, Image, ScrollView, Button, FlatList, TouchableOpacity,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
import Expense from '../Expense';

// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

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
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#999999',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#353535',
};

class PersonalBelongScreen extends Component {
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
      status: false,
      causeDetails: i18n.t('SCPB.CauseDetails', { returnObjects: true }),
    };
  }

  _openTapNext() {
    navigator.navigate('MyClaim');
  }

  _openTapChange() {
    navigator.navigate('MyClaim');
  }

  _changeColor(index) {
    const { causeDetails } = this.state;
    const issues = [...causeDetails];
    for (let i = 0; i < causeDetails.length; i++) {
      issues[i] = { ...issues[i], isChecked: false };
    }
    issues[index] = { ...issues[index], isChecked: true };
    this.setState({ causeDetails: issues, status: true });
  }


  render() {
    const { status, causeDetails } = this.state;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          {/* Header */}
          <View style={styles.containerHeader}>
            <Image
              style={styles.iconHeader}
              source={theme.Image.kpmg.buyPolicy}
            />
            <Text style={styles.LblHeaderTitle}>
              {i18n.t('SCPB.TxtHeaderTitle')}
            </Text>
          </View>
          {/* Step indicator */}
          <View style={styles.inStepIndicator}>
            <StepIndicator
              customStyles={customStyles}
              stepCount={4}
              currentPosition={0}
            />
          </View>
          {/* Body */}
          <View style={styles.container}>
            {/* Personal belongings content */}
            <View style={[styles.containerBody]}>
              {/* Content title */}
              <Text style={styles.txtCauseTitle}>
                {i18n.t('SCPB.LBLWhatWentWrong')}
              </Text>
              {/* Cause items */}
              <View style={styles.containerCauseItem}>
                <Text style={styles.txtCauseItem}>
                  {i18n.t('SCPB.TxtCauseItem')}
                  <Image
                    style={[styles.iconChecked]}
                    source={theme.Image.Ic.StatusApproved}
                  />
                </Text>
              </View>
              {/* Change button */}
              <View style={styles.containerCauseItem}>
                <TouchableOpacity
                  onPress={this._openTapNext}
                >
                  <Text style={styles.txtChangeButton}>
                    {i18n.t('SCPB.BtnChange')}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Cause details title */}
              <View style={styles.containerCauseItem}>
                <Text style={styles.causeDetailTitle}>
                  {i18n.t('SCPB.TxtCauseDetail')}
                </Text>
              </View>
              {/* Cause details list */}
              <View style={styles.containerCauseDetails}>
                <FlatList
                  data={causeDetails}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => this._changeColor(index)}>
                      <View style={styles.containerIssue}>
                        <Text
                          style={item.isChecked ? styles.txtCheckedIssue : styles.txtUncheckedIssue}
                        >
                          {item.title}
                          {item.isChecked
                          && (
                            <Image
                              style={[styles.iconChecked]}
                              source={theme.Image.Ic.StatusApproved}
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
                  <Button
                    style={styles.buttonNext}
                    onPress={this._openTapNext}
                    text={i18n.t('SCPB.BtnNext')}
                  />
                </View>
              )}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default PersonalBelongScreen;
