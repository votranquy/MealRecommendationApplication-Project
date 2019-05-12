// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Button, Image, ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';

class MyTripsScreen extends Component {
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

    };
  }

  _openTapCoverage() {

  }

  render() {
    const { style } = this.props;
    const {
      birthDate,
    } = this.state;

    return (
      // wrap content
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.ctnMyTripHeader}>
            <Image style={styles.iconEarth} source={theme.Image.Ic.iconEarth} />
            <Text style={styles.txtTitleScreen}>{i18n.t('MT.MyTripTitle')}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.txtJanTrip}>{i18n.t('MT.MTTxtJanTrip1')}</Text>
          </View>
          <View style={styles.container}>
            <View style={styles.address0Container}>
              <View style={styles.iconBlankContainer}>
                <Image
                  style={styles.iconBlank}
                  source={theme.Image.Ic.iconBlankCircle}
                />
              </View>
              <View style={styles.nameAddressContainer}>
                <Text style={styles.nameAddress}>SINGAPORE</Text>
              </View>
              <View style={styles.dateAddressContainer}>
                <Text style={styles.dateAddress}>01/01/2017</Text>
              </View>
            </View>
            <View style={styles.clearBoxContainer}>
              <View style={styles.clearBox} />
            </View>
            <View style={styles.address1Container}>
              <View style={styles.iconBlankContainer}>
                <Image
                  style={styles.iconBlank}
                  source={theme.Image.Ic.iconConfirm}
                />
              </View>
              <View style={styles.nameAddressContainer}>
                <Text style={styles.nameAddressLightBlue}>LONDON, UK</Text>
              </View>
              <View style={styles.dateAddressContainer}>
                <Text style={styles.nameAddressLightBlue}>01/01/2017</Text>
              </View>
            </View>
            <View style={styles.btnClaimMain}>
              <Button style={styles.buttonCoverage} textStyle={styles.textStyleButton} onPress={this._openTapCoverage()} text={i18n.t('MT.MTButton')} />
            </View>
            <View style={styles.totalPaidContainer}>
              <Text style={styles.txtYourTrip}>Your trip premium to date</Text>
              <Text style={styles.paidValue}>S$33</Text>
            </View>
            <View style={styles.txtYourTrip}>
              <Text style={styles.txtEndCoverage}>End coverage</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.txtPastTrip}>{i18n.t('MT.MTTxtPastTrip')}</Text>
          </View>
          <View style={styles.borderPastTrip}>
            <View style={styles.totalItemPastTrip}>
              <Text style={styles.txtContent}>DEC TRIP 2</Text>
              <Text style={styles.paidValueList}>S$25</Text>
            </View>
            <View style={styles.totalItemPastTrip}>
              <View style={styles.dateContainer}>
                <Text style={styles.txtDateFrom}>31/12/2016 </Text>
                <Image
                  style={styles.iconArrowRight}
                  source={theme.Image.Ic.iconArrowRight}
                />
                <Text style={styles.txtDateTo}>01/01/2017 </Text>
              </View>
              <Text style={styles.terminatedText}>Terminated</Text>
            </View>
          </View>
          <View style={styles.borderPastTrip}>
            <View style={styles.totalItemPastTrip}>
              <Text style={styles.txtContent}>DEC TRIP 1</Text>
              <Text style={styles.paidValueList}>S$25</Text>
            </View>
            <View style={styles.totalItemPastTrip}>
              <View style={styles.dateContainer}>
                <Text style={styles.txtDateFrom}>31/12/2016 </Text>
                <Image
                  style={styles.iconArrowRight}
                  source={theme.Image.Ic.iconArrowRight}
                />
                <Text style={styles.txtDateTo}>01/01/2017 </Text>
              </View>
              <Text style={styles.terminatedText}>Completed</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default MyTripsScreen;
