/* eslint-disable max-len */
// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';

// Import UI

import {
  View, Text, Image, Button, ScrollView, TextInput,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';

const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 25,
  separatorStrokeWidth: 2,
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
export default class SCShortOrDisruptTripDetail extends Component {
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
      currentPosition: 1,
      selectedIndex: 0,
      dateOfInci: '',
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Shortened trip', 'Disrupted trip'];
    const { selectedIndex, currentPosition, dateOfInci } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.ctnClaimHeader}>
          <Image style={styles.iconLock} source={theme.Image.claim.iconClaim} />
          <Text style={styles.txt3rdLogIn}>{i18n.t('TPLD.Submit')}</Text>
          <View style={styles.inStepCommon}>
            <StepIndicator
              stepCount={4}
              customStyles={customStyles}
              currentPosition={currentPosition}
            />
          </View>
        </View>
        <ScrollView style={styles.ctnScrollView}>
          <View style={styles.contentDetailSoD}>
            <Text style={styles.txtTitle}>{i18n.t('TPLD.Title')}</Text>
            <Text style={styles.txtDetail}>{i18n.t('TPLD.Detail')}</Text>
            <Text style={styles.txtQuestionClaim}>{i18n.t('TPLD.QuestionClaim')}</Text>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('TPLD.SelectTrip')}</Text>
              <View style={styles.ddTrip}>
                <Dropdown
                  containerStyle={styles.ctnDD}
                  inputContainerStyle={styles.InputDD}
                  data={data}
                />
              </View>
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('TPLD.PoI')}</Text>
              <View style={styles.ddTrip}>
                <Dropdown
                  containerStyle={styles.ctnDD}
                  inputContainerStyle={styles.InputDD}
                  data={data}
                />
              </View>
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('TPLD.DoI')}</Text>
              <DatePicker
                style={styles.datepickerContainer}
                date={dateOfInci}
                mode="date"
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                minDate="01/01/2019"
                maxDate="31/12/2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    display: 'none',
                  },
                  dateInput: {
                    borderRadius: 3,
                    borderWidth: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  },
                }}
                onDateChange={(date) => { this.setState({ dateOfInci: date }); }}
              />
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('TPLD.DetailIncident')}</Text>
              <TextInput
                style={{ fontSize: 10 }}
                containerStyle={styles.textareaContainer}
                placeholder="e.g. how the incident occurred, damage or injuries sustained by third party"
              />
            </View>
            <View style={styles.ctnPhotoText}>
              <Image source={theme.Image.claim.iconPhoto} />
              <Text style={styles.txtPhoto}>
                {i18n.t('TPLD.PoliceReport')}
              </Text>
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('TPLD.Value')}</Text>
              <View style={styles.ctnDDMoney}>
                <View style={styles.ddMoneyClaim}>
                  <Dropdown
                    inputContainerStyle={styles.InputDD}
                    containerStyle={styles.ddMoney}
                    data={dataMoney}
                  />
                </View>
                <TextInput
                  style={styles.TxInputMoney}
                  placeholder={i18n.t('TPLD.placeHolderMoney')}
                />
              </View>
            </View>
            <View style={styles.ctnPhotoText}>
              <Image source={theme.Image.claim.iconPhoto} />
              <Text style={styles.txtPhoto}>
                {i18n.t('TPLD.DocumentReport')}
              </Text>
            </View>
            <View style={styles.ctnPhotoText}>
              <Image source={theme.Image.claim.iconPhoto} />
              <Text style={styles.txtPhoto}>
                {i18n.t('TPLD.DamageReport')}
              </Text>
            </View>
            <Button
              style={styles.btnNextSoD}
              text={i18n.t('TPLD.Next')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
