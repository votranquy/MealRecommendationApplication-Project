// Import external libs
import React, { Component } from 'react';
// Import UI
import { MainFrame } from '../../components';
import styles from './styles';
import {
  View, Text,
} from '../../../components';
// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';
import PastTrip from '../components/PastTrip';
import Trip from './Trip';
import Notification from './Notification';
import tripData from './fakeData';

class MyTrip extends Component {
  static propsType = {

  }

  static defaultProps = {

  }

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  _renderTemplateUI = (state) => {
    let message = '';
    let template = '';
    switch (state) {
      case 1:
        template = <Trip tripData={tripData} onButtonUnCoverage />;
        break;
      case 2:
        template = <Trip tripData={tripData} onButtonUnCoverage={false} />;
        break;
      case 3:
        message = i18n.t('MT.NotTravelling');
        template = <Notification message={message} />;
        break;
      case 4:
        message = i18n.t('MT.Suspended');
        template = <Notification message={message} />;
        break;
      case 5:
        message = i18n.t('MT.NotStarted');
        template = <Notification message={message} />;
        break;
      case 6:
        message = i18n.t('MT.Ended');
        template = <Notification message={message} />;
        break;
      default:
        return template;
    }
    return template;
  }

  render() {
    const listPastTrips = tripData.pastTrips;
    return (
      <MainFrame
        style={styles.container}
        titleImage={theme.Image.Ic.Earth}
        title={i18n.t('MT.Title')}
      >
        <View style={styles.ctnContent}>
          {this._renderTemplateUI(2)}
          <View style={styles.ctnPastTrips}>
            <Text style={styles.txtPastTrip}>
              {i18n.t('MT.PastTrips')}
            </Text>
            {listPastTrips.map(pastTrip => <PastTrip pastTrip={pastTrip} />)}
          </View>
        </View>
      </MainFrame>
    );
  }
}

export default MyTrip;
