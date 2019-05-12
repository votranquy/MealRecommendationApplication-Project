// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View,
  Text,
  Image,
} from '../../../../components';
import styles from './styles';
// Import internal logics
import i18n from '../../../../i18n';
import theme from '../../../../theme';

class ClaimOverview extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      claim,
    } = this.props;

    let statusIcon = '';
    let statusColor = '';
    let payout = '';
    // Render status icon by claim status
    switch (claim.status) {
      case i18n.t('MC.Approved'):
        statusIcon = theme.Image.Ic.StatusApproved;
        statusColor = theme.Color.Green;
        payout = i18n.t('MCD.currency') + claim.payoutAmount;
        break;
      case i18n.t('MC.Pending'):
        statusIcon = theme.Image.Ic.StatusPending;
        statusColor = theme.Color.DarkYellow;
        break;
      case i18n.t('MC.Rejected'):
        statusIcon = theme.Image.Ic.StatusRejected;
        statusColor = theme.Color.Red;
        break;
      default:
    }

    return (
      <View style={styles.container}>
        {/* Claim number */}
        <View style={styles.ctnHeaderItemForm}>
          <Text>{i18n.t('MCD.LblClaimsNumber')}</Text>
          <Text style={styles.txtHeaderForm}>{claim.number}</Text>
        </View>
        <View style={styles.ctnMainItemForm}>
          {/* Claim type */}
          <Text style={styles.txtMainLeftForm}>{claim.type}</Text>
          <View style={styles.ctnMainItemRightForm}>
            {/* Payout amount and status icons */}
            <View style={styles.ctnMainRightForm}>
              <Text style={styles.txtMainRightTopForm}>
                {payout}
              </Text>
              <Image
                style={{ tintColor: statusColor }}
                source={statusIcon}
              />
            </View>
            {/* Claim status */}
            <View style={styles.ctnMainRightForm}>
              <Text style={styles.txtMainRightBottomForm}>{claim.status}</Text>
              <Image style={styles.imgIconForm} source={theme.Image.Ic.ArrowForward} />
            </View>
          </View>
        </View>
        <Text style={styles.txtMainTripForm}>{claim.tripName}</Text>
        <Text style={styles.txtMainTripForm}>{claim.incidentPlace}</Text>
        {claim.incidentDate
          && (
            <Text style={styles.txtMainTripForm}>{claim.incidentDate}</Text>
          )
        }
      </View>
    );
  }
}

export default ClaimOverview;
