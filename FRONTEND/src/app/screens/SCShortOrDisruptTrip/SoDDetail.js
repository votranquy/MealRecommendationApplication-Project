/* eslint-disable max-len */
// Import external libs
import React, { Component } from 'react';
import { ButtonGroup } from 'react-native-elements';
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
import navigator from '../../../navigator';
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
      dateOriginal: '',
      dateOfTrip: '',

    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  render() {
    const buttons = ['Shortened trip', 'Disrupted trip'];
    const {
      selectedIndex, currentPosition, dateOriginal, dateOfTrip,
    } = this.state;
    const data = [{
      value: 'DEC TRIP 1',
    }, {
      value: 'DEC TRIP 2',
    }, {
      value: 'DEC TRIP 3',
    }];
    const dataMoney = [{
      value: '5$',
    }, {
      value: '10$',
    }, {
      value: '100$',
    }];
    return (
      <View style={styles.container}>
        <View style={styles.ctnClaimHeader}>
          <Image style={styles.iconLock} source={theme.Image.claim.iconClaim} />
          <Text style={styles.txtSodLogIn}>{i18n.t('SCSODTD.Submit')}</Text>
          <View style={styles.ctnStepIndicator}>
            <StepIndicator
              stepCount={4}
              customStyles={customStyles}
              currentPosition={currentPosition}
            />
          </View>
        </View>
        <ScrollView style={styles.ctnMain}>
          <View style={styles.ctnDetailSoD}>
            <Text style={styles.txtTitle}>{i18n.t('SCSODTD.Title')}</Text>
            <Text style={styles.txtDetail}>{i18n.t('SCSODTD.Detail')}</Text>
            <Text style={styles.txtQuestionClaim}>{i18n.t('SCSODTD.QuestionClaim')}</Text>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('SCSODTD.SelectTrip')}</Text>
              <View style={styles.ctnDropDownTrip}>
                <Dropdown
                  containerStyle={styles.ctnDropDown}
                  inputContainerStyle={styles.inpCtnDropDown}
                  data={data}
                />
              </View>
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('SCSODTD.PoI')}</Text>
              <View style={styles.ctnDropDownTrip}>
                <Dropdown
                  containerStyle={styles.ctnDropDown}
                  inputContainerStyle={styles.inpCtnDropDown}
                  data={data}
                />
              </View>
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('SCSODTD.ToI')}</Text>
              <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                buttonStyle={styles.btnGroup}
                containerStyle={styles.ctnBtnGroup}
                textStyle={styles.txtBtnGroup}
              />
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('SCSODTD.Original')}</Text>
              <DatePicker
                style={styles.datepickerContainer}
                date={dateOriginal}
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
                    paddingHorizontal: 5,
                  },
                  placeholderText: {
                    paddingHorizontal: 5,
                  },
                }}
                onDateChange={(date) => { this.setState({ dateOriginal: date }); }}
              />
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{selectedIndex === 0 ? i18n.t('SCSODTD.DateofTrip') : i18n.t('SCSODTD.DateofTripDis') }</Text>
              <DatePicker
                style={styles.datepickerContainer}
                date={dateOfTrip}
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
                    paddingHorizontal: 5,
                  },
                  placeholderText: {
                    paddingHorizontal: 5,
                  },
                }}
                onDateChange={(date) => { this.setState({ dateOfTrip: date }); }}
              />
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{selectedIndex === 0 ? i18n.t('SCSODTD.Reason') : i18n.t('SCSODTD.ReasonDis') }</Text>
              <View style={styles.ctnDropDownTrip}>
                <Dropdown
                  placeholder={i18n.t('SCSODTD.ChooseOne')}
                  inputContainerStyle={styles.inpCtnDropDown}
                  containerStyle={styles.ctnDropDown}
                  data={data}
                />
              </View>
            </View>
            <View style={styles.ctnItem}>
              <Text style={styles.txtItem}>{i18n.t('SCSODTD.ClaimAmount')}</Text>
              <View style={styles.ctnDDMoney}>
                <View style={styles.ctnMoneyClaim}>
                  <Dropdown
                    inputContainerStyle={styles.inpCtnDropDown}
                    containerStyle={styles.ddMoney}
                    data={dataMoney}
                  />
                </View>
                <TextInput
                  style={styles.txInputMoney}
                  placeholder={i18n.t('SCSODTD.placeHolderMoney')}
                />
              </View>
            </View>
            <View style={styles.ctnPhotoText}>
              <Image source={theme.Image.claim.iconPhoto} />
              <Text style={styles.txtPhoto}>
                {i18n.t('SCSODTD.Image_1')}
              </Text>
            </View>
            <View style={styles.ctnPhotoText}>
              <Image source={theme.Image.claim.iconPhoto} />
              <Text style={styles.txtPhoto}>
                {selectedIndex === 0 ? i18n.t('SCSODTD.Image_2') : i18n.t('SCSODTD.ImageDisrupt_2') }
              </Text>
            </View>
            <View style={styles.ctnPhotoText}>
              <Image source={theme.Image.claim.iconPhoto} />
              <Text style={styles.txtPhoto}>
                {i18n.t('SCSODTD.ImageReceipt')}
              </Text>
            </View>
            <Button
              style={styles.btnNextSoD}
              text={i18n.t('SCSODTD.Next')}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
