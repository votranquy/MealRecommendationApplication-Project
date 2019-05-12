// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View,
  Text,
  Image,
  EButton,
  ScrollView,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';

import dataTrip from './data';
import ScheduleItem from './ScheduleItem';

class TripDetailsScreen extends Component {
  static propsType = {};

  static defaultProps = {};

  static navigationOptions = {
    title: i18n.t('SITxtTitle'),
    headerTitleStyle: styles.headerTitleStyle,
    headerBackground: (
      <Image style={styles.iconMSIG} source={theme.Image.Si.iconMSIG} />
    ),
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container]}>
        <ScrollView>
          <View style={styles.ctnLoginHeader}>
            <Image style={styles.iconLock} source={theme.Image.Si.iconEarth} />
            <Text style={styles.txtTitleScreen}>
              {dataTrip.TripName}
              <Image
                style={styles.iconTitleScreen}
                source={theme.Image.Si.iconEdit}
              />
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.txtDateFrom}>{dataTrip.StartDate}</Text>
              <Image
                style={styles.iconArrowRight}
                source={theme.Image.Si.iconArrowRight}
              />
              <Text style={styles.txtDateTo}>{dataTrip.EndDate}</Text>
            </View>
          </View>

          <View style={styles.scheduleItemCOntainer}>
            {dataTrip.Schedule.map(item => <ScheduleItem item={item} />)}
          </View>

          <View style={styles.totalPaidContainer}>
            <Text style={styles.paidTitle}>{i18n.t('MTD.TotalPremiumPaid')}</Text>
            <Text style={styles.paidValue}>{dataTrip.PremiumPaid}</Text>
          </View>
          <View style={styles.terminated}>
            <Text style={styles.terminatedText}>{i18n.t('MTD.Terminated')}</Text>
          </View>
          <View style={styles.btnClaimMain}>
            <EButton buttonStyle={styles.btnClaimStyle} title={i18n.t('MTD.ButtonText')} type="outline" />
          </View>
        </ScrollView>
        <View style={styles.btnNaviga}>
          <View style={styles.newerContainer}>
            <Text style={styles.newer}>
              <Image style={styles.iconNavFooter} source={theme.Image.Si.iconArrowBack} />
              <Text>{i18n.t('MTD.Newer')}</Text>
            </Text>
          </View>
          <View style={styles.olderContain}>
            <Text style={styles.older}>
              <Text>{i18n.t('MTD.Older')}</Text>
              <Image style={styles.iconNavFooter} source={theme.Image.Si.iconArrowForward} />
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default TripDetailsScreen;
