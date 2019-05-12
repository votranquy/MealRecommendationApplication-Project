// Import external libs
import React, { Component } from 'react';
import StepIndicator from 'react-native-step-indicator';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
// Import UI
import moment from 'moment';
import {
  View, Text, TextInput, Button, TextButton, Image, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

const labels = ['Start date', 'Personal', 'Contact', 'Confirmation', 'Payment'];
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
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 12,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#ffffff',
  labelColor: '#999999',
  labelSize: 11,
  currentStepLabelColor: '#000000',
};

class BuyPolicyStartDate extends Component {
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
      startDate: '',
      endDate: '',
      currentPosition: 0,
    };
  }

  onPageChange(position) {
    this.setState({ currentPosition: position });
  }

  calEndDate = (startDateString, startDate) => {
    this.setState({ startDate });
    const endDate = moment(startDate).add(1, 'year').format('DD/MM/YYYY');
    this.setState({ endDate });
  }

  _openTapNext() {
    navigator.navigate('MyClaim');
  }

  _openTapLearnMore() {

  }

  render() {
    const { currentPosition, startDate, endDate } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.ctnPolicyHeader}>
          <Image style={styles.icoBuyPolicy} source={theme.Image.kpmg.buyPolicy} />
          <Text style={styles.txtPolicyText1}>{i18n.t('SOBP.Title')}</Text>
          <Text style={styles.txtPolicyText2}>{i18n.t('SOBP.PolicyQuestion')}</Text>
        </View>
        <ScrollView>
          <View style={styles.inStepPolicy}>
            <StepIndicator
              customStyles={customStyles}
              currentPosition={currentPosition}
              labels={labels}
            />
          </View>
          <View style={[styles.containerForm]}>
            <Text style={styles.introduceText1}>
              {i18n.t('SOBP.IntroPolicyTravel')}
            </Text>
            <View style={styles.groupItemsForm}>
              <Text style={styles.txtLabel}>
                {i18n.t('SOBP.StartDate')}
              </Text>
              <DatePicker
                style={styles.datepickerContainer}
                date={startDate}
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
                onDateChange={this.calEndDate}
              />
            </View>
            <View style={styles.groupItemsForm}>
              <Text style={styles.txtLabel}>
                {i18n.t('SOBP.EndDate')}
              </Text>
              <View style={styles.viewTextEndDate}>
                <Text style={styles.endDate}>{endDate.toString('DD/MM/YYYY')}
                </Text>
              </View>
            </View>
            <Button style={styles.btnNext} onPress={this._openTapNext} text={i18n.t('SOBP.Next')} />
            <TextButton textStyle={styles.btnLearnMore} onPress={this._openTapLearnMore} text={i18n.t('SOBP.LearnMore')} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default BuyPolicyStartDate;
