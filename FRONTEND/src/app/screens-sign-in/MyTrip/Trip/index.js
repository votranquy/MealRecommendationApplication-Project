// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Button, TextButton,
} from '../../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../../i18n';
import Station from '../../components/Station';

class Trip extends Component {
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
    const {
      style, tripData, onButtonUnCoverage,
    } = this.props;

    const { stations } = tripData.activeTrip;
    return (
      <View style={[styles.container, style]}>
        <Text numberOfLines={1} style={styles.txtJanTrip}>{tripData.activeTrip.name}</Text>
        <View style={styles.ctnStations}>
          {stations.map(
            (item, index) => (
              <Station
                station={item}
                isEnd={index === stations.length - 1}
              />
            ),
          )}
        </View>
        {onButtonUnCoverage && (
        <Button
          style={styles.btnUnCoverage}
          textStyle={styles.txtStyBtnUnCoverage}
          text={i18n.t('MT.UnCoverage')}
        />
        )}
        <View>
          <View style={styles.ctnQuotePrice}>
            <Text numberOfLines={1} style={styles.txtPremiumTrip}>{i18n.t('MT.PremiumTrip')}</Text>
            <Text style={styles.txtPayTrip}>{tripData.activeTrip.totalPrice}</Text>
          </View>
          <View style={styles.ctnNoteState}>
            <Text style={styles.txtNote}>
              {i18n.t('MT.NoteTrip')}
            </Text>
            <TextButton
              style={styles.btnEndCoverage}
              textStyle={styles.txtEndCoverage}
              text={i18n.t('MT.EndCoverage')}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Trip;
