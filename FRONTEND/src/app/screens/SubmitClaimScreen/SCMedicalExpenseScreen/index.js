// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
// Import UI
import {
  View, Text, TouchableOpacity, Image, ScrollView, TextInput, Button, Switch,
} from '../../../../components';
import styles from './styles';
import TopBarActions from '../../../components/TopBarActions';
// Import internal logics
import i18n from '../../../../i18n';
import navigator from '../../../../navigator';
import theme from '../../../../theme';
import ExpandableView from '../../../components/ExpandableView';
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

class SCMedicalExpenseScreen extends Component {
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
      value: 'London, UK',
    }, {
      value: 'Manchester, UK',
    }],
    typeExpense: [{
      value: 'oversea medical expense',
    }, {
      value: 'oversea medical expense',
    }],
    typeTotalExpense: [{
      value: 'S$',
    }, {
      value: 'S&',
    }, {
      value: 'S*',
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
      switchOn: false,
      currentPosition: 1,
      listMyClaim: {
        claimNumber: '123456',
        claimType: 'MEDICAL EXPENSES',
        claimPayoutAmount: '33',
        claimStatus: 'Approved',
        tripName: 'Jan Trip 1',
        placeOfIncident: 'London, UK',
        dateOfIncident: '',
        detailOfIncident: '',
        expense: [{
          typeOfExpense: 'oversea medical expense',
          totalExpensesIncurred: '',
          typeTotalExpense: 'S$',
        }],
      },
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  /* Change switch On or Off */
  onPressSwitch = () => {
    const { switchOn } = this.state;
    this.setState({ switchOn: !switchOn });
  };

  /* Get text right for switch toggle */
  getRightText() {
    const { switchOn } = this.state;
    return switchOn ? '' : 'NO';
  }

  /* Get text Left for switch toggle */
  getLeftText() {
    const { switchOn } = this.state;
    return switchOn ? 'YES' : '';
  }

  _openTapNext() {
  }

  _openTapLearnMore(nameNavigate) {
    navigator.navigate(nameNavigate);
  }

  /* Update value for listMyClaim */
  _updateState(value, name) {
    const { listMyClaim } = this.state;
    const markers = listMyClaim;
    markers[name] = value;
    this.setState({ listMyClaim: markers });
  }

  /* Update value for expense */
  _updateStateExpense(value, name, index) {
    const { listMyClaim } = this.state;
    const markers = listMyClaim;
    markers.expense[name][index] = value;
    this.setState({ listMyClaim: markers });
  }

  /* Add value for expense */
  _addMoreExpense() {
    const { listMyClaim } = this.state;
    const markers = {
      typeOfExpense: '',
      totalExpensesIncurred: '',
    };
    if (listMyClaim.expense.length < 5) {
      listMyClaim.expense.push(markers);
      this.setState({ listMyClaim });
    }
  }

  /* Remove value for expense */
  _onRemoveExpense(index) {
    const { listMyClaim } = this.state;
    listMyClaim.expense.splice(index, 1);
    this.setState({ listMyClaim });
  }

  render() {
    const {
      currentPosition, listMyClaim,
      switchOn,
    } = this.state;
    const {
      tripCode, placeCode, typeExpense, typeTotalExpense,
    } = this.props;
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnMedicalExpenseHeader}>
            <Image style={styles.iconBuyMedicalExpense} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtMedicalExpenseText1}>{i18n.t('SCME.Title')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.inStepMedicalExpense}>
              <StepIndicator
                customStyles={customStyles}
                stepCount={4}
                currentPosition={currentPosition}
              />
            </View>
            <View style={[styles.containerForm]}>
              <Text style={styles.textTitle}>{i18n.t('SCME.MedicalExpense')}</Text>
              <Text style={styles.textDescription}>{i18n.t('SCME.DescriptionTitle')}</Text>

              {/* Call modal how can i claim */}
              <HowCanIClaimPopUp modalVisible />

              {/* Input for Trip name */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCME.TripName')}
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
                  {i18n.t('SCME.PlaceOfIncident')}
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

              {/* Input for Date of incident */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCME.DateOfIncident')}
                </Text>
                <TextInput
                  style={styles.edtInput}
                  placeholder={i18n.t('SCME.FormatDate')}
                  onChangeText={text => this._updateState(text, 'dateOfIncident')}
                  value={listMyClaim.dateOfIncident}
                />
              </View>

              {/* Input for Details of incident */}
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>
                  {i18n.t('SCME.DetailOfIncident')}
                </Text>
                <TextInput
                  style={styles.edtInputDetail}
                  placeholder={i18n.t('SCME.DescriptionDetail')}
                  onChangeText={text => this._updateState(text, 'detailOfIncident')}
                  value={listMyClaim.detailOfIncident}
                />
              </View>
              <View style={styles.groupItemsForm}>
                <Text style={styles.txtLabel}>{i18n.t('SCME.DescriptionExpense')}</Text>
              </View>
              <View style={styles.groupItemsForm}>
                {/* Use loop map for expense */}
                {listMyClaim.expense.map((claim, index) => (

                  <ExpandableView
                    key={claim.typeOfExpense}
                    title={`Expense ${index + 1}`}
                    removable={(index > 0)}
                    onRemovePress={() => this._onRemoveExpense(index)}
                  >

                    {/* Input for Type of expense */}
                    <View style={styles.containerExpense}>
                      <Text style={styles.txtLabel}>
                        {i18n.t('SCME.TypeOfExpense')}
                      </Text>
                      <View>
                        <View style={styles.edtGroupDropdown}>
                          <Dropdown
                            style={styles.edtDropdown}
                            dropdownPosition={-4}
                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                            data={typeExpense}
                            containerStyle={styles.editContainerDropdown}
                            onChangeText={text => this._updateStateExpense(text, index, 'typeOfExpense')}
                            value={claim.typeOfExpense}
                          />
                        </View>
                      </View>
                    </View>

                    {/* Input for Total expenses incurred */}
                    <View style={styles.containerExpense}>
                      <Text style={styles.txtLabel}>
                        {i18n.t('SCME.TotalExpensesIncurred')}
                      </Text>
                      <View style={styles.containerTotalExpense}>
                        <View style={styles.edtGroupDropdownExpense}>
                          <Dropdown
                            style={styles.edtDropdown}
                            dropdownPosition={-4}
                            inputContainerStyle={{ borderBottomColor: 'transparent' }}
                            data={typeTotalExpense}
                            containerStyle={styles.editContainerDropdown}
                            onChangeText={text => this._updateStateExpense(text, index, 'typeTotalExpense')}
                            value={claim.typeTotalExpense}
                          />
                        </View>
                        <View style={styles.edtInputExpense}>
                          <TextInput
                            style={styles.edtInput}
                            placeholder={i18n.t('SCME.TotalExpensesIncurred')}
                            onChangeText={text => this._updateStateExpense(text, index, 'totalExpensesIncurred')}
                            value={listMyClaim.expense[index].totalExpensesIncurred}
                          />
                        </View>
                      </View>
                    </View>

                    {/* Image for upload */}
                    <View style={styles.containerExpense}>

                      <View style={styles.ctnImageButtonExpense}>
                        <Image
                          style={styles.img_addPhoto}
                          source={this.icons.addPhoto}
                        />
                        <Text style={styles.txtAddPhoto}>
                          {i18n.t('SCME.ImageOfMedicalBill')}
                        </Text>
                      </View>

                      <View style={styles.ctnImageButtonExpense}>
                        <Image
                          style={styles.img_addPhoto}
                          source={this.icons.addPhoto}
                        />
                        <Text style={styles.txtAddPhoto}>
                          {i18n.t('SCME.ImageOfMedicalReport')}
                        </Text>
                      </View>
                    </View>
                  </ExpandableView>

                ))}
              </View>
              {/* Add more button */}
              <TouchableOpacity
                style={styles.btnBorderBlue}
                onPress={() => this._addMoreExpense()}
              >
                <Text style={styles.buttonHowMuchText}>
                  {i18n.t('SCME.BTAddMore')}
                </Text>
              </TouchableOpacity>
              <View style={styles.groupItemsForm}>
                <View style={styles.ctnConfirm}>
                  <Text style={styles.txtConfirm}>{i18n.t('SCME.Confirm')}</Text>

                  {/* Switch toggle */}
                  <View style={styles.ctnToggleConfirm}>
                    <Switch
                      containerStyle={styles.swtContainer}
                      circleStyle={styles.swtCircle}
                      backTextRight={this.getRightText()}
                      backTextLeft={this.getLeftText()}
                      buttonStyle={styles.swtButton}
                      rightContainerStyle={styles.swtRightContent}
                      leftContainerStyle={styles.swtLeftContent}
                      backgroundColorOn="white"
                      backgroundColorOff="white"
                      switchOn={switchOn}
                      onPress={this.onPressSwitch}
                      circleColorOff="red"
                      circleColorOn="green"
                      duration={500}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.groupItemsForm}>
                <Button style={styles.btnNext} text="Next" />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SCMedicalExpenseScreen;
