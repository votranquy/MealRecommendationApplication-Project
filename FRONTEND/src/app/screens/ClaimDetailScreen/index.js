// Import external libs
import React, { Component } from 'react';

// Import UI
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from '../../../components';
import styles from './styles';
import TopBarActions from '../../components/TopBarActions';
import ClaimOverview from './ClaimOverview';
import Expense from '../Expense';

// Import internal logics
import i18n from '../../../i18n';
import theme from '../../../theme';

class ClaimDetailScreen extends Component {
  static navigationOptions = {
    title: 'MSIG',
    headerRight: <TopBarActions />,
  };

  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          claimNumber: '123456',
          claimType: 'MEDICAL EXPENSES',
          payoutAmount: '33',
          claimStatus: 'Approved',
          tripName: 'Jan Trip 1',
          incidentPlace: 'London, UK',
          incidentDate: '24/01/2017',
          incidentDetail: 'Fractured hand, tripped on uneven pavement',
          expenses: [
            {
              expenseType: 'Oversea medical expense',
              totalExpensesIncurred: '200.00',
            },
            {
              expenseType: 'Permanent disability (personal accident)',
              totalExpensesIncurred: '200.00',
            },
          ],
        },
        {
          claimNumber: '123456',
          claimType: 'OVERSEAS HOSPITALIZATIONS DAILY BENEFITS',
          payoutAmount: '33',
          claimStatus: 'Pending',
          tripName: 'Jan Trip 1',
          incidentPlace: 'London, UK',
          incidentDate: '24/01/2017',
          incidentDetail: 'Fractured hand, tripped on uneven pavement',
          expenses: [
            {
              expenseType: 'Oversea medical expense',
              totalExpensesIncurred: '200.00',
            },
            {
              expenseType: 'Permanent disability (personal accident)',
              totalExpensesIncurred: '200.00',
            },
          ],
        },
        {
          claimNumber: '123456',
          claimType: 'LOSS OR DAMAGE OF BELONGINGS',
          payoutAmount: '33',
          claimStatus: 'Rejected',
          tripName: 'Jan Trip 1',
          incidentPlace: 'London, UK',
          incidentDate: '24/01/2017',
          incidentDetail: 'Fractured hand, tripped on uneven pavement',
          expenses: [
            {
              expenseType: 'Oversea medical expense',
              totalExpensesIncurred: '200.00',
            },
            {
              expenseType: 'Permanent disability (personal accident)',
              totalExpensesIncurred: '200.00',
            },
          ],
        },
      ],
      currentIndex: 0,
    };
  }

  render() {
    const {
      data,
      currentIndex,
    } = this.state;

    const {
      claimNumber,
      claimType,
      payoutAmount,
      claimStatus,
      tripName,
      incidentPlace,
      incidentDate,
      incidentDetail,
      expenses,
    } = data[currentIndex];
    return (
      // wrap content
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.ctnHeader}>
              <Image
                style={styles.iconBuyPolicy}
                source={theme.Image.kpmg.myClaims}
              />
              <Text style={styles.txtHeaderTitle}>
                {i18n.t('MCD.TxtHeaderTitle')}
              </Text>
            </View>
            <View style={styles.containerClaim}>
              {/* Claim Overview */}
              <ClaimOverview
                claimNumber={claimNumber}
                claimType={claimType}
                claimStatus={claimStatus}
                payoutAmount={payoutAmount}
                tripName={tripName}
                incidentPlace={incidentPlace}
                incidentDate={incidentDate}
              />
              {/* Incident Details */}
              <View style={styles.containerGroupItems}>
                <Text style={styles.lblGroupItems}>
                  {i18n.t('MCD.LblIncidentDetail')}
                </Text>
                <Text style={styles.txtGroupItems}>
                  {incidentDetail}
                </Text>
              </View>
              {/* Loop Expenses */}
              {expenses.map((expense, index) => (
                <View
                  key="index"
                  style={styles.containerExpense}
                >
                  <Expense
                    style = {styles.expenseItems}
                    title={i18n.t('MCD.LblExpense') + (index + 1)}
                  >
                    <Text style={styles.lblGroupItems}>
                      {i18n.t('MCD.LblExpenseType')}
                    </Text>
                    <Text style={styles.txtGroupItems}>
                      {expense.expenseType}
                    </Text>
                    <Text style={styles.lblGroupItems}>
                      {i18n.t('MCD.LblExpenseIncurred')}
                    </Text>
                    <Text style={styles.txtGroupItems}>
                      {i18n.t('MCD.currency') + expense.totalExpensesIncurred}
                    </Text>
                  </Expense>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.containerNavigator}>
          <TouchableOpacity style={styles.buttonImage}>
            <Image
              style={styles.buttonIcon}
              source={theme.Image.Ic.ArrowBack}
              tintColor="white"
            />
            <Text style={styles.buttonTitle}>
              {i18n.t('MCD.BtnNewer')}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonImage}>
            <Text style={styles.buttonTitle}>
              {i18n.t('MCD.BtnOlder')}
            </Text>
            <Image
              style={styles.buttonIcon}
              source={theme.Image.Ic.ArrowForward}
              tintColor="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ClaimDetailScreen;
