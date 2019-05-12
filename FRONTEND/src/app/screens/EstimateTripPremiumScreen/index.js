// Import external libs
import React, { Component } from 'react';
// Import UI
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import {
  View, Text, Image, ScrollView, Button, TextInput,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';
import ExpandableView from '../../components/ExpandableView';

const labels = [];


class EstimateTripPremiumScreen extends Component {
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
    this.state = { textLastName: '', TextInputDisableStatus: true, date: '2016-05-15' };
  }

  onPageChange(position) {
  }

  _openTapConfirm() {
    navigator.navigate('CSBankAccSetup');
  }

  _openTapEditPersonal() {
    this.setState({ TextInputDisableStatus: false });
  }

  _openTapEditContact() {

  }

  _openTapEditBankAcc() {

  }

  _openTapEditPolicy() {

  }

  render() {
    const {
      textLastName, TextInputDisableStatus,
    } = this.state;

    const data = [{
      value: 'Singapore',
    }, {
      value: 'Indonesian',
    }, {
      value: 'Laotian ',
    }, {
      value: 'Malaysian ',
    }, {
      value: 'Burmese ',
    }, {
      value: 'Filipino ',
    }];

    return (
      // wrap content
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.ctnEstimateTripHeader}>
            <Image style={styles.iconEstimateTrip} source={theme.Image.Ic.iconCalculator} />
            <Text style={styles.txtMyEstimateTripText}>{i18n.t('ET.EstimateTripTitle')}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txtLabelTitle}>{i18n.t('ET.ETPTxtEstimate')}</Text>
          </View>
          <View style={styles.container}>
            <View style={[styles.containerForm]}>
              <View style={styles.divider}>
                <View style={styles.groupItemsTitle}>
                  <Text style={styles.txtLabelTitle}>{i18n.t('ET.LBLDestination')}</Text>
                  <Text style={styles.txtLabelTitle}>{i18n.t('ET.LBLArrivalDate')}</Text>
                </View>
              </View>
              <View style={styles.groupItemsForm}>
                <View style={styles.iconBlankContainer}>
                  <Image
                    style={styles.iconBlank}
                    source={theme.Image.Ic.iconBlankCircleWhite}
                  />
                </View>
                <View style={styles.nameViewContainer}>
                  <Text style={styles.nameCountry}>SINGAPORE</Text>
                </View>
              </View>

              <View style={styles.clearBoxContainer}>
                <View style={styles.clearBox} />
              </View>

              <View style={styles.groupItemsForm}>
                <View style={styles.iconBlankContainer}>
                  <Image
                    style={styles.iconBlank}
                    source={theme.Image.Ic.iconBlankCircleWhite}
                  />
                </View>
                <View style={styles.nameViewContainer}>
                  <View style={styles.viewDropDownBank}>
                    <Dropdown
                      containerStyle={styles.containerDD}
                      inputContainerStyle={styles.InputDD}
                      data={data}
                      value="Destination"
                    />
                  </View>
                  <View style={styles.viewDateTimePicker}>
                    <DatePicker
                      style={{
                        width: 100, backgroundColor: theme.Color.White, height: 50, borderRadius: 5, justifyContent: 'space-evenly',
                      }}
                      date={this.state.date}
                      mode="date"
                      placeholder="select date"
                      format="YYYY-MM-DD"
                      minDate="2016-05-01"
                      maxDate="2016-06-01"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      showIcon={false}
                      customStyles={{
                        dateInput: {
                          height: 50,
                          borderRadius: 5,
                          flexDirection: 'row',
                          paddingHorizontal: 10,
                          borderColor: theme.Color.White,
                          justifyContent: 'space-evenly',
                        },
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(date) => { this.setState({ date }); }}
                    />
                  </View>
                </View>
              </View>

              <View style={styles.clearBoxContainer}>
                <View style={styles.clearBox} />
              </View>

              <View style={styles.groupItemsForm}>
                <View style={styles.iconBlankContainer}>
                  <Image
                    style={styles.iconBlank}
                    source={theme.Image.Ic.iconAdd}
                  />
                </View>
                <View style={styles.nameViewContainer}>
                  <Text style={styles.nameDestination}>Add destination</Text>
                </View>
              </View>

              <View style={styles.clearBoxContainer}>
                <View style={styles.clearBox} />
              </View>

              <View style={styles.groupItemsForm}>
                <View style={styles.iconBlankContainerEnd}>
                  <Image
                    style={styles.iconBlank}
                    source={theme.Image.Ic.iconBlankCircleWhite}
                  />
                </View>
                <View style={styles.nameViewContainer}>
                  <Text style={styles.nameCountry}>SINGAPORE</Text>
                </View>
                <View style={styles.viewDateTimePickerEnd}>
                  <DatePicker
                    style={{
                      width: 100, backgroundColor: theme.Color.White, height: 50, borderRadius: 5, justifyContent: 'space-evenly',
                    }}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    showIcon={false}
                    customStyles={{
                      dateInput: {
                        height: 50,
                        borderRadius: 5,
                        flexDirection: 'row',
                        paddingHorizontal: 10,
                        borderColor: theme.Color.White,
                        justifyContent: 'space-evenly',
                      },
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => { this.setState({ date }); }}
                  />
                </View>
              </View>

              <View style={styles.container}>
                <View style={[styles.containerForm]}>
                  <Text style={styles.txtLabelQuestion}>{i18n.t('ET.LBLQuestion')}</Text>
                  <View style={styles.groupItemsForm}>
                    <View style={styles.iconStepContainer}>
                      <Image
                        style={styles.iconStep}
                        source={theme.Image.Ic.iconStep}
                        Text="1"
                      />
                    </View>
                    <View style={styles.stepViewContainer}>
                      <Text style={styles.txtLabelStep}>{i18n.t('ET.LBLItemTitleEstimate1')}</Text>
                      <View style={styles.viewStep}>
                        <Text style={styles.txtLabelDollar}>20$</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.groupItemsForm}>
                    <View style={styles.iconStepContainer}>
                      <Image
                        style={styles.iconStep}
                        source={theme.Image.Ic.iconStep}
                        Text="1"
                      />
                    </View>
                    <View style={styles.stepViewContainer}>
                      <Text style={styles.txtLabelStep}>{i18n.t('ET.LBLItemTitleEstimate1')}</Text>
                      <View style={styles.viewStep}>
                        <Text style={styles.txtLabelDollar}>See daily premium rates</Text>
                      </View>
                    </View>
                  </View>

                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.groupFormExpense}>
            <ExpandableView
              style={styles.itemExpense}
              title={<Text style={styles.txtDailyPremium}>Daily premium</Text>}
              titleContainerStyle={styles.txtTitleDailyPremium}
            >
              <View style={styles.ctnContentPremium}>
                <View style={styles.ctnLeftPremium}>
                  <Text style={styles.txtWhiteLeftHugest}>A</Text>
                </View>
                <View style={styles.ctnMiddlePremium}>
                  <Text style={styles.txtWhiteLeftSmaller}>{i18n.t('ET.Premium1')}</Text>
                </View>
                <View style={styles.ctnRightPremium}>
                  <Text style={styles.txtWhiteLeftBoldBig}>{i18n.t('ET.MoneyPremium35')}</Text>
                </View>
              </View>

              <View style={styles.ctnContentPremium}>
                <View style={styles.ctnLeftPremium}>
                  <Text style={styles.txtWhiteLeftHugest}>B</Text>
                </View>
                <View style={styles.ctnMiddlePremium}>
                  <Text style={styles.txtWhiteLeftSmaller}>{i18n.t('ET.Premium2')}</Text>
                </View>
                <View style={styles.ctnRightPremium}>
                  <Text style={styles.txtWhiteLeftBoldBig}>{i18n.t('ET.MoneyPremium45')}</Text>
                </View>
              </View>

              <View style={styles.ctnContentPremium}>
                <View style={styles.ctnLeftPremium}>
                  <Text style={styles.txtWhiteLeftHugest}>C</Text>
                </View>
                <View style={styles.ctnMiddlePremium}>
                  <Text style={styles.txtWhiteLeftSmaller}>{i18n.t('ET.Premium3')}</Text>
                </View>
                <View style={styles.ctnRightPremium}>
                  <Text style={styles.txtWhiteLeftBoldBig}>{i18n.t('ET.MoneyPremium7')}</Text>
                </View>
              </View>
            </ExpandableView>
          </View>
          <View style={styles.groupItemsFormEnd}>
            <View style={styles.viewEndDestination}>
              <Image
                style={styles.iconDestination}
                source={theme.Image.Ic.iconBlankCircleWhite}
                Text="1"
              />
              <Text style={styles.txtLabelDestination}>Destinate</Text>
              <Text style={styles.txtLabelPremiumEstimate}>Premium Estimate  S$0</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

export default EstimateTripPremiumScreen;
