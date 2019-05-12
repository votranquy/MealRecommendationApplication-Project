// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
// Import UI
import {
  View, Text, Image, ScrollView, TextInput, TextButton, Button,
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

class SCPermanentDisabilityScreen extends Component {
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

  _updateState(value, name) {
    const { listMyClaim } = this.state;
    const markers = listMyClaim;
    markers[name] = value;
    this.setState({ listMyClaim: markers });
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
          <View style={styles.ctnPermanentDisabilityHeader}>
            <Image style={styles.iconBuyPermanentDisability} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtPermanentDisabilityText1}>{i18n.t('SCPD.Title')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepPermanentDisability}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>
              <Text style={styles.textTitle}>{i18n.t('SCPD.PermanentDisability')}</Text>
              <Text style={styles.textDescription}>{i18n.t('SCPD.DescriptionTitle')}</Text>
              <HowCanIClaimPopUp modalVisible />

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCPD.TripName')}
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

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCPD.PlaceOfIncident')}
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

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCPD.DateOfIncident')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  placeholder={i18n.t('SCPD.FormatDate')}
                  onChangeText={text => this._updateState(text, 'dateOfIncident')}
                  value={listMyClaim.dateOfIncident}
                />
              </View>

              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCPD.Detail')}
                </Text>
                <TextInput
                  style={styles.edtInputDetail}
                  placeholder={i18n.t('SCPD.DescriptionDetail')}
                  onChangeText={text => this._updateState(text, 'detail')}
                  value={listMyClaim.detail}
                />
              </View>

              <View style={styles.groupItemsForm}>

                <View style={styles.ctnImageButton}>
                  <View>
                    <Image
                      style={styles.imgAddPhoto}
                      source={this.icons.addPhoto}
                    />
                  </View>
                  <View style={styles.ctnTxtAddPhoto}>
                    <Text style={styles.txtAddPhoto}>
                      {i18n.t('SCPD.ImageOfMedicalBill')}
                    </Text>
                  </View>
                </View>

                <View style={styles.ctnImageButton}>
                  <View>
                    <Image
                      style={styles.imgAddPhoto}
                      source={this.icons.addPhoto}
                    />
                  </View>
                  <View style={styles.ctnTxtAddPhoto}>
                    <Text style={styles.txtAddPhoto}>
                      {i18n.t('SCPD.ImageOfPoliceReport')}
                    </Text>
                  </View>
                </View>

                <View style={styles.ctnImageButton}>
                  <View>
                    <Image
                      style={styles.imgAddPhoto}
                      source={this.icons.addPhoto}
                    />
                  </View>
                  <View style={styles.ctnTxtAddPhoto}>
                    <Text style={styles.txtAddPhoto}>
                      {i18n.t('SCPD.ImageOfTravel')}
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

export default SCPermanentDisabilityScreen;
