// Import external libs
import React, { Component } from 'react';
// Import internal logics
import DTShortOrDisruptTrip from './DTShortOrDisruptTrip';
import DTThirdPartyLiability from './DTThirdPartyLiability';
import DTFlightDelayCancel from './flight/DTFlightDelayCancel';
import DTFlightDiversionOverbooking from './flight/DTFlightDiversionOverbooking';
import DTMissConnectingFlight from './flight/DTMissConnectingFlight';
import DTEmgEvacuaAndRepatria from './medical-issue/DTEmgEvacuaAndRepatria';
import DTHospitalDailyBenefit from './medical-issue/DTHospitalDailyBenefit';
import DTMedicalExpense from './medical-issue/DTMedicalExpense';
import DTPermanentDisability from './medical-issue/DTPermanentDisability';
import DTDelayedBaggage from './personal-belong/DTDelayedBaggage';
import DTLossDamageBelong from './personal-belong/DTLossDamageBelong';
import DTLossPassportOrDoc from './personal-belong/DTLossPassportOrDoc';

class ClaimDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      claim,
    } = this.props;

    // Render status components by claim detail
    switch (claim.type) {
      case 0:
        return <DTMedicalExpense claim={claim} />;
      case 1:
        return <DTHospitalDailyBenefit claim={claim} />;
      case 2:
        return <DTPermanentDisability claim={claim} />;
      case 3:
        return <DTEmgEvacuaAndRepatria claim={claim} />;
      case 4:
        return <DTLossDamageBelong claim={claim} />;
      case 5:
        return <DTLossPassportOrDoc claim={claim} />;
      case 6:
        return <DTDelayedBaggage claim={claim} />;
      case 7:
        return <DTFlightDelayCancel claim={claim} />;
      case 8:
        return <DTFlightDiversionOverbooking claim={claim} />;
      case 9:
        return <DTMissConnectingFlight claim={claim} />;
      case 10:
        return <DTShortOrDisruptTrip claim={claim} />;
      case 11:
        return <DTThirdPartyLiability claim={claim} />;
      default:
        return <DTMedicalExpense claim={claim} />;
    }
  }
}

export default ClaimDetail;
