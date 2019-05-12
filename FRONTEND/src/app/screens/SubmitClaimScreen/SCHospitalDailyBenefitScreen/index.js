// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
// Import UI
import {
  View, Text, Image, ScrollView, TextInput, Button,
} from '../../../../components';
import styles from './styles';
import TopBarActions from '../../../components/TopBarActions';
// Import internal logics
import i18n from '../../../../i18n';
import navigator from '../../../../navigator';
import theme from '../../../../theme';
import HowCanIClaimPopUp from '../HowCanIClaimPopUp';

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

class SCHospitalDailyBenefitScreen extends Component {
  static propsType = {

  }

  static defaultProps = {
    tripCode: [{
      value: 'Jan Trip 1',
    }, {
      value: 'Jan Trip 2',
    }, {
      value: 'Jan Trip 3',
    }],
    placeCode: [{
      value: 'SAN FRANCISCO, USA',
    }, {
      value: 'Manchester, UK',
    }],
  }

  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };


  constructor(props) {
    super(props);
    this.icons = {
      addPhoto: theme.Image.Ic.AddPhoto,
    };
    this.state = {
      currentPosition: 1,
      listMyClaim: {
        claimNumber: '123456',
        claimType: 'Overseas hospitalisation daily benefits',
        claimPayoutAmount: '33',
        claimStatus: 'Approved',
        tripName: 'Jan Trip 1',
        placeOfIncident: 'SAN FRANCISCO, USA',
        dateOfIncident: '',
        detail: '',
        expense: [{
          typeOfExpense: 'oversea medical expense',
          totalExpensesIncurred: '',
          typeTotalExpense: 'S$',
        }],
        dateAdmission: '',
        timeAdmission: '',
        dateDischarge: '',
        timeDischarge: '',
      },
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  _openTapNext() {
  }

  _openTapLearnMore(nameNavigate) {
    navigator.navigate(nameNavigate);
  }

  render() {
    const {
      currentPosition, listMyClaim,
    } = this.state;

    const {
      tripCode, placeCode,
    } = this.props;

    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnHospitalDailyBenefitHeader}>
            <Image style={styles.iconBuyHospitalDailyBenefit} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtHospitalDailyBenefitText1}>{i18n.t('SCHDB.Title')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepHospitalDailyBenefit}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>

              {/* Text header */}
              <Text style={styles.textTitle}>{i18n.t('SCHDB.HospitalDailyBenefit')}</Text>
              <Text style={styles.textDescription}>{i18n.t('SCHDB.DescriptionTitle')}</Text>

              {/* Modal for HowCanIClaimPopUp */}
              <HowCanIClaimPopUp modalVisible />

              {/* Input for Trip name */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCHDB.TripName')}
                </Text>
                <View style={styles.edtGroupDropdown}>
                  <Dropdown
                    style={styles.edtDropdown}
                    dropdownPosition={-4}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    data={tripCode}
                    containerStyle={styles.editContainerDropdown}
                    onChangeText={text => this._updateState(text, 'tripName')}
                    value={listMyClaim.tripName}
                  />
                </View>
              </View>

              {/* Input for Place of incident */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCHDB.PlaceOfIncident')}
                </Text>
                <View style={styles.edtGroupDropdown}>
                  <Dropdown
                    style={styles.edtDropdown}
                    dropdownPosition={-4}
                    inputContainerStyle={{ borderBottomColor: 'transparent' }}
                    data={placeCode}
                    containerStyle={styles.editContainerDropdown}
                    onChangeText={text => this._updateState(text, 'placeOfIncident')}
                    value={listMyClaim.placeOfIncident}
                  />
                </View>
              </View>

              {/* Input for Details of hospitalisation */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCHDB.DetailOfHositalisation')}
                </Text>
                <TextInput
                  style={styles.edtInputDetail}
                  placeholder={i18n.t('SCHDB.DescriptionDetail')}
                  onChangeText={text => this._updateState(text, 'detail')}
                  value={listMyClaim.detail}
                />
              </View>

              {/* Input for Date and time admission */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCHDB.DateAndTimeAdmission')}
                </Text>
                <View style={styles.ctnDateTimeHospital}>
                  <TextInput
                    style={styles.inpDate}
                    placeholder={i18n.t('SCHDB.FormatDate')}
                    onChangeText={text => this._updateState(text, 'dateAdmission')}
                    value={listMyClaim.dateAdmission}
                  />
                  <TextInput
                    style={styles.inpDate}
                    placeholder={i18n.t('SCHDB.FormatTime')}
                    onChangeText={text => this._updateState(text, 'timeAdmission')}
                    value={listMyClaim.timeAdmission}
                  />
                </View>
              </View>

              {/* Input for Date and time discharge */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCHDB.DateAndTimeDischarge')}
                </Text>
                <View style={styles.ctnDateTimeHospital}>
                  <TextInput
                    style={styles.inpDate}
                    placeholder={i18n.t('SCHDB.FormatDate')}
                    onChangeText={text => this._updateState(text, 'dateDischarge')}
                    value={listMyClaim.dateDischarge}
                  />
                  <TextInput
                    style={styles.inpDate}
                    placeholder={i18n.t('SCHDB.FormatTime')}
                    onChangeText={text => this._updateState(text, 'timeDischarge')}
                    value={listMyClaim.timeDischarge}
                  />
                </View>
              </View>

              {/* Image for upload */}
              <View style={styles.groupItemsForm}>

                <View style={styles.ctnImageButtonExpense}>
                  <View style={styles.ctnAddPhoto}>
                    <Image
                      style={styles.imgAddPhoto}
                      source={this.icons.addPhoto}
                    />
                  </View>
                  <View>
                    <Text style={styles.txtAddPhoto}>
                      {i18n.t('SCHDB.ImageOfMedicalBill')}
                    </Text>
                  </View>
                </View>

                <View style={styles.ctnImageButtonExpense}>
                  <View style={styles.ctnAddPhoto}>
                    <Image
                      style={styles.imgAddPhoto}
                      source={this.icons.addPhoto}
                    />
                  </View>
                  <View>
                    <Text style={styles.txtAddPhoto}>
                      {i18n.t('SCHDB.ImageOfMedicalReport')}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.groupItemsForm}>
                <Button style={styles.btnNext} text={i18n.t('CM.Next')} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SCHospitalDailyBenefitScreen;
