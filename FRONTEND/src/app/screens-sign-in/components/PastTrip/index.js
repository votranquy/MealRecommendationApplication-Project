// Import external libs
import React, { Component } from 'react';
// Import UI
import { View, Text } from '../../../../components';
import styles from './styles';
// Import internal logics
import { FinishedStatus } from '../../MyTrip/fakeData';

class PastTrip extends Component {
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
    const { pastTrip } = this.props;
    const Status = FinishedStatus;
    return (
      <View style={styles.container}>
        <View style={styles.ctnNamePrice}>
          <Text numberOfLines={1} style={styles.txtNameTrip}>{pastTrip.name}</Text>
          <Text style={styles.txtPriceTrip}>{pastTrip.totalPrice}</Text>
        </View>
        <View style={styles.ctnDateState}>
          <Text style={styles.txtDateTrip}>
            {pastTrip.startDate} - {pastTrip.endDate}
          </Text>
          <Text style={styles.txtState}>{pastTrip.finishedStatus === Status.TERMINATED ? 'Terminated' : 'Completed'} -</Text>
        </View>
      </View>
    );
  }
}

export default PastTrip;
