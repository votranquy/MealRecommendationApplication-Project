// Import external libs
import React, { Component } from 'react';
// Import UI
import {
  View, Text, Button, Image, ScrollView, TouchableOpacity,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
// Import internal logics
import i18n from '../../../i18n';
import navigator from '../../../navigator';
import theme from '../../../theme';

class MyClaimScreen extends Component {
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
      listMyClaim: [{
        claimNumber: '123456',
        claimType: 'MEDICAL EXPENSES',
        claimPayoutAmount: '33',
        claimStatus: 'Approved',
        tripName: 'Jan Trip 1',
        placeOfIncident: 'London, UK',
        dateOfIncident: '24/01/2017',
        detailOfIncident: 'Fractured hand, tripped on uneven pavement',
        expense: [{
          typeOfExpense: 'oversea medical expense',
          totalExpensesIncurred: '200',
        }, {
          typeOfExpense: 'Permanent disability (personal accident)',
          totalExpensesIncurred: '200',
        }],
      }, {
        claimNumber: '123457',
        claimType: 'OVERSEAS HOSPITALIZATIONS DAILY BENEFITS',
        claimPayoutAmount: '',
        claimStatus: 'Pending',
        tripName: 'Jan Trip 1',
        placeOfIncident: 'London, UK',
        dateOfIncident: '24/01/2017',
        detailOfIncident: 'Fractured hand, tripped on uneven pavement',
        expense: [{
          typeOfExpense: 'oversea medical expense',
          totalExpensesIncurred: '200',
        }, {
          typeOfExpense: 'Permanent disability (personal accident)',
          totalExpensesIncurred: '200',
        }],
      }, {
        claimNumber: '123458',
        claimType: 'LOSS OR DAMAGE OF BELONGINGS',
        claimPayoutAmount: '',
        claimStatus: 'Rejected',
        tripName: 'Jan Trip 1',
        placeOfIncident: 'London, UK',
        dateOfIncident: '24/01/2017',
        detailOfIncident: 'Fractured hand, tripped on uneven pavement',
        expense: [{
          typeOfExpense: 'oversea medical expense',
          totalExpensesIncurred: '200',
        }, {
          typeOfExpense: 'Permanent disability (personal accident)',
          totalExpensesIncurred: '200',
        }],
      }],
    };
  }

  _openTapNext() {
    navigator.navigate('SCWhatWentWrong');
  }

  _openTapLearnMore() {

  }

  render() {
    const {
      listMyClaim,
    } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.ctnMyClaimHeader}>
            <Image style={styles.iconBuyMyClaim} source={theme.Image.kpmg.buyPolicy} />
            <Text style={styles.txtMyClaimText1}>{i18n.t('MC.Title')}</Text>
          </View>

          {/* Main content */}
          <View style={styles.container}>

            {/* Filter button follow claim status */}
            <View style={styles.inStepMyClaim}>
              <Text style={styles.filterTextMyClaim}>{i18n.t('MC.ViewBy')}</Text>
              <Button
                style={styles.filterButtonMyClaim}
                text={i18n.t('MC.All')}
              />
              <Button
                style={styles.filterButtonMyClaim}
                text={i18n.t('MC.Approved')}
              />
              <Button
                style={styles.filterButtonMyClaim}
                text={i18n.t('MC.Pending')}
              />
              <Button
                style={styles.filterButtonMyClaim}
                text={i18n.t('MC.Rejected')}
              />
            </View>

            {/* Component for My Claim */}
            <View style={[styles.containerForm]}>

              {/* Use method map to render claims */}
              {listMyClaim.map((claim, index) => (
                <View key={claim.claimNumber} style={[styles.groupItemsForm]}>
                  <View style={styles.headerItemForm}>
                    <Text>{i18n.t('MC.ClaimNumber')}</Text>
                    <Text style={styles.headerTextForm}>{claim.claimNumber}</Text>
                  </View>
                  <View style={styles.mainItemForm}>
                    <View style={styles.mainItemLeftForm}>
                      <Text style={styles.mainTextLeftForm}>{claim.claimType}</Text>
                    </View>
                    <View style={styles.mainItemRightForm}>

                      {/* Check claim status if equal approved */}
                      {claim.claimStatus === i18n.t('MC.Approved')
                      && (
                        <View style={styles.mainRightForm}>
                          <Text style={styles.mainTextRightTopForm}>
                            S${claim.claimPayoutAmount}
                          </Text>
                          <Image
                            style={[styles.imageIconForm, { tintColor: 'green' }]}
                            source={theme.Image.Ic.Check}
                          />
                        </View>
                      )
                      }

                      {/* Check claim status if equal pending */}
                      {claim.claimStatus === i18n.t('MC.Pending')
                      && (
                        <View style={styles.mainRightForm}>
                          <Image
                            style={[styles.imageIconForm, { tintColor: '#ffdc23' }]}
                            source={theme.Image.Ic.StatusPending}
                          />
                        </View>
                      )
                      }

                      {/* Check claim status if equal rejected */}
                      {claim.claimStatus === i18n.t('MC.Rejected')
                      && (
                        <View style={styles.mainRightForm}>
                          <Image
                            style={[styles.imageIconForm, { tintColor: 'red' }]}
                            source={theme.Image.Ic.StatusRejected}
                          />
                        </View>
                      )
                      }
                      <View style={styles.mainRightForm}>
                        <Text style={styles.mainTextRightBottomForm}>{claim.claimStatus}</Text>
                        <Image
                          style={styles.imageIconForm}
                          source={theme.Image.Ic.ArrowForward}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.mainTripItemForm}>
                    <Text style={styles.mainTripTextForm}>{claim.tripName}</Text>
                  </View>
                  <View style={styles.mainTripItemForm}>
                    <Text style={styles.mainTripTextForm}>{claim.placeOfIncident}</Text>
                  </View>
                  <View style={styles.mainTripItemForm}>
                    <Text style={styles.mainTripTextForm}>{claim.dateOfIncident}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Button to navigate Submit claim screen */}
        <TouchableOpacity style={styles.buttonSubmit} onPress={this._openTapNext}>
          <View style={styles.buttonText}>
            <Text style={styles.textButton}>{i18n.t('MC.SubmitClaim')}</Text>
            <Image
              style={[styles.imageButton]}
              source={theme.Image.Ic.ArrowForward}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default MyClaimScreen;
