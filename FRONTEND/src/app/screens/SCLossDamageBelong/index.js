// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';

// Import UI
import {
  View, Text, Image, ScrollView, TouchableOpacity, TextInput,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
import ExpandableView from '../../components/ExpandableView';

// Import internal logics
import i18n from '../../../i18n';
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

class SCLossDamageBelong extends Component {
  static propsType = {

  }

  static defaultProps = {
    tripList: [
      {
        key: 1,
        value: 'DEC TRIP 1',
      },
      {
        key: 2,
        value: 'DEC TRIP 2',
      },
      {
        key: 3,
        value: 'DEC TRIP 3',
      },
    ],
    placeList: [
      {
        key: 1,
        value: 'SAN FRANCISCO, USA',
      },
      {
        key: 2,
        value: 'LOS ANGELES, USA',
      },
      {
        key: 3,
        value: 'CALIFORNIA, USA',
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
      personalBelong: {
        tripName: '',
        incidentPace: '',
        incidentDate: '',
        incidentType: '',
        expenseList: [
          {
            description: '',
            purchaseDate: '',
            claimAmount: '',
          },
        ],
      },
    };
  }

  _openTapNext() {

  }

  _addMoreExpense() {
    const { personalBelong } = this.state;
    if (personalBelong.expenseList.length < 5) {
      const expense = {
        description: '',
        purchaseDate: '',
        claimAmount: '',
      };
      personalBelong.expenseList.push(expense);
      this.setState({ personalBelong });
    }
  }

  _removeExpense(index) {
    const { personalBelong } = this.state;
    personalBelong.expenseList.splice(index, 1);
    this.setState({ personalBelong });
  }

  render() {
    const { personalBelong } = this.state;
    const { tripList, placeList } = this.props;
    const typeList = i18n.t('SCLDB.IncidentTypes', { returnObjects: true });
    const currencyList = i18n.t('SCLDB.currencyList', { returnObjects: true });
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
              {i18n.t('SCLDB.TxtHeaderTitle')}
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
              <View style={styles.groupItems}>
                {/* Title */}
                <Text style={styles.txtTitle}>
                  {i18n.t('SCLDB.TxtTitle')}
                </Text>
                {/* Description */}
                <Text style={styles.txtDecs}>
                  {i18n.t('SCLDB.TxtDesc')}
                </Text>
              </View>
              {/* How much button */}
              <View style={styles.groupItems}>
                <TouchableOpacity
                  style={styles.btnHowMuch}
                >
                  <Text style={styles.txtHowMuch}>
                    {i18n.t('SCLDB.TxtHowMuch')}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Select trip */}
              <View style={styles.groupItems}>
                <Text style={styles.lblInput}>
                  {i18n.t('SCLDB.LblTripSelector')}
                </Text>
                <View style={styles.dropdownItems}>
                  <Dropdown
                    data={tripList}
                    containerStyle={styles.dropdownContainer}
                    inputContainerStyle={styles.dropdownInput}
                    value={tripList[0].value}
                  />
                </View>
              </View>
              {/* Place of incident */}
              <View style={styles.groupItems}>
                <Text style={styles.lblInput}>
                  {i18n.t('SCLDB.LblIncidentPlace')}
                </Text>
                <View style={styles.dropdownItems}>
                  <Dropdown
                    data={placeList}
                    containerStyle={styles.dropdownContainer}
                    inputContainerStyle={styles.dropdownInput}
                    value={placeList[0].value}
                  />
                </View>
              </View>
              {/* Date of incident */}
              <View style={styles.groupItems}>
                <Text style={styles.lblInput}>
                  {i18n.t('SCLDB.LblIncidentDate')}
                </Text>
                <TextInput
                  placeholder={i18n.t('SCLDB.TxtDateFormat')}
                />
              </View>
              {/* Type of incident */}
              <View style={styles.groupItems}>
                <Text style={styles.lblInput}>
                  {i18n.t('SCLDB.LblIncidentType')}
                </Text>
                <View style={styles.dropdownItems}>
                  <Dropdown
                    data={typeList}
                    containerStyle={styles.dropdownContainer}
                    inputContainerStyle={styles.dropdownInput}
                    value={typeList[0].value}
                  />
                </View>
              </View>
              {/* Proof Image */}
              <View style={[styles.groupItems, styles.addPhotoContainer]}>
                <Image
                  style={styles.photoIcon}
                  source={theme.Image.Ic.AddAPhoto}
                />
                <Text style={styles.txtAddPhoto}>
                  {i18n.t('SCLDB.LblProofImage')}
                </Text>
              </View>
              {/* Expense description */}
              <View style={styles.groupItems}>
                <Text style={[styles.txtDecs, styles.txtExpenseDecs]}>
                  {i18n.t('SCLDB.LblExpenseDesc')}
                </Text>
              </View>
              {/* Loop of Expenses */}
              {personalBelong.expenseList.map((expense, index) => (
                <View
                  style={styles.groupItems}
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                >
                  <ExpandableView
                    title={`Expense ${index + 1}`}
                    removable={index > 0}
                    style={styles.marginTop}
                    onRemovePress={() => this._removeExpense(index)}
                  >
                    {/* Item description */}
                    <View style={styles.marginTop}>
                      <Text style={styles.lblInput}>
                        {i18n.t('SCLDB.LblItemDesc')}
                      </Text>
                      <TextInput
                        style={styles.txtInputContainer}
                        placeholder={i18n.t('SCLDB.TxtItemDesc')}
                        multiline
                        numberOfLines={2}
                        scrollEnabled
                      />
                    </View>
                    {/* Date of purchase */}
                    <View style={styles.marginTop}>
                      <Text style={styles.lblInput}>
                        {i18n.t('SCLDB.LblPurchaseDate')}
                      </Text>
                      <TextInput
                        placeholder={i18n.t('SCLDB.TxtPurchaseDate')}
                      />
                    </View>
                    {/* Claim amount */}
                    <View style={styles.marginTop}>
                      <Text style={styles.lblInput}>
                        {i18n.t('SCLDB.LblAmount')}
                      </Text>
                      <View style={styles.groupAmount}>
                        <View style={[styles.dropdownItems, styles.inpCurrency]}>
                          <Dropdown
                            data={currencyList}
                            containerStyle={styles.dropdownContainer}
                            inputContainerStyle={styles.dropdownInput}
                            value={currencyList[0].value}
                          />
                        </View>
                        <TextInput
                          style={styles.inpAmount}
                          placeholder={i18n.t('SCLDB.TxtAmount')}
                        />
                      </View>
                    </View>
                    {/* Receipt Image */}
                    <View style={[styles.marginTop, styles.addPhotoContainer]}>
                      <Image
                        style={styles.photoIcon}
                        source={theme.Image.Ic.AddAPhoto}
                      />
                      <Text style={styles.txtAddPhoto}>
                        {i18n.t('SCLDB.LblReceiptImage')}
                      </Text>
                    </View>
                    {/* Damaged item Image */}
                    <View style={[styles.marginTop, styles.addPhotoContainer]}>
                      <Image
                        style={styles.photoIcon}
                        source={theme.Image.Ic.AddAPhoto}
                      />
                      <Text style={styles.txtAddPhoto}>
                        {i18n.t('SCLDB.LblDamagedImage')}
                      </Text>
                    </View>
                  </ExpandableView>
                </View>
              ))}
              {/* Receipt image description */}
              <View style={[styles.groupItems, styles.marginBottom]}>
                <Text style={styles.txtDecs}>
                  {i18n.t('SCLDB.TxtReceiptImageDecs')}
                </Text>
              </View>
              {/* Button Add more */}
              <View style={styles.groupItems}>
                <TouchableOpacity
                  style={styles.btnAddMore}
                  onPress={() => this._addMoreExpense()}
                >
                  <Text style={styles.txtAddMore}>
                    {i18n.t('SCLDB.TxtAddMore')}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Button Next */}
              <View style={styles.groupItems}>
                <TouchableOpacity
                  style={styles.btnNext}
                  onPress={this._openTapNext}
                >
                  <Text style={styles.txtNext}>
                    {i18n.t('SCLDB.TxtNext')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default SCLossDamageBelong;
