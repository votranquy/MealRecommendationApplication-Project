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

    this.icons = {
      approved: theme.Image.Ic.StatusApproved,
      pending: theme.Image.Ic.StatusPending,
      rejected: theme.Image.Ic.StatusRejected,
    };

    this.state = {
      claimNumber: props.claimNumber,
      claimType: props.claimType,
      payoutAmount: props.payoutAmount,
      claimStatus: props.claimStatus,
      tripName: props.tripName,
      incidentPlace: props.incidentPlace,
      incidentDate: props.incidentDate,
    };
  }

  render() {
    const {
      claimNumber,
      claimType,
      payoutAmount,
      claimStatus,
      tripName,
      incidentPlace,
      incidentDate,
    } = this.state;

    const {
      approved,
      pending,
      rejected,
    } = this.icons;

    let statusIcon = '';
    let statusColor = '';
    let payout = '';
    // Render status icon by claim status
    switch (claimStatus) {
      case 'Approved':
        statusIcon = approved;
        statusColor = 'green';
        payout = i18n.t('MCD.currency') + payoutAmount;
        break;
      case 'Pending':
        statusIcon = pending;
        statusColor = '#ffdc23';
        break;
      case 'Rejected':
        statusIcon = rejected;
        statusColor = 'red';
        break;

      default:
    }

    return (
      <View style={styles.containerForm}>
        <View style={styles.groupItemsForm}>
          {/* Claim number */}
          <View style={styles.headerItemForm}>
            <Text>{i18n.t('MCD.LblClaimsNumber')}</Text>
            <Text style={styles.headerTextForm}>{claimNumber}</Text>
          </View>
          <View style={styles.mainItemForm}>
            {/* Claim type */}
            <View style={styles.mainItemLeftForm}>
              <Text style={styles.mainTextLeftForm}>{claimType}</Text>
            </View>
            <View style={styles.mainItemRightForm}>
              {/* Payout amount and status icons */}
              <View style={styles.mainRightForm}>
                <Text style={styles.mainTextRightTopForm}>
                  {payout}
                </Text>
                <Image
                  style={styles.imageIconForm}
                  tintColor={statusColor}
                  source={statusIcon}
                />
              </View>
              {/* Claim status */}
              <View style={styles.mainRightForm}>
                <Text style={styles.mainTextRightBottomForm}>{claimStatus}</Text>
                <Image style={styles.imageIconForm} source={theme.Image.Ic.ArrowForward} />
              </View>
            </View>
          </View>
          <View style={styles.mainTripItemForm}>
            <Text style={styles.mainTripTextForm}>{tripName}</Text>
          </View>
          <View style={styles.mainTripItemForm}>
            <Text style={styles.mainTripTextForm}>{incidentPlace}</Text>
          </View>
          <View style={styles.mainTripItemForm}>
            <Text style={styles.mainTripTextForm}>{incidentDate}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ClaimOverview;
