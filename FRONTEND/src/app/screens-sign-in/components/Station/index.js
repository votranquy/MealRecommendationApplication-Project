// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../../components';
import styles from './styles';
import MarkCircle from './MarkCircle';
import StripLine from './StripeLine';
// Import internal logics

class Station extends Component {
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
      style, station, isEnd,
    } = this.props;
    return (
      <View style={[styles.container, style]}>
        <View style={styles.ctnTripDetail}>
          <View style={styles.ctnLocation}>
            <MarkCircle showMark={station.showMark} />
            <Text style={[isEnd ? styles.txtColorLocation : styles.txtLocation]}>
              {station.location}
            </Text>
          </View>
          <Text style={[isEnd ? styles.txtColorArrivalDate : styles.txtArrivalDate]}>
            {station.arrivalDate}
          </Text>
        </View>
        {!isEnd && <StripLine />}
      </View>
    );
  }
}

export default Station;
