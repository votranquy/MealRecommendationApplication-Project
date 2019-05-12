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

class SCLossPassportOrDoc extends Component {
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
            docType: {
              key: '',
              value: '',
            },
            totalIncurred: '',
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
        docType: {
          key: '',
          value: '',
        },
        totalIncurred: '',
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

  _setDocumentType(index, value) {
    const { personalBelong } = this.state;
    const docList = i18n.t('SCLPOD.docList', { returnObjects: true });
    // Get defined document type from value argument
    const docType = docList.filter(doc => doc.value === value)[0];
    personalBelong.expenseList[index].docType = docType;
    this.setState({ personalBelong });
  }

  render() {
    const { personalBelong } = this.state;
    const { tripList, placeList } = this.props;
    const typeList = i18n.t('SCLPOD.IncidentTypes', { returnObjects: true });
    const currencyList = i18n.t('SCLPOD.currencyList', { returnObjects: true });
    const docList = i18n.t('SCLPOD.docList', { returnObjects: true });

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
              {i18n.t('SCLPOD.TxtHeaderTitle')}
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
                  {i18n.t('SCLPOD.TxtTitle')}
                </Text>
                {/* Description */}
                <Text style={styles.txtDecs}>
                  {i18n.t('SCLPOD.TxtDesc')}
                </Text>
              </View>
              {/* How much button */}
              <View style={styles.groupItems}>
                <TouchableOpacity
                  style={styles.btnHowMuch}
                >
                  <Text style={styles.txtHowMuch}>
                    {i18n.t('SCLPOD.TxtHowMuch')}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Select trip */}
              <View style={styles.groupItems}>
                <Text style={styles.lblInput}>
                  {i18n.t('SCLPOD.LblTripSelector')}
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
                  {i18n.t('SCLPOD.LblIncidentPlace')}
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
                  {i18n.t('SCLPOD.LblIncidentDate')}
                </Text>
                <TextInput
                  placeholder={i18n.t('SCLPOD.TxtDateFormat')}
                />
              </View>
              {/* Type of incident */}
              <View style={styles.groupItems}>
                <Text style={styles.lblInput}>
                  {i18n.t('SCLPOD.LblIncidentType')}
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
              {/* Police report Image */}
              <View style={[styles.groupItems, styles.addPhotoContainer]}>
                <Image
                  style={styles.photoIcon}
                  source={theme.Image.Ic.AddAPhoto}
                />
                <Text style={styles.txtAddPhoto}>
                  {i18n.t('SCLPOD.LblPoliceReportImage')}
                </Text>
              </View>
              {/* Expense description */}
              <View style={styles.groupItems}>
                <Text style={[styles.txtDecs, styles.txtExpenseDecs]}>
                  {i18n.t('SCLPOD.LblExpenseDesc')}
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
                    {/* Type of documents */}
                    <View style={styles.marginTop}>
                      <Text style={styles.lblInput}>
                        {i18n.t('SCLPOD.LblDocType')}
                      </Text>
                      <View style={styles.dropdownItems}>
                        <Dropdown
                          data={docList}
                          containerStyle={styles.dropdownContainer}
                          inputContainerStyle={styles.dropdownInput}
                          value={docList[0].value}
                          onChangeText={value => this._setDocumentType(index, value)}
                        />
                      </View>
                    </View>
                    {/* Other travel document */}
                    {(expense.docType.key === 3) && (
                    <View style={styles.marginTop}>
                      <Text style={styles.lblInput}>
                        {i18n.t('SCLPOD.LblOtherDoc')}
                      </Text>
                      <TextInput
                        placeholder={i18n.t('SCLPOD.TxtOtherDoc')}
                      />
                    </View>
                    )}
                    {/* Total Expenses incurred */}
                    <View style={styles.marginTop}>
                      <Text style={styles.lblInput}>
                        {i18n.t('SCLPOD.LblAmount')}
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
                          placeholder={i18n.t('SCLPOD.TxtAmount')}
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
                        {i18n.t('SCLPOD.LblReceiptImage')}
                      </Text>
                    </View>
                    {/* Document Image */}
                    <View style={[styles.marginTop, styles.addPhotoContainer]}>
                      <Image
                        style={styles.photoIcon}
                        source={theme.Image.Ic.AddAPhoto}
                      />
                      <Text style={styles.txtAddPhoto}>
                        {i18n.t('SCLPOD.LblDocImage')}
                      </Text>
                    </View>
                  </ExpandableView>
                </View>
              ))}
              {/* Button Add more */}
              <View style={styles.groupItems}>
                <TouchableOpacity
                  style={styles.btnAddMore}
                  onPress={() => this._addMoreExpense()}
                >
                  <Text style={styles.txtAddMore}>
                    {i18n.t('SCLPOD.TxtAddMore')}
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
                    {i18n.t('SCLPOD.TxtNext')}
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

export default SCLossPassportOrDoc;
