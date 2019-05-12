/*
  This is template for creating new component, please clone from here for coding easier
*/
// Import external libs
import React, { Component } from 'react';
// Import UI
import { MainFrame } from '../../components';
import { View, Text, Button } from '../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';
import Station from '../components/Station';
import tripData, { FinishedStatus } from './fakeData';

class TripDetails extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { stations, state } = tripData.activeTrip;
    const Status = FinishedStatus;
    const stationsLength = stations.length - 1;
    const message = `${stations[0].arrivalDate} -> ${stations[stationsLength].arrivalDate}`;
    return (
      <MainFrame
        style={styles.container}
        titleImage={theme.Image.Ic.Earth}
        title={i18n.t('MT.Title')}
        message={message}
      />
    );
  }
}

export default TripDetails;
