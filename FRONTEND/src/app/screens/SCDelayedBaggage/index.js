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

class SCDelayedBaggage extends Component {
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
    };
  }

  _openTapNext() {

  }

  render() {
    const { tripList, placeList } = this.props;

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
              {i18n.t('SCDB.TxtHeaderTitle')}
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
                  {i18n.t('SCDB.TxtTitle')}
                </Text>
                {/* Description */}
                <Text style={styles.txtDecs}>
                  {i18n.t('SCDB.TxtDesc')}
                </Text>
              </View>
              {/* How much button */}
              <View style={styles.groupItems}>
                <TouchableOpacity
                  style={styles.btnHowMuch}
                >
                  <Text style={styles.txtHowMuch}>
                    {i18n.t('SCDB.TxtHowMuch')}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Select trip */}
              <View style={styles.groupItems}>
                <Text style={styles.lblInput}>
                  {i18n.t('SCDB.LblTripSelector')}
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
                  {i18n.t('SCDB.LblIncidentPlace')}
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
                  {i18n.t('SCDB.LblIncidentDate')}
                </Text>
                <TextInput
                  placeholder={i18n.t('SCDB.TxtDateFormat')}
                />
              </View>
              {/* Report Image */}
              <View style={[styles.groupItems, styles.addPhotoContainer]}>
                <Image
                  style={styles.photoIcon}
                  source={theme.Image.Ic.AddAPhoto}
                />
                <Text style={styles.txtAddPhoto}>
                  {i18n.t('SCDB.LblReportImage')}
                </Text>
              </View>
              {/* Button Next */}
              <View style={styles.groupItems}>
                <TouchableOpacity
                  style={styles.btnNext}
                  onPress={this._openTapNext}
                >
                  <Text style={styles.txtNext}>
                    {i18n.t('SCDB.TxtNext')}
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

export default SCDelayedBaggage;
